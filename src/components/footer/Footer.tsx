"use client";

import Link from "next/link";
import { useSplitText } from "@/hooks/useSplitText";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

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
        <div className="tp-footer__wrap  ">
          <div className="tp-cta-area pt-75 pb-75">
            <div className="container">
              <div className="tp-cta__box">
                <div className="row justify-content-center">
                  <div className="col-xl-7">
                    <Link href="/contact/">
                      <div className="tp-cta__item text-center">
                        <h3
                          ref={(el) => {
                            if (el) textRefs.current.push(el);
                          }}
                          className="tp-cta__title tp-split__text tp-split__in-right"
                        >
                          <span>Get in</span> <span>touch</span>
                        </h3>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- tp cta area end  --> */}
          <div className="container  ">
            <div className="row" style={{ justifyContent: "space-between" }}>
              <div className="col-12 col-md-6 col-lg-3">
                <div
                  id="custom_html-3"
                  className="widget_text tp-footer__widget footer-col-1-1 mb-40 widget_custom_html"
                >
                  <div className="widget_text tp-footer-widget-content">
                    <div
                      style={{ padding: "10px" }}
                      className="textwidget custom-html-widget"
                    >
                      <div className="tp-footer__logo">
                        <Link href="/">
                          <Image
                            width={100}
                            height={100}
                            layout="fixed"
                            src="/logo-brown.png"
                            alt="logo"
                          />
                        </Link>
                      </div>
                      <p style={{ color: "#aaa4a4", fontSize: "14px" }}>
                        Accelerate your journey to success with result-oriented
                        solutions for Digital Advertising, Social Media
                        Management, SEO, and Compelling Content backed by more
                        than 17 years of advertising wisdom with a wide array of
                        clients across all industries across the Indian
                        subcontinent.
                      </p>
                      <div className="tp-contact__social-link">
                        <Link href="https://www.facebook.com/ritzmediaworld/" >
                          <i aria-hidden="true">
                            <FaFacebookF />
                          </i>
                        </Link>
                        <Link href="https://www.instagram.com/ritzmediaworld/" >
                          <i aria-hidden="true">
                            <FaInstagram />
                          </i>
                        </Link>
                        <Link href="https://x.com/i/flow/login?redirect_after_login=%2Fritzmediaworld" target="http://1" rel="http://1">
                          <i aria-hidden="true">
                            <FaXTwitter />
                          </i>
                        </Link>
                        <Link href="https://www.linkedin.com/company/ritzmediaworld/?originalSubdomain=in">
                          <i aria-hidden="true">
                            <FaLinkedin />
                          </i>
                        </Link>
                        <Link href="https://www.youtube.com/c/RitzMediaWorldCreativeThinksMedia" target="http://1" rel="http://1">
                          <i aria-hidden="true">
                            <FaYoutube />
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3">
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
                          <Link href="/">Home</Link>
                        </li>
                        <li
                          id="menu-item-141"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-141"
                        >
                          <Link href="/about">About</Link>
                        </li>
                        <li
                          id="menu-item-142"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-142"
                        >
                          <Link href="/services">Services</Link>
                        </li>
                        <li
                          id="menu-item-143"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-143"
                        >
                          <Link href="/our-work">Our Work</Link>
                        </li>
                        <li
                          id="menu-item-144"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-144"
                        >
                          <Link href="/blog">Blogs</Link>
                        </li>
                        <li
                          id="menu-item-144"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-144"
                        >
                          <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3">
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
                          <Link href="/services/best-digital-marketing-agency">
                            Digital Marketing
                          </Link>
                        </li>
                        <li
                          id="menu-item-136"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-136"
                        >
                          <Link href="/services/best-print-advertising-agency">
                            Print Advertising
                          </Link>
                        </li>
                        <li
                          id="menu-item-137"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-137"
                        >
                          <Link href="/services/top-radio-ad-agency">
                            Radio Advertising
                          </Link>
                        </li>
                        <li
                          id="menu-item-138"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-138"
                        >
                          <Link href="/service/leading-creative-agency-india">
                            Creative Services
                          </Link>
                        </li>
                        <li
                          id="menu-item-138"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-138"
                        >
                          <Link href="/service/leading-content-marketing-agency">
                            Content Marketing
                          </Link>
                        </li>
                        <li
                          id="menu-item-139"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-139"
                        >
                          <Link href="/services/best-website-designing-company">
                            Web Development
                          </Link>
                        </li>
                        <li
                          id="menu-item-139"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-139"
                        >
                          <Link href="/services/celebrity-endorsement-agency-india">
                            Celebrity Endorsements
                          </Link>
                        </li>
                        <li
                          id="menu-item-139"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-139"
                        >
                          <Link href="/services/influencer-marketing-agency-in-india">
                            Influencer Marketing
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
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
                            Address: 402 – 404, <br /> 4th floor Corporate Park,{" "}
                            <br />
                            Tower A1 Sector 142, <br /> Greater Noida
                          </Link>
                          <Link href="tel:09220516777">09220516777</Link>
                          <Link href="tel:07290002168">07290002168</Link>
                          <Link
                            href="mailto:
info@ritzmediaworld.com"
                          >
                            info@ritzmediaworld.com
                          </Link>
                          <Link href="#">Office Hours: 9AM - 7PM</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- tp copyright area start --> */}
          <div className="tp-copyright-area pb-5">
            <div className="container">
              <div className="tp-copyright__wrap   pt-20">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-7 ">
                    <div className="tp-copyright__text">
                      <p>
                        © 2025 <span> RITZ MEDIA WORLD,</span> All Rights
                        Reserved
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
