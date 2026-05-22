"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";
import WandoraLogo from "./WandoraLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled
    ? theme === "dark"
      ? "bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-700/50"
      : "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100"
    : "bg-transparent";

  const textColor = scrolled
    ? theme === "dark"
      ? "text-gray-100"
      : "text-gray-900"
    : "text-white";

  const linkColor = scrolled
    ? theme === "dark"
      ? "text-gray-300 hover:text-teal-400"
      : "text-gray-700 hover:text-teal-700"
    : "text-white/90 hover:text-white";

  const navLinks = [
    { href: "/#destinos", label: "Destinos" },
    { href: "/#experiencias", label: "Experiencias" },
    { href: "/#vuelos", label: "Vuelos" },
    { href: "/#conversor", label: "Conversor" },
    { href: "/#tips", label: "Tips" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <WandoraLogo size={36} />
              </motion.div>
              <span
                className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${textColor}`}
              >
                Wandora
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-5 lg:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 relative group ${linkColor}`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                  scrolled
                    ? theme === "dark"
                      ? "bg-gray-800 text-amber-400 hover:bg-gray-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
                aria-label="Cambiar tema"
              >
                {theme === "dark" ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                )}
              </button>

              <Link
                href="/#destinos"
                className="px-5 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105"
              >
                Explorar
              </Link>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-colors ${
                  scrolled
                    ? theme === "dark"
                      ? "text-amber-400"
                      : "text-gray-700"
                    : "text-white"
                }`}
                aria-label="Cambiar tema"
              >
                {theme === "dark" ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled
                    ? theme === "dark"
                      ? "text-gray-100"
                      : "text-gray-700"
                    : "text-white"
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
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-40 backdrop-blur-xl md:hidden pt-20 ${
              theme === "dark" ? "bg-gray-900/95" : "bg-white/95"
            }`}
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {[
                { href: "/#destinos", label: "Destinos" },
                { href: "/#experiencias", label: "Experiencias" },
                { href: "/#vuelos", label: "Vuelos" },
                { href: "/#conversor", label: "Conversor" },
                { href: "/#tips", label: "Tips de Viaje" },
                { href: "/#sobre", label: "Sobre Nosotros" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xl font-semibold transition-colors ${
                    theme === "dark"
                      ? "text-gray-100 hover:text-teal-400"
                      : "text-gray-800 hover:text-teal-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#destinos"
                onClick={() => setMenuOpen(false)}
                className="mt-4 px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-semibold rounded-full"
              >
                Explorar Colombia
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
