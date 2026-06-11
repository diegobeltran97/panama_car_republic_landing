const stats = [
  { value: "71", label: "Publicaciones del año", suffix: "" },
  { value: "7,453", label: "Miembros en la comunidad", suffix: "+" },
  { value: "98%", label: "Satisfacción de usuarios", suffix: "" },
  { value: "24/7", label: "Soporte disponible", suffix: "" },
];

export default function Community() {
  return (
    <section id="community" className="bg-[#f7f4ef] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#1a1a2e]/10 text-[#1a1a2e] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Juntos somos más
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a2e] leading-tight">
            Ya somos una{" "}
            <span className="text-[#6b4fbb]">comunidad</span>
          </h2>
          <p className="mt-4 text-[#1a1a2e]/60 text-lg max-w-xl mx-auto">
            Miles de panameños ya esperan el lanzamiento. Únete antes de que abra al público.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl md:text-6xl font-black text-[#1a1a2e]">
                {s.value}
                <span className="text-[#F5C800]">{s.suffix}</span>
              </div>
              <div className="mt-2 text-[#1a1a2e]/60 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Social proof avatars */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex -space-x-3">
            {["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#e67e22", "#e91e63"].map(
              (color, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm shadow-md"
                  style={{ backgroundColor: color }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              )
            )}
            <div className="w-12 h-12 rounded-full border-2 border-white bg-[#1a1a2e] flex items-center justify-center text-white font-bold text-xs shadow-md">
              +7k
            </div>
          </div>
          <p className="text-[#1a1a2e]/60 font-medium">
            Más de 7,000 panameños ya en lista de espera
          </p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="w-5 h-5 text-[#F5C800]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
