import React from "react";
import book from "../assets/93e9747c9160601f7f3a7a57420103fe4025b18a (1).png";
import review from "../assets/Frame 1000004767.png";
import rate from "../assets/Frame 1000004763 (1).png";
import { FaShoppingCart } from "react-icons/fa";

export default function FlashSale() {
  return (
    <>
      <div className="w-full bg-[#F5F5F5] py-24">
        <div className="max-w-[1100px] mx-auto">
          <hr className="w-full text-[#222222]/20" />

          <div className="flex flex-col justify-center gap-2.5 text-center mb-12">
            <h2 className="font-sans font-bold text-[26px] text-black">
              Flash Sale
            </h2>
            <p className="w-[516px] h-11 font-sans font-normal text-lg text-[#222222]/50 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="bg-[#3B2F4A] rounded-lg p-4 flex flex-col md:flex-row gap-4 md:items-center max-w-[760px] mx-auto">
              <img
                src={book}
                alt=""
                className="w-[176px] h-[262px] rounded-sm"
              />

              <div className="flex flex-col justify-center gap-3">
                <h3 className="font-sans font-bold text-lg text-white">
                  Rich Dad And Poor Dad
                </h3>

                <p className="font-sans font-normal text-sm text-white">
                  <span className="text-[#ffffff]/50">Author:</span> Robert T.
                  Kiyosanki
                </p>

                <div>
                  <img src={review} alt="review" className="w-[177px] h-4" />
                  <img src={rate} alt="rate" className="w-[55px] h-[19px]" />
                </div>

                <div className="flex justify-between gap-2">
                  <p className="font-sans font-semibold text-[20px] text-[#FFFFFF]/30">
                    45.00$
                  </p>
                  <p className="font-sans font-semibold text-[26px] text-white">
                    30.00$
                  </p>
                </div>

                <div className="w-[192px] h-[33px]">
                  <div className="w-full h-2 rounded-[20px] bg-[#ffffff]/10">
                    <div className="w-[143px] h-2 rounded-[20px] bg-[#EAA451]" />
                  </div>
                  <p className="font-sans text-[12px] text-[#ffffff]/50">
                    4 books left
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-12 h-12 rounded-lg bg-[#D9176C] flex items-center justify-center self-end mt-4"
                >
                  <FaShoppingCart className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <div className="bg-[#3B2F4A] rounded-lg p-4 flex flex-col md:flex-row gap-4 md: items-center max-w-[620px] mx-auto">
              <img
                src={book}
                alt=""
                className="w-[176px] h-[262px] rounded-sm"
              />

              <div className="flex flex-col justify-center gap-3">
                <h3 className="font-sans font-bold text-lg text-white">
                  Rich Dad And Poor Dad
                </h3>

                <p className="font-sans font-normal text-sm text-white">
                  <span className="text-[#ffffff]/50">Author:</span> Robert T.
                  Kiyosanki
                </p>

                <div>
                  <img src={review} alt="review" className="w-[177px] h-4" />
                  <img src={rate} alt="rate" className="w-[55px] h-[19px]" />
                </div>

                <div className="flex justify-between gap-2">
                  <p className="font-sans font-semibold text-[20px] text-[#FFFFFF]/30">
                    45.00$
                  </p>
                  <p className="font-sans font-semibold text-[26px] text-white">
                    30.00$
                  </p>
                </div>

                <div className="w-[192px] h-[33px]">
                  <div className="w-full h-2 rounded-[20px] bg-[#ffffff]/10">
                    <div className="w-[143px] h-2 rounded-[20px] bg-[#EAA451]" />
                  </div>
                  <p className="font-sans text-[12px] text-[#ffffff]/50">
                    4 books left
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-13 h-12 rounded-lg bg-[#D9176C] self-end flex justify-center items-center"
                >
                  <FaShoppingCart className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
