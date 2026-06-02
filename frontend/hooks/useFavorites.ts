"use client";

import { useCallback, useEffect, useState } from "react";

export type FavoriteItem = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const STORAGE_KEY = "super-shop-favorites";
const CHANGE_EVENT = "super-shop-favorites-change";

function readStorage(): FavoriteItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as FavoriteItem[]) : [];
  } catch {
    return [];
  }
}

function writeStorage(items: FavoriteItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    setFavorites(readStorage());

    const handler = () => setFavorites(readStorage());
    window.addEventListener(CHANGE_EVENT, handler);
    return () => window.removeEventListener(CHANGE_EVENT, handler);
  }, []);

  const toggle = useCallback((item: FavoriteItem) => {
    const current = readStorage();
    const exists = current.some((f) => f.id === item.id);
    writeStorage(
      exists ? current.filter((f) => f.id !== item.id) : [...current, item],
    );
  }, []);

  const isFavorite = useCallback(
    (id: number) => favorites.some((f) => f.id === id),
    [favorites],
  );

  const removeAll = useCallback(() => writeStorage([]), []);

  return { favorites, toggle, isFavorite, removeAll };
}
