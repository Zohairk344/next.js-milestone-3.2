"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Cart from './Cart';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-purple-600">
            Wishly
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-10">
          <Link href="/" className="text-gray-700 hover:text-purple-600 transition">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-purple-600 transition">
              Shop
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-7">
            {/* Search Icon */}
            <Button variant={'secondary'} className="text-gray-700 hover:text-purple-600 transition">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m2.35-6.65a6 6 0 11-12 0 6 6 0 0112 0z"></path>
              </svg>
            </Button>
            {/* Cart Icon */}
            <Cart/>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant={'secondary'} onClick={toggleMobileMenu} className="text-gray-700 hover:text-purple-600 transition focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="sm:hidden bg-white border-t border-gray-200 py-4 text-center">
            <Link href="/shop" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Shop
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              About
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
