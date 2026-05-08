import React from "react";
import {
  CaretRight,
  FacebookLogo,
  XLogo,
  InstagramLogo,
  MapPin,
  Phone,
  EnvelopeSimpleOpen,
} from "@phosphor-icons/react";

import logo2 from "../../../assets/footer_logo.png";
const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#000000] overflow-hidden">
      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[70px] pt-[50px] pb-[30px]">

        {/* Top Section */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8 mb-[42px]">

          {/* Left Area */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 xl:gap-10">

            {/* Logo */}
            <div className="shrink-0">
              {/* Replace with your logo */}
              <img
                src={logo2}
                alt="Finanzxa Logo"
                className="w-[180px] object-contain"
              />
            </div>

            {/* Newsletter Text */}
            <p className="max-w-[260px] text-white font-outfit font-semibold text-[16px] leading-[26px]">
              Sign Up To Received The Lastest News And Eventsfrom Us
            </p>
          </div>

          {/* Right Area */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">

            {/* Email Field */}
            <div className="w-full lg:w-[420px] h-[48px] border border-[#6A6A6AB2] rounded-full bg-transparent flex items-center justify-between pl-6 pr-2">
              <input
                type="email"
                placeholder="Your Email ID"
                className="bg-transparent outline-none border-none text-white placeholder:text-white font-poppins font-medium text-[15px] w-full"
              />

              <button className="w-[33px] h-[30px] rounded-full bg-white flex items-center justify-center hover:scale-110 duration-300">
                <CaretRight
                  size={22}
                  weight="bold"
                  className="text-[#1F7180]"
                />
              </button>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <p className="text-white font-outfit font-semibold text-[18px] whitespace-nowrap">
                Follow Us :
              </p>

              <div className="flex items-center gap-3">
                {[
                  <FacebookLogo size={18} weight="fill" />,
                  <XLogo size={18} weight="fill" />,
                  <InstagramLogo size={18} weight="fill" />,
                ].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center text-[#1F7180] hover:scale-110 transition-all duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="w-full bg-[#1F1F1F] rounded-[2px] px-6 sm:px-8 lg:px-[28px] py-[45px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-10">

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-raleway font-semibold text-[18px] mb-7">
                Quick Links
              </h3>

              <ul className="flex flex-col gap-[28px]">
                {[
                  { name: "Home", link: "/" },
                  { name: "About Us", link: "/about" },
                  { name: "Services", link: "/services" },
                  { name: "Who We Serve", link: "/who-we-serve" },
                  { name: "WealthCare™", link: "/wealthcare" },
                  { name: "Contact", link: "/contact" },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="inline-block text-[#FFFFFFB2] font-outfit font-normal text-[16px] hover:translate-x-2 transition-all duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-raleway font-semibold text-[18px] mb-7">
                Our Services
              </h3>

              <ul className="flex flex-col gap-[28px]">
                {[
                  { name: "Keeper Of Books", link: "/keeper-of-books" },
                  { name: "Tax Preparedness", link: "/tax-preparedness" },
                  { name: "Payroll & Compliance", link: "/payroll-compliance" },
                  { name: "Fractional CFO", link: "/fractional-cfo" },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="inline-block text-[#FFFFFFB2] font-outfit font-normal text-[16px] hover:translate-x-2 transition-all duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-white font-raleway font-semibold text-[18px] mb-7">
                Our Address
              </h3>

              <ul className="space-y-7">
                <li>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <MapPin
                      size={22}
                      weight="regular"
                      className="text-[#2B9896] mt-1 shrink-0"
                    />

                    <span className="text-[#FFFFFFB2] font-outfit text-[16px] leading-[28px] group-hover:translate-x-2 transition-all duration-300">
                      Mailing Address: P.O. Box 980, Verdi, NV 89439
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="tel:7755509999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <Phone
                      size={22}
                      weight="regular"
                      className="text-[#2B9896] shrink-0"
                    />

                    <span className="text-[#FFFFFFB2] font-outfit text-[16px] group-hover:translate-x-2 transition-all duration-300">
                      7755509999
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:Bookkeeping@Finanzaaccounting.Com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <EnvelopeSimpleOpen
                      size={22}
                      weight="regular"
                      className="text-[#2B9896] mt-1 shrink-0"
                    />

                    <span className="text-[#FFFFFFB2] font-outfit text-[16px] leading-[28px] break-all group-hover:translate-x-2 transition-all duration-300">
                      Bookkeeping@Finanzaaccounting.Com
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-raleway font-semibold text-[18px] mb-7">
                Resources
              </h3>

              <ul className="flex flex-col gap-[28px]">
                {[
                  { name: "Checklists", link: "/checklists" },
                  { name: "Articles", link: "/articles" },
                  { name: "Downloads", link: "/downloads" },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="inline-block text-[#FFFFFFB2] font-outfit font-normal text-[16px] hover:translate-x-2 transition-all duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div>
              <h3 className="text-white font-raleway font-semibold text-[18px] mb-7">
                Popular Posts
              </h3>

              <div className="space-y-6">

                {[1, 2].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="flex gap-4 group border-b border-[#FFFFFF1A] pb-5"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop"
                      alt="post"
                      className="w-[72px] h-[72px] object-cover rounded-md shrink-0"
                    />

                    <div>
                      <h4 className="text-white font-outfit font-medium text-[15px] leading-[23px] group-hover:text-[#2B9896] transition-all duration-300">
                        Top 5 Trends in Modern Infrastructure Projects
                      </h4>

                      <p className="text-[#FFFFFF80] font-outfit text-[13px] mt-2">
                        Dec 15, 2025
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-7">

          {/* Copyright */}
          <p className="text-[#FBFBFB] text-[15px] font-outfit font-normal text-center md:text-left leading-[28px]">
            © Copyright Year{" "}
            <span className="text-[#2B9896] font-extrabold">
              Finanzxa Accounting
            </span>
            . All Rights Reserved by{" "}
            <a
              href="https://www.ahaansoftware.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2B9896] font-extrabold hover:opacity-80 transition-all duration-300"
            >
              Ahaan Software Consulting
            </a>
          </p>

          {/* Policies */}
          <div className="flex items-center gap-4 text-center">
            <a
              href="#"
              className="relative text-[#FBFBFB] font-outfit font-normal text-[14px] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Privacy Policy
            </a>

            <span className="text-[#FBFBFB]">|</span>

            <a
              href="#"
              className="relative text-[#FBFBFB] font-outfit font-normal text-[14px] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Terms & conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;