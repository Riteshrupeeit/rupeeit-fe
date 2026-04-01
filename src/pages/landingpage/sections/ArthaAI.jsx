import React, { useState, useEffect, useRef } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { gsap } from 'gsap';

const ArthaAI = () => {
    const [typedText, setTypedText] = useState('');
    const [isTypingFinished, setIsTypingFinished] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    
    const answerRef = useRef(null);
    const headerRef = useRef(null);
    const contentRef = useRef(null);
    const statsRef = useRef(null);
    const footerRef = useRef(null);

    const fullQuestion = "How TCS performed today ?";

    useEffect(() => {
        let isCancelled = false;
        let timeline;
        
        const runLoop = async () => {
            if (isCancelled) return;

            // 1. Reset everything
            setTypedText('');
            setIsTypingFinished(false);
            setShowAnswer(false);
            gsap.set(answerRef.current, { opacity: 0, y: 40, scale: 0.95 });
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (isCancelled) return;

            // 2. Typing question
            for (let i = 0; i <= fullQuestion.length; i++) {
                if (isCancelled) return;
                setTypedText(fullQuestion.slice(0, i));
                await new Promise(resolve => setTimeout(resolve, 50));
            }

            // 3. Pause & signal typing finished
            await new Promise(resolve => setTimeout(resolve, 800));
            if (isCancelled) return;
            setIsTypingFinished(true);
            setShowAnswer(true);

            // 4. Staggered reveal of answer (handled by the timeline)
            timeline = gsap.timeline({
                onComplete: async () => {
                    if (isCancelled) return;
                    
                    // 5. Wait for 1 full second after answer is completely revealed
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    if (isCancelled) return;

                    // 6. Fade out answer smoothly
                    gsap.to(answerRef.current, { 
                        opacity: 0, 
                        y: 30, 
                        duration: 0.8, 
                        ease: "power2.in",
                        onComplete: () => {
                            if (!isCancelled) runLoop(); // Restart
                        }
                    });
                }
            });

            timeline.fromTo(answerRef.current, 
                { opacity: 0, y: 40, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power4.out" }
            );

            timeline.fromTo(headerRef.current,
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
                "-=0.6"
            );

            timeline.fromTo(contentRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                "-=0.4"
            );

            if (statsRef.current) {
                timeline.fromTo(statsRef.current.children,
                    { opacity: 0, scale: 0.8, y: 20 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)" },
                    "-=0.4"
                );
            }

            timeline.fromTo(footerRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1, ease: "power1.inOut" },
                "-=0.2"
            );
        };

        runLoop();

        return () => {
            isCancelled = true;
            if (timeline) timeline.kill();
        };
    }, []);

    // Remove the separate showAnswer effect to avoid conflicts
    /* 
    useEffect(() => {
        if (showAnswer) {
            ...
        }
    }, [showAnswer]);
    */

    return (
        <section className="bg-[#0A0A0A] py-20 px-4 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Horizontal Divider Top */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[rgba(250,250,250,0.1)]" />

            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3177DF10] blur-[150px] rounded-full -z-1" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#F08FE910] blur-[150px] rounded-full -z-1" />

            <div className="flex flex-col items-center justify-center max-w-[776px] w-full relative z-10">
                {/* Logo Group */}
                <div className="mb-6 relative w-20 h-20 flex items-center justify-center">
                    <img 
                        src="/img/artha/artha_logo.png" 
                        alt="Artha Logo" 
                        className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-500 cursor-pointer"
                    />
                </div>

                {/* Title */}
                <h2 className="text-[#FAFAFA] font-['Crimson_Text'] italic font-normal text-6xl md:text-[100px] leading-tight md:leading-[100px] mb-8 text-center">
                    Ask anything.
                </h2>

                {/* Description - Combined Text with Gradient on Artha */}
                <div className="max-w-[581px] text-center mb-12">
                    <p className="font-['Poppins'] font-semibold text-lg md:text-xl leading-[24px] uppercase md:normal-case">
                        <span 
                            className="bg-gradient-to-r from-[#3177DF] to-[#F08FE9] bg-clip-text text-transparent inline-block mr-1"
                        >
                            Artha
                        </span>
                        <span className="text-white/80">
                            your AI financial intelligence layer that analyzes markets, news, and data to deliver accurate, data-backed and personalized answers.
                        </span>
                    </p>
                </div>

                {/* Search Input Container */}
                <div 
                    className="w-full max-w-[460px] min-h-[69px] px-[24px] py-[16px] flex items-center justify-between rounded-[24px] relative overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10"
                    style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    <div className="flex items-center flex-grow">
                        <input 
                            type="text" 
                            disabled
                            value={typedText}
                            placeholder="" 
                            className="bg-transparent border-none outline-none text-[#FFFFFF] font-['Poppins'] font-medium text-lg w-full placeholder:text-white/30"
                        />
                        {/* Cursor indicator */}
                        {!isTypingFinished && (
                            <span className="w-[3px] h-6 bg-white/60 animate-[pulse_0.8s_infinite] ml-1" />
                        )}
                    </div>

                    {/* Vertical Divider */}
                    <div className="w-[1.5px] h-6 bg-white/10 mx-4" />

                    {/* Arrow Button */}
                    <button 
                        className="w-[42px] h-[42px] flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-white/20 to-white/5 hover:from-white/30 hover:to-white/10 border border-white/10 transition-all duration-300"
                    >
                        <FiArrowUp className="text-white text-xl" />
                    </button>
                    
                    {/* Animated Border Bottom when typing */}
                    {!isTypingFinished && (
                        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#3177DF] to-[#F08FE9] transition-all duration-300 ease-out" style={{ width: `${(typedText.length / fullQuestion.length) * 100}%` }} />
                    )}
                </div>

                {/* Answer Section */}
                <div 
                    ref={answerRef}
                    className={`mt-16 w-full max-w-[680px] opacity-0`}
                >
                    <div className="bg-[#111111]/80 backdrop-blur-3xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
                        {/* Glass Reflections */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full" />

                        <div ref={headerRef} className="flex items-center gap-5 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-lg rotate-3 overflow-hidden">
                                <img 
                                    src="/img/artha/artha_logo.png" 
                                    alt="Artha Logo" 
                                    className="w-8 h-8 object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-white font-['Poppins'] font-semibold text-xl tracking-tight">Artha Intelligence</h3>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    <p className="text-white/40 text-[10px] uppercase font-['Roboto_Mono'] tracking-widest">Live Engine Active</p>
                                </div>
                            </div>
                        </div>

                        <div ref={contentRef} className="space-y-6 font-['Poppins']">
                            <p className="text-white/90 leading-relaxed text-lg italic md:not-italic">
                                <span className="text-[#3177DF] font-semibold underline decoration-[#3177DF]/40 underline-offset-4">TCS rise by 0.52%</span>, beating the market’s 2.09% fall, holding firm near ₹2,350. IT stocks outperformed (down just 0.44%) on a weaker rupee (₹94.76).
                            </p>
                            
                            <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
                                <div className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-2xl border border-white/[0.08] group hover:border-white/20 transition-all duration-300">
                                    <p className="text-white/30 text-[10px] mb-2 uppercase font-['Roboto_Mono'] tracking-widest">Return on Equity</p>
                                    <p className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">52.4%</p>
                                    <div className="mt-3 w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[100%]" />
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-2xl border border-white/[0.08] group hover:border-white/20 transition-all duration-300">
                                    <p className="text-white/30 text-[10px] mb-2 uppercase font-['Roboto_Mono'] tracking-widest">Operating Margins</p>
                                    <p className="text-4xl font-bold text-white tracking-tight">~27%</p>
                                    <p className="text-white/30 text-[11px] mt-2 font-['Poppins'] uppercase tracking-tighter">Segment Leading Performance</p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5 space-y-4">
                                <p className="text-white/70 text-base leading-relaxed">
                                    Despite being 35.6% below its peak, TCS remains strong with 52.4% ROE and ~27% margins.
                                </p>
                            </div>
                        </div>
                        
                        {/* Interactive Footer */}
                        <div ref={footerRef} className="mt-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <button className="text-[11px] font-['Roboto_Mono'] text-[#3177DF] hover:text-[#F08FE9] transition-colors border border-[#3177DF]/20 px-3 py-1.5 rounded-full bg-[#3177DF]/5">
                                    VIEW FULL PERFORMANCE
                                </button>
                                <button className="text-[11px] font-['Roboto_Mono'] text-white/40 hover:text-white transition-colors">
                                    MARKET DOCUMENTS
                                </button>
                            </div>
                            <span className="text-[9px] text-white/10 uppercase font-['Roboto_Mono'] tracking-[3px]">Verified by Artha Engine</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Horizontal Divider Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[rgba(250,250,250,0.1)]" />
        </section>
    );
};

export default ArthaAI;


