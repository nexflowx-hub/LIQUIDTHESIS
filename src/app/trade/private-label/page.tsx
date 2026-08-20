import type { Metadata } from 'next'
import {
  PenTool,
  Wine,
  Package,
  ClipboardCheck,
  Boxes,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Private Label — LiquidThesis Trade',
  description:
    'Crie a sua própria marca de azeites e vinhos com o suporte integral da LiquidThesis. Do conceito à entrega.',
}

const processSteps = [
  {
    number: 1,
    title: 'Conceção',
    description:
      'Definimos comigo o perfil da sua marca, mercado-alvo e posicionamento. Trabalhamos o briefing criativo para dar vida ao seu projeto.',
  },
  {
    number: 2,
    title: 'Seleção',
    description:
      'Procuramos entre os nossos parceiros produtores os azeites e vinhos que melhor se adequam ao conceito e ao público-alvo da sua marca.',
  },
  {
    number: 3,
    title: 'Produção',
    description:
      'Gestionamos toda a produção — do design do rótulo ao engarrafamento e rotulagem, garantindo os mais altos padrões de qualidade.',
  },
  {
    number: 4,
    title: 'Entrega',
    description:
      'Expedimos os produtos acabados para o seu armazém ou diretamente para os seus clientes, com a logística e documentação asseguradas.',
  },
]

const offerings = [
  {
    icon: PenTool,
    title: 'Design de Etiqueta',
    description: 'Criação de rótulos profissionais com o seu logótipo, identidade visual e todas as exigências legais.',
  },
  {
    icon: Wine,
    title: 'Seleção de Produto',
    description: 'Acesso ao nosso portfólio de produtores premium para encontrar o produto ideal para a sua marca.',
  },
  {
    icon: Package,
    title: 'Embalagem Personalizada',
    description: 'Caixas e embalagens sob medida com a identidade da sua marca, em diferentes materiais e acabamentos.',
  },
  {
    icon: ClipboardCheck,
    title: 'Acompanhamento Integral',
    description: 'Um gestor de projeto dedicado que acompanha todas as fases, do briefing à entrega final.',
  },
  {
    icon: Boxes,
    title: 'Lotes a Partir de 500un',
    description: 'Produção flexível com lotes mínimos acessíveis, permitindo o lançamento da sua marca sem grandes investimentos.',
  },
  {
    icon: ShieldCheck,
    title: 'Certificação e Documentação',
    description: 'Todos os produtos incluem certificação, rótulos conformes e documentação necessária para comercialização.',
  },
]

export default function PrivateLabelPage() {
  return (
    <PageShell
      title='Private Label'
      subtitle='Crie a sua própria marca de azeites e vinhos.'
      breadcrumbs={[
        { label: 'Trade', href: '/trade' },
        { label: 'Private Label' },
      ]}
      darkHero
    >
      {/* Section 1: O Seu Projeto, a Nossa Experiência */}
      <section className='mb-12 sm:mb-16'>
        <h2 className='font-heading text-2xl sm:text-3xl font-bold text-dark mb-4'>
          O Seu Projeto, a Nossa Experiência
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
          <div className='bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80'>
            <p className='text-sm sm:text-base text-muted leading-relaxed'>
              A LiquidThesis coloca ao seu serviço anos de experiência no setor de azeites e vinhos
              portugueses. O nosso serviço de Private Label permite-lhe criar uma marca própria com
              produtos de qualidade premium, sem precisar de investir em produção própria.
            </p>
          </div>
          <div className='bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80'>
            <p className='text-sm sm:text-base text-muted leading-relaxed'>
              Desde a seleção do produto à conceção do rótulo e embalagem, gerimos todo o processo
              de ponta a ponta. O resultado é uma marca profissional, com produtos de excelência,
              pronta para conquistar o seu mercado.
            </p>
          </div>
        </div>
      </section>

      <div className='section-divider mb-12 sm:mb-16' />

      {/* Section 2: 4-Step Process */}
      <section className='mb-12 sm:mb-16'>
        <h2 className='font-heading text-2xl sm:text-3xl font-bold text-dark mb-3'>O Nosso Processo</h2>
        <p className='text-muted text-sm sm:text-base mb-8 sm:mb-10'>
          Um percurso estruturado em quatro etapas para garantir que o seu projeto Private Label é um sucesso.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
          {processSteps.map((step) => (
            <div key={step.number} className='relative text-center'>
              <div className='bg-gold text-dark w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-lg sm:text-xl'>
                {step.number}
              </div>
              <h3 className='font-heading text-base sm:text-lg font-semibold text-dark mb-2'>
                {step.title}
              </h3>
              <p className='text-sm text-muted leading-relaxed'>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className='section-divider mb-12 sm:mb-16' />

      {/* Section 3: O Que Oferecemos */}
      <section className='mb-12 sm:mb-16'>
        <h2 className='font-heading text-2xl sm:text-3xl font-bold text-dark mb-3'>O Que Oferecemos</h2>
        <p className='text-muted text-sm sm:text-base mb-6 sm:mb-8'>
          Um serviço completo para tornar a sua marca realidade.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
          {offerings.map((item) => (
            <div
              key={item.title}
              className='card-hover bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80'
            >
              <div className='bg-olive/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4'>
                <item.icon className='size-5 sm:size-6 text-olive' />
              </div>
              <h3 className='font-heading text-base sm:text-lg font-semibold text-dark mb-2'>
                {item.title}
              </h3>
              <p className='text-sm text-muted leading-relaxed'>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className='section-divider mb-12 sm:mb-16' />

      {/* CTA */}
      <section>
        <div className='bg-olive rounded-lg p-8 sm:p-12 text-center'>
          <h2 className='font-heading text-2xl sm:text-3xl font-bold text-cream mb-3'>
            Pronto para criar a sua marca?
          </h2>
          <p className='text-cream/80 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed'>
            Contacte-nos e receba uma proposta detalhada para o seu projeto Private Label, incluindo
            seleção de produtos, design e produção.
          </p>
          <Link
            href='/trade/cotacao'
            className='btn-gold inline-flex items-center gap-2 px-8 py-3 text-sm sm:text-base'
          >
            Pedir Cotação
            <ArrowRight className='size-4' />
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
