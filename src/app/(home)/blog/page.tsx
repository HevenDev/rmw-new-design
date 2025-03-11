import Articles from "@/allPages/blogPage/Articles";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import PagesBanner from "@/components/pagesBanner/PagesBanner";
import React from "react";

const page = () => {

  return (
    <div>
      {/* <div className="mouseCursor cursor-outer d-none"></div>
      <div className="mouseCursor cursor-inner cursor-4">
        <span className="inner-text-3">
          <img
            src="https://etorisoft.com/wp/avtrix/wp-content/themes/avtrix/assets/img/awards/awards-4-cursore.png"
            alt=""
          />
        </span>
      </div> */}

      {/* <!-- back to top start --> */}
      {/* <div className="back-to-top-wrapper">
        <button id="back_to_top" type="button" className="back-to-top-btn">
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 6L6 1L1 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div> */}
      {/* <!-- back to top end --> */}

      {/* <!-- pre loader area start --> */}
      {/* <div id="loading">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <div className="object"></div>
          <div className="object"></div>
          <div className="object"></div>
          <div className="object"></div>
          <div className="object"></div>
          <div className="object"></div>
          <div className="object"></div>
          <div className="object"></div>
          <div className="object"></div>
          <div className="object"></div>
          <div className="loader-text">Loading ...</div>
        </div>
      </div>
    </div> */}
      {/* <!-- pre loader area end --> */}

      {/* <!-- header start --> */}

      <Header />

      {/* <!-- start offcanvas area  --> */}
      <div className="body-overlay"></div>
      {/* <!-- start offcanvas end  -->
    <!-- header end -->

    <!-- wrapper-box start -->

    <!-- breadcrumb area start --> */}
      <PagesBanner />
      {/* <!-- breadcrumb area end -->

    <!-- search popup start --> */}
      {/* <div className="tp-search-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="tp-search__wrapper">
                <div className="tp-search__top d-flex justify-content-between align-items-center">
                  <div className="tp-search__logo">
                    <Link href="https://etorisoft.com/wp/avtrix/">
                      <img
                        src="https://etorisoft.com/wp/avtrix/wp-content/themes/avtrix/assets/img/logo/logo.png"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="tp-search__close">
                    <button
                      type="button"
                      className="tp-search__close-btn tp-search-close-btn"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 1L1 17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 1L17 17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="tp-search__form">
                  <form method="get" action="https://etorisoft.com/wp/avtrix/">
                    <div className="tp-search__input">
                      <input
                        type="text"
                        name="s"
                        className="search-input-field"
                        placeholder="Search..."
                      />
                      <span className="search-focus-border"></span>
                      <button type="submit">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.0002 19.0002L17.2002 17.2002"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="search-popup-overlay"></div> */}
      {/* <!-- search popup end --> */}

      <Articles />

      {/* <!-- tp footer area start  --> */}
      <Footer />
    </div>
  );
};

export default page;
