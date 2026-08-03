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
        image: "/assets/images/roadmap/phase2-large.png",
        thumb: "/assets/images/roadmap/thumb2.png",
    },
    {
        id: 3,
        title: "Phase 3",
        period: "(Q4 2026)",
        points: [
            "Token launch on exchanges",
            "Creator Website launch",
            "Creators Onboard",
            "Marketplace launch.",
        ],
        side: "below",
        image: "/assets/images/roadmap/thumb-phase3.png",
        thumb: "/assets/images/roadmap/thumb-phase3.png",
    },
    {
        id: 4,
        title: "Phase 4",
        period: "(Q2 2027)",
        points: [
            "Mobile Social Media App launch",
            "Crossed Arena Game launch",
            "Community expansion.",
        ],
        side: "above",
        image: "/assets/images/roadmap/thumb3.png",
        thumb: "/assets/images/roadmap/thumb3.png",
    },
    {
        id: 5,
        title: "Phase 5",
        period: "(Q4 2027)",
        points: [
            "Xebion Realm launch",
            "Global growth",
            "Institutional partnerships and continuous updates.",
        ],
        side: "below",
        image: "/assets/images/roadmap/thumb4.png",
        thumb: "/assets/images/roadmap/thumb4.png",
    },
];

// Labels sit on a 5-column grid, so phase i starts at i * 20% of the row.
// Normally a detail block starts at its own phase's column, which is what keeps
// the block, its stem and the label on the same x. The last column is too
// narrow for bullets + artwork side by side, so there the artwork moves to the
// LEFT of the bullets and the block shifts left by exactly the artwork's width
// — the bullets and stem still land on the phase's x.
const COL = 20;
const ICON_W = 17; // artwork column, % of the row
const ICON_GAP = 2;
function blockGeometry(index: number) {
    const phaseX = index * COL;
    const iconLeft = 100 - phaseX < 30;
    const left = iconLeft ? phaseX - ICON_W - ICON_GAP : phaseX;
    const width = Math.min(100 - left, iconLeft ? 100 - left : 46);
    return { left, width, iconLeft };
}

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

// A timeline connector. No outlined pill — just a thin white rule, with the
// completed portion drawn over it as a glowing magenta→cyan line (the presale
// bar's hue-cycling glow and travelling light stream, minus the container).
function ProgressSegment({ filled }: { filled: boolean }) {
    return (
        <div className="flex-1 mx-1 relative h-[10px]">
            {/* the plain rule every segment shows */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-white/85 rounded-full" />
            {/* the lit portion */}
            <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px]"
                initial={false}
                animate={{ width: filled ? "100%" : "0%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <div
                    className="absolute top-[-4px] bottom-[-4px] left-0 w-full bg-gradient-to-r from-[#FF00FF] to-[#00FFF0] blur-[3px] opacity-70 z-0"
                    style={{ animation: "colorCycle 4s linear infinite" }}
                />
                <div className="presale-glow-stream z-0" />
                <div className="absolute inset-0 bg-white z-10 rounded-full shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
            </motion.div>
        </div>
    );
}

// Phase image component that adds the cyan bracket borders for phases that don't have them baked in
function PhaseImage({ phase, mobile }: { phase: RoadmapPhase; mobile?: boolean }) {
    const isThumb = phase.image.includes("thumb");
    const hClass = mobile ? "h-[160px] mt-5" : "h-[clamp(130px,25svh,268px)] shrink-0";
    
    if (!isThumb) {
        return <img src={phase.image} alt={phase.title} className={`max-w-full w-auto object-contain ${hClass}`} />;
    }

    return (
        <div className={`relative inline-flex items-center justify-center ${hClass}`}>
            <div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 border-t-[2px] border-l-[2px] border-[#00FFF0] pointer-events-none rounded-tl-[4px]" />
            <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t-[2px] border-r-[2px] border-[#00FFF0] pointer-events-none rounded-tr-[4px]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b-[2px] border-l-[2px] border-[#00FFF0] pointer-events-none rounded-bl-[4px]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-b-[2px] border-r-[2px] border-[#00FFF0] pointer-events-none rounded-br-[4px]" />
            <div className="absolute inset-[6px] md:inset-[10px] border border-white/5 rounded-xl bg-white/[0.02] pointer-events-none" />
            
            <img src={phase.image} alt={phase.title} className="relative z-10 max-w-full w-auto h-full object-contain p-4 md:p-6" />
        </div>
    );
}

// The detail block: bullets and the phase artwork, hanging off a stem that
// starts at the block's left edge — which is the phase's own column, so the
// block, the stem and the label all line up.
function PhaseDetail({ phase, index }: { phase: RoadmapPhase; index: number }) {
    const { left, width, iconLeft } = blockGeometry(index);
    const stem = <div className="w-[1px] h-[clamp(20px,4.5svh,52px)] bg-white/60 ml-[14px]" />;
    return (
        <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: phase.side === "above" ? -14 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: phase.side === "above" ? -14 : 14 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className={`absolute ${phase.side === "above" ? "bottom-0" : "top-0"}`}
            style={{ left: `${left}%`, width: `${width}%` }}
        >
            {iconLeft ? (
                // Artwork on the left, bullets on the right. The stem is hoisted
                // out of the row and indented to the bullets' x, so the artwork
                // and the bullets share a top edge instead of the artwork
                // sitting a stem's height higher than the card.
                <>
                    {phase.side === "below" && (
                        <div className="mb-3" style={{ marginLeft: `calc(${((ICON_W + ICON_GAP) / width) * 100}% + 14px)` }}>
                            <div className="w-[1px] h-[clamp(20px,4.5svh,52px)] bg-white/60" />
                        </div>
                    )}
                    <div className="flex items-start" style={{ gap: `${(ICON_GAP / width) * 100}%` }}>
                        <div
                            className="shrink-0 flex items-start justify-center"
                            style={{ width: `${(ICON_W / width) * 100}%` }}
                        >
                            <PhaseImage phase={phase} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <PhasePoints points={phase.points} />
                        </div>
                    </div>
                    {phase.side === "above" && (
                        <div className="mt-3" style={{ marginLeft: `calc(${((ICON_W + ICON_GAP) / width) * 100}% + 14px)` }}>
                            <div className="w-[1px] h-[clamp(20px,4.5svh,52px)] bg-white/60" />
                        </div>
                    )}
                </>
            ) : (
                <>
                    {phase.side === "below" && <div className="mb-3">{stem}</div>}
                    <div className="flex items-start gap-6">
                        <PhasePoints points={phase.points} />
                        <PhaseImage phase={phase} />
                    </div>
                    {phase.side === "above" && <div className="mt-3">{stem}</div>}
                </>
            )}
        </motion.div>
    );
}

export default function Roadmap() {
    // Only one phase is shown at a time; the design opens on Phase 1.
    const [activeId, setActiveId] = useState(1);
    const activeIndex = Math.max(0, phases.findIndex((p) => p.id === activeId));
    const active = phases[activeIndex];

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
                <div className="relative w-fit pb-4 mb-[clamp(34px,8svh,86px)]">
                    <h2 className="text-3xl md:text-[44px] font-tektur font-medium text-white">
                        RoadMap
                    </h2>
                    <div className="absolute bottom-0 -left-24 w-[300%] h-[1px] bg-gradient-to-r from-transparent via-[#DE3BD6] to-transparent"></div>
                </div>

                {/* Timeline. The two detail bands keep a reserved height so the
                    layout never jumps as phases swap. */}
                <div className="hidden lg:flex flex-col">

                    {/* Band above the line */}
                    <div className="relative h-[clamp(170px,30svh,340px)]">
                        <AnimatePresence mode="wait">
                            {active.side === "above" && <PhaseDetail phase={active} index={activeIndex} />}
                        </AnimatePresence>
                    </div>

                    {/* The timeline itself — all five phases always visible.
                        A 5-column grid puts every label at an exact 20% step,
                        which is what blockGeometry() aligns the details to. */}
                    <div className="grid grid-cols-5 items-center">
                        {phases.map((phase, idx) => {
                            const isActive = phase.id === activeId;
                            return (
                                <div key={phase.id} className="flex items-center">
                                    <button
                                        onClick={() => setActiveId(phase.id)}
                                        className="flex flex-col shrink-0 text-left focus:outline-none"
                                        aria-current={isActive}
                                    >
                                        <span className={`font-satoshi font-bold text-[20px] md:text-[24px] leading-tight transition-colors duration-300 ${isActive ? "text-[#ED3BD6]" : "text-white hover:text-white/80"}`}>
                                            {phase.title}
                                        </span>
                                        {/* Phases without a date still render the line
                                            (invisible) so every label aligns. */}
                                        <span
                                            className={`font-satoshi font-bold text-[14px] md:text-[16px] transition-colors duration-300 ${isActive ? "text-[#ED3BD6]" : "text-white"} ${phase.period ? "" : "opacity-0 select-none"}`}
                                            aria-hidden={!phase.period}
                                        >
                                            {phase.period || "(—)"}
                                        </span>
                                    </button>
                                    {idx < phases.length - 1 && (
                                        <ProgressSegment filled={idx < phases.findIndex((p) => p.id === activeId)} />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Band below the line */}
                    <div className="relative h-[clamp(170px,30svh,340px)]">
                        <AnimatePresence mode="wait">
                            {active.side === "below" && <PhaseDetail phase={active} index={activeIndex} />}
                        </AnimatePresence>
                    </div>

                    {/* Phase selector — its own row, so the detail block above can
                        never sit on top of it. */}
                    <div className="flex justify-end mt-[clamp(20px,5svh,60px)]">
                        <div className="flex flex-nowrap items-end gap-5 md:gap-7">
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
                                        <div className="w-[56px] h-[56px] md:w-[72px] md:h-[72px] relative flex items-center justify-center">
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
                                        <span className={`font-tektur text-[12px] md:text-[14px] tracking-wide whitespace-nowrap pb-1 border-b-2 transition-colors duration-300 ${isActive
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
                        <PhaseImage phase={active} mobile />
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
