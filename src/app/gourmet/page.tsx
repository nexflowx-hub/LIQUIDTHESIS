import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
import { getProductsByCategory } from '@/data/products'

export const metadata: Metadata = {
  title: 'Gourmet',
  description:
    'Produtos gourmet portugueses: conservas artesanais, flor de sal, mel, queijos e seleções exclusivas.',
}

const gourmetProducts = getProductsByCategory('gourmet')

export default function GourmetPage() {
  return (
    <PageShell
      title="Gourmet"
      breadcrumbs={[
        { label: 'Loja', href: '/loja' },
        { label: 'Gourmet' },
      ]}
    >
      {/* Description section */}
      <div className="bg-cream rounded-lg p-6 sm:p-8 mb-10">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-dark mb-4">
          Sabores Gourmet de Portugal
        </h2>
        <div className="space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed">
          <p>
            A gastronomia portuguesa é um tesouro de sabores que vai muito além do
            vinho e do azeite. Das <strong>conservas artesanais</strong> da costa
            portuguesa — sardinhas, atum e polvo em azeite de qualidade — à{' '}
            <strong>flor de sal</strong> colhida manualmente nas salinas do Algarve,
            cada produto carrega a essência da nossa terra e do nosso mar.
          </p>
          <p>
            Os nossos produtos gourmet são selecionados junto de pequenos produtores
            que mantêm métodos tradicionais de produção. Encontrará mel de montanha,
            queijos artesanais, enchidos de cura lenta e compotas de fruta biológica
            — tudo o que precisa para uma experiência culinária verdadeiramente
            portuguesa.
          </p>
          <p>
            Seja para oferecer ou para desfrutar em casa, as nossas seleções gourmet
            são a forma perfeita de levar os sabores autênticos de Portugal à sua
            mesa. Descubra também os nossos cestos gourmet compostos, pensados para
            surpreender.
          </p>
        </div>
      </div>

      {/* Products count */}
      <p className="text-sm text-muted mb-6">
        {gourmetProducts.length}{' '}
        {gourmetProducts.length === 1
          ? 'produto gourmet disponível'
          : 'produtos gourmet disponíveis'}
      </p>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {gourmetProducts.map((product) => (
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
