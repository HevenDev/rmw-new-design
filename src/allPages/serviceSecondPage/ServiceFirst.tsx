"use client";

import React from "react";
import Link from "next/link";
import useGSAPHoverEffect from "@/hooks/useGSAPHoverEffect";
type ServiceFirstProps = {
  heading?: string | null;
  image1?: string | null;
  image2?: string | null;
};

const ServiceFirst = ({ heading }: ServiceFirstProps) => {
  // const textRefs = useSplitText();
  const lines = heading?.split(" ");
  useGSAPHoverEffect();

  return (
    <div className="elementor-widget-container">
      <section className="tp-services__area tp-service__plr">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service__wrap p-relative">
                <div className="tp-ab__title-box z-index-2 mb-80">
                  <div
                    style={{
                      width: "100%",
                      height: "auto",
                      position: "relative",
                      textAlign: "center",
                    }}
                  >
                    <svg
                      viewBox="0 0 800 250"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <defs>
                        <mask id="video-text-mask">
                          <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            fill="black"
                          />
                          {lines?.map((line, index) => (
                            <text
                              key={index}
                              x="50%"
                              y={`${30 + index * 40}%`} // Adjust spacing between lines
                              dominantBaseline="middle"
                              textAnchor="middle"
                              fontSize="100"
                              fontWeight="bold"
                              fill="white"
                              fontFamily="Arial, sans-serif"
                            >
                              {line}
                            </text>
                          ))}
                        </mask>
                      </defs>
                      <foreignObject
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        mask="url(#video-text-mask)"
                      >
                        <video
                          src="/videos/bg_pattern.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                      </foreignObject>
                    </svg>
                  </div>
                </div>
                <div className="tp-service__btn-wrap text-center">
                  <div className="tp-hover__btn-wrap tp-btn__bounce">
                    <Link
                      className="tp-hover__btn tp-hover__btn-item"
                      href="/contact"
                      target="_self"
                      rel="nofollow"
                    >
                      <span className="tp-btn__circle-text">
                        LET&#039;S TALK TODAY
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
                            stroke="black"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
                {/* <div className="tp-service__thumb-box-1 d-none d-xl-block">
                  <div className="tp-service__thumb p-relative">
                    <img
                      decoding="async"
                      src={`/service-second-images/${image1}.jpg`}
                      alt=""
                    />
                    <div className="tp-service__thumb-shape-1">
                      <span>
                        <img
                          decoding="async"
                          src={`/service-second-images/${image2}.jpg`}
                          alt=""
                        />
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
                        <img
                          decoding="async"
                          src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/shape-2.png"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceFirst;
