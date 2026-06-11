const team = [
  {
    initials: "DM",
    name: "Daniel Mckenzie",
    role: "Director General",
    bio: "Liderando el camino hacia una experiencia automotriz excepcional en Panamá.",
    color: "#7968C0",
  },
  {
    initials: "ET",
    name: "Edwin Tejada",
    role: "Director Creativo",
    bio: "Creando conceptos originales para involucrar a nuestra comunidad automotriz.",
    color: "#231F20",
  },
  {
    initials: "PB",
    name: "Paola Barnett",
    role: "Diseñadora Gráfica / Ilustradora",
    bio: "Creando conceptos originales para involucrar a nuestra comunidad automotriz.",
    color: "#CAA34B",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#F5F0E8] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-semibold text-[#231F20]/50 uppercase tracking-widest mb-3">
          Historia
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-[#231F20] leading-tight mb-3">
          Nuestro equipo
        </h2>
        <p className="text-[#231F20]/60 text-lg mb-16">
          Conoce a los expertos en automóviles de Panamá.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-black mb-6"
                style={{ backgroundColor: member.color }}
              >
                {member.initials}
              </div>
              <h3 className="text-xl font-black text-[#231F20] mb-1">{member.name}</h3>
              <p className="text-sm font-semibold text-[#231F20]/50 uppercase tracking-wide mb-4">
                {member.role}
              </p>
              <p className="text-[#231F20]/60 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
