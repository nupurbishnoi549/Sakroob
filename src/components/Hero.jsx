import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { HERO_SLIDES } from '../utils/helper';
import CustomButton from '../components/common/CustomButton';

const Hero = () => {
    return (
        <div id='standard-pc' className="relative px-4 pb-[43px]  max-w-[1920px] mx-auto">
            <div className="relative">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{
                        el: '.custom-swiper-pagination',
                        clickable: true
                    }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    className="w-full xl:h-[650px] lg:h-[600px] md:h-[530px] h-[450px] rounded-2xl overflow-hidden"
                >
                    {HERO_SLIDES.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div
                                className="w-full h-full slider-bg-img bg-cover bg-center flex items-center justify-center text-center px-4"
                            >
                                <div className="max-w-2xl text-dark-blue p-6 max-md:pb-0 max-md:pt-26 rounded-xl">
                                    <h2 className="text-[28px] md:text-5xl font-bold mb-4 leading-[120%]">
                                        {slide.heading}
                                    </h2>
                                    <p className="mb-6 max-w-[460px] mx-auto">{slide.text}</p>
                                    <div className="flex max-md:flex-col justify-center gap-4">
                                        <CustomButton btnText="Browse Products" btnClass="bg-dark-blue px-5 rounded-full text-white" />
                                        <CustomButton btnText="Starter Kits" btnClass="px-5 rounded-full hover:bg-[#112D49] hover:text-white" />

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-swiper-pagination mt-4 flex justify-center" />
            </div>

        </div>

    );
};

export default Hero;
