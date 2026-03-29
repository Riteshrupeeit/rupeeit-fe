import React from 'react'
import RuppeeitAppimg from './RuppeeitAppimg'

function Journey({ setFromslow }) {
    return (
        <div className='mt-8 padding2'>
            {/* Stats Section */}
            <div className='flex items-center justify-center'>
                <div className='bg-black flex flex-col md:flex-row items-start md:justify-between rounded-[50px] gap-4 md:gap-5 py-4 px-6 md:px-12 hedersedo w-full max-w-[1200px]'>

                    {/* Stat 1 */}
                    <div className='flex items-center gap-3 text-center md:text-left'>
                        <img src="./img/usergool.png" alt="" className='max-w-[60px] sm:max-w-[70px] md:max-w-[80px]' />
                        <h1 className='text-primary text-lg sm:text-xl md:text-2xl font-medium'>
                            1000+ Indians <br className='2xl:hidden' /> learning daily
                        </h1>
                    </div>

                    {/* Stat 2 */}
                    <div className='flex items-center gap-3 text-center md:text-left'>
                        <img src="./img/videoimg.png" alt="" className='max-w-[60px] sm:max-w-[70px] md:max-w-[80px]' />
                        <h1 className='text-primary text-lg sm:text-xl md:text-2xl font-medium'>
                            1000+ <br className='md:hidden' /> Videos
                        </h1>
                    </div>

                    {/* Stat 3 */}
                    <div className='flex items-center gap-3 text-center md:text-left'>
                        <img src="./img/tiemimg.png" alt="" className='max-w-[60px] sm:max-w-[70px] md:max-w-[80px]' />
                        <h1 className='text-primary text-lg sm:text-xl md:text-2xl font-medium'>
                            50+ Verified <br className='md:hidden' /> Experts
                        </h1>
                    </div>

                </div>
            </div>

            {/* Heading */}
            <div className='flex items-center justify-center flex-col mt-10 md:mt-14 text-center px-4'>
                <h1 className='font-semibold text-2xl sm:text-3xl text-center md:text-4xl'>Begin Your Journey</h1>
                <h1 className='font-semibold text-2xl sm:text-3xl text-center md:text-4xl'>Towards Financial Freedom</h1>
            </div>

            {/* App Image Section */}
            <div className='mt-8 md:mt-12'>
                <RuppeeitAppimg setFromslow={setFromslow} />
            </div>
        </div>
    )
}

export default Journey
