import React from 'react'

export default function About() {
  return (
    <div>
      <section className="bg-[url(src/assets/533643aa8db82414f48d43a992d009dda3961386.png)] relative h-[804px] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/80"></div>
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
      </section>
    </div>
  );
}
