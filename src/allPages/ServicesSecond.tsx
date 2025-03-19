import React from 'react'

import SwiperHome from "./Homepage/SwiperHome";
import Service from "./Homepage/Service";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import ServiceFirst from "./serviceSecondPage/ServiceFirst";
import ServiceImg from "./serviceSecondPage/ServiceImg";
import Testimonials from "./serviceSecondPage/Testimonials";

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