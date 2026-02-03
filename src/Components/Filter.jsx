import React from "react";
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
    <div>
      <div className="collapse collapse-arrow bg-base-100 border rounded-lg">
        <input type="checkbox" defaultChecked />

        <div className="collapse-title text-lg font-semibold">Categories</div>
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
                className="checkbox checkbox-sm checkbox-primary"
                onChange={() => handleChange(cat.name)}
              />
              <span className="text-sm">{cat.name}</span>
            </div>
            <span className="text-sm text-gray-500">({cat.count})</span>
          </label>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setShowAll(!showAll)}
        className="text-primary text-sm font-medium"
      >
        {showAll ? "Show Less" : "Load More"}
      </button>
    </div>
  );
}
