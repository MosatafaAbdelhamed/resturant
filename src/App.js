import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Koshary from "./pages/menu/Koshary";
import Drinks from "./pages/menu/Drinks";
import Desserts from "./pages/menu/Desserts";
import Addons from "./pages/menu/Addons";
import "./App.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#a71d2a] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* اللوجو في أقصى اليمين */}
        <div className="flex-1 flex items-center justify-start">
          {/* ضع اللوجو هنا */}
          <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center text-[#a71d2a] font-bold text-lg shadow border-2 border-[#eab308]">
            Logo
          </div>
        </div>
        {/* الروابط في المنتصف */}
        <div className="hidden md:flex gap-8 items-center justify-center flex-1">
          <Link to="/" className="hover:text-[#eab308] font-semibold transition-colors duration-200">الرئيسية</Link>
          <Link to="/menu" className="hover:text-[#eab308] font-semibold transition-colors duration-200">القائمة</Link>
          <Link to="/contact" className="hover:text-[#eab308] font-semibold transition-colors duration-200">تواصل</Link>
          <Link to="/about" className="hover:text-[#eab308] font-semibold transition-colors duration-200">من نحن</Link>
        </div>
        {/* اسم كشري التحرير في أقصى اليسار */}
        <div className="flex-1 flex items-center justify-end">
          <Link to="/" className="text-2xl font-extrabold tracking-wider hover:text-[#eab308] transition-colors duration-200">كشري التحرير</Link>
        </div>
        {/* زر الهامبرجر للموبايل */}
        <div className="md:hidden ml-2">
          <button className="text-3xl" onClick={() => setOpen(!open)}>
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
      {/* قائمة الموبايل */}
      {open && (
        <div className="md:hidden bg-[#a71d2a] px-4 pb-4 flex flex-col gap-3 animate-fadeInDown w-full items-center">
          <Link to="/" className="hover:text-[#eab308] font-semibold transition-colors duration-200" onClick={() => setOpen(false)}>الرئيسية</Link>
          <Link to="/menu" className="hover:text-[#eab308] font-semibold transition-colors duration-200" onClick={() => setOpen(false)}>القائمة</Link>
          <Link to="/contact" className="hover:text-[#eab308] font-semibold transition-colors duration-200" onClick={() => setOpen(false)}>تواصل</Link>
          <Link to="/about" className="hover:text-[#eab308] font-semibold transition-colors duration-200" onClick={() => setOpen(false)}>من نحن</Link>
        </div>
      )}
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        {/* Main Content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/koshary" element={<Koshary />} />
            <Route path="/menu/drinks" element={<Drinks />} />
            <Route path="/menu/desserts" element={<Desserts />} />
            <Route path="/menu/addons" element={<Addons />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        {/* Footer */}
        <footer className="bg-yellow-50 text-center py-4 text-brown-800 font-semibold border-t">
        Copyright ©: 2025 All rights reserved | Made by Mostafa El-kholy
        </footer>
      </div>
    </Router>
  );
}

export default App;
