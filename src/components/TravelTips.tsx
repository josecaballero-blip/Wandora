"use client";

import { motion } from "framer-motion";

const tips = [
  {
    number: "01",
    title: "Investiga antes de viajar",
    description:
      "Conoce la cultura, costumbres y leyes del destino. Esto te ayudará a integrarte mejor y evitar problemas.",
    color: "from-teal-500 to-emerald-500",
  },
  {
    number: "02",
    title: "Viaja ligero",
    description:
      "Empaca solo lo esencial. Una maleta liviana te da libertad para moverte y explorar sin preocupaciones.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "03",
    title: "Prueba la comida local",
    description:
      "La gastronomía es la mejor forma de conocer una cultura. Atrévete a probar platos que nunca has visto.",
    color: "from-amber-500 to-orange-500",
  },
  {
    number: "04",
    title: "Habla con los locales",
    description:
      "Las mejores recomendaciones vienen de quienes viven ahí. Un 'hola' puede abrirte puertas increíbles.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "05",
    title: "Seguro de viaje siempre",
    description:
      "No importa el destino, un buen seguro de viaje te protege ante emergencias médicas y cancelaciones.",
    color: "from-rose-500 to-red-500",
  },
  {
    number: "06",
    title: "Desconéctate y vive el momento",
    description:
      "Deja el teléfono de vez en cuando. Los mejores recuerdos se crean cuando estás presente.",
    color: "from-indigo-500 to-violet-500",
  },
];

export default function TravelTips() {
  return (
    <section id="tips" className="py-24 lg:py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal-400 font-semibold text-sm tracking-widest uppercase">
            Consejos de Expertos
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Tips de{" "}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Viaje
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Consejos esenciales para que cada viaje sea una experiencia
            perfecta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-500 hover:bg-gray-800/80"
            >
              <div
                className={`text-6xl font-black bg-gradient-to-br ${tip.color} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
              >
                {tip.number}
              </div>
              <h3 className="mt-2 text-xl font-bold text-white">
                {tip.title}
              </h3>
              <p className="mt-3 text-gray-400 leading-relaxed">
                {tip.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
