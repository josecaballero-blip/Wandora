"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";

const flightPlatforms = [
  {
    name: "Skyscanner",
    description: "Compara precios de cientos de aerolíneas y encuentra los vuelos más baratos.",
    url: "https://www.skyscanner.com/",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Google Flights",
    description: "Explora vuelos con mapas interactivos y alertas de precios inteligentes.",
    url: "https://www.google.com/travel/flights",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Kayak",
    description: "Busca y compara vuelos, hoteles y autos de alquiler en un solo lugar.",
    url: "https://www.kayak.com/flights",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Hopper",
    description: "Predicciones de precios con IA para saber cuándo comprar tu vuelo.",
    url: "https://www.hopper.com/",
    color: "from-purple-500 to-pink-500",
  },
];

const tips = [
  "Reserva con 2-3 meses de anticipación para mejores precios",
  "Los martes y miércoles suelen tener vuelos más baratos",
  "Usa modo incógnito al buscar para evitar subidas de precio",
  "Activa alertas de precio en Skyscanner o Google Flights",
];

export default function FlightDeals() {
  const { theme } = useTheme();

  return (
    <section
      id="vuelos"
      className={`py-20 lg:py-28 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
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
            Ahorra en tus vuelos
          </span>
          <h2
            className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Encuentra Vuelos{" "}
            <span className="bg-gradient-to-r from-teal-500 to-emerald-400 bg-clip-text text-transparent">
              Baratos
            </span>
          </h2>
          <p
            className={`mt-4 text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Compara precios en las mejores plataformas y encuentra las ofertas
            más increíbles para tu próximo viaje.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {flightPlatforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative p-6 rounded-2xl border transition-all duration-500 hover:scale-[1.03] hover:shadow-xl ${
                theme === "dark"
                  ? "bg-gray-800/60 border-gray-700/50 hover:border-teal-500/40"
                  : "bg-white border-gray-100 hover:border-teal-200 hover:shadow-teal-500/10"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-4`}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </div>
              <h3
                className={`text-lg font-bold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {platform.name}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {platform.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-teal-500 text-sm font-medium group-hover:gap-2 transition-all">
                Buscar vuelos
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-2xl p-6 sm:p-8 ${
            theme === "dark"
              ? "bg-gradient-to-r from-teal-900/40 to-emerald-900/40 border border-teal-800/30"
              : "bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100"
          }`}
        >
          <h3
            className={`text-lg font-bold mb-4 ${
              theme === "dark" ? "text-teal-300" : "text-teal-800"
            }`}
          >
            Tips para Conseguir Vuelos Baratos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {tip}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
