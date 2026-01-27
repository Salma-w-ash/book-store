import React from "react";
import logo from "../assets/book-bookmark 1.png"
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="w-full h-[92 px] bg-black opacity-25 flex justify-between items-center gap-2">
        <div className="header">
          <header>
            <nav>
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

        <div className="logBtn">
          <button className="w-[79 px] h-[44 px] bg-[#D9176C] text-white font-sans border-8">
            Login
          </button>
          <button className="w-[79 px] h-[44 px] bg-white text-[#D9176C] font-sans border-8">
            Signup
          </button>
        </div>
      </div>
    </>
  );
}
