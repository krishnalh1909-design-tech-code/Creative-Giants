import { useRef } from "react";
import { useSplitTextAnimation } from "../Hooks/useSplitTextAnimation.js";
import Stats from "./Stats.jsx";

const DescPage = () => {
  const textRef = useRef(null);
  const headRef = useRef(null);

  useSplitTextAnimation({
    headingRef: headRef,
    textRef,
  });

  return (
    <div className="min-h-screen flex flex-col gap-10 w-full bg-[#FFFEF7] px-2 py-10 md:px-10 md:py-15 overflow-hidden">
      <div className="w-full">
        <div className="overflow-hidden">
          <h1 ref={headRef} className="text-xl font-[Regular]">WHAT WE DO</h1>
        </div>

        <div className=" w-full">
          <p
            ref={textRef}
            className="font-[Light] w-full text-xl md:text-3xl lg:text-6xl md:w-[90%] lg:w-[65%] mt-6 leading-5  sm:leading-12 "
          >
            We are artists, designers, producers, creatives, clients and
            technicians. We work together to create immersive experiences and
            bring ideas to life in real-world spaces.
          </p>
        </div>
      </div>

      <div className="lg:w-[50vw] w-full md:w-full min-h-[50vh] flex lg:ml-64 ml-0 md:ml-0 p-2.5">
        <Stats />
      </div>

    </div>
  );
};

export default DescPage;
