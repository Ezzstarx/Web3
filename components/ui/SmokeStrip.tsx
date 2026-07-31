// The white "matter" strip that straddles the hero/Seika boundary.
//
// The outer div is masked by the smoke artwork itself (luminance mask), so the
// silhouette never moves. Inside it, a rail of four copies of the same artwork
// scrolls right-to-left forever, so the marbled particles appear to stream
// through the smoke while staying inside it.
//
// The rail tiles as [A][A-mirrored][A][A-mirrored]: mirroring makes every
// adjacent edge meet its own reflection (no seam), and translating by exactly
// two cells lands on an identical frame (no jump at the loop point).
export default function SmokeStrip({ className = "" }: { className?: string }) {
    return (
        <div
            aria-hidden
            className={`smoke-mask pointer-events-none select-none mix-blend-screen ${className}`}
            style={{ aspectRatio: "1600/300" }}
        >
            <div className="smoke-rail">
                {[0, 1, 2, 3].map((i) => (
                    <img
                        key={i}
                        src="/assets/images/sections/transition-smoke.png"
                        alt=""
                        className={i % 2 === 1 ? "smoke-cell smoke-cell--flip" : "smoke-cell"}
                    />
                ))}
            </div>
        </div>
    );
}
