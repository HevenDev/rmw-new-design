// import Link from "next/link";
type headingProp = {
  heading: string | null;
};
const ServiceThirdHero = ({ heading }: headingProp) => {
  const lines = heading?.split(" ");
  return (
    <div
      className="elementor-element elementor-element-9b5be38 e-con-full e-flex e-con e-parent e-lazyloaded"
      data-id="9b5be38"
      data-element_type="container"
      style={{ padding: "0", margin: "0" }}
    >
      <div
        className="elementor-element elementor-element-88259bc e-con-full e-flex e-con e-child"
        data-id="88259bc"
        data-element_type="container"
        style={{ padding: "0", margin: "0" }}
      >
        <div
          className="elementor-element elementor-element-3f42da0 elementor-widget elementor-widget-hero-banner"
          data-id="3f42da0"
          data-element_type="widget"
          data-widget_type="hero-banner.default"
        >
          <div className="elementor-widget-container">
            <section
              className="tp-hero__3-area fix tp-hero__3-space tp-hero__3-bg tp-hero__3-overlay p-relative tp-bg-className"
              data-background="/service-banner/Service_Bg_RMW.jpg"
              style={{
                backgroundImage: "/service-banner/Service_Bg_RMW.jpg",
              }}
            >
              <div className="tp-hero__3-shape">
                <style jsx>{`
                  .tp-hero__3-shape img {
                    height: 800px; /* Fixed height */
                    width: 100vw; /* Keeps original aspect ratio */
                    object-fit: cover; /* Adjusts image content within the box */
                  }

                  @media (max-width: 768px) {
                    .tp-hero__3-shape img {
                      height: 800px; /* Still fixed on smaller screens */
                    }
                  }
                `}</style>
                <video
                  src="/videos/third_layer_video.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  controlsList="nodownload"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    display: "block",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                />
              </div>

              <div className="tp-hero__3-wrap">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-12">
                      <div className="tp-hero__3-title-box mb-55 p-relative">
                        <div
                          style={{
                            width: "100%",
                            height: "300px",
                            position: "relative",
                            textAlign: "center",
                          }}
                        >
                          <svg
                            viewBox="0 0 800 200"
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
                                    y={`${20 + index * 30}%`} // Adjust spacing between lines
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    fontSize="70"
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
                                  height: "auto",
                                  objectFit: "cover",
                                  display: "block",
                                }}
                              />
                            </foreignObject>
                          </svg>
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

export default ServiceThirdHero;
