import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
import { getProductsByCategory } from '@/data/products'

export const metadata: Metadata = {
  title: 'Boxes & Presentes',
  description:
    'Caixas de presente com os melhores produtos portugueses. Presentes corporativos, boxes de degustação e ofertas exclusivas.',
}

const boxesProducts = getProductsByCategory('boxes')

export default function BoxesPage() {
  return (
    <PageShell
      title="Boxes & Presentes"
      breadcrumbs={[
        { label: 'Loja', href: '/loja' },
        { label: 'Boxes & Presentes' },
      ]}
    >
      {/* Description section */}
      <div className="bg-cream rounded-lg p-6 sm:p-8 mb-10">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-dark mb-4">
          Presentes com Alma Portuguesa
        </h2>
        <div className="space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed">
          <p>
            Oferecer uma caixa LiquidThesis é oferecer uma experiência. As nossas
            boxes reúnem os melhores produtos portugueses — azeites virgens extras,
            vinhos selecionados, conservas artesanais e produtos gourmet — em
            apresentações cuidadas que fazem a diferença.
          </p>
          <p>
            Para <strong>presentes pessoais</strong>, as nossas boxes de descoberta são
            a forma ideal de partilhar os sabores de Portugal com amigos e família.
            Cada caixa é composta por uma seleção curada que garante uma experiência
            sensorial completa, do azeite ao vinho, da conserva ao produto gourmet.
          </p>
          <p>
            Para <strong>encomendas corporativas</strong>, oferecemos a Box Corporate
            Portugal com possibilidade de personalização empresarial — logótipo,
            mensagem personalizada e composição à medida. É o presente perfeito para
            clientes, colaboradores e parceiros de negócio que merecem o melhor de
            Portugal.
          </p>
        </div>
      </div>

      {/* Products count */}
      <p className="text-sm text-muted mb-6">
        {boxesProducts.length}{' '}
        {boxesProducts.length === 1
          ? 'box disponível'
          : 'boxes disponíveis'}
      </p>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {boxesProducts.map((product) => (
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
