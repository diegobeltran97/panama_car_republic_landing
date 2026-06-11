const benefits = [
  {
    icon: "🏆",
    title: "Acceso Anticipado",
    description: "Sé de los primeros en usar la plataforma antes del lanzamiento oficial y lleva ventaja en el mercado.",
  },
  {
    icon: "🤝",
    title: "Red Exclusiva",
    description: "Únete a una comunidad seleccionada de compradores y vendedores verificados en Panamá.",
  },
  {
    icon: "💰",
    title: "Sin Comisiones",
    description: "Los miembros fundadores disfrutan de tarifas preferenciales durante el período de lanzamiento.",
  },
  {
    icon: "🔒",
    title: "Transacciones Seguras",
    description: "Sistema de verificación de vehículos y perfil de vendedores para que compres y vendas con confianza.",
  },
  {
    icon: "🚀",
    title: "Soporte Prioritario",
    description: "Los primeros miembros tienen acceso directo al equipo para resolver cualquier consulta al instante.",
  },
  {
    icon: "📱",
    title: "App Móvil",
    description: "Gestiona tus anuncios y busca autos desde cualquier lugar con nuestra app nativa.",
  },
];

export default function WhyFirst() {
  return (
    <section id="why" className="bg-[#6b4fbb] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Ventajas exclusivas
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            ¿Por qué ser el
            <br />
            <span className="text-[#F5C800]">primero?</span>
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            Los fundadores obtienen beneficios que nunca estarán disponibles después del lanzamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-colors group"
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#F5C800] transition-colors">
                {b.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
