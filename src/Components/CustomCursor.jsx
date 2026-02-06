import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed hidden lg:block mix-blend-difference -top-[7px] left-0 z-900
                 h-2 w-2 rounded-full
                 bg-white pointer-events-none"
    />
  );
};

export default CustomCursor;
