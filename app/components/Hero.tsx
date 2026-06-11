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
    <section className="bg-[#FBF6EC] pt-16">
      <div className="px-4 sm:px-8 pt-4 pb-10">
        {/* Yellow card */}
        <div className="max-w-6xl mx-auto bg-[#FFD666] rounded-3xl px-5 sm:px-12 pt-12 sm:pt-16 pb-14 overflow-hidden">
          {/* Centered copy */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-[#7968C0] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              Coming soon
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05] tracking-tight text-[#231F20] mb-5"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              El marketplace automotriz de Panamá llega pronto
            </h1>
            <p className="text-[#231F20]/80 text-base sm:text-lg mb-7">
              Sé el primero en saber cuándo lanzamos.
            </p>

            {submitted ? (
              <div className="inline-block bg-[#231F20] text-white rounded-lg px-6 py-4">
                <p className="font-bold">
                  ¡Listo! Te avisamos en{" "}
                  <span className="text-[#F5C800]">{email}</span>
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  required
                  className="flex-1 px-4 py-2.5 rounded-md border border-[#231F20]/40 bg-white/20 text-[#231F20] placeholder-[#231F20]/50 text-sm outline-none focus:border-[#231F20] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#231F20] text-white px-5 py-2.5 rounded-md font-semibold text-sm whitespace-nowrap hover:bg-[#3a3535] transition-colors"
                >
                  Reserva tu lugar
                </button>
              </form>
            )}

            <p className="mt-4 text-[#231F20]/60 text-[11px]">
              Al hacer clic en Reserva tu lugar, confirma que acepta nuestros
              Términos y Condiciones.
            </p>
          </div>

          {/* COMPRA / VENDE / ARRANCA stacked banners */}
          <div
            className="mt-12 sm:mt-16 flex flex-col items-center select-none"
            aria-hidden="true"
          >
            <div className="w-fit bg-[#2563EB] rounded-2xl px-8 sm:px-14 py-3 sm:py-5 -rotate-[8deg] sm:-translate-x-8 lg:-translate-x-20 relative z-[1]">
              <span
                className="block text-white uppercase leading-none text-6xl sm:text-8xl lg:text-[9rem]"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                COMPRA
              </span>
            </div>
            <div className="w-fit bg-[#3B3B3B] rounded-2xl px-8 sm:px-14 py-3 sm:py-5 -rotate-2 sm:translate-x-16 lg:translate-x-44 relative z-[3] -mt-8 sm:-mt-16">
              <span
                className="block text-white uppercase leading-none text-6xl sm:text-8xl lg:text-[9rem]"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                VENDE
              </span>
            </div>
            <div className="w-fit bg-[#E2452F] rounded-2xl px-8 sm:px-14 py-3 sm:py-5 -rotate-1 relative z-[2] -mt-8 sm:-mt-14">
              <span
                className="block text-white uppercase leading-none text-6xl sm:text-8xl lg:text-[9rem]"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                ARRANCA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
