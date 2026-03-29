import React from 'react';

const AlertCard = ({ title, description }) => {
    return (
        <div 
            className="flex flex-col items-start p-8 gap-[39px] w-full md:w-[328px] h-[200px] rounded-2xl"
            style={{ 
                background: 'linear-gradient(135deg, #2B2B2C 0%, #131313 100%), #2E2E2E',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0
            }}
        >
            <span className="font-['Roboto_Mono'] font-normal text-base leading-[15px] flex items-center tracking-[2px] uppercase text-[rgba(255,255,255,0.45)]">
                {title}
            </span>
            <p className="font-['Poppins'] font-normal text-[18px] leading-[27px] flex items-center text-white">
                {description}
            </p>
        </div>
    );
};

const ArthaAlerts = () => {
    const alerts = [
        {
            title: "Price alerts",
            description: '"Reliance ₹2,800 cross kare toh batao." Instant. WhatsApp pe.'
        },
        {
            title: "Market alerts",
            description: '"Nifty ±1% ho toh bata dena." Your rules. Your notification.'
        },
        {
            title: "Portfolio alerts",
            description: "Your money moves beyond your comfort? You know before the panic starts."
        },
        {
            title: "News alerts",
            description: '"RBI update aaye toh batana." Artha monitors, verifies, delivers.'
        }
    ];

    return (
        <section className="bg-[#0A0A0A] py-24 px-4 w-full">
            <div className="flex flex-col items-center justify-center gap-[100px] max-w-[1360px] mx-auto min-h-[644px]">
                {/* Header Section */}
                <div className="flex flex-col items-center gap-6 max-w-[776px] w-full">
                    <h2 className="w-full text-[#FAFAFA] font-['Crimson_Text'] italic font-normal text-6xl md:text-[100px] leading-[100px] flex items-center justify-center text-center">
                        Never miss a money move.
                    </h2>
                    
                    <div className="flex flex-col items-center max-w-[581px] w-full">
                        <p className="text-white font-['Poppins'] text-base leading-6 text-center">
                            Set alerts the way you think.
                        </p>
                        <p className="text-[rgba(255,255,255,0.6)] font-['Poppins'] text-base leading-6 text-center">
                            Get them where you already are — WhatsApp.
                        </p>
                    </div>

                    <button className="flex flex-row justify-center items-center px-5 py-3 gap-2 w-[163px] h-12 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                        <span className="font-['Roboto_Mono'] font-medium text-xs leading-6 uppercase text-white">
                            MORE ABOUT ALERTS
                        </span>
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="flex flex-col md:flex-row items-start justify-center p-0 gap-4 w-full">
                    {alerts.map((alert, index) => (
                        <AlertCard 
                            key={index}
                            title={alert.title}
                            description={alert.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArthaAlerts;
