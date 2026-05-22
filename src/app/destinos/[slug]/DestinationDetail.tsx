"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Destination } from "@/lib/destinations";
import { useTheme } from "@/lib/ThemeContext";

interface Props {
  destination: Destination;
}

export default function DestinationDetail({ destination }: Props) {
  const { theme } = useTheme();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${destination.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#destinos"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Volver a Destinos
            </Link>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="px-2.5 py-1 sm:px-3 bg-teal-500/20 backdrop-blur-sm rounded-full text-teal-300 text-xs sm:text-sm font-medium border border-teal-400/30">
                {destination.country}
              </span>
              <span className="px-2.5 py-1 sm:px-3 bg-white/10 backdrop-blur-sm rounded-full text-white/70 text-xs sm:text-sm border border-white/10">
                {destination.continent}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight">
              {destination.name}
            </h1>
            <p className="mt-2 sm:mt-3 text-lg sm:text-2xl text-teal-300 font-medium">
              {destination.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section
        className={`border-b transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-900 border-gray-800"
            : "bg-white border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-6 sm:py-8"
          >
            {[
              {
                label: "Mejor Época",
                value: destination.bestTime,
                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
              },
              {
                label: "Presupuesto",
                value: destination.avgBudget,
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                label: "Idioma",
                value: destination.language,
                icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
              },
              {
                label: "Moneda",
                value: destination.currency,
                icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
              },
            ].map((info) => (
              <div key={info.label} className="flex items-center gap-2.5 sm:gap-3">
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    theme === "dark" ? "bg-teal-900/40" : "bg-teal-50"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      theme === "dark" ? "text-teal-400" : "text-teal-600"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={info.icon}
                    />
                  </svg>
                </div>
                <div>
                  <div
                    className={`text-xs ${
                      theme === "dark" ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    {info.label}
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-semibold ${
                      theme === "dark" ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    {info.value}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Description + Gallery */}
      <section
        className={`py-12 sm:py-16 lg:py-24 transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-950" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Sobre{" "}
                <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                  {destination.name}
                </span>
              </h2>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {destination.longDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 grid grid-cols-2 gap-2 sm:gap-3"
            >
              {destination.gallery.map((img, i) => (
                <div
                  key={i}
                  className={`rounded-xl sm:rounded-2xl overflow-hidden bg-cover bg-center ${
                    i === 0 ? "col-span-2 aspect-video" : "aspect-square"
                  }`}
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section
        className={`py-12 sm:py-16 lg:py-24 transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12"
          >
            <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">
              Qué hacer
            </span>
            <h2
              className={`mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Actividades Imperdibles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {destination.activities.map((activity, i) => (
              <motion.div
                key={activity.name}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`group p-5 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-500 ${
                  theme === "dark"
                    ? "bg-gray-800/60 border-gray-700/50 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5"
                    : "bg-white border-gray-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-500/5"
                }`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center mb-3 sm:mb-4">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-base sm:text-lg font-bold mb-1.5 sm:mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {activity.name}
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking & Reservation Links */}
      <section
        className={`py-12 sm:py-16 lg:py-24 transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-950" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12"
          >
            <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">
              Planifica tu viaje
            </span>
            <h2
              className={`mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Reserva tu Aventura
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {destination.bookingLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group p-5 sm:p-6 rounded-xl sm:rounded-2xl border text-center transition-all duration-500 hover:scale-[1.03] ${
                  theme === "dark"
                    ? "bg-gray-800/60 border-gray-700/50 hover:border-teal-500/40 hover:shadow-lg"
                    : "bg-white border-gray-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-500/10"
                }`}
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center ${
                    link.type === "hotel"
                      ? "bg-gradient-to-br from-blue-500 to-indigo-500"
                      : link.type === "activity"
                        ? "bg-gradient-to-br from-amber-500 to-orange-500"
                        : "bg-gradient-to-br from-teal-500 to-emerald-500"
                  }`}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {link.type === "hotel" ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    )}
                  </svg>
                </div>
                <h3
                  className={`font-bold text-sm sm:text-base mb-1 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {link.name}
                </h3>
                <p
                  className={`text-xs ${
                    theme === "dark" ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {link.type === "hotel"
                    ? "Alojamiento"
                    : link.type === "activity"
                      ? "Tours y Actividades"
                      : "Vuelos"}
                </p>
                <div className="mt-3 text-teal-500 text-xs sm:text-sm font-medium flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                  Reservar
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </motion.a>
            ))}

            {/* Flight search link */}
            <motion.a
              href={destination.flightSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: destination.bookingLinks.length * 0.1 }}
              className={`group p-5 sm:p-6 rounded-xl sm:rounded-2xl border text-center transition-all duration-500 hover:scale-[1.03] ${
                theme === "dark"
                  ? "bg-gray-800/60 border-gray-700/50 hover:border-teal-500/40 hover:shadow-lg"
                  : "bg-white border-gray-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-500/10"
              }`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
              <h3
                className={`font-bold text-sm sm:text-base mb-1 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Skyscanner
              </h3>
              <p
                className={`text-xs ${
                  theme === "dark" ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Vuelos baratos
              </p>
              <div className="mt-3 text-teal-500 text-xs sm:text-sm font-medium flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                Buscar vuelos
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section
        className={`py-12 sm:py-16 lg:py-24 transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12"
          >
            <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">
              Consejos
            </span>
            <h2
              className={`mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Tips para tu viaje a {destination.name}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {destination.tips.map((tip, i) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-5 sm:p-6 rounded-xl sm:rounded-2xl border ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-teal-900/30 to-emerald-900/30 border-teal-800/30"
                    : "bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-100"
                }`}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-500 flex items-center justify-center mb-3 sm:mb-4">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-base sm:text-lg font-bold mb-1.5 sm:mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {tip.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              ¿Listo para explorar {destination.name}?
            </h2>
            <p className="mt-2 sm:mt-3 text-teal-100 text-base sm:text-lg">
              Tu próxima aventura te espera. Comienza a planificar tu viaje
              hoy.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/#destinos"
                className="px-7 sm:px-8 py-3.5 sm:py-4 bg-white text-teal-700 font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Ver Más Destinos
              </Link>
              <Link
                href="/"
                className="px-7 sm:px-8 py-3.5 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                Volver al Inicio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
