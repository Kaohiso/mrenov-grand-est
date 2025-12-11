import Image from "next/image";

const trades = [
  { src: "/images/draw/plastering-tool.png", alt: "Plâtrerie" },
  { src: "/images/draw/electricity.png", alt: "Electricité" },
  { src: "/images/draw/pipe.png", alt: "Plomberie" },
  { src: "/images/draw/tiles.png", alt: "Carrelage" },
  { src: "/images/draw/window.png", alt: "Menuiserie" },
  { src: "/images/draw/framework.png", alt: "Charpente" },
  { src: "/images/draw/roof.png", alt: "Couverture" },
  { src: "/images/draw/wheelbarrow.png", alt: "Gros œuvre" },
];

export default function Trades() {
  return (
    <section className="flex bg-[#E1CFBF]/50 py-6">
      <div
        className="
          w-full 
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-6 
          xl:grid-cols-8
          gap-6 
          place-items-center
        "
      >
        {trades.map((trade) => (
          <div key={trade.alt} className="flex flex-col items-center text-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32">
              <Image
                src={trade.src}
                alt={trade.alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-2 font-bold">{trade.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
