"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "@/app/marque.css"
const ProjectMarque = () => {
  return (
    <div className="swiper-container tp-text__3-slider-active swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
      <Swiper
      modules={[Autoplay]}
                          loop={true}
                          freeMode={true}
                          slidesPerView={"auto"}
                          spaceBetween={30}
                          centeredSlides={true}
                          allowTouchMove={false}
                          speed={10000}
                          autoplay={{
                            delay: 0,
                            disableOnInteraction: true,
                          }}
        aria-live="off"
      >
        <SwiperSlide
          className="swiper-slide swiper-slide-duplicate"
          data-swiper-slide-index="0"
          role="group"
          aria-label="1 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide swiper-slide-duplicate"
          data-swiper-slide-index="1"
          role="group"
          aria-label="2 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
          data-swiper-slide-index="2"
          role="group"
          aria-label="3 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
          data-swiper-slide-index="3"
          role="group"
          aria-label="4 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
          data-swiper-slide-index="4"
          role="group"
          aria-label="5 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide swiper-slide-duplicate"
          data-swiper-slide-index="5"
          role="group"
          aria-label="6 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          data-swiper-slide-index="0"
          role="group"
          aria-label="7 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          data-swiper-slide-index="1"
          role="group"
          aria-label="8 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide swiper-slide-prev"
          data-swiper-slide-index="2"
          role="group"
          aria-label="9 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide swiper-slide-active"
          data-swiper-slide-index="3"
          role="group"
          aria-label="10 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide swiper-slide-next"
          data-swiper-slide-index="4"
          role="group"
          aria-label="11 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          data-swiper-slide-index="5"
          role="group"
          aria-label="12 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide swiper-slide-duplicate"
          data-swiper-slide-index="0"
          role="group"
          aria-label="13 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide swiper-slide-duplicate"
          data-swiper-slide-index="1"
          role="group"
          aria-label="14 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
          data-swiper-slide-index="2"
          role="group"
          aria-label="15 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
          data-swiper-slide-index="3"
          role="group"
          aria-label="16 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
          data-swiper-slide-index="4"
          role="group"
          aria-label="17 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide swiper-slide-duplicate"
          data-swiper-slide-index="5"
          role="group"
          aria-label="18 / 18"
          style={{ marginRight: "30px" }}
        >
          <div className="tp-text__3-wrap">
            <h3 className="tp-text__3-text">some impressive metrics </h3>
          </div>
        </SwiperSlide>
      </Swiper>
      <span
        className="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      ></span>
    </div>
  );
};

export default ProjectMarque;
