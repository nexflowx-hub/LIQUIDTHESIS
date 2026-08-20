import type { Metadata } from 'next'
import { Gift, Cake, Calendar, Crown, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Corporate Gifts — LiquidThesis Trade',
  description:
    'Presentes empresariais que refletem a excelência portuguesa. Azeites e vinhos premium personalizados para a sua empresa.',
}

const occasions = [
  {
    icon: Gift,
    title: 'Natal',
    description:
      'Ofertas natalícias com azeites e vinhos selecionados, em caixas elegantes que celebram a época.',
  },
  {
    icon: Cake,
    title: 'Aniversários',
    description:
      'Presentes marcantes para aniversários de clientes e colaboradores com garrafas de edição especial.',
  },
  {
    icon: Calendar,
    title: 'Eventos Corporativos',
    description:
      'Ofertas para conferências, lançamentos e eventos de networking que reforçam a imagem da marca.',
  },
  {
    icon: Crown,
    title: 'Clientes VIP',
    description:
      'Ofertas exclusivas para os seus melhores clientes, com seleções premium e personalização total.',
  },
]

export default function CorporateGiftsPage() {
  return (
    <PageShell
      title='Corporate Gifts'
      subtitle='Presentes empresariais que refletem a excelência portuguesa.'
      breadcrumbs={[
        { label: 'Trade', href: '/trade' },
        { label: 'Corporate Gifts' },
      ]}
      darkHero
    >
      {/* Section 1: Presentes com Identidade */}
      <section className='mb-12 sm:mb-16'>
        <h2 className='font-heading text-2xl sm:text-3xl font-bold text-dark mb-4'>
          Presentes com Identidade
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
          <div className='bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80'>
            <p className='text-sm sm:text-base text-muted leading-relaxed'>
              Os nossos Corporate Gifts são mais do que presentes — são uma extensão da sua marca.
              Combinamos a riqueza dos azeites e vinhos portugueses com personalização cuidada, criando
              ofertas que os seus clientes, parceiros e colaboradores vão recordar.
            </p>
          </div>
          <div className='bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80'>
            <p className='text-sm sm:text-base text-muted leading-relaxed'>
              Cada oferta é montada à medida, com possibilidade de incluir o seu logotipo, mensagem
              personalizada e embalagem exclusiva. Desde caixas individuais a cabazes compostos, temos
              a solução ideal para qualquer orçamento e dimensão de empresa.
            </p>
          </div>
        </div>
      </section>

      <div className='section-divider mb-12 sm:mb-16' />

      {/* Section 2: Para Cada Ocasião */}
      <section className='mb-12 sm:mb-16'>
        <h2 className='font-heading text-2xl sm:text-3xl font-bold text-dark mb-3'>
          Para Cada Ocasião
        </h2>
        <p className='text-muted text-sm sm:text-base mb-6 sm:mb-8'>
          Soluções de oferta adaptadas a cada momento importante do seu calendário empresarial.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
          {occasions.map((item) => (
            <div
              key={item.title}
              className='card-hover bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80 text-center'
            >
              <div className='bg-olive/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-4'>
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

      {/* Section 3: Personalização */}
      <section className='mb-12 sm:mb-16'>
        <h2 className='font-heading text-2xl sm:text-3xl font-bold text-dark mb-3'>Personalização</h2>
        <p className='text-muted text-sm sm:text-base mb-6 sm:mb-8'>
          Cada detalhe pode ser adaptado para refletir a identidade da sua empresa.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
          <div className='card-hover bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80'>
            <h3 className='font-heading text-base sm:text-lg font-semibold text-dark mb-2'>
              Logótipo
            </h3>
            <p className='text-sm text-muted leading-relaxed'>
              Impressão ou gravura do seu logotipo nas garrafas, rótulos ou embalagens.
            </p>
          </div>
          <div className='card-hover bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80'>
            <h3 className='font-heading text-base sm:text-lg font-semibold text-dark mb-2'>
              Mensagem Personalizada
            </h3>
            <p className='text-sm text-muted leading-relaxed'>
              Inclua uma dedicatória ou mensagem especial em cada oferta.
            </p>
          </div>
          <div className='card-hover bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80'>
            <h3 className='font-heading text-base sm:text-lg font-semibold text-dark mb-2'>
              Caixa Personalizada
            </h3>
            <p className='text-sm text-muted leading-relaxed'>
              Design de embalagem exclusiva com as cores e identidade da sua marca.
            </p>
          </div>
          <div className='card-hover bg-ivory rounded-lg p-5 sm:p-6 border border-cream/80'>
            <h3 className='font-heading text-base sm:text-lg font-semibold text-dark mb-2'>
              Quantidades Mínimas
            </h3>
            <p className='text-sm text-muted leading-relaxed'>
              Ofertas a partir de 25 unidades, com condições especiais para volumes superiores.
            </p>
          </div>
        </div>
      </section>

      <div className='section-divider mb-12 sm:mb-16' />

      {/* CTA */}
      <section>
        <div className='bg-olive rounded-lg p-8 sm:p-12 text-center'>
          <h2 className='font-heading text-2xl sm:text-3xl font-bold text-cream mb-3'>
            Crie as suas ofertas empresariais
          </h2>
          <p className='text-cream/80 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed'>
            Contacte-nos para receber uma proposta personalizada com base nas suas necessidades, orçamento
            e prazos.
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
