import { useNavigate } from 'react-router-dom';
import {
    FaFacebook,
    FaXTwitter,
    FaInstagram,
    FaLinkedin,
    FaGoogle,
} from 'react-icons/fa6';
import profileImg from '../assets/S__163069954.jpg';

export default function MyCard() {
    const navigate = useNavigate();

    return (
        <div className="w-[295px] shrink-0 border border-[#383738] rounded-[24px] p-6 bg-[#1D1C1D] flex flex-col justify-between">
            <div>
                {/* ชื่อมุมบนซ้าย ตัวแรกสีส้ม #FF5C00 */}
                <h2 className="text-[22px] font-normal tracking-wide text-white mb-4">
                    <span className="text-[#FF5C00] font-medium">K</span>ankangwal
                </h2>

                {/* กรอบรูปโปรไฟล์ */}
                <div className="w-[245px] h-[245px] mx-auto bg-white rounded-[20px] overflow-hidden mb-4">
                    <img
                        src={profileImg}
                        alt="Kankangwal"
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                {/* รหัสนักศึกษาและตำแหน่ง */}
                <p className="text-center text-white text-[15px] tracking-wide">
                    STU ID: 6952D10001
                </p>
                <p className="text-center text-[#8E8E8E] text-xs mt-1">
                    Fullstack Web Developer
                </p>

                {/* ไอคอน Social Media */}
                <div className="flex items-center justify-center gap-5 my-6 text-white text-[20px]">
                    <a href="#facebook" aria-label="Facebook" className="hover:text-[#FF5C00] transition">
                        <FaFacebook />
                    </a>
                    <a href="#x" aria-label="X" className="hover:text-[#FF5C00] transition">
                        <FaXTwitter />
                    </a>
                    <a href="#instagram" aria-label="Instagram" className="hover:text-[#FF5C00] transition">
                        <FaInstagram />
                    </a>
                    <a href="#linkedin" aria-label="LinkedIn" className="hover:text-[#FF5C00] transition">
                        <FaLinkedin />
                    </a>
                    <a href="#google" aria-label="Google" className="hover:text-[#FF5C00] transition">
                        <FaGoogle />
                    </a>
                </div>
            </div>

            {/* ปุ่ม HIRE ME ! */}
            <button
                type="button"
                onClick={() => navigate('/contactme')}
                className="w-full bg-[#FF5C00] hover:bg-[#e55300] text-[#1D1C1D] font-medium text-[15px] tracking-[0.15em] py-3 rounded-xl transition cursor-pointer"
            >
                HIRE ME !
            </button>
        </div>
    );
}