import FloatingLogo from '../../components/layout/FloatingLogo'
import ArthaAI from './sections/ArthaAI'
import ArthaAlerts from './sections/ArthaAlerts'
import ArthaFeatures from './sections/ArthaFeatures'
import ArthaIntelligence from './sections/ArthaIntelligence'
import ArthaSection from './sections/ArthaSection'
import Header from './sections/Hero'
import Learn from './sections/Learn'
import RuppeeitAppimg from './sections/RuppeeitAppimg'
import Simplify from './sections/Simplify'
import StayInformed from './sections/StayInformed'


function Home( {setFromslow}) {
    return (
        <div className="relative">
            <Header setFromslow={setFromslow} />
            <Simplify />
            <Learn />
            <ArthaAI />
            <ArthaFeatures />
            <ArthaIntelligence />
            <ArthaSection />
            <StayInformed />
            <ArthaAlerts />


            {/* <div className='bg-white py-10'>
                <Lifelong />
                <Becauselearning />
                <Journey setFromslow={setFromslow} />
            </div> */}
            {/* <FAQ /> */}
            <RuppeeitAppimg setFromslow={setFromslow} />
            <FloatingLogo />
        </div>
    )
}

export default Home
