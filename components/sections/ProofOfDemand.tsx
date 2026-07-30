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
        <section id="proof-of-demand" className="relative overflow-hidden bg-black py-20 md:py-24">
            {/* Faint colored glow on the left edge */}
            <div className="absolute top-0 left-0 w-[300px] h-[600px] bg-[#2ECC71]/5 blur-[120px] pointer-events-none" />

            <div className="page-x relative z-10">
                {/* Heading — left aligned */}
                <div className="relative w-fit pb-4 mb-14">
                    <h2 className="text-3xl md:text-[44px] font-tektur font-medium text-white">
                        Proof of Demand
                    </h2>
                    <div className="absolute bottom-0 -left-16 w-[260%] h-[1px] bg-gradient-to-r from-transparent via-[#DE3BD6] to-transparent"></div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-14 w-full">

                    {/* Left: Creator platform screenshots */}
                    <div className="w-full lg:w-[58%]">
                        <h3 className="font-tektur text-xl md:text-[26px] text-white text-center mb-10">
                            We showed the vision for the creator platform.
                        </h3>
                        <div className="flex justify-center gap-6">
                            {/* Screenshots of the creator platform (Manga/Stories & Gists/Events) */}
                            <img
                                src="/assets/images/proof/screenshot-1.png"
                                alt="Ezzstar creator platform — manga and stories"
                                className="w-[300px] md:w-[380px] h-auto object-contain"
                            />
                            <img
                                src="/assets/images/proof/screenshot-2.png"
                                alt="Ezzstar creator platform — gists and events"
                                className="w-[300px] md:w-[380px] h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Right: Discord chat card */}
                    <div className="w-full lg:w-[40%]">
                        <h3 className="font-tektur text-xl md:text-[26px] text-white text-center mb-10">
                            Community showed the love.
                        </h3>

                        <div className="relative rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm p-5 md:p-7">
                            <div className="flex flex-col gap-5">
                                {messages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative flex gap-3 rounded-md p-3.5 ${msg.highlighted
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
                                                <p key={li} className="font-satoshi text-[15px] text-white/90 leading-relaxed">
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

            {/* "This is Chapter 1" ribbon — bottom right */}
            <div className="relative z-20 flex justify-end mt-16">
                <div
                    className="relative pr-8 pl-14 py-2.5 bg-[#0d0d12]"
                    style={{ clipPath: "polygon(28px 0, 100% 0, 100% 100%, 0 100%)" }}
                >
                    {/* Halftone edge texture — client may replace with the pixel ribbon asset */}
                    <div className="absolute inset-y-0 left-0 w-24 opacity-70"
                        style={{
                            background: "linear-gradient(90deg, #00EAFF 0%, #DE3BD6 100%)",
                            clipPath: "polygon(28px 0, 60px 0, 32px 100%, 0 100%)",
                        }}
                    />
                    <span className="font-tektur text-xl md:text-[26px] bg-clip-text text-transparent bg-gradient-to-r from-[#00EAFF] to-[#DE3BD6]">
                        This is Chapter 1
                    </span>
                </div>
            </div>
        </section>
    );
}
