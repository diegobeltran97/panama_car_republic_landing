const events = [
  {
    year: "2020",
    title: "La idea nace",
    description: "Edwin detecta la oportunidad: Panamá necesita una plataforma local de autos.",
    icon: "💡",
    side: "left",
  },
  {
    year: "2021",
    title: "Validación del mercado",
    description: "Se realizan más de 200 entrevistas con compradores y vendedores en todo el país.",
    icon: "🔍",
    side: "right",
  },
  {
    year: "2022",
    title: "Construcción del equipo",
    description: "Se une el equipo fundador: tecnología, operaciones y marketing.",
    icon: "🤝",
    side: "left",
  },
  {
    year: "2023",
    title: "Desarrollo del producto",
    description: "Inicio del desarrollo de la plataforma con los primeros beta testers.",
    icon: "⚙️",
    side: "right",
  },
  {
    year: "2024",
    title: "Lista de espera",
    description: "Se abre la lista de espera y la comunidad crece a más de 7,000 miembros.",
    icon: "🚀",
    side: "left",
  },
  {
    year: "2025",
    title: "¡Lanzamiento!",
    description: "Panama Car Republic abre sus puertas al mercado panameño.",
    icon: "🏁",
    side: "right",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="bg-[#f7f0d8] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#1a1a2e]/10 text-[#1a1a2e] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Nuestra historia
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a2e] leading-tight">
            Desde la idea hasta{" "}
            <br />
            <span className="text-[#F5C800] drop-shadow-[1px_1px_0_#1a1a2e]">el lanzamiento</span>
          </h2>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1a1a2e]/20 -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-12">
            {events.map((event, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  event.side === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow ${
                      event.side === "right" ? "md:text-right" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        event.side === "right" ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-2xl">{event.icon}</span>
                      <span className="text-sm font-bold text-[#6b4fbb] uppercase tracking-widest">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-[#1a1a2e] mb-2">{event.title}</h3>
                    <p className="text-[#1a1a2e]/60 leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-12 h-12 bg-[#1a1a2e] rounded-full items-center justify-center shadow-lg flex-shrink-0 z-10">
                  <div className="w-4 h-4 bg-[#F5C800] rounded-full" />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
