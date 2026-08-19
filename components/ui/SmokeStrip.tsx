// The white "matter" strip that straddles the hero/Seika boundary.
//
// Two layers inside a mask cut from the artwork itself:
//   1. the smoke image, completely STATIC — the structure never moves;
//   2. a fine filament texture (a high-pass of the same artwork) scrolling
//      right-to-left and screen-blended on top, so only particles drift
//      *inside* the fixed silhouette.
//
// The particle rail tiles as [A][A-mirrored], so every seam meets its own
// reflection and translating one full unit lands on an identical frame.
export default function SmokeStrip({ className = "" }: { className?: string }) {
    return (
        <div
            aria-hidden
            className={`smoke-mask pointer-events-none select-none mix-blend-screen ${className}`}
            style={{ aspectRatio: "1600/300" }}
        >
            {/* 1. static structure */}
            <img
                src="/assets/images/sections/transition-smoke.png"
                alt=""
                className="smoke-base scale-[1.03] translate-x-[2%]"
            />
        </div>
    );
}
