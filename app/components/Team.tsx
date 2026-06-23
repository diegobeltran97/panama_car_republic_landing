"use client";
import { useRef, useState } from "react";

const team = [
  {
    image: "/team/daniel.png",
    name: "Daniel Mckenzie",
    role: "Director General",
    bio: "Liderando el camino hacia una experiencia automotriz excepcional en Panamá.",
  },
  {
    image: "/team/edwin.jpg",
    name: "Edwin Tejada",
    role: "Director Creativo",
    bio: "Creando conceptos originales para involucrar a nuestra comunidad automotriz.",
  },
  {
    image: "/team/paola.jpg",
    name: "Paola Barnett",
    role: "Diseñadora Grafica / Ilustradora",
    bio: "Creando conceptos originales para involucrar a nuestra comunidad automotriz.",
  },
  {
    image: "/team/estefany.jpg",
    name: "Estefany",
    role: "Miembro del equipo",
    bio: "Parte del equipo de Panama Car Republic.",
  },
  {
    image: "/team/kumar.jpg",
    name: "Kumar",
    role: "Miembro del equipo",
    bio: "Parte del equipo de Panama Car Republic.",
  },
  {
    image: "/team/uriel.jpg",
    name: "Uriel",
    role: "Miembro del equipo",
    bio: "Parte del equipo de Panama Car Republic.",
  },
  {
    image: "/team/diego.jpeg",
    name: "Diego",
    role: "Miembro del equipo",
    bio: "Parte del equipo de Panama Car Republic.",
  },
];

export default function Team() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const stepSize = () => {
    const el = scrollRef.current;
    const first = el?.firstElementChild as HTMLElement | null;
    return first ? first.offsetWidth + 24 : (el?.clientWidth ?? 0);
  };

  const scrollByCard = (dir: number) => {
    scrollRef.current?.scrollBy({ left: stepSize() * dir, behavior: "smooth" });
  };

  const scrollTo = (i: number) => {
    scrollRef.current?.scrollTo({ left: stepSize() * i, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / stepSize()));
  };

  return (
    <section id="team" className="bg-[#F9F5ED] py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <p className="text-xs font-semibold text-[#3A2D1C] mb-3">Pasión</p>
        <h2
          className="text-4xl sm:text-5xl uppercase tracking-tight text-[#3A2D1C] leading-[1.05] mb-4"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          Nuestro equipo
        </h2>
        <p className="text-[#231F20]/80 text-sm sm:text-base mb-12">
          Conoce a los expertos en automóviles de Panamá.
        </p>

        {/* Horizontal scroller */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {team.map((member) => (
            <article
              key={member.name}
              className="snap-start shrink-0 w-[280px] sm:w-[340px]"
            >
              <div className="rounded-xl overflow-hidden mb-5 aspect-square bg-[#D8D2C4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-[#231F20]">
                {member.name}
              </h3>
              <p className="text-sm text-[#231F20]/60 mb-4">{member.role}</p>
              <p className="text-sm text-[#231F20]/70 leading-relaxed">
                {member.bio}
              </p>
            </article>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {team.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Ir al miembro ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  active === i ? "w-2 bg-[#231F20]" : "w-2 bg-[#231F20]/25"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Anterior"
              className="w-11 h-11 rounded-lg bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#231F20] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Siguiente"
              className="w-11 h-11 rounded-lg bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#231F20] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
