import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Load cart from localStorage on init
        const saved = localStorage.getItem('cartItems');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        // Save cart to localStorage on changes
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.slug === product.slug);
            if (existing) {
                return prev.map(item =>
                    item.slug === product.slug ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                return [...prev, { ...product, quantity }];
            }
        });
    };

    const removeFromCart = (slug) => {
        setCartItems(prev => prev.filter(item => item.slug !== slug));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
