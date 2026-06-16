"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronDownIcon } from "../ui/icons";

const slides = [
  {
    id: 1,
    image: "/img/Home slider.svg",
    title: "Freshness Delivered to Your Door",
    description: "Quality groceries at affordable prices. Experience the best of fresh produce delivered straight to your home.",
  },
  {
    id: 2,
    image: "/img/Home slider.svg",
    title: "Best Deals on Seasonal Fruits",
    description: "Up to 50% off on selected items. Don't miss out on our limited-time seasonal offers.",
  },
  {
    id: 3,
    image: "/img/choco.png",
    title: "Premium Chocolates & Sweets",
    description: "Indulge in our collection of fine chocolates and delicious desserts, perfect for every occasion.",
  },
];

export const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 lg:px-10 py-4 lg:py-6">
        <div className="overflow-hidden rounded-xl lg:rounded-2xl shadow-sm relative group" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide) => (
              <div key={slide.id} className="relative min-w-full flex-[0_0_100%] h-[320px] sm:h-[400px] lg:h-[480px] xl:h-[550px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={slide.id === 1}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow-md transition-all hover:bg-brand hover:text-white opacity-0 group-hover:opacity-100 hidden sm:flex"
            onClick={scrollPrev}
          >
            <ChevronDownIcon className="h-6 w-6 rotate-90" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow-md transition-all hover:bg-brand hover:text-white opacity-0 group-hover:opacity-100 hidden sm:flex"
            onClick={scrollNext}
          >
            <ChevronDownIcon className="h-6 w-6 -rotate-90" />
          </button>
        </div>
      </div>
    </section>
  );
};
