import { useInView } from "@/hooks/useInView";

export default function Footer() {
  const { ref, visible } = useInView(0.1);

  return (
    <footer className="bg-[#1F1F1F] py-12 md:py-16 px-6 md:px-12 lg:px-20">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2">
            <h2 className="font-playfair text-2xl text-white mb-4">
              SinergiLaundry
            </h2>
            <p className="font-poppins text-sm text-gray-400 leading-relaxed max-w-sm">
              Solusi laundry terpercaya untuk kebersihan dan kenyamanan pakaian
              Anda. Kami hadir dengan layanan profesional dan harga terjangkau.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="font-poppins text-xs text-white/50 uppercase tracking-[0.15em] mb-4">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Beranda", href: "#" },
                { label: "Layanan", href: "#services" },
                { label: "Harga", href: "#pricing" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-poppins text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-poppins text-xs text-white/50 uppercase tracking-[0.15em] mb-4">
              Kontak
            </h3>
            <ul className="space-y-3 font-poppins text-sm text-gray-400">
              <li>Jl. Contoh No. 123, Semarang</li>
              <li>+62 821 4629 468</li>
              <li>info@sinergilaundry.id</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
          <p className="font-poppins text-xs text-gray-500">
            &copy; 2026 Sinergi Laundry.
          </p>
          <p className="font-poppins text-xs text-gray-600">
            By Satrio Aji Kusumo
          </p>
        </div>
      </div>
    </footer>
  );
}
