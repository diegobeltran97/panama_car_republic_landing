const events = [
  {
    year: "2022",
    title: "La idea",
    description: "Nació la visión de crear un espacio donde los amantes de los automóviles pudieran conectarse en Panamá.",
  },
  {
    year: "2023",
    title: "Construcción del equipo",
    description: "Se reunió el equipo fundador: diseñadores, desarrolladores y expertos del sector automotriz panameño.",
  },
  {
    year: "2024",
    title: "Desarrollo del producto",
    description: "Comenzó el desarrollo de la plataforma con los primeros beta testers y la comunidad inicial.",
  },
  {
    year: "2025",
    title: "Lista de espera",
    description: "Abrimos la lista de espera y la comunidad creció a más de 7,000 seguidores en redes sociales.",
  },
  {
    year: "2026",
    title: "Lanzamiento",
    description: "Panama Car Republic abre sus puertas. El marketplace automotriz de Panamá es una realidad.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-[#231F20] leading-tight mb-6">
          Desde la idea hasta el lanzamiento
        </h2>
        <p className="text-[#231F20]/60 text-lg leading-relaxed mb-16 max-w-2xl">
          Nuestra travesía comenzó con una visión clara: crear un espacio donde los amantes de
          los automóviles pudieran conectarse. Desde la concepción de la idea hasta su
          realización, cada paso ha sido un esfuerzo conjunto.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#231F20]/15" />

          <div className="flex flex-col gap-10">
            {events.map((event, i) => (
              <div key={i} className="flex gap-8 items-start">
                {/* Dot */}
                <div className="relative flex-shrink-0 w-12 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#F5C800] border-4 border-[#231F20] mt-1 z-10" />
                </div>

                {/* Content */}
                <div className="pb-2">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#7968C0] mb-1">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-black text-[#231F20] mb-2">{event.title}</h3>
                  <p className="text-[#231F20]/60 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
