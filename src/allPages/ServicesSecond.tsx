import ServiceFirst from "./serviceSecondPage/serviceFirst";
import Testimonials from "./serviceSecondPage/testimonials";
import SwiperHome from "./Homepage/SwiperHome";
import Service from "./Homepage/Service";
import ServiceImg from "./serviceSecondPage/serviceImg";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import React from 'react'

const ServicesSecondPage = () => {
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

export default ServicesSecondPage;