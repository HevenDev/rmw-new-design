"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import useStickyElements from "@/hooks/useStickyElements";
import styles from "./Header.module.css"; // Import CSS module
import { FaFacebookF , FaYoutube, FaInstagram , FaLinkedinIn   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

declare namespace JSX {
  interface IntrinsicElements {
    li: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
  }
}

const Header = () => {

  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(true); 
  

  useStickyElements();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(`.${styles.dropdown}`)) {
        setIsServiceDropdownOpen(true); // Keep it open by default
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div
        id="header-sticky"
        className={`tp-header-top-area tp-header__style-1 tp-header__transparent tp-header__border pr-160 pl-160 ${styles.headerBackground}`}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
              <div className="tp-main__logo">
                <Link className="main-logo" href="/">
                  <Image width={50} height={50} src="/rmw_logo_gold.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 d-none d-lg-block">
              <div className="tp-main__menu d-flex justify-content-center">
                <nav>
                  <ul id="menu-main-menu" className="menu-main-menu">
                    <li className="nav-item"><Link href="/" className="nav-links">Home</Link></li>
                    <li className="nav-item"><Link href="/about/" className="nav-links">About</Link></li>
                    <li className="nav-item"><Link href="/service" className="nav-links">Service</Link>
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
                    <li className="nav-item"><Link href="/our-work/" className="nav-links">Our Work</Link></li>
                    <li className="nav-item"><Link href="/blog" className="nav-links">Blog</Link></li>
                    <li className="nav-item"><Link href="/contact/" className="nav-links">Contact us</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
              <div className="tp-header__right d-flex justify-content-end">
                <div className="tp-header__action">
                  <ul>
                    <li>
                      <button
                        className="tp-header__burs-btn tp-offcanvas-open-btn"
                        onClick={() => {
                          if (isMobile) {
                            setIsMenuOpen(!isMenuOpen);
                          } else {
                            setIsDesktopSidebarOpen(!isDesktopSidebarOpen);
                          }
                        }}
                      >
                        <span>
                          <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
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

      {/* Mobile Sidebar */}
   {isMobile && (
  <div
    className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.open : ""}`}
    onClick={() => setIsMenuOpen(false)}
  >
    <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          top: "20px",
        }}
        className={styles.MobileSidebarLogo}
      >
        <img style={{ height: "50px" }} src="/rmw_logo_gold.png" alt="RMW Logo" />
        <button className={styles.closeMenu} onClick={() => setIsMenuOpen(false)}>✖</button>
      </div>

      <nav>
        <ul className={`${styles.navItem}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about/">About</Link></li>

          {/* Service Dropdown (Smooth) */}
          <li className={styles.dropdown}>
            <div
              className={styles.dropdownToggle}
              onClick={(e) => {
                e.stopPropagation();
                setIsServiceDropdownOpen((prev) => !prev);
              }}
            >
              <span>Service</span>
              <button className={styles.dropdownArrow}>
                {isServiceDropdownOpen ? "▲" : "▼"}
              </button>
            </div>
            <ul
              className={`${styles.submenu} ${isServiceDropdownOpen ? styles.show : ""}`}
            >
              <li style={{ paddingLeft: "20px"}}><Link href="/service">Service</Link></li>
              <li style={{ paddingLeft: "20px"}}><Link href="/service/details">Service Details</Link></li>
            </ul>
          </li>

          <li><Link href="/our-work/">Our Work</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact/">Contact us</Link></li>
        </ul>
      </nav>
      <div className="tp-hero__social-content">
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-evenly",
            fontSize: "20px",
            color: "#fddf82",
          }}
        >
          <li>
            <Link href="https://www.facebook.com/ritzmediaworld/">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/i/flow/login?redirect_after_login=%2Fritzmediaworld">
              <FaXTwitter />
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/c/RitzMediaWorldCreativeThinksMedia">
              <FaYoutube />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/ritzmediaworld/">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/ritzmediaworld/?originalSubdomain=in">
              <FaLinkedinIn />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)}

      {/* Desktop Sidebar (≥ 992px) */}
      {!isMobile && isDesktopSidebarOpen && (
  <div  style={{padding: "40px 40px", alignItems: "center"}}
    className={`${styles.desktopSidebar} ${styles.mobileMenuOverlay} ${
      isDesktopSidebarOpen ? styles.open : ""
    }`}
    onClick={() => setIsDesktopSidebarOpen(false)} // Close sidebar on outside click
  >
    <div className={styles.desktopSidebarContent} onClick={(e) => e.stopPropagation()}>
      <div className={styles.MobileSidebarLogo}>
        <img style={{ height: "50px" }} src="/rmw_logo_gold.png" alt="RMW Logo" />
        <button className={styles.closeMenu} onClick={() => setIsDesktopSidebarOpen(false)}>✖</button>
      </div>

     <div style={{fontSize: "18px", fontFamily:"sans-serif", color: "white"}}>Web designing in a powerful way of just not an only professions. We have tendency to believe the idea that smart looking.</div>
     <div>
      <p style={{color:"#f7d97e", fontSize:"26px", marginTop: "20px"}}>Gallery</p>
      <div style={{display: "grid", gap: "2px", gridTemplateColumns: " repeat(3, 1fr)"}}>
        <img src="/home-images/home-swiper1-img1.jpeg" alt=""  />
        <img src="/home-images/home-swiper1-img1.jpeg" alt=""  />
        <img src="/home-images/home-swiper1-img1.jpeg" alt=""  />
        <img src="/home-images/home-swiper1-img1.jpeg" alt=""  />
        <img src="/home-images/home-swiper1-img1.jpeg" alt=""  />
        <img src="/home-images/home-swiper1-img1.jpeg" alt=""  />
      </div>
     </div>
      <div className={styles.contactInfo}>
        <h3>Contact</h3>
        <p>📍 Address: 402 – 404 , 4th floor Corporate Park,
        Tower A1 Sector 142 , Greater Noida</p>
        <p>✉️ <Link href="/">
        info@ritzmediaworld.com</Link></p>
        <p>📞 <Link href="/">09220516777</Link></p>
        <p>📞 <Link href="/">09220516777</Link></p>
      </div>

      <div style={{bottom: "20px", position: "absolute", left: "50%", transform: "translate(-50%, -50%)"}} className="tp-hero__social-content">
        <ul
          style={{
              listStyle: "none",
              display: "flex",
              gap: "30px",
            fontSize: "20px",
            color: "#fddf82",
          }}
        >
          <li>
            <Link href="https://www.facebook.com/ritzmediaworld/">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/i/flow/login?redirect_after_login=%2Fritzmediaworld">
              <FaXTwitter />
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/c/RitzMediaWorldCreativeThinksMedia">
              <FaYoutube />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/ritzmediaworld/">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/ritzmediaworld/?originalSubdomain=in">
              <FaLinkedinIn />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)}

    </header>
  );
};

export default Header;
