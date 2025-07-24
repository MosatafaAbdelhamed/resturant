import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import kosharyData from "../data/kosharyData";
import drinksData from "../data/drinksData";
import dessertsData from "../data/dessertsData";
import addonsData from "../data/addonsData";

function CategoryRow({ title, data, rowRef, expand }) {
  const [showAll, setShowAll] = useState(expand || false);
  useEffect(() => {
    if (expand) setShowAll(true);
  }, [expand]);
  return (
    <div className="mb-12" ref={rowRef}>
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-2xl font-bold text-red-700 mb-0 text-right w-full">{title}</h2>
      </div>
      {!showAll ? (
        <>
          <div className="flex overflow-x-auto space-x-4 px-2 scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-yellow-100">
            {data.slice(0, 5).map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
          {data.length > 5 && (
            <div className="flex justify-center mt-2 px-2">
              <button
                onClick={() => setShowAll(true)}
                className="text-sm text-yellow-700 hover:underline font-semibold"
              >
                عرض المزيد
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
            {data.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
          <div className="flex justify-center mt-2 px-2">
            <button
              onClick={() => setShowAll(false)}
              className="text-sm text-yellow-700 hover:underline font-semibold"
            >
              عرض أقل
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function Menu() {
  const location = useLocation();
  const kosharyRef = useRef(null);
  const drinksRef = useRef(null);
  const dessertsRef = useRef(null);
  const addonsRef = useRef(null);

  const [expandCategory, setExpandCategory] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      let ref = null;
      const expand = { koshary: false, drinks: false, desserts: false, addons: false };
      if (category === "koshary") { ref = kosharyRef; expand.koshary = true; }
      if (category === "drinks") { ref = drinksRef; expand.drinks = true; }
      if (category === "desserts") { ref = dessertsRef; expand.desserts = true; }
      if (category === "addons") { ref = addonsRef; expand.addons = true; }
      setExpandCategory(expand);
      if (ref && ref.current) {
        setTimeout(() => {
          ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    } else {
      setExpandCategory({});
    }
  }, [location]);

  // أزرار التنقل السريع
  const handleScrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white py-10">
      <h1 className="text-3xl font-bold text-red-700 mb-10 text-center">قائمة الطعام</h1>
      {/* أزرار التنقل السريع */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button onClick={() => handleScrollTo(kosharyRef)} className="bg-[#a71d2a] hover:bg-[#eab308] hover:text-[#a71d2a] text-white font-bold py-2 px-7 rounded-full shadow-lg transition-colors duration-200 border-2 border-[#eab308]">كشري</button>
        <button onClick={() => handleScrollTo(drinksRef)} className="bg-[#388e3c] hover:bg-[#eab308] hover:text-[#388e3c] text-white font-bold py-2 px-7 rounded-full shadow-lg transition-colors duration-200 border-2 border-[#eab308]">مشروبات</button>
        <button onClick={() => handleScrollTo(dessertsRef)} className="bg-[#eab308] hover:bg-[#a71d2a] hover:text-[#eab308] text-[#a71d2a] font-bold py-2 px-7 rounded-full shadow-lg transition-colors duration-200 border-2 border-[#a71d2a]">حلويات</button>
        <button onClick={() => handleScrollTo(addonsRef)} className="bg-[#795548] hover:bg-[#eab308] hover:text-[#795548] text-white font-bold py-2 px-7 rounded-full shadow-lg transition-colors duration-200 border-2 border-[#eab308]">إضافات</button>
      </div>
      <div className="max-w-7xl mx-auto">
        <CategoryRow title="كشري" data={kosharyData} rowRef={kosharyRef} expand={expandCategory.koshary} />
        <CategoryRow title="مشروبات" data={drinksData} rowRef={drinksRef} expand={expandCategory.drinks} />
        <CategoryRow title="حلويات" data={dessertsData} rowRef={dessertsRef} expand={expandCategory.desserts} />
        <CategoryRow title="إضافات" data={addonsData} rowRef={addonsRef} expand={expandCategory.addons} />
      </div>
    </div>
  );
}

export default Menu; 