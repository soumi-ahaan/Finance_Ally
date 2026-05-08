import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react"


export const HeroBanner = () => {
  return (
    <section className="overflow-hidden relative w-full max-h-[666px] bg-[#E6F4F6] flex items-center justify-center overflow-hidde">

      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
         <div className="h-[666px] relative flex justify-center items-center">
          <img
            src="/banner-sidbar.png"
            className="absolute bottom-0 left-0"
          />
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-89 lg:h-89 z-10">
            <img
              src="/banner-logo-1.png"
              alt="Professional working"
              className="w-full h-full object-cover "

            />
          </div>
        </div>
        <div className="w-full lg:w-2/5 text-center flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-orange-400"></span>
            <span className="text-orange-400 font-highlight font-medium italic">Whole Finance Support</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#1A2E35] leading-tight">
            Your <span className="text-[#329696]">Finance Ally</span> for Business Owners & Family Offices
          </h1>

          <p className="mt-6 text-gray-600 text-sm md:text-base max-w-md leading-relaxed">
            Whole Finance Support Through Bookkeeping, Tax Preparedness, WealthCare Management, And Fractional CFO-Level Clarity.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-[#329696] hover:bg-[#287a7a] text-white px-8 py-4 rounded-full font-semibold transition-all">
              Triage Intake Assessment
              <div className="bg-white/20 rounded-full p-1">
                <CaretLeftIcon size={18} />
              </div>
            </button>

            <button className="flex items-center gap-2 border-2 border-[#329696] text-[#329696] hover:bg-[#329696] hover:text-white px-8 py-4 rounded-full font-semibold transition-all">
              View services
              <div className="bg-[#329696]/20 rounded-full p-1">
                <CaretRightIcon size={18} />
              </div>
            </button>
          </div>
        </div>
        <div className="h-[666px] relative flex justify-center items-center">
          <img
            src="/banner-sidbar.png"
            className="absolute top-0 right-0 rotate-180"
          />
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-89 lg:h-89 z-10">
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
