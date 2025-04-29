"use client"

import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React, { useEffect, useState } from 'react'
import ServiceThirdHero from './ServiceThirdHero'
import SwiperHome from '../Homepage/SwiperHome'
import ServiceThirdQuality from './ServiceThirdQuality'
import ServiceThirdAward from './ServiceThirdAward'
import ServiceThirdColorMarque from './ServiceThirdColorMarque'
import ServiceThirdFeatureMarque from './ServiceThirdFeatureMarque'
import ServiceMainTestimonial from '../serviceMainpage/ServiceMainTestimonial'
import ProjectSwiper from '../Homepage/ProjectSwiper'
import ServiceThirdNumber from './ServiceThirdNumber'
import Form from '../Contactpage/Form'
import ServiceThirdSlowMarque from './ServiceThirdSlowMarque'
import ServiceEndTag from '@/components/endTag/serviceEndTag'
import Loader from '@/components/loader/Loader'
import axios from 'axios'
import { useParams } from 'next/navigation'

interface CardData {
  title: string;
  description: string;
  image_url?: string;
}

const ServiceThirdMainPage = () => {
  const params = useParams();
  const [cardData, setCardData] = useState<CardData[]>([]);
  const [head, setHead] = useState<string | null>(null);
  const [para, setPara] = useState<string | null>(null);
  const [endTag, setEndTag] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const { secondPage, thirdPage } = params as {
    secondPage: string;
    thirdPage: string;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `/api/services/${secondPage}/${thirdPage}`
        );
        setCardData(res.data.cards); 
        setHead(res.data.s3heading1)
        setPara(res.data.s3para)
        setEndTag(res.data.s3endtag)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (secondPage && thirdPage) {
      fetchData();
    }
  }, [secondPage, thirdPage]);

  if (loading) return <p><Loader /></p>;
  return (
    <>
       <Header />
       <ServiceThirdHero heading={head} para={para} />
       <SwiperHome />
       <ServiceThirdQuality cardData={cardData} />
       <ServiceThirdColorMarque />
       <ServiceThirdAward />
       <ServiceThirdFeatureMarque />
       <ServiceMainTestimonial />
       <ProjectSwiper />
       <ServiceThirdNumber />
       <Form />
       <ServiceThirdSlowMarque />
       <ServiceEndTag endtag={endTag} />
       <Footer />
    </>
  )
}

export default ServiceThirdMainPage
