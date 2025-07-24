import { Award, Users, Heart, Star, Target, Eye, Sparkles, ChefHat } from "lucide-react"

function About() {
  const stats = [
    { icon: Users, number: "10,000+", label: "عميل سعيد", color: "from-[#a71d2a] to-[#d32f2f]" },
    { icon: Award, number: "60+", label: "سنة خبرة", color: "from-[#eab308] to-[#fbbf24]" },
    { icon: Star, number: "4.9", label: "تقييم العملاء", color: "from-[#388e3c] to-[#4caf50]" },
    { icon: Heart, number: "100%", label: "مكونات طبيعية", color: "from-[#795548] to-[#8d6e63]" },
  ]

  const values = [
    {
      icon: Target,
      title: "رسالتنا",
      description: "تقديم أفضل كشري بأعلى جودة وبأسعار مناسبة للجميع مع الحفاظ على الطعم الأصيل المصري",
      color: "from-[#a71d2a] to-[#d32f2f]",
    },
    {
      icon: Heart,
      title: "قيمنا",
      description: "الأصالة في الطعم، الكرم في الخدمة، النظافة في التحضير، والابتكار في تقديم أفضل تجربة طعام",
      color: "from-[#eab308] to-[#fbbf24]",
    },
    {
      icon: Eye,
      title: "رؤيتنا",
      description: "أن نكون الوجهة الأولى لعشاق الكشري في مصر والعالم العربي ونشر الثقافة المصرية الأصيلة",
      color: "from-[#388e3c] to-[#4caf50]",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-16 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <ChefHat className="w-12 h-12 text-[#a71d2a] animate-bounce" />
          <h1 className="text-6xl font-black text-transparent bg-gradient-to-r from-[#a71d2a] via-[#d32f2f] to-[#eab308] bg-clip-text drop-shadow-lg">
            من نحن
          </h1>
          <Sparkles className="w-12 h-12 text-[#eab308] animate-spin" style={{ animationDuration: "3s" }} />
        </div>
        <p className="text-xl text-gray-600 font-semibold max-w-3xl mx-auto">
          قصة نجاح امتدت لأكثر من 60 عاماً في خدمة أشهى الأطباق المصرية
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* قصتنا */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-12 bg-gradient-to-b from-[#a71d2a] to-[#eab308] rounded-full animate-pulse"></div>
              <h2 className="text-4xl font-black text-[#a71d2a]">قصتنا</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-700 font-semibold">
                تأسس مطعم <span className="font-black text-[#a71d2a] text-xl">كشري التحرير</span> عام 1963 على يد الحاج
                محمد أحمد، الذي آمن بأن الكشري ليس مجرد وجبة، بل تراث مصري أصيل يجب الحفاظ عليه.
              </p>
              <p className="text-gray-700 font-semibold">
                بدأنا برؤية بسيطة: تقديم أفضل كشري بمكونات طبيعية 100% وبأسعار في متناول الجميع. واليوم، بعد أكثر من 60
                عاماً، أصبحنا رمزاً للجودة والأصالة في عالم الطعام المصري.
              </p>
              <p className="text-gray-700 font-semibold">
                نؤمن أن سر النجاح يكمن في <span className="text-[#eab308] font-bold">المذاق الأصيل</span>،
                <span className="text-[#a71d2a] font-bold"> الكرم المصري</span>، والابتسامة الدائمة في خدمة عملائنا
                الكرام.
              </p>
            </div>
          </div>

          {/* الإحصائيات */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 text-center border border-gray-200 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`bg-gradient-to-r ${stat.color} p-4 rounded-2xl shadow-lg mx-auto w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-black text-gray-800 mb-2">{stat.number}</div>
                <div className="text-sm font-bold text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* القيم والمبادئ */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-black text-transparent bg-gradient-to-r from-[#a71d2a] to-[#eab308] bg-clip-text mb-4">
              قيمنا ومبادئنا
            </h2>
            <p className="text-xl text-gray-600 font-semibold">الأسس التي نبني عليها نجاحنا كل يوم</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transform hover:scale-105 transition-all duration-500 text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`bg-gradient-to-r ${value.color} p-6 rounded-2xl shadow-lg mx-auto w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-[#a71d2a] mb-4">{value.title}</h3>
                <p className="text-gray-700 font-semibold leading-relaxed text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* رسالة ختامية */}
        <div className="bg-gradient-to-r from-[#a71d2a] via-[#d32f2f] to-[#eab308] rounded-3xl shadow-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex justify-center gap-4 mb-6">
              <Heart className="w-12 h-12 animate-pulse" />
              <Star className="w-12 h-12 animate-bounce" />
              <Heart className="w-12 h-12 animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
            <h2 className="text-4xl font-black mb-6">شكراً لثقتكم</h2>
            <p className="text-2xl font-bold leading-relaxed max-w-4xl mx-auto">
              نرحب بكم دائماً في كشري التحرير، حيث الطعم الأصيل والذكريات الجميلة!
              <br />
              معاً نصنع أجمل اللحظات حول مائدة الكشري المصري الأصيل
            </p>
          </div>

          {/* عناصر ديكورية */}
          <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-8 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  )
}

export default About
