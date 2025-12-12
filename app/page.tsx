import EyeCatching from "@/app/eye-catching";
import Header from "@/components/Header";
import About from "@/app/about";
import HeroCarousel from "./carousel";
import { dataCarousel } from "@/data/carousel";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MRenov – Rénovation & Bardage dans le Grand-Est",
  description:
    "Découvrez l’expertise de MRenov : rénovation, bardage, modernisation des façades dans toute la région Grand-Est.",
};

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
