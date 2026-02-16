import Navbar from "../Components/Navbar"

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen w-full bg-[#FFFEF7] overflow-hidden px-4 sm:px-6 md:px-8">


      {/* Top Section */}
      <div className="flex flex-col justify-end  md:flex-row md:justify-between gap-8 md:gap-5 
                      min-h-[60vh] md:h-[50vh] w-full 
                      border-b-2 py-2 md:py-8">

        {/* Left Text */}
        <div className="flex items-end w-full md:w-[45%] font-[Light]">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
            Contact us directly or submit a form enquiry and a member of the team
            will be in touch.
          </p>
        </div>

        {/* Right Contact Info */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start sm:items-end 
                        w-full md:w-[45%] font-[Light] px-0 py-0 md:px-6 md:py-6">

          <div>
            <h2 className="text-sm sm:text-base md:text-lg opacity-70">
              Phone Number
            </h2>
            <h1 className="text-xl sm:text-2xl md:text-3xl">
              07983 149354
            </h1>
          </div>

          <div>
            <h2 className="text-sm sm:text-base md:text-lg opacity-70">
              Email Address
            </h2>
            <h1 className="text-xl sm:text-2xl md:text-3xl break-all">
              hello@creativegiants.art
            </h1>
          </div>

        </div>
      </div>

    </div>
    </>
  );
};

export default Contact;