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
];

// The client supplied four messages as finished screenshots (avatar, name,
// badge and body already composed), so they render as images rather than being
// rebuilt in markup — that keeps their real avatars and emoji exactly as sent.
const messageShots = [
    { src: "/assets/images/proof/msg1.png", alt: "L4MENT: DAMN DUDE — That's nice as hell" },
    { src: "/assets/images/proof/msg2.png", alt: "Wisteria posted an ABSOLUTE CINEMA reaction image" },
    { src: "/assets/images/proof/msg3.png", alt: "Tobi Tobster The Toaster: its really good!" },
    { src: "/assets/images/proof/msg4.png", alt: "Zanta: looks cool" },
];

export default function ProofOfDemand() {
    return (
        <section id="proof-of-demand" className="relative overflow-hidden bg-black py-10 md:py-12">
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

                {/* POSITIONING CHANGE: both groups now share the same fixed height
                    (lg:h-[560px] below, on both the screenshot row and the chat
                    card) and items-start, so the two headings sit on the same
                    line and the two columns line up top AND bottom — instead of
                    the old viewport-based min-height which could drift out of
                    sync depending on screen size. */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 lg:gap-16 w-full">

                    {/* Left: Creator platform screenshots */}
                    <div className="w-full lg:w-[62%] min-w-0 flex flex-col">
                        <h3 className="font-tektur text-xl md:text-[26px] text-white text-center mb-6">
                            We showed the vision for the creator platform.
                        </h3>
                        {/* POSITIONING CHANGE: items-stretch + shared lg:h-[560px]
                            instead of items-start + lg:flex-1, so both screenshots
                            fill the exact same height as the chat card next to them. */}
<<<<<<< HEAD
                        <div className="flex items-stretch justify-center gap-2 lg:h-[600px]">
=======
                        <div className="flex items-stretch justify-center gap-2 lg:h-[560px]">
>>>>>>> e8f2aeec79285dbc2ce5b8618636df456c3b014d
                            {[1, 2].map((n) => (
                                <div key={n} className="flex-1 min-w-0 flex items-center justify-center">
                                    <img
                                        src={`/assets/images/proof/screenshot-${n}.png`}
                                        alt={n === 1
                                            ? "Ezzstar creator platform — manga and stories"
                                            : "Ezzstar creator platform — gists and events"}
<<<<<<< HEAD
                                        className="w-full h-full max-w-full object-cover object-top border-white/10"
=======
                                        className="w-full h-full max-w-full object-contain object-top rounded-lg border border-white/10"
>>>>>>> e8f2aeec79285dbc2ce5b8618636df456c3b014d
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Discord chat card */}
                    <div className="w-full lg:w-[36%] min-w-0 flex flex-col">
                        <h3 className="font-tektur text-xl md:text-[26px] text-white text-center mb-6">
                            Community showed the love.
                        </h3>

                        {/* POSITIONING CHANGE: lg:h-[560px] to match the screenshot
                            column's height exactly (was calc(126svh-360px)). */}
                        <div className="chat-marquee relative rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm p-5 md:p-6 lg:h-[560px] overflow-hidden">
                            {/* POSITIONING CHANGE: gap-3 -> gap-4 for slightly more
                                breathing room between message boxes. */}
                            <div className="chat-track flex flex-col gap-5">
                                {[0, 1].map((copy) => (
                                    <div key={copy} className="contents">
                                        {messages.map((msg, idx) => (
                                            <div
                                                key={`t${copy}-${idx}`}
                                                className={`relative flex gap-3 rounded-md p-4 shrink-0 ${msg.highlighted
                                                    ? "bg-[#2a2a20]/90 border-l-2 border-[#f0c040]"
                                                    : "bg-[#141417]/90"
                                                    }`}
                                            >
                                                {/* Avatar — client will provide (untouched) */}
                                                <span className="img-placeholder w-10 h-10 rounded-full shrink-0" data-image={`discord-avatar-${idx + 1}`} />

                                                <div className="flex flex-col gap-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-satoshi font-semibold text-[16px] truncate" style={{ color: msg.nameColor }}>
                                                            {msg.name}
                                                        </span>
                                                        {msg.badge && (
                                                            <span className="text-[11px] font-satoshi bg-black/60 border border-white/10 rounded px-1.5 py-0.5 text-white/80 shrink-0">
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
                                        {/* The client's screenshot messages, used as-is (untouched) */}
                                        {messageShots.map((shot, idx) => (
                                            <img
                                                key={`s${copy}-${idx}`}
                                                src={shot.src}
                                                alt={shot.alt}
                                                className="w-full h-auto rounded-md shrink-0"
                                            />
                                        ))}
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