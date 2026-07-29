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
// Only Kenichi is defined in the design so far; fill the others when provided.
const characters = [
    {
        name: "",
        subtitle: "",
        caseFile: "",
        image: "", // client will provide
    },
    {
        name: "Kenichi",
        subtitle: "The Silent Executioner",
        caseFile: "SE-13-Kenichi",
        image: "", // client will provide
    },
    {
        name: "",
        subtitle: "",
        caseFile: "",
        image: "", // client will provide
    },
];

export default function Hero() {
    const { isConnected, address, disconnectWallet, isCustomModalOpen, openCustomModal, closeCustomModal } = useWallet();
    const [activeIndex, setActiveIndex] = useState(1);

    const active = characters[activeIndex];

    return (
        <section id="hero" className="relative min-h-screen overflow-hidden bg-[#050505]">
            {/* Dark red ambience on the right edge (behind the character) */}
            <div className="absolute top-0 right-0 h-full w-[45%] bg-[radial-gradient(ellipse_at_right,_rgba(80,0,10,0.55)_0%,_transparent_70%)] pointer-events-none" />

            {/* Top Bar: Logo + Connect Wallet */}
            <div className="relative z-30 flex items-center justify-between px-6 pt-6 md:px-24 md:pt-10">
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
                <div className="relative z-20 flex flex-col justify-between pl-6 md:pl-24 pt-16 md:pt-24 pb-24 w-full lg:w-1/2">

                    {/* Section Nav List */}
                    <nav className="flex flex-col gap-4 md:gap-5">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="group flex items-center gap-5 w-fit"
                            >
                                {/* Pixel x-box bullet */}
                                <span
                                    className={`flex items-center justify-center w-[22px] h-[22px] border-2 text-[13px] font-bold leading-none select-none ${idx % 2 === 0
                                        ? "border-accent-cyan/80 text-accent-cyan"
                                        : "border-accent-pink/80 text-accent-pink"
                                        }`}
                                    style={{ imageRendering: "pixelated" }}
                                >
                                    ✕
                                </span>
                                <span className="font-tektur text-xl md:text-[27px] text-[#c9c9ce] group-hover:text-white transition-colors tracking-wide">
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Character Identity Block */}
                    <div className="mt-16 md:mt-0 flex flex-col items-start">
                        {/* Display name — final design uses a distressed horror display face (client asset) */}
                        <h1
                            className="font-tektur font-extrabold text-[72px] md:text-[120px] leading-none bg-clip-text text-transparent bg-gradient-to-b from-[#8d7ae0] to-[#4a3a8f]"
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
                    {/* Grunge purple ring behind the character */}
                    <div
                        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[560px] h-[560px] md:w-[820px] md:h-[820px] rounded-full opacity-90"
                        style={{
                            border: "42px solid transparent",
                            background:
                                "linear-gradient(#050505,#050505) padding-box, conic-gradient(from 200deg, #2a16b8, #5b2fe0, #3b1fd0, #2a16b8) border-box",
                            filter: "blur(2px)",
                        }}
                    />

                    {/* Character image — client will provide */}
                    <div
                        className="img-placeholder absolute top-[6%] left-1/2 -translate-x-1/2 w-[420px] md:w-[560px] h-[80%]"
                        data-image="hero-character-kenichi"
                    />
                </div>

                {/* Character Switcher Rail */}
                <div className="absolute right-3 md:right-7 top-[38%] z-30 flex flex-col gap-6">
                    {characters.map((char, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-[52px] h-[52px] md:w-[72px] md:h-[72px] overflow-hidden transition-all duration-300 ${activeIndex === idx
                                ? "bg-[#7c5cff]/60 ring-1 ring-[#a78bfa] brightness-110"
                                : "bg-[#3a0d14]/80 opacity-80 hover:opacity-100"
                                }`}
                        >
                            {/* Thumbnail image — client will provide */}
                            <span className="block w-full h-full img-placeholder" data-image={`hero-thumb-${idx + 1}`} />
                        </button>
                    ))}
                </div>
            </div>

            {/* Bottom smoke/noise transition into the Seika section — client will provide texture */}
            <div
                className="relative z-20 -mb-1 h-[180px] md:h-[240px] w-full"
                data-image="transition-smoke-hero"
            />

            {/* Custom Wallet Modal */}
            <CustomWalletModal isOpen={isCustomModalOpen} onClose={closeCustomModal} />
        </section>
    );
}
