const benefits = [
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        />
      </svg>
    ),
    title: "Acceso anticipado",
    description:
      "Sé de los primeros en entrar a la plataforma cuando lancemos. Sin filas, sin esperas.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18.75a.375.375 0 0 0 .375-.375V8.625a.375.375 0 0 0-.375-.375H3.375a.375.375 0 0 0-.375.375v2.25c0 .207.168.375.375.375Z"
        />
      </svg>
    ),
    title: "Beneficios exclusivos de lanzamiento",
    description:
      "Los miembros de la lista de espera recibirán condiciones especiales que no estarán disponibles después del lanzamiento.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
        />
      </svg>
    ),
    title: "Notificación directa",
    description:
      "Te avisamos el día que abramos. Sin que tengas que estar pendiente.",
  },
];

export default function WhyFirst() {
  return (
    <section id="why" className="bg-[#A99BD5] py-2">
      <div className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-[#A99BD5] rounded-[2rem] px-8 sm:px-12 lg:px-16 py-16 sm:py-20">
          {/* Eyebrow */}
          <p className="text-xs font-semibold text-[#231F20] mb-4">Vende</p>

          {/* Heading */}
          <h2
            className="text-4xl sm:text-5xl uppercase tracking-tight text-[#231F20] leading-[1.05] mb-6 max-w-2xl"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            ¿Por qué ser el primero?
          </h2>

          {/* Intro */}
          <p className="text-[#231F20]/80 text-sm sm:text-base leading-relaxed max-w-2xl mb-16">
            Los que se unen hoy a la lista de espera serán los primeros en
            acceder a la plataforma cuando lancemos. Queremos construir esto
            junto a nuestra comunidad, y los primeros en llegar tendrán ventajas
            que no estarán disponibles para nadie más después del lanzamiento.
          </p>

          {/* Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            {benefits.map((b, i) => (
              <div key={i}>
                <div className="text-white mb-5">{b.icon}</div>
                <h3
                  className="text-base sm:text-lg uppercase tracking-wide text-[#231F20] mb-3"
                  style={{ fontFamily: "var(--font-archivo)" }}
                >
                  {b.title}
                </h3>
                <p className="text-[#231F20]/70 text-sm leading-relaxed max-w-xs">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
