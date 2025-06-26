import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import { useCart } from '../context/CartContext';
import ProductTabs from '../components/ProductTabs';
import PopularProducts from '../components/PopularProducts';

const dummyColors = ['#EEF4FB', '#00B894', '#1E90FF'];

const ProductDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [selectedColor, setSelectedColor] = useState(dummyColors[0]);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        fetch('/data/products.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(p => p.slug === slug);
                if (found) {
                    setProduct(found);
                    setSelectedImage(found.img);
                }
            });
    }, [slug]);

    if (!product) {
        return <div className="text-center mt-20 text-xl">Product not found.</div>;
    }

    return (
        <div className="py-12 px-4 max-w-[1284px] mx-auto relative">
            {showSuccessPopup && (
                <div className="fixed bottom-6 right-6 bg-dark-blue text-white px-4 py-3 rounded shadow-lg z-50 animate-slide-in">
                    <p className="text-sm font-semibold">Order placed successfully! 🎉</p>
                </div>
            )}

            <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                    <div
                        className="rounded-lg p-6 flex justify-center items-center transition-all duration-300"
                        style={{ backgroundColor: selectedColor }}
                    >
                        <img
                            src={selectedImage}
                            alt={product.title}
                            className="object-contain w-full max-w-[320px] sm:max-w-sm h-[400px]"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        {dummyColors.map((color, idx) => (
                            <div
                                key={idx}
                                className={`border rounded-lg p-2 w-[156px] h-[124px] flex items-center justify-center bg-white cursor-pointer ${selectedColor === color ? 'ring-2 ring-dark-blue' : ''}`}
                                onClick={() => {
                                    setSelectedImage(product.img);
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

                <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold text-dark-blue mb-4">
                        {product.title}
                    </h1>
                    <p className="text-gray-600 text-base mb-4 max-w-xl">
                        {product.description}
                    </p>
                    <p className="text-2xl font-bold text-dark-blue mb-4">{product.price}</p>
                    <img src={product.rating} alt="Rating" className="w-[120px] mb-6" />

                    <div className="mb-6">
                        <p className="font-medium text-dark-blue">Select Color</p>
                        <div className="flex gap-3 mt-2">
                            {dummyColors.map((color, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mb-10">
                        <p className="font-bold text-[#18314F] mb-2">Select Quantity</p>
                        <div className="flex items-center">
                            <div className="flex overflow-hidden rounded-[8px] border border-[#0000003D]">
                                <button
                                    className="w-[48px] h-[44px] flex items-center justify-center text-white font-bold text-xl"
                                    style={{ backgroundColor: '#73A4E0' }}
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                >
                                    −
                                </button>
                                <span className="w-[85px] h-[44px] flex items-center justify-center text-base font-semibold text-dark-blue bg-white select-none border-y border-[#0000003D]">
                                    {String(quantity).padStart(2, "0")}
                                </span>
                                <button
                                    className="w-[48px] h-[44px] flex items-center justify-center text-white font-bold text-xl"
                                    style={{ backgroundColor: '#112D49' }}
                                    onClick={() => setQuantity(prev => prev + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-6">
                        <Button
                            btnText="Buy Now"
                            btnClass="bg-dark-blue text-white px-6 py-3 rounded hover:bg-[#112D49] w-full sm:w-auto"
                            onClick={() => {
                                setShowSuccessPopup(true);
                                setTimeout(() => setShowSuccessPopup(false), 2500);
                            }}
                        />

                        <Button
                            btnText="Add to cart"
                            btnClass="hover:bg-[#112D49] hover:text-white !text-dark-blue px-6 py-3 rounded w-full sm:w-auto"
                            onClick={() => {
                                addToCart(product, quantity);
                                navigate(`/cart/${slug}`, {
                                    state: { from: `/product/${slug}` }
                                });
                            }}
                        />
                    </div>
                </div>
            </div>

            <ProductTabs />
            <PopularProducts />
        </div>
    );
};

export default ProductDetails;