"use client"
import React, { useEffect, useState } from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCart } from "./cartContext";

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

const Shop_Fetch = () => {
  const { addToCart } = useCart();
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: Item[] = await response.json();
      setItems(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {items.map((item: Item, index: number) => (
        <div key={index}>
          <Card className="mt-6">
            <Image
              src={item.image}
              alt="Product Image"
              width={400}
              height={200}
              className="h-[550px] w-full"
            />
            <CardTitle className="text-xl mt-5 ml-4">{item.title}</CardTitle>
            <CardDescription className="text-lg mb-3 mt-2 ml-4">
              ${item.price}
            </CardDescription>
            <Button
              onClick={() => addToCart(item)}
              className="block bg-purple-600 text-white text-center mx-3 py-2 w-96 mb-4 rounded-lg hover:bg-purple-700 transition"
            >
              Add To Cart
            </Button>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Shop_Fetch;
