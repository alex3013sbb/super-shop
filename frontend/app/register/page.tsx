"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwörter stimmen nicht überein.");
      return;
    }

    alert("Konto erfolgreich erstellt!");
    router.push("/login");
  };

  return (
    <main className="mx-auto max-w-7xl px-8 py-16">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Left side */}
        <div>
          <h1 className="text-5xl font-black uppercase">Konto erstellen</h1>

          <p className="mt-4 text-lg text-gray-500">
            Erstelle dein Konto und starte dein Einkaufserlebnis.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <input
              type="text"
              placeholder="Vorname"
              required
              value={formData.firstName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  firstName: e.target.value,
                })
              }
              className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-black"
            />

            <input
              type="text"
              placeholder="Nachname"
              required
              value={formData.lastName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  lastName: e.target.value,
                })
              }
              className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="E-Mail"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-black"
            />

            <input
              type="password"
              placeholder="Passwort"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
              className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-black"
            />

            <input
              type="password"
              placeholder="Passwort bestätigen"
              required
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  confirmPassword: e.target.value,
                })
              }
              className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-black"
            />

            <button
              type="submit"
              className="w-full bg-black py-4 text-lg font-semibold text-white transition hover:bg-gray-800"
            >
              Konto erstellen
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-3xl font-black uppercase">
            Bereits registriert?
          </h2>

          <p className="mt-4 text-gray-500">
            Melde dich mit deinem bestehenden Konto an.
          </p>

          <ul className="mt-8 space-y-3 text-lg">
            <li>✓ Schneller Checkout</li>
            <li>✓ Bestellverfolgung</li>
            <li>✓ Wunschliste speichern</li>
            <li>✓ Exklusive Angebote</li>
          </ul>

          <button
            onClick={() => router.push("/login")}
            className="mt-10 w-full bg-gray-100 py-4 text-lg transition hover:bg-gray-200"
          >
            Zum Login
          </button>
        </div>
      </div>
    </main>
  );
}