import React from 'react'
import { FaCheck } from 'react-icons/fa';

export default function Progress({ active, label }) {
  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs
          ${active ? "bg-[#D9176C]" : "bg-[#ACACAC]"}`}
        >
          <FaCheck />
        </div>
        <span
          className={`text-xs ${
            active ? "text-[#D9176C] font-medium" : "text-[#ACACAC]"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
