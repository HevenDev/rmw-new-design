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

  const data = [
    {
      title: "Digital Marketing",
      imgSrc:
        "https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/digital-marketing.png",
      description:
        "Turning browsers into buyers isn’t magic. It’s precise digital persuasion. Our strategically obsessive digital campaigns boost visibility, amplify engagement, and reliably convert attention into measurable profits. Predictably brilliant.",
        link: "#",
    },
    {
      title: "Content Marketing",
      imgSrc:
        "https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/content-marketing.png",
        description:
        "Content without action is merely decoration. Our stories don’t just attract eyes, they move hearts and minds, persuading customers to act, buy, and loyally champion your brand. Charmingly effective.",
        link: "#",
    },
    {
      title: "(PPC) Advertising",
      imgSrc:
        "https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/ppc.png",
        description:
        "Why chase customers when you can strategically appear exactly where they’re searching? Our PPC approach delivers instant leads, measurable returns, and satisfaction so swiftly that you’ll swear it’s cheating (it’s not).",
        link: "#",
    },
    {
      title: "Video Production",
      imgSrc:
        "https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/08/video.png",
        description:
        "An unforgettable jingle outperforms a thousand tweets. Harness radio’s enduring power to lodge your message permanently in minds, turning listeners into lifelong customers without ever demanding screen time.",
        link: "#",
    },
  ]

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

        <Service data={data}/>

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
