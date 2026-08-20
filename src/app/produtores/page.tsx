import { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
import { Droplets, Wine, ChefHat, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Produtores',
  description: 'Conheça os produtores parceiros da LiquidThesis — azeiteiros, vinicultores e artesãos de todo Portugal.',
}

const producers = [
  {
    name: 'Quinta do Olival',
    region: 'Alentejo',
    type: 'Azeite' as const,
    icon: Droplets,
    desc: 'Família de azeiteiros há 4 gerações, produzindo azeites monovarietais premiados com aromas complexos e acidez equilibrada.',
  },
  {
    name: 'Herdade dos Ventos',
    region: 'Trás-os-Montes',
    type: 'Azeite' as const,
    icon: Droplets,
    desc: 'Azeites biológicos de altitude com caráter único. Produção sustentável certificada e colheita manual.',
  },
  {
    name: 'Quinta Vale do Sol',
    region: 'Douro',
    type: 'Vinho' as const,
    icon: Wine,
    desc: 'Vinhos tintos de grande complexidade, envelhecidos em barrica de carvalho francês. Vinha com mais de 80 anos.',
  },
  {
    name: 'Casa da Serra',
    region: 'Alentejo',
    type: 'Vinho' as const,
    icon: Wine,
    desc: 'Reservas alentejanas que expressam o terroir quente e seco da região. Notas de amora, chocolate e especiarias.',
  },
  {
    name: 'Adega do Mar',
    region: 'Vinho Verde',
    type: 'Vinho' as const,
    icon: Wine,
    desc: 'Vinhos verdes frescos e minerais da costa atlântica. Vinificação em baixa temperatura para preservar a frescura.',
  },
  {
    name: 'Conserveiras do Algarve',
    region: 'Algarve',
    type: 'Gourmet' as const,
    icon: ChefHat,
    desc: 'Conservas artesanais de peixe fresco. Produção tradicional com receitas transmitidas há três gerações.',
  },
]

const typeColors: Record<string, string> = {
  Azeite: 'bg-olive',
  Vinho: 'bg-burgundy',
  Gourmet: 'bg-gold-dark',
}

export default function ProdutoresPage() {
  return (
    <PageShell
      title='Nossos Produtores'
      subtitle='Parceiros que partilham a nossa paixão pela excelência.'
      breadcrumbs={[{ label: 'Produtores' }]}
    >
      {/* Intro */}
      <p className='max-w-3xl text-sm sm:text-base text-dark/80 leading-relaxed mb-8 sm:mb-10'>
        Trabalhamos diretamente com produtores selecionados de todo Portugal. Cada parceiro é escolhido pela qualidade consistente dos seus produtos, práticas sustentáveis e paixão pelo que faz. Conheça quem está por trás dos sabores que levamos até si.
      </p>

      {/* Producer Grid */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
        {producers.map((p) => (
          <div key={p.name} className='bg-white rounded-lg shadow-sm overflow-hidden card-hover'>
            <div className={`p-5 sm:p-6 ${typeColors[p.type]} text-cream`}>
              <div className='flex items-start justify-between'>
                <p.icon className='size-8 text-gold' />
                <span className='text-[10px] sm:text-xs uppercase tracking-wider font-medium bg-cream/20 px-2 py-0.5 rounded'>
                  {p.type}
                </span>
              </div>
              <h3 className='font-heading text-lg sm:text-xl mt-3'>{p.name}</h3>
              <p className='text-cream/70 text-xs sm:text-sm mt-0.5'>{p.region}</p>
            </div>
            <div className='p-4 sm:p-5'>
              <p className='text-xs sm:text-sm text-dark/70 leading-relaxed'>{p.desc}</p>
              <a
                href='#'
                className='inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-gold hover:text-gold-light mt-3 transition-colors'
              >
                Conhecer <ArrowRight className='size-3' />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA for producers */}
      <div className='mt-12 sm:mt-16 bg-cream rounded-lg p-6 sm:p-10 text-center'>
        <h2 className='font-heading text-2xl sm:text-3xl text-dark'>É Produtor?</h2>
        <p className='text-sm sm:text-base text-muted mt-2 max-w-xl mx-auto'>
          Venda connosco para clientes em Portugal e na Europa. Avaliamos novos parceiros com frequência.
        </p>
        <Link
          href='/contacto'
          className='inline-block btn-gold text-dark font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md mt-6 text-sm sm:text-base'
        >
          Tornar-se Parceiro
        </Link>
      </div>
    </PageShell>
  )
}
