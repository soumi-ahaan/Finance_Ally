import { useEffect, useState } from "react";

import {  CaretRightIcon } from "@phosphor-icons/react";

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

  <div className="relative max-w-[1440px] mx-auto px-4 lg:px-8 xl:px-[70px]">
    
    {/* Top Content */}
    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_0.9fr_auto] gap-10 lg:gap-16 items-center mb-14 lg:mb-16">

      {/* Left Content */}
      <div className="max-w-[760px]">
        
        {/* Small Heading */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-[2px] bg-[#f4a261]"></div>

          <span className="text-[#f4a261] italic text-[18px] lg:text-[20px] font-bold font-highlight tracking-wide">
            Our Services
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-[#1f2d38] text-[36px] sm:text-[44px] md:text-[38px] lg:text-[38px] leading-[1.2] font-bold font-heading tracking-[-2px]">
          Comprehensive Accounting
          <br />
          Services for Your Business
        </h2>
      </div>

      {/* Description */}
      <div className="max-w-[430px]">
        <p className="text-[#6f7b84] text-[16px] md:text-[17px] leading-[2] font-normal">
          Smart, Reliable, And Tailored Accounting Solutions Designed To
          Simplify Your Finances, Improve Accuracy, And Support Your
          Business Growth With Confidence.
        </p>
      </div>

      {/* Button */}
      <div className="flex lg:justify-end">
        <button
          className="bg-[#2da7b3] hover:bg-[#238d97] duration-300 text-white rounded-full h-[48px] pl-6 pr-4 flex items-center gap-3 font-semibold text-[16px]"
        >
          View services

          <div
            className="w-8 h-8 rounded-full bg-white text-[#2da7b3] flex items-center justify-center shrink-0"
          >
            <CaretRightIcon size={20} weight="bold" />
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
    <div className="bg-white rounded-[15px] overflow-hidden border border-[#f0c9a7] shadow-sm hover:shadow-2xl duration-300">
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
          className="inline-flex items-center gap-3 text-[#1e8ea3] text-[18px] font-semibold hover:gap-5 duration-300"
        >
          {service.acf?.button_text || "Read More"}

          <CaretRightIcon size={20} weight="regular" />
        </a>
      </div>
    </div>
  );
};

export default OurServices;
