import {CaretRightIcon } from "@phosphor-icons/react"


export const HeroBanner = () => {
  return (
    <section className="overflow-hidden relative w-full max-h-[666px] bg-[#E6F4F6] flex items-center justify-center overflow-hidde">

      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2 lg:gap-3 xl:gap-10">
         <div className="h-[450px] lg:h-[500px] xl:h-[666px] relative flex justify-center items-center">
          <img
            src="/banner-sidbar.png"
            className="absolute bottom-0 left-0"
          />
          <div className="relative w-45 h-45 lg:w-65 lg:h-65 xl:w-78 xl:h-78 z-10 top-0 xl:top-10 left-2">
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
          <h1 className="text-[24px] md:text-[32px] lg:text-[42px] xl:text-[54px] font-heading font-bold text-[#1A2E35] leading-tight">
            Your <span className="text-[#329696]">Finance Ally</span> for Business Owners & Family Offices
          </h1>

          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-md leading-relaxed">
            Whole Finance Support Through Bookkeeping, Tax Preparedness, WealthCare Management, And Fractional CFO-Level Clarity.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button className="flex text-sm xl:text-base items-center gap-2 bg-[#329696] hover:bg-[#287a7a] text-white px-5 xl:px-7.5 py-3 xl:py-4 rounded-full font-semibold transition-all">
              Triage Intake Assessment
              <div className="bg-white/20 rounded-full p-1">
                <CaretRightIcon size={18} />
              </div>
            </button>

            <button className="flex text-sm xl:text-base items-center gap-2 border-2 border-[#329696] text-[#329696] hover:bg-[#329696] hover:text-white px-6 xl:px-7.5 py-3 xl:py-4 rounded-full font-semibold transition-all">
              View services
              <div className="bg-[#329696]/20 rounded-full p-1">
                <CaretRightIcon size={18} />
              </div>
            </button>
          </div>
        </div>
        <div className="h-[450px] lg:h-[500px] xl:h-[666px] relative flex justify-center items-center">
          <img
            src="/banner-sidbar.png"
            className="absolute top-0 right-0 rotate-180"
          />
          <div className="relative  w-45 h-45 lg:w-65 lg:h-65 xl:w-78 xl:h-78 z-10 top-0 xl:-top-10 right-2">
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
