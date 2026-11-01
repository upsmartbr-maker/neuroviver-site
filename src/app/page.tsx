// src/app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { 
  Brain, ShieldCheck, HeartHandshake, Award, Users, BookOpen, 
  BarChart3, CheckCircle2, FileText, School, ChevronRight,
  Sparkles, Check, Send, Lightbulb, HelpCircle, Download,
  ExternalLink, Building, Lock, Compass, ArrowRight, UserCheck
} from 'lucide-react';

export default function Home() {
  // State Abas de Soluções
  const [activeSolucao, setActiveSolucao] = useState<'tea' | 'k12' | 'educadores' | 'nr1'>('tea');
  
  // State Abas de Contratação
  const [activeContrato, setActiveContrato] = useState<'fontes' | 'formatos'>('fontes');

  // State FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    instituicao: 'prefeitura',
    cidadeUf: '',
    interesse: 'tea',
    mensagem: '',
    concordaLgpd: false,
  });
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Download State
  const [downloadEmail, setDownloadEmail] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Máscara de Telefone
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    setFormData({ ...formData, telefone: value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.concordaLgpd) {
      alert('Por favor, concorde com os termos da Política de Privacidade (LGPD) para prosseguir.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!downloadEmail) return;
    setDownloadSuccess(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-darkNavy">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-sand border border-brand-sand/80 px-4 py-2 rounded-pill text-xs font-bold text-brand-navy shadow-sm">
              <Award className="w-4 h-4 text-brand-amber shrink-0" />
              <span>Vencedor Prêmio iBest 2021 (EdTech) & Certificação Internacional IBCCES</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-brand-darkNavy max-w-2xl">
              A Camada de Inteligência na Educação Pública e Privada
            </h1>

            <p className="text-base md:text-lg text-brand-darkNavy/80 font-normal leading-relaxed max-w-xl">
              Capacitamos prefeituras, escolas e gestores a transformarem convivência, 
              saúde mental e inclusão estruturada com base em <strong>Neurociência Cognitiva</strong> e 
              <strong> Funções Executivas</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contato"
                className="bg-brand-navy hover:bg-brand-darkNavy text-white font-semibold text-sm px-7 py-3.5 rounded-pill shadow-soft hover:shadow-elevated transition-all flex items-center gap-2"
              >
                <span>Solicitar Proposta para seu Município</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#solucoes"
                className="bg-white hover:bg-brand-sand border border-brand-sand text-brand-darkNavy font-semibold text-sm px-6 py-3.5 rounded-pill transition-all"
              >
                Conhecer Nossas Trilhas
              </a>
            </div>

            {/* Métricas do Hero */}
            <div className="pt-6 border-t border-brand-sand grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-3xl md:text-5xl font-heading font-black text-brand-navy">+12.000</p>
                <p className="text-xs md:text-sm text-brand-darkNavy/70 font-medium mt-1">Estudantes atendidos</p>
              </div>
              <div>
                <p className="text-3xl md:text-5xl font-heading font-black text-brand-amber">92%</p>
                <p className="text-xs md:text-sm text-brand-darkNavy/70 font-medium mt-1">Melhora na saúde docente</p>
              </div>
              <div>
                <p className="text-3xl md:text-5xl font-heading font-black text-brand-sage">BNCC</p>
                <p className="text-xs md:text-sm text-brand-darkNavy/70 font-medium mt-1">Alinhado à BNCC e NR-1</p>
              </div>
            </div>
          </div>

          {/* Visual Hero / Chips */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto bg-gradient-to-tr from-brand-sand via-white to-brand-amberLight/30 p-8 rounded-3xl border border-brand-sand shadow-elevated">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-brand-sand">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-solucao-tea shrink-0">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-brand-darkNavy">Funções Executivas</h4>
                    <p className="text-xs text-brand-darkNavy/70">Foco sustentado, controle inibitório e autorregulação.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-brand-sand">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-brand-amber shrink-0">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-brand-darkNavy">Inclusão TEA Estruturada</h4>
                    <p className="text-xs text-brand-darkNavy/70">Protocolos pedagógicos e apoio direto ao mediador escolar.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-brand-sand">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-solucao-educadores shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-brand-darkNavy">Segurança na Gestão Pública</h4>
                    <p className="text-xs text-brand-darkNavy/70">Viabilidade por Fundeb, MDE, Salário-Educação e Atas.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-sand text-center">
                <span className="inline-block bg-brand-sand/80 px-4 py-1.5 rounded-pill text-[11px] font-bold uppercase tracking-wider text-brand-navy">
                  Metodologia Desenvolvida com Rigor Científico
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELOS E RECONHECIMENTO */}
      <section className="py-8 bg-white border-y border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-wrap items-center justify-around gap-6 text-center">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-brand-amber" />
            <div className="text-left">
              <p className="text-xs font-bold text-brand-darkNavy">Prêmio iBest 2021</p>
              <p className="text-[11px] text-brand-darkNavy/60">Vencedor Categoria EdTech Inovação</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-solucao-tea" />
            <div className="text-left">
              <p className="text-xs font-bold text-brand-darkNavy">Certificação IBCCES (EUA)</p>
              <p className="text-[11px] text-brand-darkNavy/60">Padrão Internacional de Capacitação em TEA</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <School className="w-6 h-6 text-solucao-educadores" />
            <div className="text-left">
              <p className="text-xs font-bold text-brand-darkNavy">Pesquisa Validada UNESP</p>
              <p className="text-[11px] text-brand-darkNavy/60">Impacto Mensurado em 33 Escolas</p>
            </div>
          </div>
        </div>
      </section>

      {/* O CENÁRIO REAL */}
      <section id="cenario" className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-coral block mb-2">
              Urgência & Cenário Nacional
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight">
              A Educação e a Saúde Mental Tornaram-se um Único Desafio
            </h2>
            <p className="text-brand-darkNavy/70 text-base mt-3 leading-relaxed">
              Não basta disponibilizar conteúdos acadêmicos se não estruturamos a capacidade neurocognitiva 
              dos estudantes e a sustentação emocional dos educadores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-box border border-brand-sand shadow-soft space-y-3">
              <Users className="w-6 h-6 text-brand-coral" />
              <span className="text-4xl font-heading font-black text-brand-coral block">440 mil</span>
              <h4 className="font-heading font-bold text-base text-brand-darkNavy">Afastamentos no Brasil</h4>
              <p className="text-sm text-brand-darkNavy/70 leading-relaxed">
                Licenças médicas por transtornos mentais e sofrimento psíquico registrado em 2024.
              </p>
              <p className="text-[11px] text-brand-darkNavy/50 pt-2 border-t border-brand-sand">Fonte: INSS / Previdência Social</p>
            </div>

            <div className="bg-white p-6 rounded-box border border-brand-sand shadow-soft space-y-3">
              <School className="w-6 h-6 text-brand-navy" />
              <span className="text-4xl font-heading font-black text-brand-navy block">150 mil+</span>
              <h4 className="font-heading font-bold text-base text-brand-darkNavy">Professores Afastados</h4>
              <p className="text-sm text-brand-darkNavy/70 leading-relaxed">
                Docentes da rede pública afastados por estresse crônico, burnout e sobrecarga em sala.
              </p>
              <p className="text-[11px] text-brand-darkNavy/50 pt-2 border-t border-brand-sand">Fonte: CNTE / Censo Escolar</p>
            </div>

            <div className="bg-white p-6 rounded-box border border-brand-sand shadow-soft space-y-3">
              <HeartHandshake className="w-6 h-6 text-brand-amber" />
              <span className="text-4xl font-heading font-black text-brand-amber block">+44%</span>
              <h4 className="font-heading font-bold text-base text-brand-darkNavy">Matrículas de Alunos TEA</h4>
              <p className="text-sm text-brand-darkNavy/70 leading-relaxed">
                Crescimento expressivo que exige metodologia estruturada e mediação qualificada.
              </p>
              <p className="text-[11px] text-brand-darkNavy/50 pt-2 border-t border-brand-sand">Fonte: Censo Escolar MEC</p>
            </div>

            <div className="bg-white p-6 rounded-box border border-brand-sand shadow-soft space-y-3">
              <Brain className="w-6 h-6 text-solucao-nr1" />
              <span className="text-4xl font-heading font-black text-solucao-nr1 block">7 em 10</span>
              <h4 className="font-heading font-bold text-base text-brand-darkNavy">Sintomas de Ansiedade</h4>
              <p className="text-sm text-brand-darkNavy/70 leading-relaxed">
                Estudantes que relatam ansiedade frequente e desregulação frente às pressões cotidianas.
              </p>
              <p className="text-[11px] text-brand-darkNavy/50 pt-2 border-t border-brand-sand">Fonte: Relatórios de Saúde Escolar</p>
            </div>
          </div>

          {/* O Paradoxo Moderno com Ícone Neutro/Positivo */}
          <div className="mt-12 p-8 bg-white rounded-box border-l-4 border-l-brand-amber border border-brand-sand shadow-soft flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 shrink-0 rounded-full bg-brand-amberLight text-brand-amber flex items-center justify-center">
              <Lightbulb className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-brand-darkNavy">
                O Paradoxo Moderno: Entregamos &quot;Ferraris&quot; sem ensinar os freios
              </h4>
              <p className="text-sm text-brand-darkNavy/80 mt-1 leading-relaxed">
                Entregamos aos jovens acesso ilimitado à velocidade da informação, mas 
                esquecemos de instalar as habilidades internas essenciais: regulação das emoções, foco seletivo 
                e organização dos pensamentos. Nossa proposta estrutura esses &quot;freios cognitivos&quot; na prática.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AS 4 SOLUÇÕES - SISTEMA DE ABAS */}
      <section id="solucoes" className="py-24 bg-white border-y border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-amber block mb-2">
              Portfólio Modular Integrado
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight">
              Quatro Frentes para Atender Cada Demanda da Rede
            </h2>
            <p className="text-brand-darkNavy/70 text-base mt-2">
              Selecione a solução para visualizar os objetivos, público-alvo e composição detalhada.
            </p>
          </div>

          {/* Seletor de Abas com Cores Dedicadas */}
          <div 
            role="tablist" 
            aria-label="Soluções Pedagógicas"
            className="flex flex-nowrap overflow-x-auto gap-2 pb-4 mb-8 no-scrollbar justify-start md:justify-center"
          >
            <button
              role="tab"
              aria-selected={activeSolucao === 'tea'}
              aria-controls="panel-tea"
              id="tab-tea"
              onClick={() => setActiveSolucao('tea')}
              className={`px-6 py-3 rounded-pill text-xs md:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeSolucao === 'tea'
                  ? 'bg-solucao-tea text-white shadow-soft'
                  : 'bg-brand-sand/60 text-brand-darkNavy hover:bg-brand-sand'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Inclusão Escolar no TEA</span>
            </button>

            <button
              role="tab"
              aria-selected={activeSolucao === 'k12'}
              aria-controls="panel-k12"
              id="tab-k12"
              onClick={() => setActiveSolucao('k12')}
              className={`px-6 py-3 rounded-pill text-xs md:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeSolucao === 'k12'
                  ? 'bg-solucao-k12 text-white shadow-soft'
                  : 'bg-brand-sand/60 text-brand-darkNavy hover:bg-brand-sand'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Currículo Socioemocional K-12</span>
            </button>

            <button
              role="tab"
              aria-selected={activeSolucao === 'educadores'}
              aria-controls="panel-educadores"
              id="tab-educadores"
              onClick={() => setActiveSolucao('educadores')}
              className={`px-6 py-3 rounded-pill text-xs md:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeSolucao === 'educadores'
                  ? 'bg-solucao-educadores text-white shadow-soft'
                  : 'bg-brand-sand/60 text-brand-darkNavy hover:bg-brand-sand'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Educadores Academy</span>
            </button>

            <button
              role="tab"
              aria-selected={activeSolucao === 'nr1'}
              aria-controls="panel-nr1"
              id="tab-nr1"
              onClick={() => setActiveSolucao('nr1')}
              className={`px-6 py-3 rounded-pill text-xs md:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeSolucao === 'nr1'
                  ? 'bg-solucao-nr1 text-white shadow-soft'
                  : 'bg-brand-sand/60 text-brand-darkNavy hover:bg-brand-sand'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Equilibradamente NR-1</span>
            </button>
          </div>

          {/* Conteúdo da Aba 1: TEA */}
          {activeSolucao === 'tea' && (
            <div 
              role="tabpanel" 
              id="panel-tea" 
              aria-labelledby="tab-tea"
              className="bg-solucao-tea-light border-2 border-solucao-tea-border rounded-box p-8 md:p-12 animate-in fade-in duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <span className="px-3 py-1 rounded-pill bg-solucao-tea text-white text-xs font-bold uppercase tracking-wider">
                    Solução Pedagógica Especializada
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-brand-darkNavy">
                    Inclusão Escolar no Transtorno do Espectro Autista (TEA)
                  </h3>
                  <p className="text-sm md:text-base text-brand-darkNavy/80 leading-relaxed">
                    Uma abordagem voltada estritamente para o ambiente de aprendizagem escolar (não clínica). 
                    Focada em autorregulação, redução de crises e ampliação da autonomia em salas regulares e salas de recursos.
                  </p>
                  
                  <div className="p-4 bg-white rounded-2xl border border-solucao-tea-border space-y-2">
                    <p className="text-xs font-bold text-solucao-tea uppercase">Público-Alvo</p>
                    <p className="text-sm text-brand-darkNavy/80">
                      Estudantes com TEA da Educação Infantil ao Ensino Médio, professores regentes, estagiários e professores do Atendimento Educacional Especializado (AEE).
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h5 className="font-heading font-bold text-sm text-brand-darkNavy">Principais Benefícios</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm text-brand-darkNavy/80">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-solucao-tea shrink-0" />
                        <span>Diminuição sensível de crises e desregulação</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-solucao-tea shrink-0" />
                        <span>Apoio seguro ao trabalho do professor regular</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-solucao-tea shrink-0" />
                        <span>Autonomia progressiva nas tarefas diárias</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-solucao-tea shrink-0" />
                        <span>Qualificação de salas sensoriais e do AEE</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-solucao-tea-border shadow-sm space-y-4">
                  <h4 className="font-heading font-bold text-base text-brand-darkNavy">O que está incluso no pacote:</h4>
                  <ul className="space-y-2 text-xs md:text-sm text-brand-darkNavy/80">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-solucao-tea mt-0.5 shrink-0" />
                      <span><strong>Para cada aluno:</strong> 4 livros didáticos anuais + 8 obras literárias sobre diversidade e saúde integral.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-solucao-tea mt-0.5 shrink-0" />
                      <span><strong>Para o professor:</strong> Apostila completa do mediador com roteiro de intervenção e videoaulas de formação.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-solucao-tea mt-0.5 shrink-0" />
                      <span><strong>Para a escola:</strong> Kit de Intervenção Estruturada com cartões PRP (autorregulação), PPP (organização do pensamento) e Escada Kaizen.</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-brand-sand">
                    <a
                      href="#contato"
                      onClick={() => setFormData({ ...formData, interesse: 'tea' })}
                      className="w-full block text-center bg-solucao-tea hover:bg-blue-800 text-white font-bold py-3 rounded-pill text-xs md:text-sm transition-all shadow-soft"
                    >
                      Solicitar Detalhes do Programa TEA
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Conteúdo da Aba 2: K-12 */}
          {activeSolucao === 'k12' && (
            <div 
              role="tabpanel" 
              id="panel-k12" 
              aria-labelledby="tab-k12"
              className="bg-solucao-k12-light border-2 border-solucao-k12-border rounded-box p-8 md:p-12 animate-in fade-in duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <span className="px-3 py-1 rounded-pill bg-solucao-k12 text-white text-xs font-bold uppercase tracking-wider">
                    Educação Básica Completa
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-brand-darkNavy">
                    Currículo Socioemocional K-12
                  </h3>
                  <p className="text-sm md:text-base text-brand-darkNavy/80 leading-relaxed">
                    Trilhas pedagógicas contínuas (32 horas-aula ao ano) integradas à grade escolar ou contraturno, 
                    estruturadas por faixas de idade da infância ao Ensino Médio.
                  </p>
                  
                  <div className="p-4 bg-white rounded-2xl border border-solucao-k12-border space-y-2">
                    <p className="text-xs font-bold text-solucao-k12 uppercase">Público-Alvo</p>
                    <p className="text-sm text-brand-darkNavy/80">
                      Redes públicas e colégios privados: Educação Infantil, Ensino Fundamental (Anos Iniciais e Finais) e Ensino Médio.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h5 className="font-heading font-bold text-sm text-brand-darkNavy">Segmentação Curricular</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-brand-darkNavy/80">
                      <div className="p-2.5 bg-white rounded-xl border border-brand-sand">
                        <strong>Mini-Heróis:</strong> Ed. Infantil e 1º ano (Consciência corporal e lúdica)
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-brand-sand">
                        <strong>Super-Heróis:</strong> 2º ao 5º ano (Foco, autocontrole e combate ao bullying)
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-brand-sand">
                        <strong>Teens Academy:</strong> 6º ao 9º ano (Metacognição e convivência)
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-brand-sand">
                        <strong>Avante Academy:</strong> Ensino Médio (Projeto de vida e tomada de decisão)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-solucao-k12-border shadow-sm space-y-4">
                  <h4 className="font-heading font-bold text-base text-brand-darkNavy">O que está incluso no pacote:</h4>
                  <ul className="space-y-2 text-xs md:text-sm text-brand-darkNavy/80">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-solucao-k12 mt-0.5 shrink-0" />
                      <span>2 livros didáticos por ano letivo para cada aluno matriculado.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-solucao-k12 mt-0.5 shrink-0" />
                      <span>Livro e guia do professor mediador com sequências didáticas passo a passo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-solucao-k12 mt-0.5 shrink-0" />
                      <span>Recursos audiovisuais, podcasts e mapas conceituais complementares.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-solucao-k12 mt-0.5 shrink-0" />
                      <span>E-book para engajamento e integração com as famílias.</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-brand-sand">
                    <a
                      href="#contato"
                      onClick={() => setFormData({ ...formData, interesse: 'curriculo' })}
                      className="w-full block text-center bg-solucao-k12 hover:bg-orange-700 text-white font-bold py-3 rounded-pill text-xs md:text-sm transition-all shadow-soft"
                    >
                      Receber Grade Curricular K-12
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Conteúdo da Aba 3: Educadores Academy */}
          {activeSolucao === 'educadores' && (
            <div 
              role="tabpanel" 
              id="panel-educadores" 
              aria-labelledby="tab-educadores"
              className="bg-solucao-educadores-light border-2 border-solucao-educadores-border rounded-box p-8 md:p-12 animate-in fade-in duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <span className="px-3 py-1 rounded-pill bg-solucao-educadores text-white text-xs font-bold uppercase tracking-wider">
                    Formação e Cuidado Docente
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-brand-darkNavy">
                    Educadores Academy
                  </h3>
                  <p className="text-sm md:text-base text-brand-darkNavy/80 leading-relaxed">
                    Programa de capacitação continuada (40h a 60h) focado no bem-estar, na saúde mental do professor 
                    e nas técnicas de mediação cognitiva dentro da sala de aula.
                  </p>
                  
                  <div className="p-4 bg-white rounded-2xl border border-solucao-educadores-border space-y-2">
                    <p className="text-xs font-bold text-solucao-educadores uppercase">Público-Alvo</p>
                    <p className="text-sm text-brand-darkNavy/80">
                      Professores regentes, coordenadores pedagógicos, diretores e equipes de apoio da rede de ensino.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h5 className="font-heading font-bold text-sm text-brand-darkNavy">Eixos Formativos</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm text-brand-darkNavy/80">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-solucao-educadores shrink-0" />
                        <span>Autocuidado e preservação da saúde mental</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-solucao-educadores shrink-0" />
                        <span>Neurociência aplicada ao aprendizado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-solucao-educadores shrink-0" />
                        <span>Manejo de condutas e conflitos em sala</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-solucao-educadores shrink-0" />
                        <span>Certificação reconhecida de 40h a 60h</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-solucao-educadores-border shadow-sm space-y-4">
                  <h4 className="font-heading font-bold text-base text-brand-darkNavy">O que está incluso no pacote:</h4>
                  <ul className="space-y-2 text-xs md:text-sm text-brand-darkNavy/80">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-solucao-educadores mt-0.5 shrink-0" />
                      <span>Acesso individual à plataforma digital com videoaulas e podcasts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-solucao-educadores mt-0.5 shrink-0" />
                      <span>6 sessões de mentoria técnica ao vivo com especialistas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-solucao-educadores mt-0.5 shrink-0" />
                      <span>Apostilas impressas com mapas conceituais e guias de mediação.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-solucao-educadores mt-0.5 shrink-0" />
                      <span>Emissão de certificados de formação continuada válidos para plano de carreira.</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-brand-sand">
                    <a
                      href="#contato"
                      onClick={() => setFormData({ ...formData, interesse: 'formacao' })}
                      className="w-full block text-center bg-solucao-educadores hover:bg-emerald-800 text-white font-bold py-3 rounded-pill text-xs md:text-sm transition-all shadow-soft"
                    >
                      Consultar Formação para Docentes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Conteúdo da Aba 4: NR-1 */}
          {activeSolucao === 'nr1' && (
            <div 
              role="tabpanel" 
              id="panel-nr1" 
              aria-labelledby="tab-nr1"
              className="bg-solucao-nr1-light border-2 border-solucao-nr1-border rounded-box p-8 md:p-12 animate-in fade-in duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <span className="px-3 py-1 rounded-pill bg-solucao-nr1 text-white text-xs font-bold uppercase tracking-wider">
                    Saúde do Servidor & Conformidade Legal
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-brand-darkNavy">
                    Equilibradamente NR-1
                  </h3>
                  <p className="text-sm md:text-base text-brand-darkNavy/80 leading-relaxed">
                    Módulo especializado para gestão e mitigação de riscos psicossociais no ambiente de trabalho. 
                    Estruturado para atender às novas diretrizes regulatórias da Norma Regulamentadora NR-1.
                  </p>
                  
                  <div className="p-4 bg-white rounded-2xl border border-solucao-nr1-border space-y-2">
                    <p className="text-xs font-bold text-solucao-nr1 uppercase">Público-Alvo Específico</p>
                    <p className="text-sm text-brand-darkNavy/80">
                      Servidores públicos municipais (educação, saúde, administração) e colaboradores corporativos.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h5 className="font-heading font-bold text-sm text-brand-darkNavy">Retorno Operacional e Legal</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm text-brand-darkNavy/80">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-solucao-nr1 shrink-0" />
                        <span>Mapeamento contínuo de riscos psicossociais</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-solucao-nr1 shrink-0" />
                        <span>Redução de absenteísmo e licenças médicas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-solucao-nr1 shrink-0" />
                        <span>Evidências objetivas para relatórios de auditoria</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-solucao-nr1 shrink-0" />
                        <span>Melhoria expressiva do clima institucional</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-solucao-nr1-border shadow-sm space-y-4">
                  <h4 className="font-heading font-bold text-base text-brand-darkNavy">O que está incluso no pacote:</h4>
                  <ul className="space-y-2 text-xs md:text-sm text-brand-darkNavy/80">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-solucao-nr1 mt-0.5 shrink-0" />
                      <span>Diagnóstico inicial e questionário de risco psicossocial.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-solucao-nr1 mt-0.5 shrink-0" />
                      <span>Trilha digital de desenvolvimento socioemocional e tomada de decisão.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-solucao-nr1 mt-0.5 shrink-0" />
                      <span>Relatórios analíticos periódicos para o departamento de Recursos Humanos.</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-brand-sand">
                    <a
                      href="#contato"
                      onClick={() => setFormData({ ...formData, interesse: 'nr1' })}
                      className="w-full block text-center bg-solucao-nr1 hover:bg-purple-800 text-white font-bold py-3 rounded-pill text-xs md:text-sm transition-all shadow-soft"
                    >
                      Solicitar Diagnóstico NR-1
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* METODOLOGIA CIENTÍFICA (SEÇÃO ESCURA COM ALTO CONTRASTE) */}
      <section id="metodologia" className="py-24 bg-brand-darkNavy text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-amberLight block mb-2">
              Fundamentação Sólida
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight">
              A Ciência do Cérebro Aplicada à Sala de Aula
            </h2>
            <p className="text-slate-200 text-base mt-2 leading-relaxed">
              Quatro pilares reconhecidos da ciência cognitiva combinados para transformar o comportamento 
              de forma tangível e sustentável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="bg-white/10 border border-white/20 p-6 rounded-2xl space-y-2">
              <h4 className="font-heading font-bold text-lg text-brand-amberLight">Neurociência Cognitiva</h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                Compreensão dos circuitos neurais, plasticidade cerebral e o fortalecimento do córtex pré-frontal.
              </p>
            </div>
            <div className="bg-white/10 border border-white/20 p-6 rounded-2xl space-y-2">
              <h4 className="font-heading font-bold text-lg text-brand-amberLight">Psicologia Cognitiva</h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                Reestruturação de pensamentos automáticos e substituição de respostas impulsivas por reflexão.
              </p>
            </div>
            <div className="bg-white/10 border border-white/20 p-6 rounded-2xl space-y-2">
              <h4 className="font-heading font-bold text-lg text-brand-amberLight">Psicologia Positiva</h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                Estímulo às forças pessoais, perseverança, empatia ativa e relações cooperativas saudáveis.
              </p>
            </div>
            <div className="bg-white/10 border border-white/20 p-6 rounded-2xl space-y-2">
              <h4 className="font-heading font-bold text-lg text-brand-amberLight">Aprendizagem Mediada</h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                Método Reuven Feuerstein: o educador atua como filtro intencional entre o estímulo e a resposta.
              </p>
            </div>
          </div>

          {/* PIPELINE COGNITIVO - INFOGRÁFICO HORIZONTAL */}
          <div className="bg-white/5 border border-white/15 p-8 md:p-12 rounded-box">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-amberLight block">Pipeline Cognitivo</span>
              <h3 className="font-heading text-2xl font-bold text-white mt-1">
                Desativando o Piloto Automático
              </h3>
              <p className="text-xs md:text-sm text-slate-300 mt-2">
                O passo a passo que ensina crianças e adultos a construírem espaço entre o estímulo emocional e a ação.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              <div className="bg-white/10 border border-white/20 p-5 rounded-2xl text-center flex flex-col justify-between">
                <div>
                  <span className="w-8 h-8 rounded-full bg-blue-500 text-white font-black text-sm inline-flex items-center justify-center mb-3">1</span>
                  <h5 className="font-heading font-bold text-base text-white">1. Perceber</h5>
                  <p className="text-xs text-slate-200 mt-2">
                    Autoconsciência ativa: &quot;O que estou sentindo no meu corpo e na mente agora?&quot;
                  </p>
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 p-5 rounded-2xl text-center flex flex-col justify-between">
                <div>
                  <span className="w-8 h-8 rounded-full bg-amber-500 text-white font-black text-sm inline-flex items-center justify-center mb-3">2</span>
                  <h5 className="font-heading font-bold text-base text-white">2. Pausar</h5>
                  <p className="text-xs text-slate-200 mt-2">
                    Criação deliberada de intervalo: &quot;Freio do córtex pré-frontal antes da reação&quot;.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 p-5 rounded-2xl text-center flex flex-col justify-between">
                <div>
                  <span className="w-8 h-8 rounded-full bg-emerald-500 text-white font-black text-sm inline-flex items-center justify-center mb-3">3</span>
                  <h5 className="font-heading font-bold text-base text-white">3. Pensar</h5>
                  <p className="text-xs text-slate-200 mt-2">
                    Avaliação metacognitiva: &quot;Quais as consequências reais desta escolha?&quot;
                  </p>
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 p-5 rounded-2xl text-center flex flex-col justify-between">
                <div>
                  <span className="w-8 h-8 rounded-full bg-indigo-500 text-white font-black text-sm inline-flex items-center justify-center mb-3">4</span>
                  <h5 className="font-heading font-bold text-base text-white">4. Escolher</h5>
                  <p className="text-xs text-slate-200 mt-2">
                    Deliberação orientada: &quot;Qual o caminho mais construtivo e inteligente?&quot;
                  </p>
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 p-5 rounded-2xl text-center flex flex-col justify-between">
                <div>
                  <span className="w-8 h-8 rounded-full bg-rose-500 text-white font-black text-sm inline-flex items-center justify-center mb-3">5</span>
                  <h5 className="font-heading font-bold text-base text-white">5. Agir</h5>
                  <p className="text-xs text-slate-200 mt-2">
                    Execução intencional: Conduta social estruturada, segura e respeitosa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS E EVIDÊNCIAS CIENTÍFICAS */}
      <section id="impacto" className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-navy block mb-2">
              Evidências Práticas
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight">
              Impacto Mensurado e Comprovado em Rede Pública
            </h2>
            <p className="text-brand-darkNavy/70 text-base mt-2">
              Resultados consolidados em pesquisa acadêmica independente conduzida em 33 unidades escolares.
            </p>
          </div>

          {/* Ficha da Pesquisa */}
          <div className="mb-12 p-6 bg-white rounded-2xl border border-brand-sand shadow-sm flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <School className="w-8 h-8 text-brand-navy shrink-0" />
              <div>
                <h4 className="font-heading font-bold text-base text-brand-darkNavy">Ficha Técnica da Pesquisa Avaliativa</h4>
                <p className="text-xs md:text-sm text-brand-darkNavy/70">
                  Coordenação: Profa. Dra. Maewa Martina Gomes da Silva e Souza (UNESP) • Amostra: 80 Professores e 524 Alunos de 33 Escolas
                </p>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1.5 rounded-pill bg-brand-sand text-brand-navy">
              Santana de Parnaíba / SP
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-box border border-brand-sand shadow-soft text-center space-y-4">
              <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-brand-sand" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-brand-navy" strokeDasharray="92, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="absolute font-heading font-black text-3xl text-brand-navy">92%</span>
              </div>
              <h4 className="font-heading font-bold text-base text-brand-darkNavy">Saúde Mental Docente</h4>
              <p className="text-xs md:text-sm text-brand-darkNavy/70 leading-relaxed">
                Dos professores relataram melhora expressiva em sua saúde psicológica e no manejo de sala.
              </p>
            </div>

            <div className="bg-white p-8 rounded-box border border-brand-sand shadow-soft text-center space-y-4">
              <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-brand-sand" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-brand-amber" strokeDasharray="95, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="absolute font-heading font-black text-3xl text-brand-amber">95%</span>
              </div>
              <h4 className="font-heading font-bold text-base text-brand-darkNavy">Impacto no Aluno</h4>
              <p className="text-xs md:text-sm text-brand-darkNavy/70 leading-relaxed">
                Percepção direta dos professores quanto a avanços em controle de impulsos e concentração.
              </p>
            </div>

            <div className="bg-white p-8 rounded-box border border-brand-sand shadow-soft text-center space-y-4">
              <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-brand-sand" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-brand-sage" strokeDasharray="62, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="absolute font-heading font-black text-3xl text-brand-sage">62%</span>
              </div>
              <h4 className="font-heading font-bold text-base text-brand-darkNavy">Autorrelato Espontâneo</h4>
              <p className="text-xs md:text-sm text-brand-darkNavy/70 leading-relaxed">
                Dos estudantes de 3º ano afirmaram espontaneamente lidar melhor com sentimentos de raiva e estresse.
              </p>
            </div>
          </div>

          {/* Depoimentos Padronizados (Educadores Academy) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-box border border-brand-sand shadow-soft space-y-4">
              <p className="text-sm md:text-base text-brand-darkNavy/80 leading-relaxed">
                &ldquo;No teste de fluência do SAEB, nossos alunos tiveram um salto expressivo de desempenho. 
                O início dessa virada veio com o trabalho de autocontrole e autoconhecimento: as crianças 
                passaram a acreditar que são capazes de vencer as dificuldades.&rdquo;
              </p>
              <div className="pt-2 border-t border-brand-sand flex items-center justify-between">
                <div>
                  <p className="font-heading font-bold text-sm text-brand-darkNavy">Professora da Rede Pública</p>
                  <p className="text-xs text-brand-darkNavy/60">Anos Iniciais • Santana de Parnaíba/SP</p>
                </div>
                <Award className="w-5 h-5 text-brand-amber" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-box border border-brand-sand shadow-soft space-y-4">
              <p className="text-sm md:text-base text-brand-darkNavy/80 leading-relaxed">
                &ldquo;A formação do Educadores Academy mudou minha postura profissional e pessoal. 
                Aprendi a respirar e ouvir antes de intervir. Em sala, os alunos se tornaram mais atentos 
                e as próprias famílias vieram agradecer a melhora na convivência em casa.&rdquo;
              </p>
              <div className="pt-2 border-t border-brand-sand flex items-center justify-between">
                <div>
                  <p className="font-heading font-bold text-sm text-brand-darkNavy">Professora Participante</p>
                  <p className="text-xs text-brand-darkNavy/60">Formação Educadores Academy</p>
                </div>
                <Award className="w-5 h-5 text-brand-sage" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO CONTRATAR E FINANCIAR - COM ABAS (PRIORIDADE 0 CUMPRIDA) */}
      <section id="como-contratar" className="py-24 bg-white border-y border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-amber block mb-2">
              Gestão Pública & Segurança Orçamentária
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight">
              Como Contratar e Financiar
            </h2>
            <p className="text-brand-darkNavy/70 text-base mt-2">
              Conheça as fontes de recurso e os formatos de contratação mais utilizados por redes públicas.
            </p>
          </div>

          {/* Abas de Contratação */}
          <div 
            role="tablist" 
            aria-label="Contratação e Financiamento"
            className="flex justify-center gap-3 mb-10"
          >
            <button
              role="tab"
              aria-selected={activeContrato === 'fontes'}
              aria-controls="panel-fontes"
              id="tab-fontes"
              onClick={() => setActiveContrato('fontes')}
              className={`px-6 py-2.5 rounded-pill text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeContrato === 'fontes'
                  ? 'bg-brand-navy text-white shadow-soft'
                  : 'bg-brand-sand/60 text-brand-darkNavy hover:bg-brand-sand'
              }`}
            >
              Fontes de Recurso
            </button>
            <button
              role="tab"
              aria-selected={activeContrato === 'formatos'}
              aria-controls="panel-formatos"
              id="tab-formatos"
              onClick={() => setActiveContrato('formatos')}
              className={`px-6 py-2.5 rounded-pill text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeContrato === 'formatos'
                  ? 'bg-brand-navy text-white shadow-soft'
                  : 'bg-brand-sand/60 text-brand-darkNavy hover:bg-brand-sand'
              }`}
            >
              Formas de Contratação
            </button>
          </div>

          {/* Conteúdo Aba Fontes */}
          {activeContrato === 'fontes' && (
            <div 
              role="tabpanel" 
              id="panel-fontes" 
              aria-labelledby="tab-fontes"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300"
            >
              <div className="bg-brand-cream p-6 rounded-box border border-brand-sand shadow-sm space-y-3">
                <FileText className="w-6 h-6 text-brand-navy" />
                <h4 className="font-heading font-bold text-base text-brand-darkNavy">Fundeb (Parcela 30%)</h4>
                <p className="text-xs md:text-sm text-brand-darkNavy/70 leading-relaxed">
                  Aquisição de material didático e capacitação docente enquadrados como despesas de MDE (Art. 70 da LDB).
                </p>
              </div>

              <div className="bg-brand-cream p-6 rounded-box border border-brand-sand shadow-sm space-y-3">
                <School className="w-6 h-6 text-brand-amber" />
                <h4 className="font-heading font-bold text-base text-brand-darkNavy">Recursos Próprios MDE</h4>
                <p className="text-xs md:text-sm text-brand-darkNavy/70 leading-relaxed">
                  Contabilizados no índice constitucional obrigatório de 25% para aprimoramento pedagógico contínuo.
                </p>
              </div>

              <div className="bg-brand-cream p-6 rounded-box border border-brand-sand shadow-sm space-y-3">
                <Building className="w-6 h-6 text-brand-sage" />
                <h4 className="font-heading font-bold text-base text-brand-darkNavy">Salário-Educação & PDDE</h4>
                <p className="text-xs md:text-sm text-brand-darkNavy/70 leading-relaxed">
                  Recursos destinados a livros, cartilhas estruturadas e programas de fortalecimento da educação básica.
                </p>
              </div>

              <div className="bg-brand-cream p-6 rounded-box border border-brand-sand shadow-sm space-y-3">
                <ShieldCheck className="w-6 h-6 text-solucao-nr1" />
                <h4 className="font-heading font-bold text-base text-brand-darkNavy">FIA, PSE e Emendas</h4>
                <p className="text-xs md:text-sm text-brand-darkNavy/70 leading-relaxed">
                  Projetos de saúde mental e atenção psicossocial escolar com respaldo na Lei 14.819/2024.
                </p>
              </div>
            </div>
          )}

          {/* Conteúdo Aba Formatos - 3 Itens Perfeitamente Balanceados */}
          {activeContrato === 'formatos' && (
            <div 
              role="tabpanel" 
              id="panel-formatos" 
              aria-labelledby="tab-formatos"
              className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-300"
            >
              <div className="bg-brand-cream p-8 rounded-box border border-brand-sand shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-brand-navy flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-brand-darkNavy">Ata de Registro de Preços</h4>
                <p className="text-sm text-brand-darkNavy/70 leading-relaxed">
                  Adesão facilitada a atas vigentes com distribuidor autorizado, permitindo agilidade no cronograma letivo 
                  e economia processual para a administração municipal.
                </p>
              </div>

              <div className="bg-brand-cream p-8 rounded-box border border-brand-sand shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-brand-amber flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-brand-darkNavy">Licitação por Técnica e Preço</h4>
                <p className="text-sm text-brand-darkNavy/70 leading-relaxed">
                  Modalidade competitiva com pontuação técnica máxima pela qualidade metodológica, 
                  reconhecimentos nacionais e formação continuada aos professores da rede.
                </p>
              </div>

              <div className="bg-brand-cream p-8 rounded-box border border-brand-sand shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-brand-sage flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-brand-darkNavy">Patrocínio e Parcerias Privadas</h4>
                <p className="text-sm text-brand-darkNavy/70 leading-relaxed">
                  Modelo de Investimento Social Privado viabilizado em parceria com indústrias e empresas locais, 
                  financiando a implantação completa em escolas municipais.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* QUEM SOMOS & PARCEIROS */}
      <section id="quem-somos" className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-brand-navy block">
                Sobre a NeuroViver
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight">
                Integrando Neurociência e Prática Escolar
              </h2>
              <p className="text-sm md:text-base text-brand-darkNavy/80 leading-relaxed">
                A <strong>NeuroViver</strong> é uma organização dedicada à representação, distribuição e assessoria 
                técnica da metodologia <strong>Brain2Be</strong> em todo o Brasil.
              </p>
              <p className="text-sm md:text-base text-brand-darkNavy/80 leading-relaxed">
                Nossa missão é apoiar secretarias municipais de educação, prefeitos e mantenedores escolares 
                com soluções que integram material didático estruturado, ferramentas visuais de mediação e 
                capacitação docente sólida.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-brand-navy">
                <span className="px-4 py-2 bg-white rounded-pill border border-brand-sand">Assessoria Pedagógica Presencial</span>
                <span className="px-4 py-2 bg-white rounded-pill border border-brand-sand">Suporte na Instrução Processual</span>
                <span className="px-4 py-2 bg-white rounded-pill border border-brand-sand">Acompanhamento e Métricas</span>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-box border border-brand-sand shadow-soft space-y-6">
              <h3 className="font-heading font-bold text-lg text-brand-darkNavy">Reconhecimento & Referências Nacionais</h3>
              <div className="space-y-4">
                <div className="p-4 bg-brand-cream rounded-2xl border border-brand-sand flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-sm text-brand-darkNavy">Prêmio iBest (2021)</h5>
                    <p className="text-xs text-brand-darkNavy/70">Eleita a melhor solução EdTech em educação do Brasil.</p>
                  </div>
                  <Award className="w-6 h-6 text-brand-amber" />
                </div>
                <div className="p-4 bg-brand-cream rounded-2xl border border-brand-sand flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-sm text-brand-darkNavy">Certificação IBCCES (EUA)</h5>
                    <p className="text-xs text-brand-darkNavy/70">Padrão internacional de qualidade para autismo e neurodiversidade.</p>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-solucao-tea" />
                </div>
                <div className="p-4 bg-brand-cream rounded-2xl border border-brand-sand flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-sm text-brand-darkNavy">Veiculação Nacional - TV Record</h5>
                    <p className="text-xs text-brand-darkNavy/70">Reportagem de destaque no combate à violência escolar e saúde mental.</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-brand-darkNavy/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIAIS PARA DOWNLOAD */}
      <section className="py-20 bg-white border-y border-brand-sand">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center space-y-6">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-amber block">
            Dossiê para Gestores
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-brand-darkNavy">
            Baixe o Material Institucional e a Ementa Pedagógica
          </h2>
          <p className="text-sm md:text-base text-brand-darkNavy/70 max-w-2xl mx-auto leading-relaxed">
            Receba em seu e-mail a apresentação institucional completa, amostras dos livros de TEA e o plano detalhado de capacitação docente.
          </p>

          {downloadSuccess ? (
            <div className="p-6 bg-brand-sageLight rounded-2xl border border-brand-sage/40 max-w-md mx-auto">
              <Check className="w-8 h-8 text-brand-sage mx-auto mb-2" />
              <p className="font-bold text-sm text-brand-sage">Link enviado com sucesso!</p>
              <p className="text-xs text-brand-darkNavy/70 mt-1">Verifique sua caixa de entrada para fazer o download.</p>
            </div>
          ) : (
            <form onSubmit={handleDownloadSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={downloadEmail}
                onChange={(e) => setDownloadEmail(e.target.value)}
                placeholder="Seu e-mail institucional"
                className="flex-1 px-5 py-3 rounded-pill border border-brand-sand bg-brand-cream text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
              />
              <button
                type="submit"
                className="bg-brand-navy hover:bg-brand-darkNavy text-white font-bold px-6 py-3 rounded-pill text-xs md:text-sm transition-all shadow-soft flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Baixar Dossiê</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section id="faq" className="py-24 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-navy block mb-2">
              Tire Suas Dúvidas
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight">
              Perguntas Frequentes de Gestores e Educadores
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "A solução de inclusão para TEA é uma intervenção clínica?",
                a: "Não. Trata-se estritamente de uma solução pedagógica estruturada para a sala de aula regular e o Atendimento Educacional Especializado (AEE), com materiais adaptados, cartões visuais e apoio de mediação ao professor."
              },
              {
                q: "O programa exige encaixe em disciplina própria na grade?",
                a: "Não necessariamente. As 32 horas-aula anuais podem ser ministradas como módulo transversal, projeto interdisciplinar, contraturno escolar ou disciplina regular, conforme as diretrizes pedagógicas de cada rede."
              },
              {
                q: "Como funciona a formação dos professores?",
                a: "O curso Educadores Academy oferece certificação de 40h a 60h por meio de plataforma digital interativa, apostilas impressas do mediador e 6 sessões de mentoria técnica ao vivo com nossos especialistas."
              },
              {
                q: "Como o programa atende às diretrizes da Norma Regulamentadora NR-1?",
                a: "O módulo Equilibradamente atua diretamente na prevenção e diagnóstico dos fatores de riscos psicossociais no trabalho, gerando relatórios de acompanhamento contínuo e promovendo a saúde mental de servidores e colaboradores."
              },
              {
                q: "Quanto tempo leva para a implantação na rede municipal?",
                a: "A partir da formalização contratual, o envio de materiais físicos e o início da capacitação online de professores levam entre 15 e 30 dias, garantindo rápido alinhamento pedagógico."
              },
              {
                q: "A NeuroViver fornece apoio documental para o processo licitatório?",
                a: "Sim. Auxiliamos a secretaria com todo o dossiê técnico pedagógico, detalhamento dos materiais e justificativas para atas de registro de preços ou licitações por técnica e preço."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-brand-sand overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 hover:bg-brand-sand/30 transition-colors focus:outline-none"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-heading font-bold text-sm md:text-base text-brand-darkNavy">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-brand-navy transition-transform duration-200 shrink-0 ${openFaq === index ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-brand-darkNavy/80 leading-relaxed border-t border-brand-sand">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE CONTATO (LGPD & CONTRASTE REFORÇADO) */}
      <section id="contato" className="py-24 bg-white border-t border-brand-sand">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="bg-brand-cream p-8 md:p-12 rounded-box border border-brand-sand shadow-elevated">
            <div className="text-center mb-8">
              <span className="text-xs font-bold tracking-widest uppercase text-brand-amber block mb-1">
                Atendimento Consultivo
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-brand-darkNavy">
                Solicite uma Reunião Técnica ou Proposta Personalizada
              </h2>
              <p className="text-sm text-brand-darkNavy/70 mt-2">
                Preencha os campos abaixo. Nossa equipe pedagógica entrará em contato em até 24 horas úteis.
              </p>
            </div>

            {/* CTAs Segmentados por Público */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, instituicao: 'prefeitura' })}
                className={`px-4 py-2 rounded-pill text-xs font-bold transition-all ${
                  formData.instituicao === 'prefeitura'
                    ? 'bg-brand-navy text-white'
                    : 'bg-white border border-brand-sand text-brand-darkNavy hover:bg-brand-sand'
                }`}
              >
                Sou Prefeitura / Secretaria
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, instituicao: 'escola_privada' })}
                className={`px-4 py-2 rounded-pill text-xs font-bold transition-all ${
                  formData.instituicao === 'escola_privada'
                    ? 'bg-brand-navy text-white'
                    : 'bg-white border border-brand-sand text-brand-darkNavy hover:bg-brand-sand'
                }`}
              >
                Sou Escola / Rede Privada
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, instituicao: 'ong' })}
                className={`px-4 py-2 rounded-pill text-xs font-bold transition-all ${
                  formData.instituicao === 'ong'
                    ? 'bg-brand-navy text-white'
                    : 'bg-white border border-brand-sand text-brand-darkNavy hover:bg-brand-sand'
                }`}
              >
                Sou ONG / Fundação
              </button>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-brand-sageLight rounded-2xl text-center space-y-3 border border-brand-sage/40">
                <div className="w-12 h-12 bg-brand-sage text-white rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-xl font-bold text-brand-sage">Solicitação Registrada com Sucesso!</h4>
                <p className="text-sm text-brand-darkNavy/80">
                  Nossos consultores pedagógicos e institucionais já receberam sua mensagem e entrarão em contato pelo telefone e e-mail informados.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-darkNavy mb-1">Nome Completo</label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Ex: Maria dos Santos"
                      className="w-full px-4 py-3 rounded-xl border border-brand-sand bg-white text-xs md:text-sm text-brand-darkNavy placeholder-brand-darkNavy/40 focus:outline-none focus:ring-2 focus:ring-brand-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-darkNavy mb-1">E-mail Profissional</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nome@municipio.gov.br ou .com"
                      className="w-full px-4 py-3 rounded-xl border border-brand-sand bg-white text-xs md:text-sm text-brand-darkNavy placeholder-brand-darkNavy/40 focus:outline-none focus:ring-2 focus:ring-brand-navy"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-darkNavy mb-1">Telefone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={handlePhoneChange}
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-brand-sand bg-white text-xs md:text-sm text-brand-darkNavy placeholder-brand-darkNavy/40 focus:outline-none focus:ring-2 focus:ring-brand-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-darkNavy mb-1">Tipo de Instituição</label>
                    <select
                      value={formData.instituicao}
                      onChange={(e) => setFormData({ ...formData, instituicao: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-sand bg-white text-xs md:text-sm text-brand-darkNavy focus:outline-none focus:ring-2 focus:ring-brand-navy"
                    >
                      <option value="prefeitura">Prefeitura / Secretaria de Educação</option>
                      <option value="ong">ONG / Terceiro Setor</option>
                      <option value="escola_publica">Escola Pública (Direção / Equipe)</option>
                      <option value="escola_privada">Colégio / Rede Particular</option>
                      <option value="empresa">Empresa / Programa de Saúde NR-1</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-darkNavy mb-1">Cidade / Estado</label>
                    <input
                      type="text"
                      required
                      value={formData.cidadeUf}
                      onChange={(e) => setFormData({ ...formData, cidadeUf: e.target.value })}
                      placeholder="Ex: Curitiba / PR"
                      className="w-full px-4 py-3 rounded-xl border border-brand-sand bg-white text-xs md:text-sm text-brand-darkNavy placeholder-brand-darkNavy/40 focus:outline-none focus:ring-2 focus:ring-brand-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-darkNavy mb-1">Interesse Principal</label>
                    <select
                      value={formData.interesse}
                      onChange={(e) => setFormData({ ...formData, interesse: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-sand bg-white text-xs md:text-sm text-brand-darkNavy focus:outline-none focus:ring-2 focus:ring-brand-navy"
                    >
                      <option value="tea">Inclusão Escolar no TEA & Salas AEE</option>
                      <option value="curriculo">Currículo Socioemocional K-12</option>
                      <option value="formacao">Formação de Professores (Educadores Academy)</option>
                      <option value="nr1">Saúde Mental & Norma NR-1</option>
                      <option value="completo">Solução Completa da Rede</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-darkNavy mb-1">Mensagem ou Necessidade Específica</label>
                  <textarea
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Informe se já possui número estimado de estudantes ou prazo previsto para implantação..."
                    className="w-full px-4 py-3 rounded-xl border border-brand-sand bg-white text-xs md:text-sm text-brand-darkNavy placeholder-brand-darkNavy/40 focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  ></textarea>
                </div>

                {/* Consentimento LGPD */}
                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="lgpd"
                    required
                    checked={formData.concordaLgpd}
                    onChange={(e) => setFormData({ ...formData, concordaLgpd: e.target.checked })}
                    className="w-4 h-4 mt-0.5 rounded border-brand-sand text-brand-navy focus:ring-brand-navy"
                  />
                  <label htmlFor="lgpd" className="text-xs text-brand-darkNavy/70 leading-snug">
                    Concordo com o tratamento dos dados acima para contato e proposta técnica, nos termos da{' '}
                    <Link href="/privacidade" className="text-brand-navy font-bold underline hover:text-brand-amber">
                      Política de Privacidade
                    </Link>{' '}
                    (LGPD).
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-navy hover:bg-brand-darkNavy text-white font-bold py-4 rounded-pill text-sm shadow-soft hover:shadow-elevated transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  {loading ? (
                    <span>Registrando solicitação...</span>
                  ) : (
                    <>
                      <span>Enviar Solicitação de Contato</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER INSTITUCIONAL COMPLETO */}
      <footer className="bg-brand-darkNavy text-slate-300 py-16 px-4 md:px-8 border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Coluna 1 */}
          <div className="space-y-3">
            <span className="font-heading font-extrabold text-xl text-white tracking-tight">
              NEURO<span className="text-brand-amber">VIVER</span>
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Representação e Distribuição Autorizada da Metodologia Brain2Be em todo o território nacional.
            </p>
            <p className="text-[11px] text-slate-400">
              Transformando a ciência do cérebro em práticas reais de aprendizagem e inclusão socioemocional.
            </p>
          </div>

          {/* Coluna 2 */}
          <div className="space-y-2">
            <h5 className="font-heading font-bold text-sm text-white mb-2">Programas</h5>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li><a href="#solucoes" className="hover:text-white">Inclusão Escolar TEA</a></li>
              <li><a href="#solucoes" className="hover:text-white">Currículo K-12 Socioemocional</a></li>
              <li><a href="#solucoes" className="hover:text-white">Educadores Academy</a></li>
              <li><a href="#solucoes" className="hover:text-white">Equilibradamente NR-1</a></li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div className="space-y-2">
            <h5 className="font-heading font-bold text-sm text-white mb-2">Gestão Pública</h5>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li><a href="#como-contratar" className="hover:text-white">Fontes de Recurso (Fundeb / MDE)</a></li>
              <li><a href="#como-contratar" className="hover:text-white">Formatos de Contratação</a></li>
              <li><a href="#impacto" className="hover:text-white">Pesquisa de Impacto UNESP</a></li>
              <li><a href="#faq" className="hover:text-white">Perguntas Frequentes (FAQ)</a></li>
            </ul>
          </div>

          {/* Coluna 4: Dados Corporativos e Jurídicos */}
          <div className="space-y-2">
            <h5 className="font-heading font-bold text-sm text-white mb-2">Contato Institucional</h5>
            <p className="text-xs text-slate-300"><strong>Razão Social:</strong> NeuroViver Educação e Treinamento Ltda.</p>
            <p className="text-xs text-slate-300"><strong>CNPJ:</strong> 00.000.000/0001-00 (Placeholder)</p>
            <p className="text-xs text-slate-300"><strong>E-mail:</strong> contato@neuroviver.com.br</p>
            <p className="text-xs text-slate-300"><strong>Atendimento:</strong> São Paulo / SP - Brasil</p>
            <div className="pt-2 flex gap-4 text-xs font-bold text-brand-amberLight">
              <Link href="/privacidade" className="hover:underline">Privacidade</Link>
              <Link href="/termos" className="hover:underline">Termos de Uso</Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-400">
          <p>© 2026 NeuroViver Educação. Todos os direitos reservados.</p>
          <p>Metodologia Brain2Be utilizada sob licença e representação autorizada.</p>
        </div>
      </footer>
    </div>
  );
}
