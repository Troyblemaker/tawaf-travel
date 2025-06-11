import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/kaaba-bg.jpg" // Place your background image in public/kaaba-bg.jpg
          alt="Kaaba"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Green overlay */}
        <div className="absolute inset-0 bg-green-700 opacity-70" />
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center text-white px-4 py-12">
        <div className="text-lg md:text-xl font-medium mb-2">Travel Haji & Umrah Beramanah</div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Tawaf Travel</h1>
        <p className="mb-6 text-base md:text-lg font-light">
          Tawaf.id adalah perusahaan travel umroh yang menawarkan layanan ibadah sesuai Sunnah dengan pelayanan yang maksimal dan bimbingan spiritual dari para asatidzah terpercaya. Fokus kami adalah menghadirkan perjalanan ibadah yang bermakna, tenang, dan bernilai akhirat tinggi.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/paket">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded shadow transition">
              Lihat Paket
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-white hover:bg-gray-100 text-green-700 font-bold px-8 py-3 rounded shadow transition">
              Kontak Kami
            </button>
          </Link>
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
  );
}