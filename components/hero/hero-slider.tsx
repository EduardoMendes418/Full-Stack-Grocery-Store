"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "../ui/icons";

const slides = [
  {
    id: 1,
    badge: "Weekend Discount",
    title: "Get the best quality products at the lowest prices",
    description: "We have prepared special discounts for you on organic breakfast products.",
    image: "/img/slide/omega-squares.jpg",
    price: "$21.67",
    originalPrice: "$59.99",
    priceLabel: "Don't miss this limited time offer.",
    btnText: "Shop Now",
    btnLink: "/products?category=breakfast",
    bgColor: "bg-[#F3F4F6]",
    badgeColor: "bg-[#00B4B4]/10 text-[#00B4B4]",
  },
  {
    id: 2,
    badge: "Limited Offer",
    title: "Best Deals on Fresh Seasonal Fruits",
    description: "Up to 50% off on selected items. Experience the freshness of organic fruits delivered to your home.",
    image: "/img/slide/seasonal-fruits.jpg",
    price: "$14.99",
    originalPrice: "$29.99",
    priceLabel: "Available while stocks last.",
    btnText: "Shop Now",
    btnLink: "/products?category=fruits-vegetables",
    bgColor: "bg-[#F5F5F7]",
    badgeColor: "bg-orange-500/10 text-orange-600",
  },
  {
    id: 3,
    badge: "Sweet Discount",
    title: "Premium Chocolates & Desserts",
    description: "Indulge in our collection of fine chocolates and delicious desserts, perfect for every occasion.",
    image: "/img/choco.png",
    price: "$9.99",
    originalPrice: "$19.99",
    priceLabel: "Delicious treats at unbeatable prices.",
    btnText: "Shop Now",
    btnLink: "/products?category=snacks-desserts",
    bgColor: "bg-[#FBF7F4]",
    badgeColor: "bg-red-500/10 text-red-600",
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
              <div 
                key={slide.id} 
                className={`relative min-w-full flex-[0_0_100%] h-[400px] sm:h-[450px] lg:h-[480px] xl:h-[550px] ${slide.bgColor}`}
              >
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 h-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 py-6 md:py-0">
                  {/* Left Side Content */}
                  <div className="flex flex-col items-start justify-center flex-1 space-y-3 sm:space-y-4 lg:space-y-6 text-left order-2 md:order-1">
                    <span className={`inline-block px-3 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider ${slide.badgeColor}`}>
                      {slide.badge}
                    </span>
                    
                    <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                      {slide.title}
                    </h1>
                    
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 max-w-xl">
                      {slide.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                      <Link 
                        href={slide.btnLink} 
                        className="inline-flex items-center justify-center gap-2 bg-[#00B4B4] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-md transition-all hover:bg-[#009a9a] active:scale-95 shadow-md shadow-[#00B4B4]/20"
                      >
                        {slide.btnText}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                      
                      <div className="flex flex-col">
                        <div className="flex items-baseline">
                          <span className="text-lg sm:text-xl lg:text-2xl font-black text-red-600 leading-none">{slide.price}</span>
                          <span className="text-xs sm:text-sm line-through text-gray-400 font-semibold ml-2">{slide.originalPrice}</span>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-500 font-medium mt-1">{slide.priceLabel}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side Product Image */}
                  <div className="w-full md:w-1/2 h-[160px] sm:h-[220px] md:h-full flex items-center justify-center order-1 md:order-2">
                    <div className="relative w-full h-full max-h-[140px] sm:max-h-[200px] md:max-h-[380px] lg:max-h-[440px] aspect-square transition-transform duration-700 hover:scale-105 select-none">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority={slide.id === 1}
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
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
