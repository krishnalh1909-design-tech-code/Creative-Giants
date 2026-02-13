import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NewsData } from "./NewsData";
import { useSplitTextAnimation } from "../../Hooks/useSplitTextAnimation";

gsap.registerPlugin(ScrollTrigger);

const News = () => {
  const headRef = useRef(null);
  const textRef = useRef(null);
  
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  /* ------------------ Heading animation ------------------ */


  useSplitTextAnimation({
    heading: {
      ref: headRef,
      delay: 0.1,
    },
    text: {
      ref: textRef,
      delay: 0.2,
      paddingBottom: 0,
    },
  });



  /* ------------------ Trackpad horizontal swipe ------------------ */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    const cards = gsap.utils.toArray(track.children);

    if (!cards.length) return;

    const gap = 20;
    const cardWidth = cards[0].offsetWidth + gap;

    const visibleCards = Math.floor(wrapper.offsetWidth / cardWidth);
    const maxIndex = Math.max(cards.length - visibleCards, 0);

    let currentIndex = 0;
    let isAnimating = false;

    const goToSlide = (index) => {
      isAnimating = true;

      gsap.to(track, {
        x: -index * cardWidth,
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => {
          isAnimating = false;
        },
      });
    };

    let scrollAccumulator = 0;
    const SCROLL_THRESHOLD = 60; // smooth trigger point

    const onWheel = (e) => {
      const horizontal = Math.abs(e.deltaX);
      const vertical = Math.abs(e.deltaY);

      // Only react if horizontal intent is stronger
      if (horizontal <= vertical) return;

      e.preventDefault();

      // accumulate scroll instead of reacting instantly
      scrollAccumulator += e.deltaX;

      if (Math.abs(scrollAccumulator) < SCROLL_THRESHOLD) return;

      if (isAnimating) return;

      if (scrollAccumulator > 0) {
        currentIndex = Math.min(currentIndex + 1, maxIndex);
      } else {
        currentIndex = Math.max(currentIndex - 1, 0);
      }

      goToSlide(currentIndex);

      // reset accumulator
      scrollAccumulator = 0;
    };

    wrapper.addEventListener("wheel", onWheel, { passive: false });

    return () => wrapper.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center gap-6  py-10">
      {/* ------------------ HEADINGS ------------------ */}
      <div className="px-10 flex flex-col gap-3">
        <div className="overflow-hidden font-[Light]">
          <h2 ref={headRef}>NEWS & OPINION</h2>
        </div>

        <div className="overflow-hidden font-[Regular]">
          <h1 ref={textRef} className="text-7xl">
            Stay up to date
          </h1>
        </div>
      </div>

      {/* ------------------ SLIDER ------------------ */}
      <div
        ref={wrapperRef}
        className="px-10 h-[70vh] w-full overflow-hidden "
      >
        <div
          ref={trackRef}
          className="gap-5 h-full flex items-center will-change-transform "
        >
          {NewsData.map((item, i) => (
            <div
              key={i}
              className="flex flex-col h-full  w-[30vw] shrink-0 "
            >
              <div className="group h-[40vh] w-full overflow-hidden ">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                />
              </div>

              <h1 className="mt-4 text-2xl font-[Light]">{item.title}</h1>
              <div className="overflow-hidden">
                <p className="mt-2 text-sm text-[#000000bb] font-[Light]">{item.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
