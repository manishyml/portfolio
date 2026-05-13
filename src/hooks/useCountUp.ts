"use client";
import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const rafRef = useRef<number | null>(null);

  const start = () => {
    if (started.current) return;
    started.current = true;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { count, start };
}
