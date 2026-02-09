import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div className="flex items-center gap-4">
      
      <button
        onClick={() => count > 1 && setCount(count - 1)}
        className="w-8 h-8 flex items-center justify-center border rounded-full"
      >
        −
      </button>

     
      <span className="text-lg font-medium w-6 text-center">{count}</span>

      
      <button
        onClick={() => setCount(count + 1)}
        className="w-8 h-8 flex items-center justify-center border rounded-full"
      >
        +
      </button>
    </div>
  );
}
