import { ArrowRightIcon, CheckSquareIcon, TrendUpIcon } from "@phosphor-icons/react";
import { 
  CheckSquare, 
  ArrowRight, 
  BookOpen, 
  CurrencyDollar, 
  Users, 
  FileText, 

  ShieldCheck, 
  Tree, 
  ClipboardText 
} from "@phosphor-icons/react";
import React from "react";
export const ManagementSection = () => {
    const services = [
    "Financial Organization",
    "Bookkeeping Care",
    "Cash Flow Visibility",
    "Preparedness",
    "Accountability",
    "Budgeting",
    "Living Legacy Organization",
    "Financial Relationship Support",
  ];
  const highlights = [
    "Clean Books", "Better Cash Flow",
    "Tax Preparedness", "Financial Accountability",
    "Stronger Decisions", "Living Legacy Support"
  ];

  const circularNodes = [
    { label: "Books", icon: <BookOpen weight="light" />, pos: "top-0 left-1/2 -translate-x-1/2" },
    { label: "Cash Flow", icon: <CurrencyDollar weight="light" />, pos: "top-12 right-0" },
    { label: "Payroll", icon: <Users weight="light" />, pos: "top-1/2 right-[-20px] -translate-y-1/2" },
    { label: "Taxes", icon: <FileText weight="light" />, pos: "bottom-12 right-0" },
    { label: "Profit", icon: <TrendUpIcon weight="light" />, pos: "bottom-0 left-1/2 -translate-x-1/2" },
    { label: "Compliance", icon: <ShieldCheck weight="light" />, pos: "bottom-12 left-0" },
    { label: "Accountability", icon: <ClipboardText weight="light" />, pos: "top-1/2 left-[-40px] -translate-y-1/2" },
    { label: "Living Legacy", icon: <Tree weight="light" />, pos: "top-12 left-0" },
  ];
  return (
    <section className="bg-gradient-to-r from-[#1F7180] to-[#123F4E] py-16 px-6 lg:px-8 font-sans">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image */}
        <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
          <img 
            src="/financial-analysis.jpg" 
            alt="WealthCare Management Dashboard" 
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col text-white">
          <div className="w-12 h-[2px] bg-[#E9A05D] mb-4" />
          <span className="italic text-[#E9A05D] text-lg font-serif">
            WealthCare™ Management
          </span>
          
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-6 leading-tight">
            WealthCare™ Management
          </h2>

          <p className="text-gray-300 text-sm mb-8 leading-relaxed max-w-xl">
            WealthCare Management Is The Ongoing Care Of Your Financial Foundation — 
            Your Books, Cash Flow, Tax Preparedness, Accountability Systems, Reporting, 
            And Financial Decision Support.
          </p>

          {/* Two-Column Service List */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
            {services.map((service, index) => (
              <li key={index} className="flex items-center space-x-3 group">
                <CheckSquareIcon className="w-5 h-5 text-[#E9A05D] flex-shrink-0" />
                <span className="text-gray-200 text-sm font-medium">
                  {service}
                </span>
              </li>
            ))}
          </ul>

          {/* Outlined CTA Button */}
          <div>
            <button className="group flex items-center space-x-6 border border-white/40 hover:border-white text-white py-3 px-6 rounded-full transition-all duration-300">
              <span className="font-semibold text-sm tracking-wide">
                Explore WealthCare Support
              </span>
              <div className="bg-white rounded-full p-1 group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRightIcon className="w-4 h-4 text-[#123F4E]" />
              </div>
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="text-white">
          <div className="w-12 h-[2px] bg-[#E9A05D] mb-4" />
          <span className="italic text-[#E9A05D] text-xl font-serif">Our Approach</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-8 leading-tight">
            More Than Bookkeeping.<br />Whole Finance.
          </h2>
          
          <ul className="grid grid-cols-2 gap-4 mb-12">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
                <CheckSquare size={20} weight="fill" className="text-[#E9A05D]" />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <button className="group flex items-center space-x-4 border border-white/40 hover:border-white py-3 px-8 rounded-full transition-all">
            <span className="text-sm font-semibold">How Our Approach Works</span>
            <div className="bg-white rounded-full p-1 transition-transform group-hover:translate-x-1">
              <ArrowRight size={16} weight="bold" className="text-[#123F4E]" />
            </div>
          </button>
        </div>

        {/* Right Side: Circular Diagram */}
        <div className="relative flex justify-center items-center h-[550px] w-full">
          {/* Central Hub */}
          <div className="z-10 w-44 h-44 rounded-full bg-[#E9A05D] flex items-center justify-center text-center p-6 shadow-2xl border-4 border-[#1F7180]">
            <span className="text-white font-bold leading-tight text-lg">Whole Finance Approach</span>
          </div>

          {/* Dotted Connections */}
          <div className="absolute w-[360px] h-[360px] border border-dashed border-white/20 rounded-full" />

          {/* Orbiting Nodes */}
          {circularNodes.map((node, i) => (
            <div key={i} className={`absolute ${node.pos} flex flex-col items-center group`}>
              <div className="relative">
                {/* Node Label */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-white/70">
                  {node.label}
                </span>
                
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-[#1F7180] border border-white/20 flex items-center justify-center text-white shadow-xl transition-all duration-300 group-hover:bg-[#3A9B94] group-hover:scale-110">
                  {React.cloneElement(node.icon, { size: 24 })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
