'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

const clientTypes = [
  'Restauração',
  'Hotalaria',
  'Garrafeira',
  'Distribuidor',
  'Retalho',
  'Outro',
]

interface FormData {
  empresa: string
  nipc: string
  nome: string
  email: string
  telefone: string
  tipoCliente: string
  mensagem: string
  privacidade: boolean
}

export default function CotacaoPage() {
  const [formData, setFormData] = useState<FormData>({
    empresa: '',
    nipc: '',
    nome: '',
    email: '',
    telefone: '',
    tipoCliente: '',
    mensagem: '',
    privacidade: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function updateField(field: keyof FormData, value: string | boolean) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!formData.privacidade) return
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <PageShell
        title='Pedido de Cotação Enviado'
        subtitle='Receba uma proposta comercial personalizada em até 24 horas úteis.'
        breadcrumbs={[
          { label: 'Trade', href: '/trade' },
          { label: 'Pedir Cotação' },
        ]}
        darkHero
      >
        <div className='text-center py-12 sm:py-16'>
          <div className='bg-olive/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6'>
            <CheckCircle2 className='size-8 sm:size-10 text-olive' />
          </div>
          <h2 className='font-heading text-2xl sm:text-3xl font-bold text-dark mb-3'>
            Obrigado, {formData.nome || 'parceiro'}!
          </h2>
          <p className='text-muted text-sm sm:text-base max-w-lg mx-auto leading-relaxed'>
            O seu pedido de cotação foi recebido com sucesso. A nossa equipa comercial irá analisar o seu
            pedido e enviar uma proposta personalizada em até 24 horas úteis.
          </p>
          <p className='text-muted text-sm mt-4'>
            Enviámos uma confirmação para{' '}
            <span className='text-dark font-medium'>{formData.email}</span>.
          </p>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell
      title='Pedir Cotação'
      subtitle='Receba uma proposta comercial personalizada em até 24 horas úteis.'
      breadcrumbs={[
        { label: 'Trade', href: '/trade' },
        { label: 'Pedir Cotação' },
      ]}
      darkHero
    >
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12'>
        {/* Form */}
        <div className='lg:col-span-2'>
          <form onSubmit={handleSubmit} className='space-y-5 sm:space-y-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
              <div className='space-y-2'>
                <Label htmlFor='empresa' className='text-sm font-medium text-dark'>
                  Nome da Empresa <span className='text-red-500'>*</span>
                </Label>
                <Input
                  id='empresa'
                  placeholder='LiquidThesis, Lda.'
                  value={formData.empresa}
                  onChange={(e) => updateField('empresa', e.target.value)}
                  required
                  className='bg-ivory border-cream/80'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='nipc' className='text-sm font-medium text-dark'>
                  NIPC <span className='text-red-500'>*</span>
                </Label>
                <Input
                  id='nipc'
                  placeholder='519 440 390'
                  value={formData.nipc}
                  onChange={(e) => updateField('nipc', e.target.value)}
                  required
                  className='bg-ivory border-cream/80'
                />
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
              <div className='space-y-2'>
                <Label htmlFor='nome' className='text-sm font-medium text-dark'>
                  Nome do Contacto <span className='text-red-500'>*</span>
                </Label>
                <Input
                  id='nome'
                  placeholder='João Silva'
                  value={formData.nome}
                  onChange={(e) => updateField('nome', e.target.value)}
                  required
                  className='bg-ivory border-cream/80'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email' className='text-sm font-medium text-dark'>
                  Email <span className='text-red-500'>*</span>
                </Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='joao@empresa.pt'
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  required
                  className='bg-ivory border-cream/80'
                />
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
              <div className='space-y-2'>
                <Label htmlFor='telefone' className='text-sm font-medium text-dark'>
                  Telefone <span className='text-red-500'>*</span>
                </Label>
                <Input
                  id='telefone'
                  type='tel'
                  placeholder='+351 912 345 678'
                  value={formData.telefone}
                  onChange={(e) => updateField('telefone', e.target.value)}
                  required
                  className='bg-ivory border-cream/80'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='tipoCliente' className='text-sm font-medium text-dark'>
                  Tipo de Cliente <span className='text-red-500'>*</span>
                </Label>
                <Select
                  value={formData.tipoCliente}
                  onValueChange={(val) => updateField('tipoCliente', val)}
                  required
                >
                  <SelectTrigger id='tipoCliente' className='bg-ivory border-cream/80'>
                    <SelectValue placeholder='Selecione...' />
                  </SelectTrigger>
                  <SelectContent>
                    {clientTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='mensagem' className='text-sm font-medium text-dark'>
                Mensagem
              </Label>
              <Textarea
                id='mensagem'
                placeholder='Descreva o seu projeto ou as suas necessidades (produtos, quantidades, periodicidade, etc.)...'
                rows={5}
                value={formData.mensagem}
                onChange={(e) => updateField('mensagem', e.target.value)}
                className='bg-ivory border-cream/80 resize-none'
              />
            </div>

            <div className='flex items-start gap-3'>
              <Checkbox
                id='privacidade'
                checked={formData.privacidade}
                onCheckedChange={(checked) => updateField('privacidade', !!checked)}
                className='mt-0.5'
              />
              <Label htmlFor='privacidade' className='text-sm text-muted leading-relaxed cursor-pointer'>
                Li e aceito a{' '}
                <a href='/politica-privacidade' className='text-gold hover:underline'>
                  Política de Privacidade
                </a>
                {' '}e autorizo o tratamento dos meus dados para efeitos comerciais.{' '}
                <span className='text-red-500'>*</span>
              </Label>
            </div>

            <Button
              type='submit'
              disabled={!formData.privacidade || loading}
              className='btn-gold w-full sm:w-auto px-8 py-3 text-sm sm:text-base'
            >
              {loading ? (
                <>
                  <Loader2 className='size-4 mr-2 animate-spin' />
                  A enviar...
                </>
              ) : (
                <>
                  <Send className='size-4 mr-2' />
                  Enviar Pedido de Cotação
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Sidebar Contact Info */}
        <aside className='lg:col-span-1'>
          <div className='bg-olive rounded-lg p-5 sm:p-6 text-cream sticky top-24'>
            <h3 className='font-heading text-lg sm:text-xl font-semibold mb-5'>Contacto Direto</h3>
            <div className='space-y-4'>
              <div className='flex items-start gap-3'>
                <Mail className='size-5 text-gold mt-0.5 shrink-0' />
                <div>
                  <p className='text-xs text-cream/60 uppercase tracking-wider mb-1'>Email</p>
                  <a
                    href='mailto:trade@liquidthesis.pt'
                    className='text-cream hover:text-gold transition-colors text-sm sm:text-base'
                  >
                    trade@liquidthesis.pt
                  </a>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Phone className='size-5 text-gold mt-0.5 shrink-0' />
                <div>
                  <p className='text-xs text-cream/60 uppercase tracking-wider mb-1'>Telefone</p>
                  <a
                    href='tel:+351261000000'
                    className='text-cream hover:text-gold transition-colors text-sm sm:text-base'
                  >
                    +351 261 000 000
                  </a>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <MapPin className='size-5 text-gold mt-0.5 shrink-0' />
                <div>
                  <p className='text-xs text-cream/60 uppercase tracking-wider mb-1'>Morada</p>
                  <p className='text-cream text-sm sm:text-base leading-relaxed'>
                    Rua de São Nuno, 92
                    <br />
                    2560-195 Soltaria
                    <br />
                    Torres Vedras, Portugal
                  </p>
                </div>
              </div>
            </div>

            <div className='section-divider my-5' />

            <div>
              <h4 className='font-heading text-sm font-semibold text-gold mb-2'>
                Horário Comercial
              </h4>
              <p className='text-cream/80 text-sm leading-relaxed'>
                Segunda a Sexta: 9h00 – 18h00
                <br />
                Sábados: 10h00 – 13h00
              </p>
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  )
}
