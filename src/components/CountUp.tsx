import { useEffect, useRef, useState } from "react";

interface Props {
  /** Display value such as "150+", "9.0" or "30%". The number part animates. */
  value: string;
  duration?: number;
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function CountUp({ value, duration = 1400 }: Props) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState<string>(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;

    setShown((0).toFixed(decimals) + suffix);
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          setShown((target * easeOut(t)).toFixed(decimals) + suffix);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div ref={ref} className="stats__value" aria-label={value}>
      <span aria-hidden="true">{shown}</span>
    </div>
  );
}
