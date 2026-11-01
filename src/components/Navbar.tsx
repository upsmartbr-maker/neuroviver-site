// src/components/Navbar.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Cenário', href: '#cenario' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Metodologia', href: '#metodologia' },
    { name: 'Resultados', href: '#impacto' },
    { name: 'Como Contratar', href: '#como-contratar' },
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollY = window.scrollY;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3 md:px-8 max-w-7xl mx-auto">
      <nav 
        role="navigation" 
        aria-label="Navegação Principal"
        className="bg-white/95 backdrop-blur-md border border-brand-sand shadow-soft rounded-pill px-4 md:px-6 py-2.5 flex items-center justify-between transition-all"
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-navy rounded-pill p-1">
          <div className="w-9 h-9 rounded-full bg-brand-navy flex items-center justify-center text-white font-bold shadow-sm group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-brand-amberLight" />
          </div>
          <div>
            <span className="font-heading font-extrabold text-base md:text-lg text-brand-darkNavy tracking-tight leading-tight block">
              NEURO<span className="text-brand-amber">VIVER</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-brand-navy/70 block">
              Educação & Neurociência
            </span>
          </div>
        </Link>

        {/* Desktop Rounded Tabs */}
        <div className="hidden lg:flex items-center gap-1 bg-brand-sand/70 p-1.5 rounded-pill border border-brand-sand">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-pill transition-all ${
                  isActive
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'text-brand-darkNavy hover:text-brand-navy hover:bg-white/80'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <Link
            href="#contato"
            className="flex items-center gap-1.5 bg-brand-navy hover:bg-brand-darkNavy text-white px-3.5 md:px-5 py-2 md:py-2.5 rounded-pill text-xs font-semibold shadow-soft hover:shadow-elevated transition-all focus:outline-none focus:ring-2 focus:ring-brand-navy/40"
          >
            <span>Falar com Especialista</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-brand-darkNavy rounded-full hover:bg-brand-sand/60 focus:outline-none focus:ring-2 focus:ring-brand-navy"
            aria-label="Abrir menu de navegação"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-white border border-brand-sand shadow-elevated rounded-2xl p-5 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 text-sm font-semibold text-brand-darkNavy hover:bg-brand-sand/50 rounded-xl transition-all"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-brand-navy text-white py-3 rounded-pill text-sm font-semibold shadow-soft mt-2"
          >
            Solicitar Apresentação Técnica
          </Link>
        </div>
      )}
    </header>
  );
}
