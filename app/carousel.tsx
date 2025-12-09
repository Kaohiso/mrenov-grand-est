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

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, autoPlay, interval]);

  // Navigation
  const goNext = () => setIndex((prev) => (prev + 1) % items.length);
  const goPrev = () =>
    setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="relative w-full overflow-hidden bg-[#E1CFBF] py-16">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className="min-w-full flex justify-center">
            <div className="w-3/4">
              <ImageTextBlock {...item} rightImage={item.id % 2 === 0} />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 hover:cursor-pointer"
      >
        <p className="text-xl">&#10094;</p>
      </button>

      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 hover:cursor-pointer"
      >
        <p className="text-xl">&#10095;</p>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-1.5 h-1.5 rounded-full
              transition
              ${i === index ? "bg-softbrown" : "bg-gray-200"}
            `}
          />
        ))}
      </div>
    </section>
  );
}
