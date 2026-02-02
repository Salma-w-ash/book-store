import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/book-bookmark 1.png";
import icon from "../assets/Vector (6).png";

export default function Footer() {
  return (
    <div className="w-full bg-[#3B2F4A] text-white py-8">
      <div className="container mx-auto px-4">
        <footer className="flex flex-col gap-6">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Logo & Navigation */}
            <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <img src={logo} alt="logo" className="w-10 h-10" />
              <Link to="/" className="text-base font-sans hover:text-gray-300">
                Home
              </Link>
              <Link
                to="/books"
                className="text-base font-sans hover:text-gray-300"
              >
                Books
              </Link>
              <Link
                to="/about"
                className="text-base font-sans hover:text-gray-300"
              >
                About Us
              </Link>
            </nav>

            {/* Social Media Icons */}
            <div className="flex items-center gap-6">
              <FaFacebookF className="text-xl cursor-pointer hover:text-gray-300" />
              <FaInstagram className="text-xl cursor-pointer hover:text-gray-300" />
              <FaYoutube className="text-xl cursor-pointer hover:text-gray-300" />
              <FaXTwitter className="text-xl cursor-pointer hover:text-gray-300" />
            </div>
          </div>

         
          <hr className="border-white/30" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-sans text-sm sm:text-base text-center sm:text-left">
              Developed By EraaSoft All Copy Rights Reserved @2024
            </p>

            <div className="flex items-center gap-3">
              <img src={icon} alt="language" className="w-6 h-6" />
              <select className="text-white/70 font-sans text-sm bg-transparent px-3 py-1 border border-white/30 rounded cursor-pointer">
                <option value="" className="bg-[#3B2F4A]">
                  Select Language
                </option>
                <option value="en" className="bg-[#3B2F4A]">
                  English
                </option>
                <option value="ar" className="bg-[#3B2F4A]">
                  Arabic
                </option>
              </select>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
