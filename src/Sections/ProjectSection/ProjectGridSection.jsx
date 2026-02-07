import React from 'react'
import { Link } from 'react-router-dom'
import { ProjectsGridData } from './ProjectsGridData'

const ProjectGridSection = () => {
  return (
    <div className="min-h-screen w-full flex flex-wrap">
      <div className="overflow-hidden sticky top-0 flex justify-center items-center w-full h-[14vh] sm:h-[15vh] md:h-[17vh]" >
        <div className="h-12 w-36 sm:h-16 sm:w-40 border-2 border-white rounded-[30px]  flex items-center justify-center  overflow-hidden ">
          <button className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-[20px] bg-white text-black text-sm sm:text-base">
            Grid
          </button>
          <Link
            to="/projects/list"
            className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-[20px] text-white
                 hover:bg-[#383737] transition-all duration-150 text-sm sm:text-base"
          >
            List
          </Link>
        </div>
      </div>

      {ProjectsGridData.map((item) => (
        <div
          key={item.id}
          className=" w-full sm:w-1/2 lg:w-[33.3%] px-5 sm:px-6  py-4 sm:py-5 flex flex-col"
        >

          <div className="w-full overflow-hidden h-[55vh] sm:h-[60vh] lg:h-[70vh] "
          >
            <img
              className="h-full w-full object-cover"
              src={item.image}
              alt={item.title}
            />
          </div>

          <div className="overflow-hidden mt-3">
            <h1 className="text-sm sm:text-base">{item.projectNo}</h1>
          </div>

          <div className="overflow-hidden">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl leading-tight">
              {item.title}
            </h1>
          </div>
        </div>
      ))}

    </div>
  )
}

export default ProjectGridSection
