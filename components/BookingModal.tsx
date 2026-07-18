"use client";

import { useState } from "react";

const layananOptions = ["Cuci Lipat", "Cuci Kering", "Perawatan Sepatu"];

export default function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nomorHP, setNomorHP] = useState("");
  const [layanan, setLayanan] = useState("Cuci Lipat");
  const [berat, setBerat] = useState("");
  const [jadwalTanggal, setJadwalTanggal] = useState("");
  const [jadwalJam, setJadwalJam] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bulan = [
      "",
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const [tahun, bulanIdx, hari] = jadwalTanggal.split("-");
    const tgl = `${Number(hari)} ${bulan[Number(bulanIdx)]} ${tahun}`;
    const jadwalLengkap = `${tgl} Jam ${jadwalJam}`;

    const message = `Halo, saya ingin booking layanan SinergiLaundry.

Nama: ${nama}

Alamat: ${alamat}

Nomor HP: ${nomorHP}

Jenis layanan: ${layanan}

Perkiraan berat: ${berat} kg

Jadwal penjemputan: ${jadwalLengkap}

Mohon konfirmasi apakah jadwal tersebut tersedia. Terima kasih.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/628214629468?text=${encoded}`, "_blank");
    onClose();
  };

  const inputClass =
    "w-full border border-gray-200 px-4 py-3 font-poppins text-sm text-[#1F1F1F] focus:outline-none focus:border-[#3F5D45] transition-colors duration-200";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto animate-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-5 md:mb-6">
          <h2 className="font-playfair text-xl sm:text-2xl text-[#1F1F1F]">
            Booking Layanan
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-[#1F1F1F] transition-colors text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
          <div>
            <label className="font-poppins text-xs text-gray-500 uppercase tracking-wider">
              Nama
            </label>
            <input
              type="text"
              required
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama Anda"
              className={`${inputClass} mt-2`}
            />
          </div>

          <div>
            <label className="font-poppins text-xs text-gray-500 uppercase tracking-wider">
              Alamat
            </label>
            <input
              type="text"
              required
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              placeholder="Masukkan alamat lengkap"
              className={`${inputClass} mt-2`}
            />
          </div>

          <div>
            <label className="font-poppins text-xs text-gray-500 uppercase tracking-wider">
              Nomor HP
            </label>
            <input
              type="tel"
              required
              value={nomorHP}
              onChange={(e) => setNomorHP(e.target.value)}
              placeholder="08xxxxxxxxxx"
              className={`${inputClass} mt-2`}
            />
          </div>

          <div>
            <label className="font-poppins text-xs text-gray-500 uppercase tracking-wider">
              Jenis Layanan
            </label>
            <select
              required
              value={layanan}
              onChange={(e) => setLayanan(e.target.value)}
              className={`${inputClass} mt-2 bg-white`}
            >
              {layananOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-poppins text-xs text-gray-500 uppercase tracking-wider">
              Perkiraan Berat (kg)
            </label>
            <input
              type="number"
              required
              min={1}
              max={100}
              value={berat}
              onChange={(e) => setBerat(e.target.value)}
              placeholder="Contoh: 5"
              className={`${inputClass} mt-2`}
            />
          </div>

          <div>
            <label className="font-poppins text-xs text-gray-500 uppercase tracking-wider">
              Jadwal Penjemputan
            </label>
            <div className="flex gap-3 mt-2">
              <input
                type="date"
                required
                value={jadwalTanggal}
                onChange={(e) => setJadwalTanggal(e.target.value)}
                className={`${inputClass} flex-1 min-w-0`}
              />
              <input
                type="time"
                required
                value={jadwalJam}
                onChange={(e) => setJadwalJam(e.target.value)}
                className={`${inputClass} w-28 sm:w-32 flex-shrink-0`}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3F5D45] text-white font-poppins text-sm py-3 md:py-4 mt-2 hover:bg-[#2e4a33] transition-all duration-300 tracking-wider uppercase active:scale-[0.98]"
          >
            Kirim ke WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
