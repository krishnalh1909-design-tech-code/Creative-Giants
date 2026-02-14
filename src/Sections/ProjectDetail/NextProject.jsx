import React from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectDetailsData } from "../ProjectDetail/ProjectDetailsData";

const NextProject = () => {
  const { id } = useParams();

  const currentIndex = ProjectDetailsData.findIndex(
    (item) => item.id.toString() === id
  );

  if (currentIndex === -1) return null;

  const nextProject =
    ProjectDetailsData[(currentIndex + 1) % ProjectDetailsData.length];

  return (
  <div
    className={`px-6 md:px-8 h-auto md:h-[50vh] py-10 md:py-0 w-full ${nextProject.bg} overflow-hidden flex items-center justify-center transition-all duration-500`}
  >
    <div className="h-auto md:h-[30vh] w-full flex flex-col md:flex-row gap-8 md:gap-0">

      {/* LEFT TEXT */}
      <div className="overflow-hidden font-[Regular] w-full md:w-[20%]">
        <h1 className={`${nextProject.text} text-lg md:text-base`}>
          NEXT PROJECT:
        </h1>
      </div>

      {/* CENTER CONTENT */}
      <div className="overflow-hidden font-[Regular] flex flex-col md:flex-row gap-6 md:gap-10 w-full md:w-[60%]">

        {/* IMAGE */}
        <div className="w-full md:w-[30%] h-[220px] md:h-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={nextProject.image}
            alt=""
          />
        </div>

        {/* TEXT CONTENT */}
        <div
          className={`overflow-hidden ${nextProject.text} font-[Light] flex flex-col gap-4 md:gap-5`}
        >
          <div className="overflow-hidden py-2">
            <h1 className="text-2xl sm:text-3xl md:text-5xl">
              {nextProject.title}
            </h1>
          </div>

          <div className="overflow-hidden">
            <p className="w-full md:w-[80%] text-sm md:text-base">
              {nextProject.para}
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <Link
        to={`/projects/${nextProject.id}`}
        className="overflow-hidden font-[Regular] w-full md:w-[20%] md:text-end flex md:block justify-start"
      >
        <button className="border border-white relative overflow-hidden px-6 md:px-8 py-2 md:py-3 rounded-full group">
          
          {/* Sliding Background */}
          <span
            className={`absolute inset-0 ${nextProject.bgLight} translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)]`}
          ></span>

          {/* Button Text */}
          <span className={`${nextProject.text} font-[Regular] relative z-10   group-hover:text-black transition-colors duration-500`}>
            VIEW PROJECT
          </span>
        </button>
      </Link>

    </div>
  </div>
);
};

export default NextProject;