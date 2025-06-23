import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { HERO_SLIDES } from '../utils/helper';
import Button from '../components/common/Button';

const Hero = () => {
    return (
        <div className="relative">
            <div className="relative">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                    className="w-full xl:h-[650px] lg:h-[600px] md:h-[450px] h-[420px] rounded-2xl overflow-hidden"
                >
                    {HERO_SLIDES.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div
                                className="w-full h-full bg-cover bg-center flex items-center justify-center text-center px-4"
                                style={{ backgroundImage: `url(${slide.img})` }}
                            >
                                <div className="max-w-2xl text-[#112D49] p-6 rounded-xl">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-[120%]">
                                        {slide.heading}
                                    </h2>
                                    <p className="mb-6">{slide.text}</p>
                                    <div className="flex max-md:flex-col justify-center gap-4">
                                        <Button btnText="Browse Products" btnClass="bg-dark-blue px-5 rounded-full hover:opacity-90 transition text-white" />
                                        <Button btnText="Starter Kits" btnClass="px-5 rounded-full hover:opacity-90 transition" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mt-4 flex justify-center">
                <div className="swiper-pagination" />
            </div>
        </div>

    );
};

export default Hero;
