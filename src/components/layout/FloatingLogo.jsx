import React from 'react'
import { NavLink } from 'react-router-dom'

function FloatingLogo() {
    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            <NavLink 
                to="/" 
                className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden shadow-[0_0_20px_rgba(254,178,1,0.3)] border border-[#FEB201]/30 bg-black/50 backdrop-blur-md hover:scale-110 transition-transform duration-300 group"
            >
                <img 
                    src="/img/logoru.png" 
                    alt="Sticky Logo" 
                    className="w-full h-full object-contain p-2 group-hover:rotate-12 transition-transform"
                />
            </NavLink>
        </div>
    )
}

export default FloatingLogo
