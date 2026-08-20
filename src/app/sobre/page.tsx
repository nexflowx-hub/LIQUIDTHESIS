import { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
import { Heart, Shield, Globe, Leaf } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça a LiquidThesis — a nossa história, missão e valores. Selecionamos o melhor de Portugal para consumidores e profissionais.',
}

const values = [
  {
    icon: Heart,
    title: 'Qualidade Sem Compromisso',
    desc: 'Selecionamos rigorosamente cada produto. Prova cega, análise laboratorial e avaliação sensorial antes de integrar o catálogo.',
  },
  {
    icon: Shield,
    title: 'Transparência Total',
    desc: 'Origem, métodos de produção e certificações. Sabemos exatamente de onde vem cada garrafa e cada litro de azeite.',
  },
  {
    icon: Globe,
    title: 'Alcance Global',
    desc: 'Exportamos para 8 mercados europeus com toda a documentação e logística necessárias para uma entrega impecável.',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    desc: 'Parceiros com práticas sustentáveis, embalagens recicláveis e cadeia de abastecimento de baixa emissão de carbono.',
  },
]

const stats = [
  { value: '13+', label: 'Produtos no Catálogo' },
  { value: '5+', label: 'Regiões Portuguesas' },
  { value: '8', label: 'Mercados UE' },
  { value: '100%', label: 'Produtos Portugueses' },
]

export default function SobrePage() {
  return (
    <PageShell
      title='Sobre a LiquidThesis'
      subtitle='Selecionamos o melhor de Portugal para o mundo.'
      breadcrumbs={[{ label: 'Sobre' }]}
    >
      {/* História */}
      <div className='mb-12 sm:mb-16'>
        <h2 className='font-heading text-2xl sm:text-3xl text-dark'>A Nossa História</h2>
        <div className='section-divider mt-3 mb-6 sm:mb-8' />
        <div className='max-w-3xl space-y-4 text-sm sm:text-base text-dark/80 leading-relaxed'>
          <p>
            A LiquidThesis nasceu de uma convicção simples: Portugal produz alguns dos melhores azeites, vinhos e produtos gourmet do mundo, mas muitos consumidores — tanto em Portugal como na Europa — não têm acesso fácil a essa excelência.
          </p>
          <p>
            Fundada em Torres Vedras, a poucos quilómetros de Lisboa, a LiquidThesis é uma empresa dedicada a curar, selecionar e distribuir produtos portugueses de qualidade superior. Trabalhamos diretamente com produtores de diversas regiões — do Douro ao Alentejo, de Trás-os-Montes ao Algarve — para garantir autenticidade e rastreabilidade em cada produto do nosso catálogo.
          </p>
          <p>
            O nosso objetivo é servir dois mundos: o consumidor final que procura sabores autênticos e experiências gastronómicas memoráveis, e o profissional de restauração, hotelaria ou distribuição que necessita de parceiros fiáveis com condições comerciais competitivas.
          </p>
        </div>
      </div>

      {/* Missão */}
      <div className='mb-12 sm:mb-16'>
        <h2 className='font-heading text-2xl sm:text-3xl text-dark'>A Nossa Missão</h2>
        <div className='section-divider mt-3 mb-6 sm:mb-8' />
        <div className='max-w-3xl text-sm sm:text-base text-dark/80 leading-relaxed'>
          <p className='text-lg sm:text-xl font-heading text-dark/90'>
            Conectar produtores portugueses de excelência com consumidores e profissionais em Portugal e na Europa, curando produtos excecionais com transparência, qualidade e paixão pelo que é nosso.
          </p>
        </div>
      </div>

      {/* Valores */}
      <div className='mb-12 sm:mb-16'>
        <h2 className='font-heading text-2xl sm:text-3xl text-dark'>Os Nossos Valores</h2>
        <div className='section-divider mt-3 mb-6 sm:mb-8' />
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
          {values.map((v) => (
            <div key={v.title} className='bg-white rounded-lg p-5 sm:p-6 shadow-sm'>
              <v.icon className='text-gold' size={28} />
              <h3 className='font-medium text-base sm:text-lg text-dark mt-3'>{v.title}</h3>
              <p className='text-xs sm:text-sm text-muted mt-2 leading-relaxed'>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Números */}
      <div className='bg-olive rounded-lg p-6 sm:p-10'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center'>
          {stats.map((s) => (
            <div key={s.label}>
              <p className='font-heading text-3xl sm:text-4xl text-gold font-bold'>{s.value}</p>
              <p className='text-cream/70 text-xs sm:text-sm mt-1'>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className='text-center mt-10 sm:mt-12'>
        <Link
          href='/contacto'
          className='inline-block btn-gold text-dark font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md text-sm sm:text-base'
        >
          Fale Connosco
        </Link>
      </div>
    </PageShell>
  )
}
