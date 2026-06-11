const team = [
  {
    name: "Edwin Sástoque",
    role: "Founder & CEO",
    bio: "Visionario del proyecto con más de 10 años de experiencia en el mercado automotriz panameño.",
    color: "#F5C800",
    initials: "ES",
  },
  {
    name: "María López",
    role: "CTO",
    bio: "Ingeniera de software especializada en marketplaces y experiencias de usuario para Latinoamérica.",
    color: "#6b4fbb",
    initials: "ML",
  },
  {
    name: "Carlos Herrera",
    role: "Head of Operations",
    bio: "Experto en logística y operaciones con sólida trayectoria en startups de movilidad.",
    color: "#1a2e3b",
    initials: "CH",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#6b4fbb]/10 text-[#6b4fbb] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Las personas detrás
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a2e] leading-tight">
            Nuestro{" "}
            <span className="text-[#6b4fbb]">equipo</span>
          </h2>
          <p className="mt-4 text-[#1a1a2e]/60 text-lg max-w-xl mx-auto">
            Un equipo apasionado por transformar la industria automotriz en Panamá.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <div key={i} className="text-center group">
              <div className="relative inline-block mb-6">
                <div
                  className="w-32 h-32 rounded-3xl flex items-center justify-center text-white text-4xl font-black mx-auto shadow-xl group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#F5C800] rounded-full flex items-center justify-center shadow">
                  <svg className="w-4 h-4 text-[#1a1a2e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-black text-[#1a1a2e] mb-1">{member.name}</h3>
              <div className="text-sm font-bold text-[#6b4fbb] mb-3 uppercase tracking-wider">{member.role}</div>
              <p className="text-[#1a1a2e]/60 text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
