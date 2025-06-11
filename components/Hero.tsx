'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ContactModal from './ContactModal';
import TestimonyCarousel from './TestimonyCarousel';



export default function Hero() {
  const [contactOpen, setContactOpen] = React.useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[750px] flex items-center justify-center overflow-hidden scroll-mt-24">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/kaaba-bg.jpg"
            alt="Kaaba"
            fill
            className="object-cover w-full h-full"
            priority
          />
          {/* Green overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-700/80 to-green-700/30" />
        </div>
        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto text-center text-white px-4 py-12">
          <div className="text-lg md:text-xl font-medium mb-2">Travel Haji & Umrah Beramanah</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Tawaf Travel</h1>
          <p className="mb-6 text-base md:text-lg font-light">
            Tawaf Travel adalah perusahaan travel umroh yang menawarkan layanan ibadah sesuai Sunnah dengan pelayanan yang maksimal dan bimbingan spiritual dari para asatidzah terpercaya. Fokus kami adalah menghadirkan perjalanan ibadah yang bermakna, tenang, dan bernilai akhirat tinggi.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#paket" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded shadow transition text-center">Lihat Paket</a>
            <button onClick={() => setContactOpen(true)} className="bg-white hover:bg-gray-100 text-green-700 font-bold px-8 py-3 rounded shadow transition">Kontak Kami</button>
          </div>
        </div>
        {/* Bottom curve */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          height="60"
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0C360 60 1080 60 1440 0V60H0V0Z"
            fill="#fff"
            fillOpacity="0.9"
          />
        </svg>
      </section>

      {/* About Section (merged) */}
      <section id="about" className="scroll-mt-24 py-20 bg-white">
        {/* Feature cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-4">
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-600 rounded-xl p-4 mb-3 text-white">
              <Image src="/cash.svg" alt='cash icon' width={32} height={31}/>
            </div>
            <div className="font-bold text-lg text-gray-800 mb-1">Harga Terjangkau</div>
            <div className="text-gray-500 text-sm">
              Dapatkan paket Umrah &amp; Haji<br />dengan penawaran terbaik
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-600 rounded-xl p-4 mb-3">
              <Image src="/thumbs-up.svg" alt='thumbsup icon' width={32} height={31}/>
            </div>
            <div className="font-bold text-lg text-gray-800 mb-1">Pemesanan Mudah</div>
            <div className="text-gray-500 text-sm">
              Proses pemesanan yang<br />singkat dan mudah
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-600 rounded-xl p-4 mb-3">
              <Image src="/certified.svg" alt='certified icon' width={32} height={31}/>
            </div>
            <div className="font-bold text-lg text-gray-800 mb-1">Travel Terpercaya</div>
            <div className="text-gray-500 text-sm">
              Kami perusahaan travel<br />bersertifikat resmi
            </div>
          </div>
        </div>
        {/* About section */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          {/* Image with green border accent */}
          <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
            <div className="absolute -left-2 -top-2 w-full h-full bg-green-600 rounded-[40px] z-0" />
            <div className="relative rounded-[24px] overflow-hidden z-10">
              <Image
                src="/kaaba-bg.jpg"
                alt="Kaaba"
                width={500}
                height={350}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Text content */}
          <div className="w-full md:w-1/2">
            <div className="text-green-600 font-semibold mb-1 text-base">
              Tentang Tawaf Travel
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Travel Haji &amp; Umrah Terpercaya
            </h2>
            <p className="text-gray-600 mb-4">
              Tawaf Travel berpengalaman dalam memberangkatkan jama&apos;ah ibadah haji dan umrah. Kami sangat menjaga kepuasan dan kepercayaan jama&apos;ah dalam melaksanakan ibadah haji dan umrah.
              <br /><br />
              Lebih dari ribuan jama&apos;ah telah mempercayakan penyelenggaraan umrahnya bersama Tawaf Travel.
            </p>
            <Link href="#about">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded shadow transition">
                Selengkapnya
              </button>
            </Link>
          </div>
        </div>
      </section>
            {/* Fasilitas Section */}
      <section id="paket" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-2 text-green-600 font-semibold text-lg">
            Fasilitas Jamaah
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
            Fasilitas Untuk Jamaah
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Konsumsi */}
            <div className="flex items-start gap-4">
              <div className="bg-green-600 rounded-xl p-4 flex items-center justify-center">
                {/* Food SVG */}
                <Image src="/food.svg" alt='food icon' width={50} height={50}/>
                
              </div>
              <div>
                <div className="font-bold text-lg text-gray-800 mb-1">Konsumsi</div>
                <div className="text-gray-600 text-sm">
                  Konsumsi yang terjamin dari memulai perjalanan sampai selesai
                </div>
              </div>
            </div>
            {/* Visa haji & umrah */}
            <div className="flex items-start gap-4">
              <div className="bg-green-600 rounded-xl p-4 flex items-center justify-center">
                {/* Visa SVG */}
                <Image src="/visa.svg" alt='visa icon' width={50} height={50}/>
                
              </div>
              <div>
                <div className="font-bold text-lg text-gray-800 mb-1">Visa haji & umrah</div>
                <div className="text-gray-600 text-sm">
                  Pengurusan visa haji & umrah untuk keperluan ibadah
                </div>
              </div>
            </div>
            {/* Perlengkapan Umrah */}
            <div className="flex items-start gap-4">
              <div className="bg-green-600 rounded-xl p-4 flex items-center justify-center">
                {/* Bag SVG */}
                <Image src="/bag.svg" alt='bag icon' width={50} height={50}/>
                
              </div>
              <div>
                <div className="font-bold text-lg text-gray-800 mb-1">Perlengkapan Umrah</div>
                <div className="text-gray-600 text-sm">
                  Paket umrah dengan perlengkapan kebutuhan ibadah lengkap
                </div>
              </div>
            </div>
            {/* Tiket Pesawat */}
            <div className="flex items-start gap-4">
              <div className="bg-green-600 rounded-xl p-4 flex items-center justify-center">
                {/* Plane SVG */}
                <Image src="/plane-ticket.svg" alt='plane icon' width={70} height={70}/>
                
              </div>
              <div>
                <div className="font-bold text-lg text-gray-800 mb-1">Tiket Pesawat</div>
                <div className="text-gray-600 text-sm">
                  Mendapatkan tiket pesawat PP untuk keperluan berangkat ke tanah suci
                </div>
              </div>
            </div>
            {/* TL/Mutawwif */}
            <div className="flex items-start gap-4">
              <div className="bg-green-600 rounded-xl p-4 flex items-center justify-center">
                {/* Guide SVG */}
                <Image src="/guide.svg" alt='guide icon' width={50} height={50}/>
                
              </div>
              <div>
                <div className="font-bold text-lg text-gray-800 mb-1">TL/ Mutawwif</div>
                <div className="text-gray-600 text-sm">
                  Umrah ditemani oleh leader dan Muthowif yang tersertifikasi
                </div>
              </div>
            </div>
            {/* Hotel Penginapan */}
            <div className="flex items-start gap-4">
              <div className="bg-green-600 rounded-xl p-4 flex items-center justify-center">
                {/* Hotel SVG */}
                <Image src="/hotel.svg" alt='hotel icon' width={50} height={50}/>
                
              </div>
              <div>
                <div className="font-bold text-lg text-gray-800 mb-1">Hotel Penginapan</div>
                <div className="text-gray-600 text-sm">
                  Akomodasi hotel / penginapan terbaik dan ternyaman
                </div>
              </div>
            </div>
            {/* Transportasi */}
            <div className="flex items-start gap-4">
              <div className="bg-green-600 rounded-xl p-4 flex items-center justify-center">
                {/* Bus SVG */}
                <Image src="/bus.svg" alt='bus icon' width={50} height={50}/>
                
              </div>
              <div>
                <div className="font-bold text-lg text-gray-800 mb-1">Transportasi</div>
                <div className="text-gray-600 text-sm">
                  Transportasi untuk memudahkan perjalanan jamaah
                </div>
              </div>
            </div>
            {/* Dokumentasi */}
            <div className="flex items-start gap-4">
              <div className="bg-green-600 rounded-xl p-4 flex items-center justify-center">
                {/* Camera SVG */}
                <Image src="/camera.svg" alt='camera icon' width={46} height={50}/>
                
              </div>
              <div>
                <div className="font-bold text-lg text-gray-800 mb-1">Dokumentasi</div>
                <div className="text-gray-600 text-sm">
                  Dokumentasi untuk jamaah selama ibadah
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Paket Umrah Section */}
      <section id="paket-umrah" className="py-20 bg-[#222] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
            Layanan Paket Umrah
          </h2>
          <p className="text-gray-200 text-center mb-10 max-w-2xl mx-auto">
            Berikut adalah daftar produk & layanan yang kami sediakan untuk para kaum muslimin di seluruh Indonesia khususnya jamaah haji & umrah
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="h-56 w-full relative flex items-center justify-center bg-gray-200">
                <span className="text-gray-400 text-lg">Image Placeholder</span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="font-bold text-green-700 mb-2">Spesial Umroh Bulan Juli (SAUDI AIRLINES)</div>
                <ul className="text-gray-700 text-sm mb-2 space-y-1">
                  <li><span className="mr-2">📅</span>10 Juli 2025</li>
                  <li><span className="mr-2">🏨</span>Lemerdien Tower (Makkah)</li>
                  <li><span className="mr-2">🏨</span>Abraj Tabah Tower (Madinah)</li>
                  <li><span className="mr-2">✈️</span>Saudi Arabian Airlines</li>
                  <li><span className="mr-2">📍</span>Soekarno-Hatta International Airport (CGK)</li>
                </ul>
                <div className="font-semibold text-gray-800 mb-1">Sisa Seat : <span className="text-green-600">17</span></div>
                <div className="text-sm text-gray-600 mb-2">Harga mulai :</div>
                <div className="text-xl font-bold text-red-600 mb-4">IDR 27.990.000,00</div>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded transition mt-auto">
                  DETAIL PAKET
                </button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="h-56 w-full relative flex items-center justify-center bg-gray-200">
                <span className="text-gray-400 text-lg">Image Placeholder</span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="font-bold text-green-700 mb-2">Umroh Sultan Hemat Juli Buy 2 Get 1 Free</div>
                <ul className="text-gray-700 text-sm mb-2 space-y-1">
                  <li><span className="mr-2">📅</span>10 Juli 2025</li>
                  <li><span className="mr-2">🏨</span>Le Meridien Towers (Makkah)</li>
                  <li><span className="mr-2">🏨</span>Abraj Tabah Tower (Madinah)</li>
                  <li><span className="mr-2">✈️</span>Saudi Arabian Airlines</li>
                  <li><span className="mr-2">📍</span>Soekarno-Hatta International Airport (CGK)</li>
                </ul>
                <div className="font-semibold text-gray-800 mb-1">Sisa Seat : <span className="text-green-600">22</span></div>
                <div className="text-sm text-gray-600 mb-2">Harga mulai :</div>
                <div className="text-xl font-bold text-red-600 mb-4">IDR 40.500.000,00</div>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded transition mt-auto">
                  DETAIL PAKET
                </button>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="h-56 w-full relative flex items-center justify-center bg-gray-200">
                <span className="text-gray-400 text-lg">Image Placeholder</span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="font-bold text-green-700 mb-2">Belajar di Madinah, Program 1 Bulan</div>
                <ul className="text-gray-700 text-sm mb-2 space-y-1">
                  <li><span className="mr-2">📅</span>15 Juli 2025</li>
                  <li><span className="mr-2">🏨</span>Daar (Makkah)</li>
                  <li><span className="mr-2">🏨</span>Daar (Madinah)</li>
                  <li><span className="mr-2">✈️</span>Ethiopian Airlines</li>
                  <li><span className="mr-2">📍</span>Soekarno-Hatta International Airport (CGK)</li>
                </ul>
                <div className="font-semibold text-gray-800 mb-1">Sisa Seat : <span className="text-green-600">35</span></div>
                <div className="text-sm text-gray-600 mb-2">Harga mulai :</div>
                <div className="text-xl font-bold text-red-600 mb-4">IDR 25.000.000,00</div>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded transition mt-auto">
                  DETAIL PAKET
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonyCarousel />
      {/* Contact Modal */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}