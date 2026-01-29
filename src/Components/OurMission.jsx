import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

export default function OurMission() {
  return (
    <div className="bg-[#F5F5F5] w-full h-167">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-4">
          <h3 className="font-sans font-bold text-[34px] text-black relative top-[120px]">
            Our Mission
          </h3>
          <div className="cards w-[1128px] h-[302px] grid grid-cols-3 gap-10 relative top-[200px]">
            <div className="w-90 h-full flex flex-col justify-center gap-4 bg-[#ffffff] rounded-lg p-3">
              <h4 className="font-sans font-bold text-[22px] text-black">
                Quality Selection
              </h4>
              <p className="w-[312px] h-[154px] font-sans font-normal text-[16px] text-[#222222]/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.Quality Selection Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Mauris et ultricies est. Aliquam in
                justo varius,
              </p>
              <div className="flex  items-center gap-3">
                <a
                  href="#"
                  className="capitalize text-[#D9176C] font-sans font-normal text-[16px]"
                >
                  view more
                </a>
                <FaArrowRight className="text-[#D9176C]" />
              </div>
            </div>
            <div className="w-90 h-full flex flex-col justify-center gap-4 bg-[#ffffff] rounded-lg p-3">
              <h4 className="font-sans font-bold text-[22px] text-black">
                Exceptional Service
              </h4>
              <p className="w-[312px] h-[154px] font-sans font-normal text-[16px] text-[#222222]/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.Quality Selection Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Mauris et ultricies est. Aliquam in
                justo varius,
              </p>
              <div className="flex  items-center gap-3">
                <a
                  href="#"
                  className="capitalize text-[#D9176C] font-sans font-normal text-[16px]"
                >
                  view more
                </a>
                <FaArrowRight className="text-[#D9176C]" />
              </div>
            </div>
            <div className="w-90 h-full flex flex-col justify-center gap-4 bg-[#ffffff] rounded-lg p-3">
              <h4 className="font-sans font-bold text-[22px] text-black">
                Set Up Stores
              </h4>
              <p className="w-[312px] h-[154px] font-sans font-normal text-[16px] text-[#222222]/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.Quality Selection Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Mauris et ultricies est. Aliquam in
                justo varius,
              </p>

              <a
                href="#"
                className="capitalize text-[#D9176C] font-sans font-normal text-[16px]"
              >
                soon
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
