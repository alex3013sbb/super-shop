"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export default function CartPage() {
  const {
    cartItems,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="mx-auto max-w-7xl px-8 py-10">
        <h1 className="text-3xl font-black uppercase tracking-tight">
          Warenkorb
        </h1>

        <p className="mt-1 text-sm text-gray-500">0 Artikel</p>

        <div className="flex flex-col items-center gap-4 py-24 text-center">
          <p className="text-lg font-semibold">Dein Warenkorb ist leer.</p>
          <p className="text-sm text-gray-500">
            Füge Produkte hinzu, um eine Bestellung aufzugeben.
          </p>

          <Link
            href="/products"
            className="mt-2 rounded bg-black px-8 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-gray-800"
          >
            Jetzt shoppen
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-8 py-10">
      <h1 className="text-3xl font-black uppercase tracking-tight">
        Warenkorb
      </h1>

      <p className="mt-1 text-sm text-gray-500">
        {cartItems.length} Artikel
      </p>

      <section className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_420px]">
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[90px_1fr_auto_auto] items-center gap-6"
            >
              <div className="relative h-28 w-20 overflow-hidden bg-gray-100">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-sm font-bold">{item.name}</h2>
                <p className="mt-1 text-xs text-gray-500">Farbe: Schwarz</p>
                <p className="text-xs text-gray-500">Grösse: M</p>
              </div>

              <p className="text-sm font-semibold">
                {(item.price * item.quantity).toFixed(2)} CHF
              </p>

              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-300">
                <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1">
                  <Minus size={12} />
                </button>

                <span className="px-3 text-xs">{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1">
                  <Plus size={12} />
                </button>
                </div>

                <button onClick={() => removeItem(item.id)}>
                  <X size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="border-l border-gray-200 pl-10">
          <h2 className="mb-6 text-sm font-bold uppercase">
            Bestellübersicht
          </h2>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span>Zwischensumme</span>
              <span>{total.toFixed(2)} CHF</span>
            </div>

            <div className="flex justify-between">
              <span>Versand</span>
              <span>Kostenlos</span>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between font-bold">
                <span>Gesamtsumme</span>
                <span>{total.toFixed(2)} CHF</span>
              </div>
            </div>
          </div>

          <Link
            href="/checkout"
            className="mt-8 block w-full bg-black py-3 text-center text-sm font-bold text-white hover:bg-gray-800"
          >
            Zur Kasse
          </Link>

          <Link
            href="/products"
            className="mt-3 block w-full bg-gray-100 py-3 text-center text-sm font-semibold hover:bg-gray-200"
          >
            Weiter einkaufen →
          </Link>
        </aside>
      </section>
    </main>
  );
}