"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import WandoraLogo from "./WandoraLogo";

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export default function Hero() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        left: seededRandom(i * 3) * 100,
        top: seededRandom(i * 3 + 1) * 100,
        duration: 3 + seededRandom(i * 3 + 2) * 4,
        delay: seededRandom(i * 7) * 5,
        size: 1 + seededRandom(i * 5) * 3,
      })),
    []
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=60&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          preload="metadata"
        >
          <source
            src="https://videos.pexels.com/video-files/3571264/3571264-hd_1280_720_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <WandoraLogo size={80} className="drop-shadow-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">
            Tu proxima aventura comienza en Colombia
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight"
        >
          Descubre la{" "}
          <motion.span
            className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent inline-block"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Magia
          </motion.span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            de Colombia
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          Explora los destinos mas magicos de Colombia y el mundo.
          Playas caribenas, ciudades vibrantes, selva amazonica y mucho mas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="#destinos"
            className="group relative w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105 text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explorar Colombia
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>
          <Link
            href="#conversor"
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/50 text-center"
          >
            Conversor de Moneda
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-sm sm:max-w-lg mx-auto"
        >
          {[
            { number: "15+", label: "Destinos" },
            { number: "10", label: "Ciudades Colombianas" },
            { number: "100+", label: "Experiencias" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-white/60 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">
            Desliza
          </span>
          <svg
            className="w-5 h-5 text-white/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
