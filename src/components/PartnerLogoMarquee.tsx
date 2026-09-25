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

const AUTOPLAY_MS = 3600;
const PAN_MS = 720;
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

  const m = useRef({ cellW: 0, stride: 0, viewW: 0 });
  const translateRef = useRef(0);
  const activeRef = useRef(n);
  const animRef = useRef<{ from: number; to: number; target: number; start: number } | null>(
    null,
  );
  const initRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const ensureLoopRef = useRef<(() => void) | null>(null);

  const centerFor = (i: number) => {
    return (m.current.viewW - m.current.cellW) / 2 - i * m.current.stride;
  };

  const applyEmphasis = () => {
    if (!stripRef.current) return;
    stripRef.current.style.transform = `translate3d(${translateRef.current}px, 0, 0)`;
    const { cellW, stride, viewW } = m.current;
    if (!cellW || !viewW) return;
    const center = viewW / 2;
    const focus = stride * 2.4;
    cellsRef.current.forEach((cell, i) => {
      if (!cell) return;
      const cx = i * stride + translateRef.current + cellW / 2;
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
      cell.style.transform = `scale(${0.8 + t * 0.55})`;
      cell.style.opacity = String(0.35 + t * 0.65);
      cell.style.filter = `grayscale(${1 - t})`;
      cell.style.zIndex = t > 0.5 ? "5" : "";
    });
  };

  const goTo = (index: number) => {
    const base = ((index % n) + n) % n;
    const target = base + n;
    animRef.current = {
      from: translateRef.current,
      to: centerFor(target),
      target,
      start: 0,
    };
    ensureLoopRef.current?.();
  };

  const step = () => {
    const a = activeRef.current;
    let target: number;
    if (direction === 1) {
      target = a >= 2 * n - 1 ? 2 * n : a + 1;
    } else {
      target = a <= n ? n - 1 : a - 1;
    }
    goTo(target);
  };

  const restartTimer = () => {
    if (reduce) return;
    if (timerRef.current !== null) window.clearInterval(timerRef.current);
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
      const a = cellsRef.current.find(Boolean);
      if (!viewport || !a) return;
      const rectA = a.getBoundingClientRect();
      const b = cellsRef.current.find((c) => c && c !== a);
      const next = {
        cellW: rectA.width,
        stride: b ? b.getBoundingClientRect().left - rectA.left : rectA.width,
        viewW: viewport.getBoundingClientRect().width,
      };
      const viewportResized = m.current.viewW !== next.viewW;
      m.current = next;
      if (!initRef.current && next.viewW) {
        initRef.current = true;
        if (!animRef.current) translateRef.current = centerFor(activeRef.current);
        applyEmphasis();
      } else if (viewportResized && !animRef.current) {
        translateRef.current = centerFor(activeRef.current);
        applyEmphasis();
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [n]);

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
      const { stride } = m.current;
      if (!anim.start) anim.start = now;
      const t = clamp01((now - anim.start) / PAN_MS);
      const e = easeOutCubic(t);
      translateRef.current = anim.from + (anim.to - anim.from) * e;
      if (t >= 1) {
        let a = anim.target;
        if (a >= 2 * n) {
          a -= n;
          translateRef.current += n * stride;
        } else if (a < n) {
          a += n;
          translateRef.current -= n * stride;
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
      <div className="flex flex-wrap items-center justify-center gap-6">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex h-20 w-40 items-center justify-center opacity-70 grayscale"
          >
            <img
              src={`/partners/${logo.file}`}
              alt={`${logo.name} logo`}
              className="max-h-10 max-w-full object-contain"
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
      className="relative overflow-hidden select-none py-2"
      onMouseEnter={() => {
        hoverRef.current = true;
      }}
      onMouseLeave={() => {
        hoverRef.current = false;
        restartTimerRef.current();
      }}
    >
      <div
        ref={stripRef}
        className="flex will-change-transform"
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
                goTo(i);
                restartTimerRef.current();
              }}
              aria-label={inRotor ? `${logo.name} logo` : undefined}
              aria-hidden={!inRotor}
              tabIndex={inRotor ? 0 : -1}
              className="mx-3 md:mx-6 flex h-20 md:h-24 w-36 md:w-40 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-transparent"
              style={{ opacity: 0.35, filter: "grayscale(1)" }}
            >
              <img
                src={`/partners/${logo.file}`}
                alt=""
                className="max-h-10 md:max-h-14 max-w-full object-contain pointer-events-none"
                draggable={false}
              />
            </button>
          );
        })}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent" />
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