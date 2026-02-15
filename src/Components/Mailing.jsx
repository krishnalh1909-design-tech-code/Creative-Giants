import React, { useRef } from 'react'
import { useSplitTextAnimation } from '../Hooks/useSplitTextAnimation'

const Mailing = () => {
  const headRef = useRef()
  const textRef = useRef()
  const paraRef = useRef()

  useSplitTextAnimation({
      heading: {
        ref: headRef,
        delay: 0.1,
      },
      text: {
        ref: textRef,
        delay: 0.4,
        paddingBottom: 15,
      },
       para: {
      ref: paraRef,
      delay: 0.4,
      paddingBottom: 5,
    },
  
    });
  return (
    <div className='px-6 sm:px-8 py-16 min-h-screen w-full flex flex-col lg:flex-row items-start lg:items-start justify-center gap-12 bg-[#FFFEF7]'>

      {/* LEFT CONTENT */}
      <div className='w-full lg:w-[40%] font-[Light] flex flex-col gap-2 md:gap-4'>

        <div className='overflow-hidden font-[Regular]'>
          <h1 ref={headRef} className="text-sm tracking-wide">GET IN TOUCH</h1>
        </div>

        <div className='overflow-hidden py-2'>
          <h1 ref={textRef} className='text-4xl sm:text-6xl lg:text-8xl leading-tight'>
            Speak to us.
          </h1>
        </div>

        <div className='overflow-hidden w-full sm:w-[80%]'>
          <p ref={paraRef} className="text-sm sm:text-base">
            If you want to start a project, share an idea or simply say hi,
            we want to hear from you.
          </p>
        </div>

      </div>


      {/* RIGHT FORM SECTION */}
      <div className='w-full lg:w-[60%] flex items-center justify-center'>
        <div className="w-full p-4 sm:p-5">
          <form className="flex flex-col gap-10">

            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

              <div className="flex flex-col gap-2">
                <label className="text-xs sm:text-sm font-[Light]">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Emma"
                  className="border-b text-2xl sm:text-3xl lg:text-4xl border-gray-400 focus:border-black outline-none py-4 bg-transparent placeholder:text-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs sm:text-sm font-[Light]">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Lewis"
                  className="border-b text-2xl sm:text-3xl lg:text-4xl border-gray-400 focus:border-black outline-none py-4 bg-transparent placeholder:text-black"
                />
              </div>

            </div>


            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

              <div className="flex flex-col gap-2">
                <label className="text-xs sm:text-sm font-[Light]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="emma@gmail.com"
                  className="border-b text-2xl sm:text-3xl lg:text-4xl border-gray-400 focus:border-black outline-none py-4 bg-transparent placeholder:text-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs sm:text-sm font-[Light]">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+44"
                  className="border-b text-2xl sm:text-3xl lg:text-4xl border-gray-400 focus:border-black outline-none py-4 bg-transparent placeholder:text-black"
                />
              </div>

            </div>


            {/* Row 3 */}
            <div className="flex flex-col gap-2">
              <label className="text-xs sm:text-sm font-[Regular]">
                Project Details
              </label>
              <textarea
                rows="2"
                placeholder="Tell us about your project..."
                className="w-full text-2xl sm:text-3xl lg:text-4xl border-b border-black focus:border-black outline-none py-4 bg-transparent resize-none placeholder:text-black"
              />
            </div>


            {/* Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="relative overflow-hidden border bg-black border-black px-8 py-3 rounded-full group"
              >
                {/* Sliding Black Background */}
                <span className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)]"></span>

                {/* Button Text */}
                <span className="relative z-10 text-white font-[Light] group-hover:text-black transition-colors duration-500">
                  Submit Project
                </span>
              </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  )
}

export default Mailing
