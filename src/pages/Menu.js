"use client"

import { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { Search, X, Sparkles, ChefHat } from "lucide-react"
import ProductCard from "../components/ProductCard"
import kosharyData from "../data/kosharyData"
import drinksData from "../data/drinksData"
import dessertsData from "../data/dessertsData"
import addonsData from "../data/addonsData"

function CategoryRow({ title, data, rowRef, expand }) {
  const [showAll, setShowAll] = useState(expand || false)

  useEffect(() => {
    if (expand) setShowAll(true)
  }, [expand])

  return (
    <div className="mb-16 group" ref={rowRef}>
      <div className="flex justify-between items-center mb-6 px-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-[#a71d2a] to-[#eab308] rounded-full"></div>
          <h2 className="text-3xl font-black text-transparent bg-gradient-to-r from-[#a71d2a] via-[#d32f2f] to-[#eab308] bg-clip-text drop-shadow-sm">
            {title}
          </h2>
          <Sparkles className="w-6 h-6 text-[#eab308] animate-pulse" />
        </div>
      </div>

      {!showAll ? (
        <>
          <div className="flex overflow-x-auto space-x-4 px-4 pb-4 scrollbar-thin scrollbar-thumb-gradient scrollbar-track-yellow-100 scroll-smooth">
            {data.slice(0, 5).map((item, index) => (
              <div
                key={item.id}
                className="transform transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard {...item} />
              </div>
            ))}
          </div>
          {data.length > 5 && (
            <div className="flex justify-center mt-4 px-4">
              <button
                onClick={() => setShowAll(true)}
                className="group relative bg-gradient-to-r from-[#eab308] to-[#fbbf24] text-[#a71d2a] font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-[#a71d2a]/20"
              >
                <span className="relative z-10">عرض المزيد</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#a71d2a] to-[#d32f2f] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  عرض المزيد
                </span>
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {data.map((item, index) => (
              <div
                key={item.id}
                className="transform transition-all duration-300 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard {...item} />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 px-4">
            <button
              onClick={() => setShowAll(false)}
              className="group relative bg-gradient-to-r from-[#a71d2a] to-[#d32f2f] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              عرض أقل
            </button>
          </div>
        </>
      )}
    </div>
  )
}

function Menu() {
  const location = useLocation()
  const kosharyRef = useRef(null)
  const drinksRef = useRef(null)
  const dessertsRef = useRef(null)
  const addonsRef = useRef(null)
  const searchInputRef = useRef(null)

  const [expandCategory, setExpandCategory] = useState({})
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  // دمج جميع البيانات للبحث
  const allProducts = [
    ...kosharyData.map((item) => ({ ...item, category: "كشري" })),
    ...drinksData.map((item) => ({ ...item, category: "مشروبات" })),
    ...dessertsData.map((item) => ({ ...item, category: "حلويات" })),
    ...addonsData.map((item) => ({ ...item, category: "إضافات" })),
  ]

  // وظيفة البحث
  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term.trim() === "") {
      setSearchResults([])
      return
    }

    const filtered = allProducts.filter(
      (product) =>
        product.name?.toLowerCase().includes(term.toLowerCase()) ||
        product.description?.toLowerCase().includes(term.toLowerCase()) ||
        product.category.toLowerCase().includes(term.toLowerCase()),
    )
    setSearchResults(filtered)
  }

  // مسح البحث
  const clearSearch = () => {
    setSearchTerm("")
    setSearchResults([])
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const category = params.get("category")
    if (category) {
      let ref = null
      const expand = { koshary: false, drinks: false, desserts: false, addons: false }
      if (category === "koshary") {
        ref = kosharyRef
        expand.koshary = true
      }
      if (category === "drinks") {
        ref = drinksRef
        expand.drinks = true
      }
      if (category === "desserts") {
        ref = dessertsRef
        expand.desserts = true
      }
      if (category === "addons") {
        ref = addonsRef
        expand.addons = true
      }

      setExpandCategory(expand)
      if (ref && ref.current) {
        setTimeout(() => {
          ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 200)
      }
    } else {
      setExpandCategory({})
    }
  }, [location])

  // أزرار التنقل السريع
  const handleScrollTo = (ref) => {
    if (searchTerm) {
      clearSearch()
    }
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <ChefHat className="w-10 h-10 text-[#a71d2a] animate-bounce" />
          <h1 className="text-5xl font-black text-transparent bg-gradient-to-r from-[#a71d2a] via-[#d32f2f] to-[#eab308] bg-clip-text drop-shadow-lg">
            قائمة الطعام
          </h1>
          <ChefHat className="w-10 h-10 text-[#eab308] animate-bounce" style={{ animationDelay: "0.5s" }} />
        </div>
        <p className="text-xl text-gray-600 font-semibold">اكتشف أشهى الأطباق المصرية الأصيلة</p>
      </div>

      {/* شريط البحث المحسن */}
      <div className="max-w-3xl mx-auto mb-12 px-4">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#a71d2a] to-[#eab308] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200">
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-[#a71d2a] animate-pulse" />
            </div>
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="ابحث عن المنتجات المفضلة لديك..."
              className="block w-full pr-12 pl-12 py-4 text-lg border-0 rounded-2xl bg-transparent placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#eab308]/30 text-right font-medium"
            />
            {searchTerm && (
              <button onClick={clearSearch} className="absolute inset-y-0 left-0 pl-4 flex items-center group">
                <X className="h-6 w-6 text-gray-400 group-hover:text-[#a71d2a] transition-colors duration-200" />
              </button>
            )}
          </div>
        </div>

        {/* عرض عدد النتائج */}
        {searchTerm && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <Sparkles className="w-4 h-4 text-[#eab308]" />
              <span className="text-sm font-semibold text-gray-700">
                {searchResults.length > 0
                  ? `تم العثور على ${searchResults.length} منتج`
                  : "لم يتم العثور على أي منتجات"}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* عرض نتائج البحث أو الفئات */}
      {searchTerm && searchResults.length > 0 ? (
        // نتائج البحث
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {searchResults.map((item, index) => (
              <div
                key={`${item.category}-${item.id}`}
                className="relative group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard {...item} />
                <div className="absolute top-3 left-3 bg-gradient-to-r from-[#a71d2a] to-[#d32f2f] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-200">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : searchTerm && searchResults.length === 0 ? (
        // لا توجد نتائج
        <div className="max-w-4xl mx-auto px-4 text-center py-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-12">
            <Search className="h-20 w-20 mx-auto mb-6 text-gray-300 animate-pulse" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">لم يتم العثور على أي منتجات</h3>
            <p className="text-gray-600 text-lg">جرب البحث بكلمات مختلفة أو تصفح الفئات أدناه</p>
          </div>
        </div>
      ) : (
        // عرض الفئات العادي
        <>
          {/* أزرار التنقل السريع المحسنة */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
            <button
              onClick={() => handleScrollTo(kosharyRef)}
              className="group relative bg-gradient-to-r from-[#a71d2a] to-[#d32f2f] text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-[#eab308]/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#eab308] to-[#fbbf24] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 group-hover:text-[#a71d2a] transition-colors duration-300">🍛 كشري</span>
            </button>
            <button
              onClick={() => handleScrollTo(drinksRef)}
              className="group relative bg-gradient-to-r from-[#388e3c] to-[#4caf50] text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-[#eab308]/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#eab308] to-[#fbbf24] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 group-hover:text-[#388e3c] transition-colors duration-300">
                🥤 مشروبات
              </span>
            </button>
            <button
              onClick={() => handleScrollTo(dessertsRef)}
              className="group relative bg-gradient-to-r from-[#eab308] to-[#fbbf24] text-[#a71d2a] font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-[#a71d2a]/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#a71d2a] to-[#d32f2f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">🍰 حلويات</span>
            </button>
            <button
              onClick={() => handleScrollTo(addonsRef)}
              className="group relative bg-gradient-to-r from-[#795548] to-[#8d6e63] text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-[#eab308]/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#eab308] to-[#fbbf24] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 group-hover:text-[#795548] transition-colors duration-300">🧄 إضافات</span>
            </button>
          </div>

          <div className="max-w-7xl mx-auto">
            <CategoryRow title="كشري" data={kosharyData} rowRef={kosharyRef} expand={expandCategory.koshary} />
            <CategoryRow title="مشروبات" data={drinksData} rowRef={drinksRef} expand={expandCategory.drinks} />
            <CategoryRow title="حلويات" data={dessertsData} rowRef={dessertsRef} expand={expandCategory.desserts} />
            <CategoryRow title="إضافات" data={addonsData} rowRef={addonsRef} expand={expandCategory.addons} />
          </div>
        </>
      )}
    </div>
  )
}

export default Menu
