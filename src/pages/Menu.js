// "use client"

import { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { Search, X } from "lucide-react"
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
            <button onClick={() => setShowAll(false)} className="text-sm text-yellow-700 hover:underline font-semibold">
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
    // مسح البحث عند النقر على أزرار التنقل
    if (searchTerm) {
      clearSearch()
    }
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-white py-10">
      <h1 className="text-3xl font-bold text-red-700 mb-8 text-center">قائمة الطعام</h1>

      {/* شريط البحث */}
      <div className="max-w-2xl mx-auto mb-8 px-4">
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            ref={searchInputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="ابحث عن المنتجات..."
            className="block w-full pr-10 pl-10 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-right"
          />
          {searchTerm && (
            <button onClick={clearSearch} className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>

        {/* عرض عدد النتائج */}
        {searchTerm && (
          <div className="mt-2 text-sm text-gray-600 text-right">
            {searchResults.length > 0 ? `تم العثور على ${searchResults.length} منتج` : "لم يتم العثور على أي منتجات"}
          </div>
        )}
      </div>

      {/* عرض نتائج البحث أو الفئات */}
      {searchTerm && searchResults.length > 0 ? (
        // نتائج البحث
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchResults.map((item) => (
              <div key={`${item.category}-${item.id}`} className="relative">
                <ProductCard {...item} />
                <div className="absolute top-2 left-2 bg-red-700 text-white text-xs px-2 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : searchTerm && searchResults.length === 0 ? (
        // لا توجد نتائج
        <div className="max-w-7xl mx-auto px-4 text-center py-12">
          <div className="text-gray-500">
            <Search className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">لم يتم العثور على أي منتجات</h3>
            <p className="text-gray-500">جرب البحث بكلمات مختلفة</p>
          </div>
        </div>
      ) : (
        // عرض الفئات العادي
        <>
          {/* أزرار التنقل السريع */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button
              onClick={() => handleScrollTo(kosharyRef)}
              className="bg-[#a71d2a] hover:bg-[#eab308] hover:text-[#a71d2a] text-white font-bold py-2 px-7 rounded-full shadow-lg transition-colors duration-200 border-2 border-[#eab308]"
            >
              كشري
            </button>
            <button
              onClick={() => handleScrollTo(drinksRef)}
              className="bg-[#388e3c] hover:bg-[#eab308] hover:text-[#388e3c] text-white font-bold py-2 px-7 rounded-full shadow-lg transition-colors duration-200 border-2 border-[#eab308]"
            >
              مشروبات
            </button>
            <button
              onClick={() => handleScrollTo(dessertsRef)}
              className="bg-[#eab308] hover:bg-[#a71d2a] hover:text-[#eab308] text-[#a71d2a] font-bold py-2 px-7 rounded-full shadow-lg transition-colors duration-200 border-2 border-[#a71d2a]"
            >
              حلويات
            </button>
            <button
              onClick={() => handleScrollTo(addonsRef)}
              className="bg-[#795548] hover:bg-[#eab308] hover:text-[#795548] text-white font-bold py-2 px-7 rounded-full shadow-lg transition-colors duration-200 border-2 border-[#eab308]"
            >
              إضافات
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
