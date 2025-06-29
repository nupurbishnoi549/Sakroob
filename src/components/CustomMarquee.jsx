import React from 'react';
import { CATEGORY_DATA } from '../utils/helper';

const CustomMarquee = () => {
    const duplicatedData = [...CATEGORY_DATA, ...CATEGORY_DATA];

    return (
        <div id='categories' className="overflow-hidden py-6 max-w-[1920px] mx-auto">
            <div className="flex animate-marquee gap-4">
                {duplicatedData.map((category, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-[14px] border border-[#112D491A] md:w-[207px] md:h-[91px] w-[159px] h-[61px] p-4 rounded-lg bg-white shrink-0"
                    >
                        <div>
                            <category.icon />
                        </div>
                        <span className="font-bold text-dark-blue max-md:text-xs leading-[120%]">
                            {category.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomMarquee;
