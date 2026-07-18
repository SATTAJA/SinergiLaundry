import React from "react";

function Navbar({ onBooking }: { onBooking: () => void }) {
  return (
    <div>
      <div className="flex text-center justify-between p-5 items-center border-2">
        <div>
          <h1 className="text-[#1F1F1F] font-playfair text-xl">
            SinergiLaundry
          </h1>
        </div>
        <div className="flex gap-10 justify-center">
          <a
            href="#"
            className="text-[#1F1F1F] font-poppins hover:cursor-pointer opacity-50 hover:opacity-100 transition duration-300"
          >
            Beranda
          </a>
          <a
            href="#services"
            className="text-[#1F1F1F] font-poppins hover:cursor-pointer transition duration-300 hover:opacity-100 opacity-50"
          >
            Layanan
          </a>
          <a
            href="#pricing"
            className="text-[#1F1F1F] font-poppins hover:cursor-pointer transition duration-300 hover:opacity-100 opacity-50"
          >
            Harga
          </a>
        </div>
        <div>
          <button
            onClick={onBooking}
            className="text-[#1F1F1F] font-poppins opacity-100 hover:opacity-50 transition duration-300 hover:cursor-pointer"
          >
            Booking Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
