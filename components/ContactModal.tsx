import React from 'react';

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  // Handler for overlay click
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white p-6 rounded shadow-lg w-full max-w-md
          transition-all duration-300 ease-out
          transform animate-modal-pop"
        // Prevent click inside modal from closing
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold mb-4">Hubungi Kami</h2>
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
