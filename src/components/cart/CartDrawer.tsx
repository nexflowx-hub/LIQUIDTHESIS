'use client'

import Image from 'next/image'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useCartStore } from '@/store/cart'
import { calculateShipping, COMMERCE_MODE } from '@/data/commerce'

interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

function formatPrice(value: number): string {
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
  }).format(value)
}

function CartItemRow({
  productId,
  name,
  price,
  quantity,
  image,
  onRemove,
  onUpdateQuantity,
}: {
  productId: string
  name: string
  price: number
  quantity: number
  image: string
  onRemove: () => void
  onUpdateQuantity: (qty: number) => void
}) {
  return (
    <div className="flex gap-3 py-4">
      {/* Product image */}
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded">
        <Image
          src={image}
          alt={name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-sm font-medium text-dark leading-tight line-clamp-2">
            {name}
          </h4>
          <button
            type="button"
            onClick={onRemove}
            className="shrink-0 text-muted/60 transition-colors hover:text-burgundy"
            aria-label={`Remover ${name}`}
          >
            <Trash2 className="size-4" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          {/* Quantity controls */}
          <div className="inline-flex items-center border border-border rounded-sm">
            <button
              type="button"
              onClick={() => onUpdateQuantity(quantity - 1)}
              className="flex size-7 items-center justify-center text-muted transition-colors hover:text-dark"
              aria-label="Diminuir quantidade"
            >
              <Minus className="size-3" />
            </button>
            <span className="flex min-w-[2rem] items-center justify-center text-sm font-medium text-dark">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => onUpdateQuantity(quantity + 1)}
              className="flex size-7 items-center justify-center text-muted transition-colors hover:text-dark"
              aria-label="Aumentar quantidade"
            >
              <Plus className="size-3" />
            </button>
          </div>

          {/* Line total */}
          <span className="text-sm font-semibold text-dark">
            {formatPrice(price * quantity)}
          </span>
        </div>
      </div>
    </div>
  )
}

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const items = useCartStore((s) => s.items)
  const removeItem = useCartStore((s) => s.removeItem)
  const updateQuantity = useCartStore((s) => s.updateQuantity)
  const getSubtotal = useCartStore((s) => s.getSubtotal)

  const subtotal = getSubtotal()
  const shipping = calculateShipping(subtotal)
  const total = subtotal + shipping

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="flex w-full flex-col sm:max-w-md bg-white"
      >
        {/* Header */}
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="text-lg font-semibold text-dark">
            Carrinho
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          /* Empty state */
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4">
            <ShoppingBag className="size-16 text-muted/30" />
            <p className="text-sm text-muted">
              O seu carrinho está vazio
            </p>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="bg-gold px-5 py-2 text-sm font-medium text-dark rounded-sm transition-colors hover:bg-gold-light"
            >
              Explorar Loja
            </button>
          </div>
        ) : (
          <>
            {/* Item list */}
            <ScrollArea className="flex-1 px-4">
              <div className="divide-y divide-border">
                {items.map((item) => (
                  <CartItemRow
                    key={item.product.id}
                    productId={item.product.id}
                    name={item.product.name}
                    price={item.product.price}
                    quantity={item.quantity}
                    image={item.product.images[0] ?? '/placeholder.jpg'}
                    onRemove={() => removeItem(item.product.id)}
                    onUpdateQuantity={(qty) =>
                      updateQuantity(item.product.id, qty)
                    }
                  />
                ))}
              </div>
            </ScrollArea>

            {/* Footer totals */}
            <SheetFooter className="border-t border-border pt-4">
              <div className="w-full space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-medium text-dark">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Envio</span>
                  <span className="font-medium text-dark">
                    {shipping === 0
                      ? 'Grátis'
                      : formatPrice(shipping)}
                  </span>
                </div>
                <div className="my-1 border-t border-border" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-dark">
                    Total
                  </span>
                  <span className="text-lg font-bold text-dark">
                    {formatPrice(total)}
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-2 w-full bg-gold py-2.5 text-sm font-semibold text-dark rounded-sm transition-colors hover:bg-gold-light"
                >
                  Finalizar Compra
                </button>

                {COMMERCE_MODE === 'demo' && (
                  <p className="mt-1 text-center text-[11px] text-muted/60">
                    Catálogo demonstrativo
                  </p>
                )}
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
