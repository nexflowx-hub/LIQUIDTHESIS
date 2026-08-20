import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Novidades',
  description:
    'Últimas novidades da LiquidThesis: lançamentos, eventos, parcerias e muito mais.',
}

const newsItems = [
  {
    id: 'espumante-bairrada',
    date: '2025-09-15',
    dateLabel: '15 de setembro de 2025',
    title: 'Novo Espumante Bruto da Bairrada',
    excerpt: [
      'A LiquidThesis alarga o seu portfolio com o lançamento de um novo Espumante Bruto da Bairrada, produzido pelo método clássico com refermentação em garrafa. Este espumante resulta de uma seleção cuidada das castas Baga e Touriga Nacional, que conferem estrutura e complexidade.',
      'Com bolha fina e persistente, apresenta aromas a pão torrado, maçã verde e notas subtis de nozes. A dosagem bruta destaca a frescura e a mineralidade características da região da Bairrada.',
      'O espumante já está disponível na nossa loja online e em pontos de venda selecionados. Uma excelente escolha para celebrar ocasiões especiais ou para acompanhar marisco e peixe grelhado.',
    ],
  },
  {
    id: 'feira-azeite',
    date: '2025-08-22',
    dateLabel: '22 de agosto de 2025',
    title: 'LiquidThesis presente na Feira Nacional do Azeite',
    excerpt: [
      'A LiquidThesis marcou presença na edição de 2025 da Feira Nacional do Azeite, em Castelo Branco, um dos eventos mais importantes do setor oleícola em Portugal. Durante três dias, a equipa apresentou os azeites virgens extras da seleção ao público e a profissionais do setor.',
      'A participação permitiu estabelecer novos contactos com produtores de Trás-os-Montes e do Alentejo, abrindo portas a futuras colaborações e à descoberta de azeites monovarietais de exceção que farão parte do nosso catálogo.',
    ],
  },
  {
    id: 'parceria-alentejo',
    date: '2025-07-10',
    dateLabel: '10 de julho de 2025',
    title: 'Parceria com produtores do Alentejo',
    excerpt: [
      'Anunciamos com orgulho uma nova parceria estratégica com um consórcio de produtores do Alentejo, uma das regiões vinícolas mais prestigiadas de Portugal. Esta colaboração permite-nos aceder a lotes exclusivos de vinhos de alta qualidade, incluindo reservas e garrafeiras limitadas.',
      'A parceria abrange tintos, brancos e rosados de várias sub-regiões do Alentejo, como Reguengos, Borba e Évora. Os primeiros vinhos resultantes desta parceria chegarão à nossa loja ainda este outono.',
      'Esta aliança reforça o compromisso da LiquidThesis com a qualidade e a autenticidade, oferecendo aos nossos clientes acesso privilegiado a vinhos que raramente chegam ao mercado tradicional.',
    ],
  },
  {
    id: 'caixa-natal-2025',
    date: '2025-06-01',
    dateLabel: '1 de junho de 2025',
    title: 'Caixa de Natal 2025 já disponível',
    excerpt: [
      'Antecipando a época natalícia, a LiquidThesis lança a Caixa de Natal 2025 — uma edição especial que reúne os melhores produtos portugueses para oferecer nesta época festiva. A caixa inclui um azeite virgem extra do Alentejo, um vinho tinto do Douro, conservas artesanais e uma seleção de produtos gourmet.',
      'Com uma apresentação cuidada e sofisticada, a Caixa de Natal 2025 é a opção ideal para presentes de empresa e familiares. Encomendas antecipadas até 30 de novembro beneficiam de 10% de desconto.',
    ],
  },
]

export default function NovidadesPage() {
  return (
    <PageShell title="Novidades" breadcrumbs={[{ label: 'Novidades' }]}>
      <div className="max-w-3xl mx-auto space-y-8">
        {newsItems.map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            {/* Header with date and title */}
            <div className="bg-cream p-5 sm:p-6">
              <div className="flex items-center gap-2 text-muted mb-2">
                <Calendar className="size-3.5" />
                <time className="text-xs sm:text-sm">{item.dateLabel}</time>
              </div>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-dark">
                {item.title}
              </h2>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-6">
              <div className="space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed">
                {item.excerpt.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-5">
                <Link
                  href="/"
                  className="text-olive font-medium text-sm hover:text-olive/80 underline underline-offset-2 transition-colors"
                >
                  Ler mais
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  )
}
