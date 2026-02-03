import React from "react";
import { useAuthStore } from "../index";
import logo from "../assets/book-bookmark 1.png";
import { Link } from "react-router-dom";
import profile from "../assets/Group-8.png"
export default function Header() {
const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  
  // const token = useAuthStore((state) => state.token);
  // const logout = useAuthStore((state) => state.logout);
  return (
    <>
      <div className="w-full h-[92px] fixed bg-[#000000]/20 z-20 ">
        <div className="container mx-auto h-full flex justify-between items-center gap-2">
          <div className="header">
            <header>
              <nav className="flex justify-center items-center gap-5">
                <img src={logo} />
                <Link
                  to="/Home"
                  className="text-base font-sans font-regular text-white"
                >
                  Home
                </Link>
                <Link
                  to="/Books"
                  className="text-base font-sans font-regular text-white"
                >
                  Books
                </Link>
                <Link
                  to="/AboutUs"
                  className="text-base font-sans font-regular text-white"
                >
                  About Us
                </Link>
              </nav>
            </header>
          </div>
          {isAuthenticated ? (
            <>
              <div className="relative">
                <FaHeart className="text-2xl text-[#D9176C] cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-[#D9176C] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  2
                </span>
              </div>

              <div className="relative">
                <FaShoppingCart className="text-2xl text-[#D9176C] cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-[#D9176C] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  3
                </span>
              </div>

              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  src={profile}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="hidden md:flex flex-col">
                  <span className="text-white font-sans font-medium text-sm">
                    John Smith
                  </span>
                  <span className="text-white/70 font-sans text-xs">
                    johnsmith@gmail.com
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-[79px] h-11 bg-[#D9176C] text-white font-sans font-medium rounded-8 p-3"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
}
