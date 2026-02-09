import React from "react";
import book from "../assets/93e9747c9160601f7f3a7a57420103fe4025b18a (2).png";
import back from '../assets/f28cf05ff44dd60c1e6c9b8eb5821af0629ee4d0.jpg'
import rate from '../assets/Frame 1000004763 (2).png'
import review from '../assets/Frame 1000004766.png'
import {
  FaFacebook,
  FaInstagram,
  FaShippingFast,
  FaShoppingCart,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Counter from "./Counter";
import { CiHeart } from "react-icons/ci";
import HeroSection from "./HeroSection";
export default function SingleBook() {
  return (
    <div className="w-full bg-[#f5f5f5]">
      <HeroSection height={120} />
      <div className="container max-w-[1320px] mx-auto px-4 grid grid-cols-[auto_1fr] gap-5 p-4">
        <img src={book} alt="" className="w-[312px] h-auto object-contain" />
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex justify-between gap-3 ">
            <div>
              <h2 className="font-sans font-bold text-black text-[28px]">
                Rich Dad And Poor Dad
              </h2>
              <p className="font-sans font-normal text-lg max-w-[758px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Mauris et ultricies est. Aliquam in justo varius, sagittis
                neque ut, malesuada leo. Aliquam in justo varius, sagittis neque
                ut, malesuada leo.
              </p>
            </div>

            <div className="flex justify-center gap-2">
              <FaFacebook size={24} />
              <FaInstagram size={24} />
              <FaTwitter size={24} />
              <FaWhatsapp size={24} />
            </div>
          </div>
          <div className="flex justify-between items-center gap-15">
            <div className="flex flex-col justify-center items-start gap-2">
              <img src={review} alt="" className="max-w-[241px] h-auto" />
              <img src={rate} alt="" className="max-w-[71px] h-auto" />
            </div>
            <div className="flex flex-col justify-center gap-3">
              <div className="bg-white flex justify-center items-center gap-2 border border-[#222222]/50 text-sm text-[#222222]/50 rounded-lg p-4">
                <FaShippingFast size={24} />
                Free Shipping Today
              </div>
              <div className="w-[167px] h-[35px] bg-white text-sm border border-[#EAA451] rounded-lg text-[#EAA451] p-2">
                Discount code: Ne212
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <p className="font-sans text-xl">40.00$</p>
            <div className="flex justify-center gap-2">
              <Counter />
              <div className="w-[289px] h-12 bg-[#D9176C] flex justify-center items-center gap-1 rounded-lg">
                <button
                  type="submit"
                  className="font-sans font-semibold text-[16px] text-white"
                >
                  Add To Cart
                </button>
                <FaShoppingCart className="w-[19px] h-[15px] text-white" />
              </div>
              <button
                type="submit"
                className="w-12 h-12 border border-[#D9176C] rounded-lg p-3"
              >
                <CiHeart className="w-5 h-5 text-[#D9176C]" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 w-[238px] h-[128px]">
          <img src={book} alt="" className="max-w-[62px] h-auto" />
          <img src={back} alt="" className="max-w-[62px] h-auto" />
          <img src={book} alt="" className="max-w-[62px] h-auto" />
        </div>
      </div>
    </div>
  );
}
