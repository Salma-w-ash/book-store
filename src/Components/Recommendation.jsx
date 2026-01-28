import React from "react";
import book from "../assets/93e9747c9160601f7f3a7a57420103fe4025b18a (1).png";
import review from "../assets/Frame 1000004766.png";
import rate from '../assets/Frame 1000004763.png';
import design from '../assets/28aba63bdc086aa49f1169be9ff5208128b5a8af (1).jpg'
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";


export default function Recommendation() {
  return (
    <div className="w-full h-[659px] bg-[#F5F5F5]">
      <div className="container mx-auto flex flex-col justify-center items-start gap-10 relative top-30">
        <h2 className="font-sans font-bold text-[26px] text-black">
          Recommended For You
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="w-162 h-86 p-10 flex justify-between items-start gap-2 bg-white">
            <img src={book} alt="rich dad" className="w-44 h-66" />
            <div className="flex flex-col justify-center items-start gap-3">
              <h3 className="font-sans font-bold text-lg text-black">
                Rich Dad And Poor Dad
              </h3>
              <p className="font-sans font-normal text-sm text-black ">
                <span className="font-sans font-normal text-sm text-[#222222]/50">
                  Author:
                </span>
                Robert T. Kiyosanki
              </p>
              <p className="w-[353px] h-19 text-[#222222]/50 font-sans font-normal text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo. Aliquam in justo varius, Aliquam in justo varius,
              </p>
              <div className="flex justify-between gap-19">
                <div className="flex flex-col justify-center gap-2">
                  <img src={review} alt="review" className="w-[177px] h-4" />
                  <img src={rate} alt="rate" className="w-[55px] h-[19px]" />
                </div>
                <p className="font-sans font-semibold text-[26px] text-black">
                  30.00$
                </p>
              </div>
              <div className="flex justify-center gap-2">
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
          <div className="w-162 h-86 p-10 flex justify-center gap-8 bg-white">
            <img src={design} alt="rich dad" className="w-44 h-66" />
            <div className="flex flex-col justify-center items-start gap-3">
              <h3 className="font-sans font-bold text-lg text-black">
                The Design Of Books
              </h3>
              <p className="font-sans font-normal text-sm text-black ">
                <span className="font-sans font-normal text-sm text-[#222222]/50">
                  Author:
                </span>
                Debbie Berne
              </p>
              <p className="w-88.25 h-19 text-[#222222]/50 font-sans font-normal text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo. Aliquam in justo varius, Aliquam in justo varius,
              </p>
              <div className="flex justify-between items-center gap-19">
                <div className="flex flex-col justify-center gap-2">
                  <img src={review} alt="review" className="w-[177px] h-4" />
                  <img src={rate} alt="rate" className="w-13.75 h-[19px]" />
                </div>
                <p className="font-sans font-semibold text-[26px] text-black">
                  40.00$
                </p>
              </div>
              <div className="flex justify-center gap-2">
                <div className="w-[289px] h-[48px] bg-[#D9176C] flex justify-center items-center gap-1 rounded-lg">
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
        </div>
      </div>
    </div>
  );
}
