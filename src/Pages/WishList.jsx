import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
import HeroSection from "../Components/HeroSection";
import AddToCart from "../Components/AddToCart";
import Counter from "../Components/Counter";
import CartItems from "../Components/CartItems";

export default function WishList() {
  return (
    <>
      <HeroSection height={120} />

      <CartItems />
      <div className="bg-[#f5f5f5] min-h-[100px] flex justify-center items-center relative ">
        <button className="w-[320px] h-[48px] bg-[#D9176C] p-3 rounded-lg text-white absolute bottom-30">
          Move To Cart
        </button>
      </div>
    </>
  );
}
