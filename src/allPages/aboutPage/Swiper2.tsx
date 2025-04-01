"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "@/app/marque.css";
import Link from "next/link";

const Swiper2 = () => {
  return (
    <div className="elementor-widget-container">
      <section className="tp-text-slider__9-area fix tp-text__inner-1 pb-20">
        <div className="tp-text__slider-4-wrap p-relative">
          <div
            className="swiper-container tp-text__4-slider-active swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-rtl"
            dir="rtl"
          >
            <Swiper
              modules={[Autoplay]}
              loop={true}
              slidesPerView={"auto"}
              spaceBetween={30}
              centeredSlides={true}
              allowTouchMove={false}
              speed={10000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              dir="ltr"
              id="swiper-wrapper-af37dab55c4fb398"
              aria-live="off"
            >
              <SwiperSlide
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="0"
                role="group"
                aria-label="1 / 18"
                style={{ marginLeft: "30px" }}
              >
                <div className="tp-text__4-wrap">
                  <h3 className="tp-text__9-text">
                  <Link
                  href="/service/digital-marketing"
                > DIGITAL _ MARKETING
                </Link>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="1"
                role="group"
                aria-label="2 / 18"
                style={{ marginLeft: "30px" }}
              >
                <div className="tp-text__4-wrap">
                <h3 className="tp-text__9-text">
                <Link
                  href="/service/printing-marketing"
                >  PRINTING_MARKETING
                </Link>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="2"
                role="group"
                aria-label="3 / 18"
                style={{ marginLeft: "30px" }}
              >
                <div className="tp-text__4-wrap">
                <h3 className="tp-text__9-text">
                <Link
                  href="/service/radio-marketing"
                >RADIO_MARKETING
                </Link>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="3"
                role="group"
                aria-label="4 / 18"
                style={{ marginLeft: "30px" }}
              >
                <div className="tp-text__4-wrap">
                <h3 className="tp-text__9-text">
                <Link
                  href="/service/creative-services"
                > CREATIVE_SERVICES
                </Link>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="4"
                role="group"
                aria-label="5 / 18"
                style={{ marginLeft: "30px" }}
              >
                <div className="tp-text__4-wrap">
                <h3 className="tp-text__9-text">
                <Link
                  href="/service/content-marketing"
                > CONTENT_MARKETING
                </Link>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                data-swiper-slide-index="5"
                role="group"
                aria-label="6 / 18"
                style={{ marginLeft: "30px" }}
              >
                <div className="tp-text__4-wrap">
                <h3 className="tp-text__9-text">
                <Link
                  href="/service/web-development"
                > WEB_DEVELOPMENT
                </Link>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                data-swiper-slide-index="5"
                role="group"
                aria-label="7 / 18"
                style={{ marginLeft: "30px" }}
              >
                <div className="tp-text__4-wrap">
                <h3 className="tp-text__9-text">
                <Link
                  href="/service/celebrity-endorsements"
                > CELEBRITY_ENDORSEMENTS
                </Link>
                  </h3>
                </div>
              </SwiperSlide>
            
            </Swiper>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Swiper2;
