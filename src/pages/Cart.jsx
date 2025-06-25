import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems } = useCart();

    return (
        <section className="max-w-[1200px] mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-6 text-dark-blue">Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="grid gap-6">
                    {cartItems.map((item, idx) => (
                        <div key={idx} className="border rounded p-4 flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <img src={item.img} alt={item.title} className="w-20 h-20 object-contain" />
                                <div>
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                </div>
                            </div>
                            <p className="font-semibold text-dark-blue">{item.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Cart;
