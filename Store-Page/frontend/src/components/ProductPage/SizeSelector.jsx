import { useState } from "react";

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = [30, 32, 34, 36, 38, 40, 42, 44];

  return (
    <div className="grid grid-cols-5 gap-2 w-70 mt-10">
      {sizes.map((size) => (
        <div key={size} className={`border rounded transition-transform duration-250 hover:scale-110 ${selectedSize === size ? "bg-red-300 scale-110 border-gray-200" : "bg-white hover:scale-105"}`}>
          <button
            onClick={() => setSelectedSize(size)}
            className="p-2 w-full h-full font-extralight"
          >{size}</button>
        </div>
      ))}
    </div>
  );
};

export default SizeSelector;