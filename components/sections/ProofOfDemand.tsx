// Discord community messages shown in the design
const messages = [
    {
        name: "L4MENT",
        badge: "⚡ ZZZ",
        nameColor: "#ffffff",
        highlighted: true,
        lines: ["That's sick as hell dude, I'll keep this in mind for something"],
        edited: false,
    },
    {
        name: "Gen",
        badge: "",
        nameColor: "#c9c94a",
        highlighted: false,
        lines: ["this could be something great, this has insane potential"],
        edited: false,
    },
    {
        name: "Shivind_",
        badge: "👾 OPC",
        nameColor: "#e0e0e0",
        highlighted: true,
        lines: ["That's nice man", "You are taking the step which most of the people don't even think of 👍"],
        edited: true,
    },
    {
        name: "Halt",
        badge: "⚔️ D&D",
        nameColor: "#7ec97e",
        highlighted: false,
        lines: ["cool", "ill totally post my manga on there when i finish", "looks dope"],
        edited: false,
    },
    {
        name: "L4MENT",
        badge: "⚡ ZZZ",
        nameColor: "#ffffff",
        highlighted: false,
        lines: ["DAMN DUDE", "That's nice as hell"],
        edited: false,
    },
];

export default function ProofOfDemand() {
    return (
        <section id="proof-of-demand" className="relative overflow-hidden bg-black py-10 md:py-12 lg:min-h-[126svh] lg:flex lg:flex-col lg:justify-center">
            {/* Faint colored glow on the left edge */}
            <div className="absolute top-0 left-0 w-[300px] h-[600px] bg-[#2ECC71]/5 blur-[120px] pointer-events-none" />

            <div className="page-x relative z-10">
                {/* Heading — left aligned */}
                <div className="relative w-fit pb-4 mb-6">
                    <h2 className="text-3xl md:text-[44px] font-tektur font-medium text-white">
                        Proof of Demand
                    </h2>
                    <div className="absolute bottom-0 -left-16 w-[260%] h-[1px] bg-gradient-to-r from-transparent via-[#DE3BD6] to-transparent"></div>
                </div>

                {/* From lg up the row is height-driven off the viewport so the whole
                    section stays within one screen; both columns scale to fit it. */}
                {/* min-height, not a fixed height: on short viewports a fixed row
                    could end up shorter than the chat card, which then spilled out
                    and collided with the ribbon below. */}
                <div className="flex flex-col lg:flex-row justify-between gap-14 w-full lg:min-h-[calc(126svh-275px)]">

                    {/* Left: Creator platform screenshots */}
                    <div className="w-full lg:w-[58%] flex flex-col min-h-0">
                        <h3 className="font-tektur text-xl md:text-[26px] text-white text-center mb-6">
                            We showed the vision for the creator platform.
                        </h3>
                        {/* Each shot gets half the column and is bounded on both axes,
                            so growing the section can't push them past their column. */}
                        <div className="flex justify-center gap-6 min-h-0 lg:flex-1">
                            {[1, 2].map((n) => (
                                <div key={n} className="lg:flex-1 lg:min-w-0 flex items-start justify-center">
                                    <img
                                        src={`/assets/images/proof/screenshot-${n}.png`}
                                        alt={n === 1
                                            ? "Ezzstar creator platform — manga and stories"
                                            : "Ezzstar creator platform — gists and events"}
                                        className="w-[300px] md:w-[380px] lg:w-auto lg:max-w-full h-auto lg:max-h-[calc(126svh-330px)] object-contain object-top"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Discord chat card */}
                    <div className="w-full lg:w-[40%] flex flex-col min-h-0">
                        <h3 className="font-tektur text-xl md:text-[26px] text-white text-center mb-6">
                            Community showed the love.
                        </h3>

                        {/* Scrolls internally only if the viewport is too short for the
                            full thread — keeps the section to one screen either way. */}
                        <div className="relative rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm p-4 md:p-5 lg:self-start lg:w-full">
                            <div className="flex flex-col gap-3">
                                {messages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative flex gap-3 rounded-md p-3 ${msg.highlighted
                                            ? "bg-[#2a2a20]/90 border-l-2 border-[#f0c040]"
                                            : "bg-[#141417]/90"
                                            }`}
                                    >
                                        {/* Avatar — client will provide */}
                                        <span className="img-placeholder w-10 h-10 rounded-full shrink-0" data-image={`discord-avatar-${idx + 1}`} />

                                        <div className="flex flex-col gap-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <span className="font-satoshi font-semibold text-[16px]" style={{ color: msg.nameColor }}>
                                                    {msg.name}
                                                </span>
                                                {msg.badge && (
                                                    <span className="text-[11px] font-satoshi bg-black/60 border border-white/10 rounded px-1.5 py-0.5 text-white/80">
                                                        {msg.badge}
                                                    </span>
                                                )}
                                            </div>
                                            {msg.lines.map((line, li) => (
                                                <p key={li} className="font-satoshi text-[14px] text-white/90 leading-snug">
                                                    {line}
                                                    {msg.edited && li === msg.lines.length - 1 && (
                                                        <span className="text-white/40 text-[11px] ml-1">(edited)</span>
                                                    )}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* "This is Chapter 1" ribbon — bottom right. Angled left edge, filled
                with a red→magenta→blue→cyan halftone dot field (the gradient is
                masked by a dot pattern, so the dots themselves carry the colour). */}
            <div className="relative z-20 flex justify-end mt-6">
                <div
                    className="relative pl-24 pr-10 py-1.5"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 64px 100%)" }}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(90deg, #ff0a3c 0%, #e2119c 26%, #8a1ad2 48%, #1e3fd8 70%, #00e6c6 100%)",
                            WebkitMaskImage: "radial-gradient(circle at center, #000 46%, transparent 48%)",
                            maskImage: "radial-gradient(circle at center, #000 46%, transparent 48%)",
                            WebkitMaskSize: "7px 7px",
                            maskSize: "7px 7px",
                        }}
                    />
                    <span className="relative font-tektur text-xl md:text-[26px] text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]">
                        This is Chapter 1
                    </span>
                    {/* cyan underline beneath the wordmark */}
                    <div className="absolute left-24 right-10 bottom-1 h-[2px] bg-[#7fe9ff]" />
                </div>
            </div>
        </section>
    );
}
