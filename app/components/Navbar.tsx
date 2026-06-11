"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#231F20]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <img src="/logo.svg" alt="Panama Car Republic" className="h-9 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-white/80 text-sm font-medium hover:text-white transition-colors"
          >
            Sobre Nosotros
          </a>
          <a
            href="#why"
            className="text-white/80 text-sm font-medium hover:text-white transition-colors"
          >
            Servicios
          </a>
          <a
            href="#cta"
            className="bg-[#F5C800] text-[#231F20] text-sm font-bold px-5 py-2 rounded-full hover:bg-yellow-300 transition-colors"
          >
            Únete
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#231F20] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <a href="#about" className="text-white/80 font-medium" onClick={() => setOpen(false)}>Sobre Nosotros</a>
          <a href="#why" className="text-white/80 font-medium" onClick={() => setOpen(false)}>Servicios</a>
          <a
            href="#cta"
            className="bg-[#F5C800] text-[#231F20] font-bold px-5 py-2 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Únete
          </a>
        </div>
      )}
    </header>
  );
}
