import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Image src="/logo-upscaled.png" alt="Tawaf Travel Logo" width={48} height={48} />
            <div className="mt-2 text-xs tracking-widest">TawafTravel.id</div>
            <div className="text-sm">Sepenuh Hati, Melayani Umat</div>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-green-400">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-green-400">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-green-400">
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:text-green-400">
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
          </div>
        </div>
        <hr className="border-gray-700 mb-8" />
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Kantor Pusat */}
          <div>
            <h3 className="font-bold text-xl mb-3">Kantor Pusat</h3>
            <div className="text-gray-300 text-sm mb-2">
              Jl.Menuju surga No.1, Depan SD, Yg.Ada, KLX, Firdaus . -0858
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-400">
                <svg width="16" height="16" fill="currentColor"><path d="M3 2a1 1 0 0 0-1 1v2c0 7.18 5.82 13 13 13h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3.28a1 1 0 0 0-.95.68l-.7 2.1A11.05 11.05 0 0 1 4.22 4.93l2.1-.7A1 1 0 0 0 7 3.28V2a1 1 0 0 0-1-1H3z"/></svg>
              </span>
              <span className="text-sm">+628588976555</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">
                <svg width="16" height="16" fill="currentColor"><path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2-.5A.5.5 0 0 0 3.5 4v.637l4.5 2.25 4.5-2.25V4a.5.5 0 0 0-.5-.5H4zm8 1.634-4.25 2.125a.5.5 0 0 1-.5 0L3 5.134V12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V5.134z"/></svg>
              </span>
              <span className="text-sm">TawafTrour@gmail.com</span>
            </div>
          </div>
          {/* Informasi */}
          <div>
            <h3 className="font-bold text-xl mb-3">Informasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="flex items-center hover:text-green-400">
                  <span className="text-green-400 mr-2">&#8250;</span> Metode Pembayaran
                </Link>
              </li>
              
              
              <li>
                <Link href="#" className="flex items-center hover:text-green-400">
                  <span className="text-green-400 mr-2">&#8250;</span> Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* Layanan */}
          <div>
            <h3 className="font-bold text-xl mb-3">Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#paket-umrah" className="flex items-center hover:text-green-400">
                  <span className="text-green-400 mr-2">&#8250;</span> Layanan Paket Umrah
                </Link>
              </li>
              <li>
                <Link href="#paket-umrah" className="flex items-center hover:text-green-400">
                  <span className="text-green-400 mr-2">&#8250;</span> Layanan Paket Wisata
                </Link>
              </li>
              <li>
                <Link href="#paket-umrah" className="flex items-center hover:text-green-400">
                  <span className="text-green-400 mr-2">&#8250;</span> Layanan Antar Jemput
                </Link>
              </li>
              <li>
                <Link href="#paket-umrah" className="flex items-center hover:text-green-400">
                  <span className="text-green-400 mr-2">&#8250;</span> Layanan Visa Saudi
                </Link>
              </li>
            </ul>
          </div>
          {/* Jam Operasional */}
          <div>
            <h3 className="font-bold text-xl mb-3">Jam Operasional</h3>
            <div className="text-sm text-gray-300 mb-1">Jam Kerja</div>
            <div className="text-sm">Senin – Sabtu, 08:00 – 16.30 WIB</div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-gray-700 pt-4 text-sm text-gray-300">
          <div className="space-x-6 mb-2 md:mb-0">
            <Link href="#" className="hover:text-green-400">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-green-400">Syarat Ketentuan</Link>
          </div>
          <div>
            Copyright &copy; 2025 – TawafTravel.id
          </div>
        </div>
      </div>
    </footer>
  );
}