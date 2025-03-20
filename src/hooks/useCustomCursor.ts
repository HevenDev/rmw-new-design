import { useEffect } from "react";

const useCustomCursor = () => {
  useEffect(() => {
    const cursorInner = document.querySelector(".cursor-inner") as HTMLElement;
    const cursorOuter = document.querySelector(".cursor-outer") as HTMLElement;
    const mouseCursor = document.querySelector(".mouseCursor") as HTMLElement;

    if (!cursorInner || !cursorOuter || !mouseCursor) return;

    let clientX = 0,
      clientY = 0;
    let isHovering = false;

    // Mouse move event
    const onMouseMove = (e: MouseEvent) => {
      if (!isHovering) {
        cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      clientX = e.clientX;
      clientY = e.clientY;
    };

    // Hover effects
    const onMouseEnter = () => {
      cursorInner.classList.add("active");
      cursorOuter.classList.add("active");
    };

    const onMouseLeave = (e: Event) => {
      if (!e.target) return;
      if (!(e.target as HTMLElement).closest(".cursor-pointer, button, a")) {
        cursorInner.classList.remove("active");
        cursorOuter.classList.remove("active");
      }
    };

    // Cursor scaling effects
    const onCursorPointEnter = () => mouseCursor.classList.add("cursor-big");
    const onCursorPointLeave = () => mouseCursor.classList.remove("cursor-big");
    const onCursorPointEnter2 = () => cursorInner.classList.add("active");
    const onCursorPointLeave2 = () => cursorInner.classList.remove("active");

    // Attach event listeners
    document.addEventListener("mousemove", onMouseMove);
    document.querySelectorAll("button, a, .cursor-pointer").forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    document
      .querySelectorAll(".tp-cursor-point-area")
      .forEach((el) => el.addEventListener("mouseenter", onCursorPointEnter));
    document
      .querySelectorAll(".tp-cursor-point-area")
      .forEach((el) => el.addEventListener("mouseleave", onCursorPointLeave));

    document
      .querySelectorAll(".tp-cursor-point-area-2")
      .forEach((el) => el.addEventListener("mouseenter", onCursorPointEnter2));
    document
      .querySelectorAll(".tp-cursor-point-area-2")
      .forEach((el) => el.addEventListener("mouseleave", onCursorPointLeave2));

    // Make cursor visible
    cursorInner.style.visibility = "visible";
    cursorOuter.style.visibility = "visible";

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document
        .querySelectorAll("button, a, .cursor-pointer")
        .forEach((el) => {
          el.removeEventListener("mouseenter", onMouseEnter);
          el.removeEventListener("mouseleave", onMouseLeave);
        });
      document
        .querySelectorAll(".tp-cursor-point-area")
        .forEach((el) => el.removeEventListener("mouseenter", onCursorPointEnter));
      document
        .querySelectorAll(".tp-cursor-point-area")
        .forEach((el) => el.removeEventListener("mouseleave", onCursorPointLeave));
      document
        .querySelectorAll(".tp-cursor-point-area-2")
        .forEach((el) => el.removeEventListener("mouseenter", onCursorPointEnter2));
      document
        .querySelectorAll(".tp-cursor-point-area-2")
        .forEach((el) => el.removeEventListener("mouseleave", onCursorPointLeave2));
    };
  }, []);
};

export default useCustomCursor;
