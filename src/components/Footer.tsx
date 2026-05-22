import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
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
              <span className="text-2xl font-bold">Wandora</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Descubre lo extraordinario. Tu guía definitiva para explorar
              los destinos más increíbles del planeta.
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold text-white mb-4">Destinos</h3>
            <ul className="space-y-3">
              {[
                { name: "Cartagena", slug: "cartagena" },
                { name: "Medellín", slug: "medellin" },
                { name: "Cali", slug: "cali" },
                { name: "Bali", slug: "bali" },
                { name: "París", slug: "paris" },
                { name: "Tokio", slug: "tokyo" },
              ].map((dest) => (
                <li key={dest.slug}>
                  <Link
                    href={`/destinos/${dest.slug}`}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Wandora</h3>
            <ul className="space-y-3">
              {[
                "Sobre Nosotros",
                "Blog de Viajes",
                "Trabaja con Nosotros",
                "Contacto",
                "Política de Privacidad",
              ].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white mb-4">Síguenos</h3>
            <div className="flex gap-3">
              {["Instagram", "TikTok", "YouTube", "Twitter"].map((social) => (
                <div
                  key={social}
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-teal-600 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="text-xs font-medium text-gray-400 hover:text-white">
                    {social[0]}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              Comparte tus aventuras con
              <br />
              <span className="text-teal-400 font-medium">
                #WandoraTravel
              </span>
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Wandora. Todos los derechos
            reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Hecho con amor para los viajeros del mundo
          </p>
        </div>
      </div>
    </footer>
  );
}
