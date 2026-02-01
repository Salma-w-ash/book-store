import React from 'react'

export default function HeroSection({ height , children }) {
  return (
    <div>
      <div className="bg-[url(src/assets/533643aa8db82414f48d43a992d009dda3961386.png)] w-full h-[804px] relative  bg-center bg-cover mt-0">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
