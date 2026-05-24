import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function FloatingLogo() {
    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            <a 
                href="https://chat.whatsapp.com/JTvuY0Asnrt4h2cgxlIoqu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] bg-[#25D366] hover:bg-[#128C7E] text-white hover:scale-105 transition-all duration-300 group"
            >
                <FaWhatsapp className="text-2xl" />
                <span className="font-medium text-sm md:text-base whitespace-nowrap">Join Community</span>
            </a>
        </div>
    );
}

export default FloatingLogo;
