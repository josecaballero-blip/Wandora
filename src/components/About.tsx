"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/lib/ThemeContext";
import WandoraCharacter from "./WandoraCharacter";

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
            transition={{ duration: 0.7 }}
          >
            <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">
              Sobre Nosotros
            </span>
            <h2
              className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Conoce a{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                Wandora
              </span>
            </h2>
            <p
              className={`mt-5 text-base sm:text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Wandora nacio del amor por Colombia y las ganas de compartir
              sus destinos mas increibles con el mundo. Somos un equipo
              de viajeros apasionados que quiere ayudarte a planear tu
              proxima aventura con precios reales, recomendaciones honestas
              y toda la informacion que necesitas.
            </p>
            <p
              className={`mt-4 text-base sm:text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Desde Cartagena hasta el Amazonas, desde el Eje Cafetero
              hasta San Andres — cada destino ha sido cuidadosamente
              seleccionado y documentado para ti.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { number: "10+", label: "Ciudades Colombianas" },
                { number: "50+", label: "Alojamientos" },
                { number: "100+", label: "Actividades" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                    {stat.number}
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

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <WandoraCharacter size={240} />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className={`mt-4 text-center text-sm font-medium ${
                theme === "dark" ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Wandora — Tu companero de aventuras
            </motion.p>

            <div className="mt-8 grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-sm">
              {[
                "https://images.unsplash.com/photo-1533050487297-09b450131914?w=300&q=70&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=300&q=70&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1583997052103-b4a1cb974ce5?w=300&q=70&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=300&q=70&auto=format&fit=crop",
              ].map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`Wandora viajes ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 40vw, 150px"
                    className="object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
