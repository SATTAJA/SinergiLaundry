"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    num: "01",
    title: "Cuci Lipat",
    description:
      "Layanan cuci dan lipat profesional dengan deterjen berkualitas tinggi. Pakaian Anda akan bersih, wangi, dan rapi.",
    features: ["Cuci dengan mesin modern", "Deterjen premium", "Lipat rapi & higienis"],
  },
  {
    num: "02",
    title: "Cuci Kering",
    description:
      "Perawatan khusus untuk pakaian sensitif dan berbahan premium. Kami jaga serat dan warna pakaian Anda tetap awet.",
    features: ["Tanpa air", "Aman untuk bahan halus", "Anti noda membandel"],
  },
  {
    num: "03",
    title: "Perawatan Sepatu",
    description:
      "Layanan perawatan sepatu menyeluruh dari pembersihan hingga pewarnaan ulang. Sepatu seperti baru kembali.",
    features: ["Deep cleaning", "Perawatan kulit & suede", "Pewarnaan ulang"],
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: gridRef, visible: gridVisible } = useInView(0.1);

  return (
    <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20" id="services">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-16 ${
            headerVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-[#3F5D45] font-poppins text-xs sm:text-sm tracking-[0.2em] uppercase mb-3">
            Apa yang Kami Tawarkan
          </p>
          <h2 className="text-[#1F1F1F] font-playfair text-3xl sm:text-4xl md:text-5xl">
            Layanan Kami
          </h2>
          <div className="w-16 h-[2px] bg-[#3F5D45] mx-auto mt-6" />
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white border border-gray-100 p-8 md:p-10 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-default ${
                gridVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`absolute top-0 left-0 h-[3px] bg-[#3F5D45] transition-all duration-500 ${
                  hovered === index ? "w-full" : "w-0"
                }`}
              />
              <span className="font-playfair text-5xl sm:text-6xl font-bold text-[#3F5D45]/10 mb-4 block">
                {service.num}
              </span>
              <h3 className="font-playfair text-xl sm:text-2xl text-[#1F1F1F] mb-4">
                {service.title}
              </h3>
              <p className="font-poppins text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="font-poppins text-xs text-[#3F5D45] flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#3F5D45] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
