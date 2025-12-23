import Image from "next/image";

const trades = [
  {
    src: "/images/draw/plastering-tool.png",
    alt: "Plâtrerie",
    name: "Plâtrerie",
  },
  {
    src: "/images/draw/electricity.png",
    alt: "Installation électrique",
    name: "Électricité",
  },
  {
    src: "/images/draw/pipe.png",
    alt: "Travaux de plomberie",
    name: "Plomberie",
  },
  {
    src: "/images/draw/tiles.png",
    alt: "Pose de carrelage",
    name: "Carrelage",
  },
  {
    src: "/images/draw/window.png",
    alt: "Menuiserie intérieure et extérieure",
    name: "Menuiserie",
  },
  {
    src: "/images/draw/framework.png",
    alt: "Charpente bois",
    name: "Charpente",
  },
  {
    src: "/images/draw/roof.png",
    alt: "Couverture de toiture",
    name: "Couverture",
  },
  {
    src: "/images/draw/wheelbarrow.png",
    alt: "Gros œuvre et maçonnerie",
    name: "Gros œuvre",
  },
];

export default function Trades() {
  return (
    <section
      aria-labelledby="trades-heading"
      className="flex bg-[#E1CFBF]/50 py-10"
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2
          id="trades-heading"
          className="sr-only"
        >
          Nos métiers et expertises en rénovation
        </h2>

        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-4
            xl:grid-cols-8
            gap-6 
            place-items-center
          "
        >
          {trades.map((trade) => (
            <article
              key={trade.name}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32">
                <Image
                  src={trade.src}
                  alt={trade.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, (max-width: 1280px) 112px, 128px"
                />
              </div>
              <h3 className="mt-2 font-bold text-sm sm:text-base">
                {trade.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
