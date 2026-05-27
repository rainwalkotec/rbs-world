"use client";

import { useEffect } from "react";

export default function HomeAtmosphere() {
  useEffect(() => {
    const body = document.body;
    body.classList.add("home-atmosphere-active");

    const updateAtmosphere = () => {
      const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const rawProgress = window.scrollY / scrollable;
      const progress = Math.min(1, Math.max(0, rawProgress * 1.65));
      body.style.setProperty("--home-scroll", progress.toFixed(3));
    };

    updateAtmosphere();
    window.addEventListener("scroll", updateAtmosphere, { passive: true });
    window.addEventListener("resize", updateAtmosphere);

    return () => {
      window.removeEventListener("scroll", updateAtmosphere);
      window.removeEventListener("resize", updateAtmosphere);
      body.classList.remove("home-atmosphere-active");
      body.style.removeProperty("--home-scroll");
    };
  }, []);

  return (
    <div className="day-night-backdrop" aria-hidden="true">
      <div className="sky-layer sky-night" />
      <div className="stars-field">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="moon-disc" />
      <div className="sun-disc" />
      <div className="sky-layer sky-dawn" />
      <div className="sky-layer sky-day" />
      <div className="horizon-silhouette" />
      <div className="morning-haze" />
    </div>
  );
}
