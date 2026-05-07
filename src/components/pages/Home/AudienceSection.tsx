import { ArrowRight, CheckCircleIcon } from "@phosphor-icons/react";

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
    <section className="py-14 lg:py-20 bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {audienceData.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-[28px] min-h-[320px] lg:min-h-[360px] group"
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
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 sm:px-10 py-10">

                {/* Title */}
                <h2 className="text-white text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.1] font-bold mb-5">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-white/95 text-[17px] sm:text-[18px] leading-[1.8] font-medium max-w-[520px] mb-8">
                  {item.description}
                </p>

                {/* Button */}
                <button
                  className="group/btn border border-white/70 hover:bg-white transition-all duration-300
                  rounded-full h-[56px] sm:h-[60px] pl-7 pr-4 flex items-center gap-5"
                >
                  <span className="text-white group-hover/btn:text-[#1f2d38] transition-colors duration-300 text-[15px] sm:text-[16px] font-medium">
                    {item.buttonText}
                  </span>

                  <div
                    className="w-9 h-9 rounded-full bg-white text-[#1f2d38] 
                    flex items-center justify-center shrink-0
                    group-hover/btn:translate-x-1 transition-transform duration-300"
                  >
                    <ArrowRight size={18} weight="bold" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12 items-center pt-20 lg:pt-29">

          {/* Left Side: Content */}
          <div className="flex flex-col ">
            <div className="w-12 h-[2px] bg-[#E9A05D] mb-2 lg:mb-[14px]" />
            <span className="italic text-[#E9A05D] text-lg font-serif">Fractional CFO</span>

            <h2 className="text-[24px] lg:text-[38px] font-bold text-[#123F4E] mt-2 mb-3 leading-tight">
              Fractional CFO Support Without <br className="hidden lg:block" />
              the Full-Time CFO Cost
            </h2>

            <p className="text-gray-500 text-xs lg:text-base mb-3 lg:mb-4 leading-relaxed max-w-xl">
              Strategic Financial Leadership, Cash Flow Clarity, And Smarter Decision-Making
              — Without The Cost Of Hiring A Full-Time CFO.
            </p>

            {/* Two-Column Feature List */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-2 lg:gap-x-8 gap-y-1 lg:gap-y-3 mb-5 lg:mb-9">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#E9A05D] flex-shrink-0" />
                  <span className="text-gray-600 text-xs font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div>
              <button className="group flex items-center space-x-4 bg-[#3A9B94] hover:bg-[#2d7a74] text-white py-3 px-6 rounded-full transition-all duration-300 shadow-lg">
                <span className="font-semibold text-sm tracking-wide">
                  Schedule a CFO-Level Financial Review
                </span>
                <div className="bg-white rounded-full p-1 group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 text-[#3A9B94]" />
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