"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main>
      <Navbar onBooking={() => setBookingOpen(true)} />
      {/* Hero */}
      <div className="justify-between items-center flex text-center">
        <div className="mx-auto">
          <h1 className="text-[#1F1F1F] font-playfair text-6xl">Wear More.</h1>
          <p className="text-[#3F5D45] font-playfair text-6xl italic">
            Wash Better.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="bg-[#3F5D45] px-15 py-3 items-center text-center mx-auto mt-15 hover:bg-[#2e4a33] transition-colors duration-300"
          >
            <p className="text-[#F7F5F2] font-poppins text-sm">BOOK NOW</p>
          </button>
        </div>
        <img src="hero.png" alt="Hero Image" width={966} />
      </div>

      <Services />
      <Pricing onBooking={() => setBookingOpen(true)} />
      <Footer />
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </main>
  );
}
