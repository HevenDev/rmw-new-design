"use client"
import { useEffect } from "react";
import Footer from "@/components/footer/Footer";
import Awards from "./Homepage/Awards";
import Experience from "./Homepage/Experience";
import Feedback from "./Homepage/Feedback";
import Home from "./Homepage/Home";
import Projects from "./Homepage/Projects";
import ProjectSwiper from "./Homepage/ProjectSwiper";
import Service from "./Homepage/Service";
import SwiperHome from "./Homepage/SwiperHome";
// import Team from "./Homepage/Team";
import Work from "./Homepage/Work";

const Elementor = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".tp-section-hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div
        data-elementor-type="wp-page"
        data-elementor-id="17"
        className="elementor elementor-17"
      >
        <Home/>

        {/* ======== Section 2 ========  */}

        <SwiperHome />

        {/* ======== Section 3 ========  */}

        <Service />

        {/* ======== Section 4 ========  */}

        <Work />

        {/* ======== Section 5 ========  */}

        <Projects />

        {/* ======== Section 6 ========  */}

       <ProjectSwiper />

        {/* ======== Section 7 ========  */}

        <Awards />

        {/* ======== Section 8 ========  */}

        <Experience />

        {/* ======== Section 9 ========  */}

        {/* <Team /> */}

        {/* ======== Section 10 ========  */}

        <Feedback />

        {/* ======== Footer ========  */}
        
        <Footer />

      </div>
    </>
  );
};

export default Elementor;
