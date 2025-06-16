"use client";
// import Link from "next/link";
import { useState } from "react";

// const styles = {
//   accordionCollapse: {
//     transition: "all 2.5s ease-in-out", // Slightly longer transition
//   },
//   accordionBody: {
//     opacity: 0,
//     transform: "translateY(-10px)",
//     transition: "opacity 1.5s ease-in-out, transform 1.5s ease-in-out", // Increased duration
//   },
//   accordionBodyShow: {
//     opacity: 1,
//     transform: "translateY(0)",
//   },
// };

interface ServiceItem {
  title: string;
  description: string;
  link: string;
}

interface ServiceProps {
  data: ServiceItem[];
}

const Service: React.FC<ServiceProps> = ({ data }) => {
  // State to track the currently opened accordion item (default to index 0)
  const [openIndex, setOpenIndex] = useState<number>(0);

  // Function to toggle accordion items
  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="tp-service__area fix tp-bg-class">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-services__title-box mb-45">
              <span className="tp-section-title-pre mb-30">Services</span>
              <div className="tp-section-title-wrap d-md-flex align-items-center justify-content-between">
                <h3 className="tp-section-title">
                  What We Provide
                  <br />
                  <span>
                    <i
                      style={{ top: "-18px", fontSize: "22px" }}
                      className="tp-hero__subtitle mb-10"
                    >
                      is more than what you’ll ever need
                    </i>
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="row align-items-center">
          <div className="col-xl-6 gx-0">
            <div className="tp-service-acordian mb-30">
              <div className="container">
                <div className="row counter-row">
                  <div className="col-12">
                    <div className="tp-accordion">
                      <div className="accordion" id="accordion-310c8f9">
                        {data.map((item, index) => (
                          <div className="accordion-item" key={index}>
                            <h2 className="accordion-header">
                              <button
                                className={`accordion-button p-relative ${
                                  openIndex === index ? "" : "collapsed"
                                }`}
                                type="button"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={openIndex === index}
                              >
                                {item.title}
                                <span className="accordion-num-count">
                                  {/* {String(index + 1).padStart(2, "0")} */}
                                </span>
                              </button>
                            </h2>
                            <div
                              id={`collapse-${index}`}
                              className={`accordion-collapse collapse ${
                                openIndex === index ? "show" : ""
                              }`}
                              data-bs-parent="#accordion-310c8f9"
                            >
                              <div className="accordion-body">
                                <p>{item.description}</p>
                                <a
                                  style={{
                                    fontSize: "18px",
                                    color: "#3d002e",
                                    fontStyle: "italic",
                                  }}
                                  href={item.link}
                                >
                                  Learn more...
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-xl-6">
            <div className="tp-services__thumb">
              <video
                src="/test-images/test-video.mp4"
                autoPlay
                loop
                muted
                playsInline
              className="w-full h-screen object-cover"
              style={{
                height:"100vh",
                width:"100%"
              }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
