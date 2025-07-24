"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Star, Heart } from "lucide-react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // محاكاة إرسال النموذج
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-16 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          <MessageCircle className="w-10 h-10 text-[#a71d2a] animate-bounce" />
          <h1 className="text-5xl font-black text-transparent bg-gradient-to-r from-[#a71d2a] via-[#d32f2f] to-[#eab308] bg-clip-text drop-shadow-lg">
            تواصل معنا
          </h1>
          <Heart className="w-10 h-10 text-[#eab308] animate-pulse" />
        </div>
        <p className="text-xl text-gray-600 font-semibold max-w-2xl mx-auto">
          نحن هنا لخدمتك! تواصل معنا في أي وقت وسنكون سعداء بالرد عليك
        </p>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* معلومات التواصل */}
          <div className="space-y-8">
            {/* بطاقة العنوان */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-[#a71d2a] to-[#d32f2f] p-4 rounded-2xl shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-[#a71d2a]">العنوان</h3>
              </div>
              <div className="space-y-3 text-lg text-gray-700">
                <p className="flex items-center gap-3 font-semibold">
                  <span className="w-2 h-2 bg-[#eab308] rounded-full animate-pulse"></span>
                  مسجد الحصري، 6 أكتوبر، مصر
                </p>
              </div>
            </div>

            {/* بطاقة التواصل */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-[#388e3c] to-[#4caf50] p-4 rounded-2xl shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-[#a71d2a]">اتصل بنا</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-lg font-semibold text-gray-700 hover:text-[#a71d2a] transition-colors cursor-pointer">
                  <Phone className="w-5 h-5 text-[#eab308]" />
                  <span>19719</span>
                </div>
                <div className="flex items-center gap-3 text-lg font-semibold text-gray-700 hover:text-[#a71d2a] transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 text-[#eab308]" />
                  <span>support@koshary-tahrir.com</span>
                </div>
              </div>
            </div>

            {/* بطاقة أوقات العمل */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-[#eab308] to-[#fbbf24] p-4 rounded-2xl shadow-lg">
                  <Clock className="w-8 h-8 text-[#a71d2a]" />
                </div>
                <h3 className="text-3xl font-black text-[#a71d2a]">أوقات العمل</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                  <span className="font-bold text-gray-800">أيام الأسبوع</span>
                  <span className="font-semibold text-[#a71d2a]">8:00 ص - 11:00 م</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#eab308]/10 to-[#fbbf24]/10 rounded-xl">
                  <span className="font-bold text-gray-800">نهاية الأسبوع</span>
                  <span className="font-semibold text-[#a71d2a]">11:00 ص - 1:00 ص</span>
                </div>
              </div>
            </div>

            {/* تقييم العملاء */}
            <div className="bg-gradient-to-r from-[#a71d2a] to-[#d32f2f] rounded-3xl shadow-xl p-8 text-white">
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-8 h-8 text-[#eab308] fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2">تقييم ممتاز من عملائنا</h3>
                <p className="text-lg opacity-90">أكثر من 10,000 عميل راضٍ عن خدماتنا</p>
              </div>
            </div>
          </div>

          {/* نموذج التواصل */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-[#a71d2a] mb-4">أرسل لنا رسالة</h2>
              <p className="text-gray-600 font-semibold">سنرد عليك في أقرب وقت ممكن</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#eab308] focus:ring-4 focus:ring-[#eab308]/20 transition-all duration-300 text-lg font-medium bg-gradient-to-r from-gray-50 to-white group-hover:shadow-lg"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#eab308] focus:ring-4 focus:ring-[#eab308]/20 transition-all duration-300 text-lg font-medium bg-gradient-to-r from-gray-50 to-white group-hover:shadow-lg"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-2">الموضوع</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#eab308] focus:ring-4 focus:ring-[#eab308]/20 transition-all duration-300 text-lg font-medium bg-gradient-to-r from-gray-50 to-white group-hover:shadow-lg"
                  placeholder="موضوع الرسالة"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-2">الرسالة</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#eab308] focus:ring-4 focus:ring-[#eab308]/20 transition-all duration-300 text-lg font-medium bg-gradient-to-r from-gray-50 to-white resize-none group-hover:shadow-lg"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-gradient-to-r from-[#a71d2a] to-[#d32f2f] text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#eab308] to-[#fbbf24] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center gap-3 text-xl">
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 group-hover:animate-pulse" />
                      إرسال الرسالة
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
