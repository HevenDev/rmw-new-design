'use client';

import React, { useEffect, useState } from 'react';
import SwiperHome from "./Homepage/SwiperHome";
import Service from "./Homepage/Service";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ServiceFirst from "./serviceSecondPage/ServiceFirst";
import ServiceImg from "./serviceSecondPage/ServiceImg";
import Feedback from './Homepage/Feedback';
import { useParams } from 'next/navigation';
import axios from 'axios';
import ServiceEndTag from "@/components/endTag/serviceEndTag";


type CardItem = {
  title: string;
  imgSrc: string;
  description: string;
  link: string;
};

const ServicesSecondPage = () => {
  const [card, setCard] = useState<CardItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const serviceSecond = params?.secondPage as string;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/services/${serviceSecond}`);
        const updatedCards: CardItem[] = response.data.cards.map((item: CardItem) => ({
          ...item,
          link: `${serviceSecond}/${item.link}`,
        }));
        setCard(updatedCards); // should be array of { title, description, link }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [serviceSecond]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <>
      <Header />
      <ServiceFirst />
      <SwiperHome />
      <Service data={card} />
      <ServiceImg />
      <Feedback />
      <ServiceEndTag/>
      <Footer />
    </>
  );
};

export default ServicesSecondPage;
