import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import logo from '../../assets/images/png/logo.png';
import search from '../../assets/images/svg/search.svg';
import { NAV_ITEMS, NAVBAR_ICONS } from '../../utils/helper';

const Navbar = () => {
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
        <div className="bg-[#0A2740] text-white w-full">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20 relative">
                <a href="/" className="flex items-center md:w-[115px] w-22 md:h-[93px] h-22 cursor-pointer">
                    <img src={logo} alt="Logo" className="w-full h-full object-contain md:mt-7" />
                </a>

                {/* Desktop Nav */}
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
                                            className={`text-sm mt-1 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    {openDropdown === item.label && (
                                        <div className="absolute left-0 top-full mt-2 bg-white text-[#0A2740] shadow-md rounded-md py-2 w-56 z-30">
                                            {item.dropdown.map((sub) => (
                                                <a
                                                    key={sub.label}
                                                    href={sub.to}
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
                                    href={item.to}
                                    className="font-medium hover:underline transition-all cursor-pointer"
                                    onClick={closeDropdown}
                                >
                                    {item.label}
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* Desktop Icons */}
                <div className="hidden lg:flex items-center gap-4">
                    {NAVBAR_ICONS.map(({ alt, icon: IconComponent }, index) => (
                        <React.Fragment key={alt}>
                            <IconComponent className="w-5 h-5 cursor-pointer" />
                            {index < NAVBAR_ICONS.length - 1 && <div className="w-[1px] h-6 bg-white" />}
                        </React.Fragment>
                    ))}
                </div>

                {/* Hamburger Button */}
                <button className="lg:hidden z-50 cursor-pointer" onClick={() => setMenuOpen(true)}>
                    <FiMenu size={24} />
                </button>
            </div>

            {/* Search Bar */}
            <div className="bg-[#F1F6FC] py-6 lg:py-4 px-4">
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

            {/* Mobile Menu */}
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
                                                className={`mt-1 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                        {openDropdown === item.label && (
                                            <div className="flex flex-col bg-white text-[#0A2740] w-full items-center">
                                                {item.dropdown.map((sub) => (
                                                    <a
                                                        key={sub.label}
                                                        href={sub.to}
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
                                        href={item.to}
                                        className="block py-2 font-medium hover:underline transition-all cursor-pointer"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                )}
                            </div>
                        ))}

                        <div className="flex justify-center gap-6 pt-6">
                            {NAVBAR_ICONS.map(({ alt, icon: IconComponent }) => (
                                <IconComponent key={alt} className="w-5 h-5 cursor-pointer" />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
