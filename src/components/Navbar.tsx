"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    scrolled
                      ? "bg-gradient-to-br from-teal-600 to-emerald-500"
                      : "bg-white/20 backdrop-blur-sm"
                  }`}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <span
                className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Wandora
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {[
                { href: "/#destinos", label: "Destinos" },
                { href: "/#experiencias", label: "Experiencias" },
                { href: "/#tips", label: "Tips de Viaje" },
                { href: "/#sobre", label: "Sobre Nosotros" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 relative group ${
                    scrolled
                      ? "text-gray-700 hover:text-teal-700"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <Link
                href="/#destinos"
                className="px-5 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105"
              >
                Explorar Ahora
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden pt-24"
          >
            <div className="flex flex-col items-center gap-8 p-8">
              {[
                { href: "/#destinos", label: "Destinos" },
                { href: "/#experiencias", label: "Experiencias" },
                { href: "/#tips", label: "Tips de Viaje" },
                { href: "/#sobre", label: "Sobre Nosotros" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-semibold text-gray-800 hover:text-teal-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#destinos"
                onClick={() => setMenuOpen(false)}
                className="mt-4 px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-semibold rounded-full"
              >
                Explorar Ahora
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
