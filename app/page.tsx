import React from "react";
import Header from "@/components/header";
import Home_Fetch from "@/components/Home_fetch";
import { CartContextProvider } from "@/components/cartContext";

const HomePage = async () => {
  return (
    <CartContextProvider>
      <div className="inter">
        {/* Header Component */}
        <Header />

        {/* Hero Section */}
        <section className="bg-purple-600 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Wishly
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Your one-stop shop for all your favorite products
            </p>
            <a
              href="/shop"
              className="inline-block bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
            >
              Shop Now
            </a>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">
              Featured Products
            </h2>
            <Home_Fetch />
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Wishly. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </CartContextProvider>
  );
};

export default HomePage;
