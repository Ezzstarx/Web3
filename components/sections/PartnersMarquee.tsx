// Partner logo strip — continuous marquee over a purple band.
// Logo assets are shared with the old site (public/assets/images/partners).
const partners = [
    { name: "AWS", image: "/assets/images/partners/aws.png" },
    { name: "IQ.Wiki", image: "/assets/images/partners/iq-wiki.png" },
    { name: "GCB", image: "/assets/images/partners/gcb.png" },
    { name: "BNB Chain", image: "/assets/images/partners/bnb-chain.png" },
];

export default function PartnersMarquee() {
    // Duplicate the set so the -50% translate loops seamlessly
    const loop = [...partners, ...partners, ...partners, ...partners];

    return (
        <section id="partners" className="relative w-full overflow-hidden bg-gradient-to-r from-[#7a0fd4] via-[#9013e0] to-[#7a0fd4] py-5">
            <div className="flex w-max animate-marquee items-center">
                {loop.map((partner, idx) => (
                    <div key={idx} className="flex items-center justify-center px-12 md:px-16 shrink-0">
                        <img
                            src={partner.image}
                            alt={partner.name}
                            className="h-[46px] md:h-[60px] w-auto object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
