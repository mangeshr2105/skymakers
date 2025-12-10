"use client";

import { useEffect } from "react";

/**
 * Initializes scroll-triggered reveal animations for elements that declare
 * a `data-animate` attribute. Respects `data-no-animate` on ancestors.
 *
 * Usage:
 * - Add `data-animate="fade-up|fade-in|slide-left|slide-right|zoom-in"` to any element
 * - Optional: `data-animate-delay="150"` in ms
 * - Optional: `data-animate-stagger="80"` to stagger children timings
 */
export default function ScrollAnimator() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-animate]"));

    if (elements.length === 0) return;

    // Filter out elements within a no-animate container
    const candidates = elements.filter((el) => !el.closest("[data-no-animate]"));

    // Initialize base class
    candidates.forEach((el) => {
      el.classList.add("reveal");

      // Optionally initialize stagger timing for children
      const staggerVal = el.getAttribute("data-animate-stagger");
      if (staggerVal) {
        const childNodes = Array.from(el.children) as HTMLElement[];
        const baseDelay = Number(el.getAttribute("data-animate-delay") || 0);
        const step = Number(staggerVal) || 60;
        childNodes.forEach((child, index) => {
          child.style.transitionDelay = `${baseDelay + index * step}ms`;
        });
      }
    });

    if (prefersReduced) {
      // If reduced motion, reveal immediately
      candidates.forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            const delay = Number(el.getAttribute("data-animate-delay") || 0);
            if (delay > 0) {
              setTimeout(() => el.classList.add("is-visible"), delay);
            } else {
              el.classList.add("is-visible");
            }
            observer.unobserve(el);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -5% 0px",
        threshold: 0.15,
      }
    );

    candidates.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}


