import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[700px] flex items-center justify-center overflow-hidden scroll-mt-24">
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

      {/* About Section (merged) */}
      <section id="about" className="scroll-mt-24 py-20 bg-white">
        {/* Feature cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-4">
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-600 rounded-xl p-4 mb-3">
              {/* Icon placeholder */}
              {/* You can add an SVG icon here */}
            </div>
            <div className="font-bold text-lg text-gray-800 mb-1">Harga Terjangkau</div>
            <div className="text-gray-500 text-sm">
              Dapatkan paket Umrah &amp; Haji<br />dengan penawaran terbaik
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-600 rounded-xl p-4 mb-3">
              {/* Icon placeholder */}
            </div>
            <div className="font-bold text-lg text-gray-800 mb-1">Pemesanan Mudah</div>
            <div className="text-gray-500 text-sm">
              Hanya 3 langkah mudah kurang<br />dari 5 menit, transaksi selesai
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-600 rounded-xl p-4 mb-3">
              {/* Icon placeholder */}
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
            <Link href="/about">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded shadow transition">
                Selengkapnya
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}