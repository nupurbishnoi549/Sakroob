import React, { useState, useRef, useLayoutEffect } from 'react';

const tabs = [
    { key: 'reviews', label: 'Reviews', align: 'text-left' },
    { key: 'specs', label: 'Specifications', align: 'text-center' },
    { key: 'faq', label: "FAQ's", align: 'text-right' },
];

const reviewsSummary = [
    { stars: 5, percent: 100 },
    { stars: 4, percent: 88 },
    { stars: 3, percent: 42 },
    { stars: 2, percent: 58 },
    { stars: 1, percent: 20 },
];

const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState('reviews');
    const [showReviewPopup, setShowReviewPopup] = useState(false);
    const tabRefs = useRef([]);
    const indicatorRef = useRef();

    useLayoutEffect(() => {
        const updateIndicator = () => {
            const idx = tabs.findIndex(tab => tab.key === activeTab);
            const tab = tabRefs.current[idx];
            const indicator = indicatorRef.current;
            if (tab && indicator) {
                const container = tab.parentNode;
                indicator.style.width = `${tab.offsetWidth}px`;
                indicator.style.left = `${tab.offsetLeft - container.scrollLeft}px`;
            }
        };

        updateIndicator();
        window.addEventListener('resize', updateIndicator);
        return () => window.removeEventListener('resize', updateIndicator);
    }, [activeTab]);

    return (
        <div className="mt-16 max-w-6xl mx-auto px-2 sm:px-6 relative">
            <div className="relative sm:overflow-x-auto overflow-x-scroll no-scrollbar border-none bg-transparent" style={{ minHeight: 48 }}>
                <div className="flex w-max sm:w-full min-w-full relative sm:justify-between">
                    {tabs.map(({ key, label, align }, i) => (
                        <button
                            key={key}
                            ref={el => tabRefs.current[i] = el}
                            onClick={() => setActiveTab(key)}
                            className={`flex-shrink-0 sm:flex-1 py-2 px-4 text-base sm:text-lg font-semibold bg-transparent focus:outline-none transition-colors duration-200 ${align} ${activeTab === key ? 'text-[#112D49]' : 'text-gray-500 hover:text-[#112D49]'}`}
                        >  {label}
                        </button>
                    ))}
                    <span ref={indicatorRef}
                        className="absolute bottom-0 h-[4px] bg-[#112D49] rounded transition-all duration-300 z-10"
                        style={{ left: 0, width: 0 }} />
                </div>
            </div>
            <div className="w-full my-8 gradient-border"/>
            <div className="rounded-xl shadow border border-[#E5EAF1] bg-white p-6 sm:p-8">
                {activeTab === 'reviews' && (
                    <div>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="flex flex-col lg:min-w-[220px]">
                                <div className="text-[20px] sm:text-[22px] font-semibold text-[#112D49] mb-1">Customer Reviews</div>
                                <div className="mb-2">
                                    <span className="text-[#FFD600] text-xl font-bold">★★★★★</span>
                                    <p className="font-medium text-dark-blue mt-1">Based on 1 review</p>
                                </div>
                                <a href="#" className="text-[#112D49] mt-10 text-sm font-medium hover:underline flex items-center gap-1">
                                    See all Customers Reviews <span className="ml-1">&gt;</span>
                                </a>
                            </div>
                            <div className="flex-1 max-w-full sm:max-w-[360px] pt-4">
                                <div className="space-y-2">
                                    {reviewsSummary.map((r) => (
                                        <div key={r.stars} className="flex items-center gap-2">
                                            <span className="text-sm w-6 gap-1 flex">
                                                <span className="text-dark-blue font-medium">{r.stars}</span>
                                                <span className="text-[#FFD600] font-medium">★</span>
                                            </span>
                                            <div className="flex-1 bg-[#F1F4F9] rounded h-1.5 overflow-hidden">
                                                <div
                                                    className="bg-[#FFD600] h-1.5"
                                                    style={{ width: `${r.percent}%` }}
                                                />
                                            </div>
                                            <span className="text-xs font-semibold text-gray-500 w-8 text-right">{r.percent}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 lg:min-w-[250px] flex flex-col items-start lg:items-end">
                                <div className="rounded-xl p-5 sm:p-6 w-full max-w-xs bg-[#F9FAFB]">
                                    <h4 className="text-lg font-semibold text-[#112D49] mb-1">Review this Product</h4>
                                    <p className="text-xs text-gray-500 mb-4">Share your thought with other customers</p>
                                    <button
                                        className="bg-[#112D49] text-white w-full py-3 rounded-full font-medium shadow hover:bg-[#18314F] transition whitespace-nowrap"
                                        onClick={() => setShowReviewPopup(true)}
                                    >
                                        Write a Customer Review
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="my-8 gradient-border" />
                        <div className="flex items-start gap-4 flex-col sm:flex-row">
                            <img
                                src="https://randomuser.me/api/portraits/women/68.jpg"
                                alt="Kathryn Murphy"
                                className="w-14 h-14 rounded-full object-cover border-2 border-[#E5EAF1]"
                            />
                            <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-[#FFD600] text-base">★★★★★</span>
                                    <span className="text-gray-400 text-xs">23/05/2025</span>
                                </div>
                                <div className="font-semibold text-[#112D49] text-base">Kathryn Murphy</div>
                                <div className="text-gray-600 text-sm mt-2 max-w-2xl">
                                    Excellent router that offers great value for its price...
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'specs' && (
                    <div>
                        <h3 className="text-xl font-semibold text-[#112D49] mb-4">Specifications</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
                            <li>ADSL2+ Router with 300 Mbps speed</li>
                            <li>4 Ethernet Ports + 1 WAN</li>
                            <li>Dual 5dBi External Antennas</li>
                        </ul>
                    </div>
                )}

                {activeTab === 'faq' && (
                    <div className="text-center text-gray-500 text-lg py-12">
                        Coming Soon...
                    </div>
                )}
            </div>
            {showReviewPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                    <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
                        <button
                            className="absolute top-2 right-3 text-gray-500 text-xl hover:text-black"
                            onClick={() => setShowReviewPopup(false)}
                        >
                            &times;
                        </button>
                        <h3 className="text-xl font-bold text-[#112D49] mb-4">Write a Review</h3>
                        <textarea
                            rows={5}
                            placeholder="Share your experience..."
                            className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none resize-none focus:ring-2 focus:ring-[#112D49]"
                        ></textarea>
                        <button
                            className="mt-4 w-full bg-[#112D49] text-white py-2.5 rounded-full font-semibold hover:bg-[#0E243E]"
                            onClick={() => {
                                setShowReviewPopup(false);
                                alert('Review Submitted');
                            }}
                        >
                            Submit Review
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductTabs;
