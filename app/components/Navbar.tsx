"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "Sobre Nosotros" },
  { href: "#why", label: "Servicios" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#FBF6EC] text-[#231F20] shadow-[0_1px_0_rgba(35,31,32,0.12)]">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-6">
        <Link
          href="/"
          aria-label="Panama Car Republic Marketplace"
          className="flex shrink-0 items-center"
          onClick={closeMenu}
        >
          <Image
            src="/footer.svg"
            alt="Panama Car Republic Marketplace"
            width={158}
            height={53}
            className="h-12 w-auto sm:h-[3.3rem]"
            unoptimized
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-base font-medium text-[#231F20] transition-colors hover:text-[#7968C0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7968C0]"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#cta"
            className="rounded-lg bg-[#231F20] px-8 py-3 text-base font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition-colors hover:bg-[#342F30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7968C0]"
          >
            Contactanos
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-[#231F20] transition-colors hover:text-[#7968C0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7968C0] md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          onClick={() => setOpen((current) => !current)}
        >
          <svg
            className="h-8 w-8"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.4"
            aria-hidden="true"
          >
            {open ? (
              <>
                <path d="M9 9l14 14" />
                <path d="M23 9L9 23" />
              </>
            ) : (
              <>
                <path d="M8 11h16" />
                <path d="M8 16h16" />
                <path d="M8 21h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-[#231F20]/10 bg-[#FBF6EC] transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-[calc(100dvh-5rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex min-h-[calc(100dvh-5rem)] flex-col px-8 pb-12 pt-10">
          <div className="flex flex-col gap-9 text-[1.75rem] font-normal leading-none text-[#231F20]">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-[#7968C0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7968C0]"
                onClick={closeMenu}
              >
                {label}
              </Link>
            ))}
          </div>
          <Link
            href="#cta"
            className="mt-12 flex h-[4.5rem] w-full items-center justify-center rounded-lg bg-[#231F20] text-[1.625rem] font-medium leading-none text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] transition-colors hover:bg-[#342F30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7968C0]"
            onClick={closeMenu}
          >
            Contactanos
          </Link>
        </nav>
      </div>
    </header>
  );
}
