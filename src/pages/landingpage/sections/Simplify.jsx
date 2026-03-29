import React from 'react'

function Simplify() {
    return (
        <section 
            className="relative bg-black flex flex-col items-center py-[60px] md:py-[100px] overflow-hidden"
            style={{ width: '100%' }}
        >
            {/* site-wrapper - Responsive container */}
            <div 
                className="flex flex-col items-center gap-[40px] sm:gap-[60px] md:gap-[100px] w-full max-w-[1309px] px-4 md:px-8 lg:px-[200px]"
                style={{ mixBlendMode: 'normal' }}
            >
                
                {/* Responsive Heading */}
                <h2 
                    className="italic text-center text-white"
                    style={{ 
                        fontFamily: "'Crimson Text', serif",
                        fontWeight: 400,
                        fontSize: 'clamp(40px, 8vw, 100px)',
                        lineHeight: '1.1',
                        width: '100%',
                        maxWidth: '909px'
                    }}
                >
                    Simplify your money.
                </h2>

                {/* Group 37404 - Responsive Phones Showcase */}
                <div 
                    className="relative flex items-end justify-center w-full max-w-[1236px] h-[350px] sm:h-[500px] md:h-auto"
                >
                    {/* Scaling container to keep the layout intact on mobile */}
                    <div className="relative flex items-end justify-center w-full h-full scale-[0.6] sm:scale-[0.85] md:scale-100 transition-transform duration-500">
                        
                        {/* Left Phone (News) */}
                        <div 
                            className="absolute left-1/2 -translate-x-[120%] bottom-0 z-0 origin-bottom"
                            style={{ width: 'min(393px, 80vw)' }}
                        >
                            <img 
                                src="/img/phone-left.png" 
                                alt="News" 
                                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                            />
                        </div>

                        {/* Right Phone (Insights) */}
                        <div 
                            className="absolute left-1/2 translate-x-[20%] bottom-0 z-0 origin-bottom"
                            style={{ width: 'min(393px, 80vw)' }}
                        >
                            <img 
                                src="/img/phone-right.png" 
                                alt="Hello Aayushi" 
                                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                            />
                        </div>

                        {/* Center Phone (Dashboard) */}
                        <div 
                            className="relative z-10 origin-bottom"
                            style={{ width: 'min(414px, 85vw)' }}
                        >
                            <img 
                                src="/img/phone-center.png" 
                                alt="Main App Screen" 
                                className="w-full h-auto drop-shadow-[0_40px_100px_rgba(0,0,0,1)]"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Responsive Background Glows */}
            <div className="absolute top-[30%] left-[-20%] md:left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-20%] md:right-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-cyan-600/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
        </section>
    )
}

export default Simplify
