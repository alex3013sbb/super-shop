"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { mockCatalog } from "@/lib/api/productsMock";

const sizeLabels = ["S", "M", "L", "XL"];

const colorLabels: Record<string, string> = {
  black: "Schwarz",
  white: "Weiss",
  gray: "Grau",
  blue: "Blau",
  green: "Grün",
  red: "Rot",
  beige: "Beige",
};

const colorClasses: Record<string, string> = {
  black: "bg-black",
  white: "bg-white",
  gray: "bg-gray-300",
  blue: "bg-blue-700",
  green: "bg-green-700",
  red: "bg-red-700",
  beige: "bg-[#d6c1a3]",
};

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params.id);

  const product = mockCatalog.products.find((item) => item.id === id);

  const images = product
    ? [
        product.imageUrl,
        product.imageUrl,
        product.imageUrl,
      ]
    : [];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-8 py-12">
        <h1 className="text-3xl font-black uppercase">
          Produkt nicht gefunden
        </h1>

        <Link href="/products" className="mt-4 inline-block underline">
          Zurück zu Produkten
        </Link>
      </main>
    );
  }

  const colorName =
    colorLabels[product.availableColors[0]] ?? product.availableColors[0];

  return (
    <main className="mx-auto max-w-7xl px-8 py-8">
      <div className="mb-8 flex flex-wrap items-center gap-1 text-xs text-gray-500">
        <Link href="/" className="hover:text-black">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-black">
          Products
        </Link>
        <span>/</span>
        <Link
          href={`/products?category=${product.category}`}
          className="capitalize hover:text-black"
        >
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-black">{product.name}</span>
      </div>

      <section className="grid grid-cols-1 gap-12 lg:grid-cols-[80px_1.3fr_1fr]">
        <div className="flex gap-4 lg:flex-col">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`h-24 w-20 overflow-hidden border bg-gray-100 ${
                selectedImage === image ? "border-black" : "border-gray-200"
              }`}
            >
              <img
                src={image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center bg-gray-100">
          <img
            src={selectedImage}
            alt={product.name}
            className="max-h-[620px] w-full object-contain"
          />
        </div>

        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight">
            {product.name}
          </h1>

          <p className="mt-3 text-lg font-semibold">
            {product.price.toFixed(2)} CHF
          </p>

          <div className="mt-6">
            <p className="text-sm font-semibold">Farbe: {colorName}</p>

            <div className="mt-3 flex gap-3">
              {product.availableColors.map((color) => (
                <span
                  key={color}
                  className={`h-5 w-5 rounded-full border border-black/30 ${
                    colorClasses[color] ?? "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="font-semibold">Grösse:</span>
              <span className="text-gray-500 underline">Grössentabelle</span>
            </div>

            <div className="flex gap-2">
              {(product.availableSizes.length > 0
                ? product.availableSizes
                : sizeLabels
              ).map((size) => (
                <button
                  key={size}
                  className="border border-gray-300 px-4 py-2 text-xs font-semibold hover:border-black"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-5 text-sm font-semibold text-green-600">
            ● {product.inStock ? "Auf Lager" : "Nicht verfügbar"}
          </p>

          <button className="mt-4 w-full bg-black py-3 text-sm font-bold text-white hover:bg-gray-800">
            In den Warenkorb
          </button>

          <button className="mt-3 w-full bg-gray-100 py-3 text-sm font-semibold hover:bg-gray-200">
            Zu Favoriten ♡
          </button>

          <div className="mt-8 divide-y border-t border-gray-200 text-sm">
            <details className="py-4">
              <summary className="cursor-pointer font-semibold">
                Beschreibung
              </summary>
              <p className="mt-3 text-gray-600">
                Dieses Produkt gehört zur Kollektion {product.collection}.
              </p>
            </details>

            <details className="py-4">
              <summary className="cursor-pointer font-semibold">
                Material & Pflege
              </summary>
              <p className="mt-3 text-gray-600">
                Pflegeleichtes Material. Maschinenwäsche bei 30°C.
              </p>
            </details>

            <details className="py-4">
              <summary className="cursor-pointer font-semibold">
                Versand & Rückgabe
              </summary>
              <p className="mt-3 text-gray-600">
                Standardversand 2–4 Werktage. Rückgabe innerhalb von 14 Tagen.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}