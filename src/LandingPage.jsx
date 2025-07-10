import React from "react";
import { FaListUl, FaPoundSign, FaFileContract, FaEnvelope } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* 🔹 Top Navbar */}
      <header className="w-full shadow-md bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-green-600">Property Genius</div>
          
          {/* ✅ Updated Nav with Icons */}
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-green-600 font-medium flex items-center gap-2">
              <FaListUl /> Features
            </a>
            <a href="#pricing" className="hover:text-green-600 font-medium flex items-center gap-2">
              <FaPoundSign /> Pricing
            </a>
            <a href="#contract" className="hover:text-green-600 font-medium flex items-center gap-2">
              <FaFileContract /> Contract Creation
            </a>
            <a href="#contact" className="hover:text-green-600 font-medium flex items-center gap-2">
              <FaEnvelope /> Contact
            </a>
          </nav>

          <button className="ml-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 hidden md:block">
            Get Started
          </button>
        </div>
      </header>

      {/* 🔹 Placeholder Sections for Page Links */}
      <section id="features" className="py-20 text-center bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4">Features</h2>
        <p>Everything a landlord needs to manage properties efficiently.</p>
      </section>

      <section id="pricing" className="py-20 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-4">Pricing</h2>
        <p>Simple and transparent pricing plans.</p>
      </section>

      <section id="contract" className="py-20 text-center bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4">Contract Creation</h2>
        <p>Generate NRLA-based tenancy agreements in seconds.</p>
      </section>

      <section id="contact" className="py-20 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p>Need help? We’re here to support landlords across the UK.</p>
      </section>
    </div>
  );
}
