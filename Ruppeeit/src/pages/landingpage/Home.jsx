import React from 'react'
import Header from './Header'
import Lifelong from './Lifelong'
import Becauselearning from './Becauselearning'
import Journey from './Journey'
import FAQ from './FAQ'

function Home( {setFromslow}) {
    return (
        <div>
            <Header setFromslow={setFromslow} />
            <div className='bg-white py-10'>
                <Lifelong />
                <Becauselearning />
                <Journey setFromslow={setFromslow} />
            </div>
            <FAQ />
        </div>
    )
}

export default Home
