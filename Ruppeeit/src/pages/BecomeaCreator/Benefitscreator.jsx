import React from 'react'

function Benefitscreator() {
    return (
        <div className='padding2 mt-14 '>
            <div className='flex items-center justify-center'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-primary text-center leading-snug'>
                    Benefits of Becoming a <br /> Creator with Rupeeit
                </h1>
            </div>
            <div
                className="mt-10 min-h-[600px] md:h-auto flex relative px-5 md:px-10 xl:px-14 py-10 bg-black hedersedo rounded-3xl"
                style={{ backgroundImage: "url('./img/pattern 1.png')" }}
            >
                <div className='flex justify-between flex-wrap gap-5 w-full'>
                    
                    {/* Card 1 */}
                    <div className='w-full sm:w-[48%] lg:w-[45%] flex flex-col items-center text-center lg:text-left lg:items-start'>
                        <img src="./img/ruppis.png" alt="" className='w-[120px] md:w-[160px] lg:w-auto' />
                        <div className='mt-4'>
                            <h2 className='text-secondri text-2xl md:text-[26px] lg:text-[30px] font-medium'>Reach</h2>
                            <h2 className="font-poppins text-2xl md:text-[26px] lg:text-[30px] font-medium bg-gradient-to-b from-white to-primary bg-clip-text text-transparent">
                                thousands
                            </h2>
                            <h2 className="font-poppins text-2xl md:text-[26px] lg:text-[30px] text-primary">
                                of Indians.
                            </h2>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='w-full sm:w-[48%] lg:w-[45%] flex flex-col items-center text-center lg:text-left lg:items-start'>
                        <img src="./img/suppis2.png" alt="" className='w-[120px] md:w-[160px] lg:w-auto' />
                        <div className='mt-4'>
                            <h2 className='text-secondri text-2xl md:text-[26px] lg:text-[30px] font-medium'>Earn by</h2>
                            <h2 className="font-poppins text-2xl md:text-[26px] lg:text-[30px] font-medium bg-gradient-to-b from-white to-primary bg-clip-text text-transparent">
                                sharing your
                            </h2>
                            <h2 className="font-poppins text-2xl md:text-[26px] lg:text-[30px] text-primary">
                                expertise.
                            </h2>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='w-full sm:w-[48%] lg:w-[45%] flex flex-col items-center text-center lg:text-left lg:items-start'>
                        <img src="./img/boystr.png" alt="" className='w-[120px] md:w-[160px] lg:w-auto' />
                        <div className='mt-4'>
                            <h2 className='text-secondri text-2xl md:text-[26px] lg:text-[30px] font-medium'>Build your</h2>
                            <h2 className="font-poppins text-2xl md:text-[26px] lg:text-[30px] font-medium bg-gradient-to-b from-white to-primary bg-clip-text text-transparent">
                                personal
                            </h2>
                            <h2 className="font-poppins text-2xl md:text-[26px] lg:text-[30px] font-medium bg-gradient-to-b from-white to-primary bg-clip-text text-transparent">
                                brand &
                            </h2>
                            <h2 className="font-poppins text-2xl md:text-[26px] lg:text-[30px] text-primary">
                                credibility.
                            </h2>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className='w-full sm:w-[48%] lg:w-[45%] flex flex-col items-center text-center lg:text-left lg:items-start'>
                        <img src="./img/caup.png" alt="" className='w-[120px] md:w-[160px] lg:w-auto' />
                        <div className='mt-4'>
                            <h2 className='text-secondri text-2xl md:text-[26px] lg:text-[30px] font-medium'>Be part of India’s</h2>
                            <h2 className="font-poppins text-2xl md:text-[26px] lg:text-[30px] font-medium bg-gradient-to-b from-white to-primary bg-clip-text text-transparent">
                                largest financial
                            </h2>
                            <h2 className="font-poppins text-2xl md:text-[26px] lg:text-[30px] font-medium bg-gradient-to-b from-white to-primary bg-clip-text text-transparent">
                                literacy
                            </h2>
                            <h2 className="font-poppins text-2xl md:text-[26px] lg:text-[30px] text-primary">
                                movement
                            </h2>
                        </div>
                    </div>

                </div>
            </div>  
        </div>
    )
}

export default Benefitscreator
