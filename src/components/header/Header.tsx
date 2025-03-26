"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import useStickyElements from "@/hooks/useStickyElements";
import styles from "./Header.module.css"; // Import CSS module

const Header = () => {
  useStickyElements();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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
                    <li className="nav-item"><Link href="/service" className="nav-links">Service</Link></li>
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
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
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

      {/* Mobile Menu */}
      {isMobile && (
        <div className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.open : ""}`} onClick={() => setIsMenuOpen(false)}>
          <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className={styles.closeMenu} onClick={() => setIsMenuOpen(false)}>
              ✖
            </button>

            {/* Navigation Links */}
            <nav>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about/">About</Link></li>
                <li><Link href="/service">Service</Link></li>
                <li><Link href="/our-work/">Our Work</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact/">Contact us</Link></li>
              </ul>
            </nav>

            {/* Contact Section */}
            <div className={styles.contactInfo}>
              <h3>Contact</h3>
              <p>📍 734 H, Bryan Burlington, NC 27215</p>
              <p>✉️ <Link href="mailto:avtrix@support.com">avtrix@support.com</Link></p>
              <p>📞 <Link href="tel:+8801310-069824">+8801310-069824</Link></p>
            </div>

            {/* Social Media Icons */}
            <div className={styles.socialIcons}>
              <Link href="https://facebook.com" target="_blank">
                <Image src="/icons/facebook.svg" width={30} height={30} alt="Facebook" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Image src="/icons/twitter.svg" width={30} height={30} alt="Twitter" />
              </Link>
              <Link href="https://youtube.com" target="_blank">
                <Image src="/icons/youtube.svg" width={30} height={30} alt="YouTube" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Image src="/icons/linkedin.svg" width={30} height={30} alt="LinkedIn" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
