import React from "react";
import { FaShippingFast, FaCreditCard } from "react-icons/fa";
import returns from '../assets/restock 1.png'
import { RiCustomerService2Line } from "react-icons/ri";


export default function Features() {
  return (
    <div className="bg-[#F5F5F5] w-full h-[407px]">
      <div className="container mx-auto grid grid-cols-4 relative top-[120px]">
        <div className="w-[275px] h-[167px] flex flex-col justify-center items-start gap-2">
          <FaShippingFast className="w-7.5 h-7.5 text-[#22222280]/50" />
          <h2 className="font-sans font-bold text-lg text-black">
            Fast & Reliable Shipping
          </h2>
          <p className="text-[#222222]/50 font-sans font-normal text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <div className="w-[275px] h-[167px] flex flex-col justify-center items-start gap-2">
          <FaCreditCard className="w-7.5 h-7.5 text-[#22222280]/50" />
          <h2 className="font-sans font-bold text-lg text-black">
            Secure Payment
          </h2>
          <p className="text-[#222222]/50 font-sans font-normal text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <div className="w-[275px] h-[167px] flex flex-col justify-center items-start gap-2">
          <img
            src={returns}
            alt="easy returns"
            className="w-7.5 h-7.5 text-[#222222]/50"
          />
          <h2 className="font-sans font-bold text-lg text-black">
            Easy Returns
          </h2>
          <p className="text-[#222222]/50 font-sans font-normal text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <div className="w-[275px] h-[167px] flex flex-col justify-center items-start gap-2">
          <RiCustomerService2Line className="w-7.5 h-7.5 text-[#222222]/50" />
          <h2 className="font-sans font-bold text-lg text-black">
            24/7 Customer Support
          </h2>
          <p className="text-[#222222]/50 font-sans font-normal text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
      </div>
    </div>
  );
}
