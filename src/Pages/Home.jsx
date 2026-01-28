import React from 'react'
import Features from '../Components/Features';
import BestSellers from '../Components/BestSellers';
import Recommendation from '../Components/Recommendation';
import FlashSale from '../Components/FlashSale';
import HeroSearch from '../Components/HeroSearch';
export default function Home() {
  return (
    <div>
        <HeroSearch/>
        <Features/>
        <BestSellers/>
        <Recommendation/>
        <FlashSale/>
        
    </div>
  )
}
