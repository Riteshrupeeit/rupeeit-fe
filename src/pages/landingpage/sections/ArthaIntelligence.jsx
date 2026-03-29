
const ArthaIntelligence = () => {
    return (
        <section className="bg-[#0A0A0A] py-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
            <div 
                className="flex flex-col items-center gap-6 max-w-[776px] w-full animate-fadeIn"
            >
                {/* Title Section */}
                <h2 
                    className="w-full text-[#FAFAFA] font-['Crimson_Text'] italic font-normal text-6xl md:text-[100px] leading-tight md:leading-[100px] flex items-center justify-center"
                >
                    Intelligence, not <br className="hidden md:block" /> information.
                </h2>

                {/* Content Frame */}
                <div className="flex flex-col items-center gap-1 max-w-[581px] w-full">
                    <p className="text-white font-['Poppins'] font-normal text-base md:text-lg leading-6 md:leading-8 flex items-center justify-center">
                        Artha doesn't give you 200 articles.
                    </p>
                    <p className="text-white/60 font-['Poppins'] font-normal text-base md:text-lg leading-6 md:leading-8 flex items-center justify-center">
                        It gives you the 3–5 that actually matter to your money.
                    </p>
                </div>

                {/* CTA Button */}
                <button 
                    className="mt-8 flex flex-row justify-center items-center px-5 py-3 w-[156px] h-12 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/5 shadow-lg active:scale-95 whitespace-nowrap outline-none focus:outline-none focus:ring-0"
                >
                    <span 
                        className="font-['Roboto_Mono'] font-medium text-[12px] leading-6 uppercase text-[#FFFFFF] whitespace-nowrap"
                    >
                        MORE ABOUT ARTHA
                    </span>
                </button>
            </div>
        </section>
    );
};

export default ArthaIntelligence;
