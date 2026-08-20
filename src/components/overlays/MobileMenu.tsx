'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

interface MobileMenuProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const NAV_LINKS = [
  { label: 'Loja', href: '/loja' },
  { label: 'Azeites', href: '/azeites' },
  { label: 'Vinhos', href: '/vinhos' },
  { label: 'Gourmet', href: '/gourmet' },
  { label: 'Boxes', href: '/boxes' },
  { label: 'Trade', href: '/trade' },
  { label: 'Produtores', href: '/produtores' },
  { label: 'Clube', href: '#' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contacto', href: '/contacto' },
] as const

export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="flex w-full flex-col bg-ivory">
        {/* Header with logo */}
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="font-heading text-lg font-semibold uppercase tracking-[0.2em] text-dark">
            LIQUIDTHESIS
          </SheetTitle>
        </SheetHeader>

        {/* Navigation links */}
        <nav className="flex-1 overflow-y-auto px-2 py-4" aria-label="Menu mobile">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => onOpenChange(false)}
                  className="flex items-center rounded-md px-3 py-3 font-heading text-lg text-dark/80 transition-colors hover:bg-cream hover:text-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom actions */}
        <div className="border-t border-border px-4 py-4 space-y-3">
          <button
            type="button"
            className="w-full bg-gold px-4 py-2.5 text-sm font-medium text-dark rounded-sm transition-colors hover:bg-gold-light"
          >
            Área Profissional
          </button>
          <a
            href="#"
            className="block text-center text-sm text-dark/60 transition-colors hover:text-dark"
          >
            Entrar
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
