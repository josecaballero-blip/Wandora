import type { Metadata } from "next";
import { Nunito, Fredoka } from "next/font/google";
import { ThemeProvider } from "@/lib/ThemeContext";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wandora — Descubre la Magia de Colombia",
  description:
    "Explora los destinos mas magicos de Colombia y el mundo. Playas caribenas, ciudades vibrantes, selva amazonica, precios reales y recomendaciones de alojamiento.",
  keywords: [
    "turismo Colombia",
    "viajes Colombia",
    "Cartagena",
    "Medellin",
    "Bogota",
    "San Andres",
    "destinos exoticos",
    "aventura",
    "vuelos baratos Colombia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${nunito.variable} ${fredoka.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("wandora-theme");if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
