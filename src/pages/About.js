import React from "react";

function About() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-yellow-50 via-[#fffbe6] to-[#f5f5f5]">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#a71d2a] mb-8">من نحن</h1>
        <p className="text-2xl text-gray-700 mb-6 leading-loose font-semibold">
          تأسس مطعم <span className="font-extrabold text-[#a71d2a]">كشري التحرير</span> عام 1963 ليكون عنوان الجودة والأصالة في عالم الكشري المصري.<br/>
          نؤمن أن سر النجاح هو المذاق الأصيل، الكرم المصري، والابتسامة الدائمة في خدمة عملائنا.
          </p>
        <ul className="list-disc text-right text-xl text-gray-800 mb-6 pr-8 w-full" style={{direction: 'rtl'}}>
          <li className="mb-2"><span className="font-bold text-[#eab308]">رسالتنا:</span> تقديم أفضل كشري بأعلى جودة وبأسعار مناسبة للجميع.</li>
          <li className="mb-2"><span className="font-bold text-[#eab308]">قيمنا:</span> الأصالة، الكرم، النظافة، والابتكار في تقديم الطعام.</li>
            <li><span className="font-bold text-[#eab308]">رؤيتنا:</span> أن نكون الوجهة الأولى لعشاق الكشري في مصر والعالم العربي.</li>
          </ul>
        <p className="text-xl text-gray-600 font-bold">نرحب بكم دائمًا في كشري التحرير، حيث الطعم الأصيل والذكريات الجميلة!</p>
      </div>
    </div>
  );
}

export default About; 