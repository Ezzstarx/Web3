"use client";

import { useState } from "react";

interface RoadmapPhase {
    id: number;
    title: string;
    period: string;
    // Details rendered on the timeline (above or below the line).
    // Phases without points only appear as labels — content comes later.
    points: string[];
    detailPosition: "above" | "below" | null;
    highlighted: boolean; // pink label + glowing connector in the design
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
        detailPosition: "below",
        highlighted: true,
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
        detailPosition: "above",
        highlighted: true,
    },
    { id: 3, title: "Phase 3", period: "(Q4 2026)", points: [], detailPosition: null, highlighted: false },
    { id: 4, title: "Phase 4", period: "(Q2 2026)", points: [], detailPosition: null, highlighted: false },
];

// Cyan tech-corner frame around phase images (pattern shared with the old site)
function TechFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`relative p-3 ${className}`}>
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-10 h-10 border-t-[1px] border-l-[1px] border-[#3EE1F0] rounded-tl-sm" style={{ filter: "drop-shadow(0 0 6px #3EE1F0)" }}></div>
                <div className="absolute top-0 right-0 w-10 h-10 border-t-[1px] border-r-[1px] border-[#3EE1F0] rounded-tr-sm" style={{ filter: "drop-shadow(0 0 6px #3EE1F0)" }}></div>
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-[1px] border-l-[1px] border-[#3EE1F0] rounded-bl-sm" style={{ filter: "drop-shadow(0 0 6px #3EE1F0)" }}></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-[1px] border-r-[1px] border-[#3EE1F0] rounded-br-sm" style={{ filter: "drop-shadow(0 0 6px #3EE1F0)" }}></div>
            </div>
            {children}
        </div>
    );
}

function PhasePoints({ points }: { points: string[] }) {
    return (
        <ul className="space-y-1.5">
            {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                    <span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                    <span className="text-white font-satoshi text-lg md:text-[22px] leading-relaxed">{point}</span>
                </li>
            ))}
        </ul>
    );
}

export default function Roadmap() {
    const [activePhaseId, setActivePhaseId] = useState<number>(1);

    return (
        <section id="roadmap" className="relative w-full py-16 md:py-20 overflow-hidden bg-black">
            {/* Ambient color glows (left edge, as in the design) */}
            <div className="absolute top-1/2 left-0 w-[420px] h-[500px] bg-[#2ECC71]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[420px] h-[400px] bg-[#C243FE]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Heading — left aligned */}
                <div className="relative w-fit pb-4 mb-10 md:ml-16">
                    <h2 className="text-3xl md:text-[44px] font-tektur font-medium text-white">
                        RoadMap
                    </h2>
                    <div className="absolute bottom-0 -left-24 w-[300%] h-[1px] bg-gradient-to-r from-transparent via-[#DE3BD6] to-transparent"></div>
                </div>

                {/* Timeline */}
                <div className="hidden lg:block relative min-h-[760px]">

                    {/* Phase 2 details — above the line */}
                    <div className="absolute top-0 left-[30%] flex items-start gap-16">
                        <div className="flex flex-col">
                            <PhasePoints points={phases[1].points} />
                            {/* Vertical connector down to Phase 2 label */}
                            <div className="w-[1px] h-14 bg-white/60 ml-14 mt-3" />
                        </div>
                        {/* Phase 2 image (gold SEIKA coin) — client will provide */}
                        <TechFrame className="mt-2">
                            <div className="img-placeholder w-[230px] h-[210px]" data-image="roadmap-phase2-coin" />
                        </TechFrame>
                    </div>

                    {/* Timeline row */}
                    <div className="absolute top-[400px] left-0 right-0 flex items-center">
                        {phases.map((phase, idx) => (
                            <div key={phase.id} className={`flex items-center ${idx < phases.length - 1 ? "flex-1" : ""}`}>
                                <div className="flex flex-col shrink-0">
                                    <span className={`font-satoshi font-bold text-[28px] md:text-[32px] leading-tight ${phase.highlighted ? "text-[#ED3BD6]" : "text-white"}`}>
                                        {phase.title}
                                    </span>
                                    <span className={`font-satoshi font-bold text-[18px] md:text-[20px] ${phase.highlighted ? "text-[#ED3BD6]" : "text-white"}`}>
                                        {phase.period}
                                    </span>
                                </div>
                                {idx < phases.length - 1 && (
                                    idx === 0 ? (
                                        // Glowing segment between Phase 1 and Phase 2
                                        <div className="flex-1 h-[6px] mx-4 rounded-full bg-gradient-to-r from-[#ED3BD6]/10 via-[#ED3BD6] to-[#ED3BD6]/10 blur-[1px] shadow-[0_0_18px_rgba(237,59,214,0.8)]" />
                                    ) : (
                                        <div className="flex-1 h-[2px] mx-4 bg-white" />
                                    )
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Phase 1 details — below the line */}
                    <div className="absolute top-[510px] left-0 flex items-start gap-10">
                        <div className="flex flex-col">
                            {/* Vertical connector up to Phase 1 label */}
                            <div className="w-[1px] h-12 bg-white/60 ml-14 mb-3 -mt-2" />
                            <PhasePoints points={phases[0].points} />
                        </div>
                        {/* Phase 1 image (cyberpunk arcade building) — client will provide */}
                        <TechFrame>
                            <div className="img-placeholder w-[230px] h-[210px]" data-image="roadmap-phase1-building" />
                        </TechFrame>
                    </div>

                    {/* Phase selector thumbnails — bottom right (shared component from the old site) */}
                    <div className="absolute bottom-0 right-0 flex flex-nowrap items-end gap-2 md:gap-10 z-30">
                        {phases.map((phase) => (
                            <div
                                key={phase.id}
                                onClick={() => setActivePhaseId(phase.id)}
                                className="flex flex-col items-center gap-2 md:gap-3 cursor-pointer group transition-transform duration-300 hover:scale-105 min-w-[60px] md:min-w-[80px]"
                            >
                                {/* Thumbnail — client will provide phase images */}
                                <div className="w-[60px] h-[60px] md:w-[110px] md:h-[107px] relative flex-shrink-0">
                                    <div
                                        className={`img-placeholder w-full h-full transition-all duration-300 ${activePhaseId === phase.id
                                            ? "brightness-110 scale-110"
                                            : "brightness-75 opacity-70 group-hover:opacity-100 group-hover:brightness-100"
                                            }`}
                                        data-image={`roadmap-thumb-phase${phase.id}`}
                                    />
                                </div>

                                {/* Label */}
                                <div className="flex flex-col items-center min-w-[60px] md:min-w-[80px]">
                                    <span className={`font-tektur text-[10px] md:text-[20px] tracking-wide transition-colors duration-300 text-center whitespace-nowrap pb-1 ${activePhaseId === phase.id
                                        ? "text-white font-medium border-b-2 border-white"
                                        : "text-white/70 group-hover:text-white border-b-2 border-transparent"
                                        }`}>
                                        {phase.title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile fallback: stacked phases */}
                <div className="lg:hidden flex flex-col gap-12">
                    {phases.filter(p => p.points.length > 0).map((phase) => (
                        <div key={phase.id}>
                            <div className="mb-4">
                                <span className={`font-satoshi font-bold text-2xl ${phase.highlighted ? "text-[#ED3BD6]" : "text-white"}`}>{phase.title} </span>
                                <span className={`font-satoshi font-bold text-lg ${phase.highlighted ? "text-[#ED3BD6]" : "text-white"}`}>{phase.period}</span>
                            </div>
                            <PhasePoints points={phase.points} />
                        </div>
                    ))}
                    <div className="flex flex-nowrap justify-center gap-6">
                        {phases.map((phase) => (
                            <div key={phase.id} onClick={() => setActivePhaseId(phase.id)} className="flex flex-col items-center gap-2 cursor-pointer">
                                <div className="img-placeholder w-[60px] h-[60px]" data-image={`roadmap-thumb-phase${phase.id}`} />
                                <span className={`font-tektur text-xs ${activePhaseId === phase.id ? "text-white border-b border-white" : "text-white/70"}`}>{phase.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
