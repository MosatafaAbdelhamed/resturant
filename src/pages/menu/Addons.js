import React from "react";
import ProductCard from "../../components/ProductCard";
import addonsData from "../../data/addonsData";

function Addons() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-brown-700 mb-8 text-center">كل الإضافات</h2>
      <div className="flex flex-wrap justify-center">
        {addonsData.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Addons; 