"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export default function ProductCard({ id, name, price, imageUrl }: ProductCardProps) {
  const { toggle, isFavorite } = useFavorites();
  const liked = isFavorite(id);

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden border border-gray-200 bg-[#f4f4f2]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-[1.015]"
        />
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-black">{name}</p>
          <p className="mt-1 text-sm font-semibold text-black">
            {price.toFixed(2)} CHF
          </p>
        </div>

        <button
          type="button"
          onClick={() => toggle({ id, name, price, imageUrl })}
          aria-label={liked ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen"}
          className="mt-0.5 cursor-pointer text-gray-500 transition hover:text-black"
        >
          <Heart
            size={16}
            strokeWidth={1.8}
            fill={liked ? "currentColor" : "none"}
          />
        </button>
      </div>
    </article>
  );
}
