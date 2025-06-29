import React from "react";
import { FOOTER_LINKS, SOCIALS, LEGAL_LINKS } from "../utils/helper";
import footerLogo from '../assets/images/png/footer-logo.png';
import SakroobCircle from '../components/SakroobCircle';
import Description from "./common/Description";
import { useLocation } from 'react-router-dom';

const Footer = ({ showSakroob = true }) => {
    const location = useLocation();

    const isProductOrCart = location.pathname.startsWith('/product/') || location.pathname.startsWith('/cart/');

    const topPaddingClass = isProductOrCart ? 'pt-[75px]' : 'pt-[217px]';

    return (
        <div className={`bg-dark-blue text-white  max-w-[1920px] mx-auto ${topPaddingClass} pb-4 px-4 relative`}>
            {showSakroob && !isProductOrCart && (
                <div className='absolute top-[-34%]  xl:left-[11%] 2xl:left-[20%] lg:left-[7%] md:left-[3%] left-0 max-md:px-3'>
                    <SakroobCircle />
                </div>
            )}

            <div className="max-w-[1140px]  mx-auto flex flex-col items-center text-center">
                <img src={footerLogo} alt="Sakroob" className="w-[176px] h-[142px] mb-4 pointer-events-none" />
                <Description
                    descriptionText="Commodo egestas etiam arcu curabitur aliquam volutpat a gravida."
                    descriptionClass="!mb-6 !max-w-[338px] !text-white"
                />

                <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-medium mb-6">
                    {FOOTER_LINKS.map(link => (
                        <a key={link.label} href={link.url} className="hover:underline">{link.label}</a>
                    ))}
                </nav>
                <div className="flex gap-5 mb-8">
                    {SOCIALS.map(social => (
                        <a
                            key={social.alt}
                            href={social.url}
                            aria-label={social.alt}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 cursor-pointer transition-transform duration-300 hover:scale-110"
                        >
                            <social.icon className="w-8 h-8 text-white hover:text-[#73A4E0] transition-colors duration-300" />
                        </a>
                    ))}
                </div>


            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/80 to-transparent my-6" />

            <div className="max-w-[1140px] mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-gray-300 gap-2">
                <div>
                    {LEGAL_LINKS.map((link, idx) => (
                        <React.Fragment key={link.label}>
                            <a href={link.url} className="hover:underline">{link.label}</a>
                            {idx < LEGAL_LINKS.length - 1 && <span className="mx-2">|</span>}
                        </React.Fragment>
                    ))}
                </div>
                <div>&copy; 2025 Skaroob. All Rights Reserved.</div>
            </div>
        </div>
    );
};

export default Footer;
