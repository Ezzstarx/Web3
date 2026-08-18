"use client";

import { useState } from "react";
import Link from "next/link";
import { useWallet } from "../providers/WalletProvider";
import CustomWalletModal from "../ui/CustomWalletModal";
import SmokeStrip from "../ui/SmokeStrip";

// Hero navigation (anchors to page sections)
const navLinks = [
    { name: "Seika", href: "#seika" },
    { name: "About Us", href: "#about" },
    { name: "SKA Utility", href: "#ska-utility" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Proof of Demand", href: "#proof-of-demand" },
    { name: "Core Team", href: "#team" },
];

// The showcased characters in the design's order, each paired with the grunge
// ring exported alongside it. Accent colours are sampled from that ring, so
// the name gradient, case-file code, barcode and rail thumbnail all match.
// Subtitles/case-file codes were transcribed from a small design export —
// correct any that the final design spells differently.
const characters = [
    { name: "Cass", nameImage: "/assets/images/hero/char-11-name.png", subtitle: "The Chain Reaper", caseFile: "CR-04-Cass", image: "/assets/images/hero/char-11.png", ring: "/assets/images/hero/ring-11.png", thumbBg: "#7a1212", titleFrom: "#d04040", titleTo: "#6a1010" },
    { name: "Scarclaw",nameImage: "/assets/images/hero/char-10-name.png", subtitle: "The Warlord", caseFile: "WL-09-Scarclaw", image: "/assets/images/hero/char-10.png", ring: "/assets/images/hero/ring-10.png", thumbBg: "#7a4212", titleFrom: "#d08a3a", titleTo: "#6a3810" },
    { name: "Luna",nameImage: "/assets/images/hero/char-09-name.png", subtitle: "The Night Eyed Sovereign", caseFile: "NS-02-Luna", image: "/assets/images/hero/char-09.png", ring: "/assets/images/hero/ring-09.png", thumbBg: "#55101a", titleFrom: "#a03a48", titleTo: "#4a0e18" },
    { name: "Ivy",nameImage: "/assets/images/hero/char-08-name.png", subtitle: "The Occultist", caseFile: "OC-07-Ivy", image: "/assets/images/hero/char-08.png", ring: "/assets/images/hero/ring-08.png", thumbBg: "#8a1f2b", titleFrom: "#d15563", titleTo: "#7a1f28" },
    { name: "Blackheart",nameImage: "/assets/images/hero/char-07-name.png", subtitle: "The Titan", caseFile: "TT-01-Blackheart", image: "/assets/images/hero/char-07.png", ring: "/assets/images/hero/ring-07.png", thumbBg: "#601a12", titleFrom: "#b0503a", titleTo: "#5a1810" },
    {
        name: "Kenichi",
        nameImage: "/assets/images/hero/char-06-name.png", 
        subtitle: "The Silent Executioner",
        caseFile: "SE-13-Kenichi",
        image: "/assets/images/hero/char-06.png",
        ring: "/assets/images/hero/ring-06.png",
        thumbBg: "#604090",
        titleFrom: "#8d7ae0",
        titleTo: "#4a3a8f",
    },
    { name: "Voidwalker",nameImage: "/assets/images/hero/char-05-name.png", subtitle: "The Ghost", caseFile: "GH-00-Voidwalker", image: "/assets/images/hero/char-05.png", ring: "/assets/images/hero/ring-05.png", thumbBg: "#2c1470", titleFrom: "#7a5ae0", titleTo: "#2e1470" },
    { name: "Hexa",nameImage: "/assets/images/hero/char-04-name.png", subtitle: "The Techsmith", caseFile: "TS-08-Hexa", image: "/assets/images/hero/char-04.png", ring: "/assets/images/hero/ring-04.png", thumbBg: "#6b2410", titleFrom: "#e06a30", titleTo: "#7a2508" },
    { name: "Rustbot",nameImage: "/assets/images/hero/char-03-name.png", subtitle: "Nostalgic Machine", caseFile: "NM-77-Rustbot", image: "/assets/images/hero/char-03.png", ring: "/assets/images/hero/ring-03.png", thumbBg: "#6b5320", titleFrom: "#e0b860", titleTo: "#7a5a1a" },
    { name: "Spica",nameImage: "/assets/images/hero/char-02-name.png", subtitle: "SEIKA Spirit", caseFile: "Unknown", image: "/assets/images/hero/char-02.png", ring: "/assets/images/hero/ring-02.png", thumbBg: "#155e6b", titleFrom: "#4be0f0", titleTo: "#1a7a8c" },
    // Unrevealed silhouette — teased but not yet announced in the design.
    { name: "???", subtitle: "Unidentified", caseFile: "REDACTED", image: "/assets/images/hero/char-01.png", ring: "/assets/images/hero/ring-01.png", thumbBg: "#4a4a52", titleFrom: "#b9b9c4", titleTo: "#5a5a64" },
];

// Kenichi is the character the design opens on.
const INITIAL_INDEX = 5;

export default function Hero() {
    const { isConnected, address, disconnectWallet, isCustomModalOpen, openCustomModal, closeCustomModal } = useWallet();
    const [activeIndex, setActiveIndex] = useState(INITIAL_INDEX);

    const active = characters[activeIndex];

    // The rail shows three thumbnails at a time — the active character with its
    // neighbours above and below — and wraps around the full list of 11.
    const wrap = (i: number) => (i + characters.length) % characters.length;
    const visible = [wrap(activeIndex - 1), activeIndex, wrap(activeIndex + 1)];

    return (
        <section id="hero" className="relative min-h-screen lg:h-screen lg:flex lg:flex-col bg-[#050505]">
            {/* Dark grunge backdrop with the red bleed along the right edge */}
            <div
                className="absolute inset-0 bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: "url('/assets/images/hero/hero-bg.png')" }}
            />

            {/* Top Bar: Logo + Connect Wallet */}
            <div className="page-x relative z-30 flex items-center justify-between pt-6 md:pt-[clamp(16px,3.5svh,56px)]">
                <Link href="/" className="flex items-center">
                    <img
                        src="/assets/images/logo.png"
                        alt="Ezzstar"
                        className="h-6 md:h-8 w-auto"
                    />
                </Link>

                <div>
                    {isConnected ? (
                        <button
                            onClick={disconnectWallet}
                            className="flex items-center gap-2 px-6 py-2 bg-white/10 rounded-lg border border-accent-cyan/50 hover:bg-white/20 transition-all font-tektur text-accent-cyan shadow-[0_0_15px_rgba(0,234,255,0.2)]"
                        >
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span>{address?.slice(0, 6)}...{address?.slice(-4)}</span>
                        </button>
                    ) : (
                        <button
                            onClick={openCustomModal}
                            className="relative group px-8 py-1.5 bg-gradient-to-r from-secondary to-primary rounded-full font-tektur font-normal text-white tracking-wide hover:brightness-110 shadow-[0_0_45px_12px_rgba(139,92,246,0.65)] transition-all transform hover:scale-105 text-base"
                        >
                            Connect Wallet
                        </button>
                    )}
                </div>
            </div>

            {/* Main Hero Content. Vertical sizes are svh-clamped so the column
                compresses on shorter laptop screens instead of overlapping. */}
            <div className="relative z-10 flex min-h-[calc(100vh-120px)] lg:min-h-0 lg:flex-1">

                {/* Left Column: Nav + Character Identity */}
                <div className="page-x relative z-20 flex flex-col justify-between pt-16 md:pt-[clamp(10px,2.2svh,48px)] pb-20 md:pb-[clamp(48px,8svh,88px)] w-full lg:w-1/2">

                    {/* Section Nav List */}
                    <nav className="flex flex-col gap-4 md:gap-[clamp(8px,1.7svh,20px)]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="group flex items-center gap-5 w-fit"
                            >
                                <img
                                    src="/assets/images/hero/nav-bullet.png"
                                    alt=""
                                    aria-hidden
                                    className="w-[22px] h-[23px] shrink-0"
                                    style={{ imageRendering: "pixelated" }}
                                />
                                <span className="relative flex items-center">
                                    <span className="absolute top-0 bottom-0 -left-3 w-0 bg-accent-cyan group-hover:w-[2px] transition-all duration-300" />
                                    <span className="font-tektur text-xl md:text-[length:clamp(19px,2.5svh,27px)] text-[#c9c9ce] group-hover:text-white transition-colors tracking-wide pb-1 border-b-2 border-transparent group-hover:border-white">
                                        {link.name}
                                    </span>
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Character Identity Block */}
                    <div className="mt-16 md:mt-0 flex flex-col items-start">
                        <h1
                            className="text-[96px] md:text-[length:clamp(104px,15svh,164px)] leading-none bg-clip-text text-transparent"
                            style={{
                                backgroundImage: `linear-gradient(to bottom, ${active.titleFrom}, ${active.titleTo})`,
                                fontFamily: "'Scarlet Reliquary', sans-serif",
                            }}
                        >
                           {active.nameImage ? (
                           <img
                            src={active.nameImage}
                            alt={active.name}
                            className="w-[280px] md:w-[370px] h-[120px] md:h-[160px] object-contain object-left"
                             />
                           ) : (
                           <span className="block w-[280px] md:w-[370px] h-[120px] md:h-[160px] flex items-center justify-start text-[inherit]">
                            {active.name}
                           </span>
                           )}
                        </h1>
                        <p className="mt-3 w-full text-center font-tektur text-lg md:text-[length:clamp(16px,2svh,22px)] text-white tracking-wide">
                            {active.subtitle}
                        </p>

                        <div className="mt-8 md:mt-[clamp(12px,2.6svh,32px)] md:pl-10">
                            <p className="font-satoshi text-base md:text-[length:clamp(14px,1.8svh,18px)] text-white">
                                Case File: <span style={{ color: active.titleFrom }}>{active.caseFile}</span>
                            </p>
                            {/* Barcode — striped in the character's accent colours */}
                            <div
                                className="barcode mt-3 h-[26px] w-[300px] md:w-[370px]"
                                style={{ "--bc1": active.titleFrom, "--bc2": active.titleTo } as React.CSSProperties}
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column: Character Art */}
                <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] pointer-events-none">
                    {/* Grunge ring behind the character */}
                    <img
                        src={active.ring}
                        alt=""
                        aria-hidden
                        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[48%] w-[85%] h-auto animate-[spin_20s_linear_infinite]"
                    />

                    {/* Character artwork */}
                    <img
                        src={active.image}
                        alt={active.name}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_0_60px_rgba(0,0,0,0.9)]"
                    />
                </div>

                {/* Character Switcher Rail — three at a time, looping through all 11.
                    Per the design: plain rounded thumbnails with a light border and
                    no arrows; clicking a neighbour re-centres the window on it. */}
                <div className="absolute right-3 md:right-[3.5%] top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-3.5">
                    {visible.map((charIdx, slot) => {
                        const char = characters[charIdx];
                        const isActive = charIdx === activeIndex;
                        return (
                            <button
                                key={`${charIdx}-${slot}`}
                                onClick={() => setActiveIndex(charIdx)}
                                className={`overflow-hidden rounded-[6px] border transition-all duration-300 ${isActive
                                    ? "w-[58px] h-[58px] md:w-[86px] md:h-[86px] border-white/90 brightness-110 shadow-[0_0_18px_rgba(255,255,255,0.25)]"
                                    : "w-[46px] h-[46px] md:w-[64px] md:h-[64px] border-white/35 opacity-70 hover:opacity-100 hover:border-white/60"
                                    }`}
                                style={{ backgroundColor: char.thumbBg }}
                                aria-label={char.name || `Character ${charIdx + 1}`}
                                aria-current={isActive}
                            >
                                {/* Head/bust crop of the same character artwork */}
                                <img
                                    src={char.image}
                                    alt=""
                                    aria-hidden
                                    className="w-full h-full object-cover object-top scale-[1.7] origin-top"
                                />
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Smoke transition straddling the hero/Seika boundary: pinned to the
                bottom edge with ~35% of the art dipping below it (clipped here,
                completed by the matching strip at the top of Seika). */}
            <SmokeStrip className="absolute bottom-0 left-0 z-20 w-full translate-y-[50%]" />

            {/* Custom Wallet Modal */}
            <CustomWalletModal isOpen={isCustomModalOpen} onClose={closeCustomModal} />
        </section>
    );
}
