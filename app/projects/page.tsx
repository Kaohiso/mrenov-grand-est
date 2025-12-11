import Header from "@/components/Header";
import Gallery from "./gallery";
import fs from "fs";
import path from "path";
import Footer from "@/components/Footer";
import Trades from "./trades";

export default function Projects() {
  const imagesDir = path.join(process.cwd(), "public/images/gallery");
  const files = fs.readdirSync(imagesDir);

  const images = files
    .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
    .map((f) => `/images/gallery/${f}`);

  console.log(images);

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
