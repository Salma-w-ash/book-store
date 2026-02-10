import React from "react";

export default function Payment() {
  return (
    <div className="max-w-full min-h-[306px] bg-[#f5f5f5]">
      <div className="container mx-auto bg-[#3B2F4A]/10 max-w-[1320px]  p-2 md:h-[455px] md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div className="flex flex-col justify-center w-[516px] h-[275px] gap-4 mt-3 ml-5">
            <h2 className="font-sans font-bold text-[26px] text-black ">
              Payment Summary
            </h2>
            <p className="max-w-[516px] md:h-[200px] font-sans font-normal text-[16px] text-[#222222]/50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
            <div className="flex flex-col justify-center gap-3 mt-9">
              <p className="font-sans font-normal text-[18px] text-[#222222]/50 rounded-lg">
                Have a discount code?
              </p>
              <div className="flex items-center gap-2.5">
                <input
                  type="text"
                  className="max-w-[284px] h-[52px] border border-[#222222]/20 py-3.5 px-4.5 rounded-lg"
                  placeholder="Enter Promo Code"
                />
                <button
                  type="submit"
                  className="w-[88px] h-[52px] bg-[#3B2F4A] text-white font-sans font-semibold text-[16px]  rounded-lg py-3 px-4"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4  rounded-lg max-w-[424px] h-[227px] mt-3">
            <div className="flex justify-between">
              <span className="font-sans font-normal text-[20px] text-[#222222]/50">
                Subtotal
              </span>
              <span className="font-sans font-semibold text-[20px] text-[#222222]">
                $120
              </span>
            </div>

            <div className="flex justify-between ">
              <span className="font-sans font-normal text-[20px] text-[#222222]/50">
                Shipping
              </span>
              <span className="font-sans font-semibold text-[20px] text-[#222222]/">
                Free Delivery
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-sans font-normal text-[20px] text-[#222222]/50">
                Tax
              </span>
              <span className="font-sans font-semibold text-[20px] text-[#222222]">
                $4
              </span>
            </div>

            <hr className="my-2 border-gray-300" />

            <div className="flex justify-between">
              <span className="font-sans font-semibold text-[20px] text-[#222222]/50">
                Total
              </span>
              <span className=" text-[#D9176C] font-sans font-bold text-[20px]">
                $124
              </span>
            </div>

            <button
              type="submit"
              className="mt-4 font-sans font-bold text-[16px] bg-[#D9176C] text-white py-2 rounded-lg w-full"
            >
              Check out
            </button>

            <button className="mt-2 font-sans font-bold text-[16px] border border-[#D9176C] text-[#D9176C] py-2 rounded-lg w-full">
              Keep Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
