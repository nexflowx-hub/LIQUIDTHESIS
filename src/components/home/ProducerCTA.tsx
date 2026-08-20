import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function ProducerCTA() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/sections/producer-cta.jpg"
          alt="Vinha portuguesa ao pôr do sol"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-dark/70" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">
          É Produtor?
        </h2>
        <p className="text-cream/80 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto leading-relaxed">
          Venda connosco para clientes em Portugal e na Europa.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 btn-gold text-dark font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md mt-6 sm:mt-8 hover:gap-3 transition-all text-sm sm:text-base"
        >
          Tornar-se Parceiro
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </Link>
      </div>
    </section>
  )
}
