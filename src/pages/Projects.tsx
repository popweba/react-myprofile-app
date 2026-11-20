export default function Projects() {
  return (
    <div className="flex flex-col justify-center h-full">
      <h1 className="text-3xl md:text-[34px] font-bold text-white mb-4">
        Featured <span className="text-[#FF5C00]">Projects</span>
      </h1>

      <h2 className="text-white font-bold text-base mb-2">
        Manage Task App - fullstack web development
      </h2>

      <p className="text-[#8E8E8E] text-xs leading-relaxed max-w-[540px] mb-6">
        Here&apos;s my latest project built with Next.js and Laravel, using
        TailwindCSS on the front-end. Watch the video to see the responsive
        landing page in action!
      </p>

      {/* กรอบรูปตัวอย่างโปรเจกต์ (หาก Export รูปจาก Figma มาแล้ว สามารถเปลี่ยนเป็น <img> แทนได้) */}
      <div className="max-w-[460px] rounded-lg overflow-hidden border border-[#383738] bg-white shadow-lg">
        {/* Browser Header */}
        <div className="bg-neutral-100 px-3 py-1.5 border-b border-neutral-200 flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
          <span className="ml-2 text-[10px] text-neutral-400 bg-white px-2 py-0.5 rounded border border-neutral-200">
            localhost:3000
          </span>
        </div>

        {/* Preview Content */}
        <div className="p-5 text-center bg-white text-neutral-800">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber-100 text-amber-600 font-bold text-sm mb-2">
            +-×÷
          </div>
          <h3 className="text-sm font-bold text-neutral-800">
            เครื่องมือคำนวณออนไลน์
          </h3>
          <p className="text-[10px] text-neutral-400 mb-4">
            เลือกการคำนวณที่คุณต้องการใช้งาน
          </p>

          <div className="grid grid-cols-3 gap-2.5">
            <div className="border border-neutral-200 rounded-lg p-2.5">
              <div className="w-7 h-7 mx-auto rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold mb-1.5">
                BMI
              </div>
              <p className="text-[9px] font-semibold">คำนวณ BMI</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-2.5">
              <div className="w-7 h-7 mx-auto rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-[10px] font-bold mb-1.5">
                BMR
              </div>
              <p className="text-[9px] font-semibold">คำนวณ BMR</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-2.5">
              <div className="w-7 h-7 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold mb-1.5">
                CAR
              </div>
              <p className="text-[9px] font-semibold">คำนวณผ่อนรถ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}