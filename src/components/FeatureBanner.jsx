import React from 'react';
import { FEATURES_LIST } from '../utils/helper';

const FeatureBanner = () => {
    return (
        <div id="reference" className="w-full px-4 sm:px-6 mt-6 max-w-[1920px] mx-auto">
            <div className="max-w-[1384px] rounded-lg mx-auto bg-sky py-8 sm:py-11 px-4 sm:px-8 lg:px-10 xl:px-16">
                <div className="hidden xl:flex flex-wrap xl:flex-nowrap items-center xl:justify-between gap-y-6 sm:gap-y-8 gap-x-4 sm:gap-x-6">
                    {FEATURES_LIST.map((feature, index) => (
                        <React.Fragment key={index}>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 w-full sm:w-auto">
                                <div className="w-6 h-6 sm:w-[47px] sm:h-[47px]">
                                    {feature.icon && <feature.icon />}
                                </div>
                                <div>
                                    <p className="font-bold text-black">{feature.title}</p>
                                    <p className="text-sm text-black/70">{feature.text}</p>
                                </div>
                            </div>
                            {index < FEATURES_LIST.length - 1 && (
                                <>
                                    <div className="hidden xl:block sm:block md:hidden lg:hidden w-px h-[61px] bg-gradient-to-b from-transparent via-[#112D49] to-transparent opacity-30" />
                                    <hr className="block xl:hidden sm:block md:hidden lg:hidden w-2/3 mx-auto h-px border-none bg-gradient-to-r from-transparent via-[#112D49] to-transparent opacity-30" />
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className="xl:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
                    {FEATURES_LIST.map((feature, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 w-full sm:w-auto">
                            <div className="w-6 h-6 sm:w-[47px] sm:h-[47px]">
                                {feature.icon && <feature.icon />}
                            </div>
                            <div>
                                <p className="font-bold text-black max-[640px]:pt-9">{feature.title}</p>
                                <p className="text-sm text-black/70">{feature.text}</p>
                            </div>
                            {index < FEATURES_LIST.length - 1 && (
                                <>
                                    <hr className="block sm:hidden w-2/3 mx-auto h-px border-none bg-gradient-to-r from-transparent via-[#112D49] to-transparent opacity-30 mt-3" />
                                </>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default FeatureBanner;