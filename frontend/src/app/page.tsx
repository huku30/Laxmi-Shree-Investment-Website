import HeroPage from "./sections/Hero/hero"
import AboutUs from "./sections/about/about"
import ServicesPage from "./sections/services"
import ContactCTASection from "./sections/contactCTA"
import VisionPage from "./sections/visionPage"
import Navbar from "./components/Navbar"
import LogoCarousel from "./sections/Carousel/carousel"
import MessageFromOurFounderPage from "./sections/FounderMessage/founderMessagePage"
import InvestmentsSection from "./sections/Investment/investmentSection"
import Footer from "./components/Footer"

export default function Main(){
  return(
    <div>
      <Navbar/>
      <HeroPage/>
      <LogoCarousel/>
      <div data-section="about">
        <AboutUs />
      </div>
      <ServicesPage/>
      <MessageFromOurFounderPage/>
      
        <InvestmentsSection />  
      
      <VisionPage/>
      <ContactCTASection/>
      <Footer/>
    </div>
  )
}