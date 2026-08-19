'use client'

import { useEffect, useState } from 'react'
import { Search, User, ShoppingBag, Menu } from 'lucide-react'
import { useCartStore } from '@/store/cart'

interface HeaderProps {
  onOpenCart: () => void
  onOpenMobileMenu: () => void
}

const NAV_LINKS = [
  { label: 'Loja', href: '#' },
  { label: 'Azeites', href: '#' },
  { label: 'Vinhos', href: '#' },
  { label: 'Gourmet', href: '#' },
  { label: 'Boxes', href: '#' },
  { label: 'Trade', href: '#' },
  { label: 'Produtores', href: '#' },
  { label: 'Clube', href: '#' },
  { label: 'Sobre', href: '#' },
  { label: 'Contacto', href: '#' },
] as const

export function Header({ onOpenCart, onOpenMobileMenu }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const cartCount = useCartStore((s) => s.getItemCount())

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-ivory transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Left: Logo */}
        <a href="#" className="shrink-0">
          <span className="font-heading text-xl font-semibold uppercase tracking-[0.2em] text-dark">
            LIQUIDTHESIS
          </span>
        </a>

        {/* Center: Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-dark/70 transition-colors hover:text-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="text-dark/70 transition-colors hover:text-dark"
            aria-label="Pesquisar"
          >
            <Search className="size-5" />
          </button>

          <a
            href="#"
            className="hidden text-dark/70 transition-colors hover:text-dark md:block"
            aria-label="Conta"
          >
            <User className="size-5" />
          </a>

          <button
            type="button"
            className="relative text-dark/70 transition-colors hover:text-dark"
            aria-label="Abrir carrinho"
            onClick={onOpenCart}
          >
            <ShoppingBag className="size-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex size-4.5 items-center justify-center rounded-full bg-burgundy text-[10px] font-semibold leading-none text-cream">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile: Hamburger */}
          <button
            type="button"
            className="text-dark/70 transition-colors hover:text-dark md:hidden"
            aria-label="Abrir menu"
            onClick={onOpenMobileMenu}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
