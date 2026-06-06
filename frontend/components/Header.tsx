"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, Search, User, Heart, ShoppingBag } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const { favorites } = useFavorites();

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = searchTerm.trim();

    if (!query) {
      router.push("/products");
      return;
    }

    router.push(`/products?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      {/* Top bar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        {/* Logo and menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="cursor-pointer"
          >
            <Menu size={20} strokeWidth={1.7} />
          </button>

          <Link href="/" className="text-sm font-bold uppercase tracking-wider">
            SUPER SHOP
          </Link>
        </div>

        {/* Search */}
        <form
          onSubmit={handleSearchSubmit}
          className="group hidden cursor-text items-center gap-2 rounded-full border border-transparent px-4 py-2 transition-all duration-200 hover:border-gray-200 hover:bg-gray-100 focus-within:border-gray-300 focus-within:bg-gray-100 md:flex"
        >
          <Search
            size={17}
            strokeWidth={1.7}
            className="shrink-0 text-gray-400 transition-colors duration-200 group-hover:text-gray-700 group-focus-within:text-gray-700"
          />
          <input
            type="text"
            placeholder="Suche nach Produkt, Kollektion..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-72 border-none bg-transparent text-xs outline-none placeholder:text-gray-400 transition-all duration-200 focus:w-96"
          />
        </form>

        {/* Icons */}
        <div className="flex items-center gap-5 text-gray-700">
          <Link href="/login">
            <User size={20} strokeWidth={1.7} />
          </Link>

          <Link href="/favorites" className="relative">
            <Heart size={20} strokeWidth={1.7} />
            {favorites.length > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                {favorites.length > 9 ? "9+" : favorites.length}
              </span>
            )}
          </Link>

          <Link href="/cart">
            <ShoppingBag size={20} strokeWidth={1.7} />
          </Link>
        </div>
      </div>

      {/* Dropdown menu */}
      <div
        className={`overflow-hidden border-gray-200 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-8 py-6">
          <ul className="space-y-3 text-sm font-medium uppercase tracking-wide">
            <li>
              <Link href="/products?category=men">MEN</Link>
            </li>

            <li>
              <Link href="/products?category=women">WOMEN</Link>
            </li>

            <li>
              <Link href="/kids">KIDS</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
