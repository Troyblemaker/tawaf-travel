'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  

  return (
    <>
    <nav className="bg-white border-b border-gray-300 px-4 md:px-12 py-1 fixed top- w-full z-50 shadow-md">
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
          <Link href="/" className="font-semibold text-gray-800 hover:text-green-700  pb-1">
            Beranda
          </Link>
          <Link href="/#paket" className="font-semibold text-gray-800 hover:text-green-700  pb-1">
            Paket
          </Link>
            <button onClick={() => setContactOpen(true)} className="font-semibold text-gray-800 hover:text-green-700">
            Hubungi Kami
          </button>
          <Link href="#about" className="font-semibold text-gray-800 hover:text-green-700">
            Tentang Kami
          </Link>
          <Link href="#testimoni" className="font-semibold text-gray-800 hover:text-green-700">
            Testimoni
          </Link>

        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-1">
          <Link href="/" className="block font-semibold text-gray-800 px-2 py-2 hover:bg-green-50 rounded">
            Beranda
          </Link>
          <Link href="/#paket" className="block font-semibold text-gray-800 px-2 py-2 hover:bg-green-50 rounded">
            Paket
          </Link>
          
          <button onClick={() => setContactOpen(true)} className="block font-semibold text-gray-800 px-2 py-2 hover:bg-green-50 rounded">
            Hubungi Kami
          </button>
          <Link href="#about" className="block font-semibold text-gray-800 px-2 py-2 hover:bg-green-50 rounded">
            Tentang Kami
          </Link>
          <Link href="#testimoni" className="block font-semibold text-gray-800 px-2 py-2 hover:bg-green-50 rounded">
            Testimoni
          </Link>
          
        </div>
      )}
    </nav>
    <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>  
  );
}