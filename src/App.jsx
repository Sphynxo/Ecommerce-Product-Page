import React, { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import productData from "./Data/data.json";

export default function App() {
  let finalPrice;

  productData.discount
    ? (finalPrice = (productData.price * productData.discount) / 100)
    : (finalPrice = productData.price);
  const images = productData.images;
  const [amount, setAmount] = useState(0);
  const [totalAmount, setToTalAmount] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);

  return (
    <>
      <Header
        images={images}
        productData={productData}
        finalPrice={finalPrice}
        totalAmount={totalAmount}
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
      />
      <Hero
        amount={amount}
        setAmount={setAmount}
        images={images}
        finalPrice={finalPrice}
        setToTalAmount={setToTalAmount}
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
      />
    </>
  );
}
