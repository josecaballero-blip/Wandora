"use client";

import { motion } from "framer-motion";
import { destinations } from "@/lib/destinations";
import DestinationCard from "./DestinationCard";

export default function FeaturedDestinations() {
  return (
    <section id="destinos" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal-600 font-semibold text-sm tracking-widest uppercase">
            Explora el Mundo
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Destinos que{" "}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
              Inspiran
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Desde las calles coloniales de Cartagena hasta los templos de
            Tokio, cada destino es una puerta a lo extraordinario.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.slug} destination={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
