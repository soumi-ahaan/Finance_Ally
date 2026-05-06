import { ArrowRight } from "@phosphor-icons/react";

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

export default function AudienceSection() {
  return (
    <section className="py-14 lg:py-20 bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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
      </div>
    </section>
  );
}