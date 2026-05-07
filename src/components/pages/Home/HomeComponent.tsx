import AboutSection from "./AboutSection"
import AudienceSection from "./AudienceSection"
import CallToAction from "./CallToAction"
import { HeroBanner } from "./HeroBanner"
import OurServices from "./OurServices"
import { StatBanner } from "./StatBanner"



const HomeComponent = () => {
  return (
    <div>
      <HeroBanner/>
       <StatBanner/>
       <AboutSection/>
        <OurServices/>
        <AudienceSection/>
        <CallToAction/>
       
    </div>
  )
}

export default HomeComponent