import { featuredProducts } from '@/data/products'
import ProductCard from './ProductCard'

interface FeaturedProductsProps {
  onOpenCart: () => void
}

export default function FeaturedProducts({ onOpenCart }: FeaturedProductsProps) {
  return (
    <section className="bg-ivory py-10 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <h2 className="font-heading text-2xl sm:text-3xl text-dark text-center">
          Produtos em Destaque
        </h2>
        <div className="section-divider mt-3 sm:mt-4" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onOpenCart={onOpenCart} />
          ))}
        </div>
      </div>
    </section>
  )
}
