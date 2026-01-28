import { FaSearch, FaMicrophone } from "react-icons/fa";

export default function HeroSearch() {
  return (
    <section className="bg-[url(src/assets/533643aa8db82414f48d43a992d009dda3961386.png)] relative h-[804px] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="flex w-[536px] h-[59px] rounded-full overflow-hidden bg-white">
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
      </div>
    </section>
  );
}
