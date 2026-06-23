const accent = "#CAA34B";

function RocketIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke={accent}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke={accent}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke={accent}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke={accent}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      <path d="m8 16 2 2" />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke={accent}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}

const events = [
  {
    year: "2020",
    title: "LOS INICIOS",
    description:
      "Panama Car Republic nació como una página de Instagram para conectar a los amantes de los carros en Panamá. Lo que comenzó como un blog se convirtió en una comunidad apasionada.",
    icon: RocketIcon,
  },
  {
    year: "2021",
    title: "POR FIN EN LAS CALLES",
    description:
      "Empezamos a asistir a eventos automotrices y a conocer en persona a la comunidad que habíamos formado online. Confirmamos que íbamos por buen camino.",
    icon: CalendarIcon,
  },
  {
    year: "2024",
    title: "NACE EL MARKETPLACE",
    description:
      "Nos dimos cuenta de que la comunidad necesitaba un lugar seguro y organizado para comprar y vender carros y piezas. Así nació la visión del marketplace.",
    icon: LightbulbIcon,
  },
  {
    year: "2025",
    title: "RECONSTRUCCIÓN",
    description:
      "Tras el primer prototipo, decidimos reconstruir todo desde cero para ofrecer mejor tecnología, experiencia y seguridad a nuestra comunidad.",
    icon: ToolsIcon,
  },
  {
    year: "2026",
    title: "LANZAMIENTO",
    description:
      "El marketplace que la comunidad automotriz de Panamá ha estado esperando está por llegar.",
    icon: FlagIcon,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="bg-[#FBF6EC] py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
          {/* Left column — intro */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#231F20]/50 mb-4">
              Historia
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.75rem] uppercase tracking-tight text-[#231F20] leading-[1.05] mb-5"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Desde la idea hasta el lanzamiento
            </h2>
            <p className="text-[#231F20]/70 text-sm sm:text-base leading-relaxed mb-10 max-w-md">
              Nuestra travesía comenzó con una visión clara: crear un espacio
              donde los amantes de los automóviles pudieran conectarse. Desde la
              concepción de la idea hasta su realización, cada paso ha sido un
              esfuerzo conjunto.
            </p>

            {/* Image placeholder — replace src when asset is ready */}
          </div>

          {/* Right column — timeline */}
          <div className="relative">
            <div
              className="absolute left-[7px] top-2 bottom-2 w-px bg-[#231F20]/20"
              aria-hidden
            />

            <div className="flex flex-col gap-12 sm:gap-14">
              {events.map((event) => {
                const Icon = event.icon;
                return (
                  <div key={event.year} className="flex gap-6 sm:gap-8">
                    <div className="relative flex-shrink-0 pt-1">
                      <div
                        className="w-3.5 h-3.5 rounded-full z-10 relative"
                        style={{ backgroundColor: accent }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="mb-2">
                        <Icon />
                      </div>
                      <p
                        className="text-4xl sm:text-5xl leading-none mb-2"
                        style={{
                          fontFamily: "var(--font-archivo)",
                          color: accent,
                        }}
                      >
                        {event.year}
                      </p>
                      <h3
                        className="text-sm sm:text-base uppercase tracking-wide text-[#231F20] mb-2"
                        style={{ fontFamily: "var(--font-archivo)" }}
                      >
                        {event.title}
                      </h3>
                      <p className="text-[#231F20]/70 text-sm leading-relaxed max-w-lg">
                        {event.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
