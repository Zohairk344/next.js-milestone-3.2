"use client";

import React from "react";
import { useCart } from "./cartContext";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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

const Cart = () => {
  const { cart, clearCart } = useCart();

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button
            variant="secondary"
            className="text-gray-700 hover:text-purple-600 transition"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l1.35-6.35M5 21a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z"
              ></path>
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>You Have {cart.length} Items In Your Cart</SheetTitle>
          </SheetHeader>
          <SheetDescription>
            {cart.length > 0 ? (
              <div>
                <ul>
                  {cart.map((item: Item, index: number) => (
                    <li key={index} className="flex items-center mb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={50}
                        height={50}
                        className="rounded-md"
                      />
                      <span className="ml-4 text-lg font-medium text-gray-800">
                        {item.title} - ${item.price.toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-lg font-semibold">
                    Total: $
                    {cart
                      .reduce((total, item) => total + item.price, 0)
                      .toFixed(2)}
                  </span>
                  <div>
                    <AlertDialog>
                      <AlertDialogTrigger className = "bg-purple-600 text-white hover:bg-purple-700 px-3 py-[10px] rounded-md transition mr-1">Confirm Order</AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Order Confirmed
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Your order has been successfully placed. We Will Email You When Your Order Estimated To Arrive. 
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Close</AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                    <Button
                      className="bg-red-600 text-white hover:bg-red-700 transition"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-lg text-gray-600 mt-10">Your cart is empty!</p>
            )}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;

