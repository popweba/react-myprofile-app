export default function Home() {
    return (
        <div className="flex flex-col justify-center h-full">
            <p className="text-2xl md:text-[28px] font-light text-white mb-3">
                Lets Work <span className="text-[#FF5C00]">Together !</span>
            </p>

            <h1 className="text-3xl md:text-[38px] font-bold text-white leading-[1.25] mb-6">
                Hi From <span className="text-[#FF5C00]">Kankangwal</span> ,<br />
                Interactive Designer &amp; Fullstack
                <br />
                Web Developer
            </h1>

            <p className="text-[#8E8E8E] text-[13.5px] leading-relaxed max-w-[540px] mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
                tempora at neque a adipisci nulla voluptatem? Mollitia, officiis,
                architecto earum voluptates obcaecati corrupti voluptatem .
            </p>

            <div className="flex items-center gap-14">
                <div>
                    <p className="text-[40px] font-normal text-[#FF5C00] leading-none">
                        3+
                    </p>
                    <p className="text-xs text-[#8E8E8E] mt-2 leading-snug">
                        Years of
                        <br />
                        Experience
                    </p>
                </div>

                <div>
                    <p className="text-[40px] font-normal text-[#FF5C00] leading-none">
                        10+
                    </p>
                    <p className="text-xs text-[#8E8E8E] mt-2 leading-snug">
                        Projects
                        <br />
                        Completed
                    </p>
                </div>
            </div>
        </div>
    );
}