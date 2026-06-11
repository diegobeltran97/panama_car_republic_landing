"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#F5C800] rounded-full flex items-center justify-center">
            <span className="text-[#1a1a2e] font-black text-sm">P</span>
          </div>
          <span className="font-bold text-lg tracking-wide">Panama Car Republic</span>
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><a href="#about" className="hover:text-[#F5C800] transition-colors">¿Qué es?</a></li>
          <li><a href="#why" className="hover:text-[#F5C800] transition-colors">¿Por qué?</a></li>
          <li><a href="#community" className="hover:text-[#F5C800] transition-colors">Comunidad</a></li>
          <li><a href="#team" className="hover:text-[#F5C800] transition-colors">Equipo</a></li>
          <li><a href="#timeline" className="hover:text-[#F5C800] transition-colors">Historia</a></li>
        </ul>

        <a
          href="#cta"
          className="hidden md:inline-block bg-[#F5C800] text-[#1a1a2e] px-5 py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-colors"
        >
          ¡Arranca ya!
        </a>

        <button
          className="md:hidden text-white"
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
        <div className="md:hidden bg-[#1a1a2e] border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-[#F5C800]">¿Qué es?</a>
          <a href="#why" onClick={() => setOpen(false)} className="hover:text-[#F5C800]">¿Por qué?</a>
          <a href="#community" onClick={() => setOpen(false)} className="hover:text-[#F5C800]">Comunidad</a>
          <a href="#team" onClick={() => setOpen(false)} className="hover:text-[#F5C800]">Equipo</a>
          <a href="#timeline" onClick={() => setOpen(false)} className="hover:text-[#F5C800]">Historia</a>
          <a href="#cta" onClick={() => setOpen(false)} className="bg-[#F5C800] text-[#1a1a2e] px-4 py-2 rounded-full font-bold text-center">¡Arranca ya!</a>
        </div>
      )}
    </nav>
  );
}
