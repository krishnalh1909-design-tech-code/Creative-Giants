import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".showcase-card");

    gsap.set(cards, { yPercent: 520 });

    gsap.to(cards, {
      yPercent: -100,
      ease: "none",
      stagger: 0.12,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * 2}`, // 🔑 enough space
        scrub: true,
        pin: true,
        pinSpacing: true, // 🔑 REQUIRED
        anticipatePin: 1,
      },
    });

  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen bg-white flex overflow-hidden -mt-0.5"
    >
      {/* CENTER TEXT */}
      <div className="pointer-events-none text-white w-full h-[40vh] flex flex-col items-center justify-center gap-2 absolute top-1/2 -translate-y-1/2 z-30">
        <h3 className="font-[Light] text-2xl font-extrabold">GET STARTED</h3>
        <h1 className="font-[Regular] text-7xl">Let's make</h1>
        <h1 className="font-[Regular] text-7xl">things happen.</h1>
      </div>

      {/* COLUMNS */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`h-full flex-1 px-2 ${i < 5 ? "border-r-2 border-white" : ""
            } ${i > 3 ? "hidden sm:flex" : ""}`}
        >
          <div className="showcase-card w-full h-[30vh] bg-red-300" />
        </div>
      ))}

      {/* FADE MASK */}
      {/* <div className="pointer-events-none absolute inset-0 z-20
        bg-[linear-gradient(to_bottom,#070707_0%,transparent_18%,transparent_82%,#070707_100%)]"
      /> */}
    </div>
  );
};

export default Showcase;
