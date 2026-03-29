
const MoneyMattersCard = ({ title, description, icon: Icon, color }) => {
    return (
        <div className="flex flex-col items-start p-[40px_20px_40px_0px] gap-6 w-full min-w-[265px] h-[220px] relative transition-all duration-300 group">
            {/* Top Gradient Line */}
            <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r ${color} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            {/* Icon Slot */}
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
                {Icon ? <Icon /> : (
                    <div className="w-full h-full flex items-center justify-center text-white">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
                       </svg>
                    </div>
                )}
            </div>

            {/* Content Group */}
            <div className="flex flex-col items-start gap-5 self-stretch">
                <h3 className="text-white font-['Crimson_Text'] text-2xl font-normal leading-none self-stretch">
                    {title}
                </h3>
                <p className="text-white/60 font-['Poppins'] text-base font-normal leading-6 self-stretch">
                    {description}
                </p>
            </div>
        </div>
    );
};

const MoneyMatters = () => {
    const moneyMatters = [
        {
            title: "Stocks",
            description: "Real-time data and AI analysis on every listed company.",
            color: "from-[#3B82F6] to-[#8B5CF6]"
        },
        {
            title: "Mutual Funds",
            description: "NAV tracking, SIP insights, category comparisons.",
            color: "from-[#3B82F6] to-[#8B5CF6]"
        },
        {
            title: "Commodities",
            description: "Gold, silver, crude — with global context.",
            color: "from-[#3B82F6] to-[#8B5CF6]"
        },
        {
            title: "Startups & IPOs",
            description: "Funding rounds, GMP, listing performance.",
            color: "from-[#3B82F6] to-[#8B5CF6]"
        },
        {
            title: "Currencies",
            description: "USD/INR and forex moves that impact your portfolio.",
            color: "from-[#3B82F6] to-[#8B5CF6]"
        },
        {
            title: "News",
            description: "Not 200 articles. The 5 that matter to your money.",
            color: "from-[#3B82F6] to-[#8B5CF6]"
        },
        {
            title: "Portfolio",
            description: "Track your holdings and overall performance in one place.",
            color: "from-[#3B82F6] to-[#8B5CF6]"
        },
        {
            title: "Watchlist",
            description: "Save, monitor, and act on opportunities instantly.",
            color: "from-[#3B82F6] to-[#8B5CF6]"
        }
    ];

    return (
        <section className="bg-[#0A0A0A] py-24 px-4 md:px-8 lg:px-12">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <div className="mb-20 text-center">
                    <h2 className="text-[#FAFAFA] font-['Crimson_Text'] italic font-normal text-5xl md:text-[80px] leading-tight max-w-[900px] mx-auto">
                        Everything that matters to your money in one place.
                    </h2>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {/* Top 4 Cards */}
                    {moneyMatters.slice(0, 4).map((item, index) => (
                        <MoneyMattersCard key={index} {...item} />
                    ))}
                </div>

                {/* Optional Chart Placeholder (based on image) */}
                {/* <div className="my-20 w-full aspect-[16/7] bg-[#111] rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden relative">
                    <img 
                      src="/img/artha_section/chart_preview.png" 
                      alt="Market Chart Preview" 
                      className="w-full h-full object-cover opacity-80"
                      onError={(e) => {
                          e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-white/20 font-['Poppins'] tracking-widest uppercase text-xs">Market Chart Interface</span>
                    </div>
                </div> */}

                {/* Bottom 4 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {moneyMatters.slice(4, 8).map((item, index) => (
                        <MoneyMattersCard key={index + 4} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MoneyMatters;
