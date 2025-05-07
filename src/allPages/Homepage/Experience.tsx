"use client";

import React from "react";
import { BiAnalyse } from "react-icons/bi";
import { SiAdobecreativecloud } from "react-icons/si";
import { FaGlobe } from "react-icons/fa6";
import { useSplitText } from "@/hooks/useSplitText"; //changed

const Experience = () => {
  const textRefs = useSplitText();

  return (
    <div
      className="elementor-element elementor-element-f0d1a29 e-con-full e-flex e-con e-parent"
      data-id="f0d1a29"
      data-element_type="container"
    >
      <div
        className="elementor-element elementor-element-08b9f06 e-con-full e-flex e-con e-child"
        data-id="08b9f06"
        data-element_type="container"
      >
        <div
          className="elementor-element elementor-element-60129ff elementor-widget elementor-widget-choose-us"
          data-id="60129ff"
          data-element_type="widget"
          data-widget_type="choose-us.default"
        >
          <div className="elementor-widget-container">
            <section className="tp-chooseus__area fix tp-chooseus__1 p-relative tp-bg-class">
              <div
                className="tp-chooseus__bg-thumb d-none d-xl-block wow avtrix_clip_right"
                style={{
                  backgroundImage:
                    "url(/about-images/Team_rmw.jpg)"
                }}
                data-wow-delay=".3s"
                data-wow-duration="2.5s"
              >
                {/* <div className="tp-chooseus__icon">
                  <Link href="/about" rel="" target="">
                    <span>
                      <svg
                        width="229"
                        height="229"
                        viewBox="0 0 229 229"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 224L211.25 17.75M5 4H225V224"
                          stroke="currentColor"
                          strokeWidth="6.5"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </div> */}
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 offset-xl-5">
                    <div className="tp-chooseus__wrap">
                      <div className="tp-chooseus__title-box mb-45">
                        <span
                          ref={(el) => {
                            if (el) textRefs.current.push(el);
                          }}
                          className="tp-section-title-2-pre tp-split__text tp-split__in-right mb-15"
                        >
                          Why choose us
                        </span>
                        <h3
                          ref={(el) => {
                            if (el) textRefs.current.push(el);
                          }}
                          className="tp-section-title-2 tp-split__text tp-split__in-right mb-40"
                        >
                          17+ Years Of Storytelling <br />
                          Turning{" "}
                          <span style={{ color: "var(--tp-theme-primary)" }}>
                            Brands{" "}
                          </span>
                          in to <br />
                          Household Names
                          <span className="tp-section-title-2-shape">
                            <svg
                              width="285"
                              height="62"
                              viewBox="0 0 285 62"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M236.253 5.07359C183.363 0.169412 64.9985 -2.46658 14.6555 26.2229C-48.2733 62.0846 140.247 63.034 212.012 57.4869C254.951 54.1679 283 46.0474 283 34.2986C283 24.1837 234.294 8.98158 146.145 11.8551"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                        </h3>
                        <p>
                          We’ve held hands with budding brands that have
                          shattered sealings of convention. With us behind them,
                          they have achieved great feats in their industry and
                          went on to dominate their competition.
                        </p>
                      </div>
                      <div className="tp-experience">
                        <div className="tp-ex-contain">
                          <div className="tp-ex-icon"><SiAdobecreativecloud size={40}/></div>
                          <h2 className="tp-ex-head" style={{color: "#0c0c0c", textAlign:"center"}}>Creative Strategy</h2>
                        </div>
                        <div className="tp-ex-contain">
                          <div className="tp-ex-icon"><FaGlobe size={40}/></div>
                          <h2 className="tp-ex-head" style={{color: "#0c0c0c", textAlign:"center"}}>Digital Marketing</h2>
                        </div>
                        <div className="tp-ex-contain">
                          <div className="tp-ex-icon">
                          <BiAnalyse size={40} />
                          </div>
                          <h2 className="tp-ex-head" style={{color: "#0c0c0c", textAlign:"center"}}>Market Analysis</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
