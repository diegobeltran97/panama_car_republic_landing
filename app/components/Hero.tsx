export default function Hero() {
  return (
    <section className="bg-[#f7f0d8] min-h-screen pt-20 flex items-center overflow-hidden relative">
      {/* decorative stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#F5C800]" />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block bg-[#F5C800] text-[#1a1a2e] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              🚗 Próximamente en Panamá
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none text-[#1a1a2e] mb-4">
              Automóviles
              <br />
              <span className="text-[#F5C800] drop-shadow-[2px_2px_0px_#1a1a2e]">de Panamá</span>
              <br />
              llega pronto
            </h1>
            <p className="text-[#1a1a2e]/70 text-lg max-w-md mx-auto lg:mx-0 mb-10">
              El primer marketplace de autos hecho para los panameños.
              Compra, vende y arranca sin complicaciones.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#cta"
                className="bg-[#1a1a2e] text-white px-8 py-4 rounded-full font-black text-lg uppercase tracking-wide hover:bg-[#2a2a4e] transition-colors shadow-lg"
              >
                COMPRA
              </a>
              <a
                href="#cta"
                className="bg-[#F5C800] text-[#1a1a2e] px-8 py-4 rounded-full font-black text-lg uppercase tracking-wide hover:bg-yellow-300 transition-colors shadow-lg"
              >
                VENDE
              </a>
              <a
                href="#about"
                className="border-2 border-[#1a1a2e] text-[#1a1a2e] px-8 py-4 rounded-full font-black text-lg uppercase tracking-wide hover:bg-[#1a1a2e] hover:text-white transition-colors"
              >
                ARRANCA
              </a>
            </div>
          </div>

          {/* Right illustration */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main car graphic */}
              <div className="bg-[#F5C800] rounded-3xl p-8 shadow-2xl rotate-1">
                <svg viewBox="0 0 400 220" className="w-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Car body */}
                  <rect x="40" y="120" width="320" height="70" rx="15" fill="#1a1a2e" />
                  {/* Car top */}
                  <path d="M100 120 Q130 60 200 55 Q270 60 300 120Z" fill="#1a1a2e" />
                  {/* Windows */}
                  <path d="M115 118 Q140 72 200 68 Q255 72 278 118Z" fill="#3a8fc8" opacity="0.7" />
                  {/* Wheels */}
                  <circle cx="120" cy="190" r="30" fill="#333" />
                  <circle cx="120" cy="190" r="18" fill="#999" />
                  <circle cx="120" cy="190" r="8" fill="#333" />
                  <circle cx="280" cy="190" r="30" fill="#333" />
                  <circle cx="280" cy="190" r="18" fill="#999" />
                  <circle cx="280" cy="190" r="8" fill="#333" />
                  {/* Headlights */}
                  <ellipse cx="355" cy="148" rx="12" ry="8" fill="#F5C800" />
                  <ellipse cx="45" cy="148" rx="12" ry="8" fill="#F5C800" opacity="0.5" />
                  {/* Panama flag stripe */}
                  <rect x="160" y="58" width="80" height="6" rx="3" fill="#fff" opacity="0.9" />
                  <rect x="160" y="64" width="40" height="4" rx="2" fill="#cc0000" />
                  <rect x="200" y="64" width="40" height="4" rx="2" fill="#003380" />
                </svg>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 rotate-3">
                <div className="text-2xl font-black text-[#1a1a2e]">7,453</div>
                <div className="text-xs text-gray-500 font-medium">en la comunidad</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#6b4fbb] text-white rounded-2xl shadow-xl px-4 py-3 -rotate-2">
                <div className="text-lg font-black">¡SÉ EL PRIMERO!</div>
                <div className="text-xs opacity-80">Acceso anticipado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
