'use client'

import { useState, type FormEvent } from 'react'
import { PageShell } from '@/components/layout/PageShell'
import { MapPin, Clock, Mail, Instagram, Linkedin, Facebook } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const SUBJECTS = [
  'Informação Geral',
  'Encomendas',
  'Trade / B2B',
  'Produtores',
  'Parcerias',
  'Outro',
]

const contactCards = [
  {
    icon: MapPin,
    title: 'Morada',
    lines: ['Rua de São Nuno, 92', '2560-195 Soltaria', 'São Pedro da Cadeira, Torres Vedras', 'Portugal'],
  },
  {
    icon: Clock,
    title: 'Horário',
    lines: ['Segunda a Sexta: 9h00 – 18h00', 'Sábado: 10h00 – 13h00', 'Domingo: Encerrado'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@liquidthesis.pt'],
    href: 'mailto:info@liquidthesis.pt',
  },
]

export default function ContactoPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <PageShell
      title='Contacto'
      subtitle='Estamos disponíveis para ajudar.'
      breadcrumbs={[{ label: 'Contacto' }]}
    >
      <div className='grid lg:grid-cols-5 gap-8 sm:gap-12'>
        {/* Form */}
        <div className='lg:col-span-3'>
          {sent ? (
            <div className='bg-green-50 border border-green-200 rounded-lg p-8 text-center'>
              <p className='text-green-700 font-heading text-xl'>Mensagem Enviada</p>
              <p className='text-green-600 text-sm mt-2'>
                Obrigado pelo seu contacto. Responderemos em até 24 horas úteis.
              </p>
              <button
                type='button'
                onClick={() => { setSent(false); setForm({ nome: '', email: '', assunto: '', mensagem: '' }) }}
                className='mt-4 text-sm text-green-700 underline'
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-5'>
              <div>
                <label className='block text-sm font-medium text-dark mb-1'>Nome</label>
                <Input
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder='O seu nome completo'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-dark mb-1'>Email</label>
                <Input
                  required
                  type='email'
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder='email@exemplo.pt'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-dark mb-1'>Assunto</label>
                <select
                  required
                  value={form.assunto}
                  onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                  className='w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-ring'
                >
                  <option value=''>Selecione um assunto</option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className='block text-sm font-medium text-dark mb-1'>Mensagem</label>
                <Textarea
                  required
                  rows={5}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  placeholder='Escreva a sua mensagem...'
                />
              </div>
              <button
                type='submit'
                className='w-full btn-gold text-dark font-semibold py-2.5 rounded-md text-sm sm:text-base'
              >
                Enviar Mensagem
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className='lg:col-span-2 space-y-4'>
          {contactCards.map((c) => (
            <div key={c.title} className='bg-white rounded-lg p-4 sm:p-5 shadow-sm'>
              <div className='flex items-start gap-3'>
                <c.icon className='text-gold size-5 shrink-0 mt-0.5' />
                <div>
                  <h3 className='font-medium text-sm text-dark'>{c.title}</h3>
                  {c.lines.map((line, i) => (
                    <p key={i} className='text-xs sm:text-sm text-muted mt-0.5'>
                      {c.href && i === 0 ? (
                        <a href={c.href} className='hover:text-dark transition-colors'>{line}</a>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Social */}
          <div className='bg-white rounded-lg p-4 sm:p-5 shadow-sm'>
            <h3 className='font-medium text-sm text-dark mb-3'>Redes Sociais</h3>
            <div className='flex gap-3'>
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Facebook, label: 'Facebook' },
              ].map((s) => (
                <a
                  key={s.label}
                  href='#'
                  className='flex items-center justify-center size-10 rounded-full bg-cream text-muted hover:text-dark hover:bg-border transition-colors'
                  aria-label={s.label}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
