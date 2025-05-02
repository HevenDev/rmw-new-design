"use client"

import React from "react";
import { useSplitText } from "@/hooks/useSplitText";
import Link from "next/link";
type ServiceFirstProps = {
  heading?: string | null;
  image1?: string | null;
  image2?: string | null;
};

const ServiceFirst = ({ heading, image1, image2 }: ServiceFirstProps) => {

  const textRefs = useSplitText();

  return (
    <div className="elementor-widget-container">
      <section className="tp-services__area tp-service__plr">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service__wrap p-relative">
                <div className="tp-ab__title-box z-index-2 mb-80">
                  <h3 ref={(el) => { if (el) textRefs.current.push(el) }}
                    className="tp-service__title text-center tp-split__text tp-split__in-right"
                    style={{ perspective: "400px", color: "#000", fontSize: "6vw" }}
                  >
                    {heading}
                  </h3>
                </div>
                <div className="tp-service__btn-wrap text-center">
                  <div className="tp-hover__btn-wrap tp-btn__bounce">
                    <Link
                      className="tp-hover__btn tp-hover__btn-item"
                      href="/contact/"
                      rel="nofollow"
                      target="_self"
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      <span className="tp-btn__circle-text">
                        LET&apos;S TALK TODAY
                      </span>
                      <span className="tp-btn__circle-arrow">
                        <svg
                          width="26"
                          height="27"
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 25.37L23.8469 2.52313M1 1H25.37V25.37"
                            stroke="white"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="tp-service__thumb-box-1 d-none d-xl-block">
                  <div className="tp-service__thumb p-relative">
                  <img
                          decoding="async"
                          src={`/service-second-images/${image1}.jpg`}
                          alt=""
                        />
                    <div className="tp-service__thumb-shape-1">
                      <span>
                        {/* <img
                          decoding="async"
                          src={`/service-second-images/${image2}.jpg`}
                          alt=""
                        /> */}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="tp-service__thumb-box-2 d-none d-xl-block">
                  <div className="tp-service__thumb p-relative">
                    <img
                      decoding="async"
                      src={`/service-second-images/${image2}.jpg`}
                      alt=""
                    />
                    <div className="tp-service__thumb-shape-2">
                      <span>
                        {/* <img
                          decoding="async"
                          src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/shape-2.png"
                          alt=""
                        /> */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceFirst;
