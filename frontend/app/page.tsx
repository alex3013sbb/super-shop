"use client";

import { useState } from "react";

const slides = [
  {
    title: "NEW\nCOLLECTION",
    season: "Summer\n2024",
    button: "Jetzt Entdecken",
    images: ["/images/collection-1-a.jpg", "/images/collection-1-b.jpg"],
  },
  {
    title: "STREET\nSTYLE",
    season: "Urban\nBasics",
    button: "Looks ansehen",
    images: ["/images/collection-2-a.jpg", "/images/collection-2-b.jpg"],
  },
  {
    title: "MINIMAL\nESSENTIALS",
    season: "Everyday\nWear",
    button: "Basics entdecken",
    images: ["/images/collection-3-a.jpg", "/images/collection-3-b.jpg"],
  },
  {
    title: "RECYCLED\nFASHION",
    season: "Rework\nEdition",
    button: "Mehr erfahren",
    images: ["/images/collection-4-a.jpg", "/images/collection-4-b.avif"],
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="bg-white">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-[1fr_1.4fr_1.4fr]">
        <div className="flex flex-col justify-center">
          <h1 className="whitespace-pre-line text-6xl font-black uppercase leading-none tracking-tight">
            {slide.title}
          </h1>

          <p className="mt-8 whitespace-pre-line text-xl font-semibold">
            {slide.season}
          </p>

          <button className="mt-10 w-fit cursor-pointer bg-gray-200 px-10 py-4 text-sm font-bold hover:bg-gray-300">
            {slide.button} →
          </button>
        </div>

        {slide.images.map((image, index) => (
          <div key={index} className="h-[420px] overflow-hidden bg-gray-100">
            <img
              src={image}
              alt={`Collection Bild ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-8 pb-16">
        <div className="flex items-center gap-6 text-xl font-bold">
          <button onClick={prevSlide} className="cursor-pointer">←</button>

          <span>
            {currentSlide + 1} / {slides.length}
          </span>

          <button onClick={nextSlide} className="cursor-pointer">→</button>
        </div>
      </section>
    </main>
  );
}