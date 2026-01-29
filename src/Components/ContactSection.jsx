import React from 'react'
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactSection() {
  return (
    <div className="bg-[url(d14d7655b7dfc0cacd1072cd70a68c579726248e.jpg)] w-full h-[790px]">
      <div className="bg-[#3B2F4A]/80 inset-0 z-10 "></div>
      <div className="container mx-auto flex justify-between gap-2">
        <div className="w-[592px] h-[554px] flex flex-col justify-center gap-2">
          <h2>Have a Question? Get in Touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <ContactForm />

        <ContactInfo />
      </div>
    </div>
  );
}
