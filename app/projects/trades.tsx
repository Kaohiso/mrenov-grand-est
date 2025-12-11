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
    <section className="flex bg-[#E1CFBF]/50">
      {/* Left image */}
      {/* <div className="relative w-1/3 h-96">
        <Image
          src="/images/trades/trades.png"
          alt="Métiers"
          fill
          className="object-cover"
          priority
        />
      </div> */}

      {/* Right grid */}
      <div className="w-full grid grid-cols-8 gap-4 py-4  font-bold">
        {/* <p className="col-span-8 text-2xl">Nos différents corps de métier</p> */}

        {trades.map((trade) => (
          <div key={trade.alt} className="flex flex-col items-center">
            <div className="relative w-32 h-32">
              <Image
                src={trade.src}
                alt={trade.alt}
                fill
                className="object-cover"
              />
            </div>
            <p>{trade.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
