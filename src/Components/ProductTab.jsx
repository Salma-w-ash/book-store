import React, { useState } from 'react'
import Reviews from './Reviews';
import Recommendation from './Recommendation';
import Details from './Details';

export default function ProductTab() {
    const [ActiveTab, setActiveTab] = useState("details")
  return (
    <div>
      <div className="container flex justify-center gap-6 p-4">
        <button
          onClick={() => setActiveTab("details")}
          className={`pb-2 font-sans font-bold text-2xl text-black  ${
            ActiveTab === "details"
              ? "border-b-2 border-orange-500 font-semibold"
              : "text-gray-400"
          }`}
        >
          Product Details
        </button>
        <button
          onClick={() => setActiveTab("Reviews")}
          className={`pb-2 font-sans font-bold text-2xl text-black  ${
            ActiveTab === "Reviews"
              ? "border-b-2 border-orange-500 font-semibold"
              : "text-gray-400"
          }`}
        >
          Customer Reviews
        </button>
        <button
          onClick={() => setActiveTab("Recommended")}
          className={`pb-2 font-sans font-bold text-2xl text-black  ${
            ActiveTab === "Recommend"
              ? "border-b-2 border-orange-500 font-semibold"
              : "text-gray-400"
          }`}
        >
          Recommended For You
        </button>
      </div>
      <div>
        {ActiveTab === "details" && <Details />}
        {ActiveTab === "Reviews" && <Reviews />}
        {ActiveTab === "Recommended" && <Recommendation />}
      </div>
    </div>
  );
}
