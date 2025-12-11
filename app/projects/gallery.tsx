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

  return (
    <section className="flex flex-col justify-center items-center my-4 gap-4">
      <div className="flex flex-col w-3/4 gap-4">
        <h1 className="text-darkblue font-bold text-xl">
          Nos dernières réalisations
        </h1>
        <Masonry
          breakpointCols={breakpointColumns}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              width={600}
              height={600}
              alt={`image-${index}`}
              className="w-full h-auto object-cover"
            />
          ))}
        </Masonry>
      </div>
    </section>
  );
}
