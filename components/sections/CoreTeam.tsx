// "use client";

// import { useState } from "react";
// import { Linkedin } from "lucide-react";

// // Custom X (Twitter) Icon (shared with Footer)
// const XIcon = ({ size = 18, className = "" }: { size?: number, className?: string }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
//         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//     </svg>
// );

// interface TeamMember {
//     name: string;
//     role: string;
//     description: string;
//     x: string;        // profile links
//     linkedin: string;
//     image: string;
//     left: number;     // horizontal centre, % of the stage
//     height: number;   // figure height, % of the stage (depth cue)
// }

// // The 12 figures stand in front of the EZZSTAR LED wall, left to right.
// // Names, roles and bios are the client's final copy, assigned in that same
// // left-to-right sequence; the artwork keeps its natural order (m01 … m12).
// const members: TeamMember[] = [
//     {
//         name: "Misbah Iftikhar",
//         role: "2D Concept Artist",
//         description: "7+ years in character concepts, visual storytelling and environment art. Supports character identity, skins, lore visuals and metaverse concept direction.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/misbah-iftikhar-20761938/",
//         image: "/assets/images/team/m01.png",
//         left: 9.5,
//         height: 52,
//     },
//     {
//         name: "Fateen Mooen",
//         role: "Unreal Developer / 3D Lead",
//         description: "5+ years in blockchain development, smart contracts and token utility architecture. Supports SKA token infrastructure, contract logic and Web3 integrations.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/fateen-catzero/",
//         image: "/assets/images/team/m02.png",
//         left: 17.5,
//         height: 57,
//     },
//     {
//         name: "Abdullah Khan",
//         role: "Frontend Developer",
//         description: "2+ years building responsive user interfaces and seamless Web3 integrations. Supports user onboarding, wallet connections and cross-platform accessibility.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/abdullahkhancs01/",
//         image: "/assets/images/team/m03.png",
//         left: 26,
//         height: 54,
//     },
//     {
//         name: "Nikhil Kandesar",
//         role: "Blockchain / Smart Contract Developer",
//         description: "5+ years in blockchain development, smart contracts and token utility architecture. Supports SKA token infrastructure, contract logic and Web3 integrations.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/nikhilkandesar/",
//         image: "/assets/images/team/m04.png",
//         left: 34,
//         height: 50,
//     },
//     {
//         name: "Rabiya Javed",
//         role: "Graphic Designer",
//         description: "3+ years creating brand visuals, campaign graphics and digital assets. Supports Ezzstar's visual identity, social content.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/rabiya-javed-378694275/",
//         image: "/assets/images/team/m05.png",
//         left: 41.5,
//         height: 53,
//     },
//     {
//         name: "Muzammil Moosa",
//         role: "Founder / CEO",
//         description: "7+ years of market analysis insights from Nielsen. Experienced in e-commerce business and gaming community leadership gaming community director, previously administering regional tournament setups with global brands including Red Bull and Buffalo Wild Wings. Directing token design and network distribution.",
//         x: "https://x.com/ezzstarx?s=21",
//         linkedin: "https://www.linkedin.com/in/muzammil-moosa-48ba7a201/",
//         image: "/assets/images/team/m06.png",
//         left: 50.5,
//         height: 60,
//     },
//     {
//         name: "Anshu Kumar",
//         role: "Mobile Application Developer",
//         description: "3+ years building mobile applications, notifications, user dashboards and app experiences. Supports the Social Media App and Game Zone OS mobile companion.",
//         x: "#",
//         // No LinkedIn supplied for this member.
//         linkedin: "",
//         image: "/assets/images/team/m07.png",
//         left: 57.5,
//         height: 49,
//     },
//     {
//         name: "Aman Prajapati",
//         role: "CTO & Co-Founder",
//         description: "7+ years of market analysis insights from Nielsen. Experienced in e-commerce business and gaming community leadership gaming community director, previously administering regional tournament setups with global brands including Red Bull and Buffalo Wild Wings. Directing token design and network distribution.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/aman-prajapati-675909199/",
//         image: "/assets/images/team/m08.png",
//         left: 64.5,
//         height: 55,
//     },
//     {
//         name: "Ali Abdullah",
//         role: "Partnership Manager",
//         description: "1+ years in outreach, relationship management and community partnerships. Supports organisers, gaming zones, creators and ecosystem collaboration opportunities.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/ali-abdullah-028845333/",
//         image: "/assets/images/team/m09.png",
//         left: 71.5,
//         height: 47,
//     },
//     {
//         name: "Anirban Nandi",
//         role: "UI/UX Designer",
//         description: "3+ years designing mobile and web experiences, prototypes and design systems. Supports clean onboarding, profile flows, dashboards and Game Zone OS management system.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/aanirban-nandi/",
//         image: "/assets/images/team/m10.png",
//         left: 78.5,
//         height: 54,
//     },
//     {
//         name: "Aritra Ray",
//         role: "Backend Developer",
//         description: "3+ years building APIs, databases, authentication systems and scalable backend services. Supports user accounts, activity tracking, rewards and platform infrastructure.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/aritraray05/",
//         image: "/assets/images/team/m11.png",
//         left: 85.5,
//         height: 51,
//     },
//     {
//         name: "Saachi Singh",
//         role: "Product Designer",
//         description: "4 years designing product screens, user journeys and interface flows. Supports UX structure across the Social Media App, Creator Website.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/saachi-singh-75323123b/",
//         image: "/assets/images/team/m12.png",
//         left: 92.5,
//         height: 53,
//     },
// ];

// // Where each member's card sits, as % of the stage. `left` is the card's left
// // edge and `bottom` its height off the floor — both hand-set per character so
// // the card lands near its own figure and never in the same spot twice. Cards
// // float above the other figures (z-index), which the design allows.
// const CARD_POS = [
//     { left: 4, bottom: 30 },   // Saachi
//     { left: 6, bottom: 12 },   // Fateen
//     { left: 12, bottom: 34 },  // Aman
//     { left: 16, bottom: 10 },  // Tushar
//     { left: 22, bottom: 30 },  // Rabiya
//     { left: 26, bottom: 8 },   // Muzammil (design's resting state)
//     { left: 34, bottom: 32 },  // Arbaaz
//     { left: 38, bottom: 12 },  // Ali
//     { left: 44, bottom: 34 },  // Harsh
//     { left: 46, bottom: 10 },  // Abdullah
//     { left: 48, bottom: 30 },  // Misbah
//     { left: 50, bottom: 13 },  // Ayush
// ];

// export default function CoreTeam() {
//     // The design's resting state highlights Muzammil (centre figure)
//     const [activeIndex, setActiveIndex] = useState(5);
//     const active = members[activeIndex];
//     const card = CARD_POS[activeIndex];

//     // Taller than one screen on purpose: the extra height below the stage is the
//     // floor the figures' reflections fall onto (hence no .screen-section here).
//     return (
//         <section id="team" className="relative overflow-hidden bg-[#04070d] lg:min-h-[118svh] lg:flex lg:flex-col">
//             {/* Title row keeps its own space; the stage fills whatever height is
//                 left, so the heading can never be cropped or covered. */}
//             <div className="relative z-20 pt-8 md:pt-10 shrink-0">
//                 {/* Heading — left aligned */}
//                 <div className="page-x relative w-fit pb-4 mb-4">
//                     <h2 className="text-3xl md:text-[44px] font-tektur font-medium text-white">
//                         Core Team
//                     </h2>
//                     <div className="absolute bottom-0 -left-16 w-[260%] h-[1px] bg-gradient-to-r from-transparent via-[#DE3BD6] to-transparent"></div>
//                 </div>
//             </div>

//             {/* Stage: EZZSTAR LED wall with the team standing in front of it.
//                 From lg up it takes the remaining section height; the figures are
//                 positioned in %, so they scale with it. */}
//             <div className="relative w-full aspect-[1920/1000] lg:aspect-auto lg:flex-1 lg:min-h-0">
//                 <img
//                     src="/assets/images/team/led-wall.png"
//                     alt=""
//                     aria-hidden
//                     className="absolute inset-0 w-full h-full object-cover"
//                 />

//                 {/* Team figures — purely decorative. The cutouts carry ~60% transparent
//                     padding, so their boxes overlap their neighbours; hit-testing is
//                     handled by the separate hotspot bands below instead.
//                     Each figure is mirrored beneath itself, faded and blurred, so it
//                     reads as a reflection on the glossy floor. */}
//                 {members.map((member, idx) => {
//                     const isActive = activeIndex === idx;
//                     return (
//                         <div
//                             key={idx}
//                             className="absolute bottom-[18%] -translate-x-1/2 pointer-events-none flex flex-col items-center"
//                             style={{ left: `${member.left}%`, height: `${member.height}%`, zIndex: isActive ? 12 : 4 }}
//                         >
//                             <img
//                                 src={member.image}
//                                 alt={member.name}
//                                 className={`h-full w-auto max-w-none object-contain object-bottom transition-all duration-300 ${isActive
//                                     ? "brightness-[1.28] drop-shadow-[0_0_28px_rgba(150,190,255,0.45)]"
//                                     : "brightness-[0.62]"
//                                     }`}
//                             />
//                             {/* contact shadow pooled where the feet meet the floor */}
//                             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[13px] bg-black/80 blur-[8px] rounded-[50%]" />
//                             {/* mirrored reflection on the glass floor */}
//                             <img
//                                 src={member.image}
//                                 alt=""
//                                 aria-hidden
//                                 className={`absolute top-full left-1/2 -translate-x-1/2 h-full w-auto max-w-none object-contain object-top -scale-y-100 blur-[1.5px] transition-opacity duration-300 ${isActive ? "opacity-55" : "opacity-30"
//                                     }`}
//                                 style={{
//                                     WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.45) 35%, transparent 70%)",
//                                     maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.45) 35%, transparent 70%)",
//                                 }}
//                             />
//                         </div>
//                     );
//                 })}

//                 {/* Hover hotspots — one contiguous, non-overlapping band per figure,
//                     each running to the midpoint between neighbours so every character
//                     gets its own reliable hover region. */}
//                 {members.map((member, idx) => {
//                     const prev = members[idx - 1];
//                     const next = members[idx + 1];
//                     const start = prev ? (prev.left + member.left) / 2 : 0;
//                     const end = next ? (member.left + next.left) / 2 : 100;
//                     return (
//                         <button
//                             key={`hit-${idx}`}
//                             onMouseEnter={() => setActiveIndex(idx)}
//                             onFocus={() => setActiveIndex(idx)}
//                             onClick={() => setActiveIndex(idx)}
//                             className="absolute bottom-[18%] top-[8%] bg-transparent focus:outline-none focus-visible:bg-white/5"
//                             style={{ left: `${start}%`, width: `${end - start}%` }}
//                             aria-label={member.name}
//                             aria-current={activeIndex === idx}
//                         />
//                     );
//                 })}

//                 {/* Member card — anchored per character (see CARD_POS) and floating
//                     above the other figures, with a connector running back to the
//                     hovered figure's feet as in the design. */}
//                 <div
//                     className="hidden lg:block absolute z-30 pointer-events-none transition-all duration-300"
//                     style={{ left: `${card.left}%`, bottom: `${card.bottom}%`, width: "46%" }}
//                 >
//                     {/* Connector: from the plate across to the active figure, ending in a ring */}
//                     <div
//                         className="absolute top-[26px] h-[2px] bg-[#a855f7]"
//                         style={{
//                             left: "16%",
//                             width: `calc(${Math.max(0, (active.left - card.left) / 46 * 100)}% - 16%)`,
//                         }}
//                     />
//                     <div
//                         className="absolute w-[14px] h-[14px] rounded-full border-2 border-[#a855f7]"
//                         style={{
//                             top: "20px",
//                             left: `calc(${Math.max(0, (active.left - card.left) / 46 * 100)}% - 7px)`,
//                         }}
//                     />

//                     <div className="relative flex items-start gap-5">
//                         {/* Name plate — magenta parallelogram with halftone dots */}
//                         <div className="relative shrink-0">
//                             <div
//                                 className="relative px-9 py-2.5 bg-gradient-to-r from-[#c026d3] to-[#7c3aed]"
//                                 style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
//                             >
//                                 <div
//                                     className="absolute inset-0 opacity-30"
//                                     style={{
//                                         backgroundImage: "radial-gradient(rgba(0,0,0,0.8) 1px, transparent 1px)",
//                                         backgroundSize: "5px 5px",
//                                         clipPath: "inherit",
//                                     }}
//                                 />
//                                 <p className="relative font-satoshi font-bold text-white text-[length:clamp(13px,1.7svh,17px)] leading-snug whitespace-nowrap">{active.name}</p>
//                                 <p className="relative font-satoshi text-white/90 text-[length:clamp(11px,1.4svh,14px)] whitespace-nowrap">{active.role}</p>
//                             </div>
//                         </div>

//                         {/* Bio + socials. The card floats over other figures, so the
//                             copy sits on a dark scrim to stay readable. */}
//                         <div className="flex-1 min-w-0 rounded-lg bg-black/60 backdrop-blur-[3px] px-4 py-3">
//                             <p className="font-satoshi font-semibold text-white text-[length:clamp(12px,1.55svh,16px)] leading-relaxed">
//                                 {active.description}
//                             </p>
//                             {/* Only render a link the member actually has */}
//                             <div className="flex justify-end gap-5 mt-2 text-white pointer-events-auto">
//                                 {active.x && active.x !== "#" && (
//                                     <a href={active.x} target="_blank" rel="noopener noreferrer" aria-label={`${active.name} on X`} className="hover:text-accent-cyan transition-colors">
//                                         <XIcon size={18} />
//                                     </a>
//                                 )}
//                                 {active.linkedin && (
//                                     <a href={active.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${active.name} on LinkedIn`} className="hover:text-accent-cyan transition-colors">
//                                         <Linkedin size={19} />
//                                     </a>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Mobile: the same card, stacked under the stage */}
//                 <div className="lg:hidden absolute bottom-[2%] left-0 right-0 z-30 px-6 pointer-events-none">
//                     <div className="relative px-6 py-2 w-fit bg-gradient-to-r from-[#c026d3] to-[#7c3aed]">
//                         <p className="font-satoshi font-bold text-white text-[15px] leading-snug">{active.name}</p>
//                         <p className="font-satoshi text-white/90 text-[13px]">{active.role}</p>
//                     </div>
//                     <p className="mt-2 font-satoshi font-semibold text-white text-[13px] leading-relaxed [text-shadow:0_2px_10px_rgba(0,0,0,0.95)]">
//                         {active.description}
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// }


//  "use client";

// import { useState } from "react";
// import { Linkedin } from "lucide-react";

// // Custom X (Twitter) Icon (shared with Footer)
// const XIcon = ({ size = 18, className = "" }: { size?: number, className?: string }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
//         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//     </svg>
// );

// interface TeamMember {
//     name: string;
//     role: string;
//     description: string;
//     x: string;        // profile links
//     linkedin: string;
//     image: string;
//     left: number;     // horizontal centre, % of the stage
//     height: number;   // figure height, % of the stage (depth cue)
// }

// const members: TeamMember[] = [
//     {
//         name: "Misbah Iftikhar",
//         role: "2D Concept Artist",
//         description: "7+ years in character concepts, visual storytelling and environment art. Supports character identity, skins, lore visuals and metaverse concept direction.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/misbah-iftikhar-20761938/",
//         image: "/assets/images/team/m01.png",
//         left: 9.5,
//         height: 52,
//     },
//     {
//         name: "Fateen Mooen",
//         role: "Unreal Developer / 3D Lead",
//         description: "5+ years in blockchain development, smart contracts and token utility architecture. Supports SKA token infrastructure, contract logic and Web3 integrations.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/fateen-catzero/",
//         image: "/assets/images/team/m02.png",
//         left: 17.5,
//         height: 57,
//     },
//     {
//         name: "Abdullah Khan",
//         role: "Frontend Developer",
//         description: "2+ years building responsive user interfaces and seamless Web3 integrations. Supports user onboarding, wallet connections and cross-platform accessibility.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/abdullahkhancs01/",
//         image: "/assets/images/team/m03.png",
//         left: 26,
//         height: 54,
//     },
//     {
//         name: "Nikhil Kandesar",
//         role: "Blockchain / Smart Contract Developer",
//         description: "5+ years in blockchain development, smart contracts and token utility architecture. Supports SKA token infrastructure, contract logic and Web3 integrations.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/nikhilkandesar/",
//         image: "/assets/images/team/m04.png",
//         left: 34,
//         height: 50,
//     },
//     {
//         name: "Rabiya Javed",
//         role: "Graphic Designer",
//         description: "3+ years creating brand visuals, campaign graphics and digital assets. Supports Ezzstar's visual identity, social content.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/rabiya-javed-378694275/",
//         image: "/assets/images/team/m05.png",
//         left: 41.5,
//         height: 53,
//     },
//     {
//         name: "Muzammil Moosa",
//         role: "Founder / CEO",
//         description: "7+ years of market analysis insights from Nielsen. Experienced in e-commerce business and gaming community leadership gaming community director, previously administering regional tournament setups with global brands including Red Bull and Buffalo Wild Wings. Directing token design and network distribution.",
//         x: "https://x.com/ezzstarx?s=21",
//         linkedin: "https://www.linkedin.com/in/muzammil-moosa-48ba7a201/",
//         image: "/assets/images/team/m06.png",
//         left: 50.5,
//         height: 60,
//     },
//     {
//         name: "Anshu Kumar",
//         role: "Mobile Application Developer",
//         description: "3+ years building mobile applications, notifications, user dashboards and app experiences. Supports the Social Media App and Game Zone OS mobile companion.",
//         x: "#",
//         linkedin: "",
//         image: "/assets/images/team/m07.png",
//         left: 57.5,
//         height: 49,
//     },
//     {
//         name: "Aman Prajapati",
//         role: "CTO & Co-Founder",
//         description: "7+ years of market analysis insights from Nielsen. Experienced in e-commerce business and gaming community leadership gaming community director, previously administering regional tournament setups with global brands including Red Bull and Buffalo Wild Wings. Directing token design and network distribution.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/aman-prajapati-675909199/",
//         image: "/assets/images/team/m08.png",
//         left: 64.5,
//         height: 55,
//     },
//     {
//         name: "Ali Abdullah",
//         role: "Partnership Manager",
//         description: "1+ years in outreach, relationship management and community partnerships. Supports organisers, gaming zones, creators and ecosystem collaboration opportunities.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/ali-abdullah-028845333/",
//         image: "/assets/images/team/m09.png",
//         left: 71.5,
//         height: 47,
//     },
//     {
//         name: "Anirban Nandi",
//         role: "UI/UX Designer",
//         description: "3+ years designing mobile and web experiences, prototypes and design systems. Supports clean onboarding, profile flows, dashboards and Game Zone OS management system.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/aanirban-nandi/",
//         image: "/assets/images/team/m10.png",
//         left: 78.5,
//         height: 54,
//     },
//     {
//         name: "Aritra Ray",
//         role: "Backend Developer",
//         description: "3+ years building APIs, databases, authentication systems and scalable backend services. Supports user accounts, activity tracking, rewards and platform infrastructure.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/aritraray05/",
//         image: "/assets/images/team/m11.png",
//         left: 85.5,
//         height: 51,
//     },
//     {
//         name: "Saachi Singh",
//         role: "Product Designer",
//         description: "4 years designing product screens, user journeys and interface flows. Supports UX structure across the Social Media App, Creator Website.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/saachi-singh-75323123b/",
//         image: "/assets/images/team/m12.png",
//         left: 92.5,
//         height: 53,
//     },
// ];

// const CARD_WIDTH = 46;
// const RING_OFFSET_PCT = 16;
// const MIN_CARD_LEFT = 2;
// const MAX_CARD_LEFT = 100 - CARD_WIDTH - 2;

// // The figures stand at bottom-[36%] inside the stage — this leaves a large
// // floor zone below their feet so a tall, near-full reflection has room to
// // render without being clipped by the stage's own box (which has
// // overflow-hidden on its parent <section>). The reflection's height is
// // sized per-member (reflectionHeightPct) so it always fits inside that
// // budget.
// // NOTE: this value must stay comfortably under (100 - <the figure's
// // bottom-[X%] offset>), i.e. under 64% when figures sit at bottom-36%.
// // If you ever change the figure's bottom-[36%] value, update this too,
// // or reflections will silently get clipped again.
// const FLOOR_BUDGET_PCT_OF_STAGE = 42;

// export default function CoreTeam() {
//     const [activeIndex, setActiveIndex] = useState(5);
//     const active = members[activeIndex];

//     const isMirror = active.left > 50;
//     const ringPct = isMirror ? 100 - RING_OFFSET_PCT : RING_OFFSET_PCT;

//     const rawCardLeft = active.left - (ringPct / 100) * CARD_WIDTH;
//     const card = {
//         left: Math.min(Math.max(rawCardLeft, MIN_CARD_LEFT), MAX_CARD_LEFT),
//         bottom: 4,
//     };

//     const targetPct = Math.max(0, Math.min(100, (active.left - card.left) / CARD_WIDTH * 100));
//     const lineLeft = Math.min(ringPct, targetPct);
//     const lineWidth = Math.abs(targetPct - ringPct);

//     return (
//         <section id="team" className="relative overflow-hidden bg-[#04070d] lg:min-h-[118svh] lg:flex lg:flex-col">
//             <div className="relative z-20 pt-8 md:pt-10 shrink-0">
//                 <div className="page-x relative w-fit pb-4 mb-4">
//                     <h2 className="text-3xl md:text-[44px] font-tektur font-medium text-white">
//                         Core Team
//                     </h2>
//                     <div className="absolute bottom-0 -left-16 w-[260%] h-[1px] bg-gradient-to-r from-transparent via-[#DE3BD6] to-transparent"></div>
//                 </div>
//             </div>

//             <div className="relative w-full aspect-[1920/1000] lg:aspect-auto lg:flex-1 lg:min-h-0">
//                 <img
//                     src="/assets/images/team/led-wall.png"
//                     alt=""
//                     aria-hidden
//                     className="absolute inset-0 w-full h-full object-cover"
//                 />

//                 {/* Team figures. Each gets a 2nd copy of itself, flipped vertically
//                     (invert) and placed directly beneath the 1st copy, opacity
//                     reduced — the floor reflection.
//                     IMPORTANT: the figures stand at bottom-[36%] *inside the stage*,
//                     so there's ~64% of the stage's own height left below their feet
//                     before the stage box ends. The reflection's height is sized
//                     per-member (reflectionHeightPct) so it always fits inside the
//                     FLOOR_BUDGET_PCT_OF_STAGE budget — otherwise it renders past the
//                     stage box and gets clipped invisible by the section's
//                     overflow-hidden. (This was the bug that made reflections look
//                     cut-off short — the figures were still at bottom-[18%] while the
//                     reflection assumed 36% of headroom underneath them.) */}
//                 {members.map((member, idx) => {
//                     const isActive = activeIndex === idx;
//                     // Convert the fixed stage-relative floor budget into a
//                     // %-of-this-member's-own-height value (since this img's
//                     // height is set relative to the wrapper, not the stage).
//                     const reflectionHeightPct = (FLOOR_BUDGET_PCT_OF_STAGE / member.height) * 100;
//                     return (
//                         <div
//                             key={idx}
//                             className="absolute bottom-[36%] -translate-x-1/2 pointer-events-none flex flex-col items-center"
//                             style={{ left: `${member.left}%`, height: `${member.height}%`, zIndex: isActive ? 12 : 4 }}
//                         >
//                             {/* 1st copy — the actual figure */}
//                             <img
//                                 src={member.image}
//                                 alt={member.name}
//                                 className={`h-full w-auto max-w-none object-contain object-bottom transition-all duration-300 ${isActive
//                                     ? "brightness-[1.28] drop-shadow-[0_0_28px_rgba(150,190,255,0.45)]"
//                                     : "brightness-[0.62]"
//                                     }`}
//                             />
//                             {/* contact shadow pooled where the feet meet the floor */}
//                             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[13px] bg-black/80 blur-[8px] rounded-[50%] z-[1]" />

//                             {/* 2nd copy — same image, flipped upside-down (invert) and
//                                 placed right under the 1st copy's feet, opacity reduced.
//                                 Height is capped (reflectionHeightPct) to stay inside
//                                 the visible floor strip below the figure.

//                                 transformOrigin: "center" flips the box in place around
//                                 its own vertical midpoint, so the box stays exactly
//                                 where `top-full` positioned it (right under the figure)
//                                 — the character's feet land right at the seam and fade
//                                 downward via the mask below, instead of the flip
//                                 swinging the whole box back up over the figure's legs
//                                 (which is what "top" as the origin used to do). */}
//                             <img
//                                 src={member.image}
//                                 alt=""
//                                 aria-hidden
//                                 className={`absolute top-full left-1/2 w-auto max-w-none object-contain object-top transition-opacity duration-300 ${isActive ? "opacity-90" : "opacity-70"
//                                     }`}
//                                 style={{
//                                     height: `${reflectionHeightPct}%`,
//                                     transform: "translateX(-50%) scaleY(-1)",
//                                     transformOrigin: "center",
//                                     filter: "brightness(1.15) contrast(1.1)",
//                                     WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 45%, rgba(0,0,0,0.5) 75%, transparent 100%)",
//                                     maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 45%, rgba(0,0,0,0.5) 75%, transparent 100%)",
//                                 }}
//                             />
//                         </div>
//                     );
//                 })}

//                 {/* Hover hotspots */}
//                 {members.map((member, idx) => {
//                     const prev = members[idx - 1];
//                     const next = members[idx + 1];
//                     const start = prev ? (prev.left + member.left) / 2 : 0;
//                     const end = next ? (member.left + next.left) / 2 : 100;
//                     return (
//                         <button
//                             key={`hit-${idx}`}
//                             onMouseEnter={() => setActiveIndex(idx)}
//                             onFocus={() => setActiveIndex(idx)}
//                             onClick={() => setActiveIndex(idx)}
//                             className="absolute bottom-0 top-[8%] bg-transparent focus:outline-none focus-visible:bg-white/5"
//                             style={{ left: `${start}%`, width: `${end - start}%` }}
//                             aria-label={member.name}
//                             aria-current={activeIndex === idx}
//                         />
//                     );
//                 })}

//                 {/* Member card */}
//                 <div
//                     className="hidden lg:block absolute z-30 pointer-events-none transition-all duration-300"
//                     style={{ left: `${card.left}%`, bottom: `${card.bottom}%`, width: `${CARD_WIDTH}%` }}
//                 >
//                     <div className={`relative flex items-start gap-5 ${isMirror ? "flex-row-reverse" : ""}`}>
//                         <div className="relative shrink-0">
//                             <div
//                                 className="relative px-9 py-2.5 bg-gradient-to-r from-[#c026d3] to-[#7c3aed]"
//                                 style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
//                             >
//                                 <div
//                                     className="absolute inset-0 opacity-30"
//                                     style={{
//                                         backgroundImage: "radial-gradient(rgba(0,0,0,0.8) 1px, transparent 1px)",
//                                         backgroundSize: "5px 5px",
//                                         clipPath: "inherit",
//                                     }}
//                                 />
//                                 <p className="relative font-satoshi font-bold text-white text-[length:clamp(13px,1.7svh,17px)] leading-snug whitespace-nowrap">{active.name}</p>
//                                 <p className="relative font-satoshi text-white/90 text-[length:clamp(11px,1.4svh,14px)] whitespace-nowrap">{active.role}</p>
//                             </div>
//                         </div>

//                         <div className="flex-1 min-w-0">
//                             <p className="font-satoshi font-semibold text-white text-[length:clamp(12px,1.55svh,16px)] leading-relaxed [text-shadow:0_2px_10px_rgba(0,0,0,0.95)]">
//                                 {active.description}
//                             </p>
//                             <div className="flex justify-end gap-5 mt-2 text-white pointer-events-auto">
//                                 {active.x && active.x !== "#" && (
//                                     <a href={active.x} target="_blank" rel="noopener noreferrer" aria-label={`${active.name} on X`} className="hover:text-accent-cyan transition-colors">
//                                         <XIcon size={18} />
//                                     </a>
//                                 )}
//                                 {active.linkedin && (
//                                     <a href={active.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${active.name} on LinkedIn`} className="hover:text-accent-cyan transition-colors">
//                                         <Linkedin size={19} />
//                                     </a>
//                                 )}
//                             </div>
//                         </div>
//                     </div>

//                     <div
//                         className="absolute top-0 h-[2px] bg-[#a855f7]"
//                         style={{
//                             left: `${lineLeft}%`,
//                             width: `${lineWidth}%`,
//                         }}
//                     />
//                     <div
//                         className="absolute w-[2px] bg-[#a855f7]"
//                         style={{
//                             top: "-48px",
//                             height: "48px",
//                             left: `calc(${targetPct}% - 1px)`,
//                         }}
//                     />
//                     <div
//                         className="absolute w-[14px] h-[14px] rounded-full border-2 border-[#a855f7]"
//                         style={{
//                             top: "-55px",
//                             left: `calc(${targetPct}% - 7px)`,
//                         }}
//                     />
//                 </div>

//                 {/* Mobile card */}
//                 <div className="lg:hidden absolute bottom-[2%] left-0 right-0 z-30 px-6 pointer-events-none">
//                     <div className="relative px-6 py-2 w-fit bg-gradient-to-r from-[#c026d3] to-[#7c3aed]">
//                         <p className="font-satoshi font-bold text-white text-[15px] leading-snug">{active.name}</p>
//                         <p className="font-satoshi text-white/90 text-[13px]">{active.role}</p>
//                     </div>
//                     <p className="mt-2 font-satoshi font-semibold text-white text-[13px] leading-relaxed [text-shadow:0_2px_10px_rgba(0,0,0,0.95)]">
//                         {active.description}
//                     </p>
//                     <div className="flex gap-5 mt-2 text-white pointer-events-auto">
//                         {active.x && active.x !== "#" && (
//                             <a href={active.x} target="_blank" rel="noopener noreferrer" aria-label={`${active.name} on X`} className="hover:text-accent-cyan transition-colors">
//                                 <XIcon size={18} />
//                             </a>
//                         )}
//                         {active.linkedin && (
//                             <a href={active.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${active.name} on LinkedIn`} className="hover:text-accent-cyan transition-colors">
//                                 <Linkedin size={19} />
//                             </a>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }




// "use client";

// import { useState } from "react";
// import { Linkedin } from "lucide-react";

// // Custom X (Twitter) Icon (shared with Footer)
// const XIcon = ({ size = 18, className = "" }: { size?: number, className?: string }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
//         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//     </svg>
// );

// interface TeamMember {
//     name: string;
//     role: string;
//     description: string;
//     x: string;        // profile links
//     linkedin: string;
//     image: string;
//     left: number;     // horizontal centre, % of the stage
//     height: number;   // figure height, % of the stage (depth cue)
// }

// // The 12 figures stand in front of the EZZSTAR LED wall, left to right.
// // Names, roles and bios are the client's final copy, assigned in that same
// // left-to-right sequence; the artwork keeps its natural order (m01 … m12).
// const members: TeamMember[] = [
//     {
//         name: "Misbah Iftikhar",
//         role: "2D Concept Artist",
//         description: "7+ years in character concepts, visual storytelling and environment art. Supports character identity, skins, lore visuals and metaverse concept direction.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/misbah-iftikhar-20761938/",
//         image: "/assets/images/team/m01.png",
//         left: 9.5,
//         height: 52,
//     },
//     {
//         name: "Fateen Mooen",
//         role: "Unreal Developer / 3D Lead",
//         description: "5+ years in blockchain development, smart contracts and token utility architecture. Supports SKA token infrastructure, contract logic and Web3 integrations.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/fateen-catzero/",
//         image: "/assets/images/team/m02.png",
//         left: 17.5,
//         height: 57,
//     },
//     {
//         name: "Abdullah Khan",
//         role: "Frontend Developer",
//         description: "2+ years building responsive user interfaces and seamless Web3 integrations. Supports user onboarding, wallet connections and cross-platform accessibility.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/abdullahkhancs01/",
//         image: "/assets/images/team/m03.png",
//         left: 26,
//         height: 54,
//     },
//     {
//         name: "Nikhil Kandesar",
//         role: "Blockchain / Smart Contract Developer",
//         description: "5+ years in blockchain development, smart contracts and token utility architecture. Supports SKA token infrastructure, contract logic and Web3 integrations.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/nikhilkandesar/",
//         image: "/assets/images/team/m04.png",
//         left: 34,
//         height: 50,
//     },
//     {
//         name: "Rabiya Javed",
//         role: "Graphic Designer",
//         description: "3+ years creating brand visuals, campaign graphics and digital assets. Supports Ezzstar's visual identity, social content.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/rabiya-javed-378694275/",
//         image: "/assets/images/team/m05.png",
//         left: 41.5,
//         height: 53,
//     },
//     {
//         name: "Muzammil Moosa",
//         role: "Founder / CEO",
//         description: "7+ years of market analysis insights from Nielsen. Experienced in e-commerce business and gaming community leadership gaming community director, previously administering regional tournament setups with global brands including Red Bull and Buffalo Wild Wings. Directing token design and network distribution.",
//         x: "https://x.com/ezzstarx?s=21",
//         linkedin: "https://www.linkedin.com/in/muzammil-moosa-48ba7a201/",
//         image: "/assets/images/team/m06.png",
//         left: 50.5,
//         height: 60,
//     },
//     {
//         name: "Anshu Kumar",
//         role: "Mobile Application Developer",
//         description: "3+ years building mobile applications, notifications, user dashboards and app experiences. Supports the Social Media App and Game Zone OS mobile companion.",
//         x: "#",
//         // No LinkedIn supplied for this member.
//         linkedin: "",
//         image: "/assets/images/team/m07.png",
//         left: 57.5,
//         height: 49,
//     },
//     {
//         name: "Aman Prajapati",
//         role: "CTO & Co-Founder",
//         description: "7+ years of market analysis insights from Nielsen. Experienced in e-commerce business and gaming community leadership gaming community director, previously administering regional tournament setups with global brands including Red Bull and Buffalo Wild Wings. Directing token design and network distribution.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/aman-prajapati-675909199/",
//         image: "/assets/images/team/m08.png",
//         left: 64.5,
//         height: 55,
//     },
//     {
//         name: "Ali Abdullah",
//         role: "Partnership Manager",
//         description: "1+ years in outreach, relationship management and community partnerships. Supports organisers, gaming zones, creators and ecosystem collaboration opportunities.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/ali-abdullah-028845333/",
//         image: "/assets/images/team/m09.png",
//         left: 71.5,
//         height: 47,
//     },
//     {
//         name: "Anirban Nandi",
//         role: "UI/UX Designer",
//         description: "3+ years designing mobile and web experiences, prototypes and design systems. Supports clean onboarding, profile flows, dashboards and Game Zone OS management system.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/aanirban-nandi/",
//         image: "/assets/images/team/m10.png",
//         left: 78.5,
//         height: 54,
//     },
//     {
//         name: "Aritra Ray",
//         role: "Backend Developer",
//         description: "3+ years building APIs, databases, authentication systems and scalable backend services. Supports user accounts, activity tracking, rewards and platform infrastructure.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/aritraray05/",
//         image: "/assets/images/team/m11.png",
//         left: 85.5,
//         height: 51,
//     },
//     {
//         name: "Saachi Singh",
//         role: "Product Designer",
//         description: "4 years designing product screens, user journeys and interface flows. Supports UX structure across the Social Media App, Creator Website.",
//         x: "#",
//         linkedin: "https://www.linkedin.com/in/saachi-singh-75323123b/",
//         image: "/assets/images/team/m12.png",
//         left: 92.5,
//         height: 53,
//     },
// ];

// // Where each member's card sits, as % of the stage. `left` is the card's left
// // edge and `bottom` its height off the floor — both hand-set per character so
// // the card lands near its own figure and never in the same spot twice. Cards
// // float above the other figures (z-index), which the design allows.
// const CARD_POS = [
//     { left: 4, bottom: 30 },   // Saachi
//     { left: 6, bottom: 12 },   // Fateen
//     { left: 12, bottom: 34 },  // Aman
//     { left: 16, bottom: 10 },  // Tushar
//     { left: 22, bottom: 30 },  // Rabiya
//     { left: 26, bottom: 8 },   // Muzammil (design's resting state)
//     { left: 34, bottom: 32 },  // Arbaaz
//     { left: 38, bottom: 12 },  // Ali
//     { left: 44, bottom: 34 },  // Harsh
//     { left: 46, bottom: 10 },  // Abdullah
//     { left: 48, bottom: 30 },  // Misbah
//     { left: 50, bottom: 13 },  // Ayush
// ];

// export default function CoreTeam() {
//     // The design's resting state highlights Muzammil (centre figure)
//     const [activeIndex, setActiveIndex] = useState(5);
//     const active = members[activeIndex];
//     const card = CARD_POS[activeIndex];

//     // Taller than one screen on purpose: the extra height below the stage is the
//     // floor the figures' reflections fall onto (hence no .screen-section here).
//     return (
//         <section id="team" className="relative overflow-hidden bg-[#04070d] lg:min-h-[118svh] lg:flex lg:flex-col">
//             {/* Title row keeps its own space; the stage fills whatever height is
//                 left, so the heading can never be cropped or covered. */}
//             <div className="relative z-20 pt-8 md:pt-10 shrink-0">
//                 {/* Heading — left aligned */}
//                 <div className="page-x relative w-fit pb-4 mb-4">
//                     <h2 className="text-3xl md:text-[44px] font-tektur font-medium text-white">
//                         Core Team
//                     </h2>
//                     <div className="absolute bottom-0 -left-16 w-[260%] h-[1px] bg-gradient-to-r from-transparent via-[#DE3BD6] to-transparent"></div>
//                 </div>
//             </div>

//             {/* Stage: EZZSTAR LED wall with the team standing in front of it.
//                 From lg up it takes the remaining section height; the figures are
//                 positioned in %, so they scale with it. */}
//             <div className="relative w-full aspect-[1920/1000] lg:aspect-auto lg:flex-1 lg:min-h-0">
//                 <img
//                     src="/assets/images/team/led-wall.png"
//                     alt=""
//                     aria-hidden
//                     className="absolute inset-0 w-full h-full object-cover"
//                 />

//                 {/* Team figures — purely decorative. The cutouts carry ~60% transparent
//                     padding, so their boxes overlap their neighbours; hit-testing is
//                     handled by the separate hotspot bands below instead.
//                     Each figure is mirrored beneath itself, faded and blurred, so it
//                     reads as a reflection on the glossy floor. */}
//                 {members.map((member, idx) => {
//                     const isActive = activeIndex === idx;
//                     return (
//                         <div
//                             key={idx}
//                             className="absolute bottom-[18%] -translate-x-1/2 pointer-events-none flex flex-col items-center"
//                             style={{ left: `${member.left}%`, height: `${member.height}%`, zIndex: isActive ? 12 : 4 }}
//                         >
//                             <img
//                                 src={member.image}
//                                 alt={member.name}
//                                 className={`h-full w-auto max-w-none object-contain object-bottom transition-all duration-300 ${isActive
//                                     ? "brightness-[1.28] drop-shadow-[0_0_28px_rgba(150,190,255,0.45)]"
//                                     : "brightness-[0.62]"
//                                     }`}
//                             />
//                             {/* contact shadow pooled where the feet meet the floor */}
//                             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[13px] bg-black/80 blur-[8px] rounded-[50%]" />
//                             {/* mirrored reflection on the glass floor */}
//                             <img
//                                 src={member.image}
//                                 alt=""
//                                 aria-hidden
//                                 className={`absolute top-full left-1/2 -translate-x-1/2 h-full w-auto max-w-none object-contain object-top -scale-y-100 blur-[1.5px] transition-opacity duration-300 ${isActive ? "opacity-55" : "opacity-30"
//                                     }`}
//                                 style={{
//                                     WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.45) 35%, transparent 70%)",
//                                     maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.45) 35%, transparent 70%)",
//                                 }}
//                             />
//                         </div>
//                     );
//                 })}

//                 {/* Hover hotspots — one contiguous, non-overlapping band per figure,
//                     each running to the midpoint between neighbours so every character
//                     gets its own reliable hover region. */}
//                 {members.map((member, idx) => {
//                     const prev = members[idx - 1];
//                     const next = members[idx + 1];
//                     const start = prev ? (prev.left + member.left) / 2 : 0;
//                     const end = next ? (member.left + next.left) / 2 : 100;
//                     return (
//                         <button
//                             key={`hit-${idx}`}
//                             onMouseEnter={() => setActiveIndex(idx)}
//                             onFocus={() => setActiveIndex(idx)}
//                             onClick={() => setActiveIndex(idx)}
//                             className="absolute bottom-[18%] top-[8%] bg-transparent focus:outline-none focus-visible:bg-white/5"
//                             style={{ left: `${start}%`, width: `${end - start}%` }}
//                             aria-label={member.name}
//                             aria-current={activeIndex === idx}
//                         />
//                     );
//                 })}

//                 {/* Member card — anchored per character (see CARD_POS) and floating
//                     above the other figures, with a connector running back to the
//                     hovered figure's feet as in the design. */}
//                 <div
//                     className="hidden lg:block absolute z-30 pointer-events-none transition-all duration-300"
//                     style={{ left: `${card.left}%`, bottom: `${card.bottom}%`, width: "46%" }}
//                 >
//                     {/* Connector: from the plate across to the active figure, ending in a ring */}
//                     <div
//                         className="absolute top-[26px] h-[2px] bg-[#a855f7]"
//                         style={{
//                             left: "16%",
//                             width: `calc(${Math.max(0, (active.left - card.left) / 46 * 100)}% - 16%)`,
//                         }}
//                     />
//                     <div
//                         className="absolute w-[14px] h-[14px] rounded-full border-2 border-[#a855f7]"
//                         style={{
//                             top: "20px",
//                             left: `calc(${Math.max(0, (active.left - card.left) / 46 * 100)}% - 7px)`,
//                         }}
//                     />

//                     <div className="relative flex items-start gap-5">
//                         {/* Name plate — magenta parallelogram with halftone dots */}
//                         <div className="relative shrink-0">
//                             <div
//                                 className="relative px-9 py-2.5 bg-gradient-to-r from-[#c026d3] to-[#7c3aed]"
//                                 style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
//                             >
//                                 <div
//                                     className="absolute inset-0 opacity-30"
//                                     style={{
//                                         backgroundImage: "radial-gradient(rgba(0,0,0,0.8) 1px, transparent 1px)",
//                                         backgroundSize: "5px 5px",
//                                         clipPath: "inherit",
//                                     }}
//                                 />
//                                 <p className="relative font-satoshi font-bold text-white text-[length:clamp(13px,1.7svh,17px)] leading-snug whitespace-nowrap">{active.name}</p>
//                                 <p className="relative font-satoshi text-white/90 text-[length:clamp(11px,1.4svh,14px)] whitespace-nowrap">{active.role}</p>
//                             </div>
//                         </div>

//                         {/* Bio + socials. The card floats over other figures, so the
//                             copy sits on a dark scrim to stay readable. */}
//                         <div className="flex-1 min-w-0 rounded-lg bg-black/60 backdrop-blur-[3px] px-4 py-3">
//                             <p className="font-satoshi font-semibold text-white text-[length:clamp(12px,1.55svh,16px)] leading-relaxed">
//                                 {active.description}
//                             </p>
//                             {/* Only render a link the member actually has */}
//                             <div className="flex justify-end gap-5 mt-2 text-white pointer-events-auto">
//                                 {active.x && active.x !== "#" && (
//                                     <a href={active.x} target="_blank" rel="noopener noreferrer" aria-label={`${active.name} on X`} className="hover:text-accent-cyan transition-colors">
//                                         <XIcon size={18} />
//                                     </a>
//                                 )}
//                                 {active.linkedin && (
//                                     <a href={active.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${active.name} on LinkedIn`} className="hover:text-accent-cyan transition-colors">
//                                         <Linkedin size={19} />
//                                     </a>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Mobile: the same card, stacked under the stage */}
//                 <div className="lg:hidden absolute bottom-[2%] left-0 right-0 z-30 px-6 pointer-events-none">
//                     <div className="relative px-6 py-2 w-fit bg-gradient-to-r from-[#c026d3] to-[#7c3aed]">
//                         <p className="font-satoshi font-bold text-white text-[15px] leading-snug">{active.name}</p>
//                         <p className="font-satoshi text-white/90 text-[13px]">{active.role}</p>
//                     </div>
//                     <p className="mt-2 font-satoshi font-semibold text-white text-[13px] leading-relaxed [text-shadow:0_2px_10px_rgba(0,0,0,0.95)]">
//                         {active.description}
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// }


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

const members: TeamMember[] = [
    {
        name: "Misbah Iftikhar",
        role: "2D Concept Artist",
        description: "7+ years in character concepts, visual storytelling and environment art. Supports character identity, skins, lore visuals and metaverse concept direction.",
        x: "#",
        linkedin: "https://www.linkedin.com/in/misbah-iftikhar-20761938/",
        image: "/assets/images/team/m01.png",
        left: 9.5,
        height: 52,
    },
    {
        name: "Fateen Mooen",
        role: "Unreal Developer / 3D Lead",
        description: "5+ years in blockchain development, smart contracts and token utility architecture. Supports SKA token infrastructure, contract logic and Web3 integrations.",
        x: "#",
        linkedin: "https://www.linkedin.com/in/fateen-catzero/",
        image: "/assets/images/team/m02.png",
        left: 17.5,
        height: 57,
    },
    {
        name: "Abdullah Khan",
        role: "Frontend Developer",
        description: "2+ years building responsive user interfaces and seamless Web3 integrations. Supports user onboarding, wallet connections and cross-platform accessibility.",
        x: "#",
        linkedin: "https://www.linkedin.com/in/abdullahkhancs01/",
        image: "/assets/images/team/m03.png",
        left: 26,
        height: 54,
    },
    {
        name: "Nikhil Kandesar",
        role: "Blockchain / Smart Contract Developer",
        description: "5+ years in blockchain development, smart contracts and token utility architecture. Supports SKA token infrastructure, contract logic and Web3 integrations.",
        x: "#",
        linkedin: "https://www.linkedin.com/in/nikhilkandesar/",
        image: "/assets/images/team/m04.png",
        left: 34,
        height: 50,
    },
    {
        name: "Rabiya Javed",
        role: "Graphic Designer",
        description: "3+ years creating brand visuals, campaign graphics and digital assets. Supports Ezzstar's visual identity, social content.",
        x: "#",
        linkedin: "https://www.linkedin.com/in/rabiya-javed-378694275/",
        image: "/assets/images/team/m05.png",
        left: 41.5,
        height: 53,
    },
    {
        name: "Muzammil Moosa",
        role: "Founder / CEO",
        description: "7+ years of market analysis insights from Nielsen. Experienced in e-commerce business and gaming community leadership gaming community director, previously administering regional tournament setups with global brands including Red Bull and Buffalo Wild Wings. Directing token design and network distribution.",
        x: "https://x.com/ezzstarx?s=21",
        linkedin: "https://www.linkedin.com/in/muzammil-moosa-48ba7a201/",
        image: "/assets/images/team/m06.png",
        left: 50.5,
        height: 60,
    },
    {
        name: "Anshu Kumar",
        role: "Mobile Application Developer",
        description: "3+ years building mobile applications, notifications, user dashboards and app experiences. Supports the Social Media App and Game Zone OS mobile companion.",
        x: "#",
        linkedin: "",
        image: "/assets/images/team/m07.png",
        left: 57.5,
        height: 49,
    },
    {
        name: "Aman Prajapati",
        role: "CTO & Co-Founder",
        description: "7+ years of market analysis insights from Nielsen. Experienced in e-commerce business and gaming community leadership gaming community director, previously administering regional tournament setups with global brands including Red Bull and Buffalo Wild Wings. Directing token design and network distribution.",
        x: "#",
        linkedin: "https://www.linkedin.com/in/aman-prajapati-675909199/",
        image: "/assets/images/team/m08.png",
        left: 64.5,
        height: 55,
    },
    {
        name: "Ali Abdullah",
        role: "Partnership Manager",
        description: "1+ years in outreach, relationship management and community partnerships. Supports organisers, gaming zones, creators and ecosystem collaboration opportunities.",
        x: "#",
        linkedin: "https://www.linkedin.com/in/ali-abdullah-028845333/",
        image: "/assets/images/team/m09.png",
        left: 71.5,
        height: 47,
    },
    {
        name: "Anirban Nandi",
        role: "UI/UX Designer",
        description: "3+ years designing mobile and web experiences, prototypes and design systems. Supports clean onboarding, profile flows, dashboards and Game Zone OS management system.",
        x: "#",
        linkedin: "https://www.linkedin.com/in/aanirban-nandi/",
        image: "/assets/images/team/m10.png",
        left: 78.5,
        height: 54,
    },
    {
        name: "Aritra Ray",
        role: "Backend Developer",
        description: "3+ years building APIs, databases, authentication systems and scalable backend services. Supports user accounts, activity tracking, rewards and platform infrastructure.",
        x: "#",
        linkedin: "https://www.linkedin.com/in/aritraray05/",
        image: "/assets/images/team/m11.png",
        left: 85.5,
        height: 51,
    },
    {
        name: "Saachi Singh",
        role: "Product Designer",
        description: "4 years designing product screens, user journeys and interface flows. Supports UX structure across the Social Media App, Creator Website.",
        x: "#",
        linkedin: "https://www.linkedin.com/in/saachi-singh-75323123b/",
        image: "/assets/images/team/m12.png",
        left: 92.5,
        height: 53,
    },
];

const CARD_WIDTH = 46;
const RING_OFFSET_PCT = 16;
const MIN_CARD_LEFT = 2;
const MAX_CARD_LEFT = 100 - CARD_WIDTH - 2;

// The figures stand at bottom-[36%] inside the stage — this leaves a large
// floor zone below their feet so a tall, near-full reflection has room to
// render without being clipped by the stage's own box (which has
// overflow-hidden on its parent <section>). The reflection's height is
// sized per-member (reflectionHeightPct) so it always fits inside that
// budget.
// NOTE: this value must stay comfortably under (100 - <the figure's
// bottom-[X%] offset>), i.e. under 64% when figures sit at bottom-36%.
// If you ever change the figure's bottom-[36%] value, update this too,
// or reflections will silently get clipped again.
const FLOOR_BUDGET_PCT_OF_STAGE = 42;

export default function CoreTeam() {
    const [activeIndex, setActiveIndex] = useState(5);
    const active = members[activeIndex];

    const isMirror = active.left > 50;
    const ringPct = isMirror ? 100 - RING_OFFSET_PCT : RING_OFFSET_PCT;

    const rawCardLeft = active.left - (ringPct / 100) * CARD_WIDTH;
    const card = {
        left: Math.min(Math.max(rawCardLeft, MIN_CARD_LEFT), MAX_CARD_LEFT),
        bottom: 23,
    };

    const targetPct = Math.max(0, Math.min(100, (active.left - card.left) / CARD_WIDTH * 100));
    const lineLeft = Math.min(ringPct, targetPct);
    const lineWidth = Math.abs(targetPct - ringPct);

    return (
        <section id="team" className="relative overflow-hidden bg-[#04070d] lg:min-h-[118svh] lg:flex lg:flex-col">
            <div className="relative z-20 pt-8 md:pt-10 shrink-0">
                <div className="page-x relative w-fit pb-4 mb-4">
                    <h2 className="text-3xl md:text-[44px] font-tektur font-medium text-white">
                        Core Team
                    </h2>
                    <div className="absolute bottom-0 -left-16 w-[260%] h-[1px] bg-gradient-to-r from-transparent via-[#DE3BD6] to-transparent"></div>
                </div>
            </div>

            <div className="relative w-full aspect-[1920/1000] lg:aspect-auto lg:flex-1 lg:min-h-0">
                <img
                    src="/assets/images/team/led-wall.png"
                    alt=""
                    aria-hidden
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Team figures. Each gets a 2nd copy of itself, flipped vertically
                    (invert) and placed directly beneath the 1st copy, opacity
                    reduced — the floor reflection.
                    IMPORTANT: the figures stand at bottom-[36%] *inside the stage*,
                    so there's ~64% of the stage's own height left below their feet
                    before the stage box ends. The reflection's height is sized
                    per-member (reflectionHeightPct) so it always fits inside the
                    FLOOR_BUDGET_PCT_OF_STAGE budget — otherwise it renders past the
                    stage box and gets clipped invisible by the section's
                    overflow-hidden. (This was the bug that made reflections look
                    cut-off short — the figures were still at bottom-[18%] while the
                    reflection assumed 36% of headroom underneath them.) */}
                {members.map((member, idx) => {
                    const isActive = activeIndex === idx;
                    // Convert the fixed stage-relative floor budget into a
                    // %-of-this-member's-own-height value (since this img's
                    // height is set relative to the wrapper, not the stage).
                    const reflectionHeightPct = (FLOOR_BUDGET_PCT_OF_STAGE / member.height) * 100;
                    return (
                        <div
                            key={idx}
                            className="absolute bottom-[36%] -translate-x-1/2 pointer-events-none flex flex-col items-center"
                            style={{ left: `${member.left}%`, height: `${member.height}%`, zIndex: isActive ? 12 : 4 }}
                        >
                            {/* 1st copy — the actual figure */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className={`h-full w-auto max-w-none object-contain object-bottom transition-all duration-300 ${isActive
                                    ? "brightness-[1.28] drop-shadow-[0_0_28px_rgba(150,190,255,0.45)]"
                                    : "brightness-[0.62]"
                                    }`}
                            />
                            {/* contact shadow pooled where the feet meet the floor */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[13px] bg-black/80 blur-[8px] rounded-[50%] z-[1]" />

                            {/* 2nd copy — same image, flipped upside-down (invert) and
                                placed right under the 1st copy's feet, opacity reduced.
                                Height is capped (reflectionHeightPct) to stay inside
                                the visible floor strip below the figure.

                                transformOrigin: "center" flips the box in place around
                                its own vertical midpoint, so the box stays exactly
                                where `top-full` positioned it (right under the figure)
                                — the character's feet land right at the seam and fade
                                downward via the mask below, instead of the flip
                                swinging the whole box back up over the figure's legs
                                (which is what "top" as the origin used to do). */}
                            <img
                                src={member.image}
                                alt=""
                                aria-hidden
                                className={`absolute top-full left-1/2 w-auto max-w-none object-contain object-top transition-opacity duration-300 ${isActive ? "opacity-90" : "opacity-70"
                                    }`}
                                style={{
                                    height: `${reflectionHeightPct}%`,
                                    transform: "translateX(-50%) scaleY(-1)",
                                    transformOrigin: "center",
                                    filter: "brightness(1.15) contrast(1.1)",
                                    WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.3) 50%, transparent 80%)",
                                    maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.3) 50%, transparent 80%)",
                                }}
                            />
                        </div>
                    );
                })}

                {/* Hover hotspots */}
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
                            className="absolute bottom-0 top-[8%] bg-transparent focus:outline-none focus-visible:bg-white/5"
                            style={{ left: `${start}%`, width: `${end - start}%` }}
                            aria-label={member.name}
                            aria-current={activeIndex === idx}
                        />
                    );
                })}

                {/* Member card */}
                <div
                    className="hidden lg:block absolute z-30 pointer-events-none transition-all duration-300"
                    style={{ left: `${card.left}%`, bottom: `${card.bottom}%`, width: `${CARD_WIDTH}%` }}
                >
                    <div className={`relative flex items-start gap-5 ${isMirror ? "flex-row-reverse" : ""}`}>
                        <div className="relative shrink-0">
                            <div
                                className="relative px-9 py-2.5 bg-gradient-to-r from-[#c026d3] to-[#7c3aed]"
                                style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
                            >
                                <div
                                    className="absolute inset-0 opacity-30"
                                    style={{
                                        backgroundImage: "radial-gradient(rgba(0,0,0,0.8) 1px, transparent 1px)",
                                        backgroundSize: "5px 5px",
                                        clipPath: "inherit",
                                    }}
                                />
                                <p className="relative font-satoshi font-bold text-white text-[length:clamp(13px,1.7svh,17px)] leading-snug whitespace-nowrap">{active.name}</p>
                                <p className="relative font-satoshi text-white/90 text-[length:clamp(11px,1.4svh,14px)] whitespace-nowrap">{active.role}</p>
                            </div>
                        </div>

                        <div className="flex-1 min-w-0">
                            <p className="font-satoshi font-semibold text-white text-[length:clamp(12px,1.55svh,16px)] leading-relaxed [text-shadow:0_2px_10px_rgba(0,0,0,0.95)]">
                                {active.description}
                            </p>
                            <div className="flex justify-end gap-5 mt-2 text-white pointer-events-auto">
                                {active.x && active.x !== "#" && (
                                    <a href={active.x} target="_blank" rel="noopener noreferrer" aria-label={`${active.name} on X`} className="hover:text-accent-cyan transition-colors">
                                        <XIcon size={18} />
                                    </a>
                                )}
                                {active.linkedin && (
                                    <a href={active.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${active.name} on LinkedIn`} className="hover:text-accent-cyan transition-colors">
                                        <Linkedin size={19} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    <div
                        className="absolute top-0 h-[2px] bg-[#a855f7]"
                        style={{
                            left: `${lineLeft}%`,
                            width: `${lineWidth}%`,
                        }}
                    />
                    <div
                        className="absolute w-[2px] bg-[#a855f7]"
                        style={{
                            top: "-48px",
                            height: "48px",
                            left: `calc(${targetPct}% - 1px)`,
                        }}
                    />
                    <div
                        className="absolute w-[14px] h-[14px] rounded-full border-2 border-[#a855f7]"
                        style={{
                            top: "-55px",
                            left: `calc(${targetPct}% - 7px)`,
                        }}
                    />
                </div>

                {/* Mobile card */}
                <div className="lg:hidden absolute bottom-[2%] left-0 right-0 z-30 px-6 pointer-events-none">
                    <div className="relative px-6 py-2 w-fit bg-gradient-to-r from-[#c026d3] to-[#7c3aed]">
                        <p className="font-satoshi font-bold text-white text-[15px] leading-snug">{active.name}</p>
                        <p className="font-satoshi text-white/90 text-[13px]">{active.role}</p>
                    </div>
                    <p className="mt-2 font-satoshi font-semibold text-white text-[13px] leading-relaxed [text-shadow:0_2px_10px_rgba(0,0,0,0.95)]">
                        {active.description}
                    </p>
                    <div className="flex gap-5 mt-2 text-white pointer-events-auto">
                        {active.x && active.x !== "#" && (
                            <a href={active.x} target="_blank" rel="noopener noreferrer" aria-label={`${active.name} on X`} className="hover:text-accent-cyan transition-colors">
                                <XIcon size={18} />
                            </a>
                        )}
                        {active.linkedin && (
                            <a href={active.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${active.name} on LinkedIn`} className="hover:text-accent-cyan transition-colors">
                                <Linkedin size={19} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}