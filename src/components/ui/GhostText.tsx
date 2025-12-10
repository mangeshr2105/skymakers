import React from 'react';

interface GhostTextProps {
  text: string;
  className?: string;
}

// Renders large, low-contrast sticky text behind content
const GhostText: React.FC<GhostTextProps> = ({ text, className = '' }) => {
  return (
    <div
      aria-hidden
      className={`pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden ${className}`}
    >
      <span
        className="block w-full text-center font-extrabold tracking-widest uppercase"
        style={{
          fontSize: 'min(18vw, 180px)',
          lineHeight: 0.9,
          letterSpacing: '0.12em',
          color: 'rgba(255,255,255,0.08)',
          WebkitTextStroke: '1px rgba(255,255,255,0.12)',
          textShadow: '0 2px 24px rgba(0,0,0,0.35)'
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default GhostText;


