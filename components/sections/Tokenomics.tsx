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
        <section id="tokenomics" className="relative overflow-hidden py-20 md:py-24 bg-[#14082a]">
            {/* Blurred "3B SKA" giant-letters background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/sections/tokenomics-bg.png')" }}
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Heading */}
                <div className="relative w-fit mx-auto pb-4 mb-14 md:mb-20">
                    <h2 className="text-3xl md:text-[44px] font-tektur font-medium text-white text-center">
                        Tokenomics
                    </h2>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] h-[1px] bg-gradient-to-r from-transparent via-[#DE3BD6] to-transparent"></div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-7xl mx-auto mb-10">

                    {/* Left: Donut distribution chart with callouts */}
                    <div className="relative w-full max-w-[760px] shrink-0 bg-[#0a0a12]/80 p-4">
                        <img
                            src="/assets/images/sections/tokenomics-donut.png"
                            alt="SKA token distribution"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Right: Distribution Stats Grid */}
                    <div className="w-full max-w-[460px] grid grid-cols-2">
                        {distribution.map((item, idx) => (
                            <div
                                key={idx}
                                className={`relative p-6 flex flex-col gap-1 ${Math.floor(idx / 2) % 2 === 0 ? "bg-[#0d0d16]/80" : "bg-[#12121d]/60"}`}
                            >
                                <span className="text-[26px] md:text-[30px] font-satoshi font-semibold text-white leading-tight">{item.pct}</span>
                                <span className="text-gray-400 text-[14px] leading-tight font-satoshi">{item.label}</span>

                                {/* Vertical separator between the two columns */}
                                {idx % 2 === 0 && (
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] w-[1px] bg-white/20" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contract Section (shared component from the old site) */}
                <div className="max-w-5xl mx-auto bg-[#0a0a12]/70 w-full flex flex-col">
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
