import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <header className="mx-16 space-y-10">
      <Navbar />
      <Hero />
    </header>
  );
}
