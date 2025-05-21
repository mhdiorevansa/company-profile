import AboutUs from "@/components/about-us";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import StatisticSection from "@/components/statistics-information";

export default function Home() {
  return (
    <header className="mx-16 space-y-10 mb-10">
      <Navbar />
      <Hero />
      <section className="space-y-28">
        <StatisticSection />
        <AboutUs />
      </section>
    </header>
  );
}
