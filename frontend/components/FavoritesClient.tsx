"use client";

import Link from "next/link";
import { Trash2 } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { useFavorites } from "@/hooks/useFavorites";

export default function FavoritesClient() {
  const { favorites, removeAll } = useFavorites();

  return (
    <div className="mx-auto max-w-7xl px-8 py-10">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight">
            Meine Favoriten
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            {favorites.length} {favorites.length === 1 ? "Artikel" : "Artikel"}
          </p>
        </div>

        {favorites.length > 0 && (
          <button
            type="button"
            onClick={removeAll}
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-500 transition hover:text-black"
          >
            <Trash2 size={14} strokeWidth={1.8} />
            Alle entfernen
          </button>
        )}
      </div>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favorites.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
              <ProductCard
                id={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
              />
              <Link
                href="/products"
                className="flex w-full items-center justify-center gap-1.5 rounded border border-gray-300 bg-gray-100 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition hover:border-black hover:bg-white"
              >
                Jetzt Entdecken →
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 py-24 text-center">
          <p className="text-lg font-semibold">
            Noch keine Favoriten gespeichert.
          </p>
          <p className="text-sm text-gray-500">
            Klicke auf das Herz-Symbol bei einem Produkt, um es hier zu
            speichern.
          </p>
          <Link
            href="/products"
            className="mt-2 rounded border border-black bg-black px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
          >
            Jetzt shoppen
          </Link>
        </div>
      )}
    </div>
  );
}
