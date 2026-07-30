// Partner logo strip — continuous marquee over a purple band.
// Logo assets are shared with the old site (public/assets/images/partners).
// All logos are trimmed to their artwork and rendered at one shared height, so
// none reads as bigger than the others. `scale` only corrects optical weight:
// a square lockup (GCB) needs more height than a long wordmark (BNB Chain) to
// look the same size, and AWS's smile hangs below its wordmark.
const partners = [
    { name: "AWS", image: "/assets/images/partners/aws.png", scale: 0.82 },
    { name: "IQ.Wiki", image: "/assets/images/partners/iq-wiki.png", scale: 1 },
    { name: "GCB", image: "/assets/images/partners/gcb.png", scale: 1.15 },
    { name: "BNB Chain", image: "/assets/images/partners/bnb-chain.png", scale: 0.95 },
];

// Shared baseline height in px
const BASE = 46;

export default function PartnersMarquee() {
    // Duplicate the set so the -50% translate loops seamlessly
    const loop = [...partners, ...partners, ...partners, ...partners];

    return (
        <section id="partners" className="relative w-full overflow-hidden bg-gradient-to-r from-[#7a0fd4] via-[#9013e0] to-[#7a0fd4] py-4">
            <div className="flex w-max animate-marquee items-center">
                {loop.map((partner, idx) => (
                    <div key={idx} className="flex h-[72px] md:h-[92px] items-center justify-center px-10 md:px-14 shrink-0">
                        <img
                            src={partner.image}
                            alt={partner.name}
                            className="w-auto max-w-none object-contain"
                            style={{ height: `${BASE * partner.scale}px` }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
