import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

function Header({ setFromslow }) {
    return (
        <div
            className="mt-10 min-h-[500px] xl:h-[650px] flex relative flex-col md:flex-row items-center md:items-start bg-no-repeat bg-cover bg-center px-4 sm:px-6 xl:px-20 py-5 pb-10" 
            style={{ backgroundImage: "url('./img/pattern 1.png')" }}
        >
            {/* Images Section */}
            <div className="relative flex justify-center md:justify-end w-full md:w-1/2 order-1 md:order-2 mb-10 md:mb-0">
                <div className="relative w-[200px] sm:w-[350px] md:w-full lg:w-[480px] xl:w-[520px] h-[280px] sm:h-[420px] md:h-[500px] lg:h-[550px] xl:h-[600px] flex justify-end ml-10 md:ml-0">

                    {/* Left image */}
                    <img
                        src="./img/Mockup 3.png"
                        alt="mockup-3"
                        className="absolute left-[-25%] sm:left-[-10%] md:left-[0%] xl:left-0 w-[130px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[260px] h-[260px] sm:h-[400px] md:h-[480px] lg:h-[520px] xl:h-[530px] object-contain"
                    />

                    {/* Middle front image */}
                    <img
                        src="./img/Mockup 1.png"
                        alt="mockup-1"
                        className="absolute z-20 right-[25%] sm:right-[25%] md:right-[20%] w-[140px] sm:w-[210px] md:w-[230px] lg:w-[250px] xl:w-[270px] h-[260px] sm:h-[400px] md:h-[480px] lg:h-[520px] xl:h-[530px] object-contain"
                    />

                    {/* Right image */}
                    <img
                        src="./img/Mockup 2.png"
                        alt="mockup-2"
                        className="absolute w-[130px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[260px] h-[260px] sm:h-[400px] md:h-[480px] lg:h-[520px] xl:h-[530px] object-contain"
                    />

                    {/* Bottom rectangle (desktop only) */}
                    <img
                        src="./img/Rectangle 90.png"
                        alt="rectangle"
                        className="absolute w-full bottom-0 z-[32355] hidden md:block"
                    />
                </div>
            </div>

            {/* Text Section */}
            <div className="z-30 md:w-1/2 order-2 md:order-1 text-center md:text-left mt-6 md:mt-10 flex items-center justify-center flex-col md:block">
                {/* Heading */}
                <div className="mb-4 md:mb-7">
                    <h1 className="text-secondri text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug">
                        India’s Financial
                    </h1>
                    <h1 className="text-secondri text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug">
                        Literacy App
                    </h1>
                </div>

                {/* Subheading */}
                <div className="mb-6 md:mb-10">
                    <h2 className="text-primary text-lg sm:text-xl md:text-3xl font-normal">
                        Ab Har Indian Banega
                    </h2>
                    <h2 className="text-primary text-lg sm:text-xl md:text-3xl font-normal">
                        Money Expert
                    </h2>
                </div>

                {/* Button */}
                <button
                    className="bg-primary flex items-center justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 px-5 sm:px-7 md:px-10 py-2 sm:py-3 rounded-3xl font-medium text-sm sm:text-base md:text-lg navboxsedo z-50 cursor-pointer"
                    onClick={() => setFromslow(true)}
                >
                    Download app <FaAngleRight />
                </button>
            </div>

            {/* Decorative Background Images */}
            <div className="absolute top-[-40%] sm:top-[-40%] md:top-[-40%] h-full z-[-1] left-0">
                <img src="./img/Vector (1).png" alt="vector-1" className="w-full sm:w-[80%] md:w-auto h-full object-contain" />
            </div>
            <div className="absolute right-0 top-[-40%] sm:top-[-40%] md:top-[-35%] h-full z-[-1]">
                <img src="./img/Vector (2).png" alt="vector-2" className="w-full sm:w-[100%] md:w-auto h-full object-contain" />
            </div>
            <div className="absolute right-0 bottom-0 h-full z-[-1]">
                <img src="./img/Vector 1.png" alt="vector-3" className="w-full md:w-auto h-full object-contain" />
            </div>
        </div>
    )
}

export default Header
