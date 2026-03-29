import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar({ setIsOpen, isOpen, setFromslow }) {
    const pathname = useLocation()

    return (
        <nav className="flex items-center justify-between padding relative z-[10000] h-auto">
            {/* Logo */}
            <NavLink to={'/'}>
                <img src="/img/logoru.png" alt="Logo" className='max-w-[120px] sm:max-w-[150px]' />
            </NavLink>

            {/* Center Links + Button (Desktop) */}
            <div className="hidden md:flex items-center gap-6 md:w-[68%] xl:w-[60%] justify-between">
                <div className="border border-primary flex items-center gap-5 text-secondri py-2 px-6 md:px-10 rounded-3xl navboxsedo">
                    <NavLink to={'/BecomeaCreator'} className='font-light cursor-pointer'>Become a Creator</NavLink>
                    <NavLink to={'/blogs'} className='font-light cursor-pointer'>Blogs</NavLink>
                </div>

                {/* Show button only if not on BecomeaCreator */}
                {pathname.pathname !== "/BecomeaCreator" && (
                    <button
                        className="text-secondri font-light px-6 md:px-8 py-2 rounded-3xl border bg-[#0E0D05] border-primary navboxsedo
                         ml-6"
                        onClick={() => setFromslow(true)}
                    >
                        Download app
                    </button>
                )}
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes className="text-2xl text-secondri" /> : <FaBars className="text-2xl text-secondri" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-[#0E0D05] border-t border-primary text-secondri flex flex-col items-center gap-4 py-4 md:hidden z-[700]">
                    <NavLink
                        to={'/BecomeaCreator'}
                        onClick={() => setIsOpen(false)}
                        className='font-light cursor-pointer'
                    >
                        Become a Creator
                    </NavLink>
                    <NavLink
                        to={'/blogs'}
                        onClick={() => setIsOpen(false)}
                        className='font-light cursor-pointer'
                    >
                        Blogs
                    </NavLink>
                    <button
                        className="text-secondri font-light px-6 py-2 rounded-3xl border border-primary navboxsedo"
                        onClick={() => {
                            setFromslow(true)
                            setIsOpen(false)
                        }}
                    >
                        Download app
                    </button>
                </div>
            )}
        </nav>
    )
}

export default Navbar
