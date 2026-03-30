import React from 'react';

const StayInformed = () => {
    const listItems = [
        {
            number: "01",
            title: "Morning briefing",
            description: "Start your day with key market cues, top news, and what’s trending with clear impact on your money."
        },
        {
            number: "02",
            title: "During day",
            description: "Track live market moves, breaking news, and emerging trends with Artha explaining what’s driving them."
        },
        {
            number: "03",
            title: "Market close",
            description: "Understand what moved, why it mattered, and how it impacted your portfolio in seconds."
        },
        {
            number: "04",
            title: "Evening summary",
            description: "Wrap up with key takeaways, trending developments, and what to watch next powered by Artha."
        }
    ];

    return (
        <section className="bg-[#0A0A0A] py-16 md:py-24 px-6 md:px-12 lg:px-24 w-full overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-[48px] max-w-[1280px] mx-auto min-h-fit lg:min-h-[700px]">
                {/* Text Side (Frame 34407 + List) */}
                <div className="flex flex-col items-start gap-8 w-full lg:flex-1 lg:max-w-[500px]">
                    {/* Header (Frame 34407) */}
                    <div className="flex flex-col items-start gap-5 self-stretch w-full">
                        <h2 
                            className="text-[#FAFAFA] font-['Crimson_Text'] italic font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.1] w-full"
                        >
                            Stay informed. Effortlessly.
                        </h2>
                        
                        {/* Frame 34400 */}
                        <div className="flex flex-col items-start gap-1 w-full lg:max-w-[480px]">
                            <p className="text-[rgba(255,255,255,0.6)] font-['Poppins'] font-normal text-base md:text-lg leading-relaxed w-full break-words">
                                4 touchpoints a day — your markets, your money, on autopilot.
                            </p>
                        </div>

                        <button className="hidden sm:flex flex-row justify-center items-center px-5 py-3 gap-2 w-[156px] h-12 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                            <span className="text-white font-['Roboto_Mono'] font-medium text-xs uppercase tracking-wider">MORE ABOUT ARTHA</span>
                        </button>
                    </div>

                    {/* List Container */}
                    <div className="flex flex-col items-start p-0 self-stretch w-full">
                        {listItems.map((item, index) => (
                            <div 
                                key={index} 
                                className={`box-border flex flex-row justify-start items-start py-4 pr-8 pl-0 gap-6 self-stretch ${index !== 0 ? 'border-t border-[rgba(255,255,255,0.1)]' : ''}`}
                            >
                                <span 
                                    className="text-2xl md:text-3xl font-['Crimson_Text'] font-bold leading-tight shrink-0"
                                    style={{
                                        background: 'linear-gradient(180deg, #3177DF 0%, #F08FE9 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    {item.number}
                                </span>
                                <div className="flex flex-col justify-start items-start p-0 gap-1.5 flex-grow">
                                    <h3 className="text-white font-['Crimson_Text'] text-lg md:text-xl font-normal leading-snug self-stretch">
                                        {item.title}
                                    </h3>
                                    <p className="text-[rgba(255,255,255,0.6)] font-['Poppins'] text-sm md:text-base leading-snug self-stretch">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Side (Features carousel v1) */}
                <div className="flex flex-col items-center justify-center w-full lg:flex-1 lg:max-w-[600px] aspect-square md:aspect-[4/5] lg:aspect-auto lg:h-[680px] rounded-[30px] overflow-hidden relative">
                    <div 
                        className="w-full h-full rounded-[30px] overflow-hidden relative"
                        style={{
                            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06))',
                        }}
                    >
                        <img 
                            src="/img/stay_informed_phone.jpg" 
                            alt="Artha Notifications" 
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StayInformed;
