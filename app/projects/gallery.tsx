"use client";

import Masonry from "react-masonry-css";
import Image from "next/image";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  // Fonction pour générer des alt descriptifs basés sur le nom de fichier
  const getImageAlt = (src: string, index: number) => {
    const filename =
      src
        .split("/")
        .pop()
        ?.replace(/\.[^/.]+$/, "") || "";
    // Essayez de déduire le métier du nom de fichier si possible
    // Sinon, utilisez un alt générique mais descriptif
    return `Projet de rénovation MRenov ${index + 1} - ${filename}`;
  };

  return (
    <section
      aria-labelledby="gallery-heading"
      className="flex flex-col justify-center items-center my-8 gap-4"
    >
      <div className="flex flex-col w-full max-w-7xl px-4 gap-6">
        <header>
          <h1
            id="gallery-heading"
            className="text-darkblue font-bold text-3xl md:text-4xl mb-2"
          >
            Nos dernières réalisations
          </h1>
          <p className="text-gray-600 text-lg">
            Découvrez nos projets de rénovation achevés dans le Grand-Est :
            plâtrerie, électricité, plomberie, carrelage et bien plus.
          </p>
        </header>

        <Masonry
          breakpointCols={breakpointColumns}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((src, index) => (
            <figure key={index} className="mb-4">
              <Image
                src={src}
                width={600}
                height={600}
                alt={getImageAlt(src, index)}
                className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                loading={index < 8 ? "eager" : "lazy"} 
                sizes="(max-width: 500px) 100vw, (max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
              />
            </figure>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
