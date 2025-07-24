import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import kosharyData from "../data/kosharyData";
import drinksData from "../data/drinksData";
import dessertsData from "../data/dessertsData";
import addonsData from "../data/addonsData";
import bgImg from "../assets/2046b1cf03f033ce4809b9601e0d05c1c2dd7080-211022203342.webp";

function Section({ title, data, category, sectionRef, id }) {
  return (
    <div className="mb-14" ref={sectionRef} id={id}>
      <div className="flex flex-row-reverse justify-between items-center mb-4 px-2">
        <h2 className="text-2xl font-extrabold text-[#a71d2a] drop-shadow text-right">{title}</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {data.slice(0, 4).map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
      <div className="flex justify-center mt-2">
        <Link to={`/menu?category=${category}`} className="text-sm text-[#eab308] font-semibold hover:underline hover:text-[#a71d2a] transition-colors duration-200">عرض المزيد</Link>
      </div>
    </div>
  );
}

function Home() {
  const kosharyRef = useRef(null);
  const drinksRef = useRef(null);
  const dessertsRef = useRef(null);
  const addonsRef = useRef(null);

  const handleScrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-yellow-50 via-[#fff7e6] to-[#f5f5f5]">
      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center text-center min-h-[450px] md:min-h-[600px] lg:min-h-[700px] w-full mb-8"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
        <div className="relative z-10 flex flex-col items-center py-10">
          <span className="text-5xl md:text-6xl font-extrabold tracking-widest drop-shadow-lg text-[#a71d2a] mb-4" style={{textShadow: '0 2px 8px #fff, 0 1px 0 #eab308'}}>كشري التحرير</span>
          <p className="text-xl md:text-2xl font-bold mb-2 drop-shadow text-[#42210b]" style={{textShadow: '0 2px 8px #fff'}}>أصل الكشري المصري منذ 1963</p>
          <p className="text-lg md:text-xl mb-6 font-semibold text-[#42210b] drop-shadow" style={{textShadow: '0 2px 8px #fff'}}>استمتع بأشهى كشري في مصر مع أفضل جودة وأحسن خدمة!</p>
          <div className="bg-[#eab308] text-[#a71d2a] font-extrabold rounded-full px-8 py-3 text-xl shadow-lg mb-2 border-2 border-white">
            الخط الساخن: 19719
          </div>
        </div>
      </div>
      {/* أزرار التنقل السريع */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button onClick={() => handleScrollTo(kosharyRef)} className="bg-[#a71d2a] hover:bg-[#eab308] hover:text-[#a71d2a] text-white font-bold py-2 px-7 rounded-full shadow-lg transition-colors duration-200 border-2 border-[#eab308]">كشري</button>
        <button onClick={() => handleScrollTo(drinksRef)} className="bg-[#388e3c] hover:bg-[#eab308] hover:text-[#388e3c] text-white font-bold py-2 px-7 rounded-full shadow-lg transition-colors duration-200 border-2 border-[#eab308]">مشروبات</button>
        <button onClick={() => handleScrollTo(dessertsRef)} className="bg-[#eab308] hover:bg-[#a71d2a] hover:text-[#eab308] text-[#a71d2a] font-bold py-2 px-7 rounded-full shadow-lg transition-colors duration-200 border-2 border-[#a71d2a]">حلويات</button>
        <button onClick={() => handleScrollTo(addonsRef)} className="bg-[#795548] hover:bg-[#eab308] hover:text-[#795548] text-white font-bold py-2 px-7 rounded-full shadow-lg transition-colors duration-200 border-2 border-[#eab308]">إضافات</button>
      </div>
      {/* الأقسام */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-2">
        <Section title="كشري" data={kosharyData} category="koshary" sectionRef={kosharyRef} id="koshary-section" />
        <Section title="مشروبات" data={drinksData} category="drinks" sectionRef={drinksRef} id="drinks-section" />
        <Section title="حلويات" data={dessertsData} category="desserts" sectionRef={dessertsRef} id="desserts-section" />
        <Section title="إضافات" data={addonsData} category="addons" sectionRef={addonsRef} id="addons-section" />
      </div>
    </div>
  );
}

export default Home; 