"use client";

import { useEffect, useState } from "react";

export default function OrderKnightRider() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      setProgress(Math.min(1, Math.max(0, scrollTop / maxScroll)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      className="order-rider-track"
      aria-hidden="true"
      style={{ "--ride-x": `${progress * 82}vw` }}
    >
      <div className="order-rider-dust dust-one" />
      <div className="order-rider-dust dust-two" />
      <div className="order-rider">
        <span className="rider-lance" />
        <span className="rider-banner">РБС</span>
        <span className="rider-head" />
        <span className="rider-body" />
        <span className="horse-neck" />
        <span className="horse-body" />
        <span className="horse-head" />
        <span className="horse-leg leg-one" />
        <span className="horse-leg leg-two" />
        <span className="horse-leg leg-three" />
        <span className="horse-leg leg-four" />
      </div>
    </div>
  );
}
