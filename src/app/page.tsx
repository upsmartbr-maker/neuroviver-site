// src/app/page.tsx
'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { 
  Brain, ShieldCheck, HeartHandshake, Award, Users, BookOpen, 
  BarChart3, CheckCircle2, AlertTriangle, FileText, School, ChevronRight,
  Sparkles, Check, Send
} from 'lucide-react';

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulação de envio ou integração com backend / webhook
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-darkNavy selection:bg-brand-amberLight selection:text-brand-amber">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-sand border border-brand-sand/80 px-4 py-2 rounded-pill text-xs font-semibold text-brand-navy shadow-sm">
              <Award className="w-4 h-4 text-brand-amber" />
              <span>Metodologia Premiada: Melhor EdTech do Brasil (iBest) & Certificação IBCCES</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-brand-darkNavy">
              A Camada de Inteligência na Educação Pública e Privada.
            </h1>

            <p className="text-base md:text-lg text-brand-darkNavy/80 font-normal leading-relaxed">
              Capacitamos escolas, prefeituras e gestores a transformarem convivência, 
              saúde mental e inclusão estruturada com base em <strong>Neurociência Cognitiva</strong> e 
              <strong> Funções Executivas</strong>. Soluções curriculares homologadas para salas regulares, 
              AEE/TEA e formação docente continuada.
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

            <div className="pt-6 border-t border-brand-sand/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-2xl font-black text-brand-navy">+12.000</p>
                <p className="text-xs text-brand-darkNavy/70">Estudantes impactados</p>
              </div>
              <div>
                <p className="text-2xl font-black text-brand-amber">92%</p>
                <p className="text-xs text-brand-darkNavy/70">Melhora na saúde docente</p>
              </div>
              <div>
                <p className="text-2xl font-black text-brand-sage">100%</p>
                <p className="text-xs text-brand-darkNavy/70">Alinhado à BNCC & NR-1</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto bg-gradient-to-tr from-brand-sand via-white to-brand-amberLight/30 p-8 rounded-3xl border border-brand-sand shadow-elevated">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-brand-sand">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-brand-navy">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Funções Executivas</h4>
                    <p className="text-xs text-brand-darkNavy/70">Foco, controle inibitório e autorregulação.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-brand-sand">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-brand-amber">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Inclusão TEA Estruturada</h4>
                    <p className="text-xs text-brand-darkNavy/70">Protocolos PRP/PPP e apoio direto ao mediador.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-brand-sand">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-brand-sage">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Segurança na Gestão Pública</h4>
                    <p className="text-xs text-brand-darkNavy/70">Viabilidade por Fundeb, Inexigibilidade e Atas.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-sand text-center">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-darkNavy/60">
                  Tecnologia e Metodologia Desenvolvidas com Rigor Científico
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO / O CENÁRIO REAL */}
      <section id="cenario" className="py-20 bg-white border-y border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-amber block mb-2">
              Urgência & Cenário Nacional
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              A Educação e a Saúde Mental Tornaram-se um Único Desafio.
            </h2>
            <p className="text-brand-darkNavy/70 text-base mt-3">
              Não basta prover acesso ao conteúdo se não estruturamos a capacidade neurocognitiva 
              dos estudantes e a estabilidade emocional dos professores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-brand-cream p-6 rounded-2xl border border-brand-sand shadow-sm space-y-2">
              <span className="text-3xl font-black text-brand-coral">440 mil</span>
              <h4 className="font-bold text-sm text-brand-darkNavy">Afastamentos no Brasil</h4>
              <p className="text-xs text-brand-darkNavy/70 leading-relaxed">
                Licenças médicas por transtornos mentais e sofrimento psíquico registrado em 2024.
              </p>
            </div>

            <div className="bg-brand-cream p-6 rounded-2xl border border-brand-sand shadow-sm space-y-2">
              <span className="text-3xl font-black text-brand-navy">150 mil+</span>
              <h4 className="font-bold text-sm text-brand-darkNavy">Professores Afastados</h4>
              <p className="text-xs text-brand-darkNavy/70 leading-relaxed">
                Docentes da rede básica em colapso emocional decorrente de sobrecarga e conflitos diários.
              </p>
            </div>

            <div className="bg-brand-cream p-6 rounded-2xl border border-brand-sand shadow-sm space-y-2">
              <span className="text-3xl font-black text-brand-amber">+44%</span>
              <h4 className="font-bold text-sm text-brand-darkNavy">Crescimento de Alunos TEA</h4>
              <p className="text-xs text-brand-darkNavy/70 leading-relaxed">
                Salas sem recursos estruturados geram sobrecarga, desregulação e evasão.
              </p>
            </div>

            <div className="bg-brand-cream p-6 rounded-2xl border border-brand-sand shadow-sm space-y-2">
              <span className="text-3xl font-black text-brand-darkNavy">7 em 10</span>
              <h4 className="font-bold text-sm text-brand-darkNavy">Alunos com Sintomas de Ansiedade</h4>
              <p className="text-xs text-brand-darkNavy/70 leading-relaxed">
                O Brasil lidera índices mundiais de estresse e crises emocionais infantojuvenis.
              </p>
            </div>
          </div>

          {/* O Paradoxo Moderno */}
          <div className="mt-12 p-8 bg-brand-sand/50 rounded-2xl border border-brand-sand flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 shrink-0 rounded-full bg-brand-coral/10 text-brand-coral flex items-center justify-center font-bold text-xl">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-brand-darkNavy">O Paradoxo Moderno: Entregamos Ferraris sem Freios</h4>
              <p className="text-sm text-brand-darkNavy/80 mt-1">
                Entregamos às crianças acesso ilimitado à informação e estímulos ultrarrápidos, mas 
                esquecemos de instalar os &quot;freios&quot;: regulação emocional, sustentação da atenção e foco. 
                Velocidade sem freio gera desastre; nossa proposta instala os freios executivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AS 4 SOLUÇÕES INTEGRADAS */}
      <section id="solucoes" className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-amber block mb-2">
            Portfólio Modular
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Uma Abordagem Completa e Sistêmica para a sua Instituição
          </h2>
          <p className="text-brand-darkNavy/70 text-sm md:text-base mt-2">
            Programas estruturados com material didático impresso exclusivo, capacitação de mediadores e ambiente digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Inclusão TEA */}
          <div className="bg-white p-8 rounded-3xl border border-brand-sand shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-pill bg-brand-amberLight text-brand-amber text-xs font-bold">
                Especializado & Inclusivo
              </span>
              <h3 className="text-2xl font-bold text-brand-darkNavy">Inclusão Escolar no TEA</h3>
              <p className="text-sm text-brand-darkNavy/70">
                Solução pedagógica (não clínica) para suporte diário na sala regular e no Atendimento Educacional Especializado (AEE).
              </p>
              <ul className="space-y-2 text-xs text-brand-darkNavy/80 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage" />
                  <span>4 livros didáticos anuais + 8 obras de literatura sobre diversidade</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage" />
                  <span>Kit Intervenção Estruturada: Cartões de rotina, PRP, PPP e Escada Kaizen</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage" />
                  <span>Guia do Mediador com orientações práticas para PEI/PDI e salas sensoriais</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-sand">
              <a href="#contato" className="text-xs font-bold text-brand-navy hover:text-brand-amber flex items-center gap-1">
                Solicitar detalhes técnicos de implantação <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Currículo K-12 */}
          <div className="bg-white p-8 rounded-3xl border border-brand-sand shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-pill bg-blue-50 text-brand-navy text-xs font-bold">
                Educação Básica Completa
              </span>
              <h3 className="text-2xl font-bold text-brand-darkNavy">Currículo Socioemocional K-12</h3>
              <p className="text-sm text-brand-darkNavy/70">
                32 horas-aula ao ano organizadas por faixa etária com personagens autorais e ancoragem visual.
              </p>
              <ul className="space-y-2 text-xs text-brand-darkNavy/80 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage" />
                  <span><strong>Mini-Heróis:</strong> Educação Infantil e 1º ano (Consciência corporal e lúdica)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage" />
                  <span><strong>Super-Heróis:</strong> Anos Iniciais do Fundamental (Gestão de impulsos e foco)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage" />
                  <span><strong>Teens & Avante Academy:</strong> Anos Finais e Ensino Médio (Projeto de vida e resiliência)</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-sand">
              <a href="#contato" className="text-xs font-bold text-brand-navy hover:text-brand-amber flex items-center gap-1">
                Conferir estrutura curricular anual <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Formação Docente */}
          <div className="bg-white p-8 rounded-3xl border border-brand-sand shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-pill bg-emerald-50 text-brand-sage text-xs font-bold">
                Capacitação & Cuidado
              </span>
              <h3 className="text-2xl font-bold text-brand-darkNavy">Educadores Academy</h3>
              <p className="text-sm text-brand-darkNavy/70">
                Formação de 40h a 60h para professores, gestores e auxiliares com base em Neurociência Aplicada.
              </p>
              <ul className="space-y-2 text-xs text-brand-darkNavy/80 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage" />
                  <span>Plataforma digital intuitiva com videoaulas, podcasts e mapas conceituais</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage" />
                  <span>6 mentorias técnicas síncronas e material impresso para suporte em sala</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage" />
                  <span>Foco direto no autocuidado, redução de estresse e domínio de mediação</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-sand">
              <a href="#contato" className="text-xs font-bold text-brand-navy hover:text-brand-amber flex items-center gap-1">
                Ver ementa da certificação <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 4: NR-1 & Saúde do Servidor */}
          <div className="bg-white p-8 rounded-3xl border border-brand-sand shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-pill bg-purple-50 text-purple-700 text-xs font-bold">
                Gestão & Conformidade Legal
              </span>
              <h3 className="text-2xl font-bold text-brand-darkNavy">Equilibradamente NR-1</h3>
              <p className="text-sm text-brand-darkNavy/70">
                Programa para mitigação de riscos psicossociais em secretarias, empresas e servidores municipais.
              </p>
              <ul className="space-y-2 text-xs text-brand-darkNavy/80 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage" />
                  <span>Adequação objetiva às novas diretrizes regulatórias da Norma Regulamentadora NR-1</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage" />
                  <span>Mapeamento preventivo para corte drástico de absenteísmo e licenças por burnout</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage" />
                  <span>Painel de dados estruturados para comprovação auditável de ações preventivas</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-sand">
              <a href="#contato" className="text-xs font-bold text-brand-navy hover:text-brand-amber flex items-center gap-1">
                Conhecer o programa de riscos psicossociais <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGIA CIENTÍFICA */}
      <section id="metodologia" className="py-20 bg-brand-darkNavy text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-amberLight block mb-2">
              Bases Teóricas e Registro Autoral
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              A Tangibilização Prática da Ciência do Cérebro
            </h2>
            <p className="text-slate-300 text-sm md:text-base mt-2">
              Transformamos conceitos abstratos em âncoras cognitivas que educadores e crianças conseguem aplicar no dia a dia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h4 className="font-bold text-base text-brand-amberLight mb-2">Neurociência Cognitiva</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Compreensão real sobre o funcionamento cerebral, plasticidade e o desenvolvimento das vias do córtex pré-frontal.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h4 className="font-bold text-base text-brand-amberLight mb-2">Psicologia Cognitiva</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Arquitetura de pensamentos, identificação de crenças e a desconstrução de respostas automáticas disfuncionais.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h4 className="font-bold text-base text-brand-amberLight mb-2">Psicologia Positiva</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Foco no desenvolvimento intencional de forças de caráter, resiliência, virtudes e alta performance sustentável.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h4 className="font-bold text-base text-brand-amberLight mb-2">Aprendizagem Mediada</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Método de Reuven Feuerstein baseado em Intencionalidade, Reciprocidade, Significado e Transcendência.
              </p>
            </div>
          </div>

          {/* O Pipeline Cognitivo */}
          <div className="bg-white/10 border border-white/15 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6 text-center text-white">
              Pipeline Cognitivo: Desativando o Piloto Automático
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="w-7 h-7 rounded-full bg-brand-amber text-brand-darkNavy font-black text-xs inline-flex items-center justify-center mb-2">1</span>
                <h5 className="font-bold text-sm">Perceber</h5>
                <p className="text-[11px] text-slate-300 mt-1">Autoconsciência imediata: &quot;O que estou sentindo agora?&quot;</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="w-7 h-7 rounded-full bg-brand-amber text-brand-darkNavy font-black text-xs inline-flex items-center justify-center mb-2">2</span>
                <h5 className="font-bold text-sm">Pausar (STOP)</h5>
                <p className="text-[11px] text-slate-300 mt-1">Espaço intencional entre o sentir e o agir impulsivo.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="w-7 h-7 rounded-full bg-brand-amber text-brand-darkNavy font-black text-xs inline-flex items-center justify-center mb-2">3</span>
                <h5 className="font-bold text-sm">Pensar</h5>
                <p className="text-[11px] text-slate-300 mt-1">Reflexão metacognitiva: &quot;Quais as consequências desta ação?&quot;</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="w-7 h-7 rounded-full bg-brand-amber text-brand-darkNavy font-black text-xs inline-flex items-center justify-center mb-2">4</span>
                <h5 className="font-bold text-sm">Escolher</h5>
                <p className="text-[11px] text-slate-300 mt-1">Deliberação consciente focada na melhor decisão.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="w-7 h-7 rounded-full bg-brand-amber text-brand-darkNavy font-black text-xs inline-flex items-center justify-center mb-2">5</span>
                <h5 className="font-bold text-sm">Agir</h5>
                <p className="text-[11px] text-slate-300 mt-1">Execução estruturada e saudável no ambiente social.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASOS DE SUCESSO E COMPROVAÇÃO */}
      <section id="impacto" className="py-20 bg-brand-sand/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-amber block mb-2">
              Resultados Práticos Mapeados
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Evidências Reais em Redes Públicas
            </h2>
            <p className="text-brand-darkNavy/70 text-base mt-2">
              Pesquisa conduzida pela Profa. Dra. Maewa Martina Gomes da Silva e Souza (UNESP) com 80 professores e 524 alunos de 33 escolas parceiras:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-7 rounded-2xl border border-brand-sand shadow-soft">
              <span className="text-4xl font-black text-brand-navy block mb-2">92%</span>
              <h4 className="font-bold text-sm mb-1">Saúde Mental dos Professores</h4>
              <p className="text-xs text-brand-darkNavy/70">
                Dos educadores relataram melhoria direta em sua própria saúde psicológica e manejo de sala.
              </p>
            </div>
            <div className="bg-white p-7 rounded-2xl border border-brand-sand shadow-soft">
              <span className="text-4xl font-black text-brand-amber block mb-2">95%</span>
              <h4 className="font-bold text-sm mb-1">Impacto Notório nos Alunos</h4>
              <p className="text-xs text-brand-darkNavy/70">
                Professores observaram saltos no controle inibitório, diminuição de agressividade e foco nas tarefas.
              </p>
            </div>
            <div className="bg-white p-7 rounded-2xl border border-brand-sand shadow-soft">
              <span className="text-4xl font-black text-brand-sage block mb-2">62%</span>
              <h4 className="font-bold text-sm mb-1">Autorrelato Espontâneo</h4>
              <p className="text-xs text-brand-darkNavy/70">
                Alunos dos anos iniciais expressaram espontaneamente saber como acalmar a raiva e resolver conflitos.
              </p>
            </div>
          </div>

          {/* Depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-brand-sand shadow-sm space-y-3">
              <p className="italic text-xs md:text-sm text-brand-darkNavy/80">
                &quot;No teste de fluência do SAEB, meus alunos se saíram muito acima da média. O pontapé inicial foi o trabalho de autoconhecimento e autocontrole: eles passaram a acreditar que podiam vencer os obstáculos.&quot;
              </p>
              <div className="text-xs font-bold text-brand-navy">— Professora da Rede Municipal (Anos Iniciais)</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-brand-sand shadow-sm space-y-3">
              <p className="italic text-xs md:text-sm text-brand-darkNavy/80">
                &quot;O projeto mudou minha vida pessoal e a dinâmica com as turmas. As mães chegam até mim elogiando que a convivência dentro de casa melhorou sensivelmente.&quot;
              </p>
              <div className="text-xs font-bold text-brand-navy">— Professora participante do Mediadores Academy</div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIA PARA GESTORES PÚBLICOS E FONTES DE FINANCIAMENTO */}
      <section id="financiamento" className="py-20 bg-white border-y border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-amber block mb-2">
              Viabilidade Jurídica & Orçamentária
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Como Prefeituras e Secretarias Podem Contratar e Financiar
            </h2>
            <p className="text-brand-darkNavy/70 text-sm md:text-base mt-2">
              Fornecemos total respaldo técnico, pedagógico e documental para instruir o processo legal em seu município.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Fontes de Recursos */}
            <div className="p-8 bg-brand-cream rounded-3xl border border-brand-sand space-y-4">
              <h3 className="text-xl font-bold text-brand-darkNavy flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-navy" />
                <span>Fontes Orçamentárias Aprovadas</span>
              </h3>
              <div className="space-y-3 text-xs md:text-sm">
                <div className="p-3 bg-white rounded-xl border border-brand-sand">
                  <strong>Fundeb (Parcela fora dos 70%):</strong> Material didático institucional e formação continuada docente (Art. 70 LDB).
                </div>
                <div className="p-3 bg-white rounded-xl border border-brand-sand">
                  <strong>Recursos Constitucionais de MDE (25%):</strong> Enquadramento em desenvolvimento e aprimoramento do ensino.
                </div>
                <div className="p-3 bg-white rounded-xl border border-brand-sand">
                  <strong>Salário-Educação & PDDE:</strong> Recursos adicionais da educação básica destinados a materiais didáticos estruturados.
                </div>
                <div className="p-3 bg-white rounded-xl border border-brand-sand">
                  <strong>FIA, PSE e Emendas Parlamentares:</strong> Projetos de atenção psicossocial apoiados pela Lei 14.819/2024.
                </div>
              </div>
            </div>

            {/* Vias de Contratação */}
            <div className="p-8 bg-brand-cream rounded-3xl border border-brand-sand space-y-4">
              <h3 className="text-xl font-bold text-brand-darkNavy flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-sage" />
                <span>Formatos de Contratação Pública</span>
              </h3>
              <div className="space-y-3 text-xs md:text-sm">
                <div className="p-3 bg-white rounded-xl border border-brand-sand">
                  <strong>Inexigibilidade de Licitação:</strong> Respaldada no Art. 74 da Lei 14.133/2021 pela metodologia autoral registrada na Biblioteca Nacional (Protocolo nº 000670/20).
                </div>
                <div className="p-3 bg-white rounded-xl border border-brand-sand">
                  <strong>Adesão a Ata de Registro de Preços:</strong> Agilidade administrativa aproveitando processos de registro vigentes.
                </div>
                <div className="p-3 bg-white rounded-xl border border-brand-sand">
                  <strong>Licitação por Técnica e Preço:</strong> Propostas de alta nota técnica devido aos reconhecimentos de ponta.
                </div>
                <div className="p-3 bg-white rounded-xl border border-brand-sand">
                  <strong>Patrocínio & Parcerias Privadas:</strong> Modelo de Investimento Social Privado com empresas locais da sua região.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE CONTATO / CAPTAÇÃO */}
      <section id="contato" className="py-20 max-w-4xl mx-auto px-4 md:px-8">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-brand-sand shadow-elevated">
          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-amber block mb-1">
              Atendimento Consultivo
            </span>
            <h2 className="text-3xl font-extrabold text-brand-darkNavy">
              Agende uma Apresentação Técnica ou Solicite Proposta
            </h2>
            <p className="text-sm text-brand-darkNavy/70 mt-2">
              Preencha o formulário abaixo. Nossa equipe entrará em contato para agendar uma reunião com secretários, diretores ou conselheiros.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 bg-brand-sageLight rounded-2xl text-center space-y-3 border border-brand-sage/30">
              <div className="w-12 h-12 bg-brand-sage text-white rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-brand-sage">Solicitação Recebida com Sucesso!</h4>
              <p className="text-xs md:text-sm text-brand-darkNavy/80">
                Nossa assessoria pedagógica e institucional entrará em contato dentro de 24 horas úteis.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-darkNavy mb-1">Nome Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-sand bg-brand-cream text-xs focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-darkNavy mb-1">E-mail Profissional</label>
                  <input
                    type="email"
                    required
                    placeholder="seu.email@orgao.gov.br ou .com"
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-sand bg-brand-cream text-xs focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-darkNavy mb-1">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-sand bg-brand-cream text-xs focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-darkNavy mb-1">Tipo de Instituição</label>
                  <select
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-sand bg-brand-cream text-xs focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  >
                    <option value="prefeitura">Prefeitura / Secretaria de Educação</option>
                    <option value="ong">ONG / Fundação do Terceiro Setor</option>
                    <option value="escola_publica">Escola Pública (Direção / Coordenação)</option>
                    <option value="escola_privada">Colégio / Rede Particular</option>
                    <option value="empresa">Empresa / Programa NR-1</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-darkNavy mb-1">Cidade / Estado</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Santana de Parnaíba / SP"
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-sand bg-brand-cream text-xs focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-darkNavy mb-1">Interesse Principal</label>
                  <select
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-sand bg-brand-cream text-xs focus:outline-none focus:ring-2 focus:ring-brand-navy"
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
                <label className="block text-xs font-semibold text-brand-darkNavy mb-1">Mensagem ou Necessidade Específica</label>
                <textarea
                  rows={4}
                  placeholder="Conte brevemente sobre o número estimado de alunos, professores ou prazos previstos..."
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-sand bg-brand-cream text-xs focus:outline-none focus:ring-2 focus:ring-brand-navy"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-navy hover:bg-brand-darkNavy text-white font-semibold py-3.5 rounded-pill text-sm shadow-soft hover:shadow-elevated transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <span>Enviando dados...</span>
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
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-darkNavy text-white/70 py-12 px-4 md:px-8 border-t border-brand-sand/20 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-extrabold text-base text-white tracking-tight">
              NEURO<span className="text-brand-amber">VIVER</span>
            </span>
            <p className="mt-1 text-[11px] text-white/60">
              Representação e Distribuição Autorizada da Metodologia e Tecnologias Brain2Be.
            </p>
          </div>
          <div className="flex gap-6 text-[11px]">
            <a href="#cenario" className="hover:text-white">Cenário</a>
            <a href="#solucoes" className="hover:text-white">Soluções</a>
            <a href="#metodologia" className="hover:text-white">Metodologia</a>
            <a href="#financiamento" className="hover:text-white">Contratação Pública</a>
          </div>
          <div className="text-[11px] text-white/40">
            © {new Date().getFullYear()} NeuroViver. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
