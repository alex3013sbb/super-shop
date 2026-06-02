"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  Search,
  User,
  Heart,
  ShoppingBag,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={20} strokeWidth={1.7} />
          </button>

          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-wider"
          >
            SUPER SHOP
          </Link>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <input
            type="text"
            placeholder="Suche nach Produkt, Kollektion..."
            className="w-72 border-none bg-transparent text-xs outline-none placeholder:text-gray-400"
          />
          <Search
            size={17}
            strokeWidth={1.7}
            className="text-gray-500"
          />
        </div>

        <div className="flex items-center gap-5 text-gray-700">
          <Link href="/login">
            <User size={20} strokeWidth={1.7} />
          </Link>

          <Link href="/favorites">
            <Heart size={20} strokeWidth={1.7} />
          </Link>

          <Link href="/cart">
            <ShoppingBag size={20} strokeWidth={1.7} />
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-200">
          <nav className="px-8 py-6">
            <ul className="space-y-3 text-sm font-medium uppercase tracking-wide">
              <li>
                <Link href="/men">MEN</Link>
              </li>

              <li>
                <Link href="/women">WOMEN</Link>
              </li>

            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}