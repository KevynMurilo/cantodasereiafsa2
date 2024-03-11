import React, { useState, useEffect, useRef } from "react";
import { AiOutlineWhatsApp, AiFillInstagram } from "react-icons/ai";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiAlignJustify } from "react-icons/fi";

import iconLogoMobile from "../../assets/iconMobile.webp";
import iconLogoDesktop from "../../assets/icon.webp";

export default function NavBar2() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    const handleItemClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const whatsappNumber = '5561981661974';

    return (
        <>
            {/* MOBILE */}
            <nav className="w-screen flex items-center justify-between pt-5 px-4 absolute top-0 lg:hidden" style={{ zIndex: 99 }}>
                <img src={iconLogoMobile} alt="iconLogoMobile" className="w-16 h-auto" width="100" height="100" loading="lazy" />
                <FiAlignJustify
                    className="text-white text-4xl sm:text-4xl md:text-3xl lg:text-2xl xl:text-xl cursor-pointer"
                    onClick={toggleMenu}
                />
                {menuOpen && (
                    <div ref={menuRef} className="absolute top-0 left-0 w-full bg-gray-800 text-white py-4 shadow-lg" style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <ul className="flex flex-col items-center">
                        <li className="my-2">
                            <a href="#about" className="text-lg hover:text-gray-400 transition-colors duration-300" onClick={handleItemClick}>Sobre</a>
                        </li>
                        <li className="my-2">
                            <a href="#specialties" className="text-lg hover:text-gray-400 transition-colors duration-300" onClick={handleItemClick}>Especialidades</a>
                        </li>
                        <li className="my-2">
                            <a href="#menuu" className="text-lg hover:text-gray-400 transition-colors duration-300" onClick={handleItemClick}>Menu</a>
                        </li>
                        <li className="my-2">
                            <a href="#moment" className="text-lg hover:text-gray-400 transition-colors duration-300" onClick={handleItemClick}>Momento</a>
                        </li>
                        <li className="my-2">
                            <a href="#location" className="text-lg hover:text-gray-400 transition-colors duration-300" onClick={handleItemClick}>Localização</a>
                        </li>
                        <div className="flex justify-around mt-6 gap-6">
                            <a href="https://www.instagram.com/cantodasereia_lagoafeia/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-white text-3xl hover:text-gray-400 transition-colors duration-300 cursor-pointer" />
                            </a>
                            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="text-white text-3xl hover:text-gray-400 transition-colors duration-300 cursor-pointer" />
                            </a>
                        </div>
                    </ul>
                    </div>
                )}
            </nav>


            {/* DESKTOP */}
            <nav className="hidden lg:flex lg:items-center justify-between absolute top-0 left-0 right-0 container mx-auto max-w-[2500px] z-50">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={iconLogoDesktop} alt="iconLogoDesktop" className="w-40 h-auto mr-4" />
                </div>

                {/* Menu */}
                <div>
                    <ul className="flex justify-center space-x-10">
                        <li className="cursor-pointer text-lg hover:text-aquamarine-text">
                            <a href="#aboutD" className="text-black text-lg hover:text-aquamarine-text">Sobre</a>
                        </li>
                        <li className="cursor-pointer text-lg hover:text-aquamarine-text">
                            <a href="#specialtiesD" className="text-black text-lg hover:text-aquamarine-text">Especialidades</a>
                        </li>
                        <li className="cursor-pointer text-lg hover:text-aquamarine-text">
                            <a href="#menuuD" className="text-black text-lg hover:text-aquamarine-text">Menu</a>
                        </li>
                        <li className="cursor-pointer text-lg hover:text-aquamarine-text">
                            <a href="#moment" className="text-black text-lg hover:text-aquamarine-text">Momento</a>
                        </li>
                        <li className="cursor-pointer text-lg hover:text-aquamarine-text">
                            <a href="#locationD" className="text-black text-lg hover:text-aquamarine-text">Localização</a>
                        </li>
                    </ul>
                </div>

                {/* Ícones */}
                <div className="flex items-center gap-2">
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                        <AiOutlineWhatsApp className="text-4xl mx-2 lg:mx-4 cursor-pointer text-white" />
                    </a>

                    <a href="https://www.instagram.com/cantodasereia_lagoafeia/" target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram className="text-4xl mx-2 lg:mx-4 cursor-pointer text-white" />
                    </a>
                </div>
            </nav>
        </>
    );
}
