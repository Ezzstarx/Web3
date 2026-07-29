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
    left: number;     // hotspot position, % of section width
}

// 13 figures stand in front of the EZZSTAR LED wall (single artwork, client-provided).
// Hovering a figure reveals the member plate + bio. Only Muzammil's bio exists in
// the design so far — names/roles carried over from the old site's Team data.
const members: TeamMember[] = [
    { name: "Saachi Singh", role: "Product Designer", description: "", x: "#", linkedin: "https://www.linkedin.com/in/saachi-singh-75323123b/", left: 9 },
    { name: "Fateen Moeen", role: "Unreal Dev/ Ani Lead", description: "", x: "#", linkedin: "https://www.linkedin.com/in/fateen-catzero/", left: 17.5 },
    { name: "Aman Prajapati", role: "CTO, Co-Founder", description: "", x: "#", linkedin: "https://www.linkedin.com/in/aman-prajapati-675909199/", left: 26 },
    { name: "Tushar Goyal", role: "Blockchain Developer", description: "", x: "#", linkedin: "https://www.linkedin.com/in/tushar-goyal-1876b7160", left: 34 },
    { name: "Rabiya Javed", role: "Graphic Designer", description: "", x: "#", linkedin: "https://www.linkedin.com/in/rabiya-javed-378694275/", left: 41.5 },
    {
        name: "Muzammil Moosa",
        role: "CEO & Founder",
        description: "7+ years of market analysis insights from Nielsen. Experienced in e-commerce business and gaming community leadership gaming community director, previously administering regional tournament setups with global brands including Red Bull and Buffalo Wild Wings. Directing token design and network distribution.",
        x: "https://x.com/ezzstarx?s=21",
        linkedin: "https://www.linkedin.com/in/muzammil-moosa-48ba7a201/",
        left: 50,
    },
    { name: "M. Arbaaz", role: "Partnership Manager", description: "", x: "#", linkedin: "https://www.linkedin.com/in/mohammed-arbaaz-41b428182/", left: 57 },
    { name: "Ali Abdullah", role: "Community Builder", description: "", x: "#", linkedin: "https://www.linkedin.com/in/ali-abdullah-028845333/", left: 64 },
    { name: "Harsh Upadhyay", role: "Full Stack Developer", description: "", x: "#", linkedin: "https://www.linkedin.com/in/upadhyay-harsh9756/", left: 71 },
    { name: "Abdullah Khan", role: "Web Developer", description: "", x: "#", linkedin: "https://www.linkedin.com/in/abdullahkhancs01/", left: 78 },
    { name: "Misbah Iftikhar", role: "2D Concept Artist", description: "", x: "#", linkedin: "https://www.linkedin.com/in/misbah-iftikhar-20761938/", left: 85 },
    { name: "Ayush Kumar", role: "Level Designer", description: "", x: "#", linkedin: "https://www.linkedin.com/in/ayush-kumar-parganihaa-49048320b/", left: 92 },
];

export default function CoreTeam() {
    // The design's static state shows Muzammil highlighted by default
    const [active, setActive] = useState<TeamMember>(members[5]);

    return (
        <section id="team" className="relative overflow-hidden bg-[#04070d]">
            <div className="relative z-10 pt-20">
                {/* Heading — left aligned */}
                <div className="relative w-fit pb-4 mb-6 ml-6 md:ml-24">
                    <h2 className="text-3xl md:text-[44px] font-tektur font-medium text-white">
                        Core Team
                    </h2>
                    <div className="absolute bottom-0 -left-16 w-[260%] h-[1px] bg-gradient-to-r from-transparent via-[#DE3BD6] to-transparent"></div>
                </div>
            </div>

            {/* Team artwork: 13 members in front of the EZZSTAR LED wall — client will provide */}
            <div className="relative w-full aspect-[1920/1000]">
                <div className="img-placeholder absolute inset-0" data-image="core-team-led-wall" />

                {/* Invisible hover hotspots over each figure */}
                {members.map((member, idx) => (
                    <button
                        key={idx}
                        onMouseEnter={() => setActive(member)}
                        onFocus={() => setActive(member)}
                        className="absolute top-[15%] h-[65%] w-[7%] -translate-x-1/2 bg-transparent"
                        style={{ left: `${member.left}%` }}
                        aria-label={member.name}
                    />
                ))}

                {/* Member plate + bio (design shows these anchored low center-left) */}
                <div className="absolute bottom-[6%] left-0 right-0 pointer-events-none">
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
                            <p className="font-satoshi font-semibold text-white text-[14px] md:text-[16px] leading-relaxed">
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
