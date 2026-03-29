import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

function Header() {
    return (
        <div
            className="mt-20 md:mt-10 h-auto xl:h-[600px] flex flex-col xl:flex-row items-center relative bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('./img/pattern 1.png')" }}
        >
            <div className='flex flex-col-reverse xl:flex-row items-center justify-between relative w-full px-5 sm:px-10 xl:px-0'>

                {/* Left Side Text */}
                <div className='padding2 z-[300] mt-6 xl:mt-0 w-full xl:w-auto text-center xl:text-left'>
                    <div className='mb-5 sm:mb-7'>
                        <h1 className='text-secondri text-3xl sm:text-4xl md:text-5xl font-semibold'>
                            Share Your
                        </h1>
                        <h1 className='text-secondri text-3xl sm:text-4xl md:text-5xl font-semibold'>
                            Knowledge. Grow
                        </h1>
                        <h1 className='text-secondri text-3xl sm:text-4xl md:text-5xl font-semibold'>
                            Your Influence.
                        </h1>
                    </div>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd1mQuZHqF7qY7-GFQoQ8gm3V2P4wPYfS_ltILhLZGu0cSwow/viewform" target='_blank'>
                        <button className='bg-primary flex items-center gap-2 sm:gap-4 px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-3xl font-medium navboxsedo text-sm sm:text-base md:text-lg mx-auto xl:mx-0' >
                            Become a Creator <FaAngleRight />
                        </button>
                    </a>
                </div>

                {/* Right Side Image */}
                <div className='relative w-full xl:w-auto flex justify-center xl:justify-end mt-6 xl:mt-0'>
                    <img src="./img/heder2.png" alt="" className='cahk w-[100%]  xl:w-auto' />

                    {/* Background vectors (hidden on small screens) */}
                    <div className='absolute right-0 top-0 h-full  md:block'>
                        <img src="./img/Vector 1 (1).png" alt="" />
                    </div>
                    <div className='absolute bottom-[-60%] left-[-61%]  lg:block'>
                        <img src="./img/Vector 2.png" alt="" />
                    </div>
                </div>
            </div>

            {/* Left Background Vector */}
            <div className='absolute left-0 bottom-0 w-[40%] h-full hidden xl:block'>
                <img src="./img/Vector 1 (1).png" alt="" />
            </div>
        </div>
    )
}

export default Header
