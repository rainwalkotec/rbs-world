"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Candles() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const isHome = pathname === "/";
  const extinguished = isHome && progress > 0.58;

  useEffect(() => {
    let ticking = false;

    const getProgress = () => {
      const root = document.documentElement;
      const body = document.body;
      const fullHeight = Math.max(
        body.scrollHeight,
        root.scrollHeight,
        body.offsetHeight,
        root.offsetHeight
      );
      const scrollable = Math.max(1, fullHeight - window.innerHeight);
      const rawProgress = window.scrollY / scrollable;
      return Math.min(1, Math.max(0, rawProgress * 1.65));
    };

    const apply = () => {
      ticking = false;
      setProgress(isHome ? getProgress() : 0);
    };

    const requestUpdate = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(apply);
      }
    };

    apply();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [isHome, pathname]);

  const candleStyle = {
    "--candle-scroll": isHome ? progress : 0,
  };

  return (
    <>
      <div className={`candle candle-left ${extinguished ? "is-extinguished" : ""}`} style={candleStyle}>
        <div className="candle-wax-drip drip-one" />
        <div className="candle-wax-drip drip-two" />
        <div className="candle-wick" />
        <div className="candle-flame" />
        <div className="candle-glow" />
        <div className="candle-smoke">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className={`candle candle-right ${extinguished ? "is-extinguished" : ""}`} style={candleStyle}>
        <div className="candle-wax-drip drip-one" />
        <div className="candle-wax-drip drip-two" />
        <div className="candle-wick" />
        <div className="candle-flame" />
        <div className="candle-glow" />
        <div className="candle-smoke">
          <span />
          <span />
          <span />
        </div>
      </div>
    </>
  );
}
