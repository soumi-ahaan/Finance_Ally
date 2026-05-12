import {CaretRightIcon } from "@phosphor-icons/react"


export const HeroBanner = () => {
  return (
    <section className=" overflow-hidden relative w-full max-h-[666px] bg-[#E6F4F6] flex items-center justify-center overflow-hidde"
   
    >
        {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20"
    style={{
      backgroundImage: "url('./hero-banner.jpg')",
    }}
  ></div>

      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between m-0 gap-2 lg:gap-3 xl:gap-10 px-4 md:px-0">
         <div className=" h-15 md:h-[450px] lg:h-[500px] xl:h-[666px] relative flex justify-center items-center">
          <img
            src="/banner-sidbar.png"
            className="hidden md:block absolute bottom-0 left-0"
          />
          <div className="hidden md:block relative w-45 h-45 lg:w-65 lg:h-65 xl:w-78 xl:h-78 z-10 top-0 xl:top-10 left-2">
            <img
              src="/banner-logo-1.png"
              alt="Professional working"
              className="w-full h-full object-cover "

            />
          </div>
        </div>
        <div className="w-full text-center flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-orange-400"></span>
            <span className="text-orange-400 font-highlight font-bold italic">Whole Finance Support</span>
          </div>
          <h1 className=" text-[24px] md:text-[32px] lg:text-[42px] xl:text-[62px] font-heading font-bold text-[#1A2E35] leading-tight">
            Your <span className="text-[#329696]">Finance Ally</span> for Business Owners & Family Offices
          </h1>

          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-lg leading-relaxed">
            Whole Finance Support Through Bookkeeping, Tax Preparedness, WealthCare Management, And Fractional CFO-Level Clarity.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button className="group/btn bg-[#2B9896] hover:bg-transparent hover:border border-[#2B9896] hover:border-[#1A2B32]  hover:shadow-[0px_0px_10px_1px_#00000026]  duration-300 text-white rounded-full  pl-5 pr-3 py-2 lg:pl-8 lg:pr-3 lg:py-2.5 flex items-center gap-3 font-semibold">
            <span className="text-white text-xs sm:text-sm lg:text-base font-semibold group-hover/btn:text-[#1A2B32] transition-colors duration-300"> Triage Intake Assessment  </span> 
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white text-[#2B9896] flex items-center justify-center shrink-0 group-hover/btn:bg-[#1A2B32] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform duration-300">
                <CaretRightIcon size={18} />
              </div>
            </button>

            <button className="group/btn bg-transparent border border-[#2B9896] hover:border-[#1A2B32] hover:bg-[#1A2B32]  duration-300 text-white rounded-full  pl-4 pr-3 py-2 lg:pl-8 lg:pr-3 lg:py-2.5 flex items-center gap-3 font-semibold">
              <span className="text-[#2B9896] text-xs sm:text-sm lg:text-base font-semibold group-hover/btn:text-white transition-colors duration-300">View services</span>
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#2B9896] group-hover/btn:bg-white text-white group-hover/btn:text-[#1A2B32] flex items-center justify-center shrink-0 group-hover/btn:translate-x-1 transition-transform duration-300">
                <CaretRightIcon size={18} />
              </div>
            </button>
          </div>
        </div>
        <div className="h-15 md:h-[450px] lg:h-[500px] xl:h-[666px] relative flex justify-center items-center">
          <img
            src="/banner-sidbar.png"
            className="hidden md:block absolute top-0 right-0 rotate-180"
          />
          <div className="hidden md:block relative  w-45 h-45 lg:w-65 lg:h-65 xl:w-78 xl:h-78 z-10 top-0 xl:-top-10 right-2">
            <img
              src="banner-logo-2.png"
              alt="Consulting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
