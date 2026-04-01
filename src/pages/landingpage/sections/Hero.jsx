import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Header({ setFromslow }) {
    return (
        <div className="relative min-h-[100vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            {/* Background Image with Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                    backgroundImage: "url('/img/hero-bg-exact.png')",
                    filter: "brightness(0.7)"
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

            {/* Content Container (Frame 34404) */}
            <div className="relative z-10 flex flex-col items-center gap-8 max-w-[702px] mt-10">
                
                {/* Frame 34402 -> Div [promobar] */}
                <div className="flex flex-col items-center gap-6">
                    <div 
                        className="flex flex-row justify-center items-center py-[6px] px-[10px] gap-[10px] rounded-lg"
                        style={{ 
                            background: 'linear-gradient(180deg, #D7F5FF 0%, #D7F5FF 100%)',
                            width: '143px',
                            height: '29px'
                        }}
                    >
                        <span 
                            className="flex items-center uppercase"
                            style={{ 
                                fontFamily: "'Roboto Mono', monospace",
                                fontWeight: 500,
                                fontSize: '12px',
                                lineHeight: '16px',
                                color: '#017494',
                                width: '123px',
                                height: '17px'
                            }}
                        >
                            With AI & Experts
                        </span>
                    </div>

                    {/* Frame 34401 */}
                    <div className="flex flex-col items-center gap-6">
                        {/* Heading: Make Smarter Money Decisions. */}
                        <h1 
                            className="italic flex items-center justify-center text-center"
                            style={{ 
                                fontFamily: "'Crimson Text', serif",
                                fontWeight: 400,
                                fontSize: 'clamp(40px, 10vw, 100px)',
                                lineHeight: 'clamp(40px, 10vw, 100px)',
                                color: '#FFFFFF',
                                width: '100%',
                                maxWidth: '702px'
                            }}
                        >
                            Make Smarter Money Decisions.
                        </h1>

                        {/* Frame 34400 -> Description */}
                        <div className="flex flex-col items-center max-w-[581px]">
                            <p 
                                className="flex items-center justify-center text-center"
                                style={{ 
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    color: '#FFFFFF',
                                    width: '100%'
                                }}
                            >
                                RupeeIt is your AI-powered financial intelligence platform.
                            </p>
                            <p 
                                className="flex items-center justify-center text-center"
                                style={{ 
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    width: '100%'
                                }}
                            >
                                Discover market insights and news, learn from trusted experts, and turn knowledge into confident money decisions all in one place.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Link [button] */}
                <button
                    className="flex flex-row items-center justify-center py-3 px-5 gap-1 rounded-lg bg-white group hover:bg-gray-200 transition-colors"
                    style={{ 
                        width: '141px', 
                        height: '48px' 
                    }}
                    onClick={() => window.open('https://api.rupeeit.in/download', '_blank')}
                >
                    <span 
                        className="flex items-center uppercase"
                        style={{ 
                            fontFamily: "'Roboto Mono', monospace",
                            fontWeight: 500,
                            fontSize: '12px',
                            lineHeight: '24px',
                            letterSpacing: '0.25px',
                            color: '#000000'
                        }}
                    >
                        Get Started
                    </span>
                    <FaArrowRight 
                        size={15} 
                        color="#01000A" 
                        className="group-hover:translate-x-1 transition-transform"
                    />
                </button>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-[5]" />
        </div>
    )
}

export default Header
