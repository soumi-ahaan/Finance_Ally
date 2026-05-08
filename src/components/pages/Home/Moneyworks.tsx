import { CaretRightIcon, SealCheckIcon } from "@phosphor-icons/react";
import moneywork from "../../../assets/moneywork.png";

const features = [
    "Income (Inflow)",
    "Expense (Outflow)",
    "Assets (Stability)",
    "Liability (Pressure)"
];

export default function MoneyWorks() {
    return (
        <section className="py-14 xl:pt-[70px] xl:pb-[114px]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[70px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12 items-center">
                    {/* Left Side: Image */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={moneywork}
                                alt="Financial professional working with calculator"
                                className="w-full max-h-[494px] object-cover aspect-[4/3] lg:aspect-square"
                            />
                        </div>
                    </div>
                    {/* Right Side: Content */}
                    <div className="flex flex-col ">

                        <h2 className="text-[24px] lg:text-[38px] font-bold text-[#123F4E] mt-2 mb-3 leading-tight">
                            Money Works Like the Heart
                        </h2>

                        <p className="text-[#727171] text-xs lg:text-base mb-3 lg:mb-4 leading-relaxed max-w-xl">
                            The heart doesn’t “try harder.” It restores circulation by fixing the right chamber.
                            <br className="hidden lg:block"/>
                            Money Medic does the same: we identify where your system is under strain—and prescribe the simplest actions to restore stability.
                        </p>
                        <p className="text-[#727171] text-xs lg:text-base mb-3 lg:mb-4 leading-relaxed max-w-xl font-semibold">
                            The 4 Chambers of Financial Wealth:
                        </p>

                        {/* Two-Column Feature List */}
                        <ul className="space-y-1 xl:space-y-3 mb-5 lg:mb-9">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center space-x-[10px]">
                                    <SealCheckIcon className="w-5 h-5 text-[#F4A261] flex-shrink-0" />
                                    <span className="text-[#727171] text-xs lg:text-base font-medium">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <div>
                            <button

                                className="bg-[#2B9896]  duration-300 text-white rounded-full  pl-5 pr-3 py-2 lg:pl-7 lg:pr-3 lg:py-2.5 flex items-center gap-3 font-semibold">
                                <span className="text-white text-sm lg:text-base font-semibold ">
                                    Triage Intake Assessment
                                </span>
                                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white text-[#123F4E] flex items-center justify-center shrink-0">
                                    <CaretRightIcon size={14} weight="bold" />
                                </div>
                            </button>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
}