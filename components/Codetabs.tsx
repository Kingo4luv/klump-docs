import { useState } from 'react';

export function CodeTabs({ tabs }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full border border-gray-200 rounded-md bg-black">
            {/* Tab buttons */}
            <div className="flex text-sm font-medium text-white">
                {tabs.map((tab, index) => (
                    <button
                        key={tab.label}
                        onClick={() => setActiveIndex(index)}
                        className={`px-4 py-2 ${activeIndex === index
                            ? 'text-[#5DE3FF] border-b-2 border-[#5DE3FF] font-semibold bg-black rounded-t-md'
                            : 'hover:[#5DE3FF text-[#9394A1]'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab content */}
            <div className="bg-black rounded-md">
                {tabs[activeIndex].content}
            </div>
        </div>
    );
}
