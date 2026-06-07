"use client";

import { useState } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 5,
      name: "Jeans Regular Fit",
      price: 44,
      imageUrl: "/images/collection-1-b.jpg",
      quantity: 1,
    },
    {
      id: 6,
      name: "Basic Sweatshirt",
      price: 27,
      imageUrl: "/images/collection-2-a.jpg",
      quantity: 2,
    },
  ]);

  const increaseQuantity = (id: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return {
    cartItems,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  };
}