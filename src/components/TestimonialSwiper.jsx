import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import leftArrow from '../assets/images/svg/left-arrow.svg';
import rightArrow from '../assets/images/svg/right-arrow.svg';
import starIcon from '../assets/images/svg/star.svg';
import { TESTIMONIALS_DATA } from '../utils/helper';

const TestimonialSwiper = () => {
    return (
        <section className="py-16 bg-white relative">
            <div className="text-center mb-12">
                <p className="text-sm text-gray-500">Testimonials</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#112D49]">
                    What Our Client’s Says
                </h2>
            </div>

            {/* Navigation Buttons */}
            <button className="custom-prev absolute left-4 top-[52%] z-10 w-9 h-9 bg-white border rounded-full flex items-center justify-center shadow-md">
                <img src={leftArrow} alt="prev" />
            </button>
            <button className="custom-next absolute right-4 top-[52%] z-10 w-9 h-9 bg-white border rounded-full flex items-center justify-center shadow-md">
                <img src={rightArrow} alt="next" />
            </button>

            {/* Swiper */}
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
                loop
                autoplay={{ delay: 4000 }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                }}
                spaceBetween={30}
                className="max-w-[1140px] mx-auto px-4"
            >
                {TESTIMONIALS_DATA.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={`p-6 rounded-lg h-full text-center ${index % 2 === 1 ? 'bg-white shadow-md' : ''}`}>
                            <div className="w-[88px] h-[88px] rounded-full overflow-hidden mx-auto mb-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Quote */}
                            <p className="text-sm text-gray-600 italic mb-4 relative max-w-[90%] mx-auto">
                                <span className="text-2xl absolute -left-4 -top-2 text-[#ccc]">“</span>
                                {item.description}
                                <span className="text-2xl absolute -right-4 -bottom-2 text-[#ccc]">”</span>
                            </p>

                            {/* Star Rating */}
                            <div className="flex justify-center gap-1 mb-3">
                                {Array(5).fill(0).map((_, i) => (
                                    <img key={i} src={starIcon} alt="star" className="w-4 h-4" />
                                ))}
                            </div>

                            {/* Name & Role */}
                            <h3 className="font-bold text-[#112D49] text-lg">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.role}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default TestimonialSwiper;
