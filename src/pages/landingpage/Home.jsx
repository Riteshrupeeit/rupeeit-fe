import FloatingLogo from '../../components/layout/FloatingLogo'
import ArthaAI from './sections/ArthaAI'
import Becauselearning from './sections/Becauselearning'
import FAQ from './sections/FAQ'
import Header from './sections/Hero'
import Journey from './sections/Journey'
import Learn from './sections/Learn'
import Lifelong from './sections/Lifelong'
import Simplify from './sections/Simplify'
import ArthaFeatures from './sections/ArthaFeatures'
import ArthaIntelligence from './sections/ArthaIntelligence'
import StayInformed from './sections/StayInformed'
import ArthaSection from './sections/ArthaSection'



function Home( {setFromslow}) {
    return (
        <div className="relative">
            <Header setFromslow={setFromslow} />
            <Simplify />
            <Learn />
            <ArthaAI />
            <ArthaFeatures />
            <ArthaIntelligence />
            <StayInformed />
            <ArthaSection />


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
