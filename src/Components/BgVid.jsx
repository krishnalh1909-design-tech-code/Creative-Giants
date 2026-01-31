import React from 'react'
import BgVideo from "../assets/Videos/CreativeBgVideo.mp4"

const BgVid = () => {
  return (
    <div className='h-screen w-full relative overflow-hidden'>
      <video
        className='h-full w-full object-cover'
        src={BgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className='h-full w-full flex flex-col justify-end px-4 py-6 absolute top-0 left-0'>
        <h1 className='text-white text-xl lg:text-3xl'>BRIGHTON, UNITED KINGDOM </h1>
        <h1 className='text-white w-full text-2xl  lg:text-5xl lg:w-[55%] '>Production, design, and the art of the possible</h1>
      </div>
    </div>

  )
}

export default BgVid
