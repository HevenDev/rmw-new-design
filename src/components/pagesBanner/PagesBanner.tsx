"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

interface PagesBannerProps {
  headingTitle: string;
}
const PagesBanner: React.FC<PagesBannerProps> = ({ headingTitle }) => {
  const [viewBox, setViewBox] = useState("0 0 500 200");
  useEffect(() => {
    const updateViewBox = () => {
      setViewBox(window.innerWidth >= 800 ? "0 0 800 200" : "0 0 500 200");
    };

    updateViewBox(); // Set initial value
    window.addEventListener("resize", updateViewBox);
    return () => window.removeEventListener("resize", updateViewBox);
  }, []);
  return (
    <section
      className="breadcrumb__area fix p-relative breadcrumb__plr breadcrumb__overlay breadcrumb__bg"
    >
      {/* <img
          decoding="async"
          src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/12/breadcrumb-bg-1.jpg"
          alt=""
          style={{
            backgroundColor: "rgb(20, 14, 14)", 
            top:"1px", 
            height: "100%",
            width: "100%",
            position: "absolute",
            zIndex: "-1",
            filter: "sepia(100%) saturate(500%) hue-rotate(10deg)",
          }}


        />   */}
      <div className="breadcrumb__shape"
      >

        {/* <img
          src={bannerImages}
          alt=""
          style={{
            width: "100vw",
            height: "53vh",
            objectFit: "cover",

          }}
        /> */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content text-center p-relative z-index-2">
              <div className="breadcrumb__list">
                {/* <!-- Breadcrumb NavXT 7.4.1 --> */}
                <span property="itemListElement" typeof="ListItem">
                  <Link
                    property="item"
                    typeof="WebPage"
                    title="Go to Ritz Media World."
                    href="/"
                    className="home"
                  >
                  </Link>
                  <meta property="position" content="1" />
                </span>
              </div>
              {/* <h3 className="breadcrumb__title">{headingTitle}</h3> */}
              {/* <div
                style={{
                  width: "100%",
                  height: "auto",
                  position: "relative",
                  textAlign: "center",
                  marginTop:"90px"
                }}
              >
                <svg
                  viewBox={viewBox}
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
                      <text
                        x="50%"
                        y={`40%`} // Adjust spacing between lines
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontSize="5rem"
                        fontWeight="bold"
                        fill="white"
                        fontFamily="Arial, sans-serif"
                      >
                        {headingTitle}
                      </text>
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
                      src="/videos/bg_pattern2.mp4"
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
              </div> */}
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  position: "relative",
                  textAlign: "center",
                  marginTop: "90px",
                  overflow: "hidden",
                }}
              >
                {/* Video shown ONLY through text shape */}
                <svg
                  viewBox={viewBox}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <mask id="video-text-mask" maskUnits="userSpaceOnUse">
                      <rect width="100%" height="100%" fill="black" />
                      <text
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontSize="5rem"
                        fontWeight="bold"
                        fill="white"
                        fontFamily="Arial, sans-serif"
                      >
                        {headingTitle}
                      </text>
                    </mask>
                  </defs>

                  {/* Masked video inside SVG */}
                  <foreignObject
                    width="100%"
                    height="100%"
                    mask="url(#video-text-mask)"
                  >
                    <video
                      src="/videos/bg_pattern2.mp4"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default PagesBanner;
