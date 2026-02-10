import React from "react";
import { Link } from "react-router-dom";
import { ProjectsGridData } from "./ProjectsGridData";
import ProjectGridItem from "./ProjectGridItem";

const ProjectGridSection = () => {
  return (
    <div className="min-h-screen w-full flex flex-wrap">

      {/* Toggle */}
      <div className="sticky top-0 flex justify-center items-center w-full h-[14vh] sm:h-[15vh] md:h-[17vh]">
        <div className="h-12 w-36 sm:h-16 sm:w-40 border-2 border-white rounded-[30px] flex overflow-hidden">
          <button className="flex-1 bg-white text-black text-sm sm:text-base">
            Grid
          </button>
          <Link
            to="/projects/list"
            className="flex-1 text-white hover:bg-[#383737] transition-all text-sm sm:text-base flex items-center justify-center"
          >
            List
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div className="flex flex-wrap w-full">
        {ProjectsGridData.map((item) => (
          <ProjectGridItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGridSection;
