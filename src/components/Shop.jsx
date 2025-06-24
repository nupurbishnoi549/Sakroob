import React from 'react';
import { SHOP_DATA } from '../utils/helper';

const Shop = () => {
    return (
        <div className="py-14 bg-white text-center px-4">
            <p className="text-sm text-gray-500 italic">Featured Categories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#112D49] mb-10">
                Shop Our Most Popular Products
            </h2>

            <div className="flex flex-wrap justify-center gap-6 max-w-[1400px] mx-auto">
                {SHOP_DATA.map((item, index) => {
                    const isWideBox = index === 0;
                    const isLastBox = index === 5;

                    const boxWidth = (index === 0 || index === 5) ? 'w-[680px]' : 'w-[328px]';
                    const boxLayout = index === 0 ? 'flex-row justify-between items-center gap-6' : 'flex-col';

                    const textAlignment =
                        index === 0 ? 'text-left items-start justify-center h-full'
                            : index === 2 || index === 4 ? 'text-center items-center'
                                : index === 3 ? 'text-right items-end'
                                    : 'text-center items-center';

                    return (
                        <div
                            key={index}
                            className={`rounded-xl  flex ${boxLayout} min-h-[320px] ${boxWidth} ${textAlignment}`}
                            style={{ backgroundColor: item.bgColor || '#DCEEFF' }}
                        >
                            <div className={`${index === 0 ? 'flex flex-col justify-center h-full' : ''}`}>
                                <h3 className="text-lg md:text-[32px] font-bold text-[#112D49] mb-4">
                                    {item.title}
                                </h3>
                            </div>
                            <img
                                src={item.image}
                                alt={item.title}
                                className={`${index === 0 ? 'w-[372px] h-[261px]' :
                                    index === 1 ? 'w-[174px] h-[213px]' :
                                        index === 2 ? 'w-[184px] h-[208px]' :
                                            index === 3 ? 'w-[306px] h-[261px]' :
                                                index === 4 ? 'w-[266px] h-[184px]' :
                                                    index === 5 ? 'w-[680px] h-[310px]' :
                                                        'w-[150px] h-[120px]'
                                    }`}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Shop;
