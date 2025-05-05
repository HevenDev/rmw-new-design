"use client";
import { useSplitText } from "@/hooks/useSplitText";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "@/app/styles/marque.css";
import Link from "next/link";

const Experts = () => {

  const textRefs = useSplitText(); // ✅ Using the existing GSAP animation

  return (
    <div className="elementor-widget-container">
                <section className="tp-team__3-area tp-team__inner-1 p-relative">
                  <div className="container">
                    <div className="tp-team__title-box mb-75">
                      <span ref={(el) => { if (el) textRefs.current.push(el) }} className="tp-section-title-pre mb-25 tp-split__text tp-split__in-right">
                        Expert team
                      </span>
                      <div className="tp-section-title-wrap mb-20 d-sm-flex align-items-center justify-content-between">
                        <h3 ref={(el) => { if (el) textRefs.current.push(el) }} className="tp-section-title tp-split__text tp-split__in-right">
                          Expert Members <br />
                          <span>
                            <i>Behind Us</i>
                          </span>
                        </h3>
                      </div>
                    </div>

                    <div className="tp-team__wrap">
                      <div className="swiper-container tp-team__3-active">
                        <Swiper className="swiper-wrapper"
                        spaceBetween={30}
                        slidesPerView={4}
                        loop={true}
                        autoplay={false}
                        speed={1200}
                        breakpoints={{
                          1200: {
                            slidesPerView: 4,
                          },
                          992: {
                            slidesPerView: 3,
                          },
                          768: {
                            slidesPerView: 2,
                          },
                          576: {
                            slidesPerView: 1,
                          },
                          0: {
                            slidesPerView: 1,
                          },
                        }}>
                          <SwiperSlide className="swiper-slide">
                            <div
                              className="tp-team__3-item wow none"
                              data-wow-duration=""
                              data-wow-delay=""
                            >
                              <div className="tp-team__3-thumb p-relative">
                                <Link
                                  href="/"
                                  rel="nofollow"
                                  target="_self"
                                >
                                  <img
                                    decoding="async"
                                    src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/team-3-6.jpg"
                                    alt=""
                                  />
                                </Link>
                                <div className="tp-team__3-action">
                                  <Link
                                    href="/"
                                    rel="nofollow"
                                    target="_self"
                                  >
                                    <span>
                                      <svg
                                        width="42"
                                        height="42"
                                        viewBox="0 0 42 42"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M2.55859 39.3603L37.5912 4.32769M2.55859 1.99219H39.9267V39.3603"
                                          stroke="currentColor"
                                          strokeWidth="2.5"
                                          strokeLinecap="square"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                                <div className="tp-team__3-social">
                                  <div className="tp-team__3-social-link">
                                    <Link rel="nofollow" target="_blank" href="#">
                                      <i className="fab fa-twitter"></i>
                                    </Link>

                                    <Link rel="nofollow" target="_blank" href="#">
                                      <i className="fab fa-facebook-f"></i>
                                    </Link>

                                    <Link rel="nofollow" target="_blank" href="#">
                                      <i className="fab fa-instagram"></i>
                                    </Link>

                                    <Link rel="nofollow" target="_blank" href="#">
                                      <i className="fab fa-youtube"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="tp-team__3-content d-flex align-items-center justify-content-between">
                                <div className="tp-team__3-text">
                                  <h3 className="tp-team__3-title">
                                    <Link
                                      href="/"
                                      rel="nofollow"
                                      target="_self"
                                    >
                                      Linda P. Jackson
                                    </Link>
                                  </h3>
                                  <span className="tp-team__3-designation">
                                    
                                    GRAPHIC DESIGNER
                                  </span>
                                </div>
                                <div className="tp-team__3-link">
                                  <Link
                                    href="#"
                                    rel="nofollow"
                                    target="_self"
                                  >
                                    <span>
                                      <i className="fas fa-long-arrow-right"></i>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div
                              className="tp-team__3-item wow none"
                              data-wow-duration=""
                              data-wow-delay=""
                            >
                              <div className="tp-team__3-thumb p-relative">
                                <Link
                                  href="#"
                                  rel="nofollow"
                                  target="_self"
                                >
                                  <img
                                    decoding="async"
                                    src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/team-3-7.jpg"
                                    alt=""
                                  />
                                </Link>
                                <div className="tp-team__3-action">
                                  <Link
                                    href="#"
                                    rel="nofollow"
                                    target="_self"
                                  >
                                    <span>
                                      <svg
                                        width="42"
                                        height="42"
                                        viewBox="0 0 42 42"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M2.55859 39.3603L37.5912 4.32769M2.55859 1.99219H39.9267V39.3603"
                                          stroke="currentColor"
                                          strokeWidth="2.5"
                                          strokeLinecap="square"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                                <div className="tp-team__3-social">
                                  <div className="tp-team__3-social-link">
                                    <Link rel="nofollow" target="_blank" href="#">
                                      <i className="fab fa-twitter"></i>
                                    </Link>

                                    <Link rel="nofollow" target="_blank" href="#">
                                      <i className="fab fa-facebook-f"></i>
                                    </Link>

                                    <Link rel="nofollow" target="_blank" href="#">
                                      <i className="fab fa-instagram"></i>
                                    </Link>

                                    <Link rel="nofollow" target="_blank" href="#">
                                      <i className="fab fa-youtube"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="tp-team__3-content d-flex align-items-center justify-content-between">
                                <div className="tp-team__3-text">
                                  <h3 className="tp-team__3-title">
                                    <Link
                                      href="#"
                                      rel="nofollow"
                                      target="_self"
                                    >
                                      Keith T. Buchanan
                                    </Link>
                                  </h3>
                                  <span className="tp-team__3-designation">
                                    
                                    WEB DEVELOPER
                                  </span>
                                </div>
                                <div className="tp-team__3-link">
                                  <Link
                                    href="#"
                                    rel="nofollow"
                                    target="_self"
                                  >
                                    <span>
                                      <i className="fas fa-long-arrow-right"></i>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div
                              className="tp-team__3-item wow none"
                              data-wow-duration=""
                              data-wow-delay=""
                            >
                              <div className="tp-team__3-thumb p-relative">
                                <Link
                                  href="#"
                                  rel="nofollow"
                                  target="_self"
                                >
                                  <img
                                    decoding="async"
                                    src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/team-3-8.jpg"
                                    alt=""
                                  />
                                </Link>
                                <div className="tp-team__3-action">
                                  <Link
                                    href="#"
                                    rel="nofollow"
                                    target="_self"
                                  >
                                    <span>
                                      <svg
                                        width="42"
                                        height="42"
                                        viewBox="0 0 42 42"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M2.55859 39.3603L37.5912 4.32769M2.55859 1.99219H39.9267V39.3603"
                                          stroke="currentColor"
                                          strokeWidth="2.5"
                                          strokeLinecap="square"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                                <div className="tp-team__3-social">
                                  <div className="tp-team__3-social-link">
                                    <Link rel="nofollow" target="_blank" href="#">
                                      <i className="fab fa-twitter"></i>
                                    </Link>

                                    <Link rel="nofollow" target="_blank" href="#">
                                      <i className="fab fa-facebook-f"></i>
                                    </Link>

                                    <Link rel="nofollow" target="_blank" href="#">
                                      <i className="fab fa-instagram"></i>
                                    </Link>

                                    <Link rel="nofollow" target="_blank" href="#">
                                      <i className="fab fa-youtube"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="tp-team__3-content d-flex align-items-center justify-content-between">
                                <div className="tp-team__3-text">
                                  <h3 className="tp-team__3-title">
                                    <Link
                                      href="#"
                                      rel="nofollow"
                                      target="_self"
                                    >
                                      Geraldine J. Ham
                                    </Link>
                                  </h3>
                                  <span className="tp-team__3-designation">
                                    
                                    BACKEND DEVELOPER
                                  </span>
                                </div>
                                <div className="tp-team__3-link">
                                  <Link
                                    href="#"
                                    rel="nofollow"
                                    target="_self"
                                  >
                                    <span>
                                      <i className="fas fa-long-arrow-right"></i>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div
                              className="tp-team__3-item wow none"
                              data-wow-duration=""
                              data-wow-delay=""
                            >
                              <div className="tp-team__3-thumb p-relative">
                                <Link
                                  href="#"
                                  rel="nofollow"
                                  target="_self"
                                >
                                  <img
                                    decoding="async"
                                    src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/team-3-9.jpg"
                                    alt=""
                                  />
                                </Link>
                                <div className="tp-team__3-action">
                                  <Link
                                    href="/team-details/"
                                    rel="nofollow"
                                    target="_self"
                                  >
                                    <span>
                                      <svg
                                        width="42"
                                        height="42"
                                        viewBox="0 0 42 42"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M2.55859 39.3603L37.5912 4.32769M2.55859 1.99219H39.9267V39.3603"
                                          stroke="currentColor"
                                          strokeWidth="2.5"
                                          strokeLinecap="square"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                                <div className="tp-team__3-social">
                                  <div className="tp-team__3-social-link">
                                    <Link rel="nofollow" target="_blank" href="#">
                                      <i className="fab fa-twitter"></i>
                                    </Link>

                                    <Link rel="nofollow" target="_blank" href="#">
                                      <i className="fab fa-facebook-f"></i>
                                    </Link>

                                    <Link rel="nofollow" target="_blank" href="#">
                                      <i className="fab fa-instagram"></i>
                                    </Link>

                                    <Link rel="nofollow" target="_blank" href="#">
                                      <i className="fab fa-youtube"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="tp-team__3-content d-flex align-items-center justify-content-between">
                                <div className="tp-team__3-text">
                                  <h3 className="tp-team__3-title">
                                    <Link
                                      href="/team-details/"
                                      rel="nofollow"
                                      target="_self"
                                    >
                                      Kristin Watson
                                    </Link>
                                  </h3>
                                  <span className="tp-team__3-designation">
                                    
                                    SEO EXPART
                                  </span>
                                </div>
                                <div className="tp-team__3-link">
                                  <Link
                                    href="/team-details/"
                                    rel="nofollow"
                                    target="_self"
                                  >
                                    <span>
                                      <i className="fas fa-long-arrow-right"></i>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
  )
}

export default Experts
