import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
import { getProductsByCategory } from '@/data/products'

export const metadata: Metadata = {
  title: 'Azeites',
  description:
    'Azeites virgens extras portugueses selecionados. Alentejo, Trás-os-Montes e mais regiões.',
}

const azeitesProducts = getProductsByCategory('azeites')

export default function AzeitesPage() {
  return (
    <PageShell
      title="Azeites"
      breadcrumbs={[
        { label: 'Loja', href: '/loja' },
        { label: 'Azeites' },
      ]}
    >
      {/* Description section */}
      <div className="bg-cream rounded-lg p-6 sm:p-8 mb-10">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-dark mb-4">
          Azeites Virgens Extras Portugueses
        </h2>
        <div className="space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed">
          <p>
            Portugal é um dos maiores produtores de azeite do mundo, com uma tradição
            milenar que se estende desde o Alentejo até Trás-os-Montes. O nosso clima
            mediterrâneo, os solos ricos e as variedades autóctones de azeitona — como a
            Galega, a Cordovil e a Cobrançosa — dão origem a azeites de personalidade
            única.
          </p>
          <p>
            Na <strong>LiquidThesis</strong>, selecionamos cuidadosamente azeites virgens
            extras das principais regiões produtoras portuguesas. Do{' '}
            <strong>Alentejo</strong>, com os seus azeites elegantes e equilibrados, a{' '}
            <strong>Trás-os-Montes</strong>, onde as oliveiras de montanha produzem azeites
            frescos e intensos, cada garrafa conta uma história de terroir e saber-fazer.
          </p>
          <p>
            Todos os nossos azeites são prensados a frio, garantindo a preservação dos
            aromas, sabores e propriedades antioxidantes. Seja para a salada, para
            finalizar um prato ou simplesmente com pão fresco, descubra o melhor azeite
            português na nossa seleção.
          </p>
        </div>
      </div>

      {/* Products count */}
      <p className="text-sm text-muted mb-6">
        {azeitesProducts.length}{' '}
        {azeitesProducts.length === 1 ? 'azeite disponível' : 'azeites disponíveis'}
      </p>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {azeitesProducts.map((product) => (
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
