
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useSplitTextAnimation } from "../../Hooks/useSplitTextAnimation";


gsap.registerPlugin(ScrollTrigger);

const ProcessHeroSection = () => {
  const paraRef = useRef()
  const textRef = useRef()
  const headRef = useRef()

  useSplitTextAnimation({
    text: {
      ref: textRef,
      delay: 2,
      paddingBottom: 10,
    },
    heading: {
      ref: headRef,
      delay: 2,
    },
    para: {
      ref: paraRef,
      delay: 2,
      paddingBottom: 1,
    },
  });


  return (
    <div className='min-h-screen w-full bg-[#FFFEF7]'>
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col justify-center lg:flex-row 
                min-h-[80vh] w-full gap-10 lg:gap-0">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[70%] font-[Light] 
                  flex items-center
                  text-lg sm:text-xl md:text-3xl lg:text-5xl">
          <p
            ref={textRef}
            className="w-full sm:w-[90%] lg:w-[70%]"
          >
            From concept to delivery (and beyond), our Playbook ensures every
            project has the impact it deserves, without compromising on
            sustainability.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-[30%] 
                  flex flex-col justify-center gap-6 sm:gap-8
                  font-[Light] text-base sm:text-lg">

          <div className="overflow-hidden">
            <h1
              ref={headRef}
              className="text-lg sm:text-xl font-[Regular]"
            >
              WHAT WE DO
            </h1>
          </div>

          <div>
            <p ref={paraRef}>
              We believe impact is more than just engagement numbers or press
              coverage. We cover the full life-cycle of every project – instilling
              sustainable values, materials and techniques wherever possible. This
              includes the removal or transferral of installations or activations at
              the end of a campaign.
            </p>
          </div>
        </div>

      </div>


      <div className="px-4 py-5 sm:px-6 lg:px-8 flex gap-2 md:gap-5 w-full overflow-hidden">

        {/* LEFT GROUP */}
        <div className="w-[50%] md:w-[70%] flex gap-2 md:gap-5">

          <div className="w-[50%] 
                    h-[10vh] sm:h-[40vh] lg:h-[45vh]">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/67a2223879607efb2ed9e496_process%20image%201.webp"
              alt=""
            />
          </div>

          <div className="w-[50%] 
                    h-[15vh] sm:h-[60vh] lg:h-[70vh]">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/67a22238faf765cb07f7d53a_process%20image%202.webp"
              alt=""
            />
          </div>

        </div>

        {/* RIGHT GROUP */}
        <div className="w-[50%] md:w-[30%] flex gap-2 md:gap-5">

          <div className="w-[70%] 
                    h-[17vh] sm:h-[35vh] lg:h-[40vh]">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/67a2223895d17fa3b33d6349_process%20image%203.webp"
              alt=""
            />
          </div>

          <div className="w-[30%] 
                    h-[5vh] sm:h-[25vh] lg:h-[20vh]">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/67a22238ce043f792627cc0e_process%20image%204.webp"
              alt=""
            />
          </div>

        </div>

      </div>

    </div>
  )
}

export default ProcessHeroSection
