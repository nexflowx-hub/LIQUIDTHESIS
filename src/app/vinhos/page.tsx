import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
import { getProductsByCategory } from '@/data/products'

export const metadata: Metadata = {
  title: 'Vinhos',
  description:
    'Vinhos portugueses selecionados das regiões do Douro, Alentejo, Vinho Verde, Dão e Bairrada.',
}

const vinhosProducts = getProductsByCategory('vinhos')

export default function VinhosPage() {
  return (
    <PageShell
      title="Vinhos"
      breadcrumbs={[
        { label: 'Loja', href: '/loja' },
        { label: 'Vinhos' },
      ]}
    >
      {/* Description section */}
      <div className="bg-cream rounded-lg p-6 sm:p-8 mb-10">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-dark mb-4">
          Vinhos Portugueses de Excelência
        </h2>
        <div className="space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed">
          <p>
            Portugal é um país de vinhos por excelência, com mais de 250 castas
            autóctones e 14 regiões demarcadas que oferecem uma diversidade
            extraordinária. Dos tintos encorpados do <strong>Douro</strong> aos brancos
            frescos e minerais do <strong>Vinho Verde</strong>, cada copo é uma viagem
            pelo nosso terroir único.
          </p>
          <p>
            O <strong>Alentejo</strong> produz tintos de grande complexidade, com
            castas como Aragonêz, Trincadeira e Touriga Nacional que resultam em vinhos
            de cor intensa e sabores profundos. O <strong>Dão</strong>, no coração de
            Portugal, é celebrado pelos seus brancos elegantes e tintos de grande
            finura, onde a Touriga Nacional atinge a sua máxima expressão.
          </p>
          <p>
            Da <strong>Bairrada</strong> vêm espumantes de método clássico que rivalizam
            com os melhores do mundo, enquanto o <strong>Vinho Verde</strong> continua a
            surpreender com a sua frescura e vivacidade únicas. Na LiquidThesis,
            selecionamos vinhos que representam o melhor de cada região, sempre com
            respeito pela tradição e pelo terroir.
          </p>
        </div>
      </div>

      {/* Products count */}
      <p className="text-sm text-muted mb-6">
        {vinhosProducts.length}{' '}
        {vinhosProducts.length === 1 ? 'vinho disponível' : 'vinhos disponíveis'}
      </p>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {vinhosProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden card-hover"
          >
            <div className="relative bg-cream aspect-[3/4]">
              {product.images[0] && (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              )}
              {product.ageRestricted && (
                <span className="absolute top-1.5 left-1.5 bg-burgundy text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">
                  18+
                </span>
              )}
            </div>
            <div className="p-2.5 sm:p-4">
              <p className="uppercase text-[10px] sm:text-[11px] text-muted tracking-wider font-medium">
                {product.category}
              </p>
              <h3 className="font-medium text-xs sm:text-sm text-dark line-clamp-2 mt-0.5">
                {product.name}
              </h3>
              {product.volume && (
                <p className="text-[10px] sm:text-xs text-muted mt-0.5">
                  {product.volume}
                </p>
              )}
              <p className="font-semibold text-base sm:text-lg text-dark mt-1.5">
                {'\u20ac' + product.price.toFixed(2).replace('.', ',')}
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <span
                  className={
                    'inline-block w-1.5 h-1.5 rounded-full ' +
                    (product.stockStatus === 'in_stock'
                      ? 'bg-green-500'
                      : product.stockStatus === 'low_stock'
                      ? 'bg-amber-500'
                      : 'bg-red-400')
                  }
                />
                <span className="text-xs text-muted">
                  {product.stockStatus === 'in_stock'
                    ? 'Em stock'
                    : product.stockStatus === 'low_stock'
                    ? 'Stock baixo'
                    : 'Esgotado'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
