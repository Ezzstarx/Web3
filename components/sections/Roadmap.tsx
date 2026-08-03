"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RoadmapPhase {
    id: number;
    title: string;
    period: string;
    // Bullets for this phase. Phases the client hasn't written yet stay empty
    // and simply render the image with no list.
    points: string[];
    // Which side of the timeline this phase's detail block sits on, matching
    // the design (phase 1 below, phase 2 above, alternating from there).
    side: "above" | "below";
    // Left offset of the detail block, % of the row — puts it under/over its
    // own label rather than always in the same place.
    left: number;
    image: string;
    thumb: string;
}

const phases: RoadmapPhase[] = [
    {
        id: 1,
        title: "Phase 1",
        period: "(Q3 2026)",
        points: [
            "Whitepaper and Concept",
            "Website launch",
            "Community",
            "Contract verification on BscScan.",
        ],
        side: "below",
        left: 0,
        image: "/assets/images/roadmap/phase1-large.png",
        thumb: "/assets/images/roadmap/thumb1.png",
    },
    {
        id: 2,
        title: "Phase 2",
        period: "(Q3 2026)",
        points: [
            "Limited token sale",
            "SOL bridge",
            "Marketing",
            "Organiser & Game zone partnerships",
            "Game Zone OS launch.",
        ],
        side: "above",
        left: 30,
        image: "/assets/images/roadmap/phase2-large.png",
        thumb: "/assets/images/roadmap/thumb2.png",
    },
    {
        id: 3,
        title: "Phase 3",
        period: "(Q4 2026)",
        points: [],
        side: "below",
        left: 30,
        image: "/assets/images/roadmap/thumb-p3.png",
        thumb: "/assets/images/roadmap/thumb-p3.png",
    },
    {
        id: 4,
        title: "Phase 4",
        period: "(Q2 2026)",
        points: [],
        side: "above",
        left: 52,
        image: "/assets/images/roadmap/thumb3.png",
        thumb: "/assets/images/roadmap/thumb3.png",
    },
    {
        id: 5,
        title: "Phase 5",
        period: "",
        points: [],
        side: "below",
        left: 52,
        image: "/assets/images/roadmap/thumb4.png",
        thumb: "/assets/images/roadmap/thumb4.png",
    },
];

function PhasePoints({ points }: { points: string[] }) {
    return (
        <ul className="space-y-1.5">
            {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                    <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                    <span className="text-white font-satoshi text-base md:text-[18px] leading-relaxed">{point}</span>
                </li>
            ))}
        </ul>
    );
}

// The detail block: bullets on the left, phase artwork on the right, with the
// stem that runs to the timeline (down when above it, up when below it).
function PhaseDetail({ phase }: { phase: RoadmapPhase }) {
    const stem = <div className="w-[1px] h-[clamp(20px,4.5svh,52px)] bg-white/60 ml-14" />;
    return (
        <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: phase.side === "above" ? -14 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: phase.side === "above" ? -14 : 14 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className={`absolute flex items-start gap-12 ${phase.side === "above" ? "bottom-0" : "top-0"}`}
            style={{ left: `${phase.left}%` }}
        >
            <div className="flex flex-col">
                {phase.side === "below" && <div className="mb-3">{stem}</div>}
                <PhasePoints points={phase.points} />
                {phase.side === "above" && <div className="mt-3">{stem}</div>}
            </div>
            <img
                src={phase.image}
                alt={phase.title}
                className="w-auto h-[clamp(130px,22svh,220px)] object-contain shrink-0"
            />
        </motion.div>
    );
}

export default function Roadmap() {
    // Only one phase is shown at a time; the design opens on Phase 1.
    const [activeId, setActiveId] = useState(1);
    const active = phases.find((p) => p.id === activeId) || phases[0];

    // Height leaves room for the ~70px partner strip that follows, so the two
    // together fill exactly one screen and the logos are visible alongside the
    // roadmap rather than below the fold.
    return (
        <section id="roadmap" className="relative w-full py-12 md:py-14 overflow-hidden bg-black lg:min-h-[calc(100svh-70px)] lg:flex lg:flex-col lg:justify-center">
            {/* Ambient color glows (left edge, as in the design) */}
            <div className="absolute top-1/2 left-0 w-[420px] h-[500px] bg-[#2ECC71]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[420px] h-[400px] bg-[#C243FE]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="page-x relative z-10">
                {/* Heading — left aligned */}
                <div className="relative w-fit pb-4 mb-10">
                    <h2 className="text-3xl md:text-[44px] font-tektur font-medium text-white">
                        RoadMap
                    </h2>
                    <div className="absolute bottom-0 -left-24 w-[300%] h-[1px] bg-gradient-to-r from-transparent via-[#DE3BD6] to-transparent"></div>
                </div>

                {/* Timeline. The two detail bands keep a reserved height so the
                    layout never jumps as phases swap. */}
                <div className="hidden lg:flex flex-col">

                    {/* Band above the line */}
                    <div className="relative h-[clamp(210px,32svh,330px)]">
                        <AnimatePresence mode="wait">
                            {active.side === "above" && <PhaseDetail phase={active} />}
                        </AnimatePresence>
                    </div>

                    {/* The timeline itself — all five phases always visible */}
                    <div className="flex items-center">
                        {phases.map((phase, idx) => {
                            const isActive = phase.id === activeId;
                            return (
                                <div key={phase.id} className={`flex items-center ${idx < phases.length - 1 ? "flex-1" : ""}`}>
                                    <button
                                        onClick={() => setActiveId(phase.id)}
                                        className="flex flex-col shrink-0 text-left focus:outline-none"
                                        aria-current={isActive}
                                    >
                                        <span className={`font-satoshi font-bold text-[26px] md:text-[30px] leading-tight transition-colors duration-300 ${isActive ? "text-[#ED3BD6]" : "text-white hover:text-white/80"}`}>
                                            {phase.title}
                                        </span>
                                        {/* Phases without a date still render the line
                                            (invisible) so every label aligns. */}
                                        <span
                                            className={`font-satoshi font-bold text-[17px] md:text-[19px] transition-colors duration-300 ${isActive ? "text-[#ED3BD6]" : "text-white"} ${phase.period ? "" : "opacity-0 select-none"}`}
                                            aria-hidden={!phase.period}
                                        >
                                            {phase.period || "(—)"}
                                        </span>
                                    </button>
                                    {idx < phases.length - 1 && (
                                        // The glowing segment marks progress up to the active phase
                                        idx < phases.findIndex((p) => p.id === activeId) ? (
                                            <div className="flex-1 h-[6px] mx-4 rounded-full bg-gradient-to-r from-[#ED3BD6]/10 via-[#ED3BD6] to-[#ED3BD6]/10 blur-[1px] shadow-[0_0_18px_rgba(237,59,214,0.8)] transition-all duration-500" />
                                        ) : (
                                            <div className="flex-1 h-[2px] mx-4 bg-white transition-all duration-500" />
                                        )
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Band below the line + phase selector */}
                    <div className="relative h-[clamp(210px,32svh,330px)]">
                        <AnimatePresence mode="wait">
                            {active.side === "below" && <PhaseDetail phase={active} />}
                        </AnimatePresence>

                        {/* Phase selector — five icons, bottom right */}
                        <div className="absolute bottom-0 right-0 flex flex-nowrap items-end gap-6 md:gap-9 z-30">
                            {phases.map((phase) => {
                                const isActive = phase.id === activeId;
                                return (
                                    <button
                                        key={phase.id}
                                        onClick={() => setActiveId(phase.id)}
                                        className="flex flex-col items-center gap-2 cursor-pointer group transition-transform duration-300 hover:scale-105 focus:outline-none"
                                        aria-label={`Show ${phase.title}`}
                                        aria-current={isActive}
                                    >
                                        <div className="w-[70px] h-[70px] md:w-[92px] md:h-[92px] relative flex items-center justify-center">
                                            <img
                                                src={phase.thumb}
                                                alt=""
                                                aria-hidden
                                                className={`max-w-full max-h-full object-contain transition-all duration-300 ${isActive
                                                    ? "brightness-110 scale-110"
                                                    : "brightness-[0.6] opacity-70 group-hover:opacity-100 group-hover:brightness-90"
                                                    }`}
                                            />
                                        </div>
                                        <span className={`font-tektur text-[15px] md:text-[17px] tracking-wide whitespace-nowrap pb-1 border-b-2 transition-colors duration-300 ${isActive
                                            ? "text-white font-medium border-[#39FF14]"
                                            : "text-white/70 group-hover:text-white border-transparent"
                                            }`}>
                                            {phase.title}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Mobile fallback: the active phase stacked, with the same selector */}
                <div className="lg:hidden flex flex-col gap-8">
                    <div>
                        <div className="mb-4">
                            <span className="font-satoshi font-bold text-2xl text-[#ED3BD6]">{active.title} </span>
                            <span className="font-satoshi font-bold text-lg text-[#ED3BD6]">{active.period}</span>
                        </div>
                        <PhasePoints points={active.points} />
                        <img src={active.image} alt={active.title} className="mt-5 w-auto h-[160px] object-contain" />
                    </div>
                    <div className="flex flex-nowrap justify-center gap-4 overflow-x-auto scrollbar-hide">
                        {phases.map((phase) => (
                            <button
                                key={phase.id}
                                onClick={() => setActiveId(phase.id)}
                                className="flex flex-col items-center gap-2 shrink-0"
                                aria-label={`Show ${phase.title}`}
                            >
                                <img
                                    src={phase.thumb}
                                    alt=""
                                    aria-hidden
                                    className={`w-[54px] h-[54px] object-contain ${phase.id === activeId ? "brightness-110" : "brightness-[0.6] opacity-70"}`}
                                />
                                <span className={`font-tektur text-xs border-b-2 ${phase.id === activeId ? "text-white border-[#39FF14]" : "text-white/70 border-transparent"}`}>
                                    {phase.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
