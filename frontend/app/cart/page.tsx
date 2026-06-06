"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export default function CartPage() {
  const { cartItems, total } = useCart();

  return (
    <div className="mx-auto max-w-7xl px-8 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-black uppercase tracking-tight">
          Warenkorb
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          {cartItems.length} Artikel
        </p>
      </div>

      {cartItems.length > 0 ? (
        <div>
          <p>Total: {total.toFixed(2)} €</p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 py-24 text-center">
          <ShoppingBag
            size={36}
            strokeWidth={1.6}
            className="text-gray-400"
          />

          <p className="text-lg font-semibold">
            Dein Warenkorb ist leer.
          </p>

          <p className="text-sm text-gray-500">
            Füge Produkte zum Warenkorb hinzu, um sie hier zu sehen.
          </p>

          <Link
            href="/products"
            className="mt-2 rounded border border-black bg-black px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
          >
            Jetzt shoppen
          </Link>
        </div>
      )}
    </div>
  );
}