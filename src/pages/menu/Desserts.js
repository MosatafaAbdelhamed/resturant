import React from "react";
import ProductCard from "../../components/ProductCard";
import dessertsData from "../../data/dessertsData";

function Desserts() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-yellow-700 mb-8 text-center">كل الحلويات</h2>
      <div className="flex flex-wrap justify-center">
        {dessertsData.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Desserts; 