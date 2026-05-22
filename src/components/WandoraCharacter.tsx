"use client";

import { motion } from "framer-motion";

interface WandoraCharacterProps {
  size?: number;
  className?: string;
}

export default function WandoraCharacter({ size = 200, className = "" }: WandoraCharacterProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        <linearGradient id="charBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="charHat" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <radialGradient id="charFace" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#fbbf24" />
        </radialGradient>
        <filter id="charShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Body / Backpack */}
      <ellipse cx="100" cy="145" rx="38" ry="45" fill="url(#charBody)" filter="url(#charShadow)" />
      <ellipse cx="100" cy="145" rx="30" ry="37" fill="#0d9488" opacity="0.3" />

      {/* Straps */}
      <path d="M78 120C75 105 80 90 85 80" stroke="#065f46" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M122 120C125 105 120 90 115 80" stroke="#065f46" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Backpack pocket */}
      <rect x="85" y="135" width="30" height="20" rx="5" fill="#065f46" opacity="0.5" />

      {/* Face */}
      <circle cx="100" cy="72" r="38" fill="url(#charFace)" filter="url(#charShadow)" />

      {/* Eyes */}
      <motion.g
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
      >
        <ellipse cx="87" cy="68" rx="6" ry="7" fill="#1e293b" />
        <ellipse cx="113" cy="68" rx="6" ry="7" fill="#1e293b" />
        <circle cx="89" cy="66" r="2.5" fill="white" />
        <circle cx="115" cy="66" r="2.5" fill="white" />
      </motion.g>

      {/* Smile */}
      <path d="M85 80 Q100 95 115 80" stroke="#92400e" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Cheeks */}
      <circle cx="78" cy="78" r="6" fill="#f97316" opacity="0.3" />
      <circle cx="122" cy="78" r="6" fill="#f97316" opacity="0.3" />

      {/* Explorer Hat */}
      <ellipse cx="100" cy="45" rx="42" ry="8" fill="url(#charHat)" />
      <path d="M70 45 Q72 20 100 15 Q128 20 130 45" fill="url(#charHat)" />
      <rect x="88" y="38" width="24" height="5" rx="2" fill="#92400e" opacity="0.4" />

      {/* Globe in hand */}
      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "145px 130px" }}
      >
        <circle cx="145" cy="130" r="14" fill="#06b6d4" opacity="0.9" />
        <ellipse cx="145" cy="130" rx="8" ry="13" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
        <line x1="131" y1="130" x2="159" y2="130" stroke="white" strokeWidth="1" opacity="0.4" />
      </motion.g>

      {/* Arm to globe */}
      <path d="M122 130C130 128 135 128 140 130" stroke="#fbbf24" strokeWidth="5" strokeLinecap="round" fill="none" />

      {/* Compass on hat */}
      <circle cx="100" cy="28" r="6" fill="white" opacity="0.9" />
      <path d="M100 22L101 27L106 28L101 29L100 34L99 29L94 28L99 27Z" fill="#f97316" />

      {/* Sparkles */}
      <motion.g
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        <path d="M50 50L52 46L54 50L52 54Z" fill="#fbbf24" />
        <path d="M155 55L157 51L159 55L157 59Z" fill="#fbbf24" />
        <path d="M45 120L47 116L49 120L47 124Z" fill="#06b6d4" />
      </motion.g>
    </motion.svg>
  );
}
