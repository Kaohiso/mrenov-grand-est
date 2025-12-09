import EyeCatching from "@/app/eye-catching";
import Header from "@/components/Header";
import About from "@/app/about";
import HeroCarousel from "./carousel";
import { dataCarousel } from "@/data/carousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <EyeCatching />
      <main>
        <About />
        <HeroCarousel items={dataCarousel} />
      </main>
      <Footer />
    </div>
  );
}
