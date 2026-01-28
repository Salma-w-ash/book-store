import React from 'react'
import rich from '../assets/93e9747c9160601f7f3a7a57420103fe4025b18a.png'
import design from '../assets/0d3a1ade0d5cf7e267b48d4ad0b355bac73a3db0.jpg'
import book3 from '../assets/e7a63dace18f214af63005731d2c8a3964cc30ae.png'
import book4 from '../assets/6d9d091de0e9c20b618cba0b9f935885da4cdb82.jpg'
import book5 from '../assets/28aba63bdc086aa49f1169be9ff5208128b5a8af.jpg'
import book6 from '../assets/71cd2100a54a321ee4e0f9170a9485f8f2d1f3d2.jpg'
import book7 from '../assets/03e6a888f25ecc86e317e35c9f91c8c30c64b35e.jpg'
import book8 from '../assets/84c641b61f0b01a81c58e362400f0110095da7e8.png'

export default function BestSellers() {
  return (
    <div className="w-full h-[795px] bg-[#3B2F4A]">
      <div className="container mx-auto">
        <div className="h-[555px] flex flex-col justify-center items-center gap-20 relative top-30">
          <h2 className="font-sans font-bold text-white text-[26px]">
            Best Seller
          </h2>
          <p className="w-129 h-11 font-sans font-normal text-[16px] text-[#ffffff]/50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
          <div className="w-full h-65 grid grid-cols-8">
            <img src={rich} alt="rich dad" className="w-[173px] h-full rounded-xl" />
            <img src={design} alt="design" className="w-[173px] h-full rounded-xl" />
            <img src={book3} alt="power" className="w-[173px] h-full rounded-xl" />
            <img src={book4} alt="book4" className="w-[173px] h-full rounded-xl" />
            <img src={book5} alt="book5" className="w-[173px] h-full rounded-xl" />
            <img src={book6} alt="book6" className="w-[173px] h-full rounded-xl" />
            <img src={book7} alt="book7" className="w-[173px] h-full rounded-xl" />
            <img src={book8} alt="book8" className="w-[173px] h-full rounded-xl" />
          </div>
          <button className="w-45 h-12 text-white text-center font-sans font-semibold text-lg capitalize bg-[#D9176C] rounded-lg p-5">
            shop now
          </button>
        </div>
      </div>
    </div>
  );
}
