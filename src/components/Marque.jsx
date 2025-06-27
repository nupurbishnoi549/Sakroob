import React from 'react';
import { CATEGORY_DATA } from '../utils/helper';

const Marque = () => {
    const duplicatedData = [...CATEGORY_DATA, ...CATEGORY_DATA];

    return (
        <div id='categories' className="overflow-hidden py-6  max-w-[1920px] mx-auto">
            <div className="flex animate-marquee gap-4">
                {duplicatedData.map((category, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-[14px] border border-[#112D491A] w-[207px] h-[91px] p-4 rounded-lg bg-white shrink-0"
                    >
                        <div className="size-[59px]">
                            <category.icon />
                        </div>
                        <span className="font-bold text-dark-blue leading-[120%]">
                            {category.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marque;
