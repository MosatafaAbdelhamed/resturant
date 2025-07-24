import React from "react";
import ProductCard from "../../components/ProductCard";
import kosharyData from "../../data/kosharyData";

function Koshary() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-red-700 mb-8 text-center">كل أصناف الكشري</h2>
      <div className="flex flex-wrap justify-center">
        {kosharyData.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Koshary; 