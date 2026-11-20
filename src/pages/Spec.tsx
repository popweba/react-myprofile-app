import { FaCode, FaPenNib } from 'react-icons/fa6';
import { FiGlobe } from 'react-icons/fi';

export default function Spec() {
    const specializations = [
        {
            title: 'Front end-developer',
            description:
                'Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.',
            icon: <FaCode className="text-[#FF5C00] text-lg shrink-0" />,
        },
        {
            title: 'UI/UX Designer',
            description:
                'UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.',
            icon: <FiGlobe className="text-[#FF5C00] text-lg shrink-0" />,
        },
        {
            title: 'Graphic designer',
            description:
                'As a graphic designer, I transform ideas into visually striking and impactful designs.',
            icon: <FaPenNib className="text-[#FF5C00] text-lg shrink-0" />,
        },
    ];

    return (
        <div className="flex flex-col justify-center h-full">
            <h1 className="text-3xl md:text-[34px] font-bold text-white mb-7">
                My <span className="text-[#FF5C00]">Specializations</span>
            </h1>

            <div className="space-y-5 max-w-[540px]">
                {specializations.map((item) => (
                    <div
                        key={item.title}
                        className="border border-[#FF5C00]/65 rounded-2xl p-5 flex items-start justify-between gap-4"
                    >
                        <div>
                            <h2 className="text-white font-bold text-[15px] mb-1.5">
                                {item.title}
                            </h2>
                            <p className="text-[#8E8E8E] text-xs leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                        {item.icon}
                    </div>
                ))}
            </div>
        </div>
    );
}