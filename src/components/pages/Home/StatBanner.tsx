
export const StatBanner = () => {

    const stats = [
        { title: "30+", desc: "Years Bookkeeping Experience" },
        { title: "18+", desc: "Years Financial CFO Experience" },
        { title: "Construction", desc: "Accounting Specialist" },
        { title: "QuickBooks", desc: "Certified Expert" },
        { title: "CPA", desc: "Coordination Support" },
    ];

    return (
        <div className="bg-[#123F4E] p-8 w-full">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6">
                {stats.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-b from-[#F7A86B] to-transparent p-[1.5px]">

                            <div className="flex items-center justify-center w-full h-full rounded-full bg-[#123F4E]">
                                {/* This inner dark div creates the "gap" between the ring and the icon.
    */}
                                <div
                                    className="w-[82%] h-[82%] rounded-full bg-center bg-no-repeat bg-[length:60%]"
                                    style={{
                                        backgroundImage: `url('/stat-icon.png')`,
                                        backgroundColor: "#F7A86B"
                                    }}
                                />
                            </div>
                        </div>

                        {/* The Text Content */}
                        <div className="text-white">
                            <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                            <p className="text-sm font-light opacity-90 max-w-[150px]">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
