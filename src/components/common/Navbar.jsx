import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { NAV_ITEMS, NAVBAR_ICONS } from '../../utils/helper';
import logo from '../../assets/images/png/logo.png';
import search from '../../assets/images/svg/search.svg';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({});

    const toggleDropdown = (key) => {
        setDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [menuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setDropdownOpen({});
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="bg-[#0A2740] text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 h-20">
                <div className="flex items-center gap-2 md:w-[115px] w-22 md:h-[93px] h-22">
                    <img src={logo} alt="Logo" className="w-full h-full object-contain md:mt-7 mt-" />
                </div>
                <nav className="hidden lg:flex items-center gap-6">
                    {NAV_ITEMS.map((item) => (
                        <div key={item.label} className="relative group">
                            <button
                                className="flex items-center gap-1 text-white font-medium hover:text-gray-200 cursor-pointer"
                                onClick={() => toggleDropdown(item.label)}
                            >
                                {item.label}
                                {item.hasDropdown && <FiChevronDown className="text-xs mt-1" />}
                            </button>
                            {item.hasDropdown && (
                                <div className="absolute left-0 top-full mt-2 bg-white text-[#0A2740] shadow-lg rounded-md py-2 w-56 hidden group-hover:block z-20">
                                    {item.dropdown.map((text) => (
                                        <a
                                            href="#"
                                            key={text}
                                            className="block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                                        >
                                            {text}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
                <div className="hidden lg:flex items-center gap-4">
                    {NAVBAR_ICONS.map((icon, index) => (
                        <React.Fragment key={icon.alt}>
                            <img
                                src={icon.icon}
                                alt={icon.alt}
                                className="w-5 h-5 hover:scale-110 transition-transform duration-200 hover:opacity-80 cursor-pointer"
                            />
                            {index < NAVBAR_ICONS.length - 1 && (
                                <div className="w-[1px] h-6 bg-white" />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <button className="block lg:hidden" onClick={() => setMenuOpen(true)}>
                    <FiMenu size={24} />
                </button>
            </div>
            <div className="bg-[#F1F6FC] py-8 lg:py-4 px-4">
                <div className="max-w-[689px] mx-auto relative group">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full h-[52px] mx-auto rounded-full pl-5 pr-12 text-[#0A2740] placeholder-gray-500 focus:outline-none border border-[#112D491A] text-left transition duration-300 ease-in-out group-hover:border-[#0A2740]"
                    />
                    <img
                        src={search}
                        alt="search"
                        className="w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-70 group-hover:opacity-100"
                    />
                </div>
            </div>
            {menuOpen && (
                <div className="fixed inset-0 bg-[#0A2740] z-50 overflow-y-auto">
                    <div className="flex justify-end p-4">
                        <button onClick={() => setMenuOpen(false)}>
                            <FiX size={24} />
                        </button>
                    </div>

                    <nav className="flex flex-col items-center gap-4 mt-6 px-4">
                        {NAV_ITEMS.map((item) => (
                            <div key={item.label} className="text-center w-full">
                                <button
                                    onClick={() => toggleDropdown(item.label)}
                                    className="flex justify-between w-full px-6 py-2 text-white font-medium"
                                >
                                    {item.label}
                                    {item.hasDropdown && <FiChevronDown className="mt-1" />}
                                </button>
                                {item.hasDropdown && dropdownOpen[item.label] && (
                                    <div className="flex flex-col bg-white text-[#0A2740] w-full">
                                        {item.dropdown.map((text) => (
                                            <a
                                                key={text}
                                                href="#"
                                                className="py-2 px-6 text-sm hover:bg-gray-100"
                                            >
                                                {text}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="flex justify-center gap-6 pt-6">
                            {NAVBAR_ICONS.map((icon) => (
                                <img key={icon.alt} src={icon.icon} alt={icon.alt} className="w-5 h-5" />
                            ))}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;