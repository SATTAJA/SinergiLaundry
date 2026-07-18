export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
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
              {["Beranda", "Layanan", "Harga"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-poppins text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
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
              <li>+62 812 3456 7890</li>
              <li>info@sinergilaundry.id</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
