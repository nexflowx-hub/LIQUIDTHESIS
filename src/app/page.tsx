'use client'

import { useState } from 'react'
import { UtilityBar } from '@/components/layout/UtilityBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import B2CB2BCards from '@/components/home/B2CB2BCards'
import CategoriesSection from '@/components/home/CategoriesSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import TradeSection from '@/components/home/TradeSection'
import ClubSection from '@/components/home/ClubSection'
import { ProducerCTA } from '@/components/home/ProducerCTA'
import { CartDrawer } from '@/components/cart/CartDrawer'
import { AgeGate } from '@/components/overlays/AgeGate'
import { CookieConsent } from '@/components/overlays/CookieConsent'
import { MobileMenu } from '@/components/overlays/MobileMenu'

export default function HomePage() {
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <UtilityBar />
      <Header
        onOpenCart={() => setCartOpen(true)}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
      />

      <main className="flex-1">
        <HeroSection onOpenCart={() => setCartOpen(true)} />
        <B2CB2BCards />
        <CategoriesSection />
        <FeaturedProducts onOpenCart={() => setCartOpen(true)} />
        <TradeSection />
        <ClubSection />
        <ProducerCTA />
      </main>

      <Footer />

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
      <MobileMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} />
      <AgeGate />
      <CookieConsent />
    </div>
  )
}
