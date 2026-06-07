"use client";

import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const { total } = useCart();
    const router = useRouter();

    const [shippingPrice, setShippingPrice] = useState(0);

    const grandTotal = total + shippingPrice;

    const handleConfirmOrder = () => {
        alert("Ihre Bestellung wurde erfolgreich aufgegeben.");
        router.push("/cart");
    };
    return (
      <main className="mx-auto max-w-7xl px-8 py-10">
        <h1 className="text-3xl font-black uppercase tracking-tight">Kasse</h1>
  
        <div className="mt-6 flex gap-8 text-xs text-gray-500">
          <span>1. Warenkorb</span>
          <span>›</span>
          <span>Adresse</span>
          <span>›</span>
          <span>Zahlung</span>
          <span>›</span>
          <span>Bestätigung</span>
        </div>
  
        <section className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="mb-6 text-sm font-bold uppercase">
              Lieferadresse
            </h2>
  
            <div className="mb-6 flex gap-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="type" defaultChecked />
                Privat
              </label>
  
              <label className="flex items-center gap-2">
                <input type="radio" name="type" />
                Geschäftlich
              </label>
            </div>
  
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Vorname"
                  className="border border-gray-300 px-4 py-3 text-sm outline-none"
                />
  
                <input
                  type="text"
                  placeholder="Nachname"
                  className="border border-gray-300 px-4 py-3 text-sm outline-none"
                />
              </div>
  
              <input
                type="text"
                placeholder="Strasse & Hausnummer"
                className="w-full border border-gray-300 px-4 py-3 text-sm outline-none"
              />
  
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="PLZ"
                  className="border border-gray-300 px-4 py-3 text-sm outline-none"
                />
  
                <input
                  type="text"
                  placeholder="Stadt"
                  className="border border-gray-300 px-4 py-3 text-sm outline-none"
                />
              </div>
  
              <select className="w-full border border-gray-300 px-4 py-3 text-sm outline-none">
                <option>Deutschland</option>
                <option>Schweiz</option>
                <option>Österreich</option>
              </select>
            </form>
          </div>
  
          <div className="border-l border-gray-200 pl-10">
          <h2 className="mb-6 text-sm font-bold uppercase">
        Versandmethode
        </h2>

        <div className="space-y-4 text-sm">
        <label className="flex justify-between gap-4">
            <span className="flex items-center gap-2">
            <input
                type="radio"
                name="shipping"
                checked={shippingPrice === 0}
                onChange={() => setShippingPrice(0)}
            />
            Standardversand 2–4 Werktage
            </span>
            <span>Kostenlos</span>
        </label>

        <label className="flex justify-between gap-4">
            <span className="flex items-center gap-2">
            <input
                type="radio"
                name="shipping"
                checked={shippingPrice === 4.99}
                onChange={() => setShippingPrice(4.99)}
            />
            Expressversand 1–2 Werktage
            </span>
            <span>4.99 CHF</span>
        </label>
        </div>

        <div className="mt-12">
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
            <span>
                {shippingPrice === 0
                ? "Kostenlos"
                : `${shippingPrice.toFixed(2)} CHF`}
            </span>
            </div>

            <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between font-bold">
                <span>Gesamtsumme</span>
                <span>{grandTotal.toFixed(2)} CHF</span>
            </div>
            </div>
        </div>

        <button
            type="button"
            onClick={handleConfirmOrder}
            className="mt-8 w-full bg-black py-3 text-sm font-bold text-white hover:bg-gray-800"
        >
            Bestellung bestätigen
        </button>
        </div>
          </div>
        </section>
      </main>
    );
  }