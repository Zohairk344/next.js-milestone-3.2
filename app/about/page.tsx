import React from 'react';
import Header from '@/components/header';

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Component */}
      <Header />

      {/* About Us Section */}
      <section className="flex-grow py-16 bg-gradient-to-r from-purple-600 to-purple-400 text-white flex items-center">
        <div className="container mx-auto px-8 lg:px-20">
          <h1 className="text-5xl lg:text-7xl font-bold text-center mb-8">About Us</h1>
          <p className="text-lg lg:text-2xl text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Welcome to Wishly, your trusted destination for high-quality products and a seamless shopping experience. Our mission is to bring joy and convenience to your everyday life by offering a curated selection of items that meet your needs and exceed your expectations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">Our Story</h2>
              <p className="leading-relaxed lg:text-lg">
                Founded in 2024, Wishly was born out of a passion for making shopping easier and more enjoyable. Our team of dedicated professionals works tirelessly to source the best products from around the world and deliver them straight to your doorstep.
              </p>
            </div>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">Our Values</h2>
              <p className="leading-relaxed lg:text-lg">
                At Wishly, we believe in quality, integrity, and customer satisfaction. We strive to create a community of happy customers by providing exceptional service, reliable products, and an unparalleled shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Wishly. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
