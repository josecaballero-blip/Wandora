"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div
                className="rounded-3xl overflow-hidden aspect-[3/4] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80)",
                }}
              />
              <div
                className="rounded-3xl overflow-hidden aspect-square bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80)",
                }}
              />
            </div>
            <div className="space-y-4 pt-8">
              <div
                className="rounded-3xl overflow-hidden aspect-square bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&q=80)",
                }}
              />
              <div
                className="rounded-3xl overflow-hidden aspect-[3/4] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80)",
                }}
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-sm text-gray-600 font-medium mt-1">
                Años de Pasión
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-teal-600 font-semibold text-sm tracking-widest uppercase">
              Sobre Wandora
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Viajamos para{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                Transformar Vidas
              </span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Wandora nació de la pasión por descubrir el mundo y compartirlo
              con los demás. Creemos que viajar no es solo visitar lugares,
              es transformar tu perspectiva, conectar con culturas diferentes
              y crear recuerdos que duran toda la vida.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Seleccionamos cuidadosamente cada destino, cada experiencia y
              cada recomendación para asegurarnos de que tu viaje sea
              extraordinario. Desde las playas del Caribe colombiano hasta
              los templos de Asia, estamos aquí para guiarte.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { label: "Destinos Curados", value: "50+" },
                { label: "Viajeros Felices", value: "10K+" },
                { label: "Países Cubiertos", value: "9" },
                { label: "Experiencias", value: "100+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
