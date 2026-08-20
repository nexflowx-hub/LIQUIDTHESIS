import { type Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
import { RotateCcw, ShieldCheck, XCircle, ArrowRightCircle, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Devoluções e Trocas — LiquidThesis',
  description: 'Política de devoluções e trocas simplificada da LiquidThesis. Saiba como devolver ou trocar os seus produtos.',
}

const steps = [
  {
    icon: Mail,
    title: 'Contacto',
    description: 'Envie um email para devolucoes@liquidthesis.pt com o número da encomenda e o motivo da devolução. Responderemos em até 24 horas úteis com as instruções de devolução.',
  },
  {
    icon: RotateCcw,
    title: 'Envio',
    description: 'Embale os produtos na embalagem original e envie-os para o endereço que lhe será indicado. Os custos de envio da devolução são da responsabilidade do cliente, salvo se o produto estiver defeituoso.',
  },
  {
    icon: ArrowRightCircle,
    title: 'Reembolso',
    description: 'Após a receção e verificação do estado dos produtos, o reembolso será processado no prazo de 5 a 10 dias úteis, utilizando o mesmo meio de pagamento utilizado na compra.',
  },
]

export default function DevolucoesPage() {
  return (
    <PageShell
      title='Devoluções e Trocas'
      subtitle='Política de devoluções simplificada.'
      breadcrumbs={[{ label: 'Devoluções' }]}
    >
      <div className='max-w-3xl mx-auto space-y-12'>
        {/* Direito de arrependimento */}
        <div>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-10 h-10 rounded-full bg-cream flex items-center justify-center'>
              <ShieldCheck className='size-5 text-gold' />
            </div>
            <h2 className='font-heading text-xl sm:text-2xl font-bold text-dark'>Direito de Arrependimento</h2>
          </div>
          <div className='bg-white border border-dark/10 rounded-lg p-5 sm:p-6 space-y-4'>
            <p className='text-sm sm:text-base text-dark/80 leading-relaxed'>
              De acordo com o <strong className='text-dark'>Decreto-Lei n.º 24/2014</strong>, de 14 de fevereiro, o consumidor dispõe de um prazo de <strong className='text-dark'>14 dias</strong> após a receção dos produtos para exercer o direito de arrependimento, sem necessidade de justificação.
            </p>
            <p className='text-sm sm:text-base text-dark/80 leading-relaxed'>
              Para exercer este direito, o consumidor deve notificar a LiquidThesis da sua decisão de devolução, por escrito, através do email <a href='mailto:devolucoes@liquidthesis.pt' className='text-gold hover:text-gold-light underline transition-colors'>devolucoes@liquidthesis.pt</a>, indicando o número da encomenda e os produtos a devolver.
            </p>
            <p className='text-sm sm:text-base text-dark/80 leading-relaxed'>
              Os produtos deverão ser devolvidos no prazo máximo de 14 dias após a notificação, na embalagem original e em perfeitas condições.
            </p>
          </div>
        </div>

        <div className='section-divider' />

        {/* Condições */}
        <div>
          <h2 className='font-heading text-xl sm:text-2xl font-bold text-dark mb-4'>Condições de Devolução</h2>
          <div className='bg-white border border-dark/10 rounded-lg p-5 sm:p-6'>
            <p className='text-sm sm:text-base text-dark/80 leading-relaxed mb-4'>
              Para que a devolução seja aceite, os produtos devem cumprir os seguintes requisitos:
            </p>
            <ul className='list-disc list-inside space-y-2 text-sm text-dark/80'>
              <li>Produto selado e com lacre intacto</li>
              <li>Embalagem original em boas condições</li>
              <li>Sem sinais de utilização, abertura ou consumo</li>
              <li>Acompanhado da fatura ou documento de compra</li>
              <li>Devolvido no prazo de 14 dias após a notificação</li>
            </ul>
          </div>
        </div>

        <div className='section-divider' />

        {/* Exclusões */}
        <div>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-10 h-10 rounded-full bg-cream flex items-center justify-center'>
              <XCircle className='size-5 text-gold' />
            </div>
            <h2 className='font-heading text-xl sm:text-2xl font-bold text-dark'>Exclusões ao Direito de Devolução</h2>
          </div>
          <div className='bg-ivory border border-dark/10 rounded-lg p-5 sm:p-6'>
            <p className='text-sm sm:text-base text-dark/80 leading-relaxed mb-4'>
              O direito de arrependimento não é aplicável aos seguintes casos, nos termos da legislação em vigor:
            </p>
            <ul className='list-disc list-inside space-y-2 text-sm text-dark/80'>
              <li>Produtos perecíveis ou com prazo de validade limitado</li>
              <li>Produtos personalizados ou feitos por medida</li>
              <li>Bebidas alcoólicas seladas que não possam ser devolvidas por razões de proteção da saúde ou por estarem sujeitas a regulamentação especial</li>
              <li>Produtos com selo de segurança que tenha sido rompido após a entrega</li>
            </ul>
            <p className='text-sm text-dark/60 mt-4 italic'>
              Nota: No caso de receber um produto defeituoso ou incorreto, contacte-nos imediatamente para providenciarmos a substituição ou reembolso.
            </p>
          </div>
        </div>

        <div className='section-divider' />

        {/* Processo */}
        <div>
          <h2 className='font-heading text-xl sm:text-2xl font-bold text-dark mb-6'>Como Efetuar uma Devolução</h2>
          <div className='space-y-4'>
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={step.title} className='bg-white border border-dark/10 rounded-lg p-5 sm:p-6 flex gap-4'>
                  <div className='shrink-0'>
                    <div className='w-10 h-10 rounded-full bg-cream flex items-center justify-center'>
                      <span className='font-heading font-bold text-gold text-sm'>{idx + 1}</span>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center gap-2 mb-2'>
                      <Icon className='size-4 text-muted' />
                      <h3 className='font-heading font-bold text-dark text-base'>{step.title}</h3>
                    </div>
                    <p className='text-sm text-dark/70 leading-relaxed'>{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className='section-divider' />

        {/* Contacto */}
        <div className='bg-cream rounded-lg p-5 sm:p-6 text-center'>
          <p className='text-sm sm:text-base text-dark/80 mb-2'>
            Para iniciar uma devolução ou esclarecer dúvidas, contacte-nos:
          </p>
          <a
            href='mailto:devolucoes@liquidthesis.pt'
            className='text-gold hover:text-gold-light underline transition-colors font-medium'
          >
            devolucoes@liquidthesis.pt
          </a>
        </div>
      </div>
    </PageShell>
  )
}
