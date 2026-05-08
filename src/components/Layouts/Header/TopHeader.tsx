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
    <div className=" bg-[#123F4E] text-white ">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[70px]">
        <div className="flex items-center justify-between h-[42px]">
          
          {/* Left Side */}
          <div className="hidden lg:flex items-center gap-10 text-sm font-medium">
            
            <div className="flex items-center gap-2">
              <EnvelopeSimple size={14} weight="fill" />
              <a href="mailto:bookkeeping@finanzaccounting.com" target="_blank" className="cursor-pointer">bookkeeping@finanzaccounting.com</a>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={14} weight="fill" />
              <a href="tel:7755509999" target="_blank" className="cursor-pointer">7755509999</a>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={14} weight="fill" />
              <a href="https://maps.app.goo.gl/9cWAhmm4JSJKJFCr5" target="_blank" className="cursor-pointer">P.O. Box 980, Verdi, NV 89439</a>
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
              className="w-7 h-7 rounded-full bg-white text-[#0f4d5a] flex items-center justify-center hover:scale-105 duration-300 p-1"
            >
              <FacebookLogo  weight="fill" />
            </a>

            <a
              href="#"
              className="w-7 h-7 rounded-full bg-white text-[#0f4d5a] flex items-center justify-center hover:scale-105 duration-300 p-1"
            >
              <LinkedinLogo  weight="fill" />
            </a>

            <a
              href="#"
              className="w-7 h-7 rounded-full bg-white text-[#0f4d5a] flex items-center justify-center hover:scale-105 duration-300 p-1"
            >
              <InstagramLogo  weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;