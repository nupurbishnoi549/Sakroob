import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BESTSELLERS_DATA } from '../utils/helper';
import Button from '../components/common/Button';
import cartIcon from '../assets/images/svg/cart-icon.svg';

const dummyColors = ['#000000', '#00B894', '#1E90FF'];

const ProductDetails = () => {
    const { slug } = useParams();
    const product = BESTSELLERS_DATA.find(
        (item) => item.title.toLowerCase().replace(/\s+/g, '-') === slug
    );

    const [selectedColor, setSelectedColor] = useState(dummyColors[0]);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(product?.img);

    if (!product) {
        return <div className="text-center mt-20 text-xl">Product not found.</div>;
    }

    return (
        <section className="py-12 px-4 max-w-[1284px] mx-auto">
            <div className="flex flex-col md:flex-row gap-10">
                {/* Image Section */}
                <div className="flex-1">
                    <div className="bg-[#EEF4FF] rounded-lg p-6 flex justify-center items-center">
                        <img
                            src={selectedImage}
                            alt={product.title}
                            className="object-contain w-full max-w-sm h-[430px]"
                        />
                    </div>
                    <div className="flex gap-4 mt-4 justify-center">
                        {dummyColors.map((color, idx) => (
                            <div
                                key={idx}
                                className={`border rounded-lg p-2 w-[156px] h-[124px] flex items-center justify-center bg-white cursor-pointer ${selectedColor === color ? 'ring-2 ring-dark-blue' : ''}`}
                                onClick={() => {
                                    setSelectedImage(product.img); // can be extended with variant image
                                    setSelectedColor(color);
                                }}
                            >
                                <img
                                    src={product.img}
                                    alt={`Thumbnail ${idx}`}
                                    className="object-contain h-full"
                                    style={{
                                        filter: selectedColor === color ? 'grayscale(0)' : 'grayscale(60%)'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info Section */}
                <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold text-dark-blue mb-4">
                        {product.title}
                    </h1>
                    <p className="text-gray-600 text-base mb-4 max-w-xl">
                        The D-Link DSL-2790U is a high-speed ADSL2+ wireless router with speeds up to 300 Mbps—ideal for browsing, streaming, and gaming. It features four Ethernet ports, strong security, and guest network support. Perfect for reliable internet in homes and small offices.
                    </p>
                    <p className="text-2xl font-bold text-dark-blue mb-4">{product.price}</p>
                    <img src={product.rating} alt="Rating" className="w-[120px] mb-4" />

                    {/* Select Color */}
                    <div className="mb-4">
                        <p className="font-medium text-dark-blue">Select Color</p>
                        <div className="flex gap-3 mt-[10px]">
                            {dummyColors.map((color, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
                                    style={{ backgroundColor: color }}
                                ></button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity */}
                    <div className="mb-10">
                        <p className="font-bold text-[#18314F] text-2xl mb-6">Select Quantity</p>
                        <div className="flex items-center">
                            <div className="flex overflow-hidden rounded-[16px] shadow border border-[#E2E8F0]">
                                {/* Minus Button */}
                                <button
                                    className="w-16 h-11 flex items-center cursor-pointer justify-center bg-[#7CB3F5] text-white text-3xl font-bold transition hover:bg-[#5a9be6] focus:outline-none"
                                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                    aria-label="Decrease quantity"
                                    style={{ borderTopLeftRadius: "16px", borderBottomLeftRadius: "16px" }}
                                >
                                    <span className="text-3xl font-bold">−</span>
                                </button>
                                {/* Quantity Display */}
                                <span className="w-20 h-11 flex items-center justify-center text-xl  text-dark-blue bg-white select-none">
                                    {String(quantity).padStart(2, "0")}
                                </span>
                                {/* Plus Button */}
                                <button
                                    className="w-16 h-11 flex items-center cursor-pointer justify-center bg-[#18314F] text-white text-3xl font-bold transition hover:bg-[#10243b] focus:outline-none"
                                    onClick={() => setQuantity((prev) => prev + 1)}
                                    aria-label="Increase quantity"
                                    style={{ borderTopRightRadius: "16px", borderBottomRightRadius: "16px" }}
                                >
                                    <span className="text-3xl font-bold">+</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-col gap-5">
                        <Button
                            btnText="Buy Now"
                            btnClass="bg-dark-blue text-white px-6 py-2 rounded hover:bg-[#112D49] w-full sm:w-auto"
                        />
                        <Button
                            btnText="Add to cart"
                            btnClass="hover:bg-[#112D49] hover:text-white !text-dark-blue px-6 py-2 rounded hover:bg-[#112D49] w-full sm:w-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
