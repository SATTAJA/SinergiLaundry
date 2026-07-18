"use client";

import { useState } from "react";

function Navbar({ onBooking }: { onBooking: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-[#F7F5F2]/90 backdrop-blur-md">
      {/* Desktop */}
      <div className="hidden md:flex text-center justify-between p-5 items-center border-b border-gray-100">
        <a href="#" className="text-[#1F1F1F] font-playfair text-xl">
          SinergiLaundry
        </a>
        <div className="flex gap-10 justify-center">
          {[
            { label: "Beranda", href: "#" },
            { label: "Layanan", href: "#services" },
            { label: "Harga", href: "#pricing" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#1F1F1F] font-poppins hover:cursor-pointer opacity-50 hover:opacity-100 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          onClick={onBooking}
          className="text-[#1F1F1F] font-poppins opacity-100 hover:opacity-50 transition-all duration-300 hover:cursor-pointer"
        >
          Booking Sekarang
        </button>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex justify-between p-4 items-center">
        <a href="#" className="text-[#1F1F1F] font-playfair text-lg">
          SinergiLaundry
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-[#1F1F1F] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[4.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-[#1F1F1F] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[1.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 pb-6 border-b border-gray-100">
          {[
            { label: "Beranda", href: "#" },
            { label: "Layanan", href: "#services" },
            { label: "Harga", href: "#pricing" },
          ].map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[#1F1F1F] font-poppins py-3 px-2 opacity-60 hover:opacity-100 transition-all duration-300 border-b border-gray-50 ${
                menuOpen ? "animate-slide-down" : ""
              }`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              onBooking();
            }}
            className={`mt-2 bg-[#3F5D45] text-white font-poppins text-sm py-3 text-center hover:bg-[#2e4a33] transition-all duration-300 ${
              menuOpen ? "animate-slide-down" : ""
            }`}
            style={{ animationDelay: "180ms" }}
          >
            Booking Sekarang
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
