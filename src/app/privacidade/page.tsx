// src/app/privacidade/page.tsx
import Link from 'next/link';

export default function Privacidade() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/" className="text-sm font-semibold text-brand-navy hover:underline mb-8 inline-block">
        ← Voltar ao início
      </Link>
      <h1 className="text-3xl font-extrabold text-brand-darkNavy mb-6">Política de Privacidade</h1>
      <div className="space-y-4 text-sm text-brand-darkNavy/80 leading-relaxed bg-white p-8 rounded-2xl border border-brand-sand shadow-soft">
        <p>A <strong>NeuroViver Educação</strong> preza pela transparência, privacidade e proteção dos dados pessoais de seus visitantes e parceiros, em estrita conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).</p>
        <h2 className="text-lg font-bold text-brand-darkNavy pt-4">1. Coleta de Informações</h2>
        <p>Os dados coletados em nossos formulários (como nome, e-mail institucional, cargo, telefone e entidade) destinam-se exclusivamente à elaboração de propostas institucionais, diagnósticos pedagógicos para redes públicas e privadas, e comunicações autorizadas pelo titular.</p>
        <h2 className="text-lg font-bold text-brand-darkNavy pt-4">2. Compartilhamento e Armazenamento</h2>
        <p>Não comercializamos dados pessoais. As informações ficam armazenadas em ambientes seguros sob rígidos protocolos de confidencialidade técnica e administrativa.</p>
        <h2 className="text-lg font-bold text-brand-darkNavy pt-4">3. Direitos do Titular</h2>
        <p>A qualquer momento, o titular pode solicitar a confirmação, correção ou exclusão de seus dados entrando em contato pelo e-mail: <em>contato@neuroviver.com.br</em>.</p>
      </div>
    </main>
  );
}

