import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'
import ServiceThirdHero from './ServiceThirdHero'
// import ServiceThirdVideo from './ServiceThirdVideo'
import SwiperHome from '../Homepage/SwiperHome'
import ServiceThirdQuality from './ServiceThirdQuality'
import ServiceThirdAward from './ServiceThirdAward'
import ServiceThirdColorMarque from './ServiceThirdColorMarque'
// import ServiceThirdCardBoxes from './ServiceThirdCardBoxes'
import ServiceThirdFeatureMarque from './ServiceThirdFeatureMarque'
// import ServiceThirdHoverEffect from './ServiceThirdHoverEffect'
// import ServiceThirdLegendTeam from './ServiceThirdLegendTeam'
import ServiceMainTestimonial from '../serviceMainpage/ServiceMainTestimonial'
import ProjectSwiper from '../Homepage/ProjectSwiper'
import ServiceThirdNumber from './ServiceThirdNumber'
import Form from '../Contactpage/Form'
import ServiceThirdSlowMarque from './ServiceThirdSlowMarque'

const ServiceThirdMainPage = () => {
  return (
    <>
       <Header />
       <ServiceThirdHero />
       {/* <ServiceThirdVideo /> */}
       <SwiperHome />
       <ServiceThirdQuality />
       
       <ServiceThirdColorMarque />
       {/* <ServiceThirdCardBoxes /> */}
       <ServiceThirdAward />
       <ServiceThirdFeatureMarque />
       {/* <ServiceThirdHoverEffect /> */}
       {/* <ServiceThirdLegendTeam /> */}
       <ServiceMainTestimonial />
       <ProjectSwiper />
       <ServiceThirdNumber />
       <Form />
       <ServiceThirdSlowMarque />
       <Footer />
    </>
  )
}

export default ServiceThirdMainPage
