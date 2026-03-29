import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ArthaFeatures = () => {
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
        { src: "/img/features/feature1.png", alt: "See what happened" },
        { src: "/img/features/feature2.png", alt: "Understand why" },
        { src: "/img/features/feature3.jpg", alt: "Know what it means for you" },
        { src: "/img/features/feature4.jpg", alt: "Ask in Hinglish. Seriously." }
    ];

    return (
        <section ref={sectionRef} className="bg-[#0A0A0A] py-16 px-4 md:px-8 lg:px-12 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-blue-600/5 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-purple-600/5 blur-[150px] rounded-full"></div>
            </div>

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                {features.map((feature, index) => (
                    <div 
                        key={index}
                        ref={el => cardsRef.current[index] = el}
                        className="relative  overflow-hidden group shadow-lg transition-transform duration-500 hover:scale-[1.01]"
                    >
                        <img 
                            src={feature.src} 
                            alt={feature.alt}
                            className="w-full h-auto object-contain block"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ArthaFeatures;


