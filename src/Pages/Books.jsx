import React, { useEffect, useState } from "react";
import review from "../assets/Frame 1000004767.png";
import rate from "../assets/Frame 1000004763 (2).png";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart, FaSearch, FaMicrophone } from "react-icons/fa";
import axios from "axios";
import Filter from '../Components/Filter'
export default function Books() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const res = await axios.get("https://bookstore.eraasoft.pro/api/book");
      setBooks(res.data.data.books);

      console.log(res.data.data.books);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center gap-4">
        <Filter />
        {/* Search */}
        <div className="flex flex-col justify-center my-6">
          <div className="flex w-[758px] max-w-full h-[59px] rounded-full overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-6 outline-none text-gray-700"
            />
            <button className="px-4 text-gray-400">
              <FaMicrophone />
            </button>
            <button className="px-5 bg-[#D9176C] text-white">
              <FaSearch />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {books.map((book) => (
              <div
                key={book.bookId}
                className="grid grid-cols-2 gap-3 bg-white p-4 rounded-lg"
              >
                {/* IMAGE */}
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-full h-full object-cover rounded-lg"
                />

                
                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold text-lg">{book.bookName}</h2>

                  <p className="text-sm text-gray-500 line-clamp-3">
                    {book.description}
                  </p>

                  <p className="font-semibold text-xl">{book.price}$</p>

                  <p className="text-sm">
                    <span className="text-gray-400">Author:</span> {book.author}
                  </p>

                  <p className="text-sm">
                    <span className="text-gray-400">Year:</span> {book.year}
                  </p>

                  <div className="flex gap-2 mt-2">
                    <button className="flex-1 bg-[#D9176C] text-white py-2 rounded-lg flex items-center justify-center gap-1">
                      Add To Cart
                      <FaShoppingCart />
                    </button>

                    <button className="w-12 h-12 border border-[#D9176C] rounded-lg flex items-center justify-center">
                      <CiHeart className="text-[#D9176C]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        
        </div>
      </div>
    </div>
  );
}
