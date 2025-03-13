
import SwiperHome from "./Homepage/SwiperHome";
import Service from "./Homepage/Service";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import React from 'react'
import ServiceFirst from "./serviceSecondPage/serviceFirst";
import ServiceImg from "./serviceSecondPage/serviceImg";
import Testimonials from "./serviceSecondPage/testimonials";

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