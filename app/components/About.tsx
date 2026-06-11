export default function About() {
  return (
    <section id="about" className="bg-[#1a2e3b] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Illustration */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 bg-[#F5C800]/10 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 300 200" className="w-64" xmlns="http://www.w3.org/2000/svg">
                  {/* Simple cartoon car */}
                  <rect x="30" y="100" width="240" height="60" rx="12" fill="#F5C800" />
                  <path d="M70 100 Q100 50 150 45 Q200 50 230 100Z" fill="#F5C800" />
                  <path d="M85 98 Q110 58 150 54 Q185 58 210 98Z" fill="#1a2e3b" opacity="0.5" />
                  <circle cx="90" cy="160" r="22" fill="#1a1a2e" />
                  <circle cx="90" cy="160" r="12" fill="#888" />
                  <circle cx="90" cy="160" r="5" fill="#1a1a2e" />
                  <circle cx="210" cy="160" r="22" fill="#1a1a2e" />
                  <circle cx="210" cy="160" r="12" fill="#888" />
                  <circle cx="210" cy="160" r="5" fill="#1a1a2e" />
                  <ellipse cx="268" cy="122" rx="10" ry="6" fill="#fff" opacity="0.8" />
                  {/* Character peeking out */}
                  <circle cx="155" cy="68" r="18" fill="#f0c090" />
                  <circle cx="150" cy="64" r="6" fill="#5a3010" />
                  <circle cx="162" cy="64" r="6" fill="#5a3010" />
                  <path d="M148 74 Q155 80 164 74" stroke="#cc5533" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-[#6b4fbb] rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl">🇵🇦</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="inline-block bg-[#F5C800]/20 text-[#F5C800] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              ¿Qué es Panama Car Republic?
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              El mercado de autos
              <br />
              <span className="text-[#F5C800]">hecho para ti</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Panama Car Republic es la plataforma digital donde los panameños pueden comprar y
              vender vehículos de forma segura, transparente y sin complicaciones. Diseñada
              específicamente para el mercado local.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Con herramientas intuitivas, verificación de vehículos y una comunidad activa,
              facilitamos cada paso del proceso: desde la búsqueda hasta el cierre del trato.
            </p>
            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-[#F5C800]">100%</div>
                <div className="text-sm text-white/60">Panameño</div>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-black text-[#F5C800]">0</div>
                <div className="text-sm text-white/60">Complicaciones</div>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-black text-[#F5C800]">∞</div>
                <div className="text-sm text-white/60">Posibilidades</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
