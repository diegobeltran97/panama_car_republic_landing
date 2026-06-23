"use client";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      id="cta"
      className="bg-[#F2F2F2] pt-20 sm:pt-24 pb-0 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-[#231F20] text-sm sm:text-base mb-6">
          Reserva tu lugar ahora y sé el primero en entrar cuando lancemos.
        </p>

        <h2
          className="text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#231F20] leading-[1.05] mb-10"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          ¿Listo para arrancar?
        </h2>

        {submitted ? (
          <div className="bg-[#231F20] text-white rounded-xl px-6 py-5 inline-block mb-4">
            <p className="font-bold text-base sm:text-lg">
              ¡Listo! Te avisamos en{" "}
              <span className="text-[#F5C800]">{email}</span>
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto mb-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              required
              className="flex-1 px-5 py-3.5 rounded-xl border border-[#231F20]/10 bg-[#E8E8E8] text-[#231F20] placeholder-[#231F20]/40 text-sm outline-none focus:ring-2 focus:ring-[#231F20]/15"
            />
            <button
              type="submit"
              className="bg-[#231F20] text-white px-6 py-3.5 rounded-xl font-bold text-sm whitespace-nowrap hover:bg-[#3a3535] transition-colors"
            >
              Reserva tu lugar
            </button>
          </form>
        )}

        <p className="text-[#231F20]/60 text-xs max-w-md mx-auto">
          Al hacer clic en Reserva tu lugar, confirma que acepta nuestros
          Términos y Condiciones.
        </p>
      </div>

      <div className="flex justify-center mt-10 sm:mt-14">
        <img
          src="/logo_section_email.png"
          alt="Mascota de Panama Car Republic dando pulgar arriba"
          className="w-full max-w-md sm:max-w-lg object-contain object-bottom"
        />
      </div>
    </section>
  );
}
