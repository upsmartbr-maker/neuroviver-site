// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NeuroViver | Neurociência e Inclusão para Redes de Ensino',
  description:
    'Programas socioemocionais estruturados, inclusão escolar no TEA e formação de professores para prefeituras, escolas públicas e privadas.',
  metadataBase: new URL('https://neuroviver.vercel.app'),
  openGraph: {
    title: 'NeuroViver | Neurociência e Inclusão para Redes de Ensino',
    description:
      'Programas socioemocionais estruturados, inclusão escolar no TEA e formação de professores para prefeituras, escolas públicas e privadas.',
    url: 'https://neuroviver.vercel.app',
    siteName: 'NeuroViver Educação',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuroViver | Neurociência e Inclusão para Redes de Ensino',
    description:
      'Programas socioemocionais estruturados, inclusão escolar no TEA e formação de professores para redes municipais e escolas.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="font-sans bg-brand-cream text-brand-darkNavy antialiased selection:bg-brand-amberLight selection:text-brand-amber min-h-screen flex flex-col">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
