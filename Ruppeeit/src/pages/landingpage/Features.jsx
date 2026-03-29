import React from 'react'

const FeaturesData = [
    {
        id: 1,
        img: "./img/rupeeit 10.png",
        title1: "Short, interactive",
        title2: "videos for ",
        title3: "quick learning"
    },

    {
        id: 2,
        img: "./img/rupeeit 9.png",
        title1: "Daily fresh",
        title2: "content in",
        title3: "English + Hindi"
    },
    {
        id: 3,
        img: "./img/rupeeit 5.png",
        title1: "Created by",
        title2: "certified financial",
        title3: "professionals"
    },
    {
        id: 4,
        img: "./img/rupeeit 3.png",
        title1: "No eligibility",
        title2: "criteria – anyone",
        title3: "can learn from anywhere"
    },
    {
        id: 5,
        img: "./img/rupeeit 7.png",
        title1: "Live",
        title2: "sessions & ",
        title3: "workshops with experts"
    }
]

function Features() {
    return (
        <div className='flex items-center justify-center mt-4 flex-wrap gap-10'>
            {FeaturesData.map((feature) => {
                return <div key={feature.id} className='w-[339px] h-[267px] border border-primary rounded-3xl flex items-center justify-center'>
                    <div className='w-[288px] h-[228px] bgwithborder'>
                        <img
                            src={feature.img}
                            alt={feature.title1}
                            className='w-[92px] h-[75px] rounded-md shadow-lg'
                            style={{
                                boxShadow: "-8px 7px 18px -4px #FEB201"
                            }}
                        />
                        <div className='mt-5 leading-[1.2] pr-3.5'>
                            <p className='text-[23px] font-semibold'>{feature.title1}</p>
                            <p className='text-[23px] font-semibold'>{feature.title2}</p>
                            <p className='text-[23px] font-semibold'>{feature.title3}</p>
                        </div>
                    </div>
                </div>

            })}
        </div>
    )
}

export default Features
