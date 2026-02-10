import React from "react";
import { FaShippingFast } from "react-icons/fa";
import Counter from "./Counter";
import { CiTrash } from "react-icons/ci";
import HeroSection from "./HeroSection";

export default function CartItems() {
  return (
    <>
      <HeroSection height={120} />
      <div className="w-full min-h-[1375px] bg-[#f5f5f5] ">
        <div className="container mx-auto grid grid-cols-[2fr_1fr_1fr_1fr_auto] items-center gap-6 p-4">
          <div>Item</div>
          <div>Quantity</div>
          <div>Price</div>
          <div>Total Price</div>
          <div></div>

          <div className="col-span-4 bg-white p-4">
            <div className="overflow-x-auto">
              <div className="max-w-[1320px] min-h-[301px] grid grid-cols-[2fr_1fr_1fr_1fr_auto] items-center gap-6">
                <div className="flex items-center gap-3">
                  <img
                    src=""
                    alt=""
                    className="object-cover w-[173px] h-[253px]"
                  />
                  <div className="flex flex-col gap-2">
                    <h2>Rich Dad And Poor Dad</h2>
                    <p></p>
                    <p></p>
                    <div className="bg-white flex justify-center items-center gap-2 border border-[#222222]/50 text-sm text-[#222222]/50 rounded-lg p-4">
                      <FaShippingFast size={24} />
                      Free Shipping Today
                    </div>
                    <p>ASIN : B09TWSRMCB</p>
                  </div>
                </div>
                <Counter />
                <p>price</p>
                <p>total price</p>
                <CiTrash
                  className=" flex justify-center items-center text-[#D9176C]/50"
                  size={24}
                />
              </div>
            </div>
            <div className="col-span-4 bg-white p-4 ">
              <div className="overflow-x-auto">
                <div className="max-w-[1320px] min-h-[301px] mt-10 grid grid-cols-[2fr_1fr_1fr_1fr_auto] items-center gap-6">
                  <div className="flex items-center gap-3">
                    <img
                      src=""
                      alt=""
                      className="object-cover w-[173px] h-[253px]"
                    />
                    <div className="flex flex-col gap-2">
                      <h2>Rich Dad And Poor Dad</h2>
                      <p></p>
                      <p></p>
                      <div className="bg-white flex justify-center items-center gap-2 border border-[#222222]/50 text-sm text-[#222222]/50 rounded-lg p-4">
                        <FaShippingFast size={24} />
                        Free Shipping Today
                      </div>
                      <p>ASIN : B09TWSRMCB</p>
                    </div>
                  </div>
                  <Counter />
                  <p>price</p>
                  <p>total price</p>
                  <CiTrash
                    className=" flex justify-center items-center text-[#D9176C]/50"
                    size={24}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4 bg-white p-4 ">
              <div className="overflow-x-auto">
                <div className="max-w-[1320px] min-h-[301px] mt-10 grid grid-cols-[2fr_1fr_1fr_1fr_auto] items-center gap-6">
                  <div className="flex items-center gap-3">
                    <img
                      src=""
                      alt=""
                      className="object-cover w-[173px] h-[253px]"
                    />
                    <div className="flex flex-col gap-2">
                      <h2>Rich Dad And Poor Dad</h2>
                      <p></p>
                      <p></p>
                      <div className="bg-white flex justify-center items-center gap-2 border border-[#222222]/50 text-sm text-[#222222]/50 rounded-lg p-4">
                        <FaShippingFast size={24} />
                        Free Shipping Today
                      </div>
                      <p>ASIN : B09TWSRMCB</p>
                    </div>
                  </div>
                  <Counter />
                  <p>price</p>
                  <p>total price</p>
                  <CiTrash
                    className=" flex justify-center items-center text-[#D9176C]/50"
                    size={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
