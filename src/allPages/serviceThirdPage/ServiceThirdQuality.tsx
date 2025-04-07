"use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
import styles from "./serviceThirdQuality.module.css";

import "swiper/css";
import "swiper/css/pagination";

const cardData = [
  {
    id: 1,
    heading: "Strategic SEO for Real Impact",
    image: "/home-images/home-swiper1-img1.jpeg",
    content:
      "SEO isn’t merely about ranking; it's about relevance. Our strategically-obsessed SEO experts ensure your website not only climbs the search results ladder but also captivates real human beings—transforming casual searchers into committed customers.",
  },
  {
    id: 2,
    heading: "Boost Your Visibility with SEO",
    image: "/home-images/home-swiper1-img1.jpeg",
    content:
      "SEO isn’t merely about ranking; it's about relevance. Our strategically-obsessed SEO experts ensure your website not only climbs the search results ladder but also captivates real human beings—transforming casual searchers into committed customers.",
  },
  {
    id: 3,
    heading: "Get Found, Get Chosen",
    image: "/home-images/home-swiper1-img1.jpeg",
    content:
      "SEO isn’t merely about ranking; it's about relevance. Our strategically-obsessed SEO experts ensure your website not only climbs the search results ladder but also captivates real human beings—transforming casual searchers into committed customers.",
  },
  {
    id: 4,
    heading: "Precision SEO Execution",
    image: "/home-images/home-swiper1-img1.jpeg",
    content:
      "SEO isn’t merely about ranking; it's about relevance. Our strategically-obsessed SEO experts ensure your website not only climbs the search results ladder but also captivates real human beings—transforming casual searchers into committed customers.",
  },
  {
    id: 5,
    heading: "Conversion-Focused Optimization",
    image: "/home-images/home-swiper1-img1.jpeg",
    content:
      "SEO isn’t merely about ranking; it's about relevance. Our strategically-obsessed SEO experts ensure your website not only climbs the search results ladder but also captivates real human beings—transforming casual searchers into committed customers.",
  },
];


const ServiceThirdQuality = () => {
  return (
    <div
      className="elementor-element elementor-element-3205e74 e-con-full e-flex e-con e-parent e-lazyloaded"
      data-id="3205e74"
      data-element_type="container"
    >
      <div
        className="elementor-element elementor-element-27c6b78 e-con-full e-flex e-con e-child"
        data-id="27c6b78"
        data-element_type="container"
      >
        <div
          className="elementor-element elementor-element-66ba328 elementor-widget elementor-widget-services"
          data-id="66ba328"
          data-element_type="widget"
          data-widget_type="services.default"
        >
          <div className="elementor-widget-container">
            <section className="tp-service__3-area fix tp-services__3-style p-relative pt-120 pb-120 tp-bg-className">
              <div className="container">
                <div className="tp-services__2-title-wrap mb-40">
                  <div className="row align-items-center">
                    <div className="">
                      <div className="tp-services__3-title-box">
                        <div className="tp-section-title-wrap">
                          <h3
                            className="tp-section-title"
                            style={{ width: "50%" }}
                          >
                            Committed For Deliver <span>Top</span> Quality{" "}
                            <span>Services</span>
                          </h3>
                        </div>
                      </div>
                      <div className={`${styles.serviceCardsMain}`}>
  {cardData.map((card, index) => (
    <div
      key={card.id}
      className={`${styles.serviceCard} ${index % 2 === 0 ? styles.row : styles.rowReverse}`}
    >
      {/* Image */}
      <img
        src={card.image}
        alt="Service"
        style={{
          width: "100%",
          maxWidth: "380px",
          borderRadius: "10px",
          flexShrink: 0,
          objectFit: "cover",
        }}
      />

      {/* Content */}
      <div
        className={`${styles.serviceContent}`}
        style={{
          padding: "10px",
          flex: 1,
          lineHeight: "1.6",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h3 style={{ fontSize: "24px", color: "#fddf82", marginBottom: "10px" }}>
          {card.heading}
        </h3>

        {/* Paragraph */}
        <p style={{ fontSize: "20px", color: "white"}}>{card.content}</p>
      </div>
    </div>
  ))}
</div>

                    </div>
                  </div>
                </div>
                
                <div className="services"></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceThirdQuality;
