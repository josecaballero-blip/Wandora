"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-emerald-900/90" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-teal-300 font-semibold text-sm tracking-widest uppercase">
            No te pierdas nada
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Únete a la Comunidad Wandora
          </h2>
          <p className="mt-4 text-lg text-teal-100/80 max-w-xl mx-auto">
            Recibe los mejores destinos, ofertas exclusivas y tips de viaje
            directamente en tu correo.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition-all"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 shrink-0">
              Suscribirme
            </button>
          </div>

          <p className="mt-4 text-sm text-teal-200/60">
            Sin spam. Solo aventuras. Cancela cuando quieras.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
