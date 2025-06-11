'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-300 px-4 md:px-12 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo-upscaled.png" alt="Tawaf Travel logo" width={64} height={64} className="h-18 w-auto" />
            <div className="leading-tight">
              <div className="text-green-700 font-bold text-xl">Tawaf Travel</div>
              <div className="text-green-500 text-xs italic -mt-1">Transportasi Umat</div>
              <div className="text-gray-400 text-xs tracking-widest">TawafTravel.id</div>
            </div>
          </Link>
        </div>
        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-green-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="font-semibold text-gray-800 hover:text-green-700 border-b-2 border-green-600 pb-1">
            Beranda
          </Link>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
              className="font-semibold text-green-700 flex items-center hover:text-green-800 focus:outline-none"
            >
              Layanan
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                <Link href="/umroh" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Umroh</Link>
                <Link href="/haji" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Haji</Link>
                <Link href="/wisata" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Wisata Halal</Link>
              </div>
            )}
          </div>
          <Link href="/contact" className="font-semibold text-gray-800 hover:text-green-700">
            Hubungi Kami
          </Link>
          <Link href="/about" className="font-semibold text-gray-800 hover:text-green-700">
            Tentang Kami
          </Link>
          <Link href="/testimoni" className="font-semibold text-gray-800 hover:text-green-700">
            Testimoni
          </Link>
          <Link href="/login">
            <button className="ml-6 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded shadow">
              Login
            </button>
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-1">
          <Link href="/" className="block font-semibold text-gray-800 px-2 py-2 hover:bg-green-50 rounded">
            Beranda
          </Link>
          <div className="block">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left font-semibold text-green-700 flex items-center px-2 py-2 hover:bg-green-50 rounded"
            >
              Layanan
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="ml-4 mt-1 space-y-1">
                <Link href="/umroh" className="block px-2 py-1 text-gray-700 hover:bg-green-50 rounded">Umroh</Link>
                <Link href="/haji" className="block px-2 py-1 text-gray-700 hover:bg-green-50 rounded">Haji</Link>
                <Link href="/wisata" className="block px-2 py-1 text-gray-700 hover:bg-green-50 rounded">Wisata Halal</Link>
              </div>
            )}
          </div>
          <Link href="/contact" className="block font-semibold text-gray-800 px-2 py-2 hover:bg-green-50 rounded">
            Hubungi Kami
          </Link>
          <Link href="/about" className="block font-semibold text-gray-800 px-2 py-2 hover:bg-green-50 rounded">
            Tentang Kami
          </Link>
          <Link href="/testimoni" className="block font-semibold text-gray-800 px-2 py-2 hover:bg-green-50 rounded">
            Testimoni
          </Link>
          <Link href="/login" className="block">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded shadow mt-2">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}