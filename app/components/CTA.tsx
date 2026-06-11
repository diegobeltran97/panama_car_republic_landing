"use client";
import { useState } from "react";

function MascotSmall() {
  return (
    <svg viewBox="0 0 280 200" className="w-full max-w-xs" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="140" cy="192" rx="110" ry="8" fill="#231F20" opacity="0.1" />
      <rect x="30" y="120" width="220" height="60" rx="14" fill="#CAA34B" />
      <rect x="30" y="142" width="220" height="38" rx="8" fill="#B8922E" />
      <path d="M70 120 Q95 72 140 66 Q185 72 210 120Z" fill="#CAA34B" />
      <path d="M82 118 Q105 78 140 73 Q175 78 196 118Z" fill="#87CEEB" opacity="0.65" />
      <rect x="108" y="152" width="64" height="20" rx="3" fill="#FFF" />
      <text x="140" y="166" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#231F20">UX24</text>
      <ellipse cx="238" cy="136" rx="12" ry="7" fill="#FFE680" />
      <ellipse cx="42" cy="136" rx="9" ry="6" fill="#E84040" opacity="0.8" />
      <circle cx="200" cy="177" r="24" fill="#231F20" />
      <circle cx="200" cy="177" r="15" fill="#666" />
      <circle cx="200" cy="177" r="7" fill="#231F20" />
      <circle cx="80" cy="177" r="24" fill="#231F20" />
      <circle cx="80" cy="177" r="15" fill="#666" />
      <circle cx="80" cy="177" r="7" fill="#231F20" />
      <circle cx="145" cy="55" r="27" fill="#C8873C" />
      <ellipse cx="127" cy="42" rx="10" ry="14" fill="#A06828" transform="rotate(-12 127 42)" />
      <ellipse cx="163" cy="42" rx="10" ry="14" fill="#A06828" transform="rotate(12 163 42)" />
      <ellipse cx="145" cy="67" rx="13" ry="9" fill="#E8A050" />
      <ellipse cx="145" cy="63" rx="5" ry="4" fill="#231F20" />
      <circle cx="136" cy="52" r="5" fill="#231F20" />
      <circle cx="154" cy="52" r="5" fill="#231F20" />
      <circle cx="137" cy="50" r="1.5" fill="white" />
      <circle cx="155" cy="50" r="1.5" fill="white" />
      <path d="M138 72 Q145 78 152 72" stroke="#231F20" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="172" y="90" width="20" height="14" rx="7" fill="#C8873C" />
      <ellipse cx="182" cy="104" rx="10" ry="6" fill="#C8873C" />
    </svg>
  );
}

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="cta" className="bg-[#F5C800] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy + form */}
          <div>
            <p className="text-[#231F20]/60 font-medium mb-3">
              Reserva tu lugar ahora y sé el primero en entrar cuando lancemos.
            </p>
            <h2
              className="text-5xl md:text-7xl font-black text-[#231F20] leading-none mb-8 uppercase"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              ¿Listo para arrancar?
            </h2>

            {submitted ? (
              <div className="bg-[#231F20] text-white rounded-2xl px-6 py-5 inline-block">
                <p className="font-bold text-lg">
                  ¡Listo! Te avisamos en{" "}
                  <span className="text-[#F5C800]">{email}</span>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  required
                  className="flex-1 px-5 py-3 rounded-full border-0 bg-white text-[#231F20] placeholder-[#231F20]/40 text-sm outline-none focus:ring-2 focus:ring-[#231F20]/20 shadow-sm"
                />
                <button
                  type="submit"
                  className="bg-[#231F20] text-white px-6 py-3 rounded-full font-bold text-sm whitespace-nowrap hover:bg-[#3a3535] transition-colors shadow-sm"
                >
                  Reserva tu lugar
                </button>
              </form>
            )}

            <p className="mt-4 text-[#231F20]/50 text-xs max-w-md">
              Al hacer clic en Reserva tu lugar, confirma que acepta nuestros Términos y Condiciones.
            </p>
          </div>

          {/* Right — mascot */}
          <div className="flex justify-center lg:justify-end">
            <MascotSmall />
          </div>
        </div>
      </div>
    </section>
  );
}
