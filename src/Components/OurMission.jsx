import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function OurMission() {
  return (
    <div className="bg-[#F5F5F5] w-full overflow-x-hidden py-16">
      <div className="flex flex-col items-center px-4">
       
        <h3 className="font-sans font-bold text-3xl sm:text-4xl text-black text-center mb-8">
          Our Mission
        </h3>

        {/* Cards Grid */}
        <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col justify-center gap-4 bg-white rounded-lg p-4 shadow">
            <h4 className="font-sans font-bold text-xl sm:text-[22px] text-black">
              Quality Selection
            </h4>
            <p className="text-[14px] sm:text-[16px] text-[#222222]/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="text-[#D9176C] font-sans text-[16px] capitalize"
              >
                view more
              </a>
              <FaArrowRight className="text-[#D9176C]" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-center gap-4 bg-white rounded-lg p-4 shadow">
            <h4 className="font-sans font-bold text-xl sm:text-[22px] text-black">
              Exceptional Service
            </h4>
            <p className="text-[14px] sm:text-[16px] text-[#222222]/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="text-[#D9176C] font-sans text-[16px] capitalize"
              >
                view more
              </a>
              <FaArrowRight className="text-[#D9176C]" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-center gap-4 bg-white rounded-lg p-4 shadow">
            <h4 className="font-sans font-bold text-xl sm:text-[22px] text-black">
              Set Up Stores
            </h4>
            <p className="text-[14px] sm:text-[16px] text-[#222222]/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
            <a
              href="#"
              className="text-[#D9176C] font-sans text-[16px] capitalize"
            >
              soon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
