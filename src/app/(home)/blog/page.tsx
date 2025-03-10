import React from "react";

const page = () => {
  return (
    <div>
      <div className="mouseCursor cursor-outer d-none"></div>
      <div className="mouseCursor cursor-inner cursor-4">
        <span className="inner-text-3">
          <img
            src="https://etorisoft.com/wp/avtrix/wp-content/themes/avtrix/assets/img/awards/awards-4-cursore.png"
            alt=""
          />
        </span>
      </div>

      {/* <!-- back to top start --> */}
      <div className="back-to-top-wrapper">
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
      </div>
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

      <header>
        <div
          id="header-sticky"
          className="tp-header-top-area tp-header__style-2 z-index-3 tp-header__border tp-header__transparent pr-85 pl-70 black-bg"
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="tp-main__logo">
                  <a
                    className="main-logo"
                    href="https://etorisoft.com/wp/avtrix/"
                  >
                    <img
                      src="https://etorisoft.com/wp/avtrix/wp-content/themes/avtrix/assets/img/logo/logo.png"
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                <div className="tp-main__menu d-flex justify-content-center">
                  <nav>
                    <ul id="menu-main-menu" className="">
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-2496"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-2496 has-mega-menu has-dropdown nav-item"
                      >
                        <a
                          title="Home"
                          href="https://etorisoft.com/wp/avtrix/"
                          className="nav-links"
                        >
                          Home
                        </a>
                        <div className="tp-submenu submenu has-homemenu">
                          {/* <style>
                          .elementor-103
                            .elementor-element.elementor-element-039dca9 {
                            --display: flex;
                            --flex-direction: row;
                            --container-widget-width: initial;
                            --container-widget-height: 100%;
                            --container-widget-flex-grow: 1;
                            --container-widget-align-self: stretch;
                            --flex-wrap-mobile: wrap;
                            --margin-top: 0px;
                            --margin-bottom: 0px;
                            --margin-left: 0px;
                            --margin-right: 0px;
                            --padding-top: 0px;
                            --padding-bottom: 0px;
                            --padding-left: 0px;
                            --padding-right: 0px;
                          }
                          .elementor-103
                            .elementor-element.elementor-element-f21576b {
                            --display: flex;
                            --margin-top: 0px;
                            --margin-bottom: 0px;
                            --margin-left: 0px;
                            --margin-right: 0px;
                            --padding-top: 0px;
                            --padding-bottom: 0px;
                            --padding-left: 0px;
                            --padding-right: 0px;
                          }
                        </style> */}
                          <div
                            data-elementor-type="container"
                            data-elementor-id="103"
                            className="elementor elementor-103"
                          >
                            <div
                              className="elementor-element elementor-element-039dca9 e-con-full e-flex e-con e-parent"
                              data-id="039dca9"
                              data-element_type="container"
                            >
                              <div
                                className="elementor-element elementor-element-f21576b e-con-full e-flex e-con e-child"
                                data-id="f21576b"
                                data-element_type="container"
                              >
                                <div
                                  className="elementor-element elementor-element-08a5267 elementor-widget elementor-widget-tp-menu-demo"
                                  data-id="08a5267"
                                  data-element_type="widget"
                                  data-widget_type="tp-menu-demo.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-5 row-cols-xl-6">
                                      <div className="col homemenu">
                                        <div className="homemenu-thumb mb-15">
                                          <img
                                            src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/home-1.jpg"
                                            alt=""
                                          />
                                          <div className="homemenu-btn">
                                            <a
                                              className="tp-menu-btn"
                                              href="https://etorisoft.com/wp/avtrix/"
                                              target="_self"
                                              rel="nofollow"
                                            >
                                              Multi page
                                            </a>
                                          </div>
                                        </div>
                                        <div className="homemenu-content text-center">
                                          <h4 className="homemenu-title">
                                            <a
                                              href="https://etorisoft.com/wp/avtrix/"
                                              target="_self"
                                              rel="nofollow"
                                            >
                                              Digital Marketing
                                            </a>
                                          </h4>
                                        </div>
                                      </div>
                                      <div className="col homemenu">
                                        <div className="homemenu-thumb mb-15">
                                          <img
                                            src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/home-2.jpg"
                                            alt=""
                                          />
                                          <div className="homemenu-btn">
                                            <a
                                              className="tp-menu-btn"
                                              href="https://etorisoft.com/wp/avtrix/home-02/"
                                              target="_self"
                                              rel="nofollow"
                                            >
                                              Multi page
                                            </a>
                                          </div>
                                        </div>
                                        <div className="homemenu-content text-center">
                                          <h4 className="homemenu-title">
                                            <a
                                              href="https://etorisoft.com/wp/avtrix/home-02/"
                                              target="_self"
                                              rel="nofollow"
                                            >
                                              Branding
                                            </a>
                                          </h4>
                                        </div>
                                      </div>
                                      <div className="col homemenu">
                                        <div className="homemenu-thumb mb-15">
                                          <img
                                            src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/home-3.jpg"
                                            alt=""
                                          />
                                          <div className="homemenu-btn">
                                            <a
                                              className="tp-menu-btn"
                                              href="https://etorisoft.com/wp/avtrix/home-03/"
                                              target="_self"
                                              rel="nofollow"
                                            >
                                              Multi page
                                            </a>
                                          </div>
                                        </div>
                                        <div className="homemenu-content text-center">
                                          <h4 className="homemenu-title">
                                            <a
                                              href="https://etorisoft.com/wp/avtrix/home-03/"
                                              target="_self"
                                              rel="nofollow"
                                            >
                                              Design Studio
                                            </a>
                                          </h4>
                                        </div>
                                      </div>
                                      <div className="col homemenu">
                                        <div className="homemenu-thumb mb-15">
                                          <img
                                            src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/home-4.jpg"
                                            alt=""
                                          />
                                          <div className="homemenu-btn">
                                            <a
                                              className="tp-menu-btn"
                                              href="https://etorisoft.com/wp/avtrix/home-04/"
                                              target="_self"
                                              rel="nofollow"
                                            >
                                              Multi page
                                            </a>
                                          </div>
                                        </div>
                                        <div className="homemenu-content text-center">
                                          <h4 className="homemenu-title">
                                            <a
                                              href="https://etorisoft.com/wp/avtrix/home-04/"
                                              target="_self"
                                              rel="nofollow"
                                            >
                                              Freelancer
                                            </a>
                                          </h4>
                                        </div>
                                      </div>
                                      <div className="col homemenu">
                                        <div className="homemenu-thumb mb-15">
                                          <img
                                            src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/home-5.jpg"
                                            alt=""
                                          />
                                          <div className="homemenu-btn">
                                            <a
                                              className="tp-menu-btn"
                                              href="https://etorisoft.com/wp/avtrix/home-05/"
                                              target="_self"
                                              rel="nofollow"
                                            >
                                              Multi page
                                            </a>
                                          </div>
                                        </div>
                                        <div className="homemenu-content text-center">
                                          <h4 className="homemenu-title">
                                            <a
                                              href="https://etorisoft.com/wp/avtrix/home-05/"
                                              target="_self"
                                              rel="nofollow"
                                            >
                                              Creative Agency
                                            </a>
                                          </h4>
                                        </div>
                                      </div>
                                      <div className="col homemenu">
                                        <div className="homemenu-thumb mb-15">
                                          <img
                                            src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/home-6.jpg"
                                            alt=""
                                          />
                                          <div className="homemenu-btn">
                                            <a
                                              className="tp-menu-btn"
                                              href="https://etorisoft.com/wp/avtrix/home-06/"
                                              target="_self"
                                              rel="nofollow"
                                            >
                                              Multi page
                                            </a>
                                          </div>
                                        </div>
                                        <div className="homemenu-content text-center">
                                          <h4 className="homemenu-title">
                                            <a
                                              href="https://etorisoft.com/wp/avtrix/home-06/"
                                              target="_self"
                                              rel="nofollow"
                                            >
                                              Portfolio Showcase
                                            </a>
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-73"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73 nav-item"
                      >
                        <a
                          title="About"
                          href="https://etorisoft.com/wp/avtrix/about/"
                          className="nav-links"
                        >
                          About
                        </a>
                      </li>
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-88"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown has-dropdown menu-item-88 nav-item"
                      >
                        <a
                          title="Service"
                          href="https://etorisoft.com/wp/avtrix/service/"
                          className="nav-links"
                        >
                          Service
                        </a>
                        <ul
                          className="submenu tp-submenu"
                          aria-labelledby="103"
                          role="menu"
                        >
                          <li
                            itemScope
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-92"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-92 nav-item"
                          >
                            <a
                              title="Service"
                              href="https://etorisoft.com/wp/avtrix/service/"
                              className="dropdown-items"
                            >
                              Service
                            </a>
                          </li>
                          <li
                            itemScope
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-89"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-89 nav-item"
                          >
                            <a
                              title="Service Details"
                              href="https://etorisoft.com/wp/avtrix/service-details/"
                              className="dropdown-items"
                            >
                              Service Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-94"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown has-dropdown menu-item-94 nav-item"
                      >
                        <a title="Projects" href="#" className="nav-links">
                          Projects
                        </a>
                        <ul
                          className="submenu tp-submenu"
                          aria-labelledby="103"
                          role="menu"
                        >
                          <li
                            itemScope
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-83"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-83 nav-item"
                          >
                            <a
                              title="Portfolio – 01"
                              href="https://etorisoft.com/wp/avtrix/portfolio/"
                              className="dropdown-items"
                            >
                              Portfolio – 01
                            </a>
                          </li>
                          <li
                            itemScope
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-84"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-84 nav-item"
                          >
                            <a
                              title="Portfolio – 02"
                              href="https://etorisoft.com/wp/avtrix/portfolio-02/"
                              className="dropdown-items"
                            >
                              Portfolio – 02
                            </a>
                          </li>
                          <li
                            itemScope
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-85"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-85 nav-item"
                          >
                            <a
                              title="Portfolio – 03"
                              href="https://etorisoft.com/wp/avtrix/portfolio-03/"
                              className="dropdown-items"
                            >
                              Portfolio – 03
                            </a>
                          </li>
                          <li
                            itemScope
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-86"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-86 nav-item"
                          >
                            <a
                              title="Portfolio Details"
                              href="https://etorisoft.com/wp/avtrix/portfolio-details/"
                              className="dropdown-items"
                            >
                              Portfolio Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-74"
                        className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-55 current_page_item current_page_parent current-menu-ancestor current-menu-parent current_page_ancestor menu-item-has-children dropdown has-dropdown active menu-item-74 nav-item"
                      >
                        <a
                          title="Blog"
                          href="https://etorisoft.com/wp/avtrix/blog/"
                          className="nav-links"
                        >
                          Blog
                        </a>
                        <ul
                          className="submenu tp-submenu"
                          aria-labelledby="103"
                          role="menu"
                        >
                          <li
                            itemScope
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-2461"
                            className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-55 current_page_item current_page_parent active menu-item-2461 nav-item"
                          >
                            <a
                              title="Blog"
                              href="https://etorisoft.com/wp/avtrix/blog/"
                              className="dropdown-items"
                            >
                              Blog
                            </a>
                          </li>
                          <li
                            itemScope
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-2460"
                            className="menu-item menu-item-type-post_type menu-item-object-post menu-item-2460 nav-item"
                          >
                            <a
                              title="Blog Details"
                              href="https://etorisoft.com/wp/avtrix/innovative-solutions-for-a-digital-tomorrow/"
                              className="dropdown-items"
                            >
                              Blog Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-95"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown has-dropdown menu-item-95 nav-item"
                      >
                        <a title="Pages" href="#" className="nav-links">
                          Pages
                        </a>
                        <ul
                          className="submenu tp-submenu"
                          aria-labelledby="103"
                          role="menu"
                        >
                          <li
                            itemScope
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-90"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-90 nav-item"
                          >
                            <a
                              title="Team"
                              href="https://etorisoft.com/wp/avtrix/team/"
                              className="dropdown-items"
                            >
                              Team
                            </a>
                          </li>
                          <li
                            itemScope
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-91"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-91 nav-item"
                          >
                            <a
                              title="Team Details"
                              href="https://etorisoft.com/wp/avtrix/team-details/"
                              className="dropdown-items"
                            >
                              Team Details
                            </a>
                          </li>
                          <li
                            itemScope
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-87"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-87 nav-item"
                          >
                            <a
                              title="Pricing"
                              href="https://etorisoft.com/wp/avtrix/pricing/"
                              className="dropdown-items"
                            >
                              Pricing
                            </a>
                          </li>
                          <li
                            itemScope
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-76"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-76 nav-item"
                          >
                            <a
                              title="Error Page"
                              href="https://etorisoft.com/wp/avtrix/error-page/"
                              className="dropdown-items"
                            >
                              Error Page
                            </a>
                          </li>
                          <li
                            itemScope
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-75"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-75 nav-item"
                          >
                            <a
                              title="Contact"
                              href="https://etorisoft.com/wp/avtrix/contact/"
                              className="dropdown-items"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="tp-header__right d-flex justify-content-end">
                  <div className="tp-header__action">
                    <button className="tp-header__menu-btn tp-offcanvas-open-btn">
                      Menu
                      <span>
                        <i className="fal fa-bars"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- start offcanvas area  --> */}
      <div className="tp-offcanvas__area">
        <div className="tp-offcanvas__circle-1">
          <span></span>
        </div>
        <div className="tp-offcanvas__circle-2">
          <span></span>
        </div>
        <div className="tp-offcanvas__wrapper">
          <div className="tp-offcanvas__close">
            <button className="tp-offcanvas__close-btn tp-offcanvas-close-btn">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1L1 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M1 1L11 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="tp-offcanvas__content">
            <div className="tp-offcanvas__top mb-50 d-flex justify-content-between align-items-center">
              <div className="tp-offcanvas__logo">
                <a href="https://etorisoft.com/wp/avtrix/">
                  <img
                    src="https://etorisoft.com/wp/avtrix/wp-content/themes/avtrix/assets/img/logo/logo.png"
                    alt="logo"
                  />
                </a>
              </div>
            </div>

            <div className="tp-main-menu-mobile d-xl-none">
              <nav className="tp-main-menu-content">
                <ul id="menu-main-menu-1" className="">
                  <li
                    itemScope
                    itemType="https://www.schema.org/SiteNavigationElement"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-2496 has-mega-menu has-dropdown nav-item"
                  >
                    <a
                      title="Home"
                      href="https://etorisoft.com/wp/avtrix/"
                      className="nav-links"
                    >
                      Home
                    </a>
                    <div className="tp-submenu submenu has-homemenu">
                      {/* <style>
                      .elementor-103
                        .elementor-element.elementor-element-039dca9 {
                        --display: flex;
                        --flex-direction: row;
                        --container-widget-width: initial;
                        --container-widget-height: 100%;
                        --container-widget-flex-grow: 1;
                        --container-widget-align-self: stretch;
                        --flex-wrap-mobile: wrap;
                        --margin-top: 0px;
                        --margin-bottom: 0px;
                        --margin-left: 0px;
                        --margin-right: 0px;
                        --padding-top: 0px;
                        --padding-bottom: 0px;
                        --padding-left: 0px;
                        --padding-right: 0px;
                      }
                      .elementor-103
                        .elementor-element.elementor-element-f21576b {
                        --display: flex;
                        --margin-top: 0px;
                        --margin-bottom: 0px;
                        --margin-left: 0px;
                        --margin-right: 0px;
                        --padding-top: 0px;
                        --padding-bottom: 0px;
                        --padding-left: 0px;
                        --padding-right: 0px;
                      }
                    </style> */}
                      <div
                        data-elementor-type="container"
                        data-elementor-id="103"
                        className="elementor elementor-103"
                      >
                        <div
                          className="elementor-element elementor-element-039dca9 e-con-full e-flex e-con e-parent"
                          data-id="039dca9"
                          data-element_type="container"
                        >
                          <div
                            className="elementor-element elementor-element-f21576b e-con-full e-flex e-con e-child"
                            data-id="f21576b"
                            data-element_type="container"
                          >
                            <div
                              className="elementor-element elementor-element-08a5267 elementor-widget elementor-widget-tp-menu-demo"
                              data-id="08a5267"
                              data-element_type="widget"
                              data-widget_type="tp-menu-demo.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-5 row-cols-xl-6">
                                  <div className="col homemenu">
                                    <div className="homemenu-thumb mb-15">
                                      <img
                                        src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/home-1.jpg"
                                        alt=""
                                      />
                                      <div className="homemenu-btn">
                                        <a
                                          className="tp-menu-btn"
                                          href="https://etorisoft.com/wp/avtrix/"
                                          target="_self"
                                          rel="nofollow"
                                        >
                                          Multi page
                                        </a>
                                      </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                      <h4 className="homemenu-title">
                                        <a
                                          href="https://etorisoft.com/wp/avtrix/"
                                          target="_self"
                                          rel="nofollow"
                                        >
                                          Digital Marketing
                                        </a>
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="col homemenu">
                                    <div className="homemenu-thumb mb-15">
                                      <img
                                        src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/home-2.jpg"
                                        alt=""
                                      />
                                      <div className="homemenu-btn">
                                        <a
                                          className="tp-menu-btn"
                                          href="https://etorisoft.com/wp/avtrix/home-02/"
                                          target="_self"
                                          rel="nofollow"
                                        >
                                          Multi page
                                        </a>
                                      </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                      <h4 className="homemenu-title">
                                        <a
                                          href="https://etorisoft.com/wp/avtrix/home-02/"
                                          target="_self"
                                          rel="nofollow"
                                        >
                                          Branding
                                        </a>
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="col homemenu">
                                    <div className="homemenu-thumb mb-15">
                                      <img
                                        src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/home-3.jpg"
                                        alt=""
                                      />
                                      <div className="homemenu-btn">
                                        <a
                                          className="tp-menu-btn"
                                          href="https://etorisoft.com/wp/avtrix/home-03/"
                                          target="_self"
                                          rel="nofollow"
                                        >
                                          Multi page
                                        </a>
                                      </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                      <h4 className="homemenu-title">
                                        <a
                                          href="https://etorisoft.com/wp/avtrix/home-03/"
                                          target="_self"
                                          rel="nofollow"
                                        >
                                          Design Studio
                                        </a>
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="col homemenu">
                                    <div className="homemenu-thumb mb-15">
                                      <img
                                        src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/home-4.jpg"
                                        alt=""
                                      />
                                      <div className="homemenu-btn">
                                        <a
                                          className="tp-menu-btn"
                                          href="https://etorisoft.com/wp/avtrix/home-04/"
                                          target="_self"
                                          rel="nofollow"
                                        >
                                          Multi page
                                        </a>
                                      </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                      <h4 className="homemenu-title">
                                        <a
                                          href="https://etorisoft.com/wp/avtrix/home-04/"
                                          target="_self"
                                          rel="nofollow"
                                        >
                                          Freelancer
                                        </a>
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="col homemenu">
                                    <div className="homemenu-thumb mb-15">
                                      <img
                                        src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/home-5.jpg"
                                        alt=""
                                      />
                                      <div className="homemenu-btn">
                                        <a
                                          className="tp-menu-btn"
                                          href="https://etorisoft.com/wp/avtrix/home-05/"
                                          target="_self"
                                          rel="nofollow"
                                        >
                                          Multi page
                                        </a>
                                      </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                      <h4 className="homemenu-title">
                                        <a
                                          href="https://etorisoft.com/wp/avtrix/home-05/"
                                          target="_self"
                                          rel="nofollow"
                                        >
                                          Creative Agency
                                        </a>
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="col homemenu">
                                    <div className="homemenu-thumb mb-15">
                                      <img
                                        src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/home-6.jpg"
                                        alt=""
                                      />
                                      <div className="homemenu-btn">
                                        <a
                                          className="tp-menu-btn"
                                          href="https://etorisoft.com/wp/avtrix/home-06/"
                                          target="_self"
                                          rel="nofollow"
                                        >
                                          Multi page
                                        </a>
                                      </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                      <h4 className="homemenu-title">
                                        <a
                                          href="https://etorisoft.com/wp/avtrix/home-06/"
                                          target="_self"
                                          rel="nofollow"
                                        >
                                          Portfolio Showcase
                                        </a>
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    itemScope
                    itemType="https://www.schema.org/SiteNavigationElement"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73 nav-item"
                  >
                    <a
                      title="About"
                      href="https://etorisoft.com/wp/avtrix/about/"
                      className="nav-links"
                    >
                      About
                    </a>
                  </li>
                  <li
                    itemScope
                    itemType="https://www.schema.org/SiteNavigationElement"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown has-dropdown menu-item-88 nav-item"
                  >
                    <a
                      title="Service"
                      href="https://etorisoft.com/wp/avtrix/service/"
                      className="nav-links"
                    >
                      Service
                    </a>
                    <ul
                      className="submenu tp-submenu"
                      aria-labelledby="103"
                      role="menu"
                    >
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-92 nav-item"
                      >
                        <a
                          title="Service"
                          href="https://etorisoft.com/wp/avtrix/service/"
                          className="dropdown-items"
                        >
                          Service
                        </a>
                      </li>
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-89 nav-item"
                      >
                        <a
                          title="Service Details"
                          href="https://etorisoft.com/wp/avtrix/service-details/"
                          className="dropdown-items"
                        >
                          Service Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    itemScope
                    itemType="https://www.schema.org/SiteNavigationElement"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown has-dropdown menu-item-94 nav-item"
                  >
                    <a title="Projects" href="#" className="nav-links">
                      Projects
                    </a>
                    <ul
                      className="submenu tp-submenu"
                      aria-labelledby="103"
                      role="menu"
                    >
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-83 nav-item"
                      >
                        <a
                          title="Portfolio – 01"
                          href="https://etorisoft.com/wp/avtrix/portfolio/"
                          className="dropdown-items"
                        >
                          Portfolio – 01
                        </a>
                      </li>
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-84 nav-item"
                      >
                        <a
                          title="Portfolio – 02"
                          href="https://etorisoft.com/wp/avtrix/portfolio-02/"
                          className="dropdown-items"
                        >
                          Portfolio – 02
                        </a>
                      </li>
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-85 nav-item"
                      >
                        <a
                          title="Portfolio – 03"
                          href="https://etorisoft.com/wp/avtrix/portfolio-03/"
                          className="dropdown-items"
                        >
                          Portfolio – 03
                        </a>
                      </li>
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-86 nav-item"
                      >
                        <a
                          title="Portfolio Details"
                          href="https://etorisoft.com/wp/avtrix/portfolio-details/"
                          className="dropdown-items"
                        >
                          Portfolio Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    itemScope
                    itemType="https://www.schema.org/SiteNavigationElement"
                    className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-55 current_page_item current_page_parent current-menu-ancestor current-menu-parent current_page_ancestor menu-item-has-children dropdown has-dropdown active menu-item-74 nav-item"
                  >
                    <a
                      title="Blog"
                      href="https://etorisoft.com/wp/avtrix/blog/"
                      className="nav-links"
                    >
                      Blog
                    </a>
                    <ul
                      className="submenu tp-submenu"
                      aria-labelledby="103"
                      role="menu"
                    >
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-55 current_page_item current_page_parent active menu-item-2461 nav-item"
                      >
                        <a
                          title="Blog"
                          href="https://etorisoft.com/wp/avtrix/blog/"
                          className="dropdown-items"
                        >
                          Blog
                        </a>
                      </li>
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        className="menu-item menu-item-type-post_type menu-item-object-post menu-item-2460 nav-item"
                      >
                        <a
                          title="Blog Details"
                          href="https://etorisoft.com/wp/avtrix/innovative-solutions-for-a-digital-tomorrow/"
                          className="dropdown-items"
                        >
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    itemScope
                    itemType="https://www.schema.org/SiteNavigationElement"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown has-dropdown menu-item-95 nav-item"
                  >
                    <a title="Pages" href="#" className="nav-links">
                      Pages
                    </a>
                    <ul
                      className="submenu tp-submenu"
                      aria-labelledby="103"
                      role="menu"
                    >
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-90 nav-item"
                      >
                        <a
                          title="Team"
                          href="https://etorisoft.com/wp/avtrix/team/"
                          className="dropdown-items"
                        >
                          Team
                        </a>
                      </li>
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-91 nav-item"
                      >
                        <a
                          title="Team Details"
                          href="https://etorisoft.com/wp/avtrix/team-details/"
                          className="dropdown-items"
                        >
                          Team Details
                        </a>
                      </li>
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-87 nav-item"
                      >
                        <a
                          title="Pricing"
                          href="https://etorisoft.com/wp/avtrix/pricing/"
                          className="dropdown-items"
                        >
                          Pricing
                        </a>
                      </li>
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-76 nav-item"
                      >
                        <a
                          title="Error Page"
                          href="https://etorisoft.com/wp/avtrix/error-page/"
                          className="dropdown-items"
                        >
                          Error Page
                        </a>
                      </li>
                      <li
                        itemScope
                        itemType="https://www.schema.org/SiteNavigationElement"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-75 nav-item"
                      >
                        <a
                          title="Contact"
                          href="https://etorisoft.com/wp/avtrix/contact/"
                          className="dropdown-items"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="tp-offcanvas__popup">
              <p>
                Web designing in a powerful way of just not an only professions.
                We have tendency to believe the idea that smart looking.
              </p>
              <div className="tp-offcanvas__popup-gallery">
                <h4 className="tp-offcanvas__title">Gallery</h4>
                <a
                  className="popup-image"
                  href="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/off-p-1.jpg"
                >
                  <img
                    src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/off-p-1.jpg"
                    alt=""
                  />
                </a>
                <a
                  className="popup-image"
                  href="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/off-p-2.jpg"
                >
                  <img
                    src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/off-p-2.jpg"
                    alt=""
                  />
                </a>
                <a
                  className="popup-image"
                  href="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/off-p-3.jpg"
                >
                  <img
                    src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/off-p-3.jpg"
                    alt=""
                  />
                </a>
                <a
                  className="popup-image"
                  href="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/off-p-4.jpg"
                >
                  <img
                    src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/off-p-4.jpg"
                    alt=""
                  />
                </a>
                <a
                  className="popup-image"
                  href="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/off-p-5.jpg"
                >
                  <img
                    src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/off-p-5.jpg"
                    alt=""
                  />
                </a>
                <a
                  className="popup-image"
                  href="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/off-p-6.jpg"
                >
                  <img
                    src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/off-p-6.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="tp-offcanvas__contact">
              <h4 className="tp-offcanvas__title">Contact</h4>
              <div className="tp-offcanvas__contact-content d-flex">
                <div className="tp-offcanvas__contact-content-icon">
                  <i className="far fa-location"></i>
                </div>
                <div className="tp-offcanvas__contact-content-content">
                  <a href="https://www.google.com/maps/@36.0758266,-79.4558848,17z">
                    734 H, Bryan Burlington, NC 27215
                  </a>
                </div>
              </div>
              <div className="tp-offcanvas__contact-content d-flex">
                <div className="tp-offcanvas__contact-content-icon">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <div className="tp-offcanvas__contact-content-content">
                  <a href="mailto:avtrix@support.com"> avtrix@support.com </a>
                </div>
              </div>
              <div className="tp-offcanvas__contact-content d-flex">
                <div className="tp-offcanvas__contact-content-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="tp-offcanvas__contact-content-content">
                  <a href="tel:+8801310-069824">+8801310-069824</a>
                </div>
              </div>
            </div>
            <div className="tp-offcanvas__social">
              <a className="icon facebook" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a className="icon twitter" href="#">
                <i className="fab fa-twitter"></i>
              </a>

              <a className="icon youtube" href="#">
                <i className="fab fa-youtube"></i>
              </a>

              <a className="icon linkedin" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="body-overlay"></div>
      {/* <!-- start offcanvas end  -->
    <!-- header end -->

    <!-- wrapper-box start -->

    <!-- breadcrumb area start --> */}
      <section
        className="breadcrumb__area fix p-relative breadcrumb__plr breadcrumb__overlay breadcrumb__bg"
        data-background="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/12/breadcrumb-bg-1.jpg"
        data-bg-color="#140e0e"
      >
        <div className="breadcrumb__shape">
          <img
            src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/12/breadcrumb-shape.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center p-relative z-index-2">
                <div className="breadcrumb__list">
                  {/* <!-- Breadcrumb NavXT 7.4.1 --> */}
                  <span property="itemListElement" typeof="ListItem">
                    <a
                      property="item"
                      typeof="WebPage"
                      title="Go to Avtrix."
                      href="https://etorisoft.com/wp/avtrix"
                      className="home"
                    >
                      <span property="name">Avtrix</span>
                    </a>
                    <meta property="position" content="1" />
                  </span>
                  <span className="dvdr">
                    <i className="far fa-angle-right"></i>
                  </span>
                  <span property="itemListElement" typeof="ListItem">
                    <span
                      property="name"
                      className="post-root post post-post current-item"
                    >
                      Blog
                    </span>
                    <meta
                      property="url"
                      content="https://etorisoft.com/wp/avtrix/blog/"
                    />
                    <meta property="position" content="2" />
                  </span>
                </div>
                <h3 className="breadcrumb__title">Blog</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb area end -->

    <!-- search popup start --> */}
      <div className="tp-search-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="tp-search__wrapper">
                <div className="tp-search__top d-flex justify-content-between align-items-center">
                  <div className="tp-search__logo">
                    <a href="https://etorisoft.com/wp/avtrix/">
                      <img
                        src="https://etorisoft.com/wp/avtrix/wp-content/themes/avtrix/assets/img/logo/logo.png"
                        alt="logo"
                      />
                    </a>
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
      </div>
      <div className="search-popup-overlay"></div>
      {/* <!-- search popup end --> */}

      <section className="postbox__area fix pt-160 pb-160">
        <div className="container">
          <div className="row g-5">
            <div className="col-xxl-8 col-xl-8 col-lg-8 blog-post-items blog-padding">
              <div className="postbox__wrapper">
                {/* <header>
                  <h1 className="page-title postbox__title screen-reader-text">
                    Blog
                  </h1>
                </header> */}

                <article
                  id="post-2447"
                  className="postbox__item format-standard post-2447 post type-post status-publish has-post-thumbnail hentry category-agency tag-agency tag-apps tag-business"
                >
                  <div className="postbox__thumb mb-30 p-relative">
                    <a href="https://etorisoft.com/wp/avtrix/innovative-solutions-for-a-digital-tomorrow/">
                      <img
                        width="851"
                        height="462"
                        src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/blog-post-5.png"
                        className="img-responsive wp-post-image"
                        alt=""
                        decoding="async"
                        srcSet="
                        https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/blog-post-5.png         851w,
                        https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/blog-post-5-300x163.png 300w,
                        https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/blog-post-5-768x417.png 768w
                      "
                        sizes="(max-width: 851px) 100vw, 851px"
                      />
                    </a>
                  </div>
                  {/* <!-- blog meta --> */}

                  <div className="postbox__meta-box mb-15">
                    <a
                      href="https://etorisoft.com/wp/avtrix/author/admin/"
                      className="postbox__meta-title"
                    >
                      <span>
                        <i className="fad fa-user"></i>
                      </span>{" "}
                      admin
                    </a>
                    <a href="#" className="postbox__meta-title">
                      <span>
                        <i className="fas fa-calendar-alt"></i>
                      </span>{" "}
                      September 24, 2024
                    </a>
                    <a href="#" className="postbox__meta-title">
                      <span>
                        <i className="fad fa-comments"></i>
                      </span>{" "}
                      No Comments
                    </a>
                  </div>
                  <h3 className="postbox__title mb-25">
                    <a href="https://etorisoft.com/wp/avtrix/innovative-solutions-for-a-digital-tomorrow/">
                      Innovative Solutions for a Digital Tomorrow
                    </a>
                  </h3>
                  <div className="postbox__text mb-30">
                    <p>
                      Digital marketing encompasses a range of strategies and
                      techniques used too promote and services online. It
                      leverages channels such as social media, search engines,
                      email, websites to reach and engage with target audiences.
                      By utilizing data analytics, also businesses can gain
                      insights into consumer behavior, allowing for more
                      personalized and effective marketing plans. The dynamic
                      [&hellip;]
                    </p>
                  </div>
                  {/* <!-- blog btn --> */}

                  <div className="postbox__red-more">
                    <a
                      href="https://etorisoft.com/wp/avtrix/innovative-solutions-for-a-digital-tomorrow/"
                      className="tp-btn__blog-1"
                    >
                      Read More
                      <span>
                        <svg
                          width="42"
                          height="9"
                          viewBox="0 0 42 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M41.3189 4.71292C41.5142 4.51766 41.5142 4.20108 41.3189 4.00582L38.137 0.823838C37.9417 0.628576 37.6251 0.628576 37.4299 0.823838C37.2346 1.0191 37.2346 1.33568 37.4299 1.53094L40.2583 4.35937L37.4299 7.1878C37.2346 7.38306 37.2346 7.69964 37.4299 7.89491C37.6251 8.09017 37.9417 8.09017 38.137 7.89491L41.3189 4.71292ZM0.720703 4.85938L40.9654 4.85937L40.9654 3.85937L0.720703 3.85938L0.720703 4.85938Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </article>

                <article
                  id="post-2444"
                  className="postbox__item format-standard post-2444 post type-post status-publish has-post-thumbnail hentry category-business tag-company tag-design tag-figma"
                >
                  <div className="postbox__thumb mb-30 p-relative">
                    <a href="https://etorisoft.com/wp/avtrix/creative-branding-solutions-to-elevate-your-brand/">
                      <img
                        width="851"
                        height="462"
                        src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/blog-post-3.jpg"
                        className="img-responsive wp-post-image"
                        alt=""
                        decoding="async"
                        srcSet="
                        https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/blog-post-3.jpg         851w,
                        https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/blog-post-3-300x163.jpg 300w,
                        https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/blog-post-3-768x417.jpg 768w
                      "
                        sizes="(max-width: 851px) 100vw, 851px"
                      />
                    </a>
                  </div>
                  {/* <!-- blog meta --> */}

                  <div className="postbox__meta-box mb-15">
                    <a
                      href="https://etorisoft.com/wp/avtrix/author/admin/"
                      className="postbox__meta-title"
                    >
                      <span>
                        <i className="fad fa-user"></i>
                      </span>{" "}
                      admin
                    </a>
                    <a href="#" className="postbox__meta-title">
                      <span>
                        <i className="fas fa-calendar-alt"></i>
                      </span>{" "}
                      September 24, 2024
                    </a>
                    <a href="#" className="postbox__meta-title">
                      <span>
                        <i className="fad fa-comments"></i>
                      </span>{" "}
                      No Comments
                    </a>
                  </div>
                  <h3 className="postbox__title mb-25">
                    <a href="https://etorisoft.com/wp/avtrix/creative-branding-solutions-to-elevate-your-brand/">
                      Creative Branding Solutions to Elevate Your Brand
                    </a>
                  </h3>
                  <div className="postbox__text mb-30">
                    <p>
                      Digital marketing encompasses a range of strategies and
                      techniques used too promote and services online. It
                      leverages channels such as social media, search engines,
                      email, websites to reach and engage with target audiences.
                      By utilizing data analytics, also businesses can gain
                      insights into consumer behavior, allowing for more
                      personalized and effective marketing plans. The dynamic
                      [&hellip;]
                    </p>
                  </div>
                  {/* <!-- blog btn --> */}

                  <div className="postbox__red-more">
                    <a
                      href="https://etorisoft.com/wp/avtrix/creative-branding-solutions-to-elevate-your-brand/"
                      className="tp-btn__blog-1"
                    >
                      Read More
                      <span>
                        <svg
                          width="42"
                          height="9"
                          viewBox="0 0 42 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M41.3189 4.71292C41.5142 4.51766 41.5142 4.20108 41.3189 4.00582L38.137 0.823838C37.9417 0.628576 37.6251 0.628576 37.4299 0.823838C37.2346 1.0191 37.2346 1.33568 37.4299 1.53094L40.2583 4.35937L37.4299 7.1878C37.2346 7.38306 37.2346 7.69964 37.4299 7.89491C37.6251 8.09017 37.9417 8.09017 38.137 7.89491L41.3189 4.71292ZM0.720703 4.85938L40.9654 4.85937L40.9654 3.85937L0.720703 3.85938L0.720703 4.85938Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </article>

                <article
                  id="post-2440"
                  className="postbox__item format-standard post-2440 post type-post status-publish has-post-thumbnail hentry category-software tag-business tag-company tag-design"
                >
                  <div className="postbox__thumb mb-30 p-relative">
                    <a href="https://etorisoft.com/wp/avtrix/boost-your-online-presence-with-our-services/">
                      <img
                        width="851"
                        height="462"
                        src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/blog-post-2.jpg"
                        className="img-responsive wp-post-image"
                        alt=""
                        decoding="async"
                        srcSet="
                        https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/blog-post-2.jpg         851w,
                        https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/blog-post-2-300x163.jpg 300w,
                        https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/blog-post-2-768x417.jpg 768w
                      "
                        sizes="(max-width: 851px) 100vw, 851px"
                      />
                    </a>
                  </div>
                  {/* <!-- blog meta --> */}

                  <div className="postbox__meta-box mb-15">
                    <a
                      href="https://etorisoft.com/wp/avtrix/author/admin/"
                      className="postbox__meta-title"
                    >
                      <span>
                        <i className="fad fa-user"></i>
                      </span>{" "}
                      admin
                    </a>
                    <a href="#" className="postbox__meta-title">
                      <span>
                        <i className="fas fa-calendar-alt"></i>
                      </span>{" "}
                      September 24, 2024
                    </a>
                    <a href="#" className="postbox__meta-title">
                      <span>
                        <i className="fad fa-comments"></i>
                      </span>{" "}
                      No Comments
                    </a>
                  </div>
                  <h3 className="postbox__title mb-25">
                    <a href="https://etorisoft.com/wp/avtrix/boost-your-online-presence-with-our-services/">
                      Boost Your Online Presence with Our Services
                    </a>
                  </h3>
                  <div className="postbox__text mb-30">
                    <p>
                      Digital marketing encompasses a range of strategies and
                      techniques used too promote and services online. It
                      leverages channels such as social media, search engines,
                      email, websites to reach and engage with target audiences.
                      By utilizing data analytics, also businesses can gain
                      insights into consumer behavior, allowing for more
                      personalized and effective marketing plans. The dynamic
                      [&hellip;]
                    </p>
                  </div>
                  {/* <!-- blog btn --> */}

                  <div className="postbox__red-more">
                    <a
                      href="https://etorisoft.com/wp/avtrix/boost-your-online-presence-with-our-services/"
                      className="tp-btn__blog-1"
                    >
                      Read More
                      <span>
                        <svg
                          width="42"
                          height="9"
                          viewBox="0 0 42 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M41.3189 4.71292C41.5142 4.51766 41.5142 4.20108 41.3189 4.00582L38.137 0.823838C37.9417 0.628576 37.6251 0.628576 37.4299 0.823838C37.2346 1.0191 37.2346 1.33568 37.4299 1.53094L40.2583 4.35937L37.4299 7.1878C37.2346 7.38306 37.2346 7.69964 37.4299 7.89491C37.6251 8.09017 37.9417 8.09017 38.137 7.89491L41.3189 4.71292ZM0.720703 4.85938L40.9654 4.85937L40.9654 3.85937L0.720703 3.85938L0.720703 4.85938Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </article>

                <div className="tp-postbox-pagination">
                  <div className="basic-pagination mt-60">
                    <nav>
                      <ul>
                        <li>
                          <span
                            aria-current="page"
                            className="page-numbers current"
                          >
                            1
                          </span>
                        </li>
                        <li>
                          <a
                            className="page-numbers"
                            href="https://etorisoft.com/wp/avtrix/blog/page/2/"
                          >
                            2
                          </a>
                        </li>
                        <li>
                          <a
                            className="next page-numbers"
                            href="https://etorisoft.com/wp/avtrix/blog/page/2/"
                          >
                            <i className="far fa-angle-double-left"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                <div
                  id="search-1"
                  className="sidebar__widget mb-40 widget_search"
                >
                  <h3 className="sidebar__widget-title">Search</h3>
                  <div className="blog-sidebar__search p-relative">
                    <div className="search-px">
                      <form
                        action="https://etorisoft.com/wp/avtrix/"
                        method="get"
                      >
                        <input
                          type="text"
                          required
                          name="s"
                          placeholder="Search"
                        />
                        <button type="submit">
                          <i className="far fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  id="tp-latest-posts-1"
                  className="sidebar__widget mb-40 widget_tp-latest-posts"
                >
                  <h3 className="sidebar__widget-title">Recent Posts</h3>
                  <div className="tp-sidebar-widget-content">
                    <div className="tp-sidebar-post tp-rc__post tp-sidebar-post-specing">
                      <div className="tp-rc__post d-flex align-items-center">
                        <div className="tp-rc__post-thumb mr-25">
                          <a href="https://etorisoft.com/wp/avtrix/innovative-solutions-for-a-digital-tomorrow/">
                            <img
                              width="150"
                              height="150"
                              src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/blog-post-5-150x150.png"
                              className="attachment-thumbnail size-thumbnail wp-post-image"
                              alt=""
                              decoding="async"
                            />
                          </a>
                        </div>

                        <div className="tp-rc__post-content">
                          <h3 className="tp-rc__post-title">
                            <a href="https://etorisoft.com/wp/avtrix/innovative-solutions-for-a-digital-tomorrow/">
                              Innovative Solutions for a Digital Tomorrow
                            </a>
                          </h3>
                          <div className="tp-rc__post-meta">
                            <span>
                              <i className="fas fa-calendar-alt pr-5"></i>{" "}
                              September 24, 2024
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tp-sidebar-post tp-rc__post tp-sidebar-post-specing">
                      <div className="tp-rc__post d-flex align-items-center">
                        <div className="tp-rc__post-thumb mr-25">
                          <a href="https://etorisoft.com/wp/avtrix/the-power-of-visual-storytelling-in-marketing/">
                            <img
                              width="150"
                              height="150"
                              src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/blog-post-4-150x150.png"
                              className="attachment-thumbnail size-thumbnail wp-post-image"
                              alt=""
                              decoding="async"
                            />
                          </a>
                        </div>

                        <div className="tp-rc__post-content">
                          <h3 className="tp-rc__post-title">
                            <a href="https://etorisoft.com/wp/avtrix/the-power-of-visual-storytelling-in-marketing/">
                              The Power of Visual Storytelling in Marketing
                            </a>
                          </h3>
                          <div className="tp-rc__post-meta">
                            <span>
                              <i className="fas fa-calendar-alt pr-5"></i>{" "}
                              September 24, 2024
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tp-sidebar-post tp-rc__post tp-sidebar-post-specing">
                      <div className="tp-rc__post d-flex align-items-center">
                        <div className="tp-rc__post-thumb mr-25">
                          <a href="https://etorisoft.com/wp/avtrix/transform-your-business-with-expert-digital-solutions/">
                            <img
                              width="150"
                              height="150"
                              src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/blog-post-6-150x150.png"
                              className="attachment-thumbnail size-thumbnail wp-post-image"
                              alt=""
                              decoding="async"
                            />
                          </a>
                        </div>

                        <div className="tp-rc__post-content">
                          <h3 className="tp-rc__post-title">
                            <a href="https://etorisoft.com/wp/avtrix/transform-your-business-with-expert-digital-solutions/">
                              Transform Your Business with Expert Digital
                              Solutions
                            </a>
                          </h3>
                          <div className="tp-rc__post-meta">
                            <span>
                              <i className="fas fa-calendar-alt pr-5"></i>{" "}
                              September 24, 2024
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="categories-2"
                  className="sidebar__widget mb-40 widget_categories"
                >
                  <h3 className="sidebar__widget-title">Categories</h3>
                  <ul>
                    <li className="cat-item cat-item-2">
                      <a href="https://etorisoft.com/wp/avtrix/category/agency/">
                        Agency
                      </a>
                    </li>
                    <li className="cat-item cat-item-3">
                      <a href="https://etorisoft.com/wp/avtrix/category/business/">
                        Business
                      </a>
                    </li>
                    <li className="cat-item cat-item-4">
                      <a href="https://etorisoft.com/wp/avtrix/category/marketing/">
                        Marketing
                      </a>
                    </li>
                    <li className="cat-item cat-item-5">
                      <a href="https://etorisoft.com/wp/avtrix/category/software/">
                        Software
                      </a>
                    </li>
                    <li className="cat-item cat-item-6">
                      <a href="https://etorisoft.com/wp/avtrix/category/technology/">
                        Technology
                      </a>
                    </li>
                    <li className="cat-item cat-item-1">
                      <a href="https://etorisoft.com/wp/avtrix/category/uncategorized/">
                        Uncategorized
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  id="tag_cloud-1"
                  className="sidebar__widget mb-40 widget_tag_cloud"
                >
                  <h3 className="sidebar__widget-title">Tags</h3>
                  <div className="tagcloud">
                    <a
                      href="https://etorisoft.com/wp/avtrix/tag/agency/"
                      className="tag-cloud-link tag-link-7 tag-link-position-1"
                      // style="font-size: 16.4pt"
                      aria-label="Agency (2 items)"
                    >
                      Agency
                    </a>
                    <a
                      href="https://etorisoft.com/wp/avtrix/tag/apps/"
                      className="tag-cloud-link tag-link-8 tag-link-position-2"
                      // style="font-size: 16.4pt"
                      aria-label="Apps (2 items)"
                    >
                      Apps
                    </a>
                    <a
                      href="https://etorisoft.com/wp/avtrix/tag/business/"
                      className="tag-cloud-link tag-link-9 tag-link-position-3"
                      // style="font-size: 22pt"
                      aria-label="Business (3 items)"
                    >
                      Business
                    </a>
                    <a
                      href="https://etorisoft.com/wp/avtrix/tag/company/"
                      className="tag-cloud-link tag-link-10 tag-link-position-4"
                      // style="font-size: 22pt"
                      aria-label="Company (3 items)"
                    >
                      Company
                    </a>
                    <a
                      href="https://etorisoft.com/wp/avtrix/tag/design/"
                      className="tag-cloud-link tag-link-11 tag-link-position-5"
                      // style="font-size: 22pt"
                      aria-label="Design (3 items)"
                    >
                      Design
                    </a>
                    <a
                      href="https://etorisoft.com/wp/avtrix/tag/figma/"
                      className="tag-cloud-link tag-link-12 tag-link-position-6"
                      // style="font-size: 16.4pt"
                      aria-label="Figma (2 items)"
                    >
                      Figma
                    </a>
                    <a
                      href="https://etorisoft.com/wp/avtrix/tag/innovation/"
                      className="tag-cloud-link tag-link-13 tag-link-position-7"
                      // style="font-size: 8pt"
                      aria-label="Innovation (1 item)"
                    >
                      Innovation
                    </a>
                    <a
                      href="https://etorisoft.com/wp/avtrix/tag/software/"
                      className="tag-cloud-link tag-link-14 tag-link-position-8"
                      // style="font-size: 8pt"
                      aria-label="Software (1 item)"
                    >
                      Software
                    </a>
                    <a
                      href="https://etorisoft.com/wp/avtrix/tag/technology/"
                      className="tag-cloud-link tag-link-15 tag-link-position-9"
                      // style="font-size: 8pt"
                      aria-label="Technology (1 item)"
                    >
                      Technology
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- tp footer area start  --> */}
      <footer>
        {/* <!-- tp cta area start  --> */}
        <section className="tp-cta__3-area black-bg pt-75 pb-55">
          <div className="container">
            <div className="tp-cta__4-box">
              <div className="row justify-content-center">
                <div className="col-xl-12">
                  <div className="tp-cta__4-text-box d-flex align-items-center justify-content-center">
                    <h3 className="tp-cta__4-title tp-split__text tp-split__in-right">
                      <a href="https://oclata.com/wp/avtrix/contact/">
                        Get In Touch
                        <span className="tp-cta__4-action">
                          <span>
                            <svg
                              width="112"
                              height="111"
                              viewBox="0 0 112 111"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.69531 104.16L100.304 11.5514M7.69531 5.37744H106.478V104.16"
                                stroke="currentColor"
                                strokeWidth="9.5"
                                strokeLinecap="square"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <svg
                              width="112"
                              height="111"
                              viewBox="0 0 112 111"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.69531 104.16L100.304 11.5514M7.69531 5.37744H106.478V104.16"
                                stroke="currentColor"
                                strokeWidth="9.5"
                                strokeLinecap="square"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </span>
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- tp cta area end  --> */}

        <section
          className="tp-footer__3-area p-relative tp-footer__3 black-bg"
          data-background=""
          data-bg-color=""
        >
          <div className="tp-footer__3-shape">
            <img
              src="https://etorisoft.com/wp/avtrix/wp-content/themes/avtrix/assets/img/footer/footer-shape-1-1.png"
              alt=""
            />
          </div>
          <div className="tp-footer__2-border-style tp-footer__3-border-style">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div
                    id="custom_html-1"
                    className="widget_text tp-footer__widget footer-col-3-1 mb-40 widget_custom_html"
                  >
                    <div className="widget_text tp-footer-widget-content">
                      <div className="textwidget custom-html-widget">
                        <div className="tp-footer__3-adress-box mb-25">
                          <h3 className="tp-footer__3-widget-title">
                            Location
                          </h3>
                          <a
                            href="https://maps.app.goo.gl/5jjAGwaDreeCBemr5"
                            className="tp-footer__3-city"
                          >
                            55 Main Street, 2nd block <br />
                            Malborne, Australia
                          </a>
                        </div>
                        <div className="tp-footer__3-contact-box p-relative">
                          <h3 className="tp-footer__3-widget-title">Contact</h3>
                          <a
                            href="mailto:support@gmail.com"
                            className="tp-footer__3-mail"
                          >
                            support@gmail.com
                          </a>
                          <a
                            href="tel:+99012345688"
                            className="tp-footer__3-call"
                          >
                            +880 (123) 456 88
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6">
                  <div
                    id="nav_menu-1"
                    className="tp-footer__widget footer-col-3-2 mb-40 widget_nav_menu"
                  >
                    <div className="tp-footer-widget-content">
                      <h3 className="tp-footer__3-widget-title">Services</h3>
                      <div className="menu-footer-service-nav-container">
                        <ul id="menu-footer-service-nav" className="menu">
                          <li
                            id="menu-item-135"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-135"
                          >
                            <a href="https://etorisoft.com/wp/avtrix/contact/">
                              Web (UX/UI) Design
                            </a>
                          </li>
                          <li
                            id="menu-item-136"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-136"
                          >
                            <a href="https://etorisoft.com/wp/avtrix/portfolio-details/">
                              Software Technology
                            </a>
                          </li>
                          <li
                            id="menu-item-137"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-137"
                          >
                            <a href="https://etorisoft.com/wp/avtrix/service-details/">
                              Web Development
                            </a>
                          </li>
                          <li
                            id="menu-item-138"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-138"
                          >
                            <a href="https://etorisoft.com/wp/avtrix/service/">
                              IT Cyber Security
                            </a>
                          </li>
                          <li
                            id="menu-item-139"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-139"
                          >
                            <a href="https://etorisoft.com/wp/avtrix/about/">
                              Cloud Computing
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div
                    id="nav_menu-2"
                    className="tp-footer__widget footer-col-3-3 mb-40 widget_nav_menu"
                  >
                    <div className="tp-footer-widget-content">
                      <h3 className="tp-footer__3-widget-title">
                        Our Location
                      </h3>
                      <div className="menu-our-location-container">
                        <ul id="menu-our-location" className="menu">
                          <li
                            id="menu-item-140"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-140"
                          >
                            <a href="https://etorisoft.com/wp/avtrix/contact/">
                              London
                            </a>
                          </li>
                          <li
                            id="menu-item-141"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-141"
                          >
                            <a href="https://etorisoft.com/wp/avtrix/portfolio-details/">
                              America
                            </a>
                          </li>
                          <li
                            id="menu-item-142"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-142"
                          >
                            <a href="https://etorisoft.com/wp/avtrix/service-details/">
                              Constarica
                            </a>
                          </li>
                          <li
                            id="menu-item-143"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-143"
                          >
                            <a href="https://etorisoft.com/wp/avtrix/about/">
                              Germany
                            </a>
                          </li>
                          <li
                            id="menu-item-144"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-144"
                          >
                            <a href="https://etorisoft.com/wp/avtrix/contact/">
                              India
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div
                    id="custom_html-2"
                    className="widget_text tp-footer__widget footer-col-3-4 mb-40 widget_custom_html"
                  >
                    <div className="widget_text tp-footer-widget-content">
                      <div className="textwidget custom-html-widget">
                        <div className="tp-footer__3-contact">
                          <div className="tp-footer__3-logo mb-20">
                            <a href="https://oclata.com/wp/avtrix">
                              <img
                                src="https://oclata.com/wp/avtrix/wp-content/uploads/2024/08/logo.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <p>
                            We believe it has the power to do
                            <br />
                            amazing things.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="mc4wp_form_widget-1"
                    className="tp-footer__widget footer-col-3-4 mb-40 widget_mc4wp_form_widget"
                  >
                    <div className="tp-footer-widget-content">
                      {/* <script>
                      (function () {
                        window.mc4wp = window.mc4wp || {
                          listeners: [],
                          forms: {
                            on: function (evt, cb) {
                              window.mc4wp.listeners.push({
                                event: evt,
                                callback: cb,
                              });
                            },
                          },
                        };
                      })();
                    </script> */}
                      {/* <!-- Mailchimp for WordPress v4.10.2 - https://wordpress.org/plugins/mailchimp-for-wp/ --> */}
                      <form
                        id="mc4wp-form-1"
                        className="mc4wp-form mc4wp-form-145"
                        method="post"
                        data-id="145"
                        data-name="Avtrix News Letter"
                      >
                        <div className="mc4wp-form-fields">
                          <div className="tp-footer__3-form-box mb-30">
                            <div className="tp-footer__3-content d-md-flex align-items-center">
                              <div className="tp-footer__3-input">
                                <input
                                  type="email"
                                  name="EMAIL"
                                  placeholder="Email Address"
                                  required
                                />
                                <div className="tp-footer__3-input-icon">
                                  <i className="fal fa-envelope"></i>
                                </div>
                              </div>
                              <div className="tp-footer__3-action">
                                <button
                                  className="tp-footer__3-btn-1"
                                  type="submit"
                                >
                                  Sign Up
                                  <span>
                                    <i className="fal fa-angle-right"></i>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="tp-footer__3-privacy">
                            <p>By subscribing, you’re accept Privacy Policy</p>
                          </div>
                        </div>
                        <label
                        // style="display: none !important"
                        >
                          Leave this field empty if you're human:
                          <input
                            type="text"
                            name="_mc4wp_honeypot"
                            // value=""
                            // tabIndex="-1"
                            autoComplete="off"
                          />
                        </label>
                        <input
                          type="hidden"
                          name="_mc4wp_timestamp"
                          value="1741347751"
                        />
                        <input
                          type="hidden"
                          name="_mc4wp_form_id"
                          value="145"
                        />
                        <input
                          type="hidden"
                          name="_mc4wp_form_element_id"
                          value="mc4wp-form-1"
                        />
                        <div className="mc4wp-response"></div>
                      </form>
                      {/* <!-- / Mailchimp for WordPress Plugin --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- tp copyright area start --> */}
          <div className="tp-copyright-area tp-copyright__style-2 tp-copyright__3-style pt-30 pb-30">
            <div className="container">
              <div className="tp-copyright__3-wrap">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-8 col-md-6">
                    <div className="tp-copyright__text">
                      <p>
                        © 2025 <span> Oclata,</span> All Rights Reserved
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4 col-md-6">
                    <div className="tp-copyright__social text-md-end">
                      <a href="#" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>

                      <a href="#" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>

                      <a href="#" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>

                      <a href="#" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- tp copyright area end --> */}
        </section>
      </footer> 
    </div>
  );
};

export default page;
