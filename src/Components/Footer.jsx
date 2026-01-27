import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/book-bookmark 1.png";
import icon from "../assets/Vector (6).png";
export default function Footer() {
  return (
    <div className="w-full h-[370px] bg-[#3B2F4A] text-white flex items-center gap-3.5">
      <div className="container mx-auto"></div>
      <footer>
        <div className="left flex  justify-between items-center gap-2 mb-3">
          <nav className="flex justify-center items-center gap-2">
            <img src={logo} />
            <Link
              to="/"
              className="text-base font-sans font-regular text-white"
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-base font-sans font-regular text-white"
            >
              Books
            </Link>
            <Link
              to="/"
              className="text-base font-sans font-regular text-white"
            >
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-8 justify-center mr-2.5 ">
            <FaFacebookF className="text-xl" />
            <FaInstagram className="text-xl" />
            <FaYoutube className="text-xl" />
            <FaXTwitter className="text-xl" />
          </div>
        </div>
        <hr className="w-dvw text-white" />
        <div className="flex  justify-between gap-2 mt-3">
          <p className="font-sans text-lg font-normal">
            Developed By EraaSoft All Copy Rights Reserved @2024
          </p>
          <div className="flex justify-center items-center gap-3 mr-12">
            <img
              src={icon}
              alt="language"
              className="text-white w-6 h-6 "
            />
            <select name="" id="" className="text-[#ffffff]/50 font-sans text-sm bg-transparent px-3 border-2 border-black">
              <option value=""></option>
              <option>English</option>
              <option>Arabic</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
}
