"use client";

import { useState } from "react";

const distribution = [
    { pct: "8.33%", label: "Development" },
    { pct: "30%", label: "Treasury" },
    { pct: "3%", label: "Marketing & Community" },
    { pct: "16.67%", label: "Teams" },
    { pct: "5%", label: "Private Sale" },
    { pct: "7%", label: "Presale" },
    { pct: "10%", label: "Liquidity" },
    { pct: "20%", label: "Ecosystem & Rewards" },
];

export default function Tokenomics() {
    const [copied, setCopied] = useState(false);
    const contractAddress = "0xc50D5CC75D839F005161fdB5a2B8702FdCDDb553";

    const handleCopy = () => {
        navigator.clipboard.writeText(contractAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="tokenomics" className="screen-section relative overflow-hidden py-12 md:py-[clamp(28px,5svh,56px)] bg-[#14082a]">
            {/* Blurred "3B SKA" giant-letters background. Fitted to the section
                width rather than cover — the section is far taller than the art's
                1.67 aspect, and cover magnified the lettering ~1.67x.
                Inset negatively so the blur has material to bleed into and
                doesn't feather the section's edges. */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -inset-16 bg-no-repeat bg-top bg-[length:100%_auto] blur-[14px]"
                    style={{ backgroundImage: "url('/assets/images/sections/tokenomics-bg.png')" }}
                />
            </div>
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />

            <div className="page-x relative z-10">
                {/* Heading */}
                <div className="relative w-fit mx-auto pb-4 mb-6 md:mb-8">
                    <h2 className="text-3xl md:text-[44px] font-tektur font-medium text-white text-center">
                        Tokenomics
                    </h2>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] h-[1px] bg-gradient-to-r from-transparent via-[#DE3BD6] to-transparent"></div>
                </div>

                {/* Compact centred block matching the Figma export: chart panel left,
                    tight stats grid right, contract card narrower underneath. */}
                <div className="mx-auto max-w-[1350px] flex flex-col lg:flex-row items-stretch lg:items-start justify-between gap-8 w-full mb-[clamp(14px,2.5svh,32px)]">

                    {/* Left: Donut distribution chart with callouts. Narrower panel
                        with the chart filling it edge to edge. */}
                    <div className="relative w-full lg:max-w-[min(660px,46svh)] min-w-0 bg-[#0a0a12]/20 flex items-center justify-center">
                        <img
                            src="/assets/images/sections/tokenomics-donut.png"
                            alt="SKA token distribution"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Right: Distribution Stats Grid — uniformly transparent, with a
                        thin white rule between each row. */}
                    <div className="lg:w-[460px] lg:shrink-0 grid grid-cols-2 self-center w-full bg-[#0a0a12]/25">
                        {distribution.map((item, idx) => (
                            <div
                                key={idx}
                                className={`relative px-6 py-[clamp(10px,2.2svh,20px)] flex flex-col gap-1 ${idx >= 2 ? "border-t border-white/25" : ""}`}
                            >
                                <span className="text-[24px] md:text-[length:clamp(21px,2.8svh,28px)] font-satoshi font-semibold text-white leading-tight">{item.pct}</span>
                                <span className="text-gray-300 text-[14px] leading-tight font-satoshi">{item.label}</span>

                                {/* Vertical separator between the two columns */}
                                {idx % 2 === 0 && (
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] w-[1px] bg-white/20" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contract Section (shared component from the old site) */}
                <div className="mx-auto max-w-[1160px] w-full bg-[#0a0a12]/70 flex flex-col">
                    {/* Top Section with Border */}
                    <div className="p-6 md:p-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h4 className="text-xl font-satoshi font-medium text-white mb-2">Contract Address</h4>
                            <div className="flex flex-col gap-1">
                                <code className="text-gray-400 font-mono text-base break-all">
                                    {contractAddress}
                                </code>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-2 self-end md:self-auto">
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-2 text-[#F1C40F] hover:text-[#d4ac0d] transition-colors font-satoshi text-sm uppercase tracking-wide"
                            >
                                {copied ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        <span className="text-green-500">Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                        <span>Copy Address</span>
                                    </>
                                )}
                            </button>
                            <div className="flex items-center gap-2 text-red-500/80 text-xs font-satoshi">
                                <span>✋</span>
                                <span>(Do not send any tokens to this address)</span>
                            </div>
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-0 justify-items-center md:justify-items-start">
                        {[
                            { value: "SEIKA", label: "Name" },
                            { value: "SKA", label: "Symbol" },
                            { value: "18", label: "Decimal" },
                            { value: "BEP20", label: "Network" },
                            { value: "BSC", label: "Chain" },
                        ].map((item, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className="relative col-span-1 text-center md:text-left w-full flex flex-col items-center md:items-start p-4 border-t border-white/20"
                                >
                                    <span className="block text-[24px] font-satoshi text-white mb-0 leading-tight">{item.value}</span>
                                    <span className="text-gray-400 text-[14px] text-center md:text-left block w-full leading-tight font-satoshi">{item.label}</span>

                                    {/* Custom Separators - Mobile Only */}
                                    {/* Right Line */}
                                    <div className={`absolute right-0 top-2 bottom-0 w-[1px] bg-white/20 md:hidden`} />
                                    {/* Bottom Line */}
                                    <div className={`absolute bottom-0 left-2 right-0 h-[1px] bg-white/20 md:hidden`} />

                                    {/* Desktop Vertical Separator - Centered & Not Touching Borders */}
                                    {((idx + 1) % 5 !== 0) && (
                                        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[60%] w-[1px] bg-white/20" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
