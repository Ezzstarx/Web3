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
                <div className="page-x relative z-20 flex flex-col justify-between pt-28 md:pt-[clamp(60px,8svh,100px)] pb-20 md:pb-[clamp(48px,8svh,88px)] w-full lg:w-1/2">

                    {/* Section Nav List */}
                    <nav className="flex flex-col gap-4 md:gap-[clamp(8px,1.7svh,20px)]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="group flex items-center gap-5 w-fit px-2 py-1 -ml-2"
                            >
                                {/* Default SVG (Visible normally) */}
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[22px] h-[23px] shrink-0 group-hover:hidden">
                                    <mask id="path-1-inside-1_2773_7471" fill="white">
                                        <path d="M18.0107 4.45801H21.4033V18.0215H18.0107V21.4229H4.44531V18.0215H1.05469V4.45801H4.44531V1.07812H18.0107V4.45801Z"/>
                                    </mask>
                                    <path d="M18.0107 4.45801H21.4033V18.0215H18.0107V21.4229H4.44531V18.0215H1.05469V4.45801H4.44531V1.07812H18.0107V4.45801Z" fill="#342F36"/>
                                    <path d="M18.0107 4.45801H17.0107V5.45801H18.0107V4.45801ZM21.4033 4.45801H22.4033V3.45801H21.4033V4.45801ZM21.4033 18.0215V19.0215H22.4033V18.0215H21.4033ZM18.0107 18.0215V17.0215H17.0107V18.0215H18.0107ZM18.0107 21.4229V22.4229H19.0107V21.4229H18.0107ZM4.44531 21.4229H3.44531V22.4229H4.44531V21.4229ZM4.44531 18.0215H5.44531V17.0215H4.44531V18.0215ZM1.05469 18.0215H0.0546875V19.0215H1.05469V18.0215ZM1.05469 4.45801V3.45801H0.0546875V4.45801H1.05469ZM4.44531 4.45801V5.45801H5.44531V4.45801H4.44531ZM4.44531 1.07812V0.078125H3.44531V1.07812H4.44531ZM18.0107 1.07812H19.0107V0.078125H18.0107V1.07812ZM18.0107 4.45801V5.45801H21.4033V4.45801V3.45801H18.0107V4.45801ZM21.4033 4.45801H20.4033V18.0215H21.4033H22.4033V4.45801H21.4033ZM21.4033 18.0215V17.0215H18.0107V18.0215V19.0215H21.4033V18.0215ZM18.0107 18.0215H17.0107V21.4229H18.0107H19.0107V18.0215H18.0107ZM18.0107 21.4229V20.4229H4.44531V21.4229V22.4229H18.0107V21.4229ZM4.44531 21.4229H5.44531V18.0215H4.44531H3.44531V21.4229H4.44531ZM4.44531 18.0215V17.0215H1.05469V18.0215V19.0215H4.44531V18.0215ZM1.05469 18.0215H2.05469V4.45801H1.05469H0.0546875V18.0215H1.05469ZM1.05469 4.45801V5.45801H4.44531V4.45801V3.45801H1.05469V4.45801ZM4.44531 4.45801H5.44531V1.07812H4.44531H3.44531V4.45801H4.44531ZM4.44531 1.07812V2.07812H18.0107V1.07812V0.078125H4.44531V1.07812ZM18.0107 1.07812H17.0107V4.45801H18.0107H19.0107V1.07812H18.0107Z" fill="#454545" mask="url(#path-1-inside-1_2773_7471)"/>
                                    <path d="M5.65973 1.58883L20.9091 16.8344L20.9092 15.7776L6.44748 1.58969L5.65973 1.58883Z" fill="url(#paint0_linear_2773_7471)" style={{ mixBlendMode: "color-dodge" }}/>
                                    <path d="M5.65973 1.58883L20.9091 16.8344L20.9092 15.7776L6.44748 1.58969L5.65973 1.58883Z" stroke="#787577"/>
                                    <path d="M2.26662 4.9776L17.519 20.2257L17.5213 18.2491L4.24417 4.97781L2.26662 4.9776Z" fill="url(#paint1_linear_2773_7471)" style={{ mixBlendMode: "color-dodge" }}/>
                                    <path d="M2.26662 4.9776L17.519 20.2257L17.5213 18.2491L4.24417 4.97781L2.26662 4.9776Z" stroke="#787577"/>
                                    <g filter="url(#filter0_d_2773_7471)">
                                        <path d="M11.281 8.83457L14.1312 5.98503L16.5946 8.44791L13.7444 11.2975L16.473 14.0255L14.0096 16.4884L11.281 13.7603L8.42816 16.6126L5.96477 14.1498L8.81766 11.2975L6.10289 8.58324L8.56628 6.12036L11.281 8.83457Z" fill="#5C5C5C"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_2773_7471" x="1.96094" y="5.98438" width="18.6328" height="18.6289" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="4"/>
                                            <feGaussianBlur stdDeviation="2"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2773_7471"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2773_7471" result="shape"/>
                                        </filter>
                                        <linearGradient id="paint0_linear_2773_7471" x1="22.4152" y1="16.8903" x2="4.40008" y2="1.14812" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#320647"/>
                                            <stop offset="0.538462" stopColor="#7A0FAD"/>
                                            <stop offset="0.990385" stopColor="#320647"/>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_2773_7471" x1="19.2824" y1="19.9841" x2="1.26588" y2="4.24061" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.182692" stopColor="#2E204A"/>
                                            <stop offset="0.538462" stopColor="#6D4CB0"/>
                                            <stop offset="0.860577" stopColor="#2E204A"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                
                                {/* Hover SVG (Visible on hover) */}
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden group-hover:block w-[22px] h-[23px] shrink-0">
                                    <mask id="path-1-inside-1_2773_7462" fill="white">
                                        <path d="M18.0107 4.45801H21.4033V18.0215H18.0107V21.4229H4.44531V18.0215H1.05469V4.45801H4.44531V1.07812H18.0107V4.45801Z"/>
                                    </mask>
                                    <path d="M18.0107 4.45801H21.4033V18.0215H18.0107V21.4229H4.44531V18.0215H1.05469V4.45801H4.44531V1.07812H18.0107V4.45801Z" fill="#290533"/>
                                    <path d="M18.0107 4.45801H17.0107V5.45801H18.0107V4.45801ZM21.4033 4.45801H22.4033V3.45801H21.4033V4.45801ZM21.4033 18.0215V19.0215H22.4033V18.0215H21.4033ZM18.0107 18.0215V17.0215H17.0107V18.0215H18.0107ZM18.0107 21.4229V22.4229H19.0107V21.4229H18.0107ZM4.44531 21.4229H3.44531V22.4229H4.44531V21.4229ZM4.44531 18.0215H5.44531V17.0215H4.44531V18.0215ZM1.05469 18.0215H0.0546875V19.0215H1.05469V18.0215ZM1.05469 4.45801V3.45801H0.0546875V4.45801H1.05469ZM4.44531 4.45801V5.45801H5.44531V4.45801H4.44531ZM4.44531 1.07812V0.078125H3.44531V1.07812H4.44531ZM18.0107 1.07812H19.0107V0.078125H18.0107V1.07812ZM18.0107 4.45801V5.45801H21.4033V4.45801V3.45801H18.0107V4.45801ZM21.4033 4.45801H20.4033V18.0215H21.4033H22.4033V4.45801H21.4033ZM21.4033 18.0215V17.0215H18.0107V18.0215V19.0215H21.4033V18.0215ZM18.0107 18.0215H17.0107V21.4229H18.0107H19.0107V18.0215H18.0107ZM18.0107 21.4229V20.4229H4.44531V21.4229V22.4229H18.0107V21.4229ZM4.44531 21.4229H5.44531V18.0215H4.44531H3.44531V21.4229H4.44531ZM4.44531 18.0215V17.0215H1.05469V18.0215V19.0215H4.44531V18.0215ZM1.05469 18.0215H2.05469V4.45801H1.05469H0.0546875V18.0215H1.05469ZM1.05469 4.45801V5.45801H4.44531V4.45801V3.45801H1.05469V4.45801ZM4.44531 4.45801H5.44531V1.07812H4.44531H3.44531V4.45801H4.44531ZM4.44531 1.07812V2.07812H18.0107V1.07812V0.078125H4.44531V1.07812ZM18.0107 1.07812H17.0107V4.45801H18.0107H19.0107V1.07812H18.0107Z" fill="#FC80BB" mask="url(#path-1-inside-1_2773_7462)"/>
                                    <path d="M21.4084 15.5679L6.65117 1.08947L4.45231 1.08835L21.4084 18.0424L21.4084 15.5679Z" fill="url(#paint0_linear_2773_7462)" style={{ mixBlendMode: "color-dodge" }}/>
                                    <path d="M18.0205 18.0422L4.45049 4.47729L1.05904 4.47731L18.018 21.4311L18.0205 18.0422Z" fill="url(#paint1_linear_2773_7462)" style={{ mixBlendMode: "color-dodge" }}/>
                                    <g filter="url(#filter0_d_2773_7462)">
                                        <path d="M11.281 8.83457L14.1312 5.98503L16.5946 8.44791L13.7444 11.2975L16.473 14.0255L14.0096 16.4884L11.281 13.7603L8.42816 16.6126L5.96477 14.1498L8.81766 11.2975L6.10289 8.58324L8.56628 6.12036L11.281 8.83457Z" fill="#66D0EB"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_2773_7462" x="1.96094" y="5.98438" width="18.6328" height="18.6289" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="4"/>
                                            <feGaussianBlur stdDeviation="2"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2773_7462"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2773_7462" result="shape"/>
                                        </filter>
                                        <linearGradient id="paint0_linear_2773_7462" x1="22.4152" y1="16.8903" x2="4.40008" y2="1.14812" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#320647"/>
                                            <stop offset="0.538462" stopColor="#7A0FAD"/>
                                            <stop offset="0.990385" stopColor="#320647"/>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_2773_7462" x1="19.2824" y1="19.9841" x2="1.26588" y2="4.24061" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.182692" stopColor="#2E204A"/>
                                            <stop offset="0.538462" stopColor="#6D4CB0"/>
                                            <stop offset="0.860577" stopColor="#2E204A"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                
                                {/* Text */}
                                <span className="relative flex items-center overflow-hidden">
                                    {/* Shine effect layer */}
                                    <span className="absolute inset-0 pointer-events-none z-10">
                                        <span className="absolute top-0 -left-[150%] group-hover:left-[150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transition-all duration-500 ease-in-out" />
                                    </span>
                                    <span className="relative z-0 font-tektur text-xl md:text-[length:clamp(19px,2.5svh,27px)] text-[#c9c9ce] group-hover:text-white transition-colors tracking-wide pb-1 border-b-2 border-transparent group-hover:border-accent-cyan">
                                        {link.name}
                                    </span>
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Character Identity Block */}
                    <div className="mt-16 md:mt-[clamp(24px,5svh,56px)] flex flex-col items-center">
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
                            className="h-[70px] md:h-[110px] w-auto max-w-full object-contain object-center"
                             />
                           ) : (
                           <span className="block h-[70px] md:h-[110px] w-auto max-w-full flex items-center justify-center text-[inherit]">
                            {active.name}
                           </span>
                           )}
                        </h1>
                        <p className="mt-3 w-full text-center font-tektur text-lg md:text-[length:clamp(16px,2svh,22px)] text-white tracking-wide">
                            {active.subtitle}
                        </p>

                        <div className="mt-8 md:mt-[clamp(12px,2.6svh,32px)] flex flex-col items-center">
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
                    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[48%] w-[85%] aspect-square animate-[spin_20s_linear_infinite]">
                        <img src={active.ring} alt="" aria-hidden className="w-full h-full object-contain" />
                    </div>

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
            <SmokeStrip className="absolute bottom-0 left-0 z-20 w-full translate-y-[65%]" />

            {/* Custom Wallet Modal */}
            <CustomWalletModal isOpen={isCustomModalOpen} onClose={closeCustomModal} />
        </section>
    );
}
