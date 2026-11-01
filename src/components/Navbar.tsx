// src/components/Navbar.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'O Cenário', href: '#cenario' },
    { name: 'Soluções & Inclusão TEA', href: '#solucoes' },
    { name: 'Metodologia', href: '#metodologia' },
    { name: 'Resultados & Provas', href: '#impacto' },
    { name: 'Gestão & Verbas', href: '#financiamento' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 max-w-7xl mx-auto">
      <nav className="bg-white/90 backdrop-blur-md border border-brand-sand shadow-soft rounded-pill px-6 py-3 flex items-center justify-between transition-all">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-white font-bold shadow-md group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-brand-amberLight" />
          </div>
          <div>
            <span className="font-extrabold text-lg text-brand-darkNavy tracking-tight block leading-tight">
              NEURO<span className="text-brand-amber">VIVER</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-brand-navy/70 block">
              Educação & Neurociência
            </span>
          </div>
        </Link>

        {/* Desktop Rounded Pills Menu */}
        <div className="hidden lg:flex items-center gap-1 bg-brand-sand/60 p-1.5 rounded-pill border border-brand-sand">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-xs font-semibold text-brand-darkNavy hover:text-brand-navy hover:bg-white rounded-pill transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contato"
            className="flex items-center gap-2 bg-brand-navy hover:bg-brand-darkNavy text-white px-5 py-2.5 rounded-pill text-xs font-semibold shadow-soft hover:shadow-elevated transition-all"
          >
            <span>Falar com Especialista</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-brand-darkNavy focus:outline-none"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-white border border-brand-sand shadow-elevated rounded-2xl p-5 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-brand-darkNavy hover:bg-brand-sand/50 rounded-xl"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-brand-navy text-white py-3 rounded-pill text-sm font-semibold shadow-soft mt-2"
          >
            Agendar Reunião Técnica
          </Link>
        </div>
      )}
    </header>
  );
}

