import React from 'react'
import OurMission from '../Components/OurMission'
import Features from '../Components/Features';
import ContactForm from '../Components/ContactForm';
import HeroSection from '../Components/HeroSection';

export default function AboutUs() {
  return (
    <>
      <HeroSection>
        <div className="h-full relative z-10 flex flex-col items-center justify-center gap-5 ">
          <h2 className="font-sans font-bold text-5xl text-white">
            About Bookshop
          </h2>
          <p className="w-163 h-[99px] font-sans font-normal text-2xl text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
      </HeroSection>
      <OurMission />
     <ContactForm/>
      <Features/>
    </>
  );
}
