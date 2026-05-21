"use client";

import * as React from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>(): React.RefObject<T | null> {
  const ref = React.useRef<T>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.setAttribute("data-visible", "true");
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal();
      return;
    }

    const rect = el.getBoundingClientRect();
    const inViewportOnMount = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewportOnMount) {
      const raf = requestAnimationFrame(() => requestAnimationFrame(reveal));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
