"use client";

import React, { useRef, useEffect, useCallback } from "react";

export type MarqueeDirection = "rtl" | "ltr";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: MarqueeDirection;
  autoScrollSpeed?: number; // seconds for full cycle
  mobileScrollSpeed?: number; // seconds for full cycle
  enableManualControl?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const GAP = 8; // Reduced gap between items

export default function Marquee({
  children,
  direction = "rtl",
  autoScrollSpeed = 60,
  mobileScrollSpeed = 45,
  enableManualControl = true,
  className = "",
  style = {},
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startTranslateX = useRef(0);
  const currentTranslateX = useRef(0);
  const trackWidth = useRef(0);
  const isManualControl = useRef(false);
  const lastTimestamp = useRef<number | null>(null);

  // Render children with consistent gaps including between loop
  const renderChildren = () => {
    const childrenArray = React.Children.toArray(children);
    const duplicatedChildren = childrenArray.concat(childrenArray);
    
    return (
      <div className="flex items-center">
        {duplicatedChildren.map((child, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0"
            style={{
              marginRight: idx < duplicatedChildren.length - 1 ? `${GAP}px` : '0',
              marginLeft: idx === 0 ? '0' : '0'
            }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  };

  // Set transform
  const setTranslateX = useCallback((x: number) => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${-x}px)`;
    }
  }, []);

  // Get scroll speed
  const getScrollSpeed = useCallback(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return mobileScrollSpeed;
    }
    return autoScrollSpeed;
  }, [autoScrollSpeed, mobileScrollSpeed]);

  // Animation loop
  const animate = useCallback(() => {
    const speed = getScrollSpeed();
    function step(timestamp: number) {
      if (lastTimestamp.current === null) lastTimestamp.current = timestamp;
      const elapsed = timestamp - lastTimestamp.current;
      lastTimestamp.current = timestamp;
      if (!dragging.current) {
        // Only scroll by the original width (trackWidth.current) for a full cycle
        const distance = (trackWidth.current * elapsed) / (speed * 1000);
        if (direction === "rtl") {
          currentTranslateX.current += distance;
          if (currentTranslateX.current >= trackWidth.current) {
            currentTranslateX.current -= trackWidth.current;
          }
        } else {
          currentTranslateX.current -= distance;
          if (currentTranslateX.current < 0) {
            currentTranslateX.current += trackWidth.current;
          }
        }
        setTranslateX(currentTranslateX.current);
      }
      animationRef.current = requestAnimationFrame(step);
    }
    lastTimestamp.current = null; // Reset on new animation
    animationRef.current = requestAnimationFrame(step);
  }, [direction, getScrollSpeed, setTranslateX]);

  // Setup
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Wait for layout
    setTimeout(() => {
      trackWidth.current = track.scrollWidth / 2;
      currentTranslateX.current = 0;
      setTranslateX(0);
    }, 0);
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animate();
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [children, direction, autoScrollSpeed, mobileScrollSpeed, animate, setTranslateX]);

  // Manual drag/swipe
  useEffect(() => {
    if (!enableManualControl) return;
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const onStart = (e: MouseEvent | TouchEvent) => {
      dragging.current = true;
      isManualControl.current = true;
      startX.current = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      startTranslateX.current = currentTranslateX.current;
      container.classList.add("marquee-manual-control");
      document.body.style.cursor = "grabbing";
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      e.preventDefault();
    };
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const clientX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const deltaX = clientX - startX.current;
      let newTranslateX = startTranslateX.current - deltaX;
      if (newTranslateX < 0) {
        newTranslateX += trackWidth.current;
      } else if (newTranslateX >= trackWidth.current) {
        newTranslateX -= trackWidth.current;
      }
      currentTranslateX.current = newTranslateX;
      setTranslateX(currentTranslateX.current);
      e.preventDefault();
    };
    const onEnd = () => {
      if (!dragging.current) return;
      dragging.current = false;
      isManualControl.current = false;
      container.classList.remove("marquee-manual-control");
      document.body.style.cursor = "";
      if (currentTranslateX.current < 0) {
        currentTranslateX.current += trackWidth.current;
      } else if (currentTranslateX.current >= trackWidth.current) {
        currentTranslateX.current -= trackWidth.current;
      }
      setTranslateX(currentTranslateX.current);
      animate();
    };
    // Mouse
    container.addEventListener("mousedown", onStart);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);
    container.addEventListener("mouseleave", onEnd);
    // Touch
    container.addEventListener("touchstart", onStart, { passive: false });
    window.addEventListener("touchmove", onMove as EventListener, { passive: false });
    window.addEventListener("touchend", onEnd);
    // Resize
    const onResize = () => {
      if (!track) return;
      trackWidth.current = track.scrollWidth / 2;
      if (!isManualControl.current) animate();
    };
    window.addEventListener("resize", onResize);
    // Cleanup
    return () => {
      container.removeEventListener("mousedown", onStart);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onEnd);
      container.removeEventListener("mouseleave", onEnd);
      container.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchmove", onMove as EventListener);
      window.removeEventListener("touchend", onEnd);
      window.removeEventListener("resize", onResize);
    };
  }, [enableManualControl, animate, setTranslateX]);

  // Hide scrollbars and set styles
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.style.overflow = "hidden";
    container.style.userSelect = "none";
    container.style.setProperty("-webkit-overflow-scrolling", "touch");
    container.style.scrollBehavior = "smooth";
    if (enableManualControl) {
      container.style.cursor = "grab";
    }
  }, [enableManualControl]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none touch-pan-x ${className}`}
      style={style}
    >
      <div
        ref={trackRef}
        className="flex items-center will-change-transform"
        style={{
          transform: `translateX(${-currentTranslateX.current}px)`,
          transition: dragging.current ? 'none' : 'transform 0.3s ease-out',
        }}
      >
        {renderChildren()}
      </div>
    </div>
  );
}