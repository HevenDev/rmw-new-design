import ProjectSwiper from "./Homepage/ProjectSwiper";
import ServiceFirst from "./servicePage/serviceFirst";
import testimonials from "./servicePage/testimonials";
import SwiperHome from "./Homepage/SwiperHome";
import Service from "./Homepage/Service";
import serviceImg from "./servicePage/serviceImg";


import React from 'react'

const Services = () => {
  return (
    <>
      <ServiceFirst/>
      <SwiperHome />
      <Service />
      <serviceImg/>
    </>
  )
}

export default Services