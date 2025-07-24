import React from "react";
import ProductCard from "../../components/ProductCard";
import drinksData from "../../data/drinksData";

function Drinks() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">كل المشروبات</h2>
      <div className="flex flex-wrap justify-center">
        {drinksData.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Drinks; 