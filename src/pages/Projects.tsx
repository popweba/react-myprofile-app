import calculateImg from '../assets/calculate.png';

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

      {/* รูปตัวอย่างโปรเจกต์จาก src/assets/calculate.png */}
      <div className="max-w-[460px] rounded-lg overflow-hidden shadow-lg">
        <img
          src={calculateImg}
          alt="เครื่องมือคำนวณออนไลน์"
          className="w-full h-auto object-contain block"
        />
      </div>
    </div>
  );
}