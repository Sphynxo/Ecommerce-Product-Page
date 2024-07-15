import { useState } from "react";

const Carousel = ({ images, toggleCarousel, openCarousel }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const changeImage = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center w-full md:w-[44.5rem] ml-[50%] translate-x-[-50%] md:gap-[3.2rem] md:translate-x-0 md:ml-0">
      <div className="w-full h-[30rem] overflow-hidden relative md:w-[44.5rem] md:h-[44.5rem]">
        <div>
          {images.map((image, index) => (
            <img
              src={image.main}
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out cursor-pointer ${
                index === activeIndex
                  ? "translate-x-0"
                  : "translate-x-full"
              } ${
                index ===
                (activeIndex - 1 + images.length) % images.length
                  ? "translate-x-[-100%]"
                  : ""
              } md:rounded-[15px]`}
              style={{
                transform: `translateX(${
                  100 * (index - activeIndex)
                }%)`,
              }}
              alt={`Slide ${index + 1}`}
              onClick={() => {
                if (!openCarousel && window.innerWidth > 768)
                  toggleCarousel();
              }}
            />
          ))}
          <div
            className={`absolute flex justify-between w-full top-[50%] translate-y-[-50%] px-[1.6rem]  ${
              openCarousel ? "md:flex" : "md:hidden"
            }`}
          >
            <button
              className="bg-white w-[4rem] h-[4rem] flex items-center justify-center rounded-full"
              onClick={prevSlide}
            >
              <img
                src="/images/icon-previous.svg"
                alt="Previous"
                className="mr-[4px]"
              />
            </button>
            <button
              className="bg-white w-[4rem] h-[4rem] flex items-center justify-center rounded-full"
              onClick={nextSlide}
            >
              <img
                src="/images/icon-next.svg"
                alt="Next"
                className="ml-[4px]"
              />
            </button>
          </div>
        </div>
      </div>
      <div className=" justify-between w-full hidden md:flex">
        {images.map((image, index) => (
          <div
            className="relative cursor-pointer"
            key={index}
            onClick={() => changeImage(index)}
          >
            <img
              src={image.thumbnail}
              className={`w-[8.8rem] rounded-[1rem] `}
            />
            <div
              className={`absolute w-full h-full bg-white  top-0 left-0 border-[2px] border-[#FF7E1B] rounded-[1rem] ${
                index === activeIndex ? "opacity-[0.75]" : "opacity-0"
              } transition-all duration-300`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
