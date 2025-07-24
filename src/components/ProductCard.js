import React from "react";

function ProductCard({ image, name, price }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-56 m-2 flex flex-col items-center hover:scale-105 transition-transform duration-200">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col items-center flex-1 w-full">
        <h3 className="text-lg font-bold text-red-700 mb-2 text-center">{name}</h3>
        <span className="text-yellow-700 font-semibold text-md mb-2">{price} ج.م</span>
        <button className="mt-auto w-full bg-red-600 hover:bg-yellow-400 hover:text-red-800 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 shadow">
          اطلب الآن
        </button>
      </div>
    </div>
  );
}

export default ProductCard; 