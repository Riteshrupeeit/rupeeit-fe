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
        <section className="bg-[#0A0A0A] py-24 px-6 md:px-12 lg:px-24 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-[48px] max-w-[1280px] mx-auto min-h-[700px]">
                {/* Text Side (Frame 34407 + List) */}
                <div className="flex flex-col items-start gap-[32px] w-full lg:w-[500px] flex-none">
                    {/* Header (Frame 34407) */}
                    <div className="flex flex-col items-start gap-[20px] self-stretch">
                        <h2 
                            className="text-[#FAFAFA] font-['Crimson_Text'] italic font-normal text-5xl md:text-[80px] leading-[1] md:leading-[80px] flex items-center"
                            style={{ width: '100%', height: 'auto' }}
                        >
                            Stay informed. Effortlessly.
                        </h2>
                        
                        {/* Frame 34400 */}
                        <div className="flex flex-col items-center p-0 w-full lg:w-[480px]">
                            {/* Hidden text */}
                            <p className="hidden text-white font-['Poppins'] text-[16px] leading-[24px]">
                                Artha doesn't give you 200 articles.
                            </p>
                            <p className="text-[rgba(255,255,255,0.6)] font-['Poppins'] font-normal text-[14px] md:text-[16px] leading-[24px] flex items-center self-stretch">
                                4 touchpoints a day — your markets, your money, on autopilot.
                            </p>
                        </div>

                        {/* Hidden Link/Button from Figma if needed, but not in screenshot */}
                        <button className="hidden flex-row justify-center items-center p-[12px_20px] gap-[10px] w-[156px] h-[48px] bg-[rgba(255,255,255,0.1)] rounded-[8px]">
                            <span className="text-white font-['Roboto_Mono'] font-medium text-[12px] uppercase">MORE ABOUT ARTHA</span>
                        </button>
                    </div>

                    {/* List Container */}
                    <div className="flex flex-col items-start p-0 self-stretch">
                        {listItems.map((item, index) => (
                            <div 
                                key={index} 
                                className={`box-border flex flex-row justify-center items-start py-[16px] pr-[32px] pl-0 gap-[24px] self-stretch ${index !== 0 ? 'border-t border-[rgba(255,255,255,0.2)]' : ''}`}
                            >
                                <span 
                                    className="text-[28px] font-['Crimson_Text'] font-bold leading-[36px] flex-none"
                                    style={{
                                        background: 'linear-gradient(180deg, #3177DF 0%, #F08FE9 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    {item.number}
                                </span>
                                <div className="flex flex-col justify-center items-start p-0 gap-[6px] flex-grow">
                                    <h3 className="text-white font-['Crimson_Text'] text-[20px] font-normal leading-[1.2] self-stretch">
                                        {item.title}
                                    </h3>
                                    <p className="text-[rgba(255,255,255,0.6)] font-['Poppins'] text-[14px] leading-[20px] self-stretch">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Side (Features carousel v1) */}
                <div className="flex flex-col items-start p-0 gap-[20px] w-full lg:w-[600px] self-stretch flex-none">
                    <div 
                        className="flex flex-col items-end p-[20px] gap-[10px] w-full h-[600px] md:h-[680px] rounded-[30px] overflow-hidden relative"
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
