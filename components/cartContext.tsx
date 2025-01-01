"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Item = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type CartContextType = {
  cart: Item[];
  addToCart: (item: Item) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
