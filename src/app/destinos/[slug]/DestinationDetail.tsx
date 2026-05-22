"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Destination } from "@/lib/destinations";
import { useTheme } from "@/lib/ThemeContext";

interface Props {
  destination: Destination;
}

export default function DestinationDetail({ destination }: Props) {
  const { theme } = useTheme();

  const typeLabels: Record<string, string> = {
    hotel: "Hotel",
    hostal: "Hostal",
    airbnb: "Airbnb",
    resort: "Resort",
  };

  const typeColors: Record<string, string> = {
    hotel: "from-blue-500 to-indigo-500",
    hostal: "from-green-500 to-emerald-500",
    airbnb: "from-pink-500 to-rose-500",
    resort: "from-amber-500 to-orange-500",
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            sizes="100vw"
            className="object-cover"
            priority
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
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
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
          theme === "dark" ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100"
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
              { label: "Mejor Epoca", value: destination.bestTime, icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
              { label: "Presupuesto", value: destination.avgBudgetCOP, icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Idioma", value: destination.language, icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" },
              { label: "Vuelos", value: destination.flightPriceCOP, icon: "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" },
            ].map((info) => (
              <div key={info.label} className="flex items-center gap-2.5 sm:gap-3">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 ${theme === "dark" ? "bg-teal-900/40" : "bg-teal-50"}`}>
                  <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${theme === "dark" ? "text-teal-400" : "text-teal-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={info.icon} />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">{info.label}</div>
                  <div className={`text-xs sm:text-sm font-semibold ${theme === "dark" ? "text-gray-200" : "text-gray-900"}`}>
                    {info.value}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Description + Gallery */}
      <section className={`py-12 sm:py-16 lg:py-24 transition-colors duration-300 ${theme === "dark" ? "bg-gray-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                Sobre{" "}
                <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                  {destination.name}
                </span>
              </h2>
              <p className={`text-base sm:text-lg leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
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
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative rounded-xl sm:rounded-2xl overflow-hidden ${i === 0 ? "col-span-2 aspect-video" : "aspect-square"}`}
                >
                  <Image
                    src={img}
                    alt={`${destination.name} ${i + 1}`}
                    fill
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                    className="object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className={`py-12 sm:py-16 lg:py-24 transition-colors duration-300 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12"
          >
            <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">Que hacer</span>
            <h2 className={`mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
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
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group p-5 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-500 ${
                  theme === "dark"
                    ? "bg-gray-800/60 border-gray-700/50 hover:border-teal-500/40"
                    : "bg-white border-gray-100 hover:border-teal-200 hover:shadow-lg"
                }`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <h3 className={`text-base sm:text-lg font-bold mb-1.5 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {activity.name}
                </h3>
                <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className={`py-12 sm:py-16 lg:py-24 transition-colors duration-300 ${theme === "dark" ? "bg-gray-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12"
          >
            <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase">Donde quedarse</span>
            <h2 className={`mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Alojamientos{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Recomendados</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {destination.accommodations.map((acc, i) => (
              <motion.a
                key={acc.name}
                href={acc.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group p-5 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-500 ${
                  theme === "dark"
                    ? "bg-gray-800/60 border-gray-700/50 hover:border-amber-500/40"
                    : "bg-white border-gray-100 hover:border-amber-200 hover:shadow-lg"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${typeColors[acc.type] || "from-gray-500 to-gray-600"}`}>
                    {typeLabels[acc.type] || acc.type}
                  </span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{acc.rating}</span>
                  </div>
                </div>
                <h3 className={`text-base sm:text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {acc.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                    {acc.currency === "COP"
                      ? `$${acc.pricePerNight.toLocaleString("es-CO")}`
                      : `US$${acc.pricePerNight}`}
                  </span>
                  <span className={`text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>/noche</span>
                </div>
                <div className="mt-3 flex items-center gap-1 text-teal-500 text-sm font-medium group-hover:gap-2 transition-all">
                  Ver disponibilidad
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className={`py-12 sm:py-16 lg:py-24 transition-colors duration-300 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12"
          >
            <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">Consejos</span>
            <h2 className={`mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Tips de Viaje
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {destination.tips.map((tip, i) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className={`p-5 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gray-800/60 border-gray-700/50"
                    : "bg-white border-gray-100"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <h3 className={`text-base sm:text-lg font-bold mb-1.5 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {tip.title}
                </h3>
                <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Links */}
      <section className={`py-12 sm:py-16 lg:py-24 transition-colors duration-300 ${theme === "dark" ? "bg-gray-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">Reserva ya</span>
            <h2 className={`mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Reserva tu{" "}
              <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">Aventura</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {destination.bookingLinks.map((link, i) => {
              const colors: Record<string, string> = {
                hotel: "from-blue-500 to-indigo-500",
                activity: "from-amber-500 to-orange-500",
                flight: "from-cyan-500 to-blue-500",
              };
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className={`group p-5 rounded-2xl border text-center transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-gray-800/60 border-gray-700/50 hover:border-teal-500/40"
                      : "bg-white border-gray-100 hover:shadow-lg"
                  }`}
                >
                  <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${colors[link.type] || "from-gray-500 to-gray-600"} flex items-center justify-center mb-3`}>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      {link.type === "hotel" ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      ) : link.type === "activity" ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      )}
                    </svg>
                  </div>
                  <h3 className={`font-bold mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{link.name}</h3>
                  <p className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                    {link.type === "hotel" ? "Alojamiento" : link.type === "activity" ? "Actividades" : "Vuelos"}
                  </p>
                </motion.a>
              );
            })}

            <motion.a
              href={destination.flightSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className={`group p-5 rounded-2xl border text-center transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gray-800/60 border-gray-700/50 hover:border-teal-500/40"
                  : "bg-white border-gray-100 hover:shadow-lg"
              }`}
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
              <h3 className={`font-bold mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Skyscanner</h3>
              <p className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>{destination.flightPriceFrom}</p>
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}
