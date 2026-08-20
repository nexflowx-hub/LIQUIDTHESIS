'use client'

import { useState } from 'react'
import { PageShell } from '@/components/layout/PageShell'
import { products } from '@/data/products'
import type { Product } from '@/data/types'

const categories = [
  { key: 'todos', label: 'Todos' },
  { key: 'azeites', label: 'Azeites' },
  { key: 'vinhos', label: 'Vinhos' },
  { key: 'gourmet', label: 'Gourmet' },
  { key: 'boxes', label: 'Boxes' },
] as const

type CategoryKey = (typeof categories)[number]['key']

function ProductCardInline({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden card-hover">
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
  )
}

export default function LojaPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('todos')

  const filteredProducts =
    activeCategory === 'todos'
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <PageShell title="Loja Online" breadcrumbs={[{ label: 'Loja' }]}>
      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={
              'px-4 py-2 rounded-full text-sm font-medium transition-colors ' +
              (activeCategory === cat.key
                ? 'bg-olive text-cream'
                : 'bg-cream text-dark hover:bg-olive/10')
            }
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-muted mb-6">
        {filteredProducts.length}{' '}
        {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
      </p>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredProducts.map((product) => (
          <ProductCardInline key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted text-lg">Nenhum produto encontrado nesta categoria.</p>
        </div>
      )}
    </PageShell>
  )
}
