import { type Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
import { FaqAccordion } from './FaqAccordion'

export const metadata: Metadata = {
  title: 'Perguntas Frequentes — LiquidThesis',
  description: 'Respostas às dúvidas mais comuns sobre encomendas, envios e produtos na LiquidThesis.',
}

const faqCategories = [
  {
    title: 'Encomendas e Envios',
    items: [
      {
        question: 'Quanto tempo demora a entrega?',
        answer:
          'As entregas em Portugal Continental são realizadas no prazo de 1 a 3 dias úteis, contados a partir da confirmação do pagamento. Após o envio, receberá um email com o número de rastreamento para acompanhar a sua encomenda em tempo real.',
      },
      {
        question: 'Qual o custo do envio?',
        answer:
          'O custo standard de envio para Portugal Continental é de 4,90€. No entanto, oferecemos portes de envio grátis para todas as encomendas com valor igual ou superior a 69€.',
      },
      {
        question: 'Enviam para os Açores e Madeira?',
        answer:
          'Sim, efetuamos entregas para os Açores e Madeira. Devido à logística associada ao transporte aéreo, os custos de envio e os prazos de entrega são diferentes dos aplicáveis a Portugal Continental. Contacte-nos para obter um orçamento personalizado.',
      },
      {
        question: 'Posso acompanhar a minha encomenda?',
        answer:
          'Sim. Após o expedimento da sua encomenda, receberá automaticamente um email com o link de rastreamento da transportadora. Pode seguir o percurso da sua encomenda até à entrega ao destinatário.',
      },
      {
        question: 'Qual o valor mínimo de encomenda?',
        answer:
          'Não existe valor mínimo de encomenda. Pode encomendar qualquer produto, independentemente do valor. Apenas aplicamos portes de envio de 4,90€ para encomendas inferiores a 69€.',
      },
    ],
  },
  {
    title: 'Produtos',
    items: [
      {
        question: 'Os produtos são originais?',
        answer:
          'Todos os nossos produtos são 100% portugueses e originais. Trabalhamos diretamente com produtores e fornecedores certificados, garantindo total rastreabilidade desde a origem até à sua mesa. Cada produto acompanha informação detalhada sobre a sua proveniência.',
      },
      {
        question: 'Como sei se um vinho é do meu gosto?',
        answer:
          'Cada produto na nossa loja dispõe de uma ficha de degustação detalhada, que inclui notas de prova, castas, regiões, sugestões de harmonização e perfil aromático. Desta forma, pode tomar uma decisão informada antes de adquirir.',
      },
      {
        question: 'As garrafas viajam bem embaladas?',
        answer:
          'Utilizamos embalagem reforçada com proteção individual para cada garrafa. As garrafas são envolvidas em material amortecedor e colocadas em caixas de cartão duplo com separadores internos, garantindo que cheguem em perfeitas condições.',
      },
      {
        question: 'Posso encomendar para oferta?',
        answer:
          'Claro que sim! Oferecemos a possibilidade de adicionar uma mensagem personalizada à sua encomenda, que será incluída num cartão elegante. Basta indicar a mensagem nas notas da encomenda durante o processo de checkout.',
      },
      {
        question: 'Aceitam devoluções?',
        answer:
          'Sim, aceitamos devoluções em até 14 dias após a receção da encomenda, desde que os produtos se encontrem selados, na embalagem original e sem sinais de utilização. Para mais detalhes, consulte a nossa Política de Devoluções e Trocas.',
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <PageShell
      title='Perguntas Frequentes'
      subtitle='Respostas às dúvidas mais comuns.'
      breadcrumbs={[{ label: 'Perguntas Frequentes' }]}
    >
      <div className='max-w-3xl mx-auto space-y-12'>
        {faqCategories.map((category) => (
          <div key={category.title}>
            <h2 className='font-heading text-xl sm:text-2xl font-bold text-dark mb-6'>{category.title}</h2>
            <div className='space-y-0'>
              {category.items.map((item, idx) => (
                <FaqAccordion
                  key={idx}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
