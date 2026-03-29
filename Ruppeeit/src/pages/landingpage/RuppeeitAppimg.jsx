import React from 'react'

function RuppeeitAppimg({ setFromslow }) {
    return (
        <>
            <div className='mt-10 flex gap-3 flex-wrap justify-center 2xl:justify-between w-full'>
                <div className=' w-full h-[760px] xl:w-[540px] rounded-[30px] bg-black  px-5 relative overflow-hidden flex items-center flex-col'>
                    <h1 className='font-medium text-secondri text-center text-3xl mt-12'>Download the </h1>
                    <h1 className='font-medium text-secondri text-center text-3xl'>Rupeeit App</h1>

                    <img src="./img/iPhone 13 Pro.png" alt="" className='absolute bottom-[0%] ' />
                </div>
                <div className='flex flex-col gap-4 flex-wrap w-full xl:w-auto'>
                    <div className='w-full h-[250px] sm:h-[400px] md:h-[350px] xl:w-[540px] xl:h-[238px] bg-black rounded-[30px] flex  items-center flex-col pt-3 px-3 relative '>
                        <h1 className='text-primary font-medium text-[25px] relative text-center '>Signup in 2 minutes</h1>
                        <img src="./img/SignupEmail 1.png" alt="" className='absolute bottom-0 w-[74%] sm:w-[500px] xl:w-auto ' />
                    </div>
                    <div className='w-full h-[250px] sm:h-[400px] md:h-[350px] xl:w-[540px] xl:h-[238px] bg-black rounded-[30px] flex  items-center flex-col pt-3 px-3 relative '>
                        <h1 className='text-primary font-medium text-[25px] relative text-center '>Access videos instantly</h1>
                        <img src="./img/HomeScreenver2. 1.png" alt="" className='absolute bottom-0 w-[74%] sm:w-[500px] xl:w-auto ' />
                    </div>
                    <div className='w-full h-[250px] sm:h-[400px] md:h-[350px] xl:w-[540px] xl:h-[238px] bg-black rounded-[30px] flex  items-center flex-col pt-3 px-3 relative '>
                        <h1 className='text-primary font-medium text-[25px] relative  text-center'>Save, Like & Share</h1>
                        <img src="./img/Flow screen 1.png" alt="" className='absolute bottom-0 w-[65%] sm:w-[450px] xl:w-auto ' />
                    </div>
                </div>

            </div>
            <div className='flex items-center justify-center w-full mt-20 mb-16'>
                <button className='font-bold text-2xl  text-primary 
                py-5 md:py-4 px-3 w-[300px] md:w-[350px] bg-[#0E0D05] rounded-[50px]' onClick={() => setFromslow(true)}>Download app</button>
            </div>
        </>
    )
}

export default RuppeeitAppimg
