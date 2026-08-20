import type { Metadata } from 'next'
import { ArrowRight, FileText, Truck, Package, ShieldCheck, Thermometer } from 'lucide-react'
import Link from 'next/link'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Exportação — LiquidThesis Trade',
  description:
    'Leve os sabores de Portugal para o mundo. Exportação de vinhos e azeites premium para toda a União Europeia com documentação completa.',
}

const countries = [
  { flag: '🇵🇹', name: 'Portugal' },
  { flag: '🇪🇸', name: 'Espanha' },
  { flag: '🇫🇷', name: 'França' },
  { flag: '🇩🇪', name: 'Alemanha' },
  { flag: '🇧🇪', name: 'Bélgica' },
  { flag: '🇳🇱', name: 'Holanda' },
  { flag: '🇱🇺', name: 'Luxemburgo' },
  { flag: '🇮🇹', name: 'Itália' },
]

export default function ExportacaoPage() {
  return (
    <PageShell
      title='Exportação'
      subtitle='Leve os sabores de Portugal para o mundo.'
      breadcrumbs={[
        { label: 'Trade', href: '/trade' },
        { label: 'Exportação' },
      ]}
      darkHero
    >
      {/* EU Market Presence */}
      <section className='mb-12 sm:mb-16'>
        <p className='text-sm sm:text-base text-muted leading-relaxed max-w-3xl'>
          A LiquidThesis já exporta para múltiplos países da União Europeia, garantindo que os melhores
          azeites e vinhos portugueses chegam ao mercado europeu com toda a qualidade e cumprimento
          regulamentar. Trabalhamos com importadores, distribuidores e grupos hoteleiros em toda a Europa,
          oferecendo um serviço completo desde a encomenda até à entrega.
        </p>
      </section>

      <div className='section-divider mb-12 sm:mb-16' />

      {/* Supported Countries */}
      <section className='mb-12 sm:mb-16'>
        <h2 className='font-heading text-2xl sm:text-3xl font-bold text-dark mb-3'>
          Mercados Disponíveis
        </h2>
        <p className='text-muted text-sm sm:text-base mb-6 sm:mb-8'>
          Presente nos principais mercados europeus, com presença crescente.
        </p>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4'>
          {countries.map((country) => (
            <div
              key={country.name}
              className='card-hover bg-ivory rounded-lg p-4 sm:p-5 border border-cream/80 flex items-center gap-3'
            >
              <span className='text-2xl sm:text-3xl'>{country.flag}</span>
              <span className='font-heading font-semibold text-dark text-sm sm:text-base'>
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className='section-divider mb-12 sm:mb-16' />

      {/* Documentation */}
      <section className='mb-12 sm:mb-16'>
        <h2 className='font-heading text-2xl sm:text-3xl font-bold text-dark mb-3'>
          Documentação e Certificação
        </h2>
        <p className='text-muted text-sm sm:text-base mb-6 sm:mb-8'>
          Todos os processos de exportação são acompanhados com documentação completa e em conformidade com a
          legislação europeia.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6'>
          <div className='card-hover bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80'>
            <div className='bg-olive/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4'>
              <ShieldCheck className='size-5 sm:size-6 text-olive' />
            </div>
            <h3 className='font-heading text-base sm:text-lg font-semibold text-dark mb-2'>
              Certificados
            </h3>
            <p className='text-sm text-muted leading-relaxed'>
              Certificados de origem, certificados fitossanitários e certificados de qualidade para todos os
              lotes exportados.
            </p>
          </div>
          <div className='card-hover bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80'>
            <div className='bg-olive/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4'>
              <FileText className='size-5 sm:size-6 text-olive' />
            </div>
            <h3 className='font-heading text-base sm:text-lg font-semibold text-dark mb-2'>
              Etiquetagem UE
            </h3>
            <p className='text-sm text-muted leading-relaxed'>
              Rótulos em conformidade com o regulamento europeu, incluindo informações nutricionais, alergénios
              e lote de produção.
            </p>
          </div>
          <div className='card-hover bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80'>
            <div className='bg-olive/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4'>
              <FileText className='size-5 sm:size-6 text-olive' />
            </div>
            <h3 className='font-heading text-base sm:text-lg font-semibold text-dark mb-2'>
              DUA
            </h3>
            <p className='text-sm text-muted leading-relaxed'>
              Documento Único Administrativo preparado para cada expedição, facilitando a clearance aduaneiro
              nos países de destino.
            </p>
          </div>
        </div>
      </section>

      <div className='section-divider mb-12 sm:mb-16' />

      {/* Logistics */}
      <section className='mb-12 sm:mb-16'>
        <h2 className='font-heading text-2xl sm:text-3xl font-bold text-dark mb-3'>
          Logística e Transporte
        </h2>
        <p className='text-muted text-sm sm:text-base mb-6 sm:mb-8'>
          Soluções logísticas adaptadas ao volume e às necessidades de cada cliente.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
          <div className='card-hover bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80 text-center'>
            <div className='bg-olive/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <Package className='size-5 sm:size-6 text-olive' />
            </div>
            <h3 className='font-heading text-base sm:text-lg font-semibold text-dark mb-2'>Paletes</h3>
            <p className='text-sm text-muted leading-relaxed'>
              Expedições por palete EUR com otimização de carga e proteção adequada.
            </p>
          </div>
          <div className='card-hover bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80 text-center'>
            <div className='bg-olive/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <Truck className='size-5 sm:size-6 text-olive' />
            </div>
            <h3 className='font-heading text-base sm:text-lg font-semibold text-dark mb-2'>
              Contentores
            </h3>
            <p className='text-sm text-muted leading-relaxed'>
              Para encomendas de grande volume, organizamos contentores completos ou partilha.
            </p>
          </div>
          <div className='card-hover bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80 text-center'>
            <div className='bg-olive/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <Thermometer className='size-5 sm:size-6 text-olive' />
            </div>
            <h3 className='font-heading text-base sm:text-lg font-semibold text-dark mb-2'>
              Transporte Refrigerado
            </h3>
            <p className='text-sm text-muted leading-relaxed'>
              Opção de transporte com controlo de temperatura para preservar a qualidade.
            </p>
          </div>
          <div className='card-hover bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80 text-center'>
            <div className='bg-olive/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <ArrowRight className='size-5 sm:size-6 text-olive' />
            </div>
            <h3 className='font-heading text-base sm:text-lg font-semibold text-dark mb-2'>
              Rastreamento
            </h3>
            <p className='text-sm text-muted leading-relaxed'>
              Acompanhamento em tempo real de cada expedição até à entrega final.
            </p>
          </div>
        </div>
      </section>

      <div className='section-divider mb-12 sm:mb-16' />

      {/* CTA */}
      <section>
        <div className='bg-olive rounded-lg p-8 sm:p-12 text-center'>
          <h2 className='font-heading text-2xl sm:text-3xl font-bold text-cream mb-3'>
            Pretende exportar connosco?
          </h2>
          <p className='text-cream/80 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed'>
            Solicite uma cotação de exportação personalizada com condições adaptadas ao seu mercado e volume.
          </p>
          <Link
            href='/trade/cotacao'
            className='btn-gold inline-flex items-center gap-2 px-8 py-3 text-sm sm:text-base'
          >
            Solicitar Cotação de Exportação
            <ArrowRight className='size-4' />
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
