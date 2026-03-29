import { Icon } from '@iconify/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const MoneyMattersCard = ({ title, description, iconName, index, cardsRef }) => {
    return (
        <div 
            ref={el => cardsRef.current[index] = el}
            className="flex flex-col items-start p-[40px_20px_40px_0px] gap-[24px] w-full min-w-[265px] md:w-[325.25px] h-[220px] box-border opacity-0 relative"
            style={{ flex: 'none', order: 0, flexGrow: 1 }}
        >
            {/* Top Border (Exact Gradient from Figma: #3177DF to #F08FE9) */}
             <div className="absolute top-0 left-0 w-full h-[1px]" style={{ background: 'linear-gradient(90deg, #3177DF 0%, #F08FE9 100%)' }}></div>

            {/* Icon - Using Iconify as requested */}
            <div className="w-[24px] h-[24px] flex-none order-0 grow-0 flex items-center justify-start text-white opacity-80">
                {iconName ? (
                    <Icon icon={iconName} width="24" height="24" />
                ) : (
                    <div className="w-6 h-6 border border-white/20 rounded-sm"></div>
                )}
            </div>

            {/* Text 1 section */}
            <div className="flex flex-col items-start p-0 gap-[20px] w-full md:w-[305.25px] h-[92px] flex-none order-1 self-stretch grow-0">
                {/* Title - Stocks */}
                <h3 className="w-full md:w-[305.25px] h-[24px] font-['Crimson_Text'] font-normal text-[24px] leading-[100%] text-white flex-none order-0 self-stretch grow-0">
                    {title}
                </h3>

                {/* Description */}
                <p className="w-full md:w-[305.25px] h-[48px] font-['Poppins'] font-normal text-[16px] leading-[24px] text-[rgba(255,255,255,0.6)] flex-none order-1 self-stretch grow-0 overflow-hidden">
                    {description}
                </p>
            </div>
        </div>
    );
};


const ArthaSection = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(card, 
                { opacity: 0, y: 30 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8, 
                    delay: (index % 4) * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });
    }, []);

    const moneyMatters = [
        {
            title: "Stocks",
            description: "Real-time data and AI analysis on every listed company.",
            iconName: "mingcute:stock-line",
        },
        {
            title: "Mutual Funds",
            description: "NAV tracking, SIP insights, category comparisons.",
            iconName: "hugeicons:apple-stocks",
        },
        {
            title: "Commodities",
            description: "Gold, silver, crude — with global context.",
            iconName: "mingcute:diamond-line",
        },
        {
            title: "Startups & IPOs",
            description: "Funding rounds, GMP, listing performance.",
            iconName: "mingcute:rocket-line",
        },
        {
            title: "Currencies",
            description: "USD/INR and forex moves that impact your portfolio.",
            iconName: "mingcute:currency-dollar-line",
        },
        {
            title: "News",
            description: "Not 200 articles. The 5 that matter to your money.",
            iconName: "mingcute:news-line",
        },
        {
            title: "Portfolio",
            description: "Track your holdings and overall performance in one place.",
            iconName: "mingcute:wallet-line",
        },
        {
            title: "Watchlist",
            description: "Save, monitor, and act on opportunities instantly.",
            iconName: "mingcute:eye-line",
        }
    ];


    return (
        <section className="bg-[#0A0A0A] py-24 px-4 md:px-8 lg:px-12 relative overflow-hidden">
             {/* Subtle Glow Effects */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-blue-500 blur-[180px] rounded-full"></div>
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Title */}
                <div className="mb-16 text-center">
                    <h2 className="text-[#FAFAFA] font-['Crimson_Text'] font-normal text-5xl md:text-[80px] leading-[1.1] max-w-[1000px] mx-auto">
                        Everything that matters to your <br className="hidden md:block" /> money in one place.
                    </h2>
                </div>

                {/* Top Row Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-12 mb-12 md:mb-16">
                    {moneyMatters.slice(0, 4).map((item, index) => (
                        <MoneyMattersCard 
                            key={index} 
                            {...item} 
                            index={index} 
                            cardsRef={cardsRef} 
                        />
                    ))}
                </div>

                {/* Main Interactive Chart Section */}
                <div 
                    className="mb-12 md:mb-16 w-full bg-[#0E0E0E] rounded-2xl border border-white/5 overflow-hidden relative shadow-2xl"
                >
                    <img 
                        src="/img/artha_section/chart.png" 
                        alt="Market Chart Intelligence" 
                        className="w-full h-auto block object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                </div>


                {/* Bottom Row Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-12">
                    {moneyMatters.slice(4, 8).map((item, index) => (
                        <MoneyMattersCard 
                            key={index + 4} 
                            {...item} 
                            index={index + 4} 
                            cardsRef={cardsRef} 
                        />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default ArthaSection;


