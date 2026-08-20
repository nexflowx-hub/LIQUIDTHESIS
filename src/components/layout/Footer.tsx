import { Wheat } from 'lucide-react'
import { company } from '@/data/company'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'

const FOOTER_SHOP = [
  { label: 'Azeites', href: '/azeites' },
  { label: 'Vinhos', href: '/vinhos' },
  { label: 'Gourmet', href: '/gourmet' },
  { label: 'Boxes', href: '/boxes' },
  { label: 'Novidades', href: '/novidades' },
]

const FOOTER_TRADE = [
  { label: 'Área Profissional', href: '/trade' },
  { label: 'Pedir Cotação', href: '/trade/cotacao' },
  { label: 'Exportação', href: '/trade/exportacao' },
  { label: 'Corporate Gifts', href: '/trade/corporate-gifts' },
  { label: 'Private Label', href: '/trade/private-label' },
]

const FOOTER_COMPANY = [
  { label: 'Sobre', href: '/sobre' },
  { label: 'Produtores', href: '/produtores' },
  { label: 'Contacto', href: '/contacto' },
]

const FOOTER_SUPPORT = [
  { label: 'Perguntas Frequentes', href: '/faq' },
  { label: 'Envios', href: '/envios' },
  { label: 'Devoluções', href: '/devolucoes' },
  { label: 'Termos e Condições', href: '/termos' },
  { label: 'Política de Privacidade', href: '/privacidade' },
  { label: 'Política de Cookies', href: '/cookies' },
]

const PAYMENT_ICONS = [
  { src: '/images/payment/visa.svg', alt: 'Visa', width: 40, height: 26 },
  { src: '/images/payment/mastercard.svg', alt: 'MasterCard', width: 40, height: 26 },
  { src: '/images/payment/apple-pay.svg', alt: 'Apple Pay', width: 40, height: 26 },
  { src: '/images/payment/mbway.svg', alt: 'MB WAY', width: 52, height: 26 },
  { src: '/images/payment/bizum.svg', alt: 'Bizum', width: 52, height: 26 },
  { src: '/images/payment/pix.svg', alt: 'Pix', width: 26, height: 26 },
]

function FooterColumn({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-cream">
        {title}
      </h3>
      <ul className="space-y-1.5 sm:space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-xs sm:text-sm text-cream/60 transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-olive text-cream">
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-5">
          <FooterColumn title="Loja" links={FOOTER_SHOP} />
          <FooterColumn title="Trade" links={FOOTER_TRADE} />
          <FooterColumn title="Empresa" links={FOOTER_COMPANY} />
          <FooterColumn title="Apoio" links={FOOTER_SUPPORT} />

          {/* Newsletter column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-cream">
              Newsletter
            </h3>
            <p className="mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed text-cream/60">
              Receba novidades, promoções exclusivas e informações sobre novos
              produtos diretamente no seu email.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="O seu email"
                className="border-cream/20 bg-olive-secondary text-cream placeholder:text-cream/40 focus-visible:border-gold focus-visible:ring-gold/30 text-xs sm:text-sm"
                aria-label="Email para newsletter"
              />
              <button
                type="button"
                className="bg-gold px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-dark transition-colors hover:bg-gold-light rounded-sm whitespace-nowrap"
              >
                Subscrever
              </button>
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="mt-6 sm:mt-8 border-t border-cream/10 pt-5 sm:pt-6">
          <p className="text-[10px] sm:text-xs text-cream/40 uppercase tracking-wider mb-3">Meios de Pagamento</p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {PAYMENT_ICONS.map((icon) => (
              <Image
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
                className="opacity-60 hover:opacity-100 transition-opacity"
                style={{ height: '22px', width: 'auto' }}
              />
            ))}
          </div>
        </div>

        {/* Company info section */}
        <div className="mt-5 sm:mt-6 space-y-2 sm:space-y-3 border-t border-cream/10 pt-5 sm:pt-6">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] sm:text-xs text-cream/50">
            <span className="font-medium text-cream/70">{company.name}</span>
            <span>·</span>
            <span>NIPC {company.nipc}</span>
            <span>·</span>
            <span>Capital Social: €{company.capital}</span>
          </div>
          <p className="text-[10px] sm:text-xs text-cream/50">{company.fullAddress}</p>
          <p className="text-[10px] sm:text-xs text-cream/50">
            CAE: {company.cae} — {company.caeDescription}
          </p>
        </div>

        {/* Alcohol warnings */}
        <div className="mt-4 sm:mt-6 space-y-0.5 sm:space-y-1">
          <p className="text-[10px] sm:text-[11px] text-cream/40">
            {company.legal.alcoholWarning}
          </p>
          <p className="text-[10px] sm:text-[11px] text-cream/40">
            {company.legal.drinkResponsibly}
          </p>
        </div>

        {/* RAL disclaimer */}
        <p className="mt-2 sm:mt-3 text-[10px] sm:text-[11px] text-cream/40">
          {company.legal.ralDisclaimer}{' '}
          <a
            href={company.legal.ralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-cream/70"
          >
            {company.legal.ralEntity}
          </a>
          .{' '}
          <a
            href={company.legal.complaintsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-cream/70"
          >
            Livro de Reclamações
          </a>
        </p>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-3 sm:px-4 py-3 sm:py-4 text-[10px] sm:text-xs text-cream/50 sm:flex-row sm:justify-between">
          {/* Left: Tagline */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Wheat className="size-3 sm:size-3.5" />
            <span>{company.tagline}</span>
          </div>

          {/* Center: Copyright */}
          <span>
            © {currentYear} {company.shortName}. Todos os direitos reservados.
          </span>

          {/* Right: Legal links */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              href="/termos"
              className="transition-colors hover:text-cream/70"
            >
              Termos &amp; Condições
            </Link>
            <span>|</span>
            <Link
              href="/privacidade"
              className="transition-colors hover:text-cream/70"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
