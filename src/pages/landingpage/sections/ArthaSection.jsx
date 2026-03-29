import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ArthaSection = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(card, 
                { opacity: 0, y: 50 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8, 
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });
    }, []);

    const features = [
        { src: "/img/artha_section/feature1.png", alt: "70+ live data points, every minute. Indian indices, global markets, sectors, commodities, forex, FII/DII flows — all refreshed every 60 seconds." },
        { src: "/img/artha_section/feature2.png", alt: "6 AI agents, one verdict. Not one model guessing. Six specialist agents evaluate independently. A consensus engine delivers confidence-weighted answers with reasoning." },
        { src: "/img/artha_section/feature3.png", alt: "200 articles in. 3–5 insights out. Rule-based credibility gate filters 60–70% noise instantly. AI scoring engine catches the rest. Only what matters reaches you." },
        { src: "/img/artha_section/feature4.png", alt: "Built for Indian markets. Hinglish NLP. Indian regulations. Indian tax context. This isn't global AI adapted for India — it's AI built for India from scratch." }
    ];

    return (
        <section ref={sectionRef} className="bg-[#0A0A0A] py-24 px-4 md:px-8 lg:px-12 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-blue-600/5 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-purple-600/5 blur-[150px] rounded-full"></div>
            </div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                {features.map((feature, index) => (
                    <div 
                        key={index}
                        ref={el => cardsRef.current[index] = el}
                        className="relative overflow-hidden group shadow-2xl transition-all duration-500 hover:scale-[1.01] hover:shadow-white/5"
                    >
                        <img 
                            src={feature.src} 
                            alt={feature.alt}
                            className="w-full h-auto block"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ArthaSection;
