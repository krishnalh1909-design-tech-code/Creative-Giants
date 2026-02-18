import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const NewsHeading = () => {
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        yPercent: 200,     // start from bottom
        duration: 1,
        delay: 1.6,        // ⬅ delay here
        ease: "power4.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="px-5 h-[30vh] bg-[#FFFEF7] md:h-[35vh] md:py-10 font-[Light] text-3xl md:text-6xl w-full overflow-hidden flex items-end justify-start md:justify-center">
      <h1 ref={headingRef}>
        Ideas , Call-Outs & Our Latest News
      </h1>
    </div>
  );
};

export default NewsHeading;