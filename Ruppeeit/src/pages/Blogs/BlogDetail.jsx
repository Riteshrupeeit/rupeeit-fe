import React from "react";
import { useParams } from "react-router-dom";
import blogData from "./blogData";

function BlogDetail() {
    const { url } = useParams();
    const blog = blogData.find((b) => b.url === url);

    if (!blog) {
        return (
            <div className="text-center text-red-500 mt-10">
                Blog not found 🚫
            </div>
        );
    }

    // Helper function to render nested lists with proper bullet spacing
    const renderList = (list) => (
        <ul className="text-gray-300 mb-6 space-y-2">
            {list.map((item, idx) => {
                if (Array.isArray(item)) {
                    const [first, ...rest] = item;
                    return (
                        <React.Fragment key={idx}>
                            <li className="list-disc list-inside font-medium">{first}</li>
                            {rest.map((subItem, subIdx) => (
                                <li
                                    key={`${idx}-${subIdx}`}
                                    className="ml-4 md:ml-6 list-disc list-inside text-gray-300"
                                >
                                    {subItem}
                                </li>
                            ))}
                        </React.Fragment>
                    );
                }
                return (
                    <li key={idx} className="list-disc list-inside text-gray-300">
                        {item}
                    </li>
                );
            })}
        </ul>
    );

    return (
        <div className="px-2 sm:px-6 lg:px-8 mt-10 text-white">
            <div className="max-w-4xl mx-auto bg-[#0b0b0b] border border-[#2a2a2a] rounded-2xl shadow-lg overflow-hidden">
                {/* Blog Image */}
                <div className="w-full">
                    <img
                        src={blog.img}
                        alt={blog.title}
                        className="w-full h-[12rem] sm:h-72 md:h-[460px] object-cover"
                    />
                </div>

                {/* Blog Content */}
                <div className="p-4 sm:p-6 md:p-10">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FEB201] mb-6 leading-snug">
                        {blog.title}
                    </h1>

                    {/* Loop Sections */}
                    {blog.sections.map((section, i) => (
                        <div key={i} className="mb-8">
                            {section.heading && (
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 leading-snug">
                                    {section.heading}
                                </h2>
                            )}

                            {section.paragraphs?.map((p, idx) => (
                                <p key={idx} className="text-sm sm:text-base md:text-gray-300 mb-3 leading-relaxed">
                                    {p}
                                </p>
                            ))}

                            {section.list && renderList(section.list)}
                            {section.extra && renderList(section.extra)}

                            {section.italic && (
                                <p className="text-sm sm:text-base md:text-gray-300 mb-6 italic leading-relaxed">
                                    {section.italic}
                                </p>
                            )}

                            {section.paragraphs2?.map((p, idx) => (
                                <p key={idx} className="text-sm sm:text-base md:text-gray-300 mb-3 leading-relaxed">
                                    {p}
                                </p>
                            ))}

                            {section.list2 && renderList(section.list2)}

                            {section.italic2 && (
                                <p className="text-sm sm:text-base md:text-gray-300 mb-6 italic leading-relaxed">
                                    {section.italic2}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
