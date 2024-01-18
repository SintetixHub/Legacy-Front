import HeroSection from "../components/Home/HeroSection";
import MainSection from "../components/Home/MainSection";

export default function Home() {
  return (
    <main className="max-w-5xl py-12 m-auto">
      <HeroSection />
      <MainSection />
    </main>
  );
}
