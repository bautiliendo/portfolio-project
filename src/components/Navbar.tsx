import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';

export const Navbar: React.FC = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[100px] bg-gray-900 text-white z-50'>
            <div className='flex items-center justify-between px-8 max-w-7xl mx-auto w-full'>
                {/* Logo */}
                <div className='flex items-center hover:cursor-pointer'>
                    <img src={Logo} alt='logo img' className='w-[100px]' />
                </div>

                {/* Desktop Menu */}
                <ul className='hidden md:flex space-x-8'>
                    <li className='hover:text-orange-600 transition-colors duration-300 cursor-pointer'>Sobre mí</li>
                    <li className='hover:text-orange-600 transition-colors duration-300 cursor-pointer'>Habilidades</li>
                    <li className='hover:text-orange-600 transition-colors duration-300 cursor-pointer'>Proyectos</li>
                    <li className='hover:text-orange-600 transition-colors duration-300 cursor-pointer'>Contacto</li>
                </ul>

                {/* Hamburger Icon */}
                <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                    {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
                </div>

                {/* Mobile Menu */}
                <ul className={`${!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'} transition-transform duration-300 ease-in-out`}>
                    <li onClick={handleClick} className='py-6 text-2xl hover:text-orange-600 transition-colors duration-300 cursor-pointer'>Sobre mí</li>
                    <li onClick={handleClick} className='py-6 text-2xl hover:text-orange-600 transition-colors duration-300 cursor-pointer'>Habilidades</li>
                    <li onClick={handleClick} className='py-6 text-2xl hover:text-orange-600 transition-colors duration-300 cursor-pointer'>Proyectos</li>
                    <li onClick={handleClick} className='py-6 text-2xl hover:text-orange-600 transition-colors duration-300 cursor-pointer'>Contacto</li>
                </ul>
            </div>
        </div>
    );
}
