"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export type PartnerLogo = {
  name: string;
  file: string;
};

type RowProps = {
  logos: PartnerLogo[];
  direction: 1 | -1;
};

const AUTOPLAY_MS = 2600;
const PAN_MS = 680;
const COPIES = 3;

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function MarqueeRow({ logos, direction }: RowProps) {
  const n = logos.length;
  const viewportRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const cellsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const hoverRef = useRef(false);
  const reduce = useReducedMotion();

  // Cells are content-sized: every logo is drawn at one height, so widths vary
  // (1:1 emblems next to 3.5:1 wordmarks). Geometry is therefore per-cell
  // offsets plus one copy period, never a single stride.
  const m = useRef({
    left: [] as number[],
    w: [] as number[],
    period: 0,
    widest: 0,
    viewW: 0,
  });
  const translateRef = useRef(0);
  const activeRef = useRef(n);
  const animRef = useRef<{ from: number; to: number; target: number; start: number } | null>(
    null,
  );
  const initRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const ensureLoopRef = useRef<(() => void) | null>(null);
  const onScreenRef = useRef(true);
  const nRef = useRef(n);

  const centerFor = (i: number) => {
    const { left, w, viewW, period } = m.current;
    const avg = nRef.current ? period / nRef.current : 0;
    return (viewW - (w[i] ?? avg)) / 2 - (left[i] ?? i * avg);
  };

  const applyEmphasis = () => {
    const strip = stripRef.current;
    if (!strip) return;
    const tx = translateRef.current;
    strip.style.transform = `translate3d(${tx}px, 0, 0)`;
    const { left, w, viewW, period, widest } = m.current;
    if (!viewW || !widest || !period) return;
    const avg = period / nRef.current;
    const center = viewW / 2;
    const focus = Math.max(viewW * 0.42, avg * 1.5);
    // A fixed-width cell has no room to grow on a narrow screen, so the phone
    // falls back to opacity/grayscale emphasis instead of scaling the box.
    const maxScale = Math.min(1.35, Math.max(1, viewW / (widest * 4.2)));
    cellsRef.current.forEach((cell, i) => {
      if (!cell) return;
      const cx = (left[i] ?? i * avg) + tx + (w[i] ?? avg) / 2;
      const t = clamp01(1 - Math.abs(cx - center) / focus);
      if (t <= 0) {
        if (cell.dataset.hot === "1") {
          cell.dataset.hot = "0";
          cell.style.transform = "";
          cell.style.zIndex = "";
        }
        return;
      }
      cell.dataset.hot = "1";
      cell.style.transform = `scale(${0.8 + t * (maxScale - 0.8)})`;
      cell.style.opacity = String(0.35 + t * 0.65);
      cell.style.filter = `grayscale(${1 - t})`;
      cell.style.zIndex = t > 0.5 ? "5" : "";
    });
  };

  const panTo = (target: number) => {
    animRef.current = {
      from: translateRef.current,
      to: centerFor(target),
      target,
      start: 0,
    };
    ensureLoopRef.current?.();
  };

  const nearestInstance = (i: number) => {
    const total = n * COPIES;
    let best = i;
    let bestDist = Math.abs(i - activeRef.current);
    for (const c of [i - n, i + n]) {
      if (c < 0 || c >= total) continue;
      const dist = Math.abs(c - activeRef.current);
      if (dist < bestDist) {
        bestDist = dist;
        best = c;
      }
    }
    return best;
  };

  const step = () => {
    panTo(activeRef.current + direction);
  };

  const restartTimer = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (reduce || !onScreenRef.current) return;
    timerRef.current = window.setInterval(() => {
      if (hoverRef.current) return;
      stepRef.current();
    }, AUTOPLAY_MS);
  };

  const stepRef = useRef(step);
  const restartTimerRef = useRef(restartTimer);

  useEffect(() => {
    stepRef.current = step;
    restartTimerRef.current = restartTimer;
  });

  useLayoutEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      const viewW = viewport.getBoundingClientRect().width;
      if (!viewW) return;
      const left: number[] = [];
      const w: number[] = [];
      let widest = 0;
      for (let i = 0; i < cellsRef.current.length; i++) {
        const cell = cellsRef.current[i];
        if (!cell) continue;
        left[i] = cell.offsetLeft;
        w[i] = cell.offsetWidth;
        if (cell.offsetWidth > widest) widest = cell.offsetWidth;
      }
      // offsetLeft is layout-only, so the strip's translate3d does not skew it.
      const anchor = left[0];
      const period = left[n];
      if (anchor === undefined || !period || !widest) return;
      for (let i = 0; i < left.length; i++) left[i] -= anchor;
      const relaidOut =
        viewW !== m.current.viewW ||
        period !== m.current.period ||
        widest !== m.current.widest;
      m.current = { left, w, period, widest, viewW };
      if (!initRef.current) {
        initRef.current = true;
        translateRef.current = centerFor(activeRef.current);
      } else if (relaidOut) {
        animRef.current = null;
        translateRef.current = centerFor(activeRef.current);
      } else {
        return;
      }
      applyEmphasis();
    };
    measure();
    // The strip is observed too: cells are content-sized, so a late-decoding
    // image widens the row and the geometry has to be re-read.
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    if (stripRef.current) ro.observe(stripRef.current);
    return () => ro.disconnect();
  }, [n]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const sync = () => restartTimerRef.current();
    const io = new IntersectionObserver(
      ([entry]) => {
        onScreenRef.current = entry.isIntersecting;
        sync();
      },
      { threshold: 0 },
    );
    io.observe(viewport);
    const onVisibilityChange = () => {
      onScreenRef.current = !document.hidden;
      sync();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    let running = false;

    const render = (now: number) => {
      const anim = animRef.current;
      if (!anim) {
        running = false;
        applyEmphasis();
        return;
      }
      const { period } = m.current;
      if (!anim.start) anim.start = now;
      const t = clamp01((now - anim.start) / PAN_MS);
      const e = easeOutCubic(t);
      translateRef.current = anim.from + (anim.to - anim.from) * e;
      if (t >= 1) {
        let a = anim.target;
        if (a >= 2 * n) {
          a -= n;
          translateRef.current += period;
        } else if (a < n) {
          a += n;
          translateRef.current -= period;
        }
        activeRef.current = a;
        animRef.current = null;
      }
      applyEmphasis();
      raf = requestAnimationFrame(render);
    };

    const ensureLoop = () => {
      if (!running && m.current.viewW) {
        running = true;
        raf = requestAnimationFrame(render);
      }
    };
    ensureLoopRef.current = ensureLoop;

    restartTimerRef.current();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
      ensureLoopRef.current = null;
    };
  }, [reduce, n]);

  if (reduce) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-12 sm:gap-y-10">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex h-14 w-24 items-center justify-center opacity-70 grayscale sm:h-20 sm:w-40"
          >
            <img
              src={`/partners/${logo.file}`}
              alt={`${logo.name} logo`}
              className="max-h-8 max-w-full object-contain sm:max-h-10"
              draggable={false}
            />
          </div>
        ))}
      </div>
    );
  }

  const copies = Array.from({ length: COPIES }, () => logos).flat();

  return (
    <div
      ref={viewportRef}
      className="relative select-none overflow-hidden py-1 sm:py-2"
      style={{ touchAction: "pan-y" }}
      onPointerEnter={(e) => {
        if (e.pointerType !== "mouse") return;
        hoverRef.current = true;
      }}
      onPointerLeave={(e) => {
        if (e.pointerType !== "mouse") return;
        hoverRef.current = false;
        restartTimerRef.current();
      }}
    >
      <div
        ref={stripRef}
        className="flex w-max gap-8 will-change-transform sm:gap-10 md:gap-14"
        style={{ backfaceVisibility: "hidden" }}
      >
        {copies.map((logo, i) => {
          const set = Math.floor(i / n);
          const inRotor = set === 1;
          return (
            <button
              type="button"
              key={`${logo.name}-${set}-${i}`}
              ref={(el) => {
                cellsRef.current[i] = el;
              }}
              onClick={() => {
                panTo(nearestInstance(i));
                restartTimerRef.current();
              }}
              aria-label={inRotor ? `${logo.name} logo` : undefined}
              aria-hidden={!inRotor}
              tabIndex={inRotor ? 0 : -1}
              className="flex h-14 w-24 shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-xl bg-transparent select-none sm:h-20 sm:w-36 md:h-24 md:w-40"
              style={{
                opacity: 0.35,
                filter: "grayscale(1)",
                WebkitTapHighlightColor: "transparent",
                WebkitTouchCallout: "none",
              }}
            >
              <span className="flex h-8 w-full items-center justify-center transition-transform duration-150 ease-out active:scale-90 sm:h-10 md:h-14">
                <img
                  src={`/partners/${logo.file}`}
                  alt=""
                  className="pointer-events-none max-h-full max-w-full object-contain"
                  draggable={false}
                />
              </span>
            </button>
          );
        })}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent sm:w-16 md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent sm:w-16 md:w-32" />
    </div>
  );
}

export function PartnerLogoMarquee({
  rows,
}: {
  rows: [PartnerLogo[], PartnerLogo[]];
}) {
  const [rowA, rowB] = rows;
  return (
    <div className="space-y-2">
      <MarqueeRow logos={rowA} direction={1} />
      <MarqueeRow logos={rowB} direction={-1} />
    </div>
  );
}