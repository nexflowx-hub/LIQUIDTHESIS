import type { Metadata } from 'next'
import { Package, Boxes, Globe, Building2, Gift, Tag, ArrowRight, UserPlus } from 'lucide-react'
import Link from 'next/link'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'LiquidThesis Trade — Área Profissional',
  description:
    'Soluções profissionais para restauração, hotelaria, garrafeiras e distribuição. Preços por caixa, cotação por palete, exportação UE e muito mais.',
}

const benefits = [
  {
    icon: Package,
    title: 'Preço por Caixa',
    description: 'Condições especiais para encomendas por caixa, ideais para restauração e garrafeiras.',
  },
  {
    icon: Boxes,
    title: 'Cotação por Palete',
    description: 'Preços competitivos para grandes volumes, com condições personalizadas por palete.',
  },
  {
    icon: Globe,
    title: 'Exportação UE',
    description: 'Distribuição para toda a União Europeia com documentação completa e suporte logístico.',
  },
  {
    icon: Building2,
    title: 'Conta Profissional',
    description: 'Acesso a uma área reservada com histórico de encomendas, faturas e condições exclusivas.',
  },
  {
    icon: Gift,
    title: 'Corporate Gifts',
    description: 'Ofertas empresariais personalizadas com azeites e vinhos premium portugueses.',
  },
  {
    icon: Tag,
    title: 'Private Label',
    description: 'Crie a sua própria marca de azeites e vinhos com o nosso suporte integral.',
  },
]

const steps = [
  {
    number: 1,
    title: 'Registe a sua empresa',
    description: 'Preencha o formulário de registo com os dados da sua empresa e atividade.',
  },
  {
    number: 2,
    title: 'Receba condições comerciais',
    description: 'A nossa equipa analisa o seu perfil e envia propostas personalizadas em até 24h.',
  },
  {
    number: 3,
    title: 'Faça o seu primeiro pedido',
    description: 'Aceda à sua conta profissional e encomende com condições exclusivas.',
  },
  {
    number: 4,
    title: 'Receba e venda',
    description: 'Receba os produtos na sua morada com transporte cuidado e rastreamento.',
  },
]

export default function TradePage() {
  return (
    <PageShell
      title='LiquidThesis Trade'
      subtitle='Soluções profissionais para restauração, hotelaria, garrafeiras e distribuição.'
      breadcrumbs={[{ label: 'Trade' }]}
      darkHero
    >
      {/* Benefits Grid */}
      <section className='mb-12 sm:mb-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
          {benefits.map((b) => (
            <div
              key={b.title}
              className='card-hover bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80'
            >
              <div className='bg-olive/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4'>
                <b.icon className='size-5 sm:size-6 text-olive' />
              </div>
              <h3 className='font-heading text-lg sm:text-xl font-semibold text-dark mb-2'>
                {b.title}
              </h3>
              <p className='text-sm sm:text-base text-muted leading-relaxed'>
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gold Divider */}
      <div className='section-divider mb-12 sm:mb-16' />

      {/* CTA Cards */}
      <section className='mb-12 sm:mb-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
          <Link
            href='/trade/cotacao'
            className='card-hover group bg-olive rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[200px] sm:min-h-[240px]'
          >
            <div>
              <h3 className='font-heading text-xl sm:text-2xl md:text-3xl font-bold text-cream mb-2'>
                Pedir Cotação
              </h3>
              <p className='text-cream/80 text-sm sm:text-base leading-relaxed'>
                Receba uma proposta comercial personalizada para o seu negócio em até 24 horas úteis.
              </p>
            </div>
            <div className='flex items-center gap-2 text-gold mt-6 group-hover:gap-3 transition-all'>
              <span className='text-sm sm:text-base font-medium'>Solicitar agora</span>
              <ArrowRight className='size-4 sm:size-5' />
            </div>
          </Link>

          <div className='card-hover bg-burgundy rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[200px] sm:min-h-[240px]'>
            <div>
              <h3 className='font-heading text-xl sm:text-2xl md:text-3xl font-bold text-cream mb-2'>
                Criar Conta Profissional
              </h3>
              <p className='text-cream/80 text-sm sm:text-base leading-relaxed'>
                Aceda a preços exclusivos, histórico de encomendas e condições dedicadas ao seu setor.
              </p>
            </div>
            <div className='flex items-center gap-2 text-gold mt-6'>
              <UserPlus className='size-4 sm:size-5' />
              <span className='text-sm sm:text-base font-medium'>Registar empresa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className='section-divider mb-12 sm:mb-16' />

      {/* B2B Process Steps */}
      <section>
        <h2 className='font-heading text-2xl sm:text-3xl font-bold text-dark text-center mb-3'>
          Como Funciona
        </h2>
        <p className='text-muted text-sm sm:text-base text-center max-w-2xl mx-auto mb-8 sm:mb-12'>
          Um processo simples e rápido para começar a trabalhar connosco.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
          {steps.map((step) => (
            <div key={step.number} className='relative text-center'>
              <div className='bg-gold text-dark w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-lg sm:text-xl'>
                {step.number}
              </div>
              <h3 className='font-heading text-base sm:text-lg font-semibold text-dark mb-2'>
                {step.title}
              </h3>
              <p className='text-sm text-muted leading-relaxed'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
