import React, { useState } from "react";

const faqData = [
    {
        id: 1,
        question: "What is Rupeeit and who is it for?",
        answer:
            "Rupeeit is a platform where users can learn and understand money through short, reel-like videos created by certified experts not influencers. Anyone who wants to gain financial knowledge, from beginners to professionals, can use our app.",
    },
    {
        id: 2,
        question: "Is Rupeeit free to use?",
        answer:
            "Yes! Rupeeit is currently free for all users. You can explore and learn without paying any subscription fee.",
    },
    {
        id: 3,
        question: "What kind of topics can I learn on Rupeeit?",
        answer:
            "You’ll find bite-sized lessons on personal finance, stock markets, investments, savings, insurance, taxes, and more all explained in simple, easy-to-understand videos.",
    },
    {
        id: 4,
        question: "Who creates the content on Rupeeit?",
        answer:
            "All content is created by certified finance experts, ensuring accuracy and reliability. Unlike many platforms, Rupeeit does not rely on influencers for financial education. ",
    },
    {
        id: 5,
        question: "How is Rupeeit different from YouTube or Instagram reels?",
        answer:
            "Unlike random influencer videos, Rupeeit offers structured, trustworthy, and expert-driven financial content designed specifically to educate learners in a fun, engaging way. ",
    },
    {
        id: 6,
        question: " Can I learn at my own pace?",
        answer:
            "Absolutely. Rupeeit’s short video format allows you to watch, pause, and revisit topics anytime, making it easy to learn at your own spee",
    },
    {
        id: 7,
        question: "Do I need prior financial knowledge to use Rupeeit?",
        answer:
            "Not at all! Rupeeit is built for everyone whether you’re completely new to money matters or looking to deepen your financial skills. ",
    },
    {
        id: 8,
        question: "Can I request topics or ask questions to experts?",
        answer: " Yes! Rupeeit allows learners to suggest topics and interact with experts, making sure the content stays relevant to your learning needs.",
    },
];

export default function FAQ() {
    const [openId, setOpenId] = useState(null);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id); // Toggle current box
    };

    return (
        <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 mt-5 mb-10 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
                    Frequently Asked <br /> Questions
                </h2>
                <p className="text-center text-gray-400 mb-10 text-sm sm:text-base">
                    Still have any questions? Contact our team <br /> via{" "}
                    <span className="underline break-words">connect@rupeeit.in</span>
                </p>

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-700">
                    {faqData.map((item) => (
                        <div
                            key={item.id}
                            className="border-b border-gray-700 py-4 mt-6 cursor-pointer transition-all duration-300"
                            onClick={() => toggleFAQ(item.id)}
                        >
                            <div className="flex items-start gap-4 sm:items-center">
                                {/* Number Badge */}
                                <div
                                    className={`text-sm font-semibold rounded-md px-3 py-1 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${openId === item.id
                                        ? "border-2 border-[#FAC817] text-[#FAC817]"
                                        : "bg-[#1a1a1a] text-white"
                                        }`}
                                >
                                    {item.id < 10 ? `0${item.id}` : item.id}
                                </div>

                                {/* Question + Answer */}
                                <div className="flex-1">
                                    <div
                                        className={`text-base font-semibold leading-snug ${openId === item.id ? "text-yellow-400" : ""
                                            }`}
                                    >
                                        {item.question}
                                    </div>

                                    {/* Answer */}
                                    <div
                                        className={`transition-all duration-500 ease-in-out overflow-hidden ${openId === item.id ? "max-h-[500px] mt-2 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-sm sm:text-base text-gray-300">{item.answer}</p>
                                    </div>
                                </div>

                                {/* Toggle Icon */}
                                <div className="ml-2 text-yellow-400 text-2xl font-bold">
                                    {openId === item.id ? "×" : "+"}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Background Line Image */}
                    <img
                        src="./img/Line1(1).png"
                        alt=""
                        className="absolute hidden  lg:block top-0 left-1/2 transform -translate-x-1/2 h-full w-auto max-w-xs sm:max-w-sm md:max-w-md opacity-20 pointer-events-none"
                    />
                </div>
            </div>
        </section>
    );
}
