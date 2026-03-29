import { FiArrowUp } from 'react-icons/fi';

const ArthaAI = () => {
    return (
        <section className="bg-[#0A0A0A] py-20 px-4 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Horizontal Divider Top */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[rgba(250,250,250,0.1)]" />

            <div className="flex flex-col items-center justify-center max-w-[776px] w-full">
                {/* Logo Group */}
                <div className="mb-6 relative w-20 h-20 flex items-center justify-center">
                    <img 
                        src="/img/artha/artha_logo.png" 
                        alt="Artha Logo" 
                        className="w-20 h-20 object-contain"
                        // onError={(e) => {
                        //     e.target.src = 'https://via.placeholder.com/80?text=Logo';
                        // }}
                    />
                </div>

                {/* Title */}
                <h2 className="text-[#FAFAFA] font-['Crimson_Text'] italic font-normal text-6xl md:text-[100px] leading-tight md:leading-[100px] mb-8 text-center">
                    Ask anything.
                </h2>

                {/* Description - Combined Text with Gradient on Artha */}
                <div className="max-w-[581px] text-center mb-12">
                    <p className="font-['Poppins'] font-semibold text-lg md:text-xl leading-[24px] uppercase md:normal-case">
                        <span 
                            className="bg-gradient-to-r from-[#3177DF] to-[#F08FE9] bg-clip-text text-transparent inline-block mr-1"
                        >
                            Artha
                        </span>
                        <span className="text-white">
                            your AI financial intelligence layer that analyzes markets, news, and data to deliver accurate, data-backed and personalized answers.
                        </span>
                    </p>
                </div>

                {/* Search Input Container */}
                <div 
                    className="w-full max-w-[460px] min-h-[69px] px-[24px] py-[16px] flex items-center justify-between rounded-[20px] relative overflow-hidden group shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-[rgba(250,250,250,0.1)]"
                    style={{
                        background: 'linear-gradient(91.43deg, rgba(250, 250, 250, 0.12) -0.16%, rgba(250, 250, 250, 0) 102.76%)',
                    }}
                >
                    <div className="flex items-center flex-grow">
                        <input 
                            type="text" 
                            placeholder="How should I invest" 
                            className="bg-transparent border-none outline-none text-[#FFFFFF] font-['Poppins'] font-medium text-lg w-full placeholder:text-[#FFFFFF]/50"
                        />
                    </div>

                    {/* Vertical Divider */}
                    <div 
                        className="w-[1.5px] h-6 bg-[rgba(250,250,250,0.5)] mx-4"
                    />

                    {/* Arrow Button */}
                    <button 
                        className="w-[37px] h-[37px] flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-[rgba(255,255,255,0.25)] to-[rgba(232,212,195,0.05)] hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                        <FiArrowUp className="text-white text-xl" />
                    </button>
                </div>
            </div>

            {/* Horizontal Divider Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[rgba(250,250,250,0.1)]" />
        </section>
    );
};

export default ArthaAI;
