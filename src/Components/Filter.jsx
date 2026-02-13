import React, { useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const categories = [
  { name: "All Categories", count: 1450 },
  { name: "Business", count: 140 },
  { name: "Kids", count: 309 },
  { name: "Art", count: 102 },
  { name: "History", count: 204 },
  { name: "Romance", count: 89 },
  { name: "Fantasy", count: 47 },
  { name: "Self Help", count: 163 },
  { name: "Cooking", count: 211 },
  { name: "Sports", count: 92 },
];

export default function Filter() {
  const [selected, setSelected] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleChange = (value) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const visibleCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <div className="w-[296px] bg-[#f5f5f5] p-4 rounded-xl">
      <div className="flex items-center gap-2 mb-4">
        <HiOutlineAdjustmentsHorizontal className="text-xl text-gray-700" />
        <h2 className="text-lg font-semibold text-gray-800">Filter</h2>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border rounded-lg">
        <input type="checkbox" defaultChecked />

        <div className="collapse-title text-lg font-semibold text-[#D9176C]">
          Categories
        </div>

        <div className="collapse-content space-y-3">
          {visibleCategories.map((cat) => (
            <label
              key={cat.name}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected.includes(cat.name)}
                  onChange={() => handleChange(cat.name)}
                  className="checkbox checkbox-sm"
                  style={{ accentColor: "#D9176C" }}
                />
                <span className="text-sm">{cat.name}</span>
              </div>
              <span className="text-sm text-gray-500">({cat.count})</span>
            </label>
          ))}

          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="text-[#D9176C] text-sm font-medium mt-2"
          >
            {showAll ? "Show Less" : "Load More"}
          </button>
        </div>
      </div>
    </div>
  );
}
