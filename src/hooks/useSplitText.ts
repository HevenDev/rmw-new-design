"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/utils/SplitText"; // Ensure this exists

gsap.registerPlugin(ScrollTrigger, SplitText);

export const useSplitText = () => {
  const textRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (textRefs.current.length > 0) {
      textRefs.current.forEach((el) => {
        const split = new SplitText(el, { type: "chars" });
        gsap.from(split.chars, {
          opacity: 0,
          y: 50,
          stagger: 0.02,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    }
  }, []);

  return textRefs;
};





// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import  SplitText  from "@/utils/SplitText"; // ✅ Correct
 

// gsap.registerPlugin(ScrollTrigger);

// export const useSplitText = () => {
//   const textRefs = useRef<HTMLElement[]>([]);

//   useEffect(() => {
//     if (textRefs.current.length === 0) return;
//     textRefs.current.forEach((el) => {
//       if (!el || el.hasAttribute("data-animated")) return; // Prevent duplicate processing

//       el.setAttribute("data-animated", "true"); // Mark as processed

//       // Apply SplitText
//       const split = new SplitText(el, { // FIXED CONSTRUCTOR
//         type: "chars",
//         // linesClass: "tp-split__line",
//       });

//       gsap.set(el, { perspective: 400 });

//       let animationProps: any = { opacity: 0 };

//       if (el.classList.contains("tp-split__in-right")) {
//         animationProps.x = 50;
//       } else if (el.classList.contains("tp-split__in-left")) {
//         animationProps.x = -50;
//       } else if (el.classList.contains("tp-split__in-up")) {
//         animationProps.y = 80;
//       } else if (el.classList.contains("tp-split__in-down")) {
//         animationProps.y = -80;
//       }

//       gsap.fromTo(
//         split.chars,
//         animationProps,
//         {
//           x: 0,
//           y: 0,
//           opacity: 1,
//           duration: 0.4,
//           stagger: 0.02,
//           ease: "circ.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "top 90%",
//             once: true,
//           },
//         }
//       );
//     });
//   }, []);

//   return textRefs;
// };

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitText from "@/utils/SplitText"; // Ensure this exists

// gsap.registerPlugin(ScrollTrigger);

// export const useSplitText = () => {
//   const textRefs = useRef<HTMLElement[]>([]);

//   useEffect(() => {
//     if (textRefs.current.length === 0) return;

//     textRefs.current.forEach((el) => {
//       if (!el || el.hasAttribute("data-animated")) return; // Prevent duplicate processing

//       el.setAttribute("data-animated", "true"); // Mark as processed

//       // Apply SplitText
//       const split = new SplitText(el, {
//         type: "lines,words,chars",
//         linesClass: "tp-split__line",
//       });

//       gsap.set(el, { perspective: 400 });

//       // Define animation properties based on class
//       let animationProps: any = { opacity: 0 };

//       if (el.classList.contains("tp-split__in-right")) {
//         animationProps.x = 50;
//       } else if (el.classList.contains("tp-split__in-left")) {
//         animationProps.x = -50;
//       } else if (el.classList.contains("tp-split__in-up")) {
//         animationProps.y = 80;
//       } else if (el.classList.contains("tp-split__in-down")) {
//         animationProps.y = -80;
//       }

//       // GSAP animation
//       gsap.fromTo(
//         split.chars,
//         animationProps,
//         {
//           x: 0,
//           y: 0,
//           opacity: 1,
//           duration: 0.4,
//           stagger: 0.02,
//           ease: "circ.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "top 90%",
//             once: true, // Runs only once
//           },
//         }
//       );
//     });
//   }, []);

//   return textRefs;
// };
