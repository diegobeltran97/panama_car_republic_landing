const categories = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Autos",
    description: "Compra y vende autos usados y nuevos de todas las marcas con total seguridad.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Piezas",
    description: "Encuentra repuestos, accesorios y piezas para todo tipo de vehículos.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Coleccionables",
    description: "Descubre vehículos únicos, clásicos y de colección para los más apasionados.",
  },
];

function MascotIllustration() {
  return (
    <svg viewBox="0 0 420 300" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
      {/* Ground shadow */}
      <ellipse cx="210" cy="285" rx="160" ry="12" fill="#231F20" opacity="0.08" />

      {/* Car body */}
      <rect x="55" y="175" width="310" height="90" rx="18" fill="#CAA34B" />
      <rect x="55" y="205" width="310" height="60" rx="10" fill="#B8922E" />

      {/* Car roof/cabin */}
      <path d="M110 175 Q140 105 210 98 Q280 105 310 175Z" fill="#CAA34B" />

      {/* Windshield */}
      <path d="M125 173 Q152 112 210 106 Q268 112 288 173Z" fill="#87CEEB" opacity="0.7" />

      {/* License plate */}
      <rect x="167" y="230" width="86" height="28" rx="4" fill="#FFF" />
      <text x="210" y="249" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#231F20">UX24</text>

      {/* Front headlight */}
      <ellipse cx="358" cy="200" rx="16" ry="10" fill="#FFE680" />
      <ellipse cx="358" cy="200" rx="10" ry="6" fill="#FFF" opacity="0.6" />

      {/* Rear light */}
      <ellipse cx="62" cy="200" rx="12" ry="8" fill="#E84040" opacity="0.8" />

      {/* Front wheel */}
      <circle cx="295" cy="262" r="34" fill="#231F20" />
      <circle cx="295" cy="262" r="22" fill="#666" />
      <circle cx="295" cy="262" r="10" fill="#231F20" />
      <circle cx="295" cy="262" r="5" fill="#999" />

      {/* Rear wheel */}
      <circle cx="125" cy="262" r="34" fill="#231F20" />
      <circle cx="125" cy="262" r="22" fill="#666" />
      <circle cx="125" cy="262" r="10" fill="#231F20" />
      <circle cx="125" cy="262" r="5" fill="#999" />

      {/* Bumper */}
      <rect x="340" y="218" width="30" height="14" rx="7" fill="#8B7333" />

      {/* Dog head */}
      <circle cx="220" cy="88" r="38" fill="#C8873C" />
      {/* Dog ears */}
      <ellipse cx="193" cy="68" rx="14" ry="20" fill="#A06828" transform="rotate(-15 193 68)" />
      <ellipse cx="247" cy="68" rx="14" ry="20" fill="#A06828" transform="rotate(15 247 68)" />
      {/* Dog snout */}
      <ellipse cx="220" cy="102" rx="18" ry="13" fill="#E8A050" />
      {/* Nose */}
      <ellipse cx="220" cy="97" rx="7" ry="5" fill="#231F20" />
      {/* Eyes */}
      <circle cx="207" cy="84" r="6" fill="#231F20" />
      <circle cx="233" cy="84" r="6" fill="#231F20" />
      <circle cx="209" cy="82" r="2" fill="white" />
      <circle cx="235" cy="82" r="2" fill="white" />
      {/* Smile */}
      <path d="M210 107 Q220 115 230 107" stroke="#231F20" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Arm/paw on window sill */}
      <rect x="258" y="138" width="28" height="20" rx="10" fill="#C8873C" />
      <ellipse cx="272" cy="158" rx="14" ry="8" fill="#C8873C" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-[#231F20] text-center mb-16 leading-tight">
          ¿Qué es Panama Car Republic?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — mascot */}
          <div className="flex flex-col items-center">
            <MascotIllustration />
          </div>

          {/* Right — description + cards */}
          <div>
            <p className="text-[#231F20]/70 text-lg leading-relaxed mb-8">
              Compra y vende con confianza. Panama Car Republic es el marketplace automotriz más
              completo y seguro de Panamá, diseñado para conectar a compradores y vendedores
              de forma transparente y sin complicaciones.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {categories.map((cat, i) => (
                <div key={i} className="flex items-start gap-4 p-5 border border-[#231F20]/10 rounded-2xl hover:border-[#F5C800] transition-colors">
                  <div className="text-[#231F20] flex-shrink-0 mt-0.5">{cat.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#231F20] text-lg mb-1">{cat.title}</h3>
                    <p className="text-[#231F20]/60 text-sm leading-relaxed">{cat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#cta"
              className="inline-block bg-[#231F20] text-white font-bold px-8 py-3 rounded-full hover:bg-[#3a3535] transition-colors"
            >
              Vende
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
