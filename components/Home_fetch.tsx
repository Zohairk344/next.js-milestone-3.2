"use client";

import React, { useEffect, useState } from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCart } from "@/components/cartContext";

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

const Home_Fetch: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const { addToCart } = useCart();
  const [isHydrated, setIsHydrated] = useState(false); // Ensure hydration

  useEffect(() => {
    setIsHydrated(true); // Set hydration flag on client-side
    const fetchItems = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data: Item[] = await response.json();
      setItems(data);
    };

    fetchItems();
  }, []);

  if (!isHydrated) return null; // Avoid mismatches during SSR

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.slice(0, 4).map((item) => (
          <div key={item.id} className="">
            <Card className="">
              <Image
                src={item.image}
                alt={item.title}
                width={250}
                height={250}
                className="w-full h-[500px] object-cover"
              />
              <CardTitle className="text-xl mt-5 ml-4">{item.title}</CardTitle>
              <CardDescription className="text-lg mb-3 mt-2 ml-4">
                ${item.price}
              </CardDescription>
              <Button
                onClick={() => addToCart(item)}
                className="block bg-purple-600 text-white text-center mx-4 py-2 w-80 mb-4 rounded-lg hover:bg-purple-700 transition"
              >
                Add To Cart
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home_Fetch;
