import Link from "next/link";
import WandoraLogo from "./WandoraLogo";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <WandoraLogo size={40} />
              <span className="text-2xl font-bold">Wandora</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
              Descubre la magia de Colombia y el mundo. Tu guia definitiva
              para explorar los destinos mas increibles con precios reales.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Colombia</h3>
            <ul className="space-y-2.5">
              {[
                { name: "Bogota", slug: "bogota" },
                { name: "Cartagena", slug: "cartagena" },
                { name: "Medellin", slug: "medellin" },
                { name: "Santa Marta", slug: "santa-marta" },
                { name: "San Andres", slug: "san-andres" },
                { name: "Eje Cafetero", slug: "eje-cafetero" },
                { name: "Cali", slug: "cali" },
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

          <div>
            <h3 className="font-semibold text-white mb-4">Wandora</h3>
            <ul className="space-y-2.5">
              {[
                "Sobre Nosotros",
                "Blog de Viajes",
                "Conversor de Moneda",
                "Vuelos Baratos",
                "Contacto",
                "Privacidad",
              ].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Siguenos</h3>
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

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Wandora. Todos los derechos
            reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Hecho con amor para los viajeros de Colombia y el mundo
          </p>
        </div>
      </div>
    </footer>
  );
}
