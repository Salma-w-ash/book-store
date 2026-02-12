import React from "react";
import Progress from "./Progress";

export default function AllOrders() {
  return (
    <div className="flex flex-col gap-6">
      {/* ===== Card 1: In Progress ===== */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-start text-sm">
          {/* Column 1 */}
          <div className="flex flex-col gap-1 font-sans font-normal text-[#222222]/50">
            <p>Order No.</p>
            <p>Status</p>
            <p>Date</p>
            <p>Address</p>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-1 font-sans text-right text-[#222222] font-normal">
            <p>#123456</p>
            <p>In progress</p>
            <p>Jul, 31 2024</p>
            <p>Maadi, Cairo, Egypt.</p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mt-6">
          <Progress active label="Order placed" />
          <div className="flex-1 h-[2px] bg-[#ACACAC] mx-2" />
          <Progress label="Shipping" />
          <div className="flex-1 h-[2px] bg-[#ACACAC] mx-2" />
          <Progress label="Completed" />
        </div>
      </div>

      {/* ===== Card 2: Completed ===== */}
      <div className="bg-white rounded-xl p-6 shadow-sm flex justify-between items-start text-sm">
        {/* Column 1 */}
        <div className="flex flex-col gap-1 font-sans font-normal text-[#ACACAC]">
          <p>Order No.</p>
          <p>Status</p>
          <p>Date</p>
          <p>Address</p>
          <p className="text-[#D9176C] mt-3 cursor-pointer">
            View order detail
          </p>
        </div>
        {/* Column 2 */}
        <div className="flex flex-col gap-1 font-sans text-right text-[#222222] font-normal">
          <p>#123457</p>
          <p className="text-green-600">Completed</p>
          <p>Jul, 31 2024</p>
          <p>Maadi, Cairo, Egypt.</p>
        </div>
      </div>

      {/* ===== Card 3: Canceled ===== */}
      <div className="bg-white rounded-xl p-6 shadow-sm flex justify-between items-start text-sm">
        {/* Column 1 */}
        <div className="flex flex-col gap-1 font-sans font-normal text-[#ACACAC]">
          <p>Order No.</p>
          <p>Status</p>
          <p>Date</p>
          <p>Address</p>
          <p className="text-[#D9176C] mt-3 cursor-pointer">
            View order detail
          </p>
        </div>
        {/* Column 2 */}
        <div className="flex flex-col gap-1 font-sans text-right text-[#222222] font-normal">
          <p>#123458</p>
          <p className="text-red-500">Canceled</p>
          <p>Jul, 31 2024</p>
          <p>Maadi, Cairo, Egypt.</p>
        </div>
      </div>
    </div>
  );
}
