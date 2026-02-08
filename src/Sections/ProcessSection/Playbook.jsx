import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sectionsData } from "./PlayBookData";

gsap.registerPlugin(ScrollTrigger);

const Playbook = () => {
  const imageWrappers = useRef([]);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)",
      },
      (context) => {
        const { isMobile, isDesktop } = context.conditions;

        imageWrappers.current.forEach((wrapper) => {
          if (!wrapper) return;

          gsap.fromTo(
            wrapper,
            { height: 0 },
            {
              height: isMobile ? 200 : "100%",
              duration: 2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: wrapper,
                start: isMobile ? "top 50%" : "top 80%",
                once: true,
              },
            }
          );
        });
      }
    );

    return () => mm.revert();
  }, []);



  return (
    <div className="px-5 md:px-8 min-h-screen w-full bg-[#FFFEF7]  ">

      {/* HEADER */}
      <div className="w-full flex flex-col gap-4 py-8
                md:h-[20vh] md:flex-row md:items-center md:gap-3.5">

        {/* LEFT LABEL */}
        <div className="w-full md:w-[30%]">
          <h1 className="font-[Light] text-sm md:text-base tracking-wide">
            OUR PROCESS
          </h1>
        </div>

        {/* RIGHT TITLE */}
        <div className="w-full md:w-[70%]">
          <h1 className="font-[Light] text-xl sm:text-4xl md:text-6xl leading-tight">
            The Play Book (it's not rocket science)
          </h1>
        </div>
      </div>


      {sectionsData.map((item, index) => (
        <div
          key={item.id}
          className="w-full border-t-2 border-black py-3
               flex flex-col gap-6
               md:flex-row md:h-[40vh]"
        >
          {/* NUMBER */}
          <div className="md:w-[30%]">
            <h1 className="font-[Light] text-3xl md:text-5xl">
              {item.id}
            </h1>
          </div>

          {/* CONTENT */}
          <div className="md:w-[70%] flex flex-col md:flex-row gap-6 items-start md:items-center">

            {/* IMAGE */}
            <div
              ref={(el) => (imageWrappers.current[index] = el)}
              className="w-full md:w-[45%] h-[200px] md:h-full overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="w-full md:w-[55%] flex flex-col gap-4 font-[Light] md:px-5">
              <h1 className="text-2xl md:text-4xl">
                {item.title}
              </h1>

              <p className="text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}


    </div>
  );
};

export default Playbook;
