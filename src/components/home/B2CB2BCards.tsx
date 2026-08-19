'use client'

import Image from 'next/image'
import { ShoppingBag, Building2 } from 'lucide-react'

export default function B2CB2BCards() {
  return (
    <div className="grid md:grid-cols-2 gap-4 -mt-16 relative z-10 max-w-6xl mx-auto px-4">
      {/* B2C Card */}
      <div className="card-hover bg-olive rounded-lg overflow-hidden flex">
        <div className="w-[40%] relative">
          <Image
            src="/images/sections/b2c-card.jpg"
            alt="Para Si"
            fill
            className="object-cover h-full"
          />
        </div>
        <div className="w-[60%] p-6 flex flex-col justify-center">
          <ShoppingBag className="text-gold mb-3" size={28} />
          <h3 className="font-heading text-2xl text-white">Para Si</h3>
          <p className="text-cream/70 text-sm mt-2">
            Descubra vinhos, azeites, produtos gourmet e boxes cuidadosamente
            selecionadas.
          </p>
          <button className="bg-gold text-dark font-medium px-5 py-2 rounded hover:bg-gold-light mt-4 self-start transition-colors">
            Comprar Agora
          </button>
        </div>
      </div>

      {/* B2B Card */}
      <div className="card-hover bg-burgundy-dark rounded-lg overflow-hidden flex">
        <div className="w-[40%] relative">
          <Image
            src="/images/sections/b2b-card.jpg"
            alt="Para Profissionais"
            fill
            className="object-cover h-full"
          />
        </div>
        <div className="w-[60%] p-6 flex flex-col justify-center">
          <Building2 className="text-gold mb-3" size={28} />
          <h3 className="font-heading text-2xl text-white">Para Profissionais</h3>
          <p className="text-cream/70 text-sm mt-2">
            Preços profissionais, fornecimento por caixa, pedidos por palete e
            soluções para restauração, hotelaria e distribuição.
          </p>
          <button className="bg-gold text-dark font-medium px-5 py-2 rounded hover:bg-gold-light mt-4 self-start transition-colors">
            Entrar no Trade
          </button>
        </div>
      </div>
    </div>
  )
}
