"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import ProductCard from "@/components/ui/ProductCard";

export type ProductOverviewItem = {
  id: number;
  name: string;
  price: number;
  category: "men" | "women";
  subcategory: "Hemden" | "Hosen" | "Jeans" | "Jacken" | "Shorts";
  image: string;
};

type ProductsOverviewClientProps = {
  products: ProductOverviewItem[];
  selectedCategory: string;
  q: string;
};

const subcategoryOptions: ProductOverviewItem["subcategory"][] = [
  "Hemden",
  "Hosen",
  "Jeans",
  "Jacken",
  "Shorts",
];

const sortOptions = [
  { key: "featured", label: "Sortieren nach" },
  { key: "price-asc", label: "Preis: Niedrig -> Hoch" },
  { key: "price-desc", label: "Preis: Hoch -> Niedrig" },
  { key: "name-asc", label: "Name: A -> Z" },
] as const;

type SortKey = (typeof sortOptions)[number]["key"];

function matchesCategory(
  product: ProductOverviewItem,
  selectedCategory: string,
) {
  if (selectedCategory === "all") {
    return true;
  }

  return product.category === selectedCategory;
}

const expandableOptions = ["Größe", "Farbe", "Preis", "Kollektion"] as const;
type ExpandableOption = (typeof expandableOptions)[number];

export default function ProductsOverviewClient({
  products,
  selectedCategory,
  q,
}: ProductsOverviewClientProps) {
  const [selectedSubcategories, setSelectedSubcategories] = useState<
    Array<ProductOverviewItem["subcategory"]>
  >([]);
  const [sortBy, setSortBy] = useState<SortKey>("featured");
  const [expandedSections, setExpandedSections] = useState<
    Set<ExpandableOption>
  >(new Set());

  const filteredAndSortedProducts = useMemo(() => {
    const normalizedQuery = q.toLowerCase();

    const filtered = products.filter((product) => {
      const categoryMatch = matchesCategory(product, selectedCategory);
      const searchMatch =
        normalizedQuery.length === 0 ||
        product.name.toLowerCase().includes(normalizedQuery);
      const subcategoryMatch =
        selectedSubcategories.length === 0 ||
        selectedSubcategories.includes(product.subcategory);

      return categoryMatch && searchMatch && subcategoryMatch;
    });

    if (sortBy === "price-asc") {
      return [...filtered].sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-desc") {
      return [...filtered].sort((a, b) => b.price - a.price);
    }

    if (sortBy === "name-asc") {
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [products, q, selectedCategory, selectedSubcategories, sortBy]);

  const title =
    selectedCategory === "all" ? "PRODUCTS" : selectedCategory.toUpperCase();

  const toggleSubcategory = (
    subcategory: ProductOverviewItem["subcategory"],
  ) => {
    setSelectedSubcategories((current) => {
      if (current.includes(subcategory)) {
        return current.filter((item) => item !== subcategory);
      }

      return [...current, subcategory];
    });
  };

  const toggleSection = (section: ExpandableOption) => {
    setExpandedSections((current) => {
      const next = new Set(current);
      if (next.has(section)) {
        next.delete(section);
      } else {
        next.add(section);
      }
      return next;
    });
  };

  const buildCategoryLink = (category: string) => {
    const params = new URLSearchParams();
    if (category !== "all") {
      params.set("category", category);
    }
    if (q) {
      params.set("q", q);
    }
    const query = params.toString();
    return query ? `/products?${query}` : "/products";
  };

  return (
    <section className="grid gap-8 lg:grid-cols-[220px_1fr]">
      <aside className="border-b border-gray-200 pb-6 lg:border-b-0 lg:border-r lg:pr-8 lg:pb-0">
        <h2 className="text-sm font-bold uppercase tracking-[0.12em]">
          Filtern
        </h2>

        <div className="mt-5 border-b border-gray-200 pb-5">
          <p className="text-sm font-semibold">Kategorie</p>
          <ul className="mt-3 space-y-2.5">
            {subcategoryOptions.map((option) => (
              <li key={option}>
                <label className="flex cursor-pointer items-center gap-2.5 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={selectedSubcategories.includes(option)}
                    onChange={() => toggleSubcategory(option)}
                    className="h-4 w-4 rounded-sm border-gray-300 text-black focus:ring-black"
                  />
                  <span>{option}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="divide-y divide-gray-200">
          {expandableOptions.map((sectionName) => {
            const isExpanded = expandedSections.has(sectionName);
            return (
              <div key={sectionName}>
                <button
                  type="button"
                  onClick={() => toggleSection(sectionName)}
                  className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold transition hover:text-gray-900"
                >
                  <span>{sectionName}</span>
                  <ChevronDown
                    size={16}
                    strokeWidth={2}
                    className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>
                {isExpanded && (
                  <div className="pb-4 text-sm text-gray-600">
                    <ul className="space-y-2">
                      <li>
                        <label className="flex cursor-pointer items-center gap-2">
                          <input type="checkbox" className="h-3 w-3 rounded" />{" "}
                          Option 1
                        </label>
                      </li>
                      <li>
                        <label className="flex cursor-pointer items-center gap-2">
                          <input type="checkbox" className="h-3 w-3 rounded" />{" "}
                          Option 2
                        </label>
                      </li>
                      <li>
                        <label className="flex cursor-pointer items-center gap-2">
                          <input type="checkbox" className="h-3 w-3 rounded" />{" "}
                          Option 3
                        </label>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>

      <div>
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="mb-4 text-4xl font-black uppercase tracking-tight">
              {title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {[
                ["all", "ALL"],
                ["men", "MEN"],
                ["women", "WOMEN"],
              ].map(([key, label]) => {
                const isActive = selectedCategory === key;
                return (
                  <Link
                    key={key}
                    href={buildCategoryLink(key)}
                    className={`rounded-full border px-4 py-2 text-xs font-bold tracking-wider transition ${
                      isActive
                        ? "border-black bg-black text-white"
                        : "border-gray-300 bg-white text-black hover:border-black"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <label htmlFor="sort-by">Sortieren nach</label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortKey)}
              className="rounded border border-gray-300 bg-white px-2 py-1.5 text-sm text-black outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.key} value={option.key}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="mt-6 rounded-lg border border-dashed border-gray-300 p-10 text-center text-sm text-gray-600">
            Keine Produkte gefunden. Versuche andere Filter oder Suchbegriffe.
          </div>
        )}
      </div>
    </section>
  );
}
