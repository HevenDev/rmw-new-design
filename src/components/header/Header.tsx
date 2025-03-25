"use client"

import Link from "next/link";
import Image from "next/image";
import useStickyElements from "@/hooks/useStickyElements";//changed

const Header = () => {
  useStickyElements();
  
  return (
    <header>
      <div
        id="header-sticky"
        className="tp-header-top-area tp-header__style-1 tp-header__transparent tp-header__border pr-160 pl-160"
        style={{backgroundColor: "#101010"}}
      >
        <div className="contianer-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
              <div className="tp-main__logo">
                <Link
                  className="main-logo"
                  href="/"
                >
                  <Image
                    width={50}
                    height={50}
                    src="/rmw_logo_gold.png"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 d-none d-lg-block ">
              <div className="tp-main__menu d-flex justify-content-center">
                <nav>
                  <ul id="menu-main-menu" className="">
                    <li
                      itemScope
                      itemType="https://www.schema.org/"
                      id="menu-item-2496"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-17 current_page_item active menu-item-2496 has-mega-menu has-dropdown nav-item"
                    >
                      <Link
                        title="Home"
                        href="/"
                        className="nav-links"
                      >
                        Home
                      </Link>
                      {/* <div className="tp-submenu submenu has-homemenu">
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
                                          <Link
                                            className="tp-menu-btn"
                                            href="https://etorisoft.com/wp/avtrix/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Multi page
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                          <Link
                                            href="https://etorisoft.com/wp/avtrix/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Digital Marketing
                                          </Link>
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
                                          <Link
                                            className="tp-menu-btn"
                                            href="https://etorisoft.com/wp/avtrix/home-02/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Multi page
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                          <Link
                                            href="https://etorisoft.com/wp/avtrix/home-02/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Branding
                                          </Link>
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
                                          <Link
                                            className="tp-menu-btn"
                                            href="https://etorisoft.com/wp/avtrix/home-03/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Multi page
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                          <Link
                                            href="https://etorisoft.com/wp/avtrix/home-03/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Design Studio
                                          </Link>
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
                                          <Link
                                            className="tp-menu-btn"
                                            href="https://etorisoft.com/wp/avtrix/home-04/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Multi page
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                          <Link
                                            href="https://etorisoft.com/wp/avtrix/home-04/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Freelancer
                                          </Link>
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
                                          <Link
                                            className="tp-menu-btn"
                                            href="https://etorisoft.com/wp/avtrix/home-05/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Multi page
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                          <Link
                                            href="https://etorisoft.com/wp/avtrix/home-05/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Creative Agency
                                          </Link>
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
                                          <Link
                                            className="tp-menu-btn"
                                            href="https://etorisoft.com/wp/avtrix/home-06/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Multi page
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                          <Link
                                            href="https://etorisoft.com/wp/avtrix/home-06/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Portfolio Showcase
                                          </Link>
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </li>
                    <li
                      itemScope
                      itemType="https://www.schema.org/about/"
                      id="menu-item-73"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73 nav-item"
                    >
                      <Link
                        title="About"
                        href="/about/"
                        className="nav-links"
                      >
                        About
                      </Link>
                    </li>
                    <li
                      itemScope
                      itemType="https://www.schema.org/service"
                      id="menu-item-88"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown has-dropdown menu-item-88 nav-item"
                    >
                      <Link
                        title="Service"
                        href="/service"
                        className="nav-links"
                      >
                        Service
                      </Link>
                      {/* <ul
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
                          <Link
                            title="Service"
                            href="https://etorisoft.com/wp/avtrix/service/"
                            className="dropdown-items"
                          >
                            Service
                          </Link>
                        </li>
                        <li
                          itemScope
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-89"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-89 nav-item"
                        >
                          <Link
                            title="Service Details"
                            href="https://etorisoft.com/wp/avtrix/service-details/"
                            className="dropdown-items"
                          >
                            Service Details
                          </Link>
                        </li>
                      </ul> */}
                      <div className="tp-submenu submenu has-homemenu">
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
                                     
                                      <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                          <Link
                                            href="https://etorisoft.com/wp/avtrix/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Digital Marketing
                                          </Link>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col homemenu">
                                      {/* <div className="homemenu-thumb mb-15">
                                        <img
                                          src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/home-2.jpg"
                                          alt=""
                                        />
                                        <div className="homemenu-btn">
                                          <Link
                                            className="tp-menu-btn"
                                            href="https://etorisoft.com/wp/avtrix/home-02/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Multi page
                                          </Link>
                                        </div>
                                      </div> */}
                                      <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                          <Link
                                            href="/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Branding
                                          </Link>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col homemenu">
                                      {/* <div className="homemenu-thumb mb-15">
                                        <img
                                          src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/home-3.jpg"
                                          alt=""
                                        />
                                        <div className="homemenu-btn">
                                          <Link
                                            className="tp-menu-btn"
                                            href="https://etorisoft.com/wp/avtrix/home-03/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Multi page
                                          </Link>
                                        </div>
                                      </div> */}
                                      <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                          <Link
                                            href="/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Design Studio
                                          </Link>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col homemenu">
                                      {/* <div className="homemenu-thumb mb-15">
                                        <img
                                          src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/home-4.jpg"
                                          alt=""
                                        />
                                        <div className="homemenu-btn">
                                          <Link
                                            className="tp-menu-btn"
                                            href="https://etorisoft.com/wp/avtrix/home-04/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Multi page
                                          </Link>
                                        </div>
                                      </div> */}
                                      <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                          <Link
                                            href="/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Freelancer
                                          </Link>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col homemenu">
                                      {/* <div className="homemenu-thumb mb-15">
                                        <img
                                          src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/home-5.jpg"
                                          alt=""
                                        />
                                        <div className="homemenu-btn">
                                          <Link
                                            className="tp-menu-btn"
                                            href="https://etorisoft.com/wp/avtrix/home-05/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Multi page
                                          </Link>
                                        </div>
                                      </div> */}
                                      <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                          <Link
                                            href="/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Creative Agency
                                          </Link>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col homemenu">
                                      {/* <div className="homemenu-thumb mb-15">
                                        <img
                                          src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/home-6.jpg"
                                          alt=""
                                        />
                                        <div className="homemenu-btn">
                                          <Link
                                            className="tp-menu-btn"
                                            href="https://etorisoft.com/wp/avtrix/home-06/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Multi page
                                          </Link>
                                        </div>
                                      </div> */}
                                      <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                          <Link
                                            href="/"
                                            target="_self"
                                            rel="nofollow"
                                          >
                                            Portfolio Showcase
                                          </Link>
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
                      itemType="https://www.schema.org/our-work/"
                      id="menu-item-94"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown has-dropdown menu-item-94 nav-item"
                    >
                      <Link title="Our Work" href="/our-work/" className="nav-links">
                        Our Work
                      </Link>
                      {/* <ul
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
                          <Link
                            title="Portfolio – 01"
                            href="https://etorisoft.com/wp/avtrix/portfolio/"
                            className="dropdown-items"
                          >
                            Portfolio – 01
                          </Link>
                        </li>
                        <li
                          itemScope
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-84"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-84 nav-item"
                        >
                          <Link
                            title="Portfolio – 02"
                            href="https://etorisoft.com/wp/avtrix/portfolio-02/"
                            className="dropdown-items"
                          >
                            Portfolio – 02
                          </Link>
                        </li>
                        <li
                          itemScope
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-85"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-85 nav-item"
                        >
                          <Link
                            title="Portfolio – 03"
                            href="https://etorisoft.com/wp/avtrix/portfolio-03/"
                            className="dropdown-items"
                          >
                            Portfolio – 03
                          </Link>
                        </li>
                        <li
                          itemScope
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-86"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-86 nav-item"
                        >
                          <Link
                            title="Portfolio Details"
                            href="https://etorisoft.com/wp/avtrix/portfolio-details/"
                            className="dropdown-items"
                          >
                            Portfolio Details
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li
                      itemScope
                      itemType="https://www.schema.org/blog"
                      id="menu-item-74"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown has-dropdown menu-item-74 nav-item"
                    >
                      <Link
                        title="Blog"
                        href="/blog"
                        className="nav-links"
                      >
                        Blog
                      </Link>
                      {/* <ul
                        className="submenu tp-submenu"
                        aria-labelledby="103"
                        role="menu"
                      >
                        <li
                          itemScope
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-2461"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2461 nav-item"
                        >
                          <Link
                            title="Blog"
                            href="https://etorisoft.com/wp/avtrix/blog/"
                            className="dropdown-items"
                          >
                            Blog
                          </Link>
                        </li>
                        <li
                          itemScope
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-2460"
                          className="menu-item menu-item-type-post_type menu-item-object-post menu-item-2460 nav-item"
                        >
                          <Link
                            title="Blog Details"
                            href="https://etorisoft.com/wp/avtrix/innovative-solutions-for-a-digital-tomorrow/"
                            className="dropdown-items"
                          >
                            Blog Details
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li
                      itemScope
                      itemType="https://www.schema.org/contact/"
                      id="menu-item-95"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown has-dropdown menu-item-95 nav-item"
                    >
                      <Link title="Pages" href="/contact/" className="nav-links">
                        Contact us
                      </Link>
                      {/* <ul
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
                          <Link
                            title="Team"
                            href="https://etorisoft.com/wp/avtrix/team/"
                            className="dropdown-items"
                          >
                            Team
                          </Link>
                        </li>
                        <li
                          itemScope
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-91"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-91 nav-item"
                        >
                          <Link
                            title="Team Details"
                            href="https://etorisoft.com/wp/avtrix/team-details/"
                            className="dropdown-items"
                          >
                            Team Details
                          </Link>
                        </li>
                        <li
                          itemScope
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-87"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-87 nav-item"
                        >
                          <Link
                            title="Pricing"
                            href="https://etorisoft.com/wp/avtrix/pricing/"
                            className="dropdown-items"
                          >
                            Pricing
                          </Link>
                        </li>
                        <li
                          itemScope
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-76"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-76 nav-item"
                        >
                          <Link
                            title="Error Page"
                            href="https://etorisoft.com/wp/avtrix/error-page/"
                            className="dropdown-items"
                          >
                            Error Page
                          </Link>
                        </li>
                        <li
                          itemScope
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-75"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-75 nav-item"
                        >
                          <Link
                            title="Contact"
                            href="https://etorisoft.com/wp/avtrix/contact/"
                            className="dropdown-items"
                          >
                            Contact
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
              <div className="tp-header__right d-flex justify-content-end">
                <div className="tp-header__action">
                  <ul>
                    
                    <li>
                      <button className="tp-header__burs-btn tp-offcanvas-open-btn">
                        <span>
                          <svg
                            width="28"
                            height="26"
                            viewBox="0 0 28 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <ellipse
                              cx="2.39023"
                              cy="2.39022"
                              rx="2.39023"
                              ry="2.39022"
                              fill="#fddf82"
                            />
                            <ellipse
                              cx="13.9137"
                              cy="2.39022"
                              rx="2.39023"
                              ry="2.39022"
                              fill="white"
                              fillOpacity="0.7"
                            />
                            <ellipse
                              cx="25.441"
                              cy="2.39022"
                              rx="2.39023"
                              ry="2.39022"
                              fill="white"
                              fillOpacity="0.7"
                            />
                            <ellipse
                              cx="2.39023"
                              cy="12.6339"
                              rx="2.39023"
                              ry="2.39022"
                              fill="white"
                              fillOpacity="0.7"
                            />
                            <ellipse
                              cx="13.9137"
                              cy="12.6349"
                              rx="2.39023"
                              ry="2.39022"
                              fill="white"
                            />
                            <ellipse
                              cx="25.441"
                              cy="12.6349"
                              rx="2.39023"
                              ry="2.39022"
                              fill="white"
                              fillOpacity="0.7"
                            />
                            <ellipse
                              cx="2.39023"
                              cy="23.0484"
                              rx="2.39023"
                              ry="2.39022"
                              fill="white"
                              fillOpacity="0.7"
                            />
                            <ellipse
                              cx="13.9996"
                              cy="23.0484"
                              rx="2.39023"
                              ry="2.39022"
                              fill="white"
                              fillOpacity="0.7"
                            />
                            <ellipse
                              cx="25.609"
                              cy="23.0484"
                              rx="2.39023"
                              ry="2.39022"
                              fill="#fddf82"
                            />
                          </svg>
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
