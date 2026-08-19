'use client'

import { Wheat, User } from 'lucide-react'

export function UtilityBar() {
  return (
    <div className="bg-olive">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        {/* Left: Shipping info */}
        <div className="flex items-center gap-2">
          <Wheat className="size-3.5 text-cream/50" />
          <span className="text-xs tracking-wide text-cream/50">
            Envios para Portugal | Entregas rápidas e seguras
          </span>
        </div>

        {/* Right: Auth actions */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-xs text-cream/70 transition-colors hover:text-cream"
          >
            Entrar
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 bg-gold px-3 py-1 text-xs font-medium text-dark rounded-sm transition-colors hover:bg-gold-light"
          >
            <User className="size-3" />
            Área Profissional
          </button>
        </div>
      </div>
    </div>
  )
}
