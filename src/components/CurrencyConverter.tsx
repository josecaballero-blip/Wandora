"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";
import {
  type CurrencyCode,
  CURRENCY_NAMES,
  convertCurrency,
  formatPrice,
} from "@/lib/currency";

export default function CurrencyConverter() {
  const { theme } = useTheme();
  const [amount, setAmount] = useState(1000000);
  const [from, setFrom] = useState<CurrencyCode>("COP");
  const [to, setTo] = useState<CurrencyCode>("USD");

  const converted = convertCurrency(amount, from, to);

  const currencies: CurrencyCode[] = ["COP", "USD", "EUR"];

  return (
    <section
      id="conversor"
      className={`py-20 lg:py-28 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900/50" : "bg-emerald-50/50"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">
            Herramienta viajera
          </span>
          <h2
            className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Conversor de{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Moneda
            </span>
          </h2>
          <p
            className={`mt-4 text-base sm:text-lg max-w-xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Convierte entre pesos colombianos, dolares y euros al instante.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`rounded-3xl p-6 sm:p-8 shadow-xl border ${
            theme === "dark"
              ? "bg-gray-800/80 border-gray-700/50"
              : "bg-white border-gray-100"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Cantidad
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className={`w-full px-4 py-3 rounded-xl border text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500/40 transition-all ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-gray-50 border-gray-200 text-gray-900"
                }`}
              />
            </div>

            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                De
              </label>
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value as CurrencyCode)}
                className={`w-full px-4 py-3 rounded-xl border text-base font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/40 transition-all ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-gray-50 border-gray-200 text-gray-900"
                }`}
              >
                {currencies.map((c) => (
                  <option key={c} value={c}>
                    {c} - {CURRENCY_NAMES[c]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                A
              </label>
              <select
                value={to}
                onChange={(e) => setTo(e.target.value as CurrencyCode)}
                className={`w-full px-4 py-3 rounded-xl border text-base font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/40 transition-all ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-gray-50 border-gray-200 text-gray-900"
                }`}
              >
                {currencies.map((c) => (
                  <option key={c} value={c}>
                    {c} - {CURRENCY_NAMES[c]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <motion.div
            key={`${amount}-${from}-${to}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`mt-6 p-6 rounded-2xl text-center ${
              theme === "dark" ? "bg-gray-700/50" : "bg-teal-50"
            }`}
          >
            <p
              className={`text-sm mb-1 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {formatPrice(amount, from)} {from} =
            </p>
            <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
              {formatPrice(converted, to)} {to}
            </p>
            <p
              className={`mt-2 text-xs ${
                theme === "dark" ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Tasas de referencia. Consulta tu banco para tasas exactas.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
