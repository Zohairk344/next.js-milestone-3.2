"use client";
import Header from "@/components/header";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to an API)
    console.log(formData);
  };

  return (
    <div className="">
      <Header />
      <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl p-10 bg-white shadow-2xl rounded-xl overflow-hidden">
          <h1 className="text-4xl font-extrabold text-center text-green-700 mb-8">
            Contact Us
          </h1>

          <p className="text-lg text-gray-700 text-center mb-8">
            Have any questions or feedback? We’d love to hear from you!
          </p>

          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full h-40 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Send Message
              </button>
            </form>

            <div className="mt-12 text-center">
              <p className="text-gray-600 text-md">
                Or reach out to us directly:
              </p>
              <div className="mt-4">
                <p className="text-lg text-gray-700 flex ml-32">
                  📧 Email:{" "}
                  <p className="text-green-500">zohairm344@gmail.com</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
