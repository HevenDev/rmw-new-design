import ServiceFirst from "./servicePage/serviceFirst";
import Testimonials from "./servicePage/testimonials";
import SwiperHome from "./Homepage/SwiperHome";
import Service from "./Homepage/Service";
import ServiceImg from "./servicePage/serviceImg";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import React from 'react'

const Services = () => {
  return (
    <>
      <Header/>
      <ServiceFirst/>
      <SwiperHome />
      <Service />
      <ServiceImg/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Services