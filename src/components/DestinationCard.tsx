"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Destination } from "@/lib/destinations";

interface DestinationCardProps {
  destination: Destination;
  index: number;
}

export default function DestinationCard({
  destination,
  index,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link
        href={`/destinos/${destination.slug}`}
        className="group block relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] shadow-lg hover:shadow-2xl transition-all duration-500"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${destination.image})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium border border-white/10">
            {destination.country}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <motion.div className="transform transition-transform duration-500 group-hover:-translate-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              {destination.name}
            </h3>
            <p className="text-teal-300 text-xs sm:text-sm font-medium mb-2 sm:mb-3">
              {destination.tagline}
            </p>
            <p className="text-white/70 text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {destination.description}
            </p>

            <div className="flex items-center gap-2 text-white/80">
              <span className="text-sm">Explorar</span>
              <svg
                className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2"
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
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
