"use client";
import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-[#FBF6EC] min-h-screen pt-16 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            <div className="inline-block bg-[#F5C800] text-[#231F20] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Coming soon
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight text-[#231F20] mb-5">
              El marketplace automotriz de Panamá llega pronto
            </h1>
            <p className="text-[#231F20]/70 text-lg mb-8">
              Sé el primero en saber cuándo lanzamos.
            </p>

            {submitted ? (
              <div className="bg-[#231F20] text-white rounded-2xl px-6 py-5 inline-block">
                <p className="font-bold">¡Listo! Te avisamos en <span className="text-[#F5C800]">{email}</span></p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  required
                  className="flex-1 px-5 py-3 rounded-full border border-[#231F20]/20 bg-white text-[#231F20] placeholder-[#231F20]/40 text-sm outline-none focus:ring-2 focus:ring-[#231F20]/20"
                />
                <button
                  type="submit"
                  className="bg-[#231F20] text-white px-6 py-3 rounded-full font-bold text-sm whitespace-nowrap hover:bg-[#3a3535] transition-colors"
                >
                  Reserva tu lugar
                </button>
              </form>
            )}

            <p className="mt-4 text-[#231F20]/40 text-xs max-w-md">
              Al hacer clic en Reserva tu lugar, confirma que acepta nuestros Términos y Condiciones.
            </p>
          </div>

          {/* Right column — stacked tilted blocks */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 select-none">
              {/* COMPRA */}
              <div
                className="relative z-10 bg-[#1C3A6B] px-8 py-5 mb-[-20px]"
                style={{ transform: "rotate(-2deg)" }}
              >
                <span
                  className="text-white text-8xl font-black uppercase leading-none block"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  COMPRA
                </span>
              </div>
              {/* VENDE */}
              <div
                className="relative z-20 bg-[#F5C800] px-8 py-5 mb-[-20px]"
                style={{ transform: "rotate(1.5deg)" }}
              >
                <span
                  className="text-[#231F20] text-8xl font-black uppercase leading-none block"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  VENDE
                </span>
              </div>
              {/* ARRANCA */}
              <div
                className="relative z-30 bg-[#E84040] px-8 py-5"
                style={{ transform: "rotate(-1deg)" }}
              >
                <span
                  className="text-white text-8xl font-black uppercase leading-none block"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  ARRANCA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
