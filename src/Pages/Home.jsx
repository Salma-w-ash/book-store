import React from 'react'
import Features from '../Components/Features';
import BestSellers from '../Components/BestSellers';
import Recommendation from '../Components/Recommendation';
import FlashSale from '../Components/FlashSale';
import HeroSearch from '../Components/HeroSearch';
import HeroSection from '../Components/HeroSection';
import { FaMicrophone, FaSearch } from 'react-icons/fa';
export default function Home() {
  return (
    <div>
      <HeroSection className="h-[804px]">
        <div className="flex w-[536px] h-[59px] rounded-full overflow-hidden bg-white">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-6 outline-none text-gray-700"
          />

          <button className="px-4 text-gray-400">
            <FaMicrophone/>
          </button>

          <button className="px-5 bg-[#D9176C] text-white">
            <FaSearch/>
          </button>
        </div>
      </HeroSection>
      <Features />
      <BestSellers />
      <Recommendation />
      <FlashSale />
    </div>
  );
}
