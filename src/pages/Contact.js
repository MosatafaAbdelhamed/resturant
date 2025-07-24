import React from "react";
import img3 from "../assets/3.png.webp";

function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-yellow-50 via-[#fffbe6] to-[#f5f5f5] py-12 px-4">
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto max-w-5xl w-full">
          <div className="bg-white/95 rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row gap-12 contact-content">
            {/* معلومات التواصل */}
            <div className="contact-info flex-1 flex flex-col gap-10 justify-center mb-8 md:mb-0">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#a71d2a] mb-5 tracking-wide">ADDRESS</h3>
                <p className="flex items-center gap-3 text-[#42210b] mb-3 text-lg md:text-xl font-medium"><img src={img3} alt="address" className="w-7 h-7" />Hosary Mosque, 6October, Egypt</p>
                <p className="flex items-center gap-3 text-[#42210b] mb-3 text-lg md:text-xl font-medium"><img src={img3} alt="phone" className="w-7 h-7" />Phone: 123456789</p>
                <p className="flex items-center gap-3 text-[#42210b] text-lg md:text-xl font-medium"><img src={img3} alt="email" className="w-7 h-7" />support@foodlover.com</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#a71d2a] mb-5 tracking-wide">WORKING HOURS</h3>
                <p className="text-[#42210b] mb-2 text-lg md:text-xl font-medium">8:00 am to 11:00 pm on weekdays</p>
                <p className="text-[#42210b] text-lg md:text-xl font-medium">11:00 am to 1:00 am on weekends</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#a71d2a] mb-5 tracking-wide">FOLLOW US</h3>
                <div className="flex gap-4">
                  <a href="#"><img src={img3} alt="social1" className="w-9 h-9 hover:scale-110 transition" /></a>
                  <a href="#"><img src={img3} alt="social2" className="w-9 h-9 hover:scale-110 transition" /></a>
                  <a href="#"><img src={img3} alt="social3" className="w-9 h-9 hover:scale-110 transition" /></a>
                </div>
              </div>
            </div>
            {/* نموذج التواصل */}
            <form className="flex-1 flex flex-col gap-5 bg-white/90 rounded-2xl shadow-lg p-8" onSubmit={e => e.preventDefault()}>
              <input type="text" name="Name" id="Name" placeholder="Full Name" required className="border border-gray-200 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#eab308] text-lg md:text-xl font-medium text-[#42210b] bg-[#fffbe6] placeholder-gray-400 shadow-sm" />
              <input type="email" name="email" id="email" placeholder="Email" required className="border border-gray-200 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#eab308] text-lg md:text-xl font-medium text-[#42210b] bg-[#fffbe6] placeholder-gray-400 shadow-sm" />
              <input type="text" name="Subject" id="Subject" placeholder="Subject" required className="border border-gray-200 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#eab308] text-lg md:text-xl font-medium text-[#42210b] bg-[#fffbe6] placeholder-gray-400 shadow-sm" />
              <textarea name="Message" id="Message" cols="30" rows="5" placeholder="Message" className="border border-gray-200 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#eab308] text-lg md:text-xl font-medium text-[#42210b] bg-[#fffbe6] placeholder-gray-400 resize-none shadow-sm"></textarea>
              <button type="submit" className="btn bg-[#a71d2a] text-white font-extrabold py-3 rounded-lg text-xl hover:bg-[#eab308] hover:text-[#a71d2a] transition shadow-lg tracking-wider">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 