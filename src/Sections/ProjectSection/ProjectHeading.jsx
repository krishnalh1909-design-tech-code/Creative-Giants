import React from 'react'

const ProjectHeading = () => {
  return (
    <div className="min-h-[60vh] w-full gap-4 sm:gap-5 flex flex-col items-center justify-end px-5 sm:px-6 lg:px-0">
      {/* Eyebrow */}
      <div className="overflow-hidden">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl tracking-wide">
          GET STARTED
        </h3>
      </div>

      {/* Main heading */}
      <div className="overflow-hidden py-2 sm:py-3">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
          Selected Projects
        </h1>
      </div>

      {/* Description */}
      <div className="overflow-hidden w-full sm:w-[80%] md:w-[60%] lg:w-[45%] text-center">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Real-world installations, immersive experiences and public art
          that challenge expectations, spark conversation and leave a
          lasting mark.
        </p>
      </div>
    </div>
  )
}

export default ProjectHeading
