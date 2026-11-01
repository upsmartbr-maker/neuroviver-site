// src/components/FloatingWhatsApp.tsx
'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999';
  const message = encodeURIComponent(
    'Olá! Gostaria de mais informações sobre os programas pedagógicos e institucionais da NeuroViver.'
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com especialista da NeuroViver"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-elevated transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 flex items-center justify-center"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

