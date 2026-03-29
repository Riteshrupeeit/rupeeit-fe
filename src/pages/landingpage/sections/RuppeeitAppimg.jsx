
const RuppeeitAppimg = ({ setFromslow }) => {
    return (
        <section 
            className="relative w-full overflow-hidden min-h-[700px] flex flex-col items-center justify-start pt-12 md:pt-20"
            style={{
                backgroundImage: "url('/img/leaf_final.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#000'
            }}
        >
            {/* Soft Dark Vignette Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

            <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center w-full max-w-[1200px]">
                {/* Badge/Tag */}
                <div className="mb-6 rounded-md bg-[#67E8F9] px-4 py-1.5 flex items-center justify-center shadow-lg">
                    <span className="text-[10px] md:text-[12px] font-bold tracking-[0.15em] text-black uppercase font-['Roboto_Mono']">
                        Built for India
                    </span>
                </div>

                {/* Main Heading */}
                <h2 className="mb-4 font-['Crimson_Text'] text-5xl md:text-[100px] font-normal leading-tight text-white italic drop-shadow-2xl">
                    Download Rupeeit.
                </h2>

                {/* Support Text */}
                <p className="mb-10 text-[16px] md:text-[20px] text-[rgba(255,255,255,0.7)] font-['Poppins'] tracking-wide">
                    Money made simple!
                </p>

                {/* Action Button */}
                <button 
                    className="group mb-12 flex items-center gap-3 rounded-[8px] bg-white px-10 py-4 text-[14px] font-bold text-black transition-all hover:bg-white/90 hover:scale-105 shadow-xl"
                >
                    <span className="font-['Roboto_Mono'] uppercase tracking-[0.1em]">Get Started</span>
                    <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="transition-transform group-hover:translate-x-1"
                    >
                        <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                </button>

                {/* App Mockup Rendering */}
                <div className="relative mx-auto w-full max-w-[280px] md:max-w-[400px]">
                    <div className="relative z-10 overflow-hidden rounded-[30px] transition-transform duration-700 hover:scale-105">
                        <img 
                            src="/img/download_image.png" 
                            alt="Rupeeit Application" 
                            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                        />
                    </div>
                    {/* Perspective Lighting Effect */}
                    <div className="absolute -bottom-10 left-1/2 h-[100px] w-full -translate-x-1/2 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default RuppeeitAppimg;
