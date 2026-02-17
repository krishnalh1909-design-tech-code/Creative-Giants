import { useEffect, useRef } from "react";
import gsap from "gsap";
import { NewsData } from "./NewsData";
import { useSplitTextAnimation } from "../../Hooks/useSplitTextAnimation";
import { Link } from "react-router-dom";

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

  /* ------------------ Responsive Horizontal Swipe ------------------ */

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const cards = Array.from(track.children);
    if (!cards.length) return;

    let currentIndex = 0;
    let isAnimating = false;

    const getCardWidth = () => {
      const card = cards[0];
      const style = window.getComputedStyle(track);
      const gap = parseInt(style.columnGap || style.gap || 0);
      return card.offsetWidth + gap;
    };

    const goToSlide = (index) => {
      isAnimating = true;

      gsap.to(track, {
        x: -index * getCardWidth(),
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => {
          isAnimating = false;
        },
      });
    };

    const handleResize = () => {
      goToSlide(currentIndex); // recalibrate position on resize
    };

    let scrollAccumulator = 0;
    const SCROLL_THRESHOLD = 60;

    const onWheel = (e) => {
      const horizontal = Math.abs(e.deltaX);
      const vertical = Math.abs(e.deltaY);

      if (horizontal <= vertical) return;

      e.preventDefault();

      scrollAccumulator += e.deltaX;
      if (Math.abs(scrollAccumulator) < SCROLL_THRESHOLD) return;
      if (isAnimating) return;

      const cardWidth = getCardWidth();
      const visibleCards = Math.floor(wrapper.offsetWidth / cardWidth);
      const maxIndex = Math.max(cards.length - visibleCards, 0);

      if (scrollAccumulator > 0) {
        currentIndex = Math.min(currentIndex + 1, maxIndex);
      } else {
        currentIndex = Math.max(currentIndex - 1, 0);
      }

      goToSlide(currentIndex);
      scrollAccumulator = 0;
    };

    wrapper.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", handleResize);

    return () => {
      wrapper.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-[90vh] md:min-h-screen w-full flex flex-col justify-center gap-6 py-16 bg-[#FFFEF7]">
      
      {/* ------------------ HEADINGS ------------------ */}
      <div className="px-5 md:px-10 flex flex-col gap-3">
        <div className="overflow-hidden font-[Light]">
          <h2 ref={headRef}>NEWS & OPINION</h2>
        </div>

        <div className="overflow-hidden font-[Regular]">
          <h1
            ref={textRef}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Stay up to date
          </h1>
        </div>
      </div>

      {/* ------------------ SLIDER ------------------ */}
      <div
        ref={wrapperRef}
        className="px-5 md:px-10 h-[60vh] md:h-[70vh] w-full overflow-hidden"
      >
        <div
          ref={trackRef}
          className="flex gap-5 h-full items-center will-change-transform"
        >
          {NewsData.map((item, i) => (
  <Link
    to={`/news/${item.id}`}
    key={i}
    className="
      flex flex-col h-full shrink-0
      w-[85%] 
      sm:w-[60%]
      md:w-[45%]
      lg:w-[30%]
    "
  >
    <div className="group h-[35vh] md:h-[40vh] w-full overflow-hidden">
      <img
        src={item.img}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
      />
    </div>

    <h1 className="mt-4 text-lg md:text-2xl font-[Light]">
      {item.title}
    </h1>

    <div className="overflow-hidden">
      <p className="mt-2 text-xs md:text-sm text-[#000000bb] font-[Light]">
        {item.desc}
      </p>
    </div>
  </Link>
))}
        </div>
      </div>
    </div>
  );
};

export default News;