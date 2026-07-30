import PresaleWidget from "./PresaleWidget";

export default function Seika() {
    return (
        <section id="seika" className="screen-section relative overflow-hidden bg-black pt-20 pb-12 md:pt-24 md:pb-16">
            {/* Soft purple glow under the coin */}
            <div className="absolute bottom-0 left-0 w-[700px] h-[500px] bg-[#a020f0]/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="page-x relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Left: 3D SKA Coin */}
                    <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] shrink-0">
                        <img
                            src="/assets/images/sections/seika-coin.png"
                            alt="Seika (SKA) coin"
                            className="w-full h-full object-contain drop-shadow-[0_0_60px_rgba(192,38,211,0.45)]"
                        />
                        {/* Glow reflection under coin */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[70%] h-[60px] bg-[#c026d3]/30 blur-[40px] rounded-full pointer-events-none" />
                    </div>

                    {/* Middle: Title + Description */}
                    <div className="flex flex-col items-center lg:items-start max-w-[500px] text-center lg:text-left">
                        <div className="relative pb-4 mb-8 w-fit mx-auto lg:mx-0">
                            <h2 className="text-4xl md:text-[54px] font-tektur font-medium text-white tracking-[-1px]">
                                Seika (SKA)
                            </h2>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#DE3BD6] to-transparent"></div>
                        </div>

                        <p className="font-tektur text-lg md:text-[24px] leading-relaxed text-white">
                            Seika is the utility coin powering Ezzstar, built to turn digital
                            activity into real value through rewards, creator monetization,
                            game zone OS, elite identity, digital goods, and real world
                            utility.
                        </p>
                    </div>

                    {/* Right: Presale Widget (shared component from the old site) */}
                    <PresaleWidget />
                </div>
            </div>

        </section>
    );
}
