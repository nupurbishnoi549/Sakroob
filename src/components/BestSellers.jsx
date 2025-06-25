import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Button from './common/Button.jsx';
import { BESTSELLERS_DATA } from '../utils/helper.js';
import heartIcon from '../assets/images/svg/heart.svg';
import cartIcon from '../assets/images/svg/cart-icon.svg';
import leftArrow from '../assets/images/svg/left-arrow.svg';
import rightArrow from '../assets/images/svg/right-arrow.svg';
import Heading from './common/Heading.jsx';
import { useNavigate } from 'react-router-dom';

const getImageStyle = (title) => {
    if (title.includes('Gaming PC')) return 'w-[220px] h-[260px] bottom-[-30px]';
    if (title.includes('Router')) return 'w-[250px] h-[290px] bottom-[-35px]';
    if (title.includes('Gaming Chair')) return 'w-[180px] h-[336px] bottom-[-40px]';
    return 'w-[220px] h-[260px] bottom-[-30px]';
};

const BestSellers = () => {
    const navigate = useNavigate();

    return (
        <section className="xl:pb-[132px] lg:pb-24 pb-30 bg-white">
            <div className="max-w-[1284px] mx-auto px-4 sm:px-5">
                <Heading headingText="Bestsellers" headingClass="!text-center" />
                <div className="relative mt-12 sm:mt-16">
                    <Swiper
                        spaceBetween={18}
                        slidesPerView={3}
                        loop={true}
                        breakpoints={{
                            320: { slidesPerView: 1, centeredSlides: false },
                            640: { slidesPerView: 2, centeredSlides: false },
                            1020: { slidesPerView: 3, centeredSlides: false },
                        }}
                        modules={[Autoplay, Navigation]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        pagination={false}
                    >
                        {BESTSELLERS_DATA.map((item, index) => (
                            <SwiperSlide key={index} className="flex justify-center !overflow-visible">
                                <div className="relative w-full max-w-[400px] h-[536px] bg-white border border-[#0000001A] shadow-md p-5 rounded-[8px] flex flex-col justify-between mx-auto">
                                    <img src={heartIcon} alt="Heart" className="absolute top-4 right-4 size-8 z-10" />
                                    <div className="relative h-[200px] flex items-end justify-center overflow-visible">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className={`absolute ${getImageStyle(item.title)} object-contain z-10`}
                                        />
                                    </div>
                                    <h3 className="text-xl xl:text-2xl font-bold text-dark-blue lg:mt-5 mt-8 min-h-[48px]">
                                        {item.title}
                                    </h3>
                                    <p className="text-dark-blue text-sm sm:text-base">
                                        {item.description}
                                    </p>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-xl sm:text-2xl font-semibold text-dark-blue">{item.price}</span>
                                        <img src={item.rating} alt="Rating" className="w-[100px] sm:w-[128px]" />
                                    </div>
                                    <div onClick={() => navigate(`/product/${item.slug}`)} className="cursor-pointer flex items-center justify-between gap-4 ">
                                        <Button
                                            btnText="Shop Now"
                                            btnClass="hover:bg-[#112D49] hover:text-white !text-dark-blue px-6 xl:px-[88px]"
                                        />
                                        <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                                            <img src={cartIcon} alt="Cart" className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button className="custom-prev sm:flex absolute xl:left-[-50px] md:left-[40%] lg:left-[43%] bottom-[-17%] lg:bottom-[-15%] left-[36%] xl:bottom-[43%] -translate-y-1/2 z-50">
                        <img src={leftArrow} alt="Prev" className="size-[38px] cursor-pointer" />
                    </button>
                    <button className="custom-next sm:flex absolute xl:right-[-50px] md:right-[40%] lg:right-[45%] bottom-[-17%] lg:bottom-[-15%] right-[36%] xl:bottom-[43%] -translate-y-1/2 z-50">
                        <img src={rightArrow} alt="Next" className="size-[38px] cursor-pointer" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
