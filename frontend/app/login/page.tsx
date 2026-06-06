"use client";

import Link from "next/link";
import { useState } from "react";
import { login } from "@/lib/api/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    try {
      await login(email, password);

      console.log("Login erfolgreich");
    } catch {
      setError("Login fehlgeschlagen");
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-8 py-12">
      <div className="w-full flex justify-around h-[60vh]">
        <div className="w-[35vw] flex flex-col justify-center">
          <h1 className="mb-2 text-3xl font-black uppercase">
            Anmelden
          </h1>

          <p className="mb-8 text-sm text-gray-500">
            Melde dich an, um fortzufahren.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 py-3"
            />

            <input
              type="password"
              placeholder="Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-4 py-3"
            />

            <button
              type="submit"
              className="w-full bg-black py-3 text-white"
            >
              Anmelden
            </button>
          </form>

          {error && (
            <p className="mt-4 text-sm text-red-500">
              {error}
            </p>
          )}

          
        </div>

        <div className="w-[35vw] flex flex-col justify-center">
          <h2 className="mb-4 text-xl font-bold uppercase">
            Neu bei Super Shop?
          </h2>

          <p className="mb-6 text-sm text-gray-500">
            Erstelle ein Konto und profitiere von exklusiven Vorteilen.
          </p>

          <ul className="mb-8 space-y-2 text-sm">
            <li>✓ Schneller Checkout</li>
            <li>✓ Bestellverfolgung</li>
            <li>✓ Exklusive Angebote</li>
            <li>✓ Wunschliste speichern</li>
          </ul>

          <Link
            href="/register"
            className="inline-block bg-gray-200 px-8 py-3 text-sm"
          >
            Konto erstellen
          </Link>
        </div>
      </div>
    </main>
  );
}