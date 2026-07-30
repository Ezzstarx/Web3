export default function About() {
    return (
        <section id="about" className="relative overflow-hidden bg-black">
            {/* Purple grunge slab — its ragged top/bottom edges form the section transitions.
                Stretched to the section box so both torn edges stay pinned to the edges. */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "url('/assets/images/sections/about-purple.png')",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                }}
            />

            <div className="page-x relative z-10 py-28 md:py-36">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">

                    {/* Left: Heading + Copy */}
                    <div className="max-w-[560px]">
                        <div className="relative pb-3 mb-10 w-fit">
                            <h2 className="text-4xl md:text-[54px] font-tektur font-medium text-white tracking-[-1px]">
                                About US
                            </h2>
                            <div className="absolute bottom-0 -left-6 w-[160%] h-[1px] bg-gradient-to-r from-transparent via-[#7ef2ff] to-transparent"></div>
                        </div>

                        <p className="font-tektur text-base md:text-[19px] leading-relaxed text-white mb-8">
                            Ezzstar is an interconnected entertainment ecosystem built
                            for creators, gamers, and digital communities. Powered by
                            Seika Koin, it connects digital experiences, creator
                            monetization, community rewards, elite identity, digital goods,
                            skins, real world utility, and future ecosystem products into
                            one growing economy.
                        </p>

                        <p className="font-tektur text-base md:text-[19px] leading-relaxed text-white">
                            Ezzstar is designed to let users earn, spend, unlock, support
                            creators, build identity, and access value across both digital
                            and real world experiences.
                        </p>
                    </div>

                    {/* Right: Pixel EZZSTAR stacked logo */}
                    <div className="relative w-[240px] md:w-[360px] shrink-0">
                        <img
                            src="/assets/images/sections/ezzstar-pixel.png"
                            alt="Ezzstar"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Whitepaper Button */}
                <div className="flex justify-center mt-16">
                    <a
                        href="https://ezzstar.gitbook.io/ezzstar-gitbook"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-3 border border-[#ff4dd8]/70 rounded-lg bg-[#4a0e7f]/40 font-tektur font-medium text-xl md:text-[26px] tracking-[0.2em] text-[#ff4dd8] hover:bg-[#4a0e7f]/70 hover:shadow-[0_0_25px_rgba(255,77,216,0.35)] transition-all"
                    >
                        WHITEPAPER
                    </a>
                </div>
            </div>
        </section>
    );
}
