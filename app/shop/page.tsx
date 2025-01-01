import Header from "@/components/header";
import React from "react";
import Shop_Fetch from "@/components/Shop_Fetch";
import { CartContextProvider } from "@/components/cartContext";

const Shop = async () => {
  return (
    <CartContextProvider>
      <div className="inter">
        <Header />
        <div className="bg-purple-600 inter">
          <h1 className="text-center py-24 text-4xl text-white">Shop</h1>
        </div>
        <div>
          <Shop_Fetch />
        </div>
      </div>
    </CartContextProvider>
  );
};

export default Shop;
