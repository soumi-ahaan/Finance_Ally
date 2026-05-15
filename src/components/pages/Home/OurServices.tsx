import { useEffect, useState } from "react";

import {  ArrowRightIcon, CaretRightIcon } from "@phosphor-icons/react";

import { getServices, getMediaById } from "../../../Api/Api";

import type { ServiceItem } from "../../types/AllType";

const OurServices = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getServices();

      setServices(data);
    };

    fetchServices();
  }, []);

  return (
<section className="relative py-16 lg:py-20 bg-[#edf6f6] overflow-hidden">
  {/* Background Decorative Circles */}
  <div className="absolute inset-0 pointer-events-none opacity-40">
    <div className="absolute -left-40 bottom-[-200px] w-[600px] h-[600px] border border-[#d7e8e8] rounded-full"></div>
    <div className="absolute right-[-150px] top-[-150px] w-[500px] h-[500px] border border-[#d7e8e8] rounded-full"></div>
  </div>

  <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[70px]">
    
    {/* Top Content */}
    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_0.9fr_auto] gap-8 xl:gap-16 items-center mb-14 lg:mb-16">

      {/* Left Content */}
      <div className="max-w-[760px]">
        
        {/* Small Heading */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-[2px] bg-[#f4a261]"></div>

          <span className="font-highlight italic text-[#F4A261] text-md md:text-xl xl:text-2xl font-bold">
            Our Services
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-[#1A2B32] text-4xl sm:text-4xl lg:text-2xl xl:text-[38px] leading-[1.2] font-bold font-heading tracking-[-2px]">
          Comprehensive Accounting
          <br />
          Services for Your Business
        </h2>
      </div>

      {/* Description */}
      <div className="lg:pt-12 max-w-[430px]">
        <p className=" text-base  leading-[2]">
          Smart, Reliable, And Tailored Accounting Solutions Designed To
          Simplify Your Finances, Improve Accuracy, And Support Your
          Business Growth With Confidence.
        </p>
      </div>

      {/* Button */}
      <div className="flex lg:justify-end">
       <button
                className="group/btn bg-[#2B9896] hover:bg-transparent  hover:shadow-[0px_0px_10px_1px_#00000026]  duration-300 text-white rounded-full  pl-5 pr-3 py-2 lg:pl-8 lg:pr-3 lg:py-2.5 flex items-center gap-3 font-semibold">
                <span className="text-white text-xs sm:text-sm lg:text-base font-semibold group-hover/btn:text-[#2B9896] transition-colors duration-300">
                  View services
                </span>
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white text-[#2B9896] flex items-center justify-center shrink-0 group-hover/btn:bg-[#2B9896] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform duration-300">
                  <CaretRightIcon size={14} weight="bold" />
                </div>
              </button>
      </div>
    </div>

    {/* Services Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
      {services.map((service) => {
        const featuredImage =
          service._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

        return (
          <ServiceCard
            key={service.id}
            service={service}
            featuredImage={featuredImage}
          />
        );
      })}
    </div>
  </div>
</section>
  );
};

// ====================================
// SERVICE CARD COMPONENT
// ====================================

const ServiceCard = ({
  service,
  featuredImage,
}: {
  service: ServiceItem;
  featuredImage?: string;
}) => {
  const [iconImage, setIconImage] = useState("");

  useEffect(() => {
    const fetchIcon = async () => {
      if (service?.acf?.icon_image) {
        const media = await getMediaById(service.acf.icon_image);

        setIconImage(media?.source_url || "");
      }
    };

    fetchIcon();
  }, [service]);

  return (
    <div className="bg-white rounded-[15px] overflow-hidden border-b-3 border-[#F4A261] shadow-sm hover:shadow-2xl duration-300">
      {/* Image */}
      <div className="relative h-[250px] ">
        <img
          src={featuredImage}
          alt={service.title.rendered}
          className="w-full h-full object-cover"
        />

        {/* Icon */}
        {iconImage && (
          <div className="absolute left-7 -bottom-8 w-[74px] h-[74px] rounded-full bg-[#f4a261] border-[5px] border-white flex items-center justify-center z-40">
            <img
              src={iconImage}
              alt="icon"
              className="w-9 h-9 object-contain"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-7 pt-14 pb-8">
        {/* Title */}
        <h3 className="text-[#2d2d2d] text-[22px] leading-[1.2] font-heading font-bold mb-5">
          {service.title.rendered}
        </h3>

        {/* Description */}
        <div
          className="text-[#6d6d6d] text-[16px]  mb-8"
          dangerouslySetInnerHTML={{
            __html: service.content.rendered,
          }}
        />

        {/* Button */}
        <a
  href="#"
  className="inline-flex items-center gap-3 text-[#1e8ea3] text-[18px] font-semibold underline underline-offset-5 hover:gap-5 duration-300"
>
  {service.acf?.button_text || "Read More"}

  <ArrowRightIcon size={20} weight="regular" />
</a>
      </div>
    </div>
  );
};

export default OurServices;
