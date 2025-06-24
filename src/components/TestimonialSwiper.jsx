import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import leftArrow from '../assets/images/svg/left-arrow.svg';
import rightArrow from '../assets/images/svg/right-arrow.svg';
import dotArrow from '../assets/images/svg/dot-arrow.svg';
import downArrow from '../assets/images/svg/down-arrow.svg';
import star from '../assets/images/svg/star.svg';

import { TESTIMONIALS_DATA } from '../utils/helper';

const Testimonials = () => {
    return (
        <div className="w-full pt-32 pb-60 bg-white flex flex-col items-center text-center px-4 sm:px-6">
            <p className="text-gray-500 italic mb-2 text-sm sm:text-base">Testimonials</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                What Our <span className="text-primary">Client’s Says</span>
            </h2>

            <div className="w-full max-w-[1000px] relative py-12 sm:py-16 mx-auto">
                <Swiper
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2 },
                    }}
                    spaceBetween={16}
                    loop={true}
                    navigation={{
                        nextEl: '.next-btn',
                        prevEl: '.prev-btn',
                    }}
                    modules={[Navigation]}
                    className="w-full group"
                >
                    {TESTIMONIALS_DATA.map((item, index) => (
                        <SwiperSlide key={index} className="transition-shadow duration-300">
                            <div className="testimonial-slide bg-white p-4 sm:p-5 pb-8 rounded-lg text-left h-full shadow-sm">
                                <div className="flex flex-col items-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="size-[64px] sm:size-[72px] md:size-[80px] rounded-full mb-4"
                                    />
                                    <div className="text-gray-500 text-sm px-2 sm:px-4 relative">
                                        <img src={dotArrow} alt="dotArrow" className='absolute top-[-13%] left-[8%] w-5 sm:w-auto' />
                                        <p className="text-center px-4 sm:px-6 mb-5">{item.description}</p>
                                        <img src={downArrow} alt="downArrow" className='absolute bottom-[3%] right-[11%] w-5 sm:w-auto' />
                                    </div>
                                    <div className="max-w-[140px] sm:max-w-[160px] md:max-w-[192px] mb-3">
                                        <img src={star} alt="star" />
                                    </div>
                                    <p className="text-base sm:text-lg font-bold">{item.title}</p>
                                    <p className="text-sm text-gray-500">{item.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="hidden sm:block">
                    <button className="prev-btn absolute left-[-16px] md:left-[-24px] xl:left-[-5%] top-1/2 -translate-y-1/2 cursor-pointer p-2 z-10">
                        <img src={leftArrow} alt="Prev" className="w-7 md:w-8" />
                    </button>
                    <button className="next-btn absolute right-[-16px] md:right-[-24px] xl:right-[-5%] top-1/2 -translate-y-1/2 cursor-pointer p-2 z-10">
                        <img src={rightArrow} alt="Next" className="w-7 md:w-8" />
                    </button>
                </div>
                <div className="flex sm:hidden justify-center gap-6 mt-6">
                    <button className="prev-btn p-2">
                        <img src={leftArrow} alt="Prev" className="w-8" />
                    </button>
                    <button className="next-btn p-2">
                        <img src={rightArrow} alt="Next" className="w-8" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
