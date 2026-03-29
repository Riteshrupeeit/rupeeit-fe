import React from 'react'
import Header from './sections/Hero'
import Lifelong from './sections/Lifelong'
import Becauselearning from './sections/Becauselearning'
import Journey from './sections/Journey'
import FAQ from './sections/FAQ'
import FloatingLogo from '../../components/layout/FloatingLogo'

function Home( {setFromslow}) {
    return (
        <div className="relative">
            <Header setFromslow={setFromslow} />
            <div className='bg-white py-10'>
                <Lifelong />
                <Becauselearning />
                <Journey setFromslow={setFromslow} />
            </div>
            <FAQ />
            <FloatingLogo />
        </div>
    )
}

export default Home
