"use client";

import { useState } from "react";
import Link from "next/link";
import { useWallet } from "../providers/WalletProvider";
import CustomWalletModal from "../ui/CustomWalletModal";

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

// Showcased characters — switched via the thumbnail rail on the right.
// Each has a matching grunge ring; the rail thumb is the head/bust crop of the
// same artwork sitting on the character's accent colour.
const characters = [
    {
        name: "",
        subtitle: "",
        caseFile: "",
        image: "/assets/images/hero/char-shadow.png",
        ring: "/assets/images/hero/ring-darkred.png",
        thumbBg: "#5a1119",
        titleFrom: "#b04a5a",
        titleTo: "#5e1f2b",
    },
    {
        name: "Kenichi",
        subtitle: "The Silent Executioner",
        caseFile: "SE-13-Kenichi",
        image: "/assets/images/hero/char-kenichi.png",
        ring: "/assets/images/hero/ring-purple.png",
        thumbBg: "#b9a3f5",
        titleFrom: "#8d7ae0",
        titleTo: "#4a3a8f",
    },
    {
        name: "",
        subtitle: "",
        caseFile: "",
        image: "/assets/images/hero/char-crimson.png",
        ring: "/assets/images/hero/ring-red.png",
        thumbBg: "#b7222c",
        titleFrom: "#d15563",
        titleTo: "#7a1f28",
    },
];

export default function Hero() {
    const { isConnected, address, disconnectWallet, isCustomModalOpen, openCustomModal, closeCustomModal } = useWallet();
    const [activeIndex, setActiveIndex] = useState(1);

    const active = characters[activeIndex];

    return (
        <section id="hero" className="relative min-h-screen overflow-hidden bg-[#050505]">
            {/* Dark grunge backdrop with the red bleed along the right edge */}
            <div
                className="absolute inset-0 bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: "url('/assets/images/hero/hero-bg.png')" }}
            />

            {/* Top Bar: Logo + Connect Wallet */}
            <div className="relative z-30 flex items-center justify-between px-6 pt-6 md:px-[12.8%] md:pt-14">
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

            {/* Main Hero Content */}
            <div className="relative z-10 flex min-h-[calc(100vh-120px)]">

                {/* Left Column: Nav + Character Identity */}
                <div className="relative z-20 flex flex-col justify-between pl-6 md:pl-[15.6%] pt-16 md:pt-14 pb-20 w-full lg:w-1/2">

                    {/* Section Nav List */}
                    <nav className="flex flex-col gap-4 md:gap-5">
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
                                <span className="font-tektur text-xl md:text-[27px] text-[#c9c9ce] group-hover:text-white transition-colors tracking-wide">
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Character Identity Block */}
                    <div className="mt-16 md:mt-0 flex flex-col items-start">
                        <h1
                            className="font-tektur font-extrabold text-[72px] md:text-[120px] leading-none bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(to bottom, ${active.titleFrom}, ${active.titleTo})` }}
                        >
                            {active.name}
                        </h1>
                        <p className="mt-3 w-full text-center font-tektur text-lg md:text-[22px] text-white tracking-wide">
                            {active.subtitle}
                        </p>

                        <div className="mt-8 md:pl-10">
                            <p className="font-satoshi text-base md:text-[18px] text-white">
                                Case File: <span className="text-[#8B5CF6]">{active.caseFile}</span>
                            </p>
                            {/* Barcode */}
                            <div className="barcode mt-3 h-[26px] w-[300px] md:w-[370px]" />
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
                        className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[560px] md:w-[820px] h-auto"
                    />

                    {/* Character artwork */}
                    <img
                        src={active.image}
                        alt={active.name}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_0_60px_rgba(0,0,0,0.9)]"
                    />
                </div>

                {/* Character Switcher Rail */}
                <div className="absolute right-3 md:right-7 top-[38%] z-30 flex flex-col gap-6">
                    {characters.map((char, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-[52px] h-[52px] md:w-[72px] md:h-[72px] overflow-hidden transition-all duration-300 ${activeIndex === idx
                                ? "ring-1 ring-white/60 brightness-110"
                                : "opacity-80 hover:opacity-100"
                                }`}
                            style={{ backgroundColor: char.thumbBg }}
                            aria-label={char.name || `Character ${idx + 1}`}
                        >
                            {/* Head/bust crop of the same character artwork */}
                            <img
                                src={char.image}
                                alt=""
                                aria-hidden
                                className="w-full h-full object-cover object-top scale-[1.7] origin-top"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Smoke transition bleeding into the Seika section.
                The artwork ships on an opaque black field, so screen-blend it onto the page. */}
            <img
                src="/assets/images/sections/transition-smoke.png"
                alt=""
                aria-hidden
                className="relative z-20 -mt-40 md:-mt-56 -mb-px w-full h-auto pointer-events-none select-none mix-blend-screen"
            />

            {/* Custom Wallet Modal */}
            <CustomWalletModal isOpen={isCustomModalOpen} onClose={closeCustomModal} />
        </section>
    );
}
