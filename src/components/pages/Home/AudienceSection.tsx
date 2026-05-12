import { CaretRightIcon, SealCheckIcon } from "@phosphor-icons/react";

const audienceData = [
  {
    id: 1,
    title: "Business Owners",
    description:
      "Growing businesses needing bookkeeping, clarity, and strategic financial support to make confident decisions.",
    buttonText: "Support for Business Owners",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop",
    overlay: "bg-[#1f7783]/85",
  },
  {
    id: 2,
    title: "Family Offices",
    description:
      "Families needing financial organization, reporting, and legacy-focused financial structure.",
    buttonText: "Family Office Support",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop",
    overlay: "bg-black/70",
  },
];
const features = [
  "Cash Flow Planning",
  "Budget Creation And Monitoring",
  "Forecasting",
  "Profitability Analysis",
  "Job Costing Review",
  "Financial Statement Review",
  "KPI Dashboard Review",
  "Debt And Liability Visibility",
  "Entity-Level Reporting",
  "Strategic Planning Support",
];

export default function AudienceSection() {
  return (
    <section className="py-14 bg-[#f5f5f5]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[70px]">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {audienceData.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-[25px] min-h-[320px] lg:min-h-[360px] group"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 ${item.overlay}`}
              ></div>

              {/* Extra Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 lg:px-10 py-10">

                {/* Title */}
                <h2 className="text-white text-2xl sm:text-[38px] leading-[1.1] font-bold mb-5">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-white/95 text-sm sm:text-lg leading-[1.8] font-semibold max-w-[520px] mb-8">
                  {item.description}
                </p>

                {/* Button */}
                <button
                className="group/btn bg-transparent border border-white hover:bg-white  duration-300 text-white rounded-full  pl-5 pr-3 py-2 lg:pl-8 lg:pr-3 lg:py-2.5 flex items-center gap-3 font-semibold">
                <span className="text-white text-xs sm:text-sm md:text-base font-semibold group-hover/btn:text-[#123F4E] transition-colors duration-300">
                  {item.buttonText}
                  </span>

                 
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white group-hover/btn:bg-[#2B9896] text-[#123F4E] group-hover/btn:text-white flex items-center justify-center shrink-0 group-hover/btn:translate-x-1 transition-transform duration-300">
                                    <CaretRightIcon size={14} weight="bold" />
                                </div>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12 items-center pt-20 lg:pt-29">

          {/* Left Side: Content */}
          <div className="flex flex-col ">
            <div className="w-12 h-[2px] bg-[#F4A261] mb-2 lg:mb-[14px]" />
            <span className="font-highlight italic text-[#F4A261] text-md md:text-2xl font-bold">Fractional CFO</span>

            <h2 className="text-2xl lg:text-[38px] font-bold text-[#123F4E] mt-2 mb-3 leading-tight font-heading">
              Fractional CFO Support Without <br className="hidden lg:block" />
              the Full-Time CFO Cost
            </h2>

            <p className="text-gray-500 text-sm lg:text-base mb-3 lg:mb-4 leading-relaxed max-w-xl">
              Strategic Financial Leadership, Cash Flow Clarity, And Smarter Decision-Making
              — Without The Cost Of Hiring A Full-Time CFO.
            </p>

            {/* Two-Column Feature List */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-2 lg:gap-x-8 gap-y-1 lg:gap-y-3 mb-5 lg:mb-9">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <SealCheckIcon className="w-5 h-5 text-[#F4A261] flex-shrink-0" />
                  <span className="text-gray-600 text-xs font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div>
              <button
                className="group/btn bg-[#2B9896] hover:bg-transparent  hover:shadow-[0px_0px_10px_1px_#00000026]  duration-300 text-white rounded-full  pl-5 pr-3 py-2 lg:pl-8 lg:pr-3 lg:py-2.5 flex items-center gap-3 font-semibold">
                <span className="text-white text-xs sm:text-sm md:text-base font-semibold group-hover/btn:text-[#2B9896] transition-colors duration-300">
                  Schedule a CFO-Level Financial Review
                </span>
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white text-[#2B9896] flex items-center justify-center shrink-0 group-hover/btn:bg-[#2B9896] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform duration-300">
                                    <CaretRightIcon size={14} weight="bold" />
                                </div>
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="order-1 lg:order-2 ">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/cfo-working.jpg"
                alt="Financial professional working with calculator"
                className="w-full max-h-[494px] object-cover aspect-[4/3] lg:aspect-square"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}