'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FaqAccordionProps {
  question: string
  answer: string
}

export function FaqAccordion({ question, answer }: FaqAccordionProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className='border-b border-dark/10'>
      <button
        onClick={() => setOpen(!open)}
        className='w-full flex items-center justify-between py-4 text-left group cursor-pointer'
        aria-expanded={open}
      >
        <span className='text-sm sm:text-base font-medium text-dark group-hover:text-gold transition-colors pr-4'>
          {question}
        </span>
        <ChevronDown
          className={`size-5 text-muted shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <p className='text-sm text-dark/70 leading-relaxed'>{answer}</p>
      </div>
    </div>
  )
}
