import Counter from "./Counter";
import book from "../assets/93e9747c9160601f7f3a7a57420103fe4025b18a (1).png";
import { FaShippingFast } from "react-icons/fa";

export default function OrderSummary() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
      <h3 className="text-[18px] font-medium">Order summary</h3>
      <div className="flex flex-col gap-5">
        <div className="flex gap-3">
          <img
            src={book}
            className="w-[456px] h-[160px] object-contain rounded relative -left-5"
          />
          <div className="flex flex-col justify-between relative -left-9">
            <p className="text-[18px] font-medium">Rich Dad And Poor Dad</p>
            <p className="text-sm text-[#222222]/50">
              Author: Robert T. Kiyosaki
            </p>

            <div className="w-[138px] h-[35px] bg-white flex justify-center items-center gap-2 border border-[#222222]/50 text-xs text-[#222222]/50 rounded-lg p-1">
              <FaShippingFast size={24} />
              Free Shipping Today
            </div>
            <div className="flex justify-between items-center gap-2 mt-2">
              <p className="text-[18px] font-medium">$40</p>
              <Counter />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <img
              src={book}
              className="w-[456px] h-[160px] object-contain rounded items-start relative -left-5"
            />

            <div className=" flex flex-col justify-between relative -left-9">
              <div className="flex flex-col gap-1">
                <p className="text-[18px] font-medium">Rich Dad And Poor Dad</p>
                <p className="text-sm text-[#222222]/50">
                  Author: Robert T. Kiyosaki
                </p>
              </div>

              <div className="bg-white flex justify-center items-center gap-2 border border-[#222222]/50 text-xs p-1 text-[#222222]/50 rounded-lg ">
                <FaShippingFast size={24} />
                Free Shipping Today
              </div>

              <div className="flex justify-between items-center gap-2 mt-2">
                <p className="text-[18px] font-medium">$40</p>
                <Counter />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-[#222222]/50">Have a discount code?</p>
        <div className="flex gap-2">
          <input
            className=" flex-1 border border-[#222222]/50 rounded-lg p-4"
            placeholder="Enter Promo Code"
          />
          <button className="bg-[#3B2F4A] text-white text-[18px] px-4 rounded-lg">
            Apply
          </button>
        </div>
      </div>

      <div className="space-y-2 text-[18px]">
        <div className="flex justify-between text-[#222222]/50">
          <span>Subtotal</span>
          <span>$80</span>
        </div>
        <div className="flex justify-between text-[#222222]/50">
          <span>Tax</span>
          <span>$4</span>
        </div>
        <div className="flex justify-between text-[#222222]/50">
          <span>Shipping</span>
          <span>$0</span>
        </div>
        <div className="flex justify-between font-medium">
          <span>Total (USD)</span>
          <span className="text-[#D9176C]">$84</span>
        </div>
      </div>

      <button className="w-full bg-[#D9176C] hover:bg-pink-700 text-white py-2 rounded-lg">
        Confirm order
      </button>
    </div>
  );
}
