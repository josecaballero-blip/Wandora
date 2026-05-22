import { notFound } from "next/navigation";
import { destinations, getDestinationBySlug } from "@/lib/destinations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationDetail from "./DestinationDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return { title: "Destino no encontrado — Wandora" };

  return {
    title: `${destination.name} — Wandora`,
    description: destination.description,
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <DestinationDetail destination={destination} />
      </main>
      <Footer />
    </>
  );
}
