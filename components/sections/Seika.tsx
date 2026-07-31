import PresaleWidget from "./PresaleWidget";
import SmokeStrip from "../ui/SmokeStrip";

export default function Seika() {
    return (
        <section id="seika" className="screen-section relative overflow-hidden bg-black pt-20 pb-12 md:pt-24 md:pb-16">

            {/* Continuation of the hero's smoke strip across the section boundary
                (the hero clips the lower ~35% of the art; this shows it). */}
            <SmokeStrip className="hidden lg:block absolute top-0 left-0 z-0 w-full -translate-y-[65%]" />

            <div className="page-x relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Left: 3D SKA Coin, lit only from below so it reads as
                        standing on the floor with the floor glowing beneath it.
                        Three stacked ellipses: a tight hot contact pool, a wider
                        spill, and a faint far bounce. */}
                    <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] shrink-0">
                        {/* far bounce on the floor */}
                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[170%] h-[130px] bg-[#a020f0]/25 blur-[70px] rounded-[50%] pointer-events-none" />
                        {/* spill around the base */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[92%] h-[70px] bg-[#c026d3]/45 blur-[34px] rounded-[50%] pointer-events-none" />
                        {/* hot contact pool right under the coin */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[52%] h-[26px] bg-[#e879f9]/60 blur-[16px] rounded-[50%] pointer-events-none" />

                        <img
                            src="/assets/images/sections/seika-coin.png"
                            alt="Seika (SKA) coin"
                            className="relative w-full h-full object-contain"
                        />
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
