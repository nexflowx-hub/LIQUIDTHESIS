import { type Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
import { Truck, MapPin, Globe, Package, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Envios e Entregas — LiquidThesis',
  description: 'Informações detalhadas sobre envios e entregas em Portugal e na Europa com a LiquidThesis.',
}

const shippingZones = [
  {
    icon: MapPin,
    title: 'Portugal Continental',
    highlight: 'Portes grátis acima de 69€',
    details: [
      'Prazo de entrega: 1 a 3 dias úteis',
      'Custo de envio: 4,90€',
      'Envio gratuito para encomendas iguais ou superiores a 69€',
      'Entregas ao domicílio ou ponto de recolha CTT',
    ],
  },
  {
    icon: Globe,
    title: 'Açores e Madeira',
    highlight: 'Sob consulta',
    details: [
      'Prazo de entrega: 5 a 7 dias úteis',
      'Custo de envio: sob consulta (contacte-nos)',
      'Envio via transporte aéreo com acompanhamento',
      'Possibilidade de entrega ao domicílio',
    ],
  },
  {
    icon: Truck,
    title: 'Europa',
    highlight: 'Espanha, França, Alemanha, Bélgica, Holanda, Luxemburgo, Itália',
    details: [
      'Prazo de entrega: 3 a 7 dias úteis',
      'Preços variam por país de destino',
      'Encomenda mínima pode aplicar-se',
      'Documentação aduaneira tratada pela LiquidThesis',
    ],
  },
]

export default function EnviosPage() {
  return (
    <PageShell
      title='Envios e Entregas'
      subtitle='Entregamos em Portugal e na Europa com segurança.'
      breadcrumbs={[{ label: 'Envios' }]}
    >
      <div className='max-w-4xl mx-auto space-y-12'>
        {/* Shipping zones */}
        <div>
          <h2 className='font-heading text-xl sm:text-2xl font-bold text-dark mb-6'>Zonas de Envio</h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {shippingZones.map((zone) => {
              const Icon = zone.icon
              return (
                <div
                  key={zone.title}
                  className='bg-white border border-dark/10 rounded-lg p-5 hover:shadow-md transition-shadow'
                >
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-10 h-10 rounded-full bg-cream flex items-center justify-center'>
                      <Icon className='size-5 text-gold' />
                    </div>
                    <h3 className='font-heading font-bold text-dark text-base'>{zone.title}</h3>
                  </div>
                  <p className='text-gold font-medium text-sm mb-3'>{zone.highlight}</p>
                  <ul className='list-disc list-inside space-y-1 text-sm text-dark/80'>
                    {zone.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        <div className='section-divider' />

        {/* Packaging */}
        <div>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-10 h-10 rounded-full bg-cream flex items-center justify-center'>
              <Package className='size-5 text-gold' />
            </div>
            <h2 className='font-heading text-xl sm:text-2xl font-bold text-dark'>Embalagem</h2>
          </div>
          <div className='bg-white border border-dark/10 rounded-lg p-5 sm:p-6 space-y-4'>
            <p className='text-sm sm:text-base text-dark/80 leading-relaxed'>
              Na LiquidThesis, a qualidade da embalagem é tão importante como a qualidade dos produtos que selecionamos. Todas as garrafas são embaladas individualmente com material de proteção amortecedor, garantindo que cheguem em perfeitas condições ao seu destino.
            </p>
            <ul className='list-disc list-inside space-y-1 text-sm text-dark/80'>
              <li>Proteção individual para cada garrafa com inserts em cartão ondulado</li>
              <li>Caixa de cartão reforçado de dupla parede</li>
              <li>Selos de segurança para garantir a integridade da encomenda</li>
              <li>Identificação discreta no exterior, sem referências ao conteúdo</li>
              <li>Embalagem adaptada ao número de garrafas encomendadas</li>
            </ul>
          </div>
        </div>

        <div className='section-divider' />

        {/* Important notices */}
        <div>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-10 h-10 rounded-full bg-cream flex items-center justify-center'>
              <AlertTriangle className='size-5 text-gold' />
            </div>
            <h2 className='font-heading text-xl sm:text-2xl font-bold text-dark'>Avisos Importantes</h2>
          </div>
          <div className='bg-ivory border border-dark/10 rounded-lg p-5 sm:p-6 space-y-4'>
            <div className='flex items-start gap-3'>
              <span className='text-gold font-bold text-sm mt-0.5'>•</span>
              <div>
                <p className='text-sm sm:text-base text-dark font-medium'>Restrição de bebidas alcoólicas</p>
                <p className='text-sm text-dark/70 mt-1'>
                  Por razões legais e regulamentares, as entregas de bebidas alcoólicas são efetuadas exclusivamente em território português. Não efetuamos envios de bebidas alcoólicas para outros países da União Europeia.
                </p>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <span className='text-gold font-bold text-sm mt-0.5'>•</span>
              <div>
                <p className='text-sm sm:text-base text-dark font-medium'>Idade mínima</p>
                <p className='text-sm text-dark/70 mt-1'>
                  A compra e receção de bebidas alcoólicas está sujeita à idade mínima de 18 anos. Na entrega, o destinatário poderá ser solicitado a comprovar a sua idade. A LiquidThesis reserva-se o direito de recusar entregas a menores de idade.
                </p>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <span className='text-gold font-bold text-sm mt-0.5'>•</span>
              <div>
                <p className='text-sm sm:text-base text-dark font-medium'>Horários de entrega</p>
                <p className='text-sm text-dark/70 mt-1'>
                  As entregas são efetuadas em dias úteis, das 9h às 18h. Não é possível selecionar horários específicos de entrega. Caso não seja possível a entrega no primeiro endereço, a transportadora deixará um aviso com instruções para reagendamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
