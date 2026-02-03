import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsList = () => {
  const pinRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    gsap.to(trackRef.current, {
      xPercent: -80,
      ease: "none",
      scrollTrigger: {
        trigger: pinRef.current,
        start: "top top",
        end: () => `+=${window.innerWidth * 2}`,
        scrub: 1,
        pin: true,
        pinSpacing: true, 
        // markers: true,   
      },
    });
  }, []);

  return (
    <>
      {/* PINNED SECTION */}
      <section
        ref={pinRef}
        className="h-screen w-screen bg-[#070707] overflow-hidden"
      >
        <div
          ref={trackRef}
          className="h-full w-[300vw] flex items-center"
        >
          <div className="h-[70vh] w-screen bg-amber-300" />
          <div className="h-[70vh] w-screen bg-amber-700" />
          <div className="h-[70vh] w-screen bg-amber-100" />
        </div>
      </section>

      {/* NEXT NORMAL SECTION */}
      {/* <section className="h-screen w-full bg-green-600 flex items-center justify-center text-white text-4xl">
        GREEN SECTION
      </section> */}
    </>
  );
};

export default ProjectsList;
