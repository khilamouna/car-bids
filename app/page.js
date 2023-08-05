import Navbar from "../components/parts/Navbar";
import HeroSection from "../components/parts/HeroSection";
import Chronometer from "../components/parts/Chronometer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Chronometer />
      <HeroSection />
    </main>
  );
}
