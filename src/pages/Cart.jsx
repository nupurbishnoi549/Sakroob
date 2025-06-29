import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CustomButton from '../components/common/CustomButton';
import trash from '../assets/images/svg/trash.svg';

const Cart = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { cartItems, addToCart, removeFromCart } = useCart();

    const product = cartItems.find(item => item.slug === slug);
    const fromPage = location.state?.from || `/product/${slug}`;

    const handleIncrement = () => addToCart(product, 1);
    const handleDecrement = () => {
        if (product?.quantity > 1) addToCart(product, -1);
    };

    const getNumericPrice = (priceStr) =>
        parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;

    const totalPrice = (
        getNumericPrice(product?.price || '') * product?.quantity
    ).toFixed(2);

    if (!product) return null;

    return (
        <div className="max-w-[1140px] mx-auto px-4 py-12 relative">
            <div className="absolute top-14 right-4">
                <button
                    onClick={() => navigate('/')}
                    className="text-sm font-medium text-dark-blue underline"
                >
                    Continue Shopping
                </button>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue mb-10  md:text-left">Your cart</h2>

            <div className="bg-[#F4F8F7] rounded-md overflow-hidden">
                <div className="hidden md:flex justify-between items-center border-b border-[#112D491A] bg-[#F5F5F5] px-6 py-4 font-medium text-dark-blue text-lg">
                    <p className="w-1/2">Product</p>
                    <p className="w-1/4 text-center">Quantity</p>
                    <p className="w-1/3 text-right pr-5">Total</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 items-center px-6 py-8 border-t bg-[#F8F9FA]">
                    <div className="flex max-md:flex-wrap items-center gap-4 w-full md:w-1/2">
                        <div className="relative w-[120px] h-[120px] border border-[#00000033] rounded-lg bg-[#E9E9E9]">
                            <img src={product.img} alt={product.title} className="w-full h-full object-contain pointer-events-none" />
                            <span className="absolute top-[-12px] right-[-12px] bg-[#C7C7C7] text-white text-xs font-semibold px-3 py-[6px] rounded-full shadow-lg">
                                {product.quantity}
                            </span>
                        </div>
                        <div>
                            <p className="font-medium text-dark-blue text-lg sm:text-xl">{product.title}</p>
                            <p className="text-sm text-gray-500">{product.price}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-1/4 md:justify-center">
                        <div className="flex overflow-hidden rounded border border-[#0000003D]">
                            <button
                                className="size-[36px] cursor-pointer flex items-center justify-center text-white text-lg font-bold"
                                style={{ backgroundColor: '#73A4E0' }}
                                onClick={handleDecrement}
                            >
                                −
                            </button>
                            <span className="w-[60px] h-[36px] flex items-center justify-center text-sm font-semibold text-dark-blue bg-white select-none border-y border-[#0000003D]">
                                {String(product.quantity).padStart(2, '0')}
                            </span>
                            <button
                                className="size-[36px] cursor-pointer flex items-center justify-center text-white text-lg font-bold"
                                style={{ backgroundColor: '#112D49' }}
                                onClick={handleIncrement}
                            >
                                +
                            </button>
                        </div>
                        <button
                            onClick={() => {
                                removeFromCart(product.slug);
                                navigate(fromPage);
                            }}
                            className="size-[36px] cursor-pointer flex items-center justify-center opacity-70 hover:opacity-100 transition"
                        >
                            <img src={trash} alt="Delete" className="size-8" />
                        </button>
                    </div>
                    <div className="w-full md:w-1/4 md:text-right text-dark-blue font-semibold text-base md:text-sm">
                        ₹ {totalPrice}
                    </div>
                </div>
                <div className="md:mt-10 flex flex-col items-end gap-4 px-6 pb-6">
                    <div className="space-y-2 w-full sm:w-[328px]">
                        <div className="flex items-center justify-between">
                            <p className="text-dark-blue font-semibold">Estimated Total</p>
                            <p className="text-dark-blue font-bold">Dhs. ₹{totalPrice}</p>
                        </div>
                        <p className="text-dark-blue text-sm">
                            Taxes, discounts and shipping calculated at checkout.
                        </p>
                        <CustomButton
                            btnText="Check Out"
                            btnClass="bg-[#112D49] mt-6 text-white px-10 py-2.5 w-full rounded-full text-sm font-semibold"
                            onClick={() => navigate(`/checkout/${slug}`)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
