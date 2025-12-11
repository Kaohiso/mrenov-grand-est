"use client";

import { useState, useEffect } from "react";
import ImageTextBlock from "@/components/ImageTextBlock";

interface HeroCarouselProps {
  items: any[];
  autoPlay?: boolean;
  interval?: number;
}

export default function HeroCarousel({
  items,
  autoPlay = true,
  interval = 5000,
}: HeroCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, autoPlay, interval]);

  const goNext = () => setIndex((prev) => (prev + 1) % items.length);
  const goPrev = () =>
    setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="relative w-full overflow-hidden bg-[#E1CFBF] py-16 px-4 md:px-10">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="shrink-0 w-full flex justify-center"
          >
            <div className="w-full md:w-4/5 lg:w-3/5">
              <ImageTextBlock
                {...item}
                rightImage={item.id % 2 === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goPrev}
        className="
          absolute left-2 sm:left-4 
          top-1/2 -translate-y-1/2 
          p-2 sm:p-3 hover:cursor-pointer
        "
      >
        <p className="text-lg sm:text-xl">&#10094;</p>
      </button>

      <button
        onClick={goNext}
        className="
          absolute right-2 sm:right-4 
          top-1/2 -translate-y-1/2 
          p-2 sm:p-3 hover:cursor-pointer
        "
      >
        <p className="text-lg sm:text-xl">&#10095;</p>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-2 h-2 sm:w-3 sm:h-3 rounded-full
              transition
              ${i === index ? "bg-softbrown" : "bg-white"}
            `}
          />
        ))}
      </div>
    </section>
  );
}
