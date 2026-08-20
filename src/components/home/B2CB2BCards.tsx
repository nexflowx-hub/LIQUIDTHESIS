'use client'

import Image from 'next/image'
import { ShoppingBag, Building2 } from 'lucide-react'
import Link from 'next/link'

export default function B2CB2BCards() {
  return (
    <div className="px-4 -mt-12 sm:-mt-14 md:-mt-16 relative z-10 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
        {/* B2C Card */}
        <div className="card-hover bg-olive rounded-lg overflow-hidden flex flex-col sm:flex-row">
          <div className="w-full sm:w-[40%] relative h-36 sm:h-auto shrink-0">
            <Image
              src="/images/sections/b2c-card.jpg"
              alt="Para Si"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full sm:w-[60%] p-4 sm:p-6 flex flex-col justify-center">
            <ShoppingBag className="text-gold mb-2 sm:mb-3" size={24} />
            <h3 className="font-heading text-xl sm:text-2xl text-white">Para Si</h3>
            <p className="text-cream/70 text-xs sm:text-sm mt-1.5 sm:mt-2">
              Descubra vinhos, azeites, produtos gourmet e boxes cuidadosamente
              selecionadas.
            </p>
            <Link href="/loja" className="bg-gold text-dark font-medium px-4 sm:px-5 py-2 rounded hover:bg-gold-light mt-3 sm:mt-4 self-start transition-colors text-sm">
              Comprar Agora
            </Link>
          </div>
        </div>

        {/* B2B Card */}
        <div className="card-hover bg-burgundy-dark rounded-lg overflow-hidden flex flex-col sm:flex-row">
          <div className="w-full sm:w-[40%] relative h-36 sm:h-auto shrink-0">
            <Image
              src="/images/sections/b2b-card.jpg"
              alt="Para Profissionais"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full sm:w-[60%] p-4 sm:p-6 flex flex-col justify-center">
            <Building2 className="text-gold mb-2 sm:mb-3" size={24} />
            <h3 className="font-heading text-xl sm:text-2xl text-white">Para Profissionais</h3>
            <p className="text-cream/70 text-xs sm:text-sm mt-1.5 sm:mt-2">
              Preços profissionais, fornecimento por caixa, pedidos por palete e
              soluções para restauração, hotelaria e distribuição.
            </p>
            <Link href="/trade" className="bg-gold text-dark font-medium px-4 sm:px-5 py-2 rounded hover:bg-gold-light mt-3 sm:mt-4 self-start transition-colors text-sm">
              Entrar no Trade
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
