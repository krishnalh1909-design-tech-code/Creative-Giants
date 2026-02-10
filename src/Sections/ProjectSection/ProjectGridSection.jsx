import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ProjectsGridData } from "./ProjectsGridData";
import { useSplitTextAnimation } from "../../Hooks/useSplitTextAnimation";

const ProjectGridSection = () => {
  const headRefs = useRef([]);
  const textRefs = useRef([]);

  return (
    <div className="min-h-screen w-full flex flex-wrap">

      {/* Toggle */}
      <div className="overflow-hidden sticky top-0 flex justify-center items-center w-full h-[14vh] sm:h-[15vh] md:h-[17vh]">
        <div className="h-12 w-36 sm:h-16 sm:w-40 border-2 border-white rounded-[30px] flex items-center justify-center overflow-hidden">
          <button className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-[20px] bg-white text-black text-sm sm:text-base">
            Grid
          </button>
          <Link
            to="/projects/list"
            className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-[20px] text-white hover:bg-[#383737] transition-all duration-150 text-sm sm:text-base"
          >
            List
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div className="flex min-h-screen overflow-hidden flex-wrap w-full">
        {ProjectsGridData.map((item, i) => {
          // 🔥 Hook per item
          useSplitTextAnimation({
            headingRef: headRefs,
            textRef: textRefs,
            index: i,
            delay: 0.1 * i,
          });

          return (
            <div
              key={item.id}
              className="min-h-screen w-full sm:w-1/2 lg:w-[33.3%] px-5 sm:px-6 py-4 sm:py-5 flex flex-col"
            >
              {/* Image */}
              <div className="w-full overflow-hidden h-[55vh] sm:h-[60vh] lg:h-[70vh]">
                <img
                  className="h-full w-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>

              {/* Project No */}
              <div className="overflow-hidden mt-3">
                <h1
                  ref={(el) => (headRefs.current[i] = el)}
                  className="text-sm sm:text-base"
                >
                  {item.projectNo}
                </h1>
              </div>

              {/* Title */}
              <div className="overflow-hidden">
                <h1
                  ref={(el) => (textRefs.current[i] = el)}
                  className="text-2xl sm:text-4xl lg:text-5xl leading-tight"
                >
                  {item.title}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGridSection;
