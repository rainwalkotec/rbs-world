"use client";

import { useEffect, useState } from "react";

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export default function HomeAtmosphere() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const body = document.body;
    const root = document.documentElement;
    let frame = null;

    body.classList.add("home-atmosphere-active");

    const readProgress = () => {
      const fullHeight = Math.max(
        body.scrollHeight,
        root.scrollHeight,
        body.offsetHeight,
        root.offsetHeight
      );
      const scrollable = Math.max(1, fullHeight - window.innerHeight);
      return clamp((window.scrollY / scrollable) * 1.65);
    };

    const apply = () => {
      frame = null;
      const next = readProgress();
      setProgress(next);
      body.style.setProperty("--home-scroll", next.toFixed(3));
      root.style.setProperty("--home-scroll", next.toFixed(3));
    };

    const requestApply = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(apply);
      }
    };

    apply();
    window.addEventListener("scroll", requestApply, { passive: true });
    window.addEventListener("resize", requestApply);

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestApply);
      window.removeEventListener("resize", requestApply);
      body.classList.remove("home-atmosphere-active");
      body.style.removeProperty("--home-scroll");
      root.style.removeProperty("--home-scroll");
    };
  }, []);

  const nightOpacity = clamp(1 - progress * 1.05);
  const dawnOpacity = clamp((progress - 0.18) * 2.5, 0, 0.92);
  const dayOpacity = clamp((progress - 0.48) * 2.35, 0, 0.96);
  const starsOpacity = clamp(1 - progress * 1.9);
  const moonOpacity = clamp(1 - progress * 1.45);
  const sunOpacity = clamp((progress - 0.35) * 2.4);
  const hazeOpacity = clamp(progress * 0.55, 0.08, 0.55);

  return (
    <div className="day-night-backdrop" aria-hidden="true">
      <div className="sky-layer sky-night" style={{ opacity: nightOpacity }} />
      <div className="stars-field" style={{ opacity: starsOpacity }}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div
        className="moon-disc"
        style={{
          opacity: moonOpacity,
          transform: `translateY(${progress * 72}px)`,
        }}
      />
      <div
        className="sun-disc"
        style={{
          opacity: sunOpacity,
          top: `calc(200px - ${progress * 115}px)`,
        }}
      />
      <div className="sky-layer sky-dawn" style={{ opacity: dawnOpacity }} />
      <div className="sky-layer sky-day" style={{ opacity: dayOpacity }} />
      <div className="horizon-silhouette" />
      <div className="morning-haze" style={{ opacity: hazeOpacity }} />
    </div>
  );
}
