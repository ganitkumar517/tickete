import React, { useState } from 'react';
import Cover from '../../assets/CoverImage.svg'
import BestSeller from '../../assets/bestSeller.svg'

const images = [
    Cover,
    Cover,
    Cover,
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevSlide = () => {
        const index = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        const index = (currentIndex + 1) % images.length;
        setCurrentIndex(index);
    };

    return (
        <div className="relative ">
            <div className="overflow-hidden rounded-lg">
                <img
                    className="w-full"
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                />
            </div>
            <div className="absolute top-0 bottom-32 left-12 flex justify-between items-center w-full">
                <img src={BestSeller}></img>
            </div>
            <div className="absolute top-0 bottom-0 flex justify-between items-center w-full">
                <button
                    onClick={goToPrevSlide}
                    className="absolute left-0 z-10 px-2 py-1 ml-12 bg-gray-200 text-[#60646C] rounded-full"
                >
                    &larr;
                </button>
                <button
                    onClick={goToNextSlide}
                    className="absolute right-0 z-10 px-2 py-1 mr-12 bg-gray-200 text-[#60646C] rounded-full"
                >
                    &rarr;
                </button>
            </div>
            <div className="absolute bottom-0 w-full text-center mb-12">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`inline-block w-4 h-4 mx-2 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-500'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
