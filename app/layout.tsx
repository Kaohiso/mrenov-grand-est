import type { Metadata } from "next";
import { Libre_Baskerville, Lato } from "next/font/google";
import "./globals.css";
import LocalBusinessSchema from "./schema";

const geLibreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap", // améliore le rendu pendant le chargement
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  preload: true,
});

const geLato = Lato({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-lato",
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title:
    "MRenov Grand-Est – Rénovation et pose de bardage pour particuliers et professionnels",
  description:
    "MRenov est une entreprise spécialisée dans la rénovation dans " +
    "toute la région Grand Est, avec un savoir-faire particulier dans la " +
    "pose de bardage. Nous accompagnons particuliers et professionnels pour " +
    "moderniser, isoler et valoriser leurs façades grâce à des solutions " +
    "durables et esthétiques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <LocalBusinessSchema />
      </head>
      <body
        className={`${geLibreBaskerville.variable} ${geLato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
