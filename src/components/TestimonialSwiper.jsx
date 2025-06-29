import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Description from './common/Description';
import Heading from './common/Heading';

import leftArrow from '../assets/images/svg/left-arrow.svg';
import rightArrow from '../assets/images/svg/right-arrow.svg';
import dotArrow from '../assets/images/svg/dot-arrow.svg';
import downArrow from '../assets/images/svg/down-arrow.svg';
import star from '../assets/images/svg/star.svg';

import { TESTIMONIALS_DATA } from '../utils/helper';

const Testimonials = () => {
    return (
        <div id='contact' className="w-full pb-60 bg-white flex flex-col items-center text-center px-4 sm:px-6">
            <Description descriptionText="Testimonials" descriptionClass="!italic !mb-2" />
            <Heading headingText=" What Our Client’s Says" />
            <div className="w-full max-w-[1160px] relative py-12 sm:py-16 mx-auto">
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
                    className="w-full group" >
                    {TESTIMONIALS_DATA.map((item, index) => (
                        <SwiperSlide key={index} className="transition-shadow duration-300">
                            <div className="testimonial-slide bg-white p-4 sm:p-5 pb-8 rounded-lg text-left h-full shadow-sm">
                                <div className="flex flex-col items-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="size-[64px] sm:size-[72px] md:size-[93px] rounded-full mb-4"
                                    />
                                    <div className="text-dark-blue text-sm relative">
                                        <img src={dotArrow} alt="dotArrow" className='absolute lg:top-[-13%] md:top-[-9%] top-[-3%] lg:left-[1%] md:left-[-1%] left-[1%] w-5 sm:w-auto' />
                                        <p className="text-center text-base text-dark-blue mb-5 xl:w-[517px] lg:max-w-[400px]">{item.description}</p>
                                        <img src={downArrow} alt="downArrow" className='absolute md:bottom-[7%] xl:right-[10%] lg:right-[4%] md:right-[18%] right-[21%] bottom-[11%] w-5 sm:w-auto' />
                                    </div>
                                    <div className="max-w-[140px] sm:max-w-[160px] md:max-w-[192px] mb-3">
                                        <img src={star} alt="star" />
                                    </div>
                                    <p className="text-2xl font-bold">{item.title}</p>
                                    <p className="text-dark-blue">{item.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div>
                    <button className="prev-btn absolute left-[37%] md:left-[43%] bottom-[-4%] lg:left-[-24px] xl:left-[-5%] lg:top-1/2 -translate-y-1/2 cursor-pointer p-2 z-10 transition-transform duration-300 hover:scale-110">
                        <img src={leftArrow} alt="Prev" className="w-7 md:w-8" />
                    </button>
                    <button className="next-btn absolute right-[37%] md:right-[43%] bottom-[-4%] lg:right-[-24px] xl:right-[-5%] lg:top-1/2 -translate-y-1/2 cursor-pointer p-2 z-10 transition-transform duration-300 hover:scale-110">
                        <img src={rightArrow} alt="Next" className="w-7 md:w-8" />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Testimonials;
