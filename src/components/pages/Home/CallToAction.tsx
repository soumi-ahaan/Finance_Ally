import { CaretRightIcon } from "@phosphor-icons/react";

const CallToAction = () => {
  return (
     <section className="relative overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop"
          alt="Financial Clarity"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Extra Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="min-h-[320px] lg:min-h-[360px] flex flex-col items-center justify-center text-center py-16">
          
          {/* Heading */}
          <h2
            className="text-white font-bold leading-[1.05]
            text-[42px] sm:text-[54px] lg:text-[64px]
            tracking-[-2px] mb-6"
          >
            Ready for Financial Clarity
          </h2>

          {/* Description */}
          <p
            className="text-white/95 font-medium
            text-[17px] sm:text-[19px]
            leading-[1.8] max-w-[720px] mb-10"
          >
            Let’s organize your books, improve visibility, and
            <br className="hidden sm:block" />
            support better decisions
          </p>

          {/* Button */}
          <button
            className="group bg-[#39aeb4] hover:bg-[#2d989e]
            transition-all duration-300 rounded-full
            h-[60px] sm:h-[64px]
            pl-8 sm:pl-10 pr-4
            flex items-center gap-5"
          >
            <span className="text-white text-[16px] sm:text-[18px] font-semibold">
              Schedule A Financial Review
            </span>

            <div
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white
              text-[#39aeb4] flex items-center justify-center shrink-0
              group-hover:translate-x-1 transition-transform duration-300"
            >
              <CaretRightIcon size={20} weight="bold" />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction