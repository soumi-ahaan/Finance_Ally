import {
  EnvelopeSimple,
  Phone,
  MapPin,
  FacebookLogo,
  LinkedinLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

const TopHeader = () => {
  return (
    <div className="w-full bg-[#0f4d5a] text-white ">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[42px]">
          
          {/* Left Side */}
          <div className="hidden lg:flex items-center gap-8 text-[13px] font-medium">
            
            <div className="flex items-center gap-2">
              <EnvelopeSimple size={14} weight="fill" />
              <span>bookkeeping@finanzaccounting.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={14} weight="fill" />
              <span>7755509999</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={14} weight="fill" />
              <span>P.O. Box 980, Verdi, NV 89439</span>
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden text-[12px] font-medium">
            Contact Us
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            
            <a
              href="#"
              className="w-7 h-7 rounded-full bg-white text-[#0f4d5a] flex items-center justify-center hover:scale-105 duration-300"
            >
              <FacebookLogo size={14} weight="fill" />
            </a>

            <a
              href="#"
              className="w-7 h-7 rounded-full bg-white text-[#0f4d5a] flex items-center justify-center hover:scale-105 duration-300"
            >
              <LinkedinLogo size={14} weight="fill" />
            </a>

            <a
              href="#"
              className="w-7 h-7 rounded-full bg-white text-[#0f4d5a] flex items-center justify-center hover:scale-105 duration-300"
            >
              <InstagramLogo size={14} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;