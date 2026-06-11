const benefits = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Acceso anticipado",
    description:
      "Sé de los primeros en entrar a la plataforma cuando lancemos. Sin filas, sin esperas.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    title: "Beneficios exclusivos de lanzamiento",
    description:
      "Los miembros de la lista de espera recibirán condiciones especiales que no estarán disponibles al público general.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Notificación directa",
    description:
      "Te avisamos el día que abramos. Sin que tengas que estar pendiente.",
  },
];

export default function WhyFirst() {
  return (
    <section id="why" className="bg-[#7968C0] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
            ¿Por qué ser el primero?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Los primeros en registrarse tienen ventajas reales. No es solo llegar antes — es
            llegar con beneficios que el resto no va a tener.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white/10 rounded-2xl p-8 border border-white/20">
              <div className="text-white mb-5">{b.icon}</div>
              <h3 className="text-white font-bold text-xl mb-3">{b.title}</h3>
              <p className="text-white/70 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
