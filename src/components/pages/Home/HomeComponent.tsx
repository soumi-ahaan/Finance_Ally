import AboutSection from "./AboutSection"
import AudienceSection from "./AudienceSection"
import CallToAction from "./CallToAction"
import { HeroBanner } from "./HeroBanner"
import { ManagementSection } from "./ManagementSection"
import OurServices from "./OurServices"
import { StatBanner } from "./StatBanner"
import ContactForm from "./ContactForm"



const HomeComponent = () => {
  return (
    <div>
      <HeroBanner/>
       <StatBanner/>
       <AboutSection/>
        <OurServices/>
        <AudienceSection/>
        <ManagementSection/>
        <CallToAction/>
        <ContactForm/>
       
    </div>
  )
}

export default HomeComponent