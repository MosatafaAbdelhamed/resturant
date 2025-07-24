"use client"

import { useRef } from "react"
import { Link } from "react-router-dom"
import { Star, Phone, MapPin, Clock, Sparkles, ChefHat, Heart } from "lucide-react"
import ProductCard from "../components/ProductCard"
import kosharyData from "../data/kosharyData"
import drinksData from "../data/drinksData"
import dessertsData from "../data/dessertsData"
import addonsData from "../data/addonsData"
import bgImg from "../assets/2046b1cf03f033ce4809b9601e0d05c1c2dd7080-211022203342.webp"

function Section({ title, data, category, sectionRef, id, icon, color }) {
  return (
    <div className="mb-20 group" ref={sectionRef} id={id}>
      <div className="flex flex-row-reverse justify-between items-center mb-8 px-4">
        <div className="flex items-center gap-4">
          <div className={`w-2 h-12 bg-gradient-to-b ${color} rounded-full animate-pulse`}></div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{icon}</span>
            <h2 className="text-4xl font-black text-transparent bg-gradient-to-r from-[#a71d2a] via-[#d32f2f] to-[#eab308] bg-clip-text drop-shadow-sm">
              {title}
            </h2>
          </div>
          <Sparkles className="w-6 h-6 text-[#eab308] animate-spin" style={{ animationDuration: "3s" }} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {data.slice(0, 4).map((item, index) => (
          <div
            key={item.id}
            className="transform transition-all duration-500 hover:scale-105 animate-fadeInUp"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <ProductCard {...item} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          to={`/menu?category=${category}`}
          className="group relative bg-gradient-to-r from-[#eab308] to-[#fbbf24] text-[#a71d2a] font-bold py-4 px-10 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-[#a71d2a]/20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#a71d2a] to-[#d32f2f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
            عرض المزيد <Heart className="w-5 h-5 group-hover:animate-pulse" />
          </span>
        </Link>
      </div>
    </div>
  )
}

function Home() {
  const kosharyRef = useRef(null)
  const drinksRef = useRef(null)
  const dessertsRef = useRef(null)
  const addonsRef = useRef(null)

  const handleScrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section المحسن */}
      <div
        className="relative flex flex-col items-center justify-center text-center min-h-[500px] md:min-h-[700px] lg:min-h-[800px] w-full mb-12 overflow-hidden"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay متدرج */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-0"></div>

        {/* محتوى Hero */}
        <div className="relative z-10 flex flex-col items-center py-16 px-4 max-w-6xl mx-auto">
          {/* العنوان الرئيسي */}
          <div className="mb-8 animate-fadeInUp">
            <div className="flex items-center justify-center gap-4 mb-4">
              <ChefHat className="w-12 h-12 text-[#eab308] animate-bounce" />
              <span
                className="text-6xl md:text-8xl font-black tracking-wider text-transparent bg-gradient-to-r from-[#eab308] via-[#fbbf24] to-[#a71d2a] bg-clip-text drop-shadow-2xl animate-pulse"
                style={{
                  textShadow: "0 0 30px rgba(234, 179, 8, 0.5), 0 0 60px rgba(167, 29, 42, 0.3)",
                  filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                }}
              >
                كشري التحرير
              </span>
              <Star className="w-12 h-12 text-[#eab308] animate-spin" style={{ animationDuration: "4s" }} />
            </div>
          </div>

          {/* النص الوصفي */}
          <div className="text-center mb-8 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <p className="text-2xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">أصل الكشري المصري منذ 1963</p>
            <p className="text-lg md:text-2xl mb-6 font-semibold text-amber-100 drop-shadow-md max-w-4xl">
              استمتع بأشهى كشري في مصر مع أفضل جودة وأحسن خدمة!
              <br />
              طعم أصيل وتراث عريق في كل طبق
            </p>
          </div>

          {/* معلومات التواصل */}
          <div
            className="flex flex-col sm:flex-row gap-6 items-center animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="group bg-gradient-to-r from-[#eab308] to-[#fbbf24] text-[#a71d2a] font-black rounded-2xl px-8 py-4 text-xl shadow-2xl border-4 border-white/30 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 animate-pulse" />
                <span>الخط الساخن: 19719</span>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl px-6 py-3 shadow-lg border border-white/30">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>6 أكتوبر</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl px-6 py-3 shadow-lg border border-white/30">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>8ص - 11م</span>
                </div>
              </div>
            </div>
          </div>

          {/* تقييم النجوم */}
          <div className="mt-8 animate-fadeInUp" style={{ animationDelay: "0.9s" }}>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#eab308] fill-current animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <span className="text-white font-bold">4.9/5 تقييم العملاء</span>
            </div>
          </div>
        </div>

        {/* عناصر ديكورية */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#eab308]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-[#a71d2a]/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
      </div>

      {/* أزرار التنقل السريع المحسنة */}
      <div className="flex flex-wrap justify-center gap-6 mb-16 px-4">
        <button
          onClick={() => handleScrollTo(kosharyRef)}
          className="group relative bg-gradient-to-r from-[#a71d2a] to-[#d32f2f] text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-[#eab308]/30 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#eab308] to-[#fbbf24] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10 group-hover:text-[#a71d2a] transition-colors duration-300 flex items-center gap-2">
            🍛 كشري <Sparkles className="w-4 h-4 group-hover:animate-spin" />
          </span>
        </button>

        <button
          onClick={() => handleScrollTo(drinksRef)}
          className="group relative bg-gradient-to-r from-[#388e3c] to-[#4caf50] text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-[#eab308]/30 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#eab308] to-[#fbbf24] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10 group-hover:text-[#388e3c] transition-colors duration-300 flex items-center gap-2">
            🥤 مشروبات <Sparkles className="w-4 h-4 group-hover:animate-spin" />
          </span>
        </button>

        <button
          onClick={() => handleScrollTo(dessertsRef)}
          className="group relative bg-gradient-to-r from-[#eab308] to-[#fbbf24] text-[#a71d2a] font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-[#a71d2a]/30 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#a71d2a] to-[#d32f2f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
            🍰 حلويات <Sparkles className="w-4 h-4 group-hover:animate-spin" />
          </span>
        </button>

        <button
          onClick={() => handleScrollTo(addonsRef)}
          className="group relative bg-gradient-to-r from-[#795548] to-[#8d6e63] text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-[#eab308]/30 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#eab308] to-[#fbbf24] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10 group-hover:text-[#795548] transition-colors duration-300 flex items-center gap-2">
            🧄 إضافات <Sparkles className="w-4 h-4 group-hover:animate-spin" />
          </span>
        </button>
      </div>

      {/* الأقسام المحسنة */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <Section
          title="كشري"
          data={kosharyData}
          category="koshary"
          sectionRef={kosharyRef}
          id="koshary-section"
          icon="🍛"
          color="from-[#a71d2a] to-[#d32f2f]"
        />
        <Section
          title="مشروبات"
          data={drinksData}
          category="drinks"
          sectionRef={drinksRef}
          id="drinks-section"
          icon="🥤"
          color="from-[#388e3c] to-[#4caf50]"
        />
        <Section
          title="حلويات"
          data={dessertsData}
          category="desserts"
          sectionRef={dessertsRef}
          id="desserts-section"
          icon="🍰"
          color="from-[#eab308] to-[#fbbf24]"
        />
        <Section
          title="إضافات"
          data={addonsData}
          category="addons"
          sectionRef={addonsRef}
          id="addons-section"
          icon="🧄"
          color="from-[#795548] to-[#8d6e63]"
        />
      </div>
    </div>
  )
}

export default Home
