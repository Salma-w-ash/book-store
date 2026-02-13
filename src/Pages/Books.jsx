import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart, FaSearch, FaMicrophone } from "react-icons/fa";

import Filter from "../Components/Filter";
import HeroSection from "../Components/HeroSection";

export default function Books() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const res = await axios.get("https://bookstore.eraasoft.pro/api/book");
      setBooks(res.data.data.books);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="w-full bg-[#f5f5f5] min-h-screen">
      <HeroSection height={120} />

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          <div className="w-[280px] hidden lg:block">
            <Filter />
          </div>

          <div className="flex-1">
            <div className="flex w-full max-w-[1100px] h-[59px] rounded-full overflow-hidden bg-white shadow-sm mb-6">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 px-6 outline-none text-[#222222]/50"
              />
              <button className="px-4 text-[#222222]/50">
                <FaMicrophone />
              </button>
              <button className="px-5 bg-[#D9176C] text-white">
                <FaSearch />
              </button>
            </div>

            {books.length === 0 ? (
              <p className="text-[#222222]/50">Loading Books...</p>
            ) : (
              <div className="flex flex-col gap-6 my-6 max-w-[750px]">
                {books.map((book) => (
                  <div
                    key={book.bookId}
                    className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                 
                    <img
                      src={book.image}
                      alt={book.bookName}
                      className="w-full md:w-40 h-56 object-cover rounded-lg"
                    />

                 
                    <div className="flex flex-col gap-2 flex-1">
                      <h2 className="font-semibold text-lg">{book.bookName}</h2>

                      <p className="text-sm text-[#222222]/50 line-clamp-3">
                        {book.description}
                      </p>

                      <p className="font-bold text-xl">{book.price}$</p>

                      <p className="text-sm">
                        <span className="text-[#222222]/50">Author:</span>{" "}
                        {book.author}
                      </p>

                      <p className="text-sm">
                        <span className="text-[#222222]/50">Year:</span> {book.year}
                      </p>

                      <div className="flex gap-2 mt-2">
                        <button className="flex-1 bg-[#D9176C] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition">
                          Add To Cart
                          <FaShoppingCart />
                        </button>

                        <button className="w-12 h-12 border border-[#D9176C] rounded-lg flex items-center justify-center hover:bg-pink-50 transition">
                          <CiHeart className="text-[#D9176C]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
