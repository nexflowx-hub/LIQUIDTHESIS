'use client'

import { useState, type ReactNode } from 'react'
import { UtilityBar } from './UtilityBar'
import { Header } from './Header'
import { Footer } from './Footer'
import { CartDrawer } from '@/components/cart/CartDrawer'
import { AgeGate } from '@/components/overlays/AgeGate'
import { CookieConsent } from '@/components/overlays/CookieConsent'
import { MobileMenu } from '@/components/overlays/MobileMenu'

export function ClientShell({ children }: { children: ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <UtilityBar />
      <Header
        onOpenCart={() => setCartOpen(true)}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
      />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
      <MobileMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} />
      <AgeGate />
      <CookieConsent />
    </>
  )
}
