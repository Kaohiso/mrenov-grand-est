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
    "Découvrez l'expertise de MRenov : rénovation, bardage, modernisation des façades dans toute la région Grand-Est.",

  keywords: [
    "rénovation",
    "bardage",
    "façade",
    "Grand-Est",
    "Moselle",
    "Meurthe-et-Moselle",
    "Nancy",
    "plâterie",
    "électricité",
    "plomberie",
    "carrelage",
    "menuiserie",
    "charpente",
    "couverture",
    "gros oeuvre",
  ],
  authors: [{ name: "MRenov" }],
  openGraph: {
    title: "MRenov – Rénovation & Bardage dans le Grand-Est",
    description: "Expert en rénovation et bardage dans le Grand-Est",
    url: "https://mrenov-grand-est.com",
    siteName: "MRenov",
    images: [
      {
        url: "/images/og-image.png", 
        width: 1200,
        height: 630,
        alt: "MRenov - Rénovation Grand-Est",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos Projets de Rénovation | MRenov",
    description: "Découvrez nos réalisations en rénovation complète",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
   alternates: {
    canonical: 'https://mrenov-grand-est.com/',
    languages: {
      'fr-FR': 'https://mrenov-grand-est.com/',
    },
  },
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
