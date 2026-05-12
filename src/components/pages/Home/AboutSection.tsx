
import { CheckCircleIcon } from '@phosphor-icons/react';

const AboutSection = () => {
    const highlights = [
        "30+ Years Bookkeeping Experience",
        "18 Years Financial Controller/CFO Experience",
        "Construction Accounting",
        "Payroll Coordination",
        "Job Costing",
        "QuickBooks Online/Desktop",
        "Fractional CFO-Style Financial Oversight",
        "CPA Coordination",
    ];

    return (
        <section className="max-w-[1440px] mx-auto py-16 px-6 md:px-8 lg:12 xl:px-[70px] bg-white font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="relative group overflow-bottom-hidden">
                    <div className="rounded-lg">
                        <img
                            src="/amy-portrait.jpg"
                            alt="Amy - Founder"
                            className="w-full h-auto object-cover rounded-lg grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div className="absolute bottom-6 right-3  translate-y-8 translate-x-8 z-10">
                        <div className="bg-white p-[6px] rounded-md">

                            {/* 3. The Content Div (Teal background) */}
                            <div className="bg-[#3A9B94] text-white p-6 rounded-md max-w-[190px]">
                                <h2 className="text-4xl font-bold leading-none">30+</h2>
                                <p className="mt-2 text-sm font-medium leading-snug">
                                    Years Bookkeeping Experience
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col">
                    <div className="w-12 h-[2px] bg-[#F4A261] mb-2 lg:mb-[14px]" />
                    <span className="italic text-[#E9A05D] text-lg font-highlight font-bold">About Us</span>
                    <h1 className="text-[26px] lg:text-[38px] font-heading font-bold text-[#123F4E] mt-2 mb-3 lg:mb-6">
                        Meet Your FinanZAlly
                    </h1>

                    {/* Featured Paragraph with Left Border */}
                    <div className="border-l-4 border-[#F4A261] pl-3 lg:pl-4 mb-3 lg:mb-6">
                        <p className="text-gray-600 leading-relaxed text-sm">
                            With over <span className="font-bold text-gray-800">30 years of bookkeeping experience</span> and <span className="font-bold text-gray-800">18 years as a Financial Controller/CFO</span>, Amy brings a rare blend of hands-on bookkeeping knowledge, operational financial oversight, and practical business insight.
                        </p>
                    </div>

                    <p className="text-gray-500 text-sm mb-3 lg:mb-5 leading-relaxed">
                        Amy Is The Founder Of FinanZAlly™, A Whole Finance Support Firm Created For
                        Business Owners And Family Offices Who Need More Than Basic Bookkeeping.
                        As Your Finance Ally,
                    </p>

                    {/* Checklist */}
                    <ul className="grid grid-cols-1 gap-y-1 lg:gap-y-3">
                        {highlights.map((text, index) => (
                            <li key={index} className="flex items-start space-x-3 group">
                                <CheckCircleIcon className="w-4 h-4 lg:w-5 lg:h-5 text-[#E9A05D] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <span className="text-gray-600 md:text-sm lg:text-base font-medium leading-tight">
                                    {text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            
        </section>
    );
};

export default AboutSection;