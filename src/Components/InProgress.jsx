import React from "react";
import Progress from "./Progress";

export default function InProgress() {
  return (
    <div className="flex flex-col gap-6">
      {/* ===== Card 1 ===== */}
      <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
        <div className="flex justify-between text-sm text-[#ACACAC]">
          <div className="space-y-1 font-sans font-normal text-[#222222]/50">
            <p>Order No.</p>
            <p>Status</p>
            <p>Date</p>
            <p>Address</p>
          </div>
          <div className="space-y-1 font-sans text-right text-[#222222] font-normal">
            <p>#123456</p>
            <p>In progress</p>
            <p>Jul, 31 2024</p>
            <p>Maadi, Cairo, Egypt.</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Progress active label="Order placed" />
          <div className="flex-1 h-[2px] bg-[#ACACAC] mx-2" />
          <Progress active label="Shipping" />
          <div className="flex-1 h-[2px] bg-[#ACACAC] mx-2" />
          <Progress label="Completed" />
        </div>
      </div>

      {/* ===== Card 2 ===== */}
      <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
        <div className="flex justify-between text-sm text-[#ACACAC]">
          <div className="space-y-1 font-sans font-normal text-[#222222]/50">
            <p>Order No.</p>
            <p>Status</p>
            <p>Date</p>
            <p>Address</p>
          </div>
          <div className="space-y-1 font-sans text-right text-[#222222] font-normal">
            <p>#123457</p>
            <p>In progress</p>
            <p>Aug, 5 2024</p>
            <p>Zamalek, Cairo, Egypt.</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Progress active label="Order placed" />
          <div className="flex-1 h-[2px] bg-[#ACACAC] mx-2" />
          <Progress active label="Shipping" />
          <div className="flex-1 h-[2px] bg-[#ACACAC] mx-2" />
          <Progress label="Completed" />
        </div>
      </div>
    </div>
  );
}
