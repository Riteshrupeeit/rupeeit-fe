import React from 'react'
import Features from './Features'

function Lifelong() {
    return (
        <div className='padding2 z-[340]'>
            <div className=' flex items-center justify-center flex-col'>
                <h1 className=' text-2xl sm:text-3xl md:text-4xl font-semibold seconfdont text-center'><span >We understand</span> money is </h1>
                <h1 className=' text-2xl sm:text-3xl md:text-4xl font-semibold seconfdont'>a lifelong journey.</h1>
                <p className='mt-3 seconfdont font-medium text-[19px] text-[#262626] text-center'>Learning about money is not a one time class, it’s a continuous journey</p>
            </div>
            <Features />
        </div>
    )
}

export default Lifelong
