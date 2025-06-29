import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import logo from '../../assets/images/png/logo.png';
import logo2 from '../../assets/images/png/logo-2.png';
import search from '../../assets/images/svg/search.svg';
import { NAV_ITEMS, NAVBAR_ICONS } from '../../utils/helper';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = (label) => {
        setOpenDropdown((prev) => (prev === label ? null : label));
    };

    const closeDropdown = () => setOpenDropdown(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMenuOpen(false);
                closeDropdown();
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', menuOpen);
    }, [menuOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="bg-[#0A2740] text-white w-full max-w-[1920px] mx-auto">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20 relative">
                <a href="/" className="flex items-center xl:w-[115px] w-22 xl:h-[93px] h-[80px] cursor-pointer">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-full hidden lg:block h-full object-contain mt-11 pointer-events-none"
                    />
                    <img
                        src={logo2}
                        alt="Logo2"
                        className="h-full block lg:hidden object-contain w-18 pointer-events-none"
                    />
                </a>

                <div className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
                    {NAV_ITEMS.map((item) => (
                        <div key={item.label} className="relative group">
                            {item.hasDropdown ? (
                                <>
                                    <button
                                        className="flex items-center gap-1 font-medium hover:underline transition-all cursor-pointer"
                                        onClick={() => toggleDropdown(item.label)}
                                    >
                                        {item.label}
                                        <FiChevronDown
                                            className={`text-sm mt-1 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    {openDropdown === item.label && (
                                        <div className="absolute left-0 top-full mt-2 bg-white text-[#0A2740] shadow-md rounded-md py-2 w-56 z-30">
                                            {item.dropdown.map((sub) => (
                                                <a
                                                    key={sub.label}
                                                    href={sub.link}
                                                    onClick={closeDropdown}
                                                    className="block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap border-b last:border-b-0 cursor-pointer"
                                                >
                                                    {sub.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <a
                                    href={item.link}
                                    className="font-medium hover:underline transition-all cursor-pointer"
                                    onClick={closeDropdown}
                                >
                                    {item.label}
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    {NAVBAR_ICONS.map((icon, index) => (
                        <React.Fragment key={icon.alt}>
                            <img
                                src={icon.icon}
                                alt={icon.alt}
                                className="xl:w-8 xl:h-8 w-6 h-6 cursor-pointer"
                            />
                            {index < NAVBAR_ICONS.length - 1 && <div className="w-[1px] h-6 bg-white" />}
                        </React.Fragment>
                    ))}
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden z-50 w-9 h-8 flex flex-col justify-between items-start relative"
                    aria-label="Menu"
                >
                    <span className={`absolute left-0 h-[3px] bg-white rounded transition-all duration-300 ease-in-out 
                        ${menuOpen ? 'rotate-45 top-[14px] w-9' : 'top-[6px] w-6 translate-x-[12px]'}`}
                    />
                    <span className={`absolute left-0 h-[3px] bg-white rounded transition-all duration-300 ease-in-out 
                        ${menuOpen ? 'opacity-0 top-[14px]' : 'top-[14px] w-9'}`}
                    />
                    <span className={`absolute left-0 h-[3px] bg-white rounded transition-all duration-300 ease-in-out 
                        ${menuOpen ? '-rotate-45 top-[14px] w-9' : 'top-[22px] w-5'}`}
                    />
                </button>
            </div>

            <div className="bg-[#F1F6FC] py-4 px-4">
                <div className="max-w-[689px] mx-auto relative group">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full h-[52px] rounded-full pl-5 pr-12 text-[#0A2740] border placeholder-gray-500 focus:outline-none group-hover:border-[#0A2740]"
                    />
                    <img
                        src={search}
                        alt="search"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer opacity-70 group-hover:opacity-100"
                    />
                </div>
            </div>

            {menuOpen && (
                <div className="fixed inset-0 bg-[#0A2740] z-50 overflow-y-auto text-white">
                    <div className="flex justify-end p-4">
                        <button onClick={() => setMenuOpen(false)} className="cursor-pointer">
                            <FiX size={24} />
                        </button>
                    </div>

                    <div className="flex flex-col items-center gap-4 mt-6 px-4" ref={dropdownRef}>
                        {NAV_ITEMS.map((item) => (
                            <div key={item.label} className="text-center w-full">
                                {item.hasDropdown ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(item.label)}
                                            className="flex items-center justify-center gap-1 w-full px-6 py-2 font-medium cursor-pointer"
                                        >
                                            {item.label}
                                            <FiChevronDown
                                                className={`mt-1 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        {openDropdown === item.label && (
                                            <div className="flex flex-col bg-white text-[#0A2740] w-full items-center">
                                                {item.dropdown.map((sub) => (
                                                    <a
                                                        key={sub.label}
                                                        href={sub.link}
                                                        onClick={() => {
                                                            closeDropdown();
                                                            setMenuOpen(false);
                                                        }}
                                                        className="py-2 px-6 text-sm hover:bg-gray-100 w-full text-center border-b last:border-b-0 cursor-pointer"
                                                    >
                                                        {sub.label}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <a
                                        href={item.link}
                                        className="block py-2 font-medium hover:underline transition-all cursor-pointer"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                )}
                            </div>
                        ))}

                        <div className="flex justify-center gap-6 pt-6">
                            {NAVBAR_ICONS.map((icon) => (
                                <img
                                    key={icon.name}
                                    src={icon.icon}
                                    alt={icon.name}
                                    className="w-6 h-6 cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
