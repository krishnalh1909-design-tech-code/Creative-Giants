import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSplitTextAnimation } from "../../Hooks/useSplitTextAnimation.js";
import { StatsData } from "./StatsData.jsx";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const paraRef = useRef(null);
  const statsRef = useRef(null);

   useSplitTextAnimation({
    para: {
      ref: paraRef,
      delay: 0.4,
      paddingBottom: 5,
    },
  });

  useEffect(() => {
    const items = gsap.utils.toArray(".stats-item");

    gsap.set(items, { opacity: 0, y: 40 });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 45%",
        end: "top 10%",
        // scrub: true, 
      },
    });
  }, []);

  return (
    <div ref={statsRef} className="min-h-[50vh] w-full">
      <p
        ref={paraRef}
        className="block font-[Light] text-[#767675] w-full text-[15px] md:text-[18.5px]"
      >
        We go beyond the traditional agency model and empower people across different
        industries to realise their creative ambitions. From the marketing director looking for more
        impact, to the artist reaching out to new audiences - we have the experience, the
        dedication, the skills and the resources to make seemingly impossible projects happen.
        Our clients don’t hire us, they join us. And in doing so, become Creative Giants themselves.
      </p>

      <div className="w-full mt-10 flex gap-5 flex-wrap sm:flex-nowrap overflow-hidden">
        {StatsData.map((item) => (
          <div
            key={item.id}
            className="stats-item min-h-[25vh] text-black w-full sm:w-[32%] flex flex-col justify-between"
          >
            <div className="flex items-center gap-5 p-2 overflow-hidden">
              <div className="text-white w-20 h-20">{item.svg}</div>
              <h2 className="text-5xl font-[Light]">{item.value}</h2>
            </div>

            <div className="p-2">
              <p className="opacity-80 text-[18px]">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
