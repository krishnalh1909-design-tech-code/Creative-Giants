import React from 'react'
import { ProjectsData } from '../Components/ProjectsData'

const ProjectList = () => {
  return (
    <div className='min-h-screen w-full bg-[#000000] flex flex-col font-[Light] text-white '>

      <div className='h-[70vh] w-full gap-5 flex flex-col items-center justify-center '>

        <div className='overflow-hidden'>

          <h3 className='text-xl'>GET STARTED</h3>

        </div>

        <div className='overflow-hidden py-3'>
          <h1 className='text-7xl'>Selected Projects</h1>
        </div>

        <div className='overflow-hidden w-[45%] text-center'>
          <p className='text-[18px]'>Real-world installations, immersive experiences and public art that challenge expectations, spark
            conversation and leave a lasting mark.</p>
        </div>

        <div className='overflow-hidden'>

        </div>

      </div>

      <div className='px-8 py-2 min-h-screen '>

        {ProjectsData.map((item) => (
          <div
            key={item.id}
            className="h-[15vh] w-full border-t-2 border-white flex items-center"
          >
            <h4 className='w-[20%]'>{item.id}</h4>
            <h1 className='w-[30%]'>{item.title}</h1>
            <h1 className='w-[20%]'>{item.brand}</h1>
            <h1 className='w-[20%]'>{item.agency}</h1>
            <h3 className='w-[10%]'>{item.category}</h3>
          </div>
        ))}

      </div>

      <div className='h-[60vh] w-full  flex items-center justify-center'>

        <div className="group text-8xl relative h-[15vh] w-[50%]  overflow-hidden flex flex-col items-center">

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

    </div>
  )
}

export default ProjectList
