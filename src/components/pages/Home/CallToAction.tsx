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
            text-[28px] sm:text-[35px] xl:text-[55px]
            tracking-[-2px] mb-6 font-heading"
          >
            Ready for Financial Clarity
          </h2>

          {/* Description */}
          <p
            className="text-white/95 font-medium
            text-sm sm:text-xl
            leading-[1.8] max-w-[720px] mb-10"
          >
            Let’s organize your books, improve visibility, and
            <br className="hidden sm:block" />
            support better decisions
          </p>

          {/* Button */}
          <button
            className="group/btn bg-[#2B9896] hover:bg-white
            transition-all duration-300 rounded-full
            pl-5 pr-3 py-2 lg:pl-8 lg:pr-3 lg:py-2.5
            flex items-center gap-3"
          >
            <span className="text-white text-xs sm:text-sm lg:text-base font-semibold group-hover/btn:text-[#2B9896] transition-colors duration-300">
              Schedule A Financial Review
            </span>

           <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white text-[#2B9896] flex items-center justify-center shrink-0 group-hover/btn:bg-[#2B9896] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform duration-300">
                                    <CaretRightIcon size={14} weight="bold" />
                                </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction