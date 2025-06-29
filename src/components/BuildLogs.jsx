import React from 'react';
import { BLOG_DATA } from '../utils/helper';
import Heading from './common/Heading';
import CustomButton from './common/CustomButton';
import blogImg from '../assets/images/png/blog-img5.png';

const BuildLogs = () => {
    return (
        <div id='blog' className="xl:pb-[132px] lg:pb-24 md:pb-20 pb-14 px-4 bg-white overflow-hidden max-w-[1920px] mx-auto">
            <Heading headingText="Blog, Guides, Build Logs & More" headingClass="!text-center !mb-16 !max-w-[618px] !mx-auto" />
            <div className="grid xl:grid-cols-2 gap-6">
                {BLOG_DATA.map((blog, index) => {
                    const isFull = blog.fullWidth || index === 2;

                    return isFull ? (
                        <div
                            key={index}
                            className={`rounded-xl ${blog.bg} py-8 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between w-full xl:col-span-2`}
                        >
                            <img
                                src={blog.imgLeft || blog.img}
                                alt="Left"
                                className="w-[250px] sm:w-[300px] xl:w-[375px] lg:w-[300px] md:w-[200px] h-auto object-contain mb-6 md:mb-0"
                            />
                            <div className="flex-1 px-2 sm:px-4 text-center max-w-full sm:max-w-[445px] mx-auto">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-blue">
                                    {blog.title}
                                </h3>
                                <p className="text-dark-blue mt-2 text-sm sm:text-base">{blog.description}</p>
                                <div className="mt-4 flex justify-center">
                                    <button className="text-dark-blue font-medium flex items-center gap-1 group">
                                        {blog.cta}
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </div>
                            {blog.imgRight && (
                                <img
                                    src={blog.imgRight}
                                    alt="Right"
                                    className="w-[250px] pointer-events-none sm:w-[300px] xl:w-[365px] lg:w-[300px] md:w-[200px] h-auto object-contain mt-6 md:mt-0"
                                />
                            )}
                        </div>
                    ) : (
                        <div
                            key={index}
                            className={`relative rounded-xl ${blog.bg} flex flex-col-reverse sm:flex-row justify-between items-start ${index === 0
                                ? 'pt-6 sm:pt-8 pl-4 sm:pl-8 max-md:pb-6'
                                : 'md:py-[50px] max-md:pb-8 sm:py-[75px] pl-4 sm:pl-8'
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
                                <h3 className="text-xl sm:text-[24px] md:text-[32px] font-bold text-dark-blue">
                                    {blog.title}
                                </h3>
                                <p className="text-dark-blue mt-2 text-sm sm:text-base">{blog.description}</p>
                                <button className="text-dark-blue cursor-pointer font-medium mt-4 flex items-center gap-1 group">
                                    {blog.cta}
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                            {index === 1 ? (
                                <>
                                    <img
                                        src={blog.img}
                                        alt={blog.title}
                                        className="hidden md:block object-contain w-[325px] sm:w-[274px] md:h-[320px] h-[200px] sm:h-[320px] pointer-events-none sm:absolute xl:right-[-7%] lg:right-[-5%] right-[16%] bottom-[28%] md:right-[-7%] md:bottom-[2%] mb-4 sm:mb-0 md:pr-4 sm:pr-0"
                                    />
                                    <img
                                        src={blogImg}
                                        alt="Alternate Blog Image"
                                        className="block md:hidden object-contain w-[276px] mb-8 h-[153px] mx-auto pointer-events-none"
                                    />
                                </>
                            ) : (
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    className={`object-contain
                                        ${index === 0
                                            ? 'w-[220px] sm:w-[281px] h-[180px] sm:h-[236px] pointer-events-none sm:absolute sm:right-[1%] sm:bottom-[2%] mb-4 sm:mb-0'
                                            : ''}`}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-center mt-12">
                <CustomButton btnText="View All Blog Posts" btnClass="bg-dark-blue px-5 rounded-full text-white" />
            </div>
        </div>
    );
};

export default BuildLogs;
