export default function About() {
    return (
        <section id="about" className="screen-section relative overflow-hidden bg-black">
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

            {/* Content matches the Figma export: a ~1180px column, copy on the left
                (~600px), pixel logo right, small WHITEPAPER button under the copy. */}
            <div className="page-x relative z-10 py-14 md:py-16">
                {/* Narrower column with its own side padding, so the block sits
                    clearly inset from the torn edges of the purple field. */}
                <div className="mx-auto w-full max-w-[980px] px-2 sm:px-8 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">

                        {/* Left: Heading + Copy */}
                        <div className="max-w-[600px]">
                            <div className="relative pb-3 mb-7 w-fit">
                                <h2 className="text-3xl md:text-[36px] font-tektur font-medium text-white tracking-[-1px]">
                                    About US
                                </h2>
                                <div className="absolute bottom-0 -left-6 w-[160%] h-[1px] bg-gradient-to-r from-transparent via-[#7ef2ff] to-transparent"></div>
                            </div>

                            <p className="font-tektur text-sm md:text-[17px] leading-relaxed text-white mb-6">
                                Ezzstar is an interconnected entertainment ecosystem built
                                for creators, gamers, and digital communities. Powered by
                                Seika Koin, it connects digital experiences, creator
                                monetization, community rewards, elite identity, digital goods,
                                skins, real world utility, and future ecosystem products into
                                one growing economy.
                            </p>

                            <p className="font-tektur text-sm md:text-[17px] leading-relaxed text-white">
                                Ezzstar is designed to let users earn, spend, unlock, support
                                creators, build identity, and access value across both digital
                                and real world experiences.
                            </p>
                        </div>

                        {/* Right: Pixel EZZSTAR stacked logo */}
                        <div className="relative w-[200px] md:w-[300px] shrink-0">
                            <img
                                src="/assets/images/Footer-Logo.png"
                                alt="Ezzstar"
                                className="w-full h-auto object-contain"
                                style={{ imageRendering: 'pixelated' }}
                            />
                        </div>
                    </div>

                    {/* Whitepaper Button — centred beneath the copy and the logo */}
                    <div className="flex justify-center mt-10">
                        <a
                            href="https://ezzstar.gitbook.io/ezzstar-gitbook"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-2 border border-[#ff4dd8]/70 rounded-md bg-[#4a0e7f]/40 font-tektur font-medium text-base md:text-[19px] tracking-[0.18em] text-[#ff4dd8] hover:bg-[#4a0e7f]/70 hover:shadow-[0_0_25px_rgba(255,77,216,0.35)] transition-all"
                        >
                            WHITEPAPER
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
