import Header from "@/components/Header";
import Gallery from "./gallery";
import fs from "fs";
import path from "path";
import Footer from "@/components/Footer";
import Trades from "./trades";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MRenov – Projets de rénovation : Plâtrerie, Électricité, Plomberie, Carrelage, Menuiserie, Charpente, Couverture, Gros œuvre",
  description:
    "Découvrez les réalisations de MRenov : plâtrerie, électricité, plomberie, carrelage, menuiserie, charpente, couverture et gros œuvre. Nos projets reflètent notre expertise en rénovation dans tout le Grand-Est.",
};

export default function Projects() {
  const imagesDir = path.join(process.cwd(), "public/images/gallery");
  const files = fs.readdirSync(imagesDir);

  const images = files
    .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
    .map((f) => `/images/gallery/${f}`);

  return (
    <div>
      <Header />
      <main>
        <Trades />
        <Gallery images={images} />
      </main>
      <Footer />
    </div>
  );
}
