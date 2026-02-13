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
      <HeroSection height={804}>
        <div className="w-full flex justify-center relative top-90">
          <div className="flex w-full max-w-[536px] h-[59px] rounded-full overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-6 outline-none text-[#222222]/50"
            />

            <button className="px-4 text-[#ffffff]/50">
              <FaMicrophone />
            </button>

            <button className="px-5 bg-[#D9176C] text-white">
              <FaSearch />
            </button>
          </div>
        </div>
      </HeroSection>
      <Features />
      <BestSellers />
      <Recommendation />
      <FlashSale />
    </div>
  );
}
