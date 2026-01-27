import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/book-bookmark 1.png";
import icon from "../assets/Vector (6).png";
export default function Footer() {
  return (
    <div className="bg-[#3B2F4A] text-white grid grid-cols-2">
      <footer>
        <div className="top flex flex-col gap-2">
          <div className="flex justify-center gap-1.5">
            <img src={logo} alt="logo" />
            <nav className="flex gap-6 justify-center">
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
          </div>

          <p className="font-sans text-lg font-normal">
            Developed By EraaSoft All Copy Rights Reserved @2024
          </p>
          <hr className="w-full text-white" />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center gap-6 justify-center ">
            <FaFacebookF className="text-xl" />
            <FaInstagram className="text-xl" />
            <FaYoutube className="text-xl" />
            <FaXTwitter className="text-xl" />
          </div>
          <img src={icon} alt="language" className="text-white w-6 h-6" />
        </div>
      </footer>
    </div>
  );
}
