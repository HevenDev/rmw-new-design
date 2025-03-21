"use client"; //changed

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaXTwitter, FaYoutube  } from "react-icons/fa6";

import { useSplitText } from "@/hooks/useSplitText"; //changed

const Form = () => {
  const textRefs = useSplitText(); //changed

  return (
<>


    <div className="tp-contact__area pt-130 pb-90 black-bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6" style={{padding:"2rem"}}>
            <div className="tp-contact__left">
              <div className="tp-contact__title-box mb-75">
                <h3
                  ref={(el) => {
                      if (el) textRefs.current.push(el);
                    }}
                    className="tp-section-title tp-split__text tp-split__in-right mb-35"
                    style={{ perspective: "400px" }}
                    >
                  <div
                    ref={(el) => {
                        if (el) textRefs.current.push(el);
                    }}
                    className="tp-split__line"
                    style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                    }}
                    >
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                      >
                      {" "}
                      <div
                        style={{
                            position: "relative",
                            display: "inline-block",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                        }}
                        >
                        G
                      </div>
                      <div
                        style={{
                            position: "relative",
                            display: "inline-block",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                        }}
                        >
                        e
                      </div>
                      <div
                        style={{
                            position: "relative",
                            display: "inline-block",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                        }}
                        >
                        t
                      </div>
                    </div>{" "}
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                      >
                      <div
                        style={{
                            position: "relative",
                            display: "inline-block",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                        }}
                        >
                        I
                      </div>
                      <div
                        style={{
                            position: "relative",
                            display: "inline-block",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                        }}
                        >
                        n
                      </div>
                    </div>{" "}
                    <span>
                      <div
                        style={{
                            position: "relative",
                            display: "inline-block",
                        }}
                        >
                        <div
                          style={{
                              position: "relative",
                              display: "inline-block",
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              transform: "translate(0px, 0px)",
                              opacity: 1,
                            }}
                            >
                          T
                        </div>
                        <div
                          style={{
                              position: "relative",
                              display: "inline-block",
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              transform: "translate(0px, 0px)",
                              opacity: 1,
                            }}
                            >
                          o
                        </div>
                        <div
                          style={{
                              position: "relative",
                              display: "inline-block",
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              transform: "translate(0px, 0px)",
                              opacity: 1,
                            }}
                            >
                          u
                        </div>
                        <div
                          style={{
                              position: "relative",
                              display: "inline-block",
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              transform: "translate(0px, 0px)",
                              opacity: 1,
                            }}
                            >
                          c
                        </div>
                        <div
                          style={{
                              position: "relative",
                              display: "inline-block",
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              transform: "translate(0px, 0px)",
                              opacity: 1,
                            }}
                            >
                          h
                        </div>
                      </div>
                    </span>{" "}
                  </div>
                </h3>
                <p
                  className="wow tpfadeUp animated"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                  style={{
                      visibility: "visible",
                      animationDuration: "0.9s",
                      animationDelay: "0.3s",
                    }}
                    >
                  Lorem ipsum dolor sit amet consectetur adipiscing elit mattis{" "}
                  <br /> faucibus odio feugiat arc dolor.
                </p>
              </div>
              <div
                className="tp-contact__content d-flex align-items-center wow tpfadeUp animated"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
                style={{
                    visibility: "visible",
                    animationDuration: "0.9s",
                    animationDelay: "0.5s",
                   justifyContent: "space-between" //changed
                }}
                >
                <div className="tp-contact__text">
                  <h3 className="tp-contact__title">Contact</h3>
                  <Link href="//" className="tp-contact__title-sm">
                    09220516777 <br />
                    07290002168
                  </Link>
                </div>
                <div className="tp-contact__email">
                  <h3 className="tp-contact__title">Email</h3>
                  <Link href="//" className="tp-contact__title-sm">
                    info@ritzmediaworld.com
                  </Link>
                </div>
              </div>
              <div
                className="tp-contact__content d-flex align-items-center wow tpfadeUp animated"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
                style={{
                    visibility: "visible",
                    animationDuration: "0.9s",
                    animationDelay: "0.7s",
                    justifyContent: "space-between"
                }}
                >
                <div className=" tp-contact__adress">
                  <h3 className="tp-contact__title">Address</h3>
                  <div className="tp-contact__title-sm">
                    402 – 404 , 4th floor Corporate Park, <br /> Tower A1 Sector
                    142 , Greater Noida{" "}
                  </div>
                </div>
                <div className="tp-contact__social">
                  <h3 className="tp-contact__title">Follow</h3>
                  <div className="tp-contact__social-link">
                    <Link href="#" target="http://1" rel="http://1">
                      <i aria-hidden="true">
                        <FaFacebookF />
                      </i>{" "}
                    </Link>
                    <Link href="#" target="http://1" rel="http://1">
                      <i aria-hidden="true">
                        <FaInstagram />{" "}
                      </i>{" "}
                    </Link>
                    <Link href="#" target="http://1" rel="http://1">
                      <i aria-hidden="true">
                        <FaXTwitter />
                      </i>{" "}
                    </Link>
                    <Link href="#" target="http://1" rel="http://1">
                      <i aria-hidden="true">
                        <FaLinkedin />
                      </i>{" "}
                    </Link>
                    <Link href="#" target="http://1" rel="http://1">
                      <i aria-hidden="true">
                      <FaYoutube />
                      </i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="tp-contact__inner wow tpfadeUp animated"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
              style={{
                  visibility: "visible",
                  animationDuration: "0.9s",
                  animationDelay: "0.9s",
                }}
                >
              <div id="contact-form">
                <div
                  className="wpcf7 js"
                  id="wpcf7-f990-p70-o1"
                  lang="en-US"
                  dir="ltr"
                  data-wpcf7-id="990"
                  >
                  <div className="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true"></p>{" "}
                    <ul></ul>
                  </div>
                  <form
                    action="/wp/avtrix/contact/#wpcf7-f990-p70-o1"
                    method="post"
                    className="wpcf7-form init"
                    aria-label="Contact form"
                    data-status="init"
                    >
                    <div style={{ display: "none" }}>
                      <input type="hidden" name="_wpcf7" value="990" />
                      <input
                        type="hidden"
                        name="_wpcf7_version"
                        value="6.0.4"
                        />
                      <input type="hidden" name="_wpcf7_locale" value="en_US" />
                      <input
                        type="hidden"
                        name="_wpcf7_unit_tag"
                        value="wpcf7-f990-p70-o1"
                        />
                      <input
                        type="hidden"
                        name="_wpcf7_container_post"
                        value="70"
                        />
                      <input
                        type="hidden"
                        name="_wpcf7_posted_data_hash"
                        value=""
                        />
                    </div>
                    <div className="postbox__comment-form">
                      <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="postbox__comment-input mb-35">
                            <span
                              className="wpcf7-form-control-wrap"
                              data-name="contact_form_1_name"
                              >
                              <input
                                size={40}
                                maxLength={400}
                                className="wpcf7-form-control wpcf7-text inputText"
                                aria-invalid="false"
                                placeholder="Your Name"
                                type="text"
                                name="contact_form_1_name"
                                />
                            </span>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="postbox__comment-input mb-35">
                            <span
                              className="wpcf7-form-control-wrap"
                              data-name="contact_form_1_phone_number"
                              >
                              <input
                                size={40}
                                maxLength={400}
                                className="wpcf7-form-control wpcf7-text inputText"
                                aria-invalid="false"
                                placeholder="Phone Number"
                                type="text"
                                name="contact_form_1_phone_number"
                                />
                            </span>
                          </div>
                        </div>
                        <div className="col-xxl-12">
                          <div className="postbox__comment-input mb-35">
                            <span className="wpcf7-form-control-wrap">
                              <input
                                size={40}
                                maxLength={400}
                                className="wpcf7-form-control wpcf7-email wpcf7-text wpcf7-validates-as-email inputText"
                                aria-invalid="false"
                                placeholder="Email Address"
                                type="email"
                                name="contact_form_1_email"
                                />
                            </span>
                          </div>
                        </div>
                        <div className="col-xxl-12">
                          <div className="postbox__comment-input mb-20">
                            <span
                              className="wpcf7-form-control-wrap"
                              data-name="contact_form_1_message"
                              >
                              <textarea
                                cols={40}
                                rows={10}
                                maxLength={2000}
                                className="wpcf7-form-control wpcf7-textarea textareaText"
                                aria-invalid="false"
                                placeholder="Write Message"
                                name="contact_form_1_message"
                                ></textarea>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tp-contact__action">
                      <button
                        type="submit"
                        className="tp-btn-secondary"
                        //  fdprocessedid="vtyjbb"
                        >
                        Send Us Messages
                        <span>
                          <i className="far fa-angle-right"></i>
                        </span>
                      </button>
                    </div>
                    <div
                      className="wpcf7-response-output"
                      aria-hidden="true"
                      ></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28052.52086266602!2d77.4128188!3d28.49264095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce530165cc6c1%3A0x9ea28df462e9945e!2sRitz%20Media%20World-Digital%20Marketing%20Agency%20in%20Noida%20%7C%20Social%20Media%20Agency%20in%20Noida%20%7C%20Newspaper%20%26%20Radio%20Ad%20Agency%20in%20Noida!5e0!3m2!1sen!2sin!4v1742542850888!5m2!1sen!2sin" width="800" height="600" style={{border:0, width: "100vw"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </>
  );
};

export default Form;
