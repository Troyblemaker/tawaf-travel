import React from 'react';

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Hubungi Kami</h2>
        {/* Your contact form here */}
        <form>
          <input className="border p-2 w-full mb-2" placeholder="Nama" />
          <input className="border p-2 w-full mb-2" placeholder="Email" />
          <textarea className="border p-2 w-full mb-2" placeholder="Pesan" />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Kirim</button>
        </form>
        <button onClick={onClose} className="mt-4 text-gray-500 hover:text-gray-800">Tutup</button>
      </div>
    </div>
  );
}