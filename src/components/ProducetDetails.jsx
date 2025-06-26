import React from "react";

const ProductDetails = ({ data }) => {
    const {
        title = "",
        description = "",
        price = "",
        rating = 0,
        images = [],
        colors = []
    } = data || {};

    const fallbackImage = "/placeholder.png";

    return (
        <div className="bg-[#F8FAFC] py-8 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
                <img
                    src={images[0] || fallbackImage}
                    alt="Main Product"
                    className="rounded w-full object-contain"
                />
                <div className="flex gap-2 mt-4">
                    {images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img || fallbackImage}
                            alt={`Thumb ${idx + 1}`}
                            className="w-16 h-16 object-contain border rounded"
                        />
                    ))}
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-semibold mb-2">{title}</h1>
                <p className="mb-4 text-gray-600">{description}</p>
                <p className="text-xl font-bold mb-2">{price}</p>
                <div className="flex gap-1 mb-4">
                    {[...Array(rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                    ))}
                </div>
                <div className="mb-4">
                    <p className="font-medium">Select Color</p>
                    <div className="flex gap-3 mt-2">
                        {colors.map((color, i) => (
                            <div
                                key={i}
                                className="w-6 h-6 rounded-full border-2"
                                style={{ backgroundColor: color }}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="mb-6">
                    <p className="font-medium">Select Quantity</p>
                    <div className="flex items-center mt-2 border rounded w-max px-2">
                        <button className="px-2">-</button>
                        <span className="px-2">01</span>
                        <button className="px-2">+</button>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="bg-[#0A2740] text-white px-6 py-2 rounded">
                        Buy Now
                    </button>
                    <button className="border border-[#0A2740] text-[#0A2740] px-6 py-2 rounded">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
