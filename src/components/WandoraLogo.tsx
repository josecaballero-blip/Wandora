"use client";

interface WandoraLogoProps {
  size?: number;
  className?: string;
}

export default function WandoraLogo({ size = 40, className = "" }: WandoraLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="50%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <filter id="logoShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Circle background */}
      <circle cx="50" cy="50" r="48" fill="url(#logoGrad1)" filter="url(#logoShadow)" />

      {/* Globe lines */}
      <ellipse cx="50" cy="50" rx="30" ry="42" stroke="white" strokeWidth="2" strokeOpacity="0.3" fill="none" />
      <ellipse cx="50" cy="50" rx="42" ry="42" stroke="white" strokeWidth="2" strokeOpacity="0.3" fill="none" />
      <line x1="50" y1="8" x2="50" y2="92" stroke="white" strokeWidth="1.5" strokeOpacity="0.25" />
      <line x1="8" y1="50" x2="92" y2="50" stroke="white" strokeWidth="1.5" strokeOpacity="0.25" />

      {/* W letter */}
      <path
        d="M28 30L36 68L50 45L64 68L72 30"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Compass star */}
      <circle cx="76" cy="24" r="10" fill="url(#logoGrad2)" />
      <path
        d="M76 16L78 22L84 24L78 26L76 32L74 26L68 24L74 22Z"
        fill="white"
      />
    </svg>
  );
}
