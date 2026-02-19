import React, { useRef } from "react";
import { useSplitTextAnimation } from "../../Hooks/useSplitTextAnimation";

const ProjectHeading = () => {
  const h3Ref = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useSplitTextAnimation({
    heading: { ref: h3Ref, delay: 1.5 },
    text: { ref: h1Ref, delay: 1.5, paddingBottom: 0 },
    para: { ref: pRef, delay: 1.5, paddingBottom: 2 },
  });

  return (
    <div className="min-h-[60vh] w-full gap-4 sm:gap-5 flex flex-col items-center justify-end px-5 sm:px-6 lg:px-0">
      
      {/* 🔹 Eyebrow */}
      <div className="overflow-hidden">
        <h3
          ref={h3Ref}
          className="text-sm sm:text-base md:text-lg lg:text-xl tracking-wide"
        >
          GET STARTED
        </h3>
      </div>

      {/* 🔹 Main Heading (Forced One Line) */}
      <div className="overflow-hidden py-2 sm:py-3 w-full text-center">
        <h1
          ref={h1Ref}
          className="text-[8vw] lg:text-7xl whitespace-nowrap"
        >
          Selected Projects
        </h1>
      </div>

      {/* 🔹 Paragraph */}
      <div className="overflow-hidden w-full sm:w-[80%] md:w-[60%] lg:w-[45%] text-center">
        <p
          ref={pRef}
          className="text-sm sm:text-base md:text-lg leading-relaxed"
        >
          Real-world installations, immersive experiences and public art
          that challenge expectations, spark conversation and leave a
          lasting mark.
        </p>
      </div>
    </div>
  );
};

export default ProjectHeading;