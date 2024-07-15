import React, { useState } from "react";
import productData from "../Data/data.json";
import Carousel from "./Carousel";
import { IoCartOutline } from "react-icons/io5";

export default function Hero({
  amount,
  setAmount,
  images,
  finalPrice,
  setToTalAmount,
  setItemsInCart,
}) {
  const [openCarousel, setOpenCarousel] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const increaseAmount = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const decreaseAmount = () => {
    amount === 0
      ? setAmount(0)
      : setAmount((prevAmount) => prevAmount - 1);
  };

  const addToCart = () => {
    setToTalAmount(amount);
    setAmount(0);
    amount > 0
      ? setItemsInCart((prevItems) => [...prevItems, productData])
      : setItemsInCart([]);
  };

  const toggleCarousel = () => {
    setOpenCarousel(!openCarousel);
  };

  const handleImageClick = (index) => {
    setActiveIndex(index);
    if (!openCarousel && window.innerWidth > 768) {
      toggleCarousel();
    }
  };

  return (
    <div className="lg:mt-[5.6rem] lg:flex  pb-[8.8rem] md:px-[8rem] md:flex md:flex-col md:items-center md:gap-[8rem] md:justify-between lg:flex-row xl:px-[21.2rem] xl:gap-[12rem] md:mt-[8rem]">
      <Carousel
        images={images}
        toggleCarousel={toggleCarousel}
        openCarousel={openCarousel}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <div
        className={`w-full h-auto absolute bg-[#000000b4] top-0 left-0 z-40  items-center justify-center pt-[8rem] pb-[20rem] ${
          openCarousel ? "md:flex md:opacity-1" : "hidden opacity-0"
        } transition-opacity duration-300`}
      >
        <div className="flex flex-col items-end gap-[2.4rem]">
          <img
            src="/images/icon-close-white.svg"
            alt=""
            onClick={toggleCarousel}
            className="cursor-pointer icon-hover-orange transition-colors duration-300"
          />
          <Carousel
            images={images}
            toggleCarousel={toggleCarousel}
            openCarousel={openCarousel}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>
      <div className="p-[2.4rem]">
        <div>
          <div>
            <h1 className="text-[#FF7E1B] text-[1.2rem] uppercase tracking-[1.9px] font-bold">
              {productData.company}
            </h1>
            <h2 className="text-[#1D2026] text-[2.8rem] font-bold mt-[2rem] leading-[3.2rem]">
              {productData.productHeader}
            </h2>
            <p className="text-[#69707D] text-[1.5rem] leading-[2.5rem] mt-[1.6rem]">
              {productData.description}
            </p>
          </div>
          <div className="flex justify-between items-center mt-[2.4rem] md:flex-col md:items-start md:gap-[1rem] md:mt-[2.8rem]">
            <div className="flex items-center gap-[1.6rem]">
              <p className="text-[2.8rem] font-bold text-[#1D2026]">
                {`${finalPrice.toFixed(2)}$`}
              </p>
              <p
                className={`px-[0.8rem] py-[0.4rem] text-[1.6rem] text-[#FF7E1B] font-bold rounded-[6px] ${
                  productData.discount ? "bg-[#FFEEE2]" : "bg-transparent"
                } `}
              >
                {productData.discount ? `${productData.discount}%` : null}
              </p>
            </div>
            <p className="text-[1.6rem] text-[#B6BCC8] font-bold line-through">
              {productData.discount ? `$${productData.price.toFixed(2)}` : null}
            </p>
          </div>
          <div className="flex flex-col gap-[1.6rem] lg:flex-row md:items-center md:justify-between md:mt-[3.2rem]">
            <div className="flex justify-between items-center bg-[#F6F8FD] rounded-[10px] mt-[2.4rem] md:mt-0 md:w-full">
              <div
                className="w-full flex justify-start h-full py-[2rem] px-[2.4rem] md:hover:cursor-pointer"
                onClick={decreaseAmount}
              >
                <img src="/images/icon-minus.svg" alt="" />
              </div>
              <p className="text-[1.6rem] text-[#1D2026] font-bold py-[2rem]">
                {amount}
              </p>
              <div
                className="w-full flex justify-end h-full py-[2rem] px-[2.4rem] md:hover:cursor-pointer"
                onClick={increaseAmount}
              >
                <img src="/images/icon-plus.svg" alt="" />
              </div>
            </div>
            <button
              className={`flex text-[1.6rem] font-bold w-full py-[2rem] items-center text-white gap-[1.6rem] justify-center rounded-[1rem] ${
                amount > 0
                  ? "bg-[#FF7E1B] shadow-custom md:hover:bg-[#FFAB6A] transition-colors duration-300"
                  : "bg-[#91857d]"
              }`}
              onClick={addToCart}
            >
              <IoCartOutline /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
