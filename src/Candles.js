"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Candles() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const isHome = pathname === "/";
  const extinguished = isHome && progress > 0.58;

  useEffect(() => {
    const update = () => {
      const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const rawProgress = window.scrollY / scrollable;
      setProgress(Math.min(1, Math.max(0, rawProgress * 1.65)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

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
