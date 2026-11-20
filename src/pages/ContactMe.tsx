import { useState, type FormEvent } from 'react';

export default function ContactMe() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="flex flex-col justify-center h-full">
            <h1 className="text-3xl md:text-[34px] font-bold text-white mb-2">
                Contact <span className="text-[#FF5C00]">Me</span>
            </h1>
            <p className="text-neutral-300 text-base mb-8">Let&apos;s get in touch!</p>

            <form onSubmit={handleSubmit} className="max-w-[540px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-6">
                    <div>
                        <label className="block text-[#FF5C00] text-xs mb-1">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-transparent border-b border-[#525252] focus:border-[#FF5C00] text-white text-sm py-1.5 outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="block text-[#FF5C00] text-xs mb-1">Phone</label>
                        <input
                            type="tel"
                            className="w-full bg-transparent border-b border-[#525252] focus:border-[#FF5C00] text-white text-sm py-1.5 outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="block text-[#FF5C00] text-xs mb-1">Name</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-transparent border-b border-[#525252] focus:border-[#FF5C00] text-white text-sm py-1.5 outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="block text-[#FF5C00] text-xs mb-1">Adress</label>
                        <input
                            type="text"
                            className="w-full bg-transparent border-b border-[#525252] focus:border-[#FF5C00] text-white text-sm py-1.5 outline-none transition"
                        />
                    </div>
                </div>

                <div className="mb-5">
                    <label className="block text-[#FF5C00] text-xs mb-1">Content</label>
                    <textarea
                        rows={3}
                        className="w-full bg-transparent border-b border-[#525252] focus:border-[#FF5C00] text-white text-sm py-1.5 outline-none transition resize-none"
                    />
                </div>

                <label className="inline-flex items-center gap-2 text-[#8E8E8E] text-xs cursor-pointer mb-6">
                    <input
                        type="checkbox"
                        className="rounded border-[#525252] bg-transparent accent-[#FF5C00]"
                    />
                    I would like to receive the newsletter.
                </label>

                <div>
                    <button
                        type="submit"
                        className="bg-[#FF5C00] hover:bg-[#e55300] text-white font-semibold text-sm px-16 py-2.5 rounded-lg transition cursor-pointer"
                    >
                        Submit
                    </button>
                </div>

                {submitted && (
                    <p className="text-[#FF5C00] text-xs mt-3">
                        ส่งข้อความเรียบร้อยแล้ว ขอบคุณที่ติดต่อครับ!
                    </p>
                )}
            </form>
        </div>
    );
}