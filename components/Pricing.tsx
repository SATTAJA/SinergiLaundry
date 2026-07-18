"use client";

import { useState, useMemo } from "react";

const services = [
  {
    id: "washfold",
    name: "Cuci Lipat",
    pricePerKg: 8000,
    icon: "🫧",
    desc: "Per kilogram",
  },
  {
    id: "dryclean",
    name: "Dry Cleaning",
    pricePerKg: 15000,
    icon: "✨",
    desc: "Per kilogram",
  },
  {
    id: "shoecare",
    name: "Shoe Care",
    pricePerKg: 25000,
    icon: "👟",
    desc: "Per pasang",
  },
];

function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export default function Pricing({ onBooking }: { onBooking: () => void }) {
  const [selectedService, setSelectedService] = useState("washfold");
  const [weight, setWeight] = useState<number>(1);

  const total = useMemo(() => {
    const service = services.find((s) => s.id === selectedService);
    if (!service) return 0;
    return service.pricePerKg * weight;
  }, [selectedService, weight]);

  const currentService = services.find((s) => s.id === selectedService);

  return (
    <section className="py-24 px-6 md:px-20 bg-[#3F5D45]" id="pricing">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-white/60 font-poppins text-sm tracking-[0.2em] uppercase mb-3">
            Transparan & Terjangkau
          </p>
          <h2 className="text-white font-playfair text-4xl md:text-5xl">
            Harga Layanan
          </h2>
          <div className="w-16 h-[2px] bg-white/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Service Cards */}
          <div className="space-y-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`w-full text-left p-6 border transition-all duration-300 ${
                  selectedService === service.id
                    ? "bg-white border-white shadow-lg scale-[1.02]"
                    : "bg-white/10 border-white/20 hover:bg-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3
                        className={`font-playfair text-lg ${
                          selectedService === service.id
                            ? "text-[#3F5D45]"
                            : "text-white"
                        }`}
                      >
                        {service.name}
                      </h3>
                      <p
                        className={`font-poppins text-xs ${
                          selectedService === service.id
                            ? "text-gray-500"
                            : "text-white/50"
                        }`}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`font-playfair text-lg font-semibold ${
                      selectedService === service.id
                        ? "text-[#3F5D45]"
                        : "text-white"
                    }`}
                  >
                    {formatRupiah(service.pricePerKg)}
                    <span className="text-xs font-normal">/{service.id === "shoecare" ? "pasang" : "kg"}</span>
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Calculator */}
          <div className="bg-white p-10 shadow-xl">
            <h3 className="font-playfair text-2xl text-[#1F1F1F] mb-2">
              Kalkulator Harga
            </h3>
            <p className="font-poppins text-sm text-gray-400 mb-8">
              Masukkan berat untuk estimasi biaya
            </p>

            <div className="space-y-6">
              <div>
                <label className="font-poppins text-xs text-gray-500 uppercase tracking-wider">
                  {selectedService === "shoecare" ? "Jumlah Pasang" : "Berat (kg)"}
                </label>
                <div className="flex items-center gap-4 mt-3">
                  <button
                    onClick={() => setWeight((w) => Math.max(1, w - 1))}
                    className="w-10 h-10 border border-gray-200 text-[#3F5D45] font-poppins text-lg hover:bg-[#3F5D45] hover:text-white transition-colors duration-200 flex items-center justify-center"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={weight}
                    onChange={(e) =>
                      setWeight(Math.max(1, Math.min(100, Number(e.target.value) || 1)))
                    }
                    className="w-24 text-center font-poppins text-2xl font-semibold text-[#1F1F1F] border-b-2 border-[#3F5D45] focus:outline-none bg-transparent"
                  />
                  <button
                    onClick={() => setWeight((w) => Math.min(100, w + 1))}
                    className="w-10 h-10 border border-gray-200 text-[#3F5D45] font-poppins text-lg hover:bg-[#3F5D45] hover:text-white transition-colors duration-200 flex items-center justify-center"
                  >
                    +
                  </button>
                  <span className="font-poppins text-sm text-gray-400">
                    {selectedService === "shoecare" ? "pasang" : "kg"}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-poppins text-sm text-gray-500">
                    {currentService?.name}
                  </span>
                  <span className="font-poppins text-sm text-gray-500">
                    {formatRupiah(currentService?.pricePerKg ?? 0)} × {weight}
                    {selectedService === "shoecare" ? " pasang" : " kg"}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="font-playfair text-xl text-[#1F1F1F]">
                    Total Estimasi
                  </span>
                  <span className="font-playfair text-3xl text-[#3F5D45] font-bold">
                    {formatRupiah(total)}
                  </span>
                </div>
              </div>

              <button onClick={onBooking} className="w-full bg-[#3F5D45] text-white font-poppins text-sm py-4 mt-4 hover:bg-[#2e4a33] transition-colors duration-300 tracking-wider uppercase">
                Booking Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
