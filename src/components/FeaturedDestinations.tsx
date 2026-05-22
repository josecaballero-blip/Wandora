"use client";

import { motion } from "framer-motion";
import { destinations } from "@/lib/destinations";
import { useTheme } from "@/lib/ThemeContext";
import DestinationCard from "./DestinationCard";

export default function FeaturedDestinations() {
  const { theme } = useTheme();

  return (
    <section
      id="destinos"
      className={`py-20 lg:py-28 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900/50" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">
            Explora el Mundo
          </span>
          <h2
            className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Destinos que{" "}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
              Inspiran
            </span>
          </h2>
          <p
            className={`mt-4 text-base sm:text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Desde las calles coloniales de Cartagena hasta los templos de
            Tokio, cada destino es una puerta a lo extraordinario.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.slug} destination={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
