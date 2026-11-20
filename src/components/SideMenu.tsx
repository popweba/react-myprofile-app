import { NavLink } from 'react-router-dom';
import { HiOutlineHome, HiOutlineMenuAlt2 } from 'react-icons/hi';
import { RiUserSettingsLine } from 'react-icons/ri';
import { LuBookOpen, LuMessageSquare } from 'react-icons/lu';
import { PiBriefcase } from 'react-icons/pi';
import { BsCodeSquare } from 'react-icons/bs';

export default function SideMenu() {
    const menuItems = [
        { path: '/', icon: <HiOutlineHome className="text-[22px]" />, label: 'Home' },
        { path: '/about', icon: <RiUserSettingsLine className="text-[21px]" />, label: 'About Me' },
        { path: '/eduexp', icon: <LuBookOpen className="text-[20px]" />, label: 'Education & Experience' },
        {
            path: '/spec',
            icon: (
                <span className="w-[21px] h-[21px] rounded-full border-[1.7px] border-current flex items-center justify-center">
                    <HiOutlineMenuAlt2 className="text-[12px]" />
                </span>
            ),
            label: 'Specializations',
        },
        { path: '/projects', icon: <PiBriefcase className="text-[21px]" />, label: 'Projects' },
        { path: '/skills', icon: <BsCodeSquare className="text-[19px]" />, label: 'Skills' },
        { path: '/contactme', icon: <LuMessageSquare className="text-[20px]" />, label: 'Contact Me' },
    ];

    return (
        <nav
            aria-label="Main Navigation"
            className="border border-[#383738] rounded-full py-6 px-3.5 flex flex-col items-center justify-center gap-6 shrink-0 bg-[#1D1C1D]"
        >
            {menuItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    title={item.label}
                    className={({ isActive }) =>
                        `transition-colors duration-200 ${isActive
                            ? 'text-[#FF5C00]'
                            : 'text-[#7A7A7A] hover:text-neutral-300'
                        }`
                    }
                >
                    {item.icon}
                </NavLink>
            ))}
        </nav>
    );
}