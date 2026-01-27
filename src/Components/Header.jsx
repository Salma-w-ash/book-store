import React from "react";
import logo from "../assets/book-bookmark 1.png"
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="w-full h-[92px] fixed bg-[#000000]/20  ">
        <div className="container mx-auto h-full flex justify-between items-center gap-2">
          <div className="header">
            <header>
              <nav className="flex justify-center items-center gap-3">
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
            </header>
          </div>

          <div className="logBtn flex justify-center items-center gap-2">
             <button
              type="submit"
              className="w-[79px] h-11 bg-[#D9176C] text-white font-sans font-medium rounded-8 p-3"
            >
              Login
            </button>
            <button
              type="submit"
              className="w-[79px] h-11 bg-white text-[#D9176C] font-sans font-medium rounded-8"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
