"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import HeroImage from "@/components/HeroImage";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main>
      <Navbar onBooking={() => setBookingOpen(true)} />

      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-20 py-12 gap-8 md:gap-4 overflow-hidden">
        <div className="text-center md:text-left md:flex-1 order-2 md:order-1">
          <h1 className="text-[#1F1F1F] font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            Wear More.
          </h1>
          <p className="text-[#3F5D45] font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic animate-fade-in-up delay-200">
            Wash Better.
          </p>
          <div className="animate-fade-in-up delay-400">
            <button
              onClick={() => setBookingOpen(true)}
              className="bg-[#3F5D45] px-10 md:px-15 py-3 md:ml-5 mt-10 md:mt-15 hover:bg-[#2e4a33] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <p className="text-[#F7F5F2] font-poppins text-sm">Booking Sekarang</p>
            </button>
          </div>
        </div>
        <HeroImage />
      </section>

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
