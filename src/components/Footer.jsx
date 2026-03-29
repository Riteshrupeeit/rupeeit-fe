import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 padding2 py-12 mt-14">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">

                {/* Logo + About */}
                <div>
                    <NavLink to='/'>
                        <img src="/img/logoru.png" alt="Logo" className="w-36 mb-4 mx-auto md:mx-0 cursor-pointer" />
                    </NavLink>
                    {/* <p className="text-sm leading-relaxed">
                        Empowering businesses with modern digital solutions. We strive to deliver value and creativity.
                    </p> */}
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li><NavLink to="/" className="hover:text-yellow-400 transition" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</NavLink></li>
                        <li><NavLink to="/Blogs" className="hover:text-yellow-400 transition">Blogs</NavLink></li>
                        <li><NavLink to="/BecomeaCreator" className="hover:text-yellow-400 transition">Become A Creator</NavLink></li>
                        <li><NavLink to="/terms-conditions" className="hover:text-yellow-400 transition">Terms & Conditions</NavLink></li>
                        <li><NavLink to="/privacy-policy" className="hover:text-yellow-400 transition">Privacy Policy</NavLink></li>

                    </ul>
                </div>

                {/* Company Links */}
                {/* <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Company</h2>
                    <ul className="space-y-2 text-sm">
                        <li><NavLink to="/terms" className="hover:text-yellow-400 transition">Terms & Conditions</NavLink></li>
                        <li><NavLink to="/refund-policy" className="hover:text-yellow-400 transition">Refund Policy</NavLink></li>
                        <li><NavLink to="/privacy-policy" className="hover:text-yellow-400 transition">Privacy Policy</NavLink></li>
                    </ul>
                </div> */}

                {/* Contact & Socials */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact</h2>
                    <p className="text-sm mb-1 hover:text-yellow-400 cursor-pointer">📧 Support : Support@rupeeit.in</p>
                    <p className="text-sm mb-4 hover:text-yellow-400 cursor-pointer">📧 Enquiry : connect@rupeeit.in</p>
                    <div className="flex justify-center md:justify-start space-x-4 text-xl mt-4">
                        <a href="https://www.linkedin.com/company/rupeeit/" className="hover:text-yellow-400"><FaLinkedinIn /></a>
                        <a href="https://www.facebook.com/profile.php?id=61579010946823&rdid=xCjSWDa9NwIX7epG#" className="hover:text-yellow-400"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/rupeeit.in?igsh=MW5menNkbzBkMWI3bQ%3D%3D&utm_source=qr" className="hover:text-yellow-400"><FaInstagram /></a>
                        <a href="https://www.youtube.com/@rupeeit" className="hover:text-yellow-400"><FiYoutube /></a>
                    </div>
                </div>
            </div>

            {/* Address + Copyright */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center space-y-4">
                <p className="text-gray-400 hover:text-yellow-400 cursor-pointer">
                    📍 WeWork Latitude, 9th floor, RMZ Latitude Commercial, Bellary Road, Hebbal, Near Godrej Apt, Bangalore, Karnataka 560024
                </p>
                <p className="text-gray-500">© {new Date().getFullYear()} Rupeeit. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
