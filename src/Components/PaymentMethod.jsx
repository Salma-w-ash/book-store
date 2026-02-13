import { useState } from "react";

export default function PaymentMethod() {
  const [selectedOptions, setSelectedOptions] = useState({
    online: false,
    cash: false,
    pos: false,
  });

  const handleChange = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
      <h3 className="text-sm font-medium">Payment Method</h3>

      <div className="flex flex-wrap gap-3">
      
        <label
          className={`flex-1 min-w-[120px] border rounded-lg px-4 py-2 flex items-center gap-2 cursor-pointer ${
            selectedOptions.online
              ? "border-[#D9176C] text-[#D9176C] bg-[#D9176C]/10"
              : "text-[#222222]/50"
          }`}
        >
          <input
            type="checkbox"
            checked={selectedOptions.online}
            onChange={() => handleChange("online")}
            className="w-4 h-4"
          />
          Online payment
        </label>

        <label
          className={`flex-1 min-w-[120px] border rounded-lg px-4 py-2 flex items-center gap-2 cursor-pointer ${
            selectedOptions.cash
              ? "border-[#D9176C] text-[#D9176C] bg-[#D9176C]/10"
              : "text-[#222222]/50"
          }`}
        >
          <input
            type="checkbox"
            checked={selectedOptions.cash}
            onChange={() => handleChange("cash")}
            className="w-4 h-4"
          />
          Cash on delivery
        </label>

      
        <label
          className={`flex-1 min-w-[120px] border rounded-lg px-4 py-2 flex items-center gap-2 cursor-pointer ${
            selectedOptions.pos
              ? "border-[#D9176C] text-[#D9176C] bg-[#D9176C]/10"
              : "text-[#222222]/50"
          }`}
        >
          <input
            type="checkbox"
            checked={selectedOptions.pos}
            onChange={() => handleChange("pos")}
            className="w-4 h-4"
          />
          POS on delivery
        </label>
      </div>
    </div>
  );
}
