export const StatBanner = () => {
    const stats = [
        { title: "30+", desc: "Years Bookkeeping Experience" },
        { title: "18+", desc: "Years Financial CFO Experience" },
        { title: "Construction", desc: "Accounting Specialist" },
        { title: "QuickBooks", desc: "Certified Expert" },
        { title: "CPA", desc: "Coordination Support" },
    ];

    return (
        <div className="bg-[#123F4E] px-4 py-4 xl:px-[70px] lg:py-8 w-full">
            <div
                className="max-w-[1440px] mx-auto flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-5 lg:overflow-visible gap-1 xl:gap-6"
            >
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-2 xl:space-x-4  flex-shrink-0 snap-start"
                    >
                        <div className="relative flex items-center justify-center w-15 h-15 xl:w-20 xl:h-20 rounded-full bg-gradient-to-b from-[#F4A261] to-transparent p-[1.5px]">
                            <div className="flex items-center justify-center w-full h-full rounded-full bg-[#123F4E]">
                                <div
                                    className="w-[82%] h-[82%] rounded-full bg-center bg-no-repeat bg-[length:60%]"
                                    style={{
                                        backgroundImage: `url('/stat-icon.svg')`,
                                        backgroundColor: "#F4A261",
                                    }}
                                />
                            </div>
                        </div>

                        <div className="text-white">
                            <h3 className="text-xl font-bold leading-tight">
                                {item.title}
                            </h3>

                            <p className="text-xs lg:text-sm font-light opacity-90 max-w-[120px]">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};