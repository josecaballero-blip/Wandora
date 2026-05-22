import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import Experiences from "@/components/Experiences";
import FlightDeals from "@/components/FlightDeals";
import CurrencyConverter from "@/components/CurrencyConverter";
import TravelTips from "@/components/TravelTips";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedDestinations />
        <Experiences />
        <FlightDeals />
        <CurrencyConverter />
        <TravelTips />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
