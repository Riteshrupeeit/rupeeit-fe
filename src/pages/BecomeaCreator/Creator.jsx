import React from 'react'

const CreatorDtaa = [
    {
        id: 1,
        title1: "Registered",
        title2: "Investment",
        title3: "Advisor (RIA)"
    },
    {
        id: 2,
        title1: "Research",
        title2: "Analyst (RA)",
        title3: ""
    },
    {
        id: 3,
        title1: "Certified",
        title2: "Financial ",
        title3: "Planner (CFP)"
    },
    {
        id: 4,
        title1: "IRDA Certified",
        title2: "Insurance ",
        title3: "Advisor "
    },
    {
        id: 5,
        title1: "Finance",
        title2: "Professional ",
        title3: " "
    },
    {
        id: 6,
        title1: "Mutual Fund",
        title2: "Distributor",
        title3: "(MFD)"
    },
]

function Creator() {
    return (
        <div className='padding2'>
            {/* Heading */}
            <div className='flex items-center justify-center mt-10 md:mt-16 mb-5 md:mb-7 px-3 text-center'>
                <h1 className='text-primary font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-medium leading-tight md:leading-[40px] tracking-[-0.006px]'>
                    Who Can Be a Creator?
                </h1>
            </div>

            {/* Cards */}
            <div className='flex items-center justify-center md:justify-between gap-5 mt-8 md:mt-10 flex-wrap'>
                {CreatorDtaa.map((val) => {
                    return (
                        <div
                            key={val.id}
                            className='w-[90%] sm:w-[45%] md:w-[280px] h-[180px] sm:h-[200px] border border-primary rounded-2xl md:rounded-3xl flex items-center justify-center flex-col p-4'
                        >
                            <h2 className='text-secondri text-xl sm:text-2xl md:text-[30px] font-medium'>
                                {val.title1}
                            </h2>
                            <h2 className="text-center font-poppins text-xl sm:text-2xl md:text-[30px] font-medium leading-snug md:leading-[37px] tracking-[-0.003px] bg-gradient-to-b from-white to-primary bg-clip-text text-transparent">
                                {val.title2}
                            </h2>
                            <h2 className="text-center font-poppins text-lg sm:text-xl md:text-[30px] font-medium leading-snug md:leading-[37px] text-primary">
                                {val.title3}
                            </h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Creator
