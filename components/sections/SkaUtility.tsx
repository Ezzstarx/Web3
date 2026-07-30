"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface UtilityTab {
    id: string;
    label: string;
    // Bullet points shown in the detail card. Only "Community Rewards"
    // content exists in the design so far — fill the rest when provided.
    points: string[];
}

const tabs: UtilityTab[] = [
    {
        id: "community-rewards",
        label: "Community Rewards",
        points: [
            "Earn Seika through level ups",
            "Gain XP by staying active in the ecosystem",
            "Grow your profile and unlock Badges",
            "Earn through competitive events",
        ],
    },
    { id: "creator-monetization", label: "Creator Monetization", points: [] },
    { id: "character-identity", label: "Character Identity", points: [] },
    { id: "digital-goods", label: "Digital goods & Skins", points: [] },
    { id: "real-world-utility", label: "Real World Utility", points: [] },
    { id: "future-utility", label: "Future Utility", points: [] },
];

export default function SkaUtility() {
    const [activeId, setActiveId] = useState(tabs[0].id);
    const activeTab = tabs.find((t) => t.id === activeId) || tabs[0];

    return (
        <section id="ska-utility" className="relative overflow-hidden bg-[#0b0508] py-24 md:py-28">
            {/* Cyberpunk cityscape background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/sections/ska-utility-bg.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

            <div className="page-x relative z-10">
                {/* Heading */}
                <div className="relative w-fit mx-auto pb-4 mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-[44px] font-tektur font-medium text-white text-center">
                        SKA Utility
                    </h2>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] h-[1px] bg-gradient-to-r from-transparent via-[#DE3BD6] to-transparent"></div>
                </div>

                <div className="flex flex-col lg:flex-row items-start justify-between gap-12 w-full">

                    {/* Left: Question + Detail Card */}
                    <div className="w-full lg:w-[45%]">
                        <h3 className="text-3xl md:text-[40px] font-tektur font-medium text-white mb-10">
                            What makes SEIKA unique?
                        </h3>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.25 }}
                                className="relative rounded-xl border border-white/25 bg-gradient-to-b from-[#4c1d95]/90 to-[#2e1065]/90 p-8 md:p-10 min-h-[330px]"
                            >
                                <h4 className="text-2xl md:text-[30px] font-tektur font-bold text-white mb-6">
                                    {activeTab.label}
                                </h4>
                                <ul className="space-y-3">
                                    {activeTab.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                                            <span className="text-white font-satoshi text-base md:text-[17px] leading-relaxed">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right: Utility Tab List */}
                    <div className="w-full lg:w-[48%] flex flex-col gap-4 lg:mt-24">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveId(tab.id)}
                                className={`w-full text-left px-7 py-3.5 rounded-lg border font-tektur text-xl md:text-[26px] tracking-wide transition-all duration-300 ${activeId === tab.id
                                    ? "border-white/40 bg-gradient-to-r from-[#6d28d9] to-[#4c1d95] text-white shadow-[0_0_20px_rgba(109,40,217,0.35)]"
                                    : "border-white/30 bg-black/20 text-[#cfc8bd] hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
