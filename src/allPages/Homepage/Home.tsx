import Link from "next/link";
import { FaFacebook, FaYoutube, FaInstagramSquare, FaLinkedin  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
// import { useSplitText } from "@/hooks/useSplitText";

const Home = () => {
  // const textRefs = useSplitText();

  return (
    <div
      className="elementor-element elementor-element-199ac0f e-con-full e-flex e-con e-parent"
      data-id="199ac0f"
      data-element_type="container"
    >
      <div
        className="elementor-element elementor-element-5a1b25c e-con-full e-flex e-con e-child"
        data-id="5a1b25c"
        data-element_type="container"
      >
        <div
          className="elementor-element elementor-element-12cef4b elementor-widget elementor-widget-hero-banner"
          data-id="12cef4b"
          data-element_type="widget"
          data-widget_type="hero-banner.default"
        >
          <div className="elementor-widget-container">
            <section
              className="tp-hero__area fix tp-hero__space tp-hero__bg p-relative tp-bg-className"
              data-background="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/hero-bg-1.jpg"
            >
              <img
                decoding="async"
                src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/hero-bg-1.jpg"
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  zIndex: "-1",
                  filter: "sepia(100%) saturate(500%) hue-rotate(10deg)",
                }}
              />
                                                                       
              <div className="tp-hero__social">
                <div className="tp-hero__social-content">
                  <ul>
                    <li>
                      <Link href="https://www.facebook.com/ritzmediaworld/">
                        <i className="fab fa-facebook-f"><FaFacebook /></i>
                        <span>Facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://x.com/i/flow/login?redirect_after_login=%2Fritzmediaworld">
                        <i className="fab fa-twitter"><FaSquareXTwitter /></i>
                        <span>Twitter</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.youtube.com/c/RitzMediaWorldCreativeThinksMedia">
                        <i className="fab fa-dribbble"><FaYoutube /></i>
                        <span>Youtube</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/ritzmediaworld/">
                        <i className="fab fa-behance"><FaInstagramSquare /></i>
                        <span>Instagram</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/company/ritzmediaworld/?originalSubdomain=in">
                        <i className="fab fa-behance"><FaLinkedin /></i>
                        <span>LinkedIn</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tp-hero__wrap">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-8 col-lg-7">
                      <div className="tp-hero__title-box mb-70 p-relative">
                        <span className="tp-hero__subtitle mb-20">
                        Telling Stories to Remember with
                        </span>
                        <h3 className="tp-hero__title tp-marketing tp-split__text tp-split__in-right p-relative">
                          Advertising
                        </h3>
                        <h3 className="tp-hero__title tp-marketing tp-split__text tp-split__in-right p-relative">
                          Branding
                        </h3>
                        <h3 className="tp-hero__title tp-marketing tp-split__text tp-split__in-right p-relative">
                          Communication
                        </h3>
                        <div className="tp-hero__title-shape">
                          <span>
                            <svg
                              width="349"
                              height="83"
                              viewBox="0 0 349 83"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M289.606 6.18644C224.67 -0.493387 79.3469 -4.08379 17.5379 34.9932C-59.7235 83.8393 171.734 85.1324 259.844 77.577C312.563 73.0563 347 61.9956 347 45.9929C347 32.2157 287.201 11.5094 178.975 15.4233"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="tp-hero__action d-flex align-items-center">
                        <span>
                          <Link
                            href="/service"
                            className="tp-hero__action-btn"
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
                                />
                              </svg>
                            </span>
                          </Link>
                        </span>
                        <Link
                          href="/service"
                          rel="nofollow"
                          target="_self"
                        >
                          LEARN MORE
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                      <div className="tp-hero__content tp-hero-content">
                        <div className="tp-hero__thumb mb-80 p-relative">
                          <img
                            decoding="async"
                            src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/hero-thumb-1.png"
                            alt=""
                          />
                          <div className="tp-hero__thumb-shape">
                            <span>
                              <svg
                                width="72"
                                height="72"
                                viewBox="0 0 72 72"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M67.5 32.0625H50.6948L65.25 23.6588C66.154 23.1366 66.8137 22.2768 67.0839 21.2684C67.3542 20.26 67.2129 19.1855 66.6911 18.2812C66.169 17.3772 65.3092 16.7176 64.3008 16.4473C63.2923 16.1771 62.2179 16.3184 61.3136 16.8401L46.7573 25.2428L55.1599 10.6875C55.6816 9.78324 55.8229 8.70878 55.5527 7.70037C55.2824 6.69197 54.6228 5.83216 53.7188 5.31C52.8145 4.78778 51.7399 4.64612 50.7312 4.91617C49.7226 5.18621 48.8625 5.84585 48.3401 6.75L39.9375 21.3053V4.5C39.9375 3.45571 39.5227 2.45419 38.7842 1.71577C38.0458 0.977343 37.0443 0.5625 36 0.5625C34.9557 0.5625 33.9542 0.977343 33.2158 1.71577C32.4773 2.45419 32.0625 3.45571 32.0625 4.5V21.3053L23.6599 6.75C23.1377 5.84597 22.2779 5.18631 21.2695 4.91606C20.2611 4.64582 19.1866 4.78711 18.2824 5.30888C17.8345 5.56733 17.4419 5.91147 17.127 6.32165C16.8122 6.73183 16.5812 7.20002 16.4473 7.69948C16.3133 8.19893 16.2791 8.71988 16.3465 9.23256C16.4139 9.74525 16.5816 10.2396 16.8401 10.6875L25.2416 25.2416L10.6875 16.8401C9.78324 16.3184 8.70878 16.1771 7.70037 16.4473C6.69197 16.7176 5.83216 17.3772 5.31 18.2812C4.78814 19.1854 4.64668 20.2597 4.91671 21.2681C5.18674 22.2765 5.84616 23.1364 6.75 23.6588L21.3053 32.0625H4.5C3.45571 32.0625 2.45419 32.4773 1.71577 33.2158C0.977343 33.9542 0.5625 34.9557 0.5625 36C0.5625 37.0443 0.977343 38.0458 1.71577 38.7842C2.45419 39.5227 3.45571 39.9375 4.5 39.9375H21.3053L6.75 48.3413C5.84616 48.8636 5.18674 49.7235 4.91671 50.7319C4.64668 51.7403 4.78814 52.8146 5.31 53.7188C5.83216 54.6228 6.69197 55.2824 7.70037 55.5527C8.70878 55.8229 9.78324 55.6816 10.6875 55.1599L25.2416 46.7584L16.8401 61.3125C16.3184 62.2168 16.1771 63.2912 16.4473 64.2996C16.7176 65.308 17.3772 66.1678 18.2812 66.69C19.1855 67.2122 20.2601 67.3539 21.2688 67.0838C22.2774 66.8138 23.1375 66.1541 23.6599 65.25L32.0625 50.6959V67.5C32.0625 68.5443 32.4773 69.5458 33.2158 70.2842C33.9542 71.0227 34.9557 71.4375 36 71.4375C37.0443 71.4375 38.0458 71.0227 38.7842 70.2842C39.5227 69.5458 39.9375 68.5443 39.9375 67.5V50.6959L48.3401 65.25C48.8623 66.154 49.7221 66.8137 50.7305 67.0839C51.7389 67.3542 52.8134 67.2129 53.7176 66.6911C54.6217 66.169 55.2813 65.3092 55.5516 64.3008C55.8218 63.2923 55.6805 62.2179 55.1587 61.3136L46.7573 46.7584L61.3125 55.1599C62.2168 55.6816 63.2912 55.8229 64.2996 55.5527C65.308 55.2824 66.1678 54.6228 66.69 53.7188C67.2119 52.8146 67.3533 51.7403 67.0833 50.7319C66.8133 49.7235 66.1538 48.8636 65.25 48.3413L50.6948 39.9375H67.5C68.5443 39.9375 69.5458 39.5227 70.2842 38.7842C71.0227 38.0458 71.4375 37.0443 71.4375 36C71.4375 34.9557 71.0227 33.9542 70.2842 33.2158C69.5458 32.4773 68.5443 32.0625 67.5 32.0625Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <p>
                        Billions of words written, Millions of Creatives Delivered, Thousands of Campaigns executed, and hundreds of success stories completed. This is a quick summary of what Ritz Media World is all about.
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

export default Home;
