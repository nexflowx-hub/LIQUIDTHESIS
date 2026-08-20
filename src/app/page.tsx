'use client'

import HeroSection from '@/components/home/HeroSection'
import B2CB2BCards from '@/components/home/B2CB2BCards'
import CategoriesSection from '@/components/home/CategoriesSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import TradeSection from '@/components/home/TradeSection'
import ClubSection from '@/components/home/ClubSection'
import { ProducerCTA } from '@/components/home/ProducerCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <B2CB2BCards />
      <CategoriesSection />
      <FeaturedProducts />
      <TradeSection />
      <ClubSection />
      <ProducerCTA />
    </>
  )
}
