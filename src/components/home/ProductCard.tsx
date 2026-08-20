'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, Star, Droplets, Wine, Package, ShoppingCart } from 'lucide-react'
import type { Product } from '@/data/types'
import { useCartStore } from '@/store/cart'

interface ProductCardProps {
  product: Product
  onOpenCart?: () => void
}

const placeholderIcons: Record<string, React.ElementType> = {
  azeites: Droplets,
  vinhos: Wine,
  boxes: Package,
}

function formatPrice(price: number): string {
  return `\u20ac${price.toFixed(2).replace('.', ',')}`
}

export default function ProductCard({ product, onOpenCart }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem)

  const PlaceholderIcon = placeholderIcons[product.category] ?? Package
  const [imgError, setImgError] = useState(false)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
    onOpenCart?.()
  }

  const unitSuffix = product.volume
    ? product.volume.includes('L')
      ? '/L'
      : '/un'
    : undefined

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden card-hover">
      {/* Image area */}
      <div className="relative bg-cream aspect-[3/4] product-image-zoom">
        {product.images[0] && !imgError ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <PlaceholderIcon className="text-muted/40" size={40} strokeWidth={1.2} />
          </div>
        )}

        {/* Age restricted badge */}
        {product.ageRestricted && (
          <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-burgundy text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">
            18+
          </span>
        )}

        {/* Wishlist button */}
        <button
          className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-muted/60 hover:text-burgundy transition-colors p-1 bg-white/80 rounded-full"
          aria-label="Adicionar aos favoritos"
        >
          <Heart size={14} className="sm:w-[18px] sm:h-[18px]" />
        </button>
      </div>

      {/* Info area */}
      <div className="p-2.5 sm:p-4">
        <p className="uppercase text-[10px] sm:text-[11px] text-muted tracking-wider font-medium">
          {product.category}
        </p>
        <h3 className="font-medium text-xs sm:text-sm text-dark line-clamp-2 mt-0.5 sm:mt-1 leading-snug">
          {product.name}
        </h3>
        {(product.volume || product.unitLabel) && (
          <p className="text-[10px] sm:text-xs text-muted mt-0.5">
            {product.volume ?? product.unitLabel}
          </p>
        )}

        {/* Price */}
        <div className="mt-1.5 sm:mt-2 flex items-baseline gap-1">
          <span className="font-semibold text-base sm:text-lg text-dark">
            {formatPrice(product.price)}
          </span>
          {product.unitPrice && unitSuffix && (
            <span className="text-[10px] sm:text-xs text-muted font-normal">
              {formatPrice(product.unitPrice)}{unitSuffix}
            </span>
          )}
        </div>

        {/* Rating - visual only — hidden on mobile for cleaner look */}
        <div className="hidden sm:flex gap-0.5 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className="text-gold-light fill-gold-light"
            />
          ))}
        </div>

        {/* Stock — hidden on very small screens */}
        <div className="hidden sm:flex items-center gap-1.5 mt-1.5">
          <span
            className={`inline-block w-1.5 h-1.5 rounded-full ${
              product.stockStatus === 'in_stock'
                ? 'bg-green-500'
                : product.stockStatus === 'low_stock'
                  ? 'bg-amber-500'
                  : 'bg-red-400'
            }`}
          />
          <span className="text-xs text-muted">
            {product.stockStatus === 'in_stock'
              ? 'Em stock'
              : product.stockStatus === 'low_stock'
                ? 'Stock baixo'
                : 'Esgotado'}
          </span>
        </div>

        {/* Add to cart button */}
        <button
          className={`w-full flex items-center justify-center gap-1.5 border text-dark text-xs sm:text-sm font-medium py-1.5 sm:py-2 rounded mt-2 sm:mt-3 transition-all ${
            added
              ? 'border-green-500 bg-green-50 text-green-700'
              : 'border-border hover:bg-dark hover:text-cream'
          }`}
          onClick={handleAdd}
        >
          {added ? (
            <>
              <span className="text-green-600">✓</span>
              Adicionado
            </>
          ) : (
            <>
              <ShoppingCart className="size-3 sm:size-3.5" />
              Adicionar
            </>
          )}
        </button>
      </div>
    </div>
  )
}
