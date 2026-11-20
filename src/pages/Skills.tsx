import { FaReact, FaFigma, FaCss3Alt, FaGithub } from 'react-icons/fa6';
import { SiNextdotjs } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';

export default function Skills() {
    const skills = [
        {
            name: 'React',
            percent: '60%',
            icon: <FaReact className="text-[#61DAFB] text-[42px]" />,
            highlight: true,
        },
        {
            name: 'Figma',
            percent: '85%',
            icon: <FaFigma className="text-white text-[40px]" />,
            highlight: false,
        },
        {
            name: 'HTML/CSS',
            percent: '80%',
            icon: <FaCss3Alt className="text-white text-[42px]" />,
            highlight: false,
        },
        {
            name: 'Next.js',
            percent: '80%',
            icon: <SiNextdotjs className="text-white text-[42px]" />,
            highlight: false,
        },
        {
            name: 'Java Script',
            percent: '60%',
            icon: <IoLogoJavascript className="text-white text-[40px]" />,
            highlight: false,
        },
        {
            name: 'GitHub',
            percent: '90%',
            icon: <FaGithub className="text-white text-[42px]" />,
            highlight: false,
        },
    ];

    return (
        <div className="flex flex-col justify-center h-full">
            <h1 className="text-3xl md:text-[34px] font-bold text-white mb-8">
                My <span className="text-[#FF5C00]">Skills</span>
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-7 max-w-[540px]">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center">
                        <div
                            className={`w-[112px] h-[146px] rounded-full border flex flex-col items-center justify-center gap-3 transition-colors duration-200 ${skill.highlight
                                    ? 'border-[#FF5C00]'
                                    : 'border-[#525252] hover:border-[#FF5C00]'
                                }`}
                        >
                            {skill.icon}
                            <span className="text-[#FF5C00] text-sm font-medium">
                                {skill.percent}
                            </span>
                        </div>
                        <p className="text-xs text-neutral-300 mt-2.5">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}