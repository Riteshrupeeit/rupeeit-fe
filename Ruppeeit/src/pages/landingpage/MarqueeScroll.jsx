import React from "react";

const MarqueeScroll = () => {
    const imagesRow1 = [
        "./img/photos1.jpg",
        "./img/photos2.jpg",
        "./img/photos3.jpg",
        "./img/photos4.jpg",
        "./img/photos5.jpg",
    ];

    const imagesRow2 = [
        "./img/photos6.png",
        "./img/photos7.png",
        "./img/photos8.png",
        "./img/photos10.png",
        "./img/photos11.png",
    ];

    return (
        <div className="w-full bg-white py-10 overflow-hidden">
            {/* First Row - Left to Right */}
            <div className="marquee">
                <div className="marquee__group flex">
                    {imagesRow1.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`row1-${i}`}
                            className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] 
                                       w-[140px] sm:w-[180px] md:w-[210px] lg:w-[227px] 
                                       rounded-2xl mx-2 sm:mx-3 shadow-md object-cover"
                        />
                    ))}
                    {imagesRow1.map((src, i) => (
                        <img
                            key={`dup1-${i}`}
                            src={src}
                            alt={`row1-dup-${i}`}
                            className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] 
                                       w-[140px] sm:w-[180px] md:w-[210px] lg:w-[227px] 
                                       rounded-2xl mx-2 sm:mx-3 shadow-md object-cover"
                        />
                    ))}
                </div>
            </div>

            {/* Second Row - Right to Left */}
            <div className="marquee marquee--reverse mt-6 sm:mt-8">
                <div className="marquee__group flex">
                    {imagesRow2.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`row2-${i}`}
                            className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] 
                                       w-[140px] sm:w-[180px] md:w-[210px] lg:w-[227px] 
                                       rounded-2xl mx-2 sm:mx-3 shadow-md object-cover"
                        />
                    ))}
                    {imagesRow2.map((src, i) => (
                        <img
                            key={`dup2-${i}`}
                            src={src}
                            alt={`row2-dup-${i}`}
                            className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] 
                                       w-[140px] sm:w-[180px] md:w-[210px] lg:w-[227px] 
                                       rounded-2xl mx-2 sm:mx-3 shadow-md object-cover"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarqueeScroll;
