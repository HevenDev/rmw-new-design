import Link from "next/link";

const ServiceMainHero = () => {
  return (
    <div
      className="elementor-element elementor-element-00d6da7 e-con-full e-flex e-con e-parent e-lazyloaded"
      data-id="00d6da7"
      data-element_type="container"
      style={{padding:'0', margin: "0"}}
    >
      <div
        className="elementor-element elementor-element-3a22ef0 e-con-full e-flex e-con e-child"
        data-id="3a22ef0"
        data-element_type="container"
        style={{padding:'0', margin: "0"}}
      >
        <div
          className="elementor-element elementor-element-e84e3a9 elementor-widget elementor-widget-hero-banner"
          data-id="e84e3a9"
          data-element_type="widget"
          data-widget_type="hero-banner.default"
          style={{backgroundImage: "url(https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/bg.png)",
            backgroundPosition: "bottom left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"}}
        >
          <div className="elementor-widget-container">
            <section className="tp-hero-2-area fix tp-hero__space tp-hero__2-bg tp-hero__2-overlay p-relative tp-bg-className">
              <div className="tp-hero__2-social">
                <div className="tp-hero__2-social-content">
                  <ul>
                    <li>Follow Us</li>
                    <li>
                      <Link href="https://www.facebook.com/ritzmediaworld/"> Fb </Link>
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
              <div className="tp-hero__2-wrap">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-7">
                      <div className="tp-hero__2-title-box mb-55 p-relative">
                        <span className="tp-hero__subtitle text-white mb-30">
                        Services Tailored to Transform Your Brand from 
                        </span>
                        <h3
                          className="tp-hero__title tp-hero-creative-agency p-relative wow avtrix_clip_down"
                          data-wow-delay=".3s"
                          data-wow-duration="2s"
                          style={{
                            visibility: "visible",
                            animationDuration: "2s",
                            animationDelay: "0.3s",
                            animationName: "avtrix_clip_down",
                          }}
                        >
                          {/* <span>“Just Another”</span> to <br /> <span>“The One.”</span> */}
                          &quot;Just Another&quot; <span>to</span> <br /> &quot;The One.&quot;
                        </h3>
                      </div>
                      <div className="tp-hero__2-action d-flex align-items-center">
                        <span>
                          <Link
                            href="/contact"
                            className="tp-hero__action-btn tp-hero__2-btn"
                          >
                            <span>
                              <svg
                                width="33"
                                height="33"
                                viewBox="0 0 33 33"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.99996 26.5469L29.4548 7.97636M6.73828 2L31.2851 6.73832L26.5468 31.2852"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="square"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </span>
                          </Link>
                        </span>
                        <Link
                          href="/contact/"
                          rel="nofollow"
                          target="_self"
                        >
                          
                          CONTACT US
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                      <div className="tp-hero__2-content p-relative">
                        <div className="tp-hero__2-circle-shape">
                          <img
                            decoding="async"
                            src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/website_designing.png"
                            alt=""
                          />
                        </div>
                        <div
                          className="tp-hero__2-icon mb-70 wow tpfadeUp animated"
                          data-wow-duration=".9s"
                          data-wow-delay=".3s"
                          style={{
                            visibility: "visible",
                            animationDuration: "0.9s",
                            animationDelay: "0.3s",
                          }}
                        >
                          <Link
                            href="/contact/"
                            rel="nofollow"
                            target="_self"
                          >
                            <span>
                              <svg
                                width="93"
                                height="93"
                                viewBox="0 0 93 93"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 88L83.75 9.25M5 4H89V88"
                                  stroke="currentColor"
                                  strokeWidth="6.5"
                                  strokeLinecap="square"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </span>
                          </Link>
                        </div>
                        <p>
                        At Ritz Media World, we have an obsession with being wizards of quirkiness that morph good ideas into Brilliant ones. Our services deliver results that drive your competitor’s envy. We blend digital magic, classic & modern mediums, and creative ingenuity to ensure that your brand doesn’t just speak; it captivates.
                        </p>
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

export default ServiceMainHero;
