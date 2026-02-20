import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Move Cursor
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    // Hover detection
    const handleMouseOver = (e) => {
      if (e.target.closest("[data-cursor='large']")) {
        gsap.to(cursor, {
          scale: 2,
          duration: 0.3,
          ease: "power3.out",
        });
      } else {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed hidden lg:block mix-blend-difference top-0 left-0 z-900
                 h-2 w-2 rounded-full
                 bg-white pointer-events-none"
    />
  );
};

export default CustomCursor;