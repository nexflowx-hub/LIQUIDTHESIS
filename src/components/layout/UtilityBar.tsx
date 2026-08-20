'use client'

import { Wheat, User } from 'lucide-react'

export function UtilityBar() {
  return (
    <div className="bg-olive">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:py-2">
        {/* Left: Shipping info — hidden on very small screens */}
        <div className="hidden items-center gap-2 sm:flex">
          <Wheat className="size-3.5 text-cream/50" />
          <span className="text-xs tracking-wide text-cream/50">
            Envios para Portugal | Entregas rápidas e seguras
          </span>
        </div>

        {/* Center on mobile — show shipping icon only */}
        <div className="flex items-center gap-1.5 sm:hidden">
          <Wheat className="size-3.5 text-cream/50" />
          <span className="text-[10px] tracking-wide text-cream/40">
            Envios Portugal
          </span>
        </div>

        {/* Right: Auth actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#"
            className="hidden text-xs text-cream/70 transition-colors hover:text-cream md:block"
          >
            Entrar
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-1 bg-gold px-2.5 py-1 text-[10px] sm:px-3 sm:py-1 sm:text-xs font-medium text-dark rounded-sm transition-colors hover:bg-gold-light"
          >
            <User className="size-2.5 sm:size-3" />
            <span className="hidden xs:inline">Área Profissional</span>
            <span className="xs:hidden">Trade</span>
          </button>
        </div>
      </div>
    </div>
  )
}
