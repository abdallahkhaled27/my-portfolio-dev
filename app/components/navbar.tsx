"use client";

import { useState } from "react";
import { Download } from "./icons";

const navigation = ["About", "Skills", "Projects", "Experience", "Contact"];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#0a0e17]/80 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">
        <a href="#top" className="group flex items-center gap-2 font-semibold tracking-tight text-white" onClick={closeMenu}>
          <span className="grid h-7 w-7 place-items-center rounded-lg border border-teal-300/30 bg-teal-300/10 font-mono text-xs text-teal-200 transition group-hover:bg-teal-300/20">AK</span>
          <span className="hidden text-sm sm:block">Abdallah Khaled</span>
        </a>
        <div className="hidden items-center gap-5 md:flex">
          {navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-400 transition hover:text-white focus:outline-none focus:text-white">{item}</a>)}
        </div>
        <div className="flex items-center gap-2">
          <a href="/CV.pdf" target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-slate-950 transition hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-300 sm:flex"><Download className="h-3.5 w-3.5" /> Download CV</a>
          <button type="button" aria-label="Toggle navigation menu" aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)} className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-200 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-teal-300 md:hidden"><span className="flex w-4 flex-col gap-1"><i className={`block h-px w-4 bg-current transition ${isOpen ? "translate-y-[3px] rotate-45" : ""}`} /><i className={`block h-px w-4 bg-current transition ${isOpen ? "-translate-y-[3px] -rotate-45" : ""}`} /></span></button>
        </div>
      </nav>
      {isOpen && <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#0a0e17]/95 p-2 shadow-2xl backdrop-blur-xl md:hidden">{navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white">{item}</a>)}<a href="/CV.pdf" target="_blank" rel="noreferrer" onClick={closeMenu} className="mt-1 flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950"><Download className="h-4 w-4" /> Download CV</a></div>}
    </header>
  );
}
