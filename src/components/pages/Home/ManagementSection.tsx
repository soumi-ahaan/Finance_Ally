import React, { useEffect, useState } from "react";
import {

    BankIcon,
    Users,
    FileText,
    ChartLineUp,
    Gear,
    FileSearchIcon,
    CaretRightIcon,
    SealCheckIcon,
    BookOpenTextIcon,
    TreeIcon
} from "@phosphor-icons/react";

export const ManagementSection = () => {
    const [dimensions, setDimensions] = useState({ radius: 210, hub: 88, scale: 1 });
    const services = [
        "Financial Organization", "Bookkeeping Care", "Cash Flow Visibility",
        "Preparedness", "Accountability", "Budgeting",
        "Living Legacy Organization", "Financial Relationship Support",
    ];

    const highlights = [
        "Clean Books", "Better Cash Flow", "Tax Preparedness",
        "Financial Accountability", "Stronger Decisions", "Living Legacy Support"
    ];

    const nodes = [
        { label: "Books", icon: <BookOpenTextIcon weight="light" />, angle: -90 },
        { label: "Cash Flow", icon: <BankIcon weight="light" />, angle: -45 },
        { label: "Payroll", icon: <Users weight="light" />, angle: 0 },
        { label: "Taxes", icon: <FileText weight="light" />, angle: 45 },
        { label: "Profit", icon: <ChartLineUp weight="light" />, angle: 90 },
        { label: "Compliance", icon: <FileSearchIcon weight="light" />, angle: 135 },
        { label: "Accountability", icon: <Gear weight="light" />, angle: 180 },
        { label: "Living Legacy", icon: <TreeIcon weight="light" />, angle: 225 },
    ];



    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                // Mobile: Shrink the radius and the total scale
                setDimensions({ radius: 140, hub: 60, scale: 1 });
            } else if (width < 1024) {
                // Tablet
                setDimensions({ radius: 140, hub: 60, scale: 1 });
            } else {
                // Desktop
                setDimensions({ radius: 180, hub: 80, scale: 1 });
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { radius, hub, scale } = dimensions;

    return (
        <section className="bg-gradient-to-br from-[#1F7180] to-[#123F4E] py-10 lg:py-20 px-6 lg:px-8 xl:px-[70px] font-sans ">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12 xl:gap-[90px] items-center pb-10">

                {/* Left Side: Image */}
                <div className="rounded-[15px] overflow-hidden shadow-2xl border border-white/10">
                    <img
                        src="/financial-analysis.jpg"
                        alt="WealthCare Management Dashboard"
                        className="w-full h-auto object-cover aspect-[4/3]"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col text-white">
                    <div className="w-12 h-[2px] bg-[#F4A261] mb-2 lg:mb-[14px]" />
                    <span className="font-highlight italic text-[#F4A261] text-lg font-bold">
                        WealthCare™ Management
                    </span>

                    <h2 className="text-[24px] lg:text-[32px] xl:text-[38px] text-[#FFFFFF] font-bold mt-2 mb-6 leading-tight">
                        WealthCare™ Management
                    </h2>

                    <p className="text-[#ffffff] text-xs lg:text-base mb-3 lg:mb-4 leading-relaxed max-w-xl">
                        WealthCare Management Is The Ongoing Care Of Your Financial Foundation —
                        Your Books, Cash Flow, Tax Preparedness, Accountability Systems, Reporting,
                        And Financial Decision Support.
                    </p>

                    {/* Two-Column Service List */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-2 lg:gap-x-8 gap-y-1 lg:gap-y-3 mb-5 lg:mb-9">
                        {services.map((service, index) => (
                            <li key={index} className="flex items-center space-x-3 group">
                                <SealCheckIcon className="w-5 h-5 text-[#F4A261] flex-shrink-0" />
                                <span className="text-gray-200 text-xs lg:text-sm font-medium">
                                    {service}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <button className="group/btn border border-white/70  transition-all duration-300
                  rounded-full h-[56px] sm:h-[48px] pl-3 sm:pl-7 pr-2 sm:pr-4 flex items-center gap-3 sm:gap-5">
                            <span className="font-semibold text-sm tracking-wide">
                                Explore WealthCare Support
                            </span>
                            <div className="bg-white rounded-full p-1  transition-transform duration-300">
                                <CaretRightIcon className="w-4 h-4 text-[#123F4E]" />
                            </div>
                        </button>
                    </div>
                </div>

            </div>
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12 xl:gap-[90px] items-center">

                {/* Left Side Content */}
                <div className="text-white">
                    <div className="w-12 h-[2px] bg-[#F4A261] mb-2 lg:mb-[14px]" />
                    <span className="font-highlight italic text-[#F4A261] text-xl font-bold">Our Approach</span>
                    <h2 className="text-[24px] lg:text-[38px] font-bold text-[#FFFFFF] mt-2 mb-3 leading-tight">
                        More Than Bookkeeping.<br />Whole Finance.
                    </h2>
                    <p className="text-[#FFFFFF] text-xs lg:text-base mb-3 lg:mb-4 leading-relaxed max-w-xl">
                        We look beyond the books to help you understand your numbers, improve cash flow, strengthen profitability, and build systems that support your business and legacy.
                    </p>


                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-2 lg:gap-x-8 gap-y-1 lg:gap-y-3 mb-5 lg:mb-9">
                        {highlights.map((item, i) => (
                            <li key={i} className="flex items-center space-x-3">
                                <SealCheckIcon className="w-5 h-5 text-[#F4A261] flex-shrink-0" />
                                <span className="text-gray-200 text-xs lg:text-sm font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="group/btn border border-white/70  transition-all duration-300
                  rounded-full h-[56px] sm:h-[48px] pl-3 sm:pl-7 pr-2 sm:pr-4 flex items-center gap-3 sm:gap-5">
                        <span className="text-sm font-semibold">How Our Approach Works</span>
                        <div className="bg-white rounded-full p-1 transition-transform ">
                            <CaretRightIcon size={16} weight="bold" className="text-[#123F4E]" />
                        </div>
                    </button>
                </div>

                {/* RIGHT SIDE: THE DIAGRAM */}
                <div className="relative flex justify-center items-center min-h-[450px] lg:min-h-[600px] w-full z-10">

                    {/* Wrapper to scale the entire diagram for small screens */}
                    <div
                        className="relative flex justify-center items-center transition-all duration-500"
                        style={{ transform: `scale(${scale})` }}
                    >

                        {/* 1. The Central Hub */}
                        <div className="z-30 w-32 h-32 lg:w-44 lg:h-44 rounded-full bg-[#F4A261] flex items-center justify-center text-center p-4 shadow-2xl border border-dashed border-[#ffffff]">
                            <span className="text-[#FFFFFF] font-extrabold leading-tight text-sm lg:text-xl uppercase tracking-tighter">
                                Whole <br /> Finance <br /> Approach
                            </span>
                        </div>

                        {/* 2. The Orbit Ring */}
                        <div
                            className="absolute border border-dashed border-white rounded-full pointer-events-none transition-all"
                            style={{ width: radius * 2, height: radius * 2 }}
                        />

                        {/* 3. The Spokes and Nodes Container */}
                        <div className="absolute flex items-center justify-center">
                            {nodes.map((node, i) => {
                                const rad = (node.angle * Math.PI) / 180;
                                const x = Math.cos(rad) * radius;
                                const y = Math.sin(rad) * radius;

                                return (
                                    <React.Fragment key={i}>
                                        {/* Spoke Line */}
                                        <div
                                            className="absolute h-px border-t border-dashed border-white pointer-events-none block"
                                            style={{
                                                width: `${radius - hub}px`,
                                                left: "0px",
                                                top: "0px",
                                                transformOrigin: "left center",
                                                transform: `rotate(${node.angle}deg) translateX(${hub}px)`
                                            }}
                                        />

                                        {/* Icon Node */}
                                        <div
                                            className="absolute group flex items-center justify-center"
                                            style={{
                                                left: `${x}px`,
                                                top: `${y}px`,
                                                transform: 'translate(-50%, -50%)'
                                            }}
                                        >
                                            <span className={`absolute whitespace-nowrap text-white font-bold uppercase tracking-widest transition-all  text-[9px] top-15 left-1/2 -translate-x-1/2 text-center ${node.angle > 90 || node.angle < -90
                                                    ? 'xl:top-auto xl:left-auto xl:translate-x-0 xl:right-16 xl:text-right xl:text-[11px]' // Left nodes
                                                    : node.angle === -90
                                                        ? 'xl:top-auto xl:left-1/2 xl:-translate-x-1/2 xl:bottom-16 xl:text-[11px]'           // Top node
                                                        : node.angle === 90
                                                            ? 'xl:left-1/2 xl:-translate-x-1/2 xl:top-16 xl:text-[11px]'                          // Bottom node
                                                            : 'xl:top-auto xl:left-16 xl:-translate-x-0 xl:text-left xl:text-[11px]'              // Right nodes
                                                }
`}>
                                                {node.label}
                                            </span>

                                            {/* Node Circle - Scaled for mobile */}
                                            <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#1F7180] border border-dashed border-white flex items-center justify-center text-white shadow-xl transition-all duration-300 cursor-pointer">
                                                {React.cloneElement(node.icon, { size: scale < 1 ? 18 : 24 })}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};