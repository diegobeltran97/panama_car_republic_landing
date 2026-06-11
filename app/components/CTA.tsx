"use client";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="cta" className="bg-[#F5C800] py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1a1a2e]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1a1a2e]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-block bg-[#1a1a2e] text-[#F5C800] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          ¡Cupos limitados!
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-[#1a1a2e] leading-none mb-6">
          ¿LISTO PARA
          <br />
          ARRANCAR?
        </h2>
        <p className="text-[#1a1a2e]/70 text-xl max-w-2xl mx-auto mb-10">
          Regístrate ahora y sé de los primeros en acceder a Panama Car Republic.
          Los cupos de acceso anticipado son limitados.
        </p>

        {submitted ? (
          <div className="bg-[#1a1a2e] text-white rounded-2xl px-8 py-6 inline-block shadow-2xl">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="text-2xl font-black mb-2">¡Ya estás dentro!</h3>
            <p className="text-white/70">
              Te avisaremos en <strong className="text-[#F5C800]">{email}</strong> cuando estemos listos.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="flex-1 px-6 py-4 rounded-full text-[#1a1a2e] font-medium shadow-lg outline-none focus:ring-4 focus:ring-[#1a1a2e]/20 text-lg"
            />
            <button
              type="submit"
              className="bg-[#1a1a2e] text-white px-8 py-4 rounded-full font-black text-lg uppercase tracking-wide hover:bg-[#2a2a4e] transition-colors shadow-lg whitespace-nowrap"
            >
              ¡Arranca!
            </button>
          </form>
        )}

        <p className="mt-6 text-[#1a1a2e]/50 text-sm">
          Sin spam. Cancela cuando quieras. 100% gratis.
        </p>
      </div>
    </section>
  );
}
