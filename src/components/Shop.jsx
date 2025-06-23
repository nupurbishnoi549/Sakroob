// Shop.jsx
import React from 'react'
import { SHOP_DATA } from '../utils/helper'

const Shop = () => {
    return (
        <section className="py-14 bg-white text-center px-4">
            <p className="text-sm text-gray-500 italic">Featured Categories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#112D49] mb-10">
                Shop Our Most Popular Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {SHOP_DATA.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-xl px-5 pt-6 pb-4 flex flex-col justify-between items-start min-h-[240px] transition"
                        style={{ backgroundColor: item.bgColor || '#DCEEFF' }}
                    >
                        <h3 className="text-lg md:text-xl font-semibold text-[#112D49] mb-4">{item.title}</h3>
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full object-contain max-h-[120px] ml-auto"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Shop
