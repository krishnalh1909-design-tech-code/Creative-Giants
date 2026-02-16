import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen w-full bg-[#FFFEF7] overflow-hidden px-4 sm:px-6 md:px-8">

        {/* ================= TOP SECTION ================= */}
        <div
          className="
            flex flex-col md:flex-row
            justify-end md:justify-between
            gap-10 md:gap-5
            py-12 md:py-8
            border-b
          "
        >
          {/* Left Text */}
          <div className="flex items-end w-full md:w-[45%] font-[Light]">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
              Contact us directly or submit a form enquiry and a member of the
              team will be in touch.
            </p>
          </div>

          {/* Contact Info */}
          <div
            className="
              flex flex-col sm:flex-row
              gap-8 sm:gap-12
              items-start sm:items-end
              w-full md:w-[45%]
              font-[Light]
            "
          >
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

        {/* ================= MAP + FORM SECTION ================= */}
        <div
          className="
            w-full
            flex flex-col lg:flex-row
            items-center
            gap-12
            py-16
          "
        >
          {/* Map Image */}
          <div
            className="
              w-full lg:w-[45%]
              h-[300px] sm:h-[400px] md:h-[500px] lg:h-[60vh]
              overflow-hidden
            "
          >
            <img
              src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/67a23e09843120d53f31280e_Contact%20Map.avif"
              alt="Map"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Form */}
          <div className="w-full lg:w-[45%] flex items-center justify-center">
            <div className="w-full p-2 sm:p-4">
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
                      className="border-b border-gray-400 focus:border-black outline-none py-4 bg-transparent text-2xl sm:text-3xl lg:text-4xl placeholder:text-black"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-[Light]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Lewis"
                      className="border-b border-gray-400 focus:border-black outline-none py-4 bg-transparent text-2xl sm:text-3xl lg:text-4xl placeholder:text-black"
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
                      className="border-b border-gray-400 focus:border-black outline-none py-4 bg-transparent text-2xl sm:text-3xl lg:text-4xl placeholder:text-black"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-[Light]">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="+44"
                      className="border-b border-gray-400 focus:border-black outline-none py-4 bg-transparent text-2xl sm:text-3xl lg:text-4xl placeholder:text-black"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs sm:text-sm font-[Regular]">
                    Project Details
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your project..."
                    className="border-b border-black outline-none py-4 bg-transparent resize-none text-2xl sm:text-3xl lg:text-4xl placeholder:text-black"
                  />
                </div>

                {/* Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="relative overflow-hidden border border-black bg-black px-8 py-3 rounded-full group"
                  >
                    <span className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)]"></span>

                    <span className="relative z-10 text-white font-[Light] group-hover:text-black transition-colors duration-500">
                      Submit Project
                    </span>
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default Contact;