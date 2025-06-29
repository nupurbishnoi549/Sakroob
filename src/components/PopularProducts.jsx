import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { POPULAR_PRODUCT } from '../utils/helper';
import CustomButton from './common/CustomButton';
import cartIcon from '../assets/images/svg/cart-icon.svg';
import heartIcon from '../assets/images/svg/heart.svg';
import Heading from './common/Heading';
import ratingImage from '../assets/images/svg/star.svg';

const PopularProducts = () => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    const handleExploreClick = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2500); 
    };

    return (
        <div className="mt-16 max-w-[1140px] mx-auto px-4 sm:px-6 relative xl:pb-[132px] lg:pb-20 md:pb-16 pb-10">
            <Heading headingText="Popular Products" headingClass="!mb-20 text-center" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-lg:gap-y-19">
                {POPULAR_PRODUCT.slice(0, 3).map((item) => {
                    const slug = item.title.toLowerCase().replace(/\s+/g, '-');
                    return (
                        <div
                            key={item.id}
                            className="bg-white border-black rounded-lg shadow p-4 sm:p-5 flex flex-col text-left"
                        >
                            <div className="relative bg-[#E5E4E2] rounded-md w-full h-[220px] flex items-center justify-center overflow-visible">
                                <img src={heartIcon} alt="Heart" className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 z-10" />
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="absolute pointer-events-none top-[-31%] w-[180px] h-[240px] sm:w-[206px] sm:h-[274px] object-contain"
                                />
                            </div>
                            <h3 className="text-[16px] sm:text-[18px] font-semibold text-dark-blue mt-5 leading-snug">
                                {item.title}
                            </h3>
                            <p className="text-[12px] sm:text-[13px] text-dark-blue mt-2 leading-normal">
                                Tempered glass case with clean cable management and optimized airflow.
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-lg sm:text-xl font-semibold text-dark-blue">{item.price}</span>
                                <img src={ratingImage} alt="Rating" className="w-[90px] sm:w-[128px]" />
                            </div>
                            <div className="mt-5 cursor-pointer flex items-center justify-between gap-4">
                                <CustomButton
                                    btnText="Shop Now"
                                    btnClass="sm:w-auto hover:bg-[#112D49] hover:text-white !whitespace-nowrap !text-dark-blue px-12 xl:px-[68px]"
                                />
                                <div className="flex items-center justify-center">
                                    <img src={cartIcon} alt="Cart" className="size-[48px]" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center mt-10">
                <CustomButton
                    btnText="Explore All Products"
                    btnClass="bg-dark-blue px-6 py-2 rounded-full text-white text-sm hover:bg-[#0a2d4f] transition"
                    onClick={handleExploreClick}
                />
            </div>
            {showPopup && (
                <div className="fixed bottom-6 right-6 bg-dark-blue text-white px-4 py-3 rounded-md shadow-lg z-50 animate-slide-in">
                    More products coming soon!
                </div>
            )}
        </div>
    );
};

export default PopularProducts;
