
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

const ProcessHeroSection = () => {
  const paraRef = useRef()
  const para2Ref = useRef()
  const headRef = useRef()

  return (
    <div className='min-h-screen w-full bg-[#FFFEF7]'>
      <div className='px-8 flex h-[70vh] w-full '>
        <div className='h-[70vh] w-full font-[Light] flex items-center text-xl md:text-3xl lg:text-5xl md:w-[90%] lg:w-[70%] '>
          <p ref={paraRef} className='w-[70%]'>From concept to delivery (and
            beyond), our Playbook ensures every
            project has the impact it deserves,
            without compromising on
            sustainability.</p>
        </div>
        <div className='h-[60vh] flex flex-col justify-center w-[30%] gap-8 font-[Light]'>
          <div className="overflow-hidden">
            <h1 ref={headRef} className="text-xl font-[Regular]">WHAT WE DO</h1>
          </div>
          <div>
            <p ref={para2Ref}>We believe impact is more than just engagement numbers or press
              coverage. We cover the full life-cycle of every project - instilling
              sustainable values, materials and techniques wherever possible. This
              includes the removal or transferral of installations or activations at the
              end of a campaign.</p>
          </div>
        </div>
      </div>

      <div className='px-8 gap-5 flex h-[90vh] w-full  overflow-hidden'>

        <div className=' w-[70%] h-screen flex gap-5'>

          <div className='w-[50%] h-[40%]'>

            <img className='h-full w-full object-cover' src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/67a2223879607efb2ed9e496_process%20image%201.webp" alt="" />

          </div>

          <div className='w-[50%] h-[70%]'>

            <img className='h-full w-full object-cover' src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/67a22238faf765cb07f7d53a_process%20image%202.webp" alt="" />

          </div>

        </div>

        <div className='w-[30%] flex gap-5 h-full '>

          <div className='w-[50%] h-[40%]'>

            <img className='h-full w-full object-cover' src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/67a2223879607efb2ed9e496_process%20image%201.webp" alt="" />

          </div>

          <div className='w-[50%] h-[25%]'>

            <img className='h-full w-full object-cover' src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/67a22238faf765cb07f7d53a_process%20image%202.webp" alt="" />

          </div>

        </div>

      </div>
    </div>
  )
}

export default ProcessHeroSection
