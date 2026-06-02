"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Product = {
  id: number;
  name: string;
  price: number;
  category: "men" | "women";
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Basic T-Shirt",
    price: 29.9,
    category: "men",
    image: "/images/collection-1-a.jpg",
  },
  {
    id: 2,
    name: "Oversize T-Shirt",
    price: 25.9,
    category: "men",
    image: "/images/collection-2-b.jpg",
  },
  {
    id: 3,
    name: "Denim Regular Fit",
    price: 49.9,
    category: "men",
    image: "/images/collection-3-a.jpg",
  },
  {
    id: 4,
    name: "Crewneck Sweater",
    price: 39.9,
    category: "men",
    image: "/images/collection-4-a.jpg",
  },
  {
    id: 5,
    name: "Linen Shirt",
    price: 34.9,
    category: "women",
    image: "/images/collection-1-b.jpg",
  },
  {
    id: 6,
    name: "Relaxed Blouse",
    price: 36.9,
    category: "women",
    image: "/images/collection-2-a.jpg",
  },
  {
    id: 7,
    name: "Minimal Dress",
    price: 59.9,
    category: "women",
    image: "/images/collection-3-b.jpg",
  },
  {
    id: 8,
    name: "Soft Knit Pullover",
    price: 42.9,
    category: "women",
    image: "/images/collection-4-b.avif",
  },
];

const categories = [
  { key: "all", label: "ALL" },
  { key: "men", label: "MEN" },
  { key: "women", label: "WOMEN" },
] as const;

function buildCategoryHref(category: string, q: string) {
  const params = new URLSearchParams();

  if (category !== "all") {
    params.set("category", category);
  }

  if (q) {
    params.set("q", q);
  }

  const query = params.toString();

  return query ? `/products?${query}` : "/products";
}

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const selectedCategory = (
    searchParams.get("category") || "all"
  ).toLowerCase();
  const q = (searchParams.get("q") || "").trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;

    const searchMatch =
      q.length === 0 || product.name.toLowerCase().includes(q);

    return categoryMatch && searchMatch;
  });

  return (
    <div className="mx-auto w-full max-w-7xl px-8 py-10">
      <div className="mb-8 flex flex-col gap-4 border-b border-gray-200 pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            Project Übersicht
          </p>

          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight md:text-4xl">
            Products
          </h1>
        </div>

        <p className="text-sm text-gray-600">
          {filteredProducts.length} Ergebnisse
        </p>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-2">
        {categories.map((category) => {
          const isActive = selectedCategory === category.key;

          return (
            <Link
              key={category.key}
              href={buildCategoryHref(category.key, q)}
              className={`rounded-full border px-4 py-2 text-xs font-bold tracking-wider transition ${
                isActive
                  ? "border-black bg-black text-white"
                  : "border-gray-300 bg-white text-black hover:border-black"
              }`}
            >
              {category.label}
            </Link>
          );
        })}
      </div>

      <section className="grid gap-8 lg:grid-cols-[250px_1fr]">
        <aside className="space-y-6 rounded-lg border border-gray-200 p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
              Suche
            </p>

            <p className="mt-2 text-sm text-gray-700">
              {q ? `"${q}"` : "Keine Suchanfrage"}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
              Kategorie
            </p>

            <p className="mt-2 text-sm uppercase text-gray-700">
              {selectedCategory === "all" ? "All" : selectedCategory}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
              Hinweis
            </p>

            <p className="mt-2 text-sm text-gray-700">
              Diese Übersicht zeigt Produkte nach Kategorie und Suche.
            </p>
          </div>
        </aside>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <article key={product.id} className="group">
              <div className="relative mb-3 aspect-[4/5] overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">{product.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-gray-500">
                    {product.category}
                  </p>
                </div>

                <p className="text-sm font-semibold">
                  {product.price.toFixed(2)} CHF
                </p>
              </div>
            </article>
          ))}

          {filteredProducts.length === 0 && (
            <div className="col-span-full rounded-lg border border-dashed border-gray-300 p-10 text-center text-sm text-gray-600">
              Keine Produkte gefunden. Versuche eine andere Suche oder
              Kategorie.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
