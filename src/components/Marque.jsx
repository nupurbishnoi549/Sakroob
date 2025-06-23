import React from 'react';
import { CATEGORY_DATA } from '../utils/helper';

const Marque = () => {
    const duplicatedData = [...CATEGORY_DATA, ...CATEGORY_DATA];

    return (
        <div className="overflow-hidden py-6">
            <div className="flex animate-marquee whitespace-nowrap gap-4">
                {duplicatedData.map((category, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-[14px] border border-[#112D491A] w-[207px] h-[91px] p-4 rounded-lg bg-white shrink-0"
                    >
                        <img src={category.icon} alt={category.title} className="size-[59px]" />
                        <span className="font-bold text-[#112D49] leading-[120%]">
                            {category.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marque;
