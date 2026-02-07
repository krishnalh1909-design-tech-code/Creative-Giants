import React, { useState } from 'react'
import { ProjectsListData } from './ProjectsListData'
import { Link } from 'react-router-dom'
import ProjectHeading from './ProjectHeading';

const ProjectListSection = () => {
  const [bgColor, setBgColor] = useState("#000000");
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div style={{ backgroundColor: bgColor }} className='min-h-screen w-full flex flex-col font-[Light] text-white '>
        <ProjectHeading />
        <div className="overflow-hidden sticky top-0 flex justify-center items-center w-full h-[14vh] sm:h-[15vh] md:h-[17vh]" >
          <div className="h-12 w-36 sm:h-16 sm:w-40 border-2 border-white rounded-[30px]  flex items-center justify-center  overflow-hidden ">
            <Link
              to="/projects"
              className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-[20px] text-white
                 hover:bg-[#383737] transition-all duration-150 text-sm sm:text-base"
            >
              Grid
            </Link>
            <button
              className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-[20px] bg-white text-black text-sm sm:text-base"
            >
              List
            </button>
          </div>
        </div>

        <div className="px-5 sm:px-6 lg:px-8 py-2 min-h-screen">
          {ProjectsListData.map((item) => (
            <div
              key={item.id}
              onMouseMove={() => setBgColor(item.bg)}
              onMouseLeave={() => setBgColor("#000000")}
              className="min-h-[18vh] lg:h-[25vh] w-full border-t-2 border-white flex flex-col lg:flex-row justify-center lg:items-center gap-2 lg:gap-0 py-4 lg:py-0 cursor-pointer" >
              {/* ID */}
              <h4 className="lg:w-[18%] text-sm sm:text-base opacity-70">
                {item.id}
              </h4>

              {/* Title */}
              <h1 className="lg:w-[32%] text-2xl sm:text-3xl lg:text-4xl font-medium">
                {item.title}
              </h1>

              {/* Brand */}
              <h1 className="lg:w-[18%] text-xl sm:text-2xl lg:text-4xl">
                {item.brand}
              </h1>

              {/* Agency */}
              <h1 className="lg:w-[17%] text-xl sm:text-2xl lg:text-4xl">
                {item.agency}
              </h1>

              {/* Category */}
              <h3 className="lg:w-[15%] text-sm sm:text-base lg:text-right opacity-80">
                {item.category}
              </h3>
            </div>
          ))}
        </div>

        <div className='h-[20vh] md:h-[60vh] w-full  flex items-center justify-center'>
          <div onClick={scrollToTop} className="group text-3xl lg:text-8xl relative h-[15vh] w-[70%] md:w-[50%]  overflow-hidden flex flex-col items-center">

            {/* Default text (visible) */}
            <div className=" absolute translate-y-0  transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)]   group-hover:translate-y-[110%] text-center ">
              Back to the top
            </div>

            {/* Hover text (hidden above) */}
            <div className=" absolute -translate-y-[110%] transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)]  group-hover:translate-y-0 ">
              Back to the top
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default ProjectListSection
