import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa'

function Navbar({ setIsOpen, isOpen, setFromslow }) {
    const pathname = useLocation()

    const navItems = [
        { name: 'HOME', path: '/' },
        { name: 'BECOME CREATOR', path: '/BecomeaCreator' },
        { name: 'BLOGS', path: '/blogs' },
    ]

    return (
        <nav className="flex items-center justify-between px-6 py-4 fixed top-0 left-0 w-full z-[10000] bg-transparent backdrop-blur-sm md:backdrop-blur-none">
            {/* Logo */}
            <NavLink to={'/'} className="flex items-center gap-2">
                <img src="/img/logoru.png" alt="Logo" className='h-8 sm:h-10' />
            </NavLink>

            {/* Center Links (Desktop) */}
            <div className="hidden md:flex items-center bg-black/40 border border-white/10 rounded-full py-0.5 px-0.5 backdrop-blur-md">
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `px-6 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 ${
                                isActive 
                                ? 'bg-[#333333] text-white shadow-lg' 
                                : 'text-white/50 hover:text-white'
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>

            {/* Right Button (Desktop) */}
            <div className="hidden md:block">
                <button
                    className="bg-white text-black text-sm font-bold px-6 py-2.5 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors"
                    onClick={() => window.open('https://api.rupeeit.in/download', '_blank')}
                >
                    GET STARTED <FaArrowRight size={14} />
                </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                    {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-black/95 border-b border-white/10 flex flex-col items-center gap-6 py-10 md:hidden z-[700] animate-in fade-in slide-in-from-top-4">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `text-lg font-medium transition-colors ${
                                    isActive ? 'text-primary' : 'text-white/70 hover:text-white'
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                    <button
                        className="bg-white text-black font-bold px-8 py-3 rounded-lg flex items-center gap-2 mt-4"
                        onClick={() => {
                            window.open('https://api.rupeeit.in/download', '_blank')
                            setIsOpen(false)
                        }}
                    >
                        GET STARTED <FaArrowRight size={14} />
                    </button>
                </div>
            )}
        </nav>
    )
}

export default Navbar
