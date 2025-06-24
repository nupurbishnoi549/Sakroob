import React from 'react';
import { BLOG_DATA } from '../utils/helper';

const Blog = () => {
    return (
        <section className="py-16 px-4 bg-white overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#00171F] mb-12">
                Blog, Guides, Build Logs & More
            </h2>

            {/* 1-column until xl, 2-column on xl+ */}
            <div className="grid xl:grid-cols-2 gap-6">
                {BLOG_DATA.map((blog, index) =>
                    blog.fullWidth ? (
                        <div
                            key={index}
                            className={`rounded-xl ${blog.bg} py-8 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between`}
                        >
                            <img
                                src={blog.imgLeft}
                                alt="Left"
                                className="w-[250px] sm:w-[300px] xl:w-[375px] lg:w-[300px] md:w-[200px] h-auto object-contain mb-6 md:mb-0"
                            />
                            <div className="flex-1 px-2 sm:px-4 text-center max-w-full sm:max-w-[445px] mx-auto">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00171F]">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-700 mt-2 text-sm sm:text-base">{blog.desc}</p>
                                <div className="mt-4 flex justify-center">
                                    <button className="text-[#00171F] font-medium flex items-center gap-1 group">
                                        {blog.cta}
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </div>
                            <img
                                src={blog.imgRight}
                                alt="Right"
                                className="w-[250px] sm:w-[300px] xl:w-[365px] lg:w-[300px] md:w-[200px] h-auto object-contain mt-6 md:mt-0"
                            />
                        </div>
                    ) : (
                        <div
                            key={index}
                            className={`relative rounded-xl ${blog.bg} flex flex-col-reverse sm:flex-row justify-between items-start ${index === 0 ? 'pt-6 sm:pt-8 pl-4 sm:pl-8 max-md:pb-6' : 'py-[50px] sm:py-[75px] pl-4 sm:pl-8'
                                } min-h-[300px] sm:min-h-[335px]`}
                        >
                            <div
                                className={`flex-1 px-2 sm:px-4 text-left ${index === 0
                                        ? 'max-w-full sm:max-w-[445px]'
                                        : index === 1
                                            ? 'max-w-full sm:max-w-[390px]'
                                            : 'max-w-full sm:max-w-[410px]'
                                    }`}
                            >
                                <h3 className="text-xl sm:text-[24px] md:text-[32px] font-bold text-[#00171F]">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-700 mt-2 text-sm sm:text-base">{blog.desc}</p>
                                <button className="text-[#00171F] font-medium mt-4 flex items-center gap-1 group">
                                    {blog.cta}
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>

                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    className={`object-contain 
        ${index === 0
                                            ? 'w-[220px] sm:w-[281px] h-[180px] sm:h-[236px]'
                                            : index === 1
                                                ? 'w-[325px] max-md:object-fill sm:w-[286px] md:h-[210px] h-[255px] sm:h-[320px]'
                                                : index === 2
                                                    ? 'w-[200px] md:w-[200px] h-auto mb-4 sm:mb-0'
                                                    : ''
                                        }
        ${index === 0
                                            ? 'sm:absolute sm:right-[1%] sm:bottom-[2%] mb-4 sm:mb-0'
                                            : index === 1
                                                ? 'sm:absolute xl:right-[-7%] lg:right-[-5%] right-[16%] bottom-[28%] md:right-[-7%] md:bottom-[2%] mb-4 sm:mb-0 md:pr-4 sm:pr-0'
                                                : ''
                                        }`
                                    }
                                />

                        </div>
                    )
                )}
            </div>

            <div className="flex justify-center mt-12">
                <button className="bg-[#00171F] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
                    View All Blog Posts
                </button>
            </div>
        </section>
    );
};

export default Blog;
