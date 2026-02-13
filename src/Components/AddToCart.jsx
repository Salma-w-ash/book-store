// CheckoutButton.jsx
import React from "react";

export default function AddToCart () {
  return (
    <button className="flex items-center justify-center bg-[#D9176C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors w-full max-w-xs">
      <div className="flex flex-col text-left">
        <span className="text-sm">2 Item</span>
        <span className="text-lg font-bold">$80</span>
      </div>
      <div className="ml-4">
        <span className="inline-block bg-white text-[#D9176C] rounded-full p-2">
          Move To Cart
        </span>
      </div>
    </button>
  );
};

