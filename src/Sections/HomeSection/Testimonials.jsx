import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      bg: "#FFACEA",
      textColor: "#8A0467",
      text:
        "Working with this team of brilliant, problem solving, passionate, agile Ninjas is such a joy. Their creative ambition & desire to help bring even the most eye watering & challenging projects to life is second to none.",
      name: "Nikki Cramphorn",
      company: "Adam&EveDDB",
    },
    {
      id: 2,
      bg: "#A5EBD6",
      textColor: "#0F4D3A",
      text:
        "They consistently deliver ideas that are bold, thoughtful and commercially sharp. A true creative partner in every sense.",
      name: "Alex Turner",
      company: "R/GA",
    },
    {
      id: 3,
      bg: "#101731",
      textColor: "#FFFFFF",
      text:
        "From strategy to execution, the level of craft and care they bring to every project is exceptional.",
      name: "Sarah Williams",
      company: "AKQA",
    },
  ];

  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  const [index, setIndex] = useState(0);
  const TOTAL_SLIDES = testimonialsData.length;

  const goToSlide = (i) => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    const slide = track.children[0];

    const style = window.getComputedStyle(track);
    const gap = parseInt(style.gap || 0);

    const slideWidth = slide.offsetWidth + gap;
    const wrapperWidth = wrapper.offsetWidth;
    const totalWidth = slideWidth * TOTAL_SLIDES;

    const END_SPACE = 60; // ← tweak this

    const maxTranslate = totalWidth - wrapperWidth + END_SPACE;

    let translate = i * slideWidth;

    if (translate > maxTranslate) {
      translate = maxTranslate;
    }

    gsap.to(track, {
      x: -translate,
      duration: 0.8,
      ease: "power3.out",
    });

    setIndex(i);
  };

  const prev = () => {
    if (index > 0) goToSlide(index - 1);
  };

  const next = () => {
    if (index < TOTAL_SLIDES - 1) goToSlide(index + 1);
  };

  /* ------------------ Trackpad Swipe ------------------ */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let scrollAccumulator = 0;
    const SCROLL_THRESHOLD = 60;

    const onWheel = (e) => {
      const horizontal = Math.abs(e.deltaX);
      const vertical = Math.abs(e.deltaY);

      if (horizontal <= vertical) return;

      e.preventDefault();
      scrollAccumulator += e.deltaX;

      if (Math.abs(scrollAccumulator) < SCROLL_THRESHOLD) return;

      if (scrollAccumulator > 0 && index < TOTAL_SLIDES - 1) {
        goToSlide(index + 1);
      } else if (scrollAccumulator < 0 && index > 0) {
        goToSlide(index - 1);
      }

      scrollAccumulator = 0;
    };

    wrapper.addEventListener("wheel", onWheel, { passive: false });
    return () => wrapper.removeEventListener("wheel", onWheel);
  }, [index]);

  /* ------------------ Resize Fix ------------------ */
  useEffect(() => {
    const handleResize = () => {
      goToSlide(index);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [index]);

  return (
    <div className="min-h-screen overflow-hidden py-5 w-full gap-5 flex flex-col justify-center bg-[#FFFEF7]">

      {/* HEADER */}
      <div className="flex px-5 lg:px-10 items-center justify-between h-[10vh] w-full">
        <h1 className="font-[Regular]">TESTIMONIALS</h1>

        <div className="flex gap-2">
          {/* PREV */}
          <button
            onClick={prev}
            disabled={index === 0}
            className={`h-10 w-10 rounded-full border p-2 transition ${index === 0
              ? "border-gray-300 text-gray-300 cursor-not-allowed"
              : "border-gray-800 text-black hover:bg-gray-100"
              }`}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6846 3.41603L2.1005 12.0001L10.684 20.5836L11.5191 19.7484L4.36134 12.5906L21.309 12.5906L21.309 11.4095L4.36134 11.4095L11.5197 4.25118L10.6846 3.41603Z"
              />
            </svg>
          </button>

          {/* NEXT */}
          <button
            onClick={next}
            disabled={index === TOTAL_SLIDES - 1}
            className={`h-10 w-10 rounded-full border p-2 transition ${index === TOTAL_SLIDES - 1
              ? "border-gray-300 text-gray-300 cursor-not-allowed"
              : "border-gray-800 text-black hover:bg-gray-100"
              }`}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.3154 3.41603L21.8995 12.0001L13.316 20.5836L12.4809 19.7484L19.6387 12.5906L2.69105 12.5906L2.69105 11.4095L19.6387 11.4095L12.4803 4.25118L13.3154 3.41603Z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div
        ref={wrapperRef}
        className="lg:px-8 px-5 overflow-hidden w-full"
      >
        <div
          ref={trackRef}
          className="flex gap-5 transition-transform duration-700 ease-out"
        >
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="
                shrink-0
                w-full lg:w-[60vw]
                min-h-[70vh] lg:h-screen
                px-5 py-8 lg:px-12 lg:py-12
              "
              style={{ backgroundColor: item.bg }}
            >
              <div className="lg:w-[80%] w-full flex flex-col justify-between h-full">
                <p
                  className="w-full font-[Light] text-lg sm:text-xl lg:text-5xl"
                  style={{ color: item.textColor }}
                >
                  {item.text}
                </p>

                <div
                  className="font-[Light]"
                  style={{ color: item.textColor }}
                >
                  <h1>{item.name}</h1>
                  <h1>{item.company}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;