import { useState } from "react";
import { Link } from "react-router-dom";

import {
  List,
  X,
  CaretDown,
  ArrowRight,
} from "@phosphor-icons/react";

import logo from "../../../assets/Company_Logo.png";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [openMobileDropdown, setOpenMobileDropdown] = useState("");

  // ONLY REQUIRED DROPDOWNS
  const menuItems = [
    {
      title: "Services",
      links: [
        {
          name: "Keeper of Books",
          path: "/keeper-of-books",
        },

        {
          name: "Tax Preparedness",
          path: "/tax-preparedness",
        },

        {
          name: "Payroll & Compliance",
          path: "/payroll-compliance",
        },

        {
          name: "Fractional CFO Support",
          path: "/fractional-cfo-support",
        },
      ],
    },

    {
      title: "Who We Serve",
      links: [
        {
          name: "Business Owners",
          path: "/business-owners",
        },

        {
          name: "Family Offices",
          path: "/family-offices",
        },
      ],
    },

    {
      title: "WealthCare™",
      links: [
        {
          name: "Whole Finance",
          path: "/whole-finance",
        },

        {
          name: "Financial Relationship",
          path: "/financial-relationship",
        },

        {
          name: "Living Legacy Strategy",
          path: "/living-legacy-strategy",
        },

        {
          name: "Wealth Club Communities",
          path: "/wealth-club-communities",
        },
      ],
    },
  ];

  return (
    <header className="w-full bg-black sticky top-0 z-50 border-b border-[#1a1a1a]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[82px]">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-[180px] md:w-[220px] object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Home */}
            <Link
              to="/"
              className="text-[#00c8d7] text-[15px] "
            >
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              className="text-white hover:text-[#00c8d7] duration-300 text-[15px] "
            >
              About
            </Link>

            {/* DROPDOWN MENUS */}
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Menu Title */}
                <div className="flex items-center gap-1 cursor-pointer">
                  <span className="text-white group-hover:text-[#00c8d7] duration-300 text-[15px] ">
                    {item.title}
                  </span>

                  <CaretDown
                    size={12}
                    weight="bold"
                    className="text-white group-hover:text-[#00c8d7] duration-300"
                  />
                </div>

                {/* Dropdown */}
                <div className="absolute top-[180%] left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 translate-y-4 group-hover:translate-y-0 min-w-[300px] bg-[#0d0d0d] rounded-2xl p-3 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                  <div className="flex flex-col gap-1">
                    {item.links.map((link, i) => (
                      <Link
                        key={i}
                        to={link.path}
                        className="group/item flex items-center justify-between rounded-xl px-4 py-3 text-[15px] text-[#d6d6d6] hover:bg-[#111] hover:text-[#00c8d7] duration-300"
                      >
                        <span>{link.name}</span>

                        <ArrowRight
                          size={14}
                          weight="bold"
                          className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 duration-300"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Resources */}
            <Link
              to="/resources"
              className="text-white hover:text-[#00c8d7] duration-300 text-[15px]"
            >
              Resources
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="text-white hover:text-[#00c8d7] duration-300 text-[15px]"
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">
            <button className="bg-[#2da7b3] hover:bg-[#238d97] duration-300 text-white rounded-full h-[48px] pl-6 pr-4 flex items-center gap-3 font-semibold text-[16px]">
              Book Now

              <div className="w-8 h-8 rounded-full bg-white text-[#2da7b3] flex items-center justify-center shrink-0">
                <ArrowRight size={14} weight="bold" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white"
          >
            {mobileMenu ? (
              <X size={34} weight="bold" />
            ) : (
              <List size={34} weight="bold" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden duration-300 bg-black ${
          mobileMenu ? "max-h-[1200px]" : "max-h-0"
        }`}
      >
        <div className="px-5 pb-6 pt-2 flex flex-col border-t border-[#1d1d1d]">
          {/* Home */}
          <Link
            to="/"
            onClick={() => setMobileMenu(false)}
            className="text-[#00c8d7] font-medium py-4 border-b border-[#1b1b1b]"
          >
            Home
          </Link>

          {/* About */}
          <Link
            to="/about"
            onClick={() => setMobileMenu(false)}
            className="text-white font-medium py-4 border-b border-[#1b1b1b]"
          >
            About
          </Link>

          {/* MOBILE DROPDOWNS */}
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#1b1b1b]"
            >
              <button
                onClick={() =>
                  setOpenMobileDropdown(
                    openMobileDropdown === item.title
                      ? ""
                      : item.title
                  )
                }
                className="w-full flex items-center justify-between py-4"
              >
                <span className="text-white font-medium">
                  {item.title}
                </span>

                <CaretDown
                  size={16}
                  weight="bold"
                  className={`text-white duration-300 ${
                    openMobileDropdown === item.title
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {/* Dropdown Content */}
              <div
                className={`overflow-hidden duration-300 ${
                  openMobileDropdown === item.title
                    ? "max-h-[500px] pb-4"
                    : "max-h-0"
                }`}
              >
                <div className="bg-[#0f0f0f] rounded-2xl p-2 flex flex-col gap-1">
                  {item.links.map((link, i) => (
                    <Link
                      key={i}
                      to={link.path}
                      onClick={() => setMobileMenu(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-[14px] text-[#cfcfcf] hover:bg-[#161616] hover:text-[#00c8d7] duration-300"
                    >
                      <span>{link.name}</span>

                      <ArrowRight
                        size={13}
                        weight="bold"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Resources */}
          <Link
            to="/resources"
            onClick={() => setMobileMenu(false)}
            className="text-white font-medium py-4 border-b border-[#1b1b1b]"
          >
            Resources
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            onClick={() => setMobileMenu(false)}
            className="text-white font-medium py-4 border-b border-[#1b1b1b]"
          >
            Contact
          </Link>

          {/* CTA */}
          <button className="bg-[#2da7b3] mt-5 hover:bg-[#238d97] duration-300 text-white rounded-full h-[48px] px-7 flex items-center justify-center gap-4 font-semibold text-[16px]">
            Book Now

            <div className="w-8 h-8 rounded-full bg-white text-[#2da7b3] flex items-center justify-center">
              <ArrowRight size={14} weight="bold" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;