import Link from "next/link";

interface CategoryBannerProps {
  categoryTitle: string;
}
const CategoryBanner: React.FC<CategoryBannerProps> = ({ categoryTitle }) => {
  return (
    <section className="breadcrumb__area fix p-relative breadcrumb__plr breadcrumb__overlay breadcrumb__bg">
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
                    <span property="name">Blog / Category</span>
                  </Link>
                  <meta property="position" content="1" />
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  position: "relative",
                  textAlign: "center",
                  marginTop: "90px",
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
                      <text
                        x="50%"
                        y={`40%`} // Adjust spacing between lines
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontSize="65"
                        fontWeight="bold"
                        fill="white"
                        fontFamily="Arial, sans-serif"
                      >
                        {categoryTitle}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;
