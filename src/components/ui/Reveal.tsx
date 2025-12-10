"use client";

import React from "react";
import { motion } from "framer-motion";

type VariantName = "fade-in" | "fade-up" | "slide-left" | "slide-right" | "zoom-in";

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  variant?: VariantName;
  delay?: number; // ms
  duration?: number; // seconds
  className?: string;
  /**
   * If provided, each direct child will get an incremental delay (ms)
   */
  staggerStepMs?: number;
}

const variantsMap: Record<VariantName, { initial: Record<string, unknown>; animate: Record<string, unknown> }> = {
  "fade-in": {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  "fade-up": {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  "slide-left": {
    initial: { opacity: 0, x: 24 },
    animate: { opacity: 1, x: 0 },
  },
  "slide-right": {
    initial: { opacity: 0, x: -24 },
    animate: { opacity: 1, x: 0 },
  },
  "zoom-in": {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
  },
};

export default function Reveal({
  children,
  as = "div",
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  className,
  staggerStepMs,
  ...rest
}: RevealProps) {
  const v = variantsMap[variant];

  if (staggerStepMs && React.Children.count(children) > 1) {
    // Apply incremental delays to each direct child
    let index = 0;
    const enhancedChildren = React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return child;
      const childDelay = (delay + index * staggerStepMs) / 1000; // seconds
      index += 1;
      return (
        <motion.div
          initial={v.initial}
          whileInView={v.animate}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration, delay: childDelay, type: "spring", damping: 24, stiffness: 180 }}
          className={className}
          {...rest}
        >
          {child}
        </motion.div>
      );
    });
    return <>{enhancedChildren}</>;
  }

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration, delay: delay / 1000, type: "spring", damping: 24, stiffness: 180 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}


