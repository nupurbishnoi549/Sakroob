import React from 'react';
import { FEATURES_LIST } from '../utils/helper';

const FeatureBanner = () => {
    return (
        <div id='reference' className="w-full bg-sky py-11 mt-6">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap xl:flex-nowrap items-center justify-between gap-y-8 gap-x-6">
                {FEATURES_LIST.map((feature, index) => (
                    <React.Fragment key={index}>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 w-full sm:w-auto">
                            <div className="bg-[#6ba3e6] sm:bg-transparent size-14 sm:size-[47px] rounded-full sm:rounded-none flex items-center justify-center">
                                <div className="w-6 h-6 sm:w-[47px] sm:h-[47px]">
                                    {feature.icon && <feature.icon />}
                                </div>
                            </div>
                            <div>
                                <p className="font-bold text-black">{feature.title}</p>
                                <p className="text-sm text-black/70">{feature.text}</p>
                            </div>
                        </div>
                        {index < FEATURES_LIST.length - 1 && (
                            <>
                                <div className="hidden lg:block w-px h-[61px] bg-gradient-to-b from-transparent via-[#112D49] to-transparent opacity-30" />
                                <hr className="block md:hidden w-2/3 mx-auto h-px border-none bg-gradient-to-r from-transparent via-[#112D49] to-transparent opacity-30" />
                            </>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default FeatureBanner;
