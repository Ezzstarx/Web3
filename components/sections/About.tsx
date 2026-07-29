export default function About() {
    return (
        <section id="about" className="relative overflow-hidden">
            {/* Purple textured background — final grunge texture provided by client.
                Solid purple stands in so the section reads correctly meanwhile. */}
            <div className="absolute inset-0 bg-[#7a1fd0]" data-image="about-purple-texture" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 py-24 md:py-32">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">

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

                    {/* Right: Pixel EZZSTAR stacked logo (shared asset from the old site) */}
                    <div className="relative w-[240px] md:w-[360px] shrink-0">
                        <img
                            src="/assets/images/Footer-Logo.png"
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

            {/* Bottom grunge transition into SKA Utility — client will provide texture */}
            <div
                className="relative z-20 h-[120px] md:h-[160px] w-full"
                data-image="transition-grunge-about"
            />
        </section>
    );
}
