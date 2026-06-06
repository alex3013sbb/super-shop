"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import type {
  FilterOptionsResponse,
  ProductCategoryKey,
  ProductColorCode,
  ProductListResponse,
  ProductSizeCode,
  ProductSortKey,
} from "@/types/api";

type ProductsOverviewClientProps = {
  productList: ProductListResponse;
  filterOptions: FilterOptionsResponse;
  selectedCategory: ProductCategoryKey;
  q: string;
};

const sortOptions: { key: ProductSortKey; label: string }[] = [
  { key: "featured", label: "Sortieren nach" },
  { key: "newest", label: "Neueste zuerst" },
  { key: "price-asc", label: "Preis: Niedrig → Hoch" },
  { key: "price-desc", label: "Preis: Hoch → Niedrig" },
  { key: "name-asc", label: "Name: A → Z" },
];

const expandableSections = ["Größe", "Farbe", "Preis", "Kollektion"] as const;
type ExpandableSection = (typeof expandableSections)[number];

// human-readable labels for coded values
const sizeLabels: Record<ProductSizeCode, string> = {
  XXS: "XXS",
  XS: "XS",
  S: "S",
  M: "M",
  L: "L",
  XL: "XL",
  XXL: "XXL",
};

const colorLabels: Record<ProductColorCode, string> = {
  black: "Schwarz",
  white: "Weiss",
  gray: "Grau",
  blue: "Blau",
  green: "Grün",
  red: "Rot",
  beige: "Beige",
};

export default function ProductsOverviewClient({
  productList,
  filterOptions,
  selectedCategory,
  q,
}: ProductsOverviewClientProps) {
  const [selectedSizes, setSelectedSizes] = useState<ProductSizeCode[]>([]);
  const [selectedColors, setSelectedColors] = useState<ProductColorCode[]>([]);
  const [sortBy, setSortBy] = useState<ProductSortKey>("featured");
  const [expandedSections, setExpandedSections] = useState<
    Set<ExpandableSection>
  >(new Set());
  const [priceMin, setPriceMin] = useState<number>(
    filterOptions.priceRange.min,
  );
  const [priceMax, setPriceMax] = useState<number>(
    filterOptions.priceRange.max,
  );

  const displayedProducts = useMemo(() => {
    let result = productList.items.filter((product) => {
      const sizeMatch =
        selectedSizes.length === 0 ||
        product.availableSizes.some((s) => selectedSizes.includes(s));
      const colorMatch =
        selectedColors.length === 0 ||
        product.availableColors.some((c) => selectedColors.includes(c));
      const priceMatch = product.price >= priceMin && product.price <= priceMax;

      return sizeMatch && colorMatch && priceMatch;
    });

    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "newest") {
      result = [...result].sort((a, b) => b.id - a.id);
    }

    return result;
  }, [
    productList.items,
    selectedSizes,
    selectedColors,
    sortBy,
    priceMin,
    priceMax,
  ]);

  const title =
    selectedCategory === "all" ? "PRODUCTS" : selectedCategory.toUpperCase();

  const buildCategoryLink = (category: string) => {
    const params = new URLSearchParams();
    if (category !== "all") params.set("category", category);
    if (q) params.set("q", q);
    const query = params.toString();
    return query ? `/products?${query}` : "/products";
  };

  const toggleSection = (section: ExpandableSection) => {
    setExpandedSections((current) => {
      const next = new Set(current);
      next.has(section) ? next.delete(section) : next.add(section);
      return next;
    });
  };

  const toggleSize = (size: ProductSizeCode) => {
    setSelectedSizes((current) =>
      current.includes(size)
        ? current.filter((s) => s !== size)
        : [...current, size],
    );
  };

  const toggleColor = (color: ProductColorCode) => {
    setSelectedColors((current) =>
      current.includes(color)
        ? current.filter((c) => c !== color)
        : [...current, color],
    );
  };

  const hasActiveFilters =
    selectedSizes.length > 0 ||
    selectedColors.length > 0 ||
    priceMin !== filterOptions.priceRange.min ||
    priceMax !== filterOptions.priceRange.max;

  const resetFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceMin(filterOptions.priceRange.min);
    setPriceMax(filterOptions.priceRange.max);
  };

  const activeSizes = filterOptions.sizes.filter((s) => s.count > 0);
  const activeColors = filterOptions.colors.filter((c) => c.count > 0);
  const activeCollections = filterOptions.collections.filter(
    (c) => c.count > 0,
  );

  return (
    <section className="grid gap-8 lg:grid-cols-[220px_1fr]">
      {/* ── Sidebar ── */}
      <aside className="border-b border-gray-200 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-[0.12em]">
            Filtern
          </h2>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="cursor-pointer text-xs text-gray-500 underline underline-offset-2 hover:text-black transition"
            >
              Zurücksetzen
            </button>
          )}
        </div>

        {/* expandable filter sections */}
        <div className="mt-4 divide-y divide-gray-200">
          {expandableSections.map((sectionName) => {
            const isExpanded = expandedSections.has(sectionName);
            return (
              <div key={sectionName}>
                <button
                  type="button"
                  onClick={() => toggleSection(sectionName)}
                  className="flex w-full cursor-pointer items-center justify-between py-4 text-left text-sm font-semibold transition hover:text-gray-900"
                >
                  <span>{sectionName}</span>
                  <ChevronDown
                    size={16}
                    strokeWidth={2}
                    className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>

                {isExpanded && sectionName === "Größe" && (
                  <div className="pb-4">
                    <ul className="space-y-2">
                      {activeSizes.map(({ code, count }) => (
                        <li key={code}>
                          <label className="flex cursor-pointer items-center gap-2.5 text-sm text-gray-700">
                            <input
                              type="checkbox"
                              checked={selectedSizes.includes(code)}
                              onChange={() => toggleSize(code)}
                              className="h-4 w-4 rounded-sm border-gray-300"
                            />
                            <span>{sizeLabels[code]}</span>
                            <span className="ml-auto text-xs text-gray-400">
                              ({count})
                            </span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {isExpanded && sectionName === "Farbe" && (
                  <div className="pb-4">
                    <ul className="space-y-2">
                      {activeColors.map(({ code, count }) => (
                        <li key={code}>
                          <label className="flex cursor-pointer items-center gap-2.5 text-sm text-gray-700">
                            <input
                              type="checkbox"
                              checked={selectedColors.includes(code)}
                              onChange={() => toggleColor(code)}
                              className="h-4 w-4 rounded-sm border-gray-300"
                            />
                            <span>{colorLabels[code]}</span>
                            <span className="ml-auto text-xs text-gray-400">
                              ({count})
                            </span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {isExpanded && sectionName === "Preis" && (
                  <div className="pb-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span>CHF</span>
                      <input
                        type="number"
                        min={filterOptions.priceRange.min}
                        max={priceMax}
                        value={priceMin}
                        onChange={(e) => setPriceMin(Number(e.target.value))}
                        className="w-20 rounded border border-gray-300 px-2 py-1 text-sm outline-none"
                      />
                      <span>–</span>
                      <input
                        type="number"
                        min={priceMin}
                        max={filterOptions.priceRange.max}
                        value={priceMax}
                        onChange={(e) => setPriceMax(Number(e.target.value))}
                        className="w-20 rounded border border-gray-300 px-2 py-1 text-sm outline-none"
                      />
                    </div>
                    <p className="text-xs text-gray-400">
                      Verfügbar: CHF {filterOptions.priceRange.min} – CHF{" "}
                      {filterOptions.priceRange.max}
                    </p>
                  </div>
                )}

                {isExpanded && sectionName === "Kollektion" && (
                  <div className="pb-4">
                    <ul className="space-y-2">
                      {activeCollections.map(({ code, label, count }) => (
                        <li
                          key={code}
                          className="flex items-center justify-between text-sm text-gray-700"
                        >
                          <span className="capitalize">{label}</span>
                          <span className="text-xs text-gray-400">
                            ({count})
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>

      {/* ── Main content ── */}
      <div>
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="mb-4 text-4xl font-black uppercase tracking-tight">
              {title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  ["all", "ALL"],
                  ["men", "MEN"],
                  ["women", "WOMEN"],
                ] as [string, string][]
              ).map(([key, label]) => {
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

          <div className="flex items-center gap-2 text-sm text-gray-700">
            <label htmlFor="sort-by" className="font-semibold">
              Sortieren nach
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as ProductSortKey)}
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

        <p className="mb-5 text-xs text-gray-500">
          {displayedProducts.length} Ergebnisse
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>

        {displayedProducts.length === 0 && (
          <div className="mt-6 rounded-lg border border-dashed border-gray-300 p-10 text-center text-sm text-gray-600">
            Keine Produkte gefunden. Versuche andere Filter oder Suchbegriffe.
          </div>
        )}
      </div>
    </section>
  );
}
