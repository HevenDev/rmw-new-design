"use client";

import Link from "next/link";
import { useSplitText } from "@/hooks/useSplitText";
import Image from "next/image";

const Footer = () => {
  const textRefs = useSplitText();

  return (
    <footer>
      {/* <!-- tp footer area start  --> */}
      
      <section
        className="tp-footer-area fix tp-footer__1 tp-footer__plr black-bg-2 z-index-11 p-relative"
        data-background=""
        data-bg-color=""
      >
        <div className="tp-footer__shape">
          <img
            src="https://etorisoft.com/wp/avtrix/wp-content/themes/avtrix/assets/img/footer/footer-shape-1-1.png"
            alt=""
            style={{ filter: " sepia(100%) saturate(500%) hue-rotate(10deg)" }}
          />
        </div>
        <div className="tp-footer__wrap  ">
          <div className="tp-cta-area pt-75 pb-95">
            <div className="container">
              <div className="tp-cta__box">
                <div className="row justify-content-center">
                  <div className="col-xl-7">
                    <div className="tp-cta__item text-center">
                      <h3
                        ref={(el) => {
                          if (el) textRefs.current.push(el);
                        }}
                        className="tp-cta__title tp-split__text tp-split__in-right tp-cursor-point-area"
                      >
                        <Link href="/contact/">
                          Get in <span>touch</span>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- tp cta area end  --> */}
          <div className="container  ">
            <div className="row" style={{justifyContent:"space-between"}}>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div
                  id="custom_html-3"
                  className="widget_text tp-footer__widget footer-col-1-1 mb-40 widget_custom_html"
                >
                  <div className="widget_text tp-footer-widget-content">
                    <div style={{padding:"10px"}} className="textwidget custom-html-widget">
                      <div className="tp-footer__logo">
                        <Link href="/">
                          <Image
                            width={50}
                            height={50}
                            layout="fixed"
                            src="/rmw_logo_gold.png"
                            alt="logo"
                          />
                        </Link>
                      </div>
                      <p style={{color:"#aaa4a4", fontSize: "14px"}}>Accelerate your journey to success with result-oriented solutions for Digital Advertising, Social Media Management, SEO, and Compelling Content backed by more than 17 years of advertising wisdom with a wide array of clients across all industries across the Indian subcontinent.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div
                  id="nav_menu-3"
                  className="tp-footer__widget footer-col-1-2 mb-40 widget_nav_menu"
                >
                  <div className="tp-footer-widget-content">
                    <h3 className="tp-footer__widget-title">Quick Links</h3>
                    <div className="menu-our-location-container">
                      <ul id="menu-our-location" className="menu">
                        <li
                          id="menu-item-140"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-140"
                        >
                          <Link href="/">
                            Home
                          </Link>
                        </li>
                        <li
                          id="menu-item-141"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-141"
                        >
                          <Link href="/about">
                            About
                          </Link>
                        </li>
                        <li
                          id="menu-item-142"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-142"
                        >
                          <Link href="/services">
                            Services
                          </Link>
                        </li>
                        <li
                          id="menu-item-143"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-143"
                        >
                          <Link href="/our-work">
                            Our Work
                          </Link>
                        </li>
                        <li
                          id="menu-item-144"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-144"
                        >
                          <Link href="/blog">
                            Blogs
                          </Link>
                        </li>
                        <li
                          id="menu-item-144"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-144"
                        >
                          <Link href="/contact-us">
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div
                  id="nav_menu-4"
                  className="tp-footer__widget footer-col-1-4 mb-40 widget_nav_menu"
                >
                  <div className="tp-footer-widget-content">
                    <h3 className="tp-footer__widget-title">our services</h3>
                    <div className="menu-footer-service-nav-container">
                      <ul id="menu-footer-service-nav" className="menu">
                        <li
                          id="menu-item-135"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-135"
                        >
                          <Link href="/services/digital-marketing">
                            Digital Marketing
                          </Link>
                        </li>
                        <li
                          id="menu-item-136"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-136"
                        >
                          <Link href="/services/print-advertising">
                            Print Advertising
                          </Link>
                        </li>
                        <li
                          id="menu-item-137"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-137"
                        >
                          <Link href="/services/radio-advertising">
                            Radio Advertising
                          </Link>
                        </li>
                        <li
                          id="menu-item-138"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-138"
                        >
                          <Link href="/service/creative-services">
                            Creative Services
                          </Link>
                        </li>
                        <li
                          id="menu-item-139"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-139"
                        >
                          <Link href="/services/web-development">
                            Web Development
                          </Link>
                        </li>
                        <li
                          id="menu-item-139"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-139"
                        >
                          <Link href="/services/celebrity-endorsements">
                            Celebrity Endorsements
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>  
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div
                  id="custom_html-4"
                  className="widget_text tp-footer__widget footer-col-1-3 mb-40 widget_custom_html"
                >
                  <div className="widget_text tp-footer-widget-content">
                    <h3 className="tp-footer__widget-title">Contact info</h3>
                    <div className="textwidget custom-html-widget">
                      <div className="tp-footer__contact-info">
                        <div className="tp-footer__list">
                          <Link href="#">
                          Address: 402 – 404 , 4th floor Corporate Park,
                          Tower A1 Sector 142 , Greater Noida
                          </Link>
                          <Link href="tel:09220516777">09220516777</Link>
                          <Link href="tel:07290002168">07290002168</Link>
                          <Link href="mailto:
info@ritzmediaworld.com">
                            info@ritzmediaworld.com
                          </Link>
                          <Link href="#">Office Hours: 8AM - 11PM</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          {/* <!-- tp copyright area start --> */}
          <div className="tp-copyright-area pt-80 pb-5">
            <div className="container">
              <div className="tp-copyright__wrap   pt-20">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-7 ">
                    <div className="tp-copyright__text">
                      <p>
                        © 2025 <span> RITZ MEDIA WORLD,</span> All Rights Reserved
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5">
                    <div className="tp-copyright__social text-lg-end">
                      <Link href="#" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>

                      <Link href="#" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </Link>

                      <Link href="#" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>

                      <Link href="#" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- tp copyright area end --> */}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
