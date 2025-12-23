import Header from "@/components/Header";
import Gallery from "./gallery";
import fs from "fs";
import path from "path";
import Footer from "@/components/Footer";
import Trades from "./trades";
import { Metadata } from "next";
import ProjectsSchema from "./schema";

export const metadata: Metadata = {
  title: "Nos Projets de Rénovation – Plâtrerie, Électricité, Plomberie | MRenov Grand-Est",
  description:
    "Découvrez nos réalisations en rénovation : plâtrerie, électricité, plomberie, carrelage, menuiserie, charpente, couverture et gros œuvre dans le Grand-Est.",
  keywords: [
    "projets rénovation",
    "réalisations MRenov",
    "Grand-Est",
    "plâtrerie",
    "électricité",
    "plomberie",
    "carrelage",
    "menuiserie",
    "charpente",
    "couverture",
    "gros œuvre",
    "Nancy",
    "Seichamps"
  ],
  openGraph: {
    title: "Nos Projets de Rénovation | MRenov Grand-Est",
    description: "Découvrez nos réalisations en plâtrerie, électricité, plomberie, carrelage et plus",
    url: "https://mrenov-grand-est.com/projects",
    siteName: "MRenov",
    images: [
      {
        url: "/images/og-image-projects.jpg", // Image spécifique à cette page
        width: 1200,
        height: 630,
        alt: "Projets de rénovation MRenov dans le Grand-Est",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos Projets de Rénovation | MRenov",
    description: "Découvrez nos réalisations en rénovation complète",
    images: ["/images/og-image-projects.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mrenov-grand-est.com/projects",
  },
};

export default function Projects() {
  const imagesDir = path.join(process.cwd(), "public/images/gallery");
  const files = fs.readdirSync(imagesDir);

  const images = files
    .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
    .map((f) => `/images/gallery/${f}`);

  return (
    <div>
      <ProjectsSchema imageCount={images.length} />
      <Header />
      <main>
        <Trades />
        <Gallery images={images} />
      </main>
      <Footer />
    </div>
  );
}
