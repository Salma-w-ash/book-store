import React from "react";

export default function ResetPassword() {
  return (
    <div className="w-full h-[1260px] bg-[#F5F5F5]">
      <div className="container mx-auto">
        <div className="w-[480px] h-[310px] flex flex-col">
          <h2 className="bg-[#D9176C] font-sans font-semibold text-lg">
            Reset your password!
          </h2>
          <p className="text-[#222222]/50 font-sans text-sm">
            Enter the 4 dights code that you received on your email
          </p>
          <div className="grid grid-cols-4 gap-2.5">
            <div className="w-15 h-15 rounded-xl border border-[#222222]"></div>
            <div className="w-15 h-15 rounded-xl border border-[#222222]"></div>
            <div className="w-15 h-15 rounded-xl border border-[#222222]"></div>
            <div className="w-15 h-15 rounded-xl border border-[#222222]"></div>
          </div>
          <button className="w-[312px] h-[48px] bg-[#D9176C] rounded-lg font-sans font-semibold text-white text-xl capitalize">
            Reset password
          </button>
          <p className="font-sans font-normal text-[16px]">
            Didn’t receive a code?
            <span className="bg-[#D9176C] font-sans font-normal text-[16px]">
              Send again
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
