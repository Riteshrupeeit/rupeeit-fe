import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";
import { blogs } from "./blogsheding";


gsap.registerPlugin(ScrollTrigger);

function Blogs() {
    const blogRefs = useRef([]);
    const blogss = blogs
    useEffect(() => {
        // clear previous refs (in case of hot reload)
        const elements = blogRefs.current;

        // Animate each blog card separately
        elements.forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 100 }, // start state
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el, // each blog card is its own trigger
                        start: "top 80%", // start animation when 80% of viewport hits
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);


    return (
        <div className="padding bg-black min-h-screen py-12 mt-10">
            <div className=" mx-auto">
                <div className="flex flex-col gap-8 mt-10">
                    {blogss.map((blog, i) => (
                        <NavLink to={`${blog.url}`}>
                            <article
                                key={i}
                                ref={(el) => (blogRefs.current[i] = el)} // store each card ref
                                className="bg-[#0b0b0b] border border-[#2a2a2a] rounded-2xl overflow-hidden shadow-xl scrolstrigs"
                            >
                                <div className="flex flex-col lg:flex-row items-stretch">
                                    {/* Image */}
                                    <div className="lg:w-1/3 w-full overflow-hidden">
                                        <img
                                            src={blog.img}
                                            alt={blog.title}
                                            className="w-full h-48` sm:h-96 lg:h-full object-cover "
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="lg:w-2/3 w-full p-6 flex flex-col justify-between about-text">
                                        <div>
                                            <p

                                                className="text-xl md:text-[20px] font-semibold text-[#FEB201] mb-3"
                                            >
                                                {blog.title}
                                            </p>

                                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                                {blog.desc}
                                            </p>
                                        </div>

                                        <div className="mt-6 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src="./img/logoru.png"
                                                    alt="Rupeeit"
                                                    className=" rounded-full object-cover max-w-[100px]"
                                                />
                                                <div>
                                                    <p className="text-sm text-white font-light">
                                                        Rupeeit 
                                                    </p>
                                                    <p className="text-xs text-gray-400">{blog.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blogs;
