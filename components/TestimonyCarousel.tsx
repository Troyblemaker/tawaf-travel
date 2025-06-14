'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type Testimony = {
  name: string;
  message: string;
  image?: string;
};

const testimonies: Testimony[] = [
  {
    name: 'Ahmad Fauzi',
    message: 'Pelayanan sangat ramah dan profesional. Perjalanan umrah saya sangat berkesan!',
    image: '/profile-placeholder.png',
  },
  {
    name: 'Siti Aminah',
    message: 'Bimbingan spiritualnya luar biasa, fasilitas lengkap dan nyaman.',
    image: '/profile-placeholder.png',
  },
  {
    name: 'Budi Santoso',
    message: 'Saya sangat merekomendasikan Tawaf Travel untuk perjalanan ibadah.',
    image: '/profile-placeholder.png',
  },
  {
    name: 'Nurul Huda',
    message: 'Pengalaman umrah terbaik bersama Tawaf Travel!',
    image: '/profile-placeholder.png',
  },
  {
    name: 'Rina Dewi',
    message: 'Fasilitas dan pelayanan sangat memuaskan.',
    image: '/profile-placeholder.png',
  },
];

export default function TestimonyCarousel() {
  const [current, setCurrent] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Responsive: adjust cardsToShow based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleTestimonies = () => {
    const visible: Testimony[] = [];
    for (let i = 0; i < cardsToShow; i++) {
      visible.push(testimonies[(current + i) % testimonies.length]);
    }
    return visible;
  };

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? testimonies.length - 1 : prev - 1
    );
  const next = () =>
    setCurrent((prev) =>
      (prev + 1) % testimonies.length
    );

  return (
    <section id="testimoni" className="py-16 bg-gray-50 w-auto">
      <div className="max-w-xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-green-700 mb-2">Testimoni Jamaah</h2>
        <p className="text-gray-600">Apa kata mereka tentang Tawaf Travel?</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white shadow hover:bg-green-100 transition"
          aria-label="Sebelumnya"
        >
          <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <div className="flex gap-4 w-full max-w-3xl justify-center">
          {getVisibleTestimonies().map((testimony, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center flex-1 min-w-0">
              <Image
                src={testimony.image ?? '/profile-placeholder.png'}
                alt={testimony.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-green-200"
              />
              <p className="text-gray-700 italic mb-3 text-center">&quot;{testimony.message}&quot;</p>
              <div className="font-bold text-green-700">{testimony.name}</div>
            </div>
          ))}
        </div>
        <button
          onClick={next}
          className="p-2 rounded-full bg-white shadow hover:bg-green-100 transition"
          aria-label="Berikutnya"
        >
          <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {testimonies.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-green-600' : 'bg-gray-300'}`}
            aria-label={`Testimoni ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}