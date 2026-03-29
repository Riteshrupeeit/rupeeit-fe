
const cards = [
    {
        title: "Real experts, not influencers",
        description: "SEBI-registered advisors, CAs, and CFAs — people who manage real money, creating content you can trust with yours.",
        bgImage: "/img/learn/bg.png", // Warm brown desert
        illustration: "/img/learn/1stcard.png"
    },
    {
        title: "One concept, 2-3 minutes, done.",
        description: "Short videos that feel like scrolling reels — but every swipe makes you smarter about your money.",
        bgImage: "/img/learn/texture.png", // Light sand dune
        illustration: "/img/learn/2ndcard.png"
    },
    {
        title: "Recommended for you",
        description: "Not random feeds. Videos suggested based on your interests and level — a beginner and an expert never see the same screen.",
        bgImage: "/img/learn/card3_bg.png", // Dark blue-green gradient
        illustration: "/img/learn/3rdcard.png"
    }
]

function Learn() {
    return (
        <section className="bg-black py-20 px-4 flex flex-col items-center">
            {/* Header Section */}
            <div className="max-w-[800px] text-center mb-16">
                <h2 
                    className="italic text-white mb-6"
                    style={{ 
                        fontFamily: "'Crimson Text', serif",
                        fontSize: 'clamp(40px, 8vw, 80px)',
                        fontWeight: 400
                    }}
                >
                    Learn from the best.
                </h2>
                <div className="flex flex-col gap-4 items-center">
                    <p 
                        className="text-white font-semibold text-lg"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Expert videos that actually make sense.
                    </p>
                    <p 
                        className="text-gray-400 max-w-[600px]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Master money with short, expert led videos and build real financial understanding, in your language.
                    </p>
                </div>

                <button 
                    className="mt-8 px-6 py-2 border border-gray-700 rounded-lg text-white uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors"
                    style={{ fontFamily: "'Roboto Mono', monospace" }}
                >
                    More about learn
                </button>
            </div>

            {/* Cards Grid - Responsive layout */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full max-w-[1425px]">
                {cards.map((card, index) => (
                    <div 
                        key={index} 
                        className="relative rounded-[16px] overflow-hidden group w-full max-w-[443px] h-[520px] sm:h-[600px] md:h-[700px]"
                        style={{ 
                            background: '#0F1011'
                        }}
                    >
                        {/* Background Image */}
                        <img 
                            src={card.bgImage} 
                            alt="Background" 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        
                        {/* Linear Overlay */}
                        <div 
                            className="absolute inset-0"
                            style={{ 
                                background: 'linear-gradient(0deg, #0F1011 0%, rgba(15, 16, 17, 0) 100%)'
                            }}
                        />

                        {/* Illustration Container */}
                        <div 
                            className="absolute z-10 flex items-center justify-center pointer-events-none left-5 right-5"
                            style={{ 
                                top: '15%',
                                height: index === 1 ? '53%' : '45%' // Adjust height based on card index
                            }}
                        >
                           
                            
                            {/* The Illustration - Specific to each card */}
                            <img 
                                src={card.illustration} 
                                alt={card.title} 
                                className="relative z-20 w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                        </div>

                        {/* Text Wrapper */}
                        <div 
                            className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 z-20"
                        >
                            {/* Title: Real experts, not influencers */}
                            <h3 
                                className="text-white"
                                style={{ 
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    width: '100%'
                                }}
                            >
                                {card.title}
                            </h3>
                            
                            {/* Description: SEBI-registered advisors... */}
                            <p 
                                style={{ 
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    width: '100%'
                                }}
                            >
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Learn
