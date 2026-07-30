"use client";

import { useState } from "react";
import { Linkedin } from "lucide-react";

// Custom X (Twitter) Icon (shared with Footer)
const XIcon = ({ size = 18, className = "" }: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

interface TeamMember {
    name: string;
    role: string;
    description: string;
    x: string;        // profile links
    linkedin: string;
    image: string;
    left: number;     // horizontal centre, % of the stage
    height: number;   // figure height, % of the stage (depth cue)
}

// The 12 figures stand in front of the EZZSTAR LED wall. Hovering a figure
// swaps the name plate and bio below. Only Muzammil's bio is defined in the
// design; names/roles are carried over from the old site's Team data.
const members: TeamMember[] = [
    { name: "Saachi Singh", role: "Product Designer", description: "", x: "#", linkedin: "https://www.linkedin.com/in/saachi-singh-75323123b/", image: "/assets/images/team/m01.png", left: 9.5, height: 52 },
    { name: "Fateen Moeen", role: "Unreal Dev/ Ani Lead", description: "", x: "#", linkedin: "https://www.linkedin.com/in/fateen-catzero/", image: "/assets/images/team/m02.png", left: 17.5, height: 57 },
    { name: "Aman Prajapati", role: "CTO, Co-Founder", description: "", x: "#", linkedin: "https://www.linkedin.com/in/aman-prajapati-675909199/", image: "/assets/images/team/m03.png", left: 26, height: 54 },
    { name: "Tushar Goyal", role: "Blockchain Developer", description: "", x: "#", linkedin: "https://www.linkedin.com/in/tushar-goyal-1876b7160", image: "/assets/images/team/m10.png", left: 34, height: 50 },
    { name: "Rabiya Javed", role: "Graphic Designer", description: "", x: "#", linkedin: "https://www.linkedin.com/in/rabiya-javed-378694275/", image: "/assets/images/team/m05.png", left: 41.5, height: 53 },
    {
        name: "Muzammil Moosa",
        role: "CEO & Founder",
        description: "7+ years of market analysis insights from Nielsen. Experienced in e-commerce business and gaming community leadership gaming community director, previously administering regional tournament setups with global brands including Red Bull and Buffalo Wild Wings. Directing token design and network distribution.",
        x: "https://x.com/ezzstarx?s=21",
        linkedin: "https://www.linkedin.com/in/muzammil-moosa-48ba7a201/",
        image: "/assets/images/team/m06.png",
        left: 50.5,
        height: 60,
    },
    { name: "M. Arbaaz", role: "Partnership Manager", description: "", x: "#", linkedin: "https://www.linkedin.com/in/mohammed-arbaaz-41b428182/", image: "/assets/images/team/m07.png", left: 57.5, height: 49 },
    { name: "Ali Abdullah", role: "Community Builder", description: "", x: "#", linkedin: "https://www.linkedin.com/in/ali-abdullah-028845333/", image: "/assets/images/team/m08.png", left: 64.5, height: 55 },
    { name: "Harsh Upadhyay", role: "Full Stack Developer", description: "", x: "#", linkedin: "https://www.linkedin.com/in/upadhyay-harsh9756/", image: "/assets/images/team/m09.png", left: 71.5, height: 47 },
    { name: "Abdullah Khan", role: "Web Developer", description: "", x: "#", linkedin: "https://www.linkedin.com/in/abdullahkhancs01/", image: "/assets/images/team/m04.png", left: 78.5, height: 54 },
    { name: "Misbah Iftikhar", role: "2D Concept Artist", description: "", x: "#", linkedin: "https://www.linkedin.com/in/misbah-iftikhar-20761938/", image: "/assets/images/team/m11.png", left: 85.5, height: 51 },
    { name: "Ayush Kumar", role: "Level Designer", description: "", x: "#", linkedin: "https://www.linkedin.com/in/ayush-kumar-parganihaa-49048320b/", image: "/assets/images/team/m12.png", left: 92.5, height: 53 },
];

export default function CoreTeam() {
    // The design's resting state highlights Muzammil (centre figure)
    const [activeIndex, setActiveIndex] = useState(5);
    const active = members[activeIndex];

    return (
        <section id="team" className="screen-section relative overflow-hidden bg-[#04070d]">
            <div className="relative z-20 pt-20">
                {/* Heading — left aligned */}
                <div className="page-x relative w-fit pb-4 mb-6">
                    <h2 className="text-3xl md:text-[44px] font-tektur font-medium text-white">
                        Core Team
                    </h2>
                    <div className="absolute bottom-0 -left-16 w-[260%] h-[1px] bg-gradient-to-r from-transparent via-[#DE3BD6] to-transparent"></div>
                </div>
            </div>

            {/* Stage: EZZSTAR LED wall with the team standing in front of it.
                From lg up the stage is height-driven so the whole section fits one
                screen; the figures are positioned in %, so they scale with it. */}
            <div className="relative w-full aspect-[1920/1000] lg:aspect-auto lg:h-[calc(100svh-130px)] -mt-16">
                <img
                    src="/assets/images/team/led-wall.png"
                    alt=""
                    aria-hidden
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Team figures — purely decorative. The cutouts carry ~60% transparent
                    padding, so their boxes overlap their neighbours; hit-testing is
                    handled by the separate hotspot bands below instead. */}
                {members.map((member, idx) => (
                    <div
                        key={idx}
                        className="absolute bottom-[22%] -translate-x-1/2 pointer-events-none"
                        style={{ left: `${member.left}%`, height: `${member.height}%` }}
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className={`h-full w-auto max-w-none object-contain object-bottom transition-all duration-300 ${activeIndex === idx ? "brightness-110" : "brightness-[0.82]"
                                }`}
                        />
                    </div>
                ))}

                {/* Hover hotspots — one contiguous, non-overlapping band per figure,
                    each running to the midpoint between neighbours so every character
                    gets its own reliable hover region. */}
                {members.map((member, idx) => {
                    const prev = members[idx - 1];
                    const next = members[idx + 1];
                    const start = prev ? (prev.left + member.left) / 2 : 0;
                    const end = next ? (member.left + next.left) / 2 : 100;
                    return (
                        <button
                            key={`hit-${idx}`}
                            onMouseEnter={() => setActiveIndex(idx)}
                            onFocus={() => setActiveIndex(idx)}
                            onClick={() => setActiveIndex(idx)}
                            className="absolute bottom-[22%] top-[12%] bg-transparent focus:outline-none focus-visible:bg-white/5"
                            style={{ left: `${start}%`, width: `${end - start}%` }}
                            aria-label={member.name}
                            aria-current={activeIndex === idx}
                        />
                    );
                })}

                {/* Member plate + bio */}
                <div className="absolute bottom-[3%] left-0 right-0 z-20 pointer-events-none">
                    <div className="relative flex flex-col md:flex-row items-start gap-8 px-6 md:px-0">

                        {/* Name plate — magenta parallelogram */}
                        <div className="relative md:ml-[22%]">
                            <div
                                className="relative px-10 py-3 bg-gradient-to-r from-[#c026d3] to-[#7c3aed]"
                                style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
                            >
                                {/* halftone dots overlay */}
                                <div
                                    className="absolute inset-0 opacity-30"
                                    style={{
                                        backgroundImage: "radial-gradient(rgba(0,0,0,0.8) 1px, transparent 1px)",
                                        backgroundSize: "5px 5px",
                                        clipPath: "inherit",
                                    }}
                                />
                                <p className="relative font-satoshi font-bold text-white text-[17px] leading-snug">{active.name}</p>
                                <p className="relative font-satoshi text-white/90 text-[14px]">{active.role}</p>
                            </div>
                            {/* Connector line toward the figure */}
                            <div className="hidden md:block absolute top-1/2 -right-24 w-24 h-[2px] bg-[#a855f7]" />
                        </div>

                        {/* Bio + socials */}
                        <div className="md:ml-[6%] max-w-[860px]">
                            <p className="font-satoshi font-semibold text-white text-[14px] md:text-[16px] leading-relaxed [text-shadow:0_2px_8px_rgba(0,0,0,0.9)]">
                                {active.description}
                            </p>
                            <div className="flex justify-end gap-5 mt-4 text-white pointer-events-auto">
                                <a href={active.x} target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">
                                    <XIcon size={18} />
                                </a>
                                <a href={active.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">
                                    <Linkedin size={19} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
