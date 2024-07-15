import React, { useState } from "react";
export default function Header({
  images,
  productData,
  finalPrice,
  totalAmount,
  itemsInCart,
  setItemsInCart,
}) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const totalPrice = totalAmount * finalPrice;

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  const clearCart = () => {
    setItemsInCart([]);
  };

  const navList = ["Collection", "Men", "Women", "About", "Contact"];
  return (
    <div className="flex justify-between items-center py-[2rem] px-[2.4rem] bg-white relative md:px-[12rem] lg:px-[16.5rem] lg:py-[2.8rem]">
      <div className="lg:flex lg:gap-[5.6rem]">
        <div className="flex gap-[1.6rem] items-center">
          <img
            src="/images/icon-menu.svg"
            alt="Open Menu"
            onClick={toggleMenu}
            className="lg:hidden"
          />
          <img src="/images/logo.svg" alt="Sneakers Logo" />
        </div>
        <div
          className={`fixed bg-white h-[100vh] w-[66%] p-[2.4rem] top-0 z-20 ${
            openMenu ? "left-0" : "left-[-100%]"
          } transition-left duration-500 lg:static lg:p-0 lg:bg-transparent lg:h-auto lg:w-auto`}
        >
          <img
            src="/images/icon-close.svg"
            alt="Close Menu"
            onClick={toggleMenu}
            className="lg:hidden"
          />
          <ul className="flex flex-col mt-[5.4rem] gap-[2rem] lg:flex-row lg:mt-0">
            {navList.map((navLink, index) => (
              <li
                className="text-[1.8rem] font-bold lg:font-normal lg:text-[1.5rem] lg:text-[#69707D] lg:hover:cursor-pointer lg:hover:text-[#1D2026] transition-colors duration-300"
                key={index}
              >
                {navLink}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`w-full h-[100vh] bg-black absolute top-0 left-0 opacity-[0.75] z-10 ${
          openMenu ? "left-0" : "left-[-100%]"
        } transition-left duration-100`}
      ></div>
      <div className="flex gap-[2rem] items-center lg:hover:cursor-pointer">
        <div className="relative" onClick={toggleCart}>
          <img src="/images/icon-cart.svg" alt="Cart Icon" />

          <div
            className={`py-[0.3rem] px-[1rem] bg-[#FF7E1B] rounded-[6.5rem] absolute top-[-0.6rem] left-[1rem] ${
              itemsInCart.length > 0 ? "block" : "hidden"
            }`}
          >
            <p className="font-bold text-white">{totalAmount}</p>
          </div>
        </div>

        <img
          src="/images/image-avatar.png"
          alt="Profile Avatar"
          className="w-[2.4rem] lg:w-[5rem] lg:border-[2px] lg:rounded-full lg:border-transparent lg:hover:border-[#FF7E1B] transition-colors duration-300"
        />
      </div>

      <div
        className={`w-[96%] rounded-[10px] right-[50%] translate-x-[50%] z-20 bg-white absolute ${
          openCart
            ? "h-[25.6rem] opacity-1 top-[7.6rem]"
            : "h-0 opacity-0 top-0"
        } transition-all duration-300 lg:w-[36rem] lg:translate-x-0 lg:right-[10%] lg:shadow-cart`}
      >
        <p
          className={`text-[#1D2026] text-[1.6rem] font-bold p-[2.4rem] border-b-[1px] border-b-[#E4E9F2] ${
            openCart ? "block" : "hidden"
          }`}
        >
          Cart
        </p>
        <div
          className={`flex justify-center ${
            openCart ? "flex" : "hidden"
          }`}
        >
          {itemsInCart.length === 0 ? (
            <p className="text-[#69707D] text-[1.6rem] font-bold mt-[7.6rem] text-center">
              Your cart is empty
            </p>
          ) : (
            <div className="w-full py-[2.4rem] px-[2.4rem]">
              <div className="flex items-center gap-[1.6rem]   w-full">
                <img
                  src={images[0].main}
                  alt=""
                  className="w-[5rem] rounded-[4px]"
                />
                <div className="flex w-full items-center justify-between">
                  <div className="flex-1">
                    <p className="text-[1.6rem] text-[#69707D]">
                      {productData.productHeader}
                    </p>
                    <div className="flex gap-[0.8rem]">
                      <p className="text-[1.6rem] text-[#69707D]">{`$${finalPrice} x ${totalAmount}`}</p>
                      <p className="text-[1.6rem] text-[#1D2026] font-bold">{`$${totalPrice.toFixed(
                        2
                      )}`}</p>
                    </div>
                  </div>
                  <img
                    src="/images/icon-delete.svg"
                    alt="Delete Icon"
                    className="cursor-pointer"
                    onClick={clearCart}
                  />
                </div>
              </div>
              <button className="w-full bg-[#FF7E1B] text-[1.6rem] font-bold py-[2rem] text-white rounded-[10px] mt-[2.4rem]">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
