import { type ReactNode } from 'react'
import { Wheat, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageShellProps {
  title: string
  subtitle?: string
  breadcrumbs?: BreadcrumbItem[]
 children: ReactNode
  darkHero?: boolean
}

export function PageShell({
  title,
  subtitle,
  breadcrumbs = [],
  children,
  darkHero = false,
}: PageShellProps) {
  return (
    <>
      {/* Hero banner */}
      <section
        className={`py-16 sm:py-20 md:py-24 ${darkHero ? 'bg-olive text-cream' : 'bg-cream text-dark'}`}
      >
        <div className='max-w-6xl mx-auto px-3 sm:px-4'>
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className='mb-4 sm:mb-6' aria-label='Navegação estrutural'>
              <ol className='flex items-center flex-wrap gap-1 text-xs sm:text-sm'>
                <li>
                  <Link href='/' className='text-cream/70 hover:text-cream transition-colors'>
                    Início
                  </Link>
                </li>
                {breadcrumbs.map((crumb, i) => (
                  <li key={crumb.label} className='flex items-center gap-1'>
                    <ChevronRight className='size-3 opacity-50' />
                    {crumb.href && i < breadcrumbs.length - 1 ? (
                      <Link href={crumb.href} className='text-cream/70 hover:text-cream transition-colors'>
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className='text-cream font-medium'>{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <h1 className='font-heading text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl'>{title}</h1>
          {subtitle && (
            <p className='mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl opacity-80 leading-relaxed'>
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Page content */}
      <section className='py-10 sm:py-12 md:py-16'>
        <div className='max-w-6xl mx-auto px-3 sm:px-4'>{children}</div>
      </section>

      {/* Bottom CTA */}
      <section className='bg-olive py-10 sm:py-12'>
        <div className='max-w-6xl mx-auto px-3 sm:px-4 text-center'>
          <div className='flex items-center justify-center gap-2 text-cream/60 mb-3'>
            <Wheat className='size-4' />
            <span className='text-xs sm:text-sm uppercase tracking-wider'>LiquidThesis</span>
            <Wheat className='size-4' />
          </div>
          <p className='text-cream/80 text-sm sm:text-base'>
 Precisa de ajuda? Contacte-nos{' '}
            <Link href='/contacto' className='text-gold hover:text-gold-light underline transition-colors'>
              aqui
            </Link>
            {' '}ou envie um email para{' '}
            <a href='mailto:info@liquidthesis.pt' className='text-gold hover:text-gold-light underline transition-colors'>
              info@liquidthesis.pt
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
