import React from "react";
import book from "../assets/93e9747c9160601f7f3a7a57420103fe4025b18a (1).png";
import review from "../assets/Frame 1000004766.png";
import rate from '../assets/Frame 1000004763.png';
import design from '../assets/28aba63bdc086aa49f1169be9ff5208128b5a8af (1).jpg'
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { toast, Toaster } from "react-hot-toast";

 const handleClick = (e) => {
   const icon = e.currentTarget.querySelector("svg");
   icon.classList.toggle("text-[#D9176C]"); 

  
   toast.success("Added to favorite successfully!");
 };
export default function Recommendation() {
  return (
    <div className="w-full bg-[#F5F5F5] py-10">
      <div className="container mx-auto flex flex-col justify-center items-start gap-10 relative top-30">
        <h2 className="font-sans font-bold text-[26px] text-black">
          Recommended For You
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="w-full max-w-full overflow-hidden p-6 flex flex-col sm:flex-row gap-6 bg-white rounded-xl mb-10">
            <img
              src={book}
              alt="rich dad"
              className="w-32 sm:w-40 h-auto mx-auto sm:mx-0"
            />
            <div className="flex flex-col justify-center items-start gap-3 flex-1 min-w-0">
              <h3 className="font-sans font-bold text-lg text-black">
                Rich Dad And Poor Dad
              </h3>
              <p className="font-sans font-normal text-sm text-black ">
                <span className="font-sans font-normal text-sm text-[#222222]/50">
                  Author:
                </span>
                Robert T. Kiyosanki
              </p>
              <p className="max-w-full sm:max-w-[353px] text-[#222222]/50 font-sans font-normal text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo. Aliquam in justo varius, Aliquam in justo varius,
              </p>
              <div className="flex justify-between gap-19">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                  <img src={review} alt="review" className="w-[177px] h-4" />
                  <img src={rate} alt="rate" className="w-[55px] h-[19px]" />
                </div>
                <p className="font-sans font-semibold text-[26px] text-black">
                  30.00$
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <div className="w-full sm:w-[289px] h-12 bg-[#D9176C] flex justify-center items-center gap-1 rounded-lg">
                  <button
                    type="submit"
                    className="font-sans font-semibold text-[16px] text-white"
                  >
                    Add To Cart
                  </button>
                  <FaShoppingCart className="w-[19px] h-[15px] text-white" />
                </div>
                <div>
                  <Toaster position="top-center" />
                  <button
                    onClick={handleClick}
                    className="w-12 h-12 border border-[#D9176C] rounded-lg p-3 flex justify-center items-center"
                  >
                    <CiHeart className="w-5 h-5 text-gray-400 transition-colors duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full overflow-hidden p-6 flex flex-col sm:flex-row gap-6 bg-white rounded-xl mb-10">
            <img
              src={design}
              alt="design"
              className="w-32 sm:w-40 h-auto mx-auto sm:mx-0"
            />
            <div className="flex flex-col justify-center items-start gap-3 flex-1 min-w-0">
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
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                  <img src={review} alt="review" className="w-[177px] h-4" />
                  <img src={rate} alt="rate" className="w-13.75 h-[19px]" />
                </div>
                <p className="font-sans font-semibold text-[26px] text-black">
                  40.00$
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <div className="w-full sm:w-[289px] h-12 bg-[#D9176C] flex justify-center items-center gap-1 rounded-lg">
                  <button
                    type="submit"
                    className="font-sans font-semibold text-[16px] text-white"
                  >
                    Add To Cart
                  </button>
                  <FaShoppingCart className="w-[19px] h-[15px] text-white" />
                </div>
                <div>
                  <Toaster position="top-center" />
                  <button
                    onClick={handleClick}
                    className="w-12 h-12 border border-[#D9176C] rounded-lg p-3 flex justify-center items-center"
                  >
                    <CiHeart className="w-5 h-5 text-gray-400 transition-colors duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
