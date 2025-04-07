import Link from "next/link";
const ServiceThirdHero = () => {
  return (
    <div
      className="elementor-element elementor-element-9b5be38 e-con-full e-flex e-con e-parent e-lazyloaded"
      data-id="9b5be38"
      data-element_type="container"
    >
      <div
        className="elementor-element elementor-element-88259bc e-con-full e-flex e-con e-child"
        data-id="88259bc"
        data-element_type="container"
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
              data-background="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/hero-bg-3-1.png"
              style={{
                backgroundImage:
                  "url(https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/hero-bg-3-1.png)",
              }}
            >
              <div className="tp-hero__3-shape">
                <img
                  decoding="async"
                  src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/hero-shape-3-1.png"
                  alt=""
                />
              </div>
              <div className="tp-hero__3-social">
                <div className="tp-hero__2-social-content">
                  <ul>
                  <li>
                      <Link href="https://www.facebook.com/ritzmediaworld/"> Fb {" "}</Link> /
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/ritzmediaworld/"> In </Link>
                    </li>
                    <li>
                      <Link href="https://www.youtube.com/c/RitzMediaWorldCreativeThinksMedia"> YT </Link>
                    </li>
                    <li>
                      <Link href="https://x.com/i/flow/login?redirect_after_login=%2Fritzmediaworld"> X </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/company/ritzmediaworld/?originalSubdomain=in"> Ln</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tp-hero__3-wrap">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-12">
                      <div className="tp-hero__3-title-box mb-55 p-relative">
                        <h3 className="tp-hero__3-big-title cd-headline clip tp_title_anim">
                          <span
                            className="cd-words-wrapper"
                            style={{ width: "326.781px" }}
                          >
                            <b className="is-hidden">NEW</b>
                            <b className="app is-hidden">UI/UX</b>
                            <b className="is-visible">SEO</b>
                          </span>
                          AGENCY{" "}
                        </h3>
                      </div>
                      <div className="tp-hero__3-content">
                        <div className="row align-items-center">
                          <div className="col-xl-5 col-lg-5 d-md-none d-lg-block">
                            <div
                              className="tp-hero__3-dsc wow tpfadeUp animated"
                              data-wow-duration=".9s"
                              data-wow-delay=".5s"
                              style={{
                                visibility: "visible",
                                animationDuration: "0.9s",
                                animationDelay: "0.5s",
                              }}
                            >
                              <p>
                                {" "}
                                We are a creative studio that specializes in
                                providing high-quality design and branding
                                solutions to businesses and individuals.{" "}
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-5 col-lg-5 col-md-8">
                            <div
                              className="tp-hero__3-title-box wow tpfadeUp animated"
                              data-wow-duration=".9s"
                              data-wow-delay=".7s"
                              style={{
                                visibility: "visible",
                                animationDuration: "0.9s",
                                animationDelay: "0.7s",
                              }}
                            >
                              <h3 className="tp-hero__title">
                                WEB{" "}
                                <span>
                                  <i>DESIGN</i>
                                </span>{" "}
                                <br />
                                SERVICES{" "}
                              </h3>
                            </div>
                          </div>
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
