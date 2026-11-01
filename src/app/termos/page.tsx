// src/app/termos/page.tsx
import Link from 'next/link';

export default function Termos() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/" className="text-sm font-semibold text-brand-navy hover:underline mb-8 inline-block">
        ← Voltar ao início
      </Link>
      <h1 className="text-3xl font-extrabold text-brand-darkNavy mb-6">Termos de Uso</h1>
      <div className="space-y-4 text-sm text-brand-darkNavy/80 leading-relaxed bg-white p-8 rounded-2xl border border-brand-sand shadow-soft">
        <p>O acesso e uso do portal da <strong>NeuroViver Educação</strong> implicam na concordância integral com as condições aqui descritas.</p>
        <h2 className="text-lg font-bold text-brand-darkNavy pt-4">1. Finalidade Institucional</h2>
        <p>Este portal tem por finalidade apresentar soluções pedagógicas, formação de educadores e metodologias socioemocionais para instituições de ensino, prefeituras e organizações conveniadas.</p>
        <h2 className="text-lg font-bold text-brand-darkNavy pt-4">2. Propriedade Intelectual</h2>
        <p>Todo o conteúdo, marcas, ilustrações, programas e cartilhas são protegidos pela legislação de direitos autorais e propriedade industrial brasileira.</p>
      </div>
    </main>
  );
}

