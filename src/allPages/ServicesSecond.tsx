"use client"

import React, { useEffect } from 'react'

import SwiperHome from "./Homepage/SwiperHome";
import Service from "./Homepage/Service";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import ServiceFirst from "./serviceSecondPage/ServiceFirst";
import ServiceImg from "./serviceSecondPage/ServiceImg";
import { useParams } from 'next/navigation';
import Feedback from './Homepage/Feedback';

const ServicesSecondPage = () => {
  const params = useParams();
  const serviceSecond = params?.secondPage as string;

  useEffect(() => {

  }, [])
  return (
    <>
      <Header/>
      <ServiceFirst/>
      <SwiperHome />
      {/* <Service /> */}
      <ServiceImg/>
      <Feedback />
      <Footer/>
    </>
  )
}

export default ServicesSecondPage;