// The white "matter" strip that straddles the hero/Seika boundary.
//
// The outer div is masked by the smoke artwork itself (luminance mask), so the
// silhouette never moves. Inside it, an oversized copy of the same artwork
// crawls slowly — the marbled worm texture slides around within the fixed
// silhouette, which makes the particles wriggle (sperm-like) while staying
// inside the smoke. Screen-blended because the art ships on black.
export default function SmokeStrip({ className = "" }: { className?: string }) {
    return (
        <div
            aria-hidden
            className={`smoke-mask pointer-events-none select-none mix-blend-screen ${className}`}
            style={{ aspectRatio: "1600/300" }}
        >
            <img
                src="/assets/images/sections/transition-smoke.png"
                alt=""
                className="smoke-tex"
            />
        </div>
    );
}
