import React, { useRef } from "react";
import { useSplitTextAnimation } from "../../Hooks/useSplitTextAnimation";

const NewsMainSection = () => {
  const headRef = useRef(null);
  const paraRef = useRef(null);

  useSplitTextAnimation({
    heading: {
      ref: headRef,
      delay: 0.2,
    },
    para: {
      ref: paraRef,
      delay: 0.4,
      paddingBottom: 0,
    },
  });

  return (
    <section
      className="relative w-full min-h-[75vh] md:min-h-screen 
                 bg-cover bg-center bg-no-repeat 
                 px-4 sm:px-8 md:px-12 py-10 
                 flex items-end md:items-center"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/6882cc2aa788ed759d4e2c18_68502c02bf65bde2e99084bd_fosx9tr0ktkkftzrzl0hd45zh4h2.webp')",
      }}
    >
      <div
        className="bg-[#fffef7]  w-full md:w-[55%]  min-h-[45vh] md:min-h-[55vh] px-6 sm:px-10 md:px-14  py-8 md:py-12 flex flex-col justify-between"
      >
        {/* Heading */}
        <div className="overflow-hidden">
          <h1
            ref={headRef}
            className="font-[Light] text-3xl sm:text-4xl md:text-6xl py-2"
          >
            CALM Missed Birthdays Wins Big
          </h1>
        </div>

        {/* Paragraph */}
        <div className="overflow-hidden flex md:justify-end justify-start mt-6 md:mt-0">
          <p
            ref={paraRef}
            className="font-[Light] w-full md:w-[75%]  text-sm sm:text-base md:text-[17px] leading-relaxed"
          >
            There are certain projects that offer a sense of pride,
            regardless of how they’re received in the industry.
            In fact our favourite work is often defined not by
            the number of awards it receives, but by how emotionally
            invested we are in the idea.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsMainSection;