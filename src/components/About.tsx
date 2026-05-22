"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";

export default function About() {
  const { theme } = useTheme();

  return (
    <section
      id="sobre"
      className={`py-20 lg:py-28 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative grid grid-cols-2 gap-3 sm:gap-4"
          >
            <div className="space-y-3 sm:space-y-4">
              <div
                className="rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80)",
                }}
              />
            </div>
            <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
              <div
                className="rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80)",
                }}
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl p-5 sm:p-6 text-center ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                10+
              </div>
              <div
                className={`text-xs sm:text-sm font-medium mt-1 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Años de Pasión
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">
              Sobre Wandora
            </span>
            <h2
              className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Viajamos para{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                Transformar Vidas
              </span>
            </h2>
            <p
              className={`mt-6 text-base sm:text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Wandora nació de la pasión por descubrir el mundo y compartirlo
              con los demás. Creemos que viajar no es solo visitar lugares,
              es transformar tu perspectiva, conectar con culturas diferentes
              y crear recuerdos que duran toda la vida.
            </p>
            <p
              className={`mt-4 text-base sm:text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Seleccionamos cuidadosamente cada destino, cada experiencia y
              cada recomendación para asegurarnos de que tu viaje sea
              extraordinario.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { label: "Destinos Curados", value: "50+" },
                { label: "Viajeros Felices", value: "10K+" },
                { label: "Países Cubiertos", value: "9" },
                { label: "Experiencias", value: "100+" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div
                    className={`text-xs sm:text-sm mt-1 ${
                      theme === "dark" ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
