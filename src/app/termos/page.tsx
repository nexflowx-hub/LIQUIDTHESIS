import { type Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Termos e Condições — LiquidThesis',
  description: 'Termos e condições gerais de utilização da plataforma LiquidThesis.',
}

export default function TermosPage() {
  return (
    <PageShell
      title='Termos e Condições'
      subtitle='Última atualização: Julho 2025'
      breadcrumbs={[{ label: 'Termos e Condições' }]}
    >
      <div className='max-w-3xl mx-auto space-y-10'>
        <p className='text-sm text-muted italic'>
          Ao aceder e utilizar o website da LiquidThesis, o utilizador aceita integralmente os presentes Termos e Condições. Caso não concorde com algum dos pontos aqui descritos, deverá abster-se de utilizar a plataforma.
        </p>

        {/* 1. Disposições Gerais */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>1. Disposições Gerais</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              A plataforma <strong className='text-dark'>LiquidThesis</strong> é explorada pela <strong className='text-dark'>LIQUIDTHESIS — UNIPESSOAL LDA</strong>, sociedade comercial com o NIPC 519 440 390, CAE 46390-R4, com sede na Rua de São Nuno, 92, 2560-195 Soltaria, Torres Vedras, Portugal. O gerente da sociedade é Rui Jorge Alves Barata da Silva.
            </p>
            <p>
              O presente website tem como objeto a venda online de produtos alimentares, com especial enfoque em vinhos e bebidas portuguesas, destinados exclusivamente a consumidores maiores de 18 anos. A LiquidThesis reserva-se o direito de alterar os presentes termos a qualquer momento, sendo as alterações publicadas nesta página com a respetiva data de atualização.
            </p>
            <p>
              Os presentes termos regulam o acesso e a utilização do website liquidthesis.pt, bem como as condições de compra de produtos através da plataforma. A navegação no website implica a aceitação plena e sem reservas dos presentes termos.
            </p>
          </div>
        </section>

        <div className='section-divider' />

        {/* 2. Registo e Conta */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>2. Registo e Conta</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              Para efetuar compras na plataforma LiquidThesis, os utilizadores podem criar uma conta pessoal. O registo é opcional para compras pontuais, sendo possível efetuar encomendas como utilizador convidado. No entanto, a criação de conta permite aceder ao histórico de encomendas, gerir preferências e beneficiar de condições exclusivas.
            </p>
            <p>
              O utilizador é integralmente responsável pela veracidade dos dados fornecidos durante o registo, bem como pela confidencialidade das suas credenciais de acesso. Em caso de utilização não autorizada da conta, o utilizador deve comunicar de imediato a LiquidThesis através dos contactos disponíveis no website.
            </p>
            <p>
              A LiquidThesis reserva-se o direito de suspender ou cancelar contas que violem os presentes termos, incluindo a disponibilização de dados falsos ou a utilização da plataforma para fins ilícitos.
            </p>
          </div>
        </section>

        <div className='section-divider' />

        {/* 3. Preços e Pagamentos */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>3. Preços e Pagamentos</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              Todos os preços apresentados no website encontram-se expressos em euros (EUR) e incluem IVA à taxa legal em vigor. A LiquidThesis reserva-se o direito de alterar os preços a qualquer momento, sem aviso prévio, sendo aplicáveis os preços vigentes no momento da confirmação da encomenda.
            </p>
            <p>
              Os meios de pagamento aceites incluem cartão de crédito e débito (Visa, Mastercard, American Express), MB WAY, transferência bancária e Multibanco (referência gerada automaticamente). Os pagamentos por cartão são processados de forma segura através da plataforma Stripe, com certificação PCI DSS.
            </p>
            <p>
              A encomenda apenas é considerada confirmada após a validação bem-sucedida do pagamento. Em caso de falha no processamento do pagamento, o utilizador será notificado e deverá tentar novamente ou utilizar um meio de pagamento alternativo.
            </p>
            <ul className='list-disc list-inside space-y-1 text-sm text-dark/80'>
              <li>Cartão de crédito/débito (Visa, Mastercard, AMEX)</li>
              <li>MB WAY</li>
              <li>Multibanco (referência automática)</li>
              <li>Transferência bancária</li>
            </ul>
          </div>
        </section>

        <div className='section-divider' />

        {/* 4. Encomendas e Entregas */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>4. Encomendas e Entregas</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              Após a submissão de uma encomenda, o utilizador receberá um email de confirmação com o resumo dos produtos adquiridos e os dados de faturação. A LiquidThesis reserva-se o direito de recusar ou cancelar encomendas em caso de erro na disponibilidade dos produtos, irregularidade nos dados fornecidos ou suspeita de fraude.
            </p>
            <p>
              Os prazos de entrega indicados são estimativas baseadas na zona de destino e podem variar em períodos de maior procura ou condições meteorológicas adversas. Para Portugal Continental, o prazo standard é de 1 a 3 dias úteis. Para os Açores e Madeira, o prazo é de 5 a 7 dias úteis. Para envios internacionais, consulte a página de envios.
            </p>
            <p>
              O risco de perda ou deterioração dos produtos transfere-se para o consumidor no momento da entrega efetiva. A LiquidThesis não se responsabiliza por atrasos imputáveis às transportadoras ou por impedimentos de força maior.
            </p>
          </div>
        </section>

        <div className='section-divider' />

        {/* 5. Direito de Arrependimento */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>5. Direito de Arrependimento</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              Em conformidade com o Decreto-Lei n.º 24/2014, de 14 de fevereiro, o consumidor dispõe de um prazo de 14 dias após a receção dos produtos para exercer o direito de arrependimento, sem necessidade de apresentar qualquer justificação.
            </p>
            <p>
              O exercício do direito de arrependimento deve ser comunicado por escrito para o email devolucoes@liquidthesis.pt, indicando o número da encomenda. Os produtos deverão ser devolvidos na embalagem original, selados e sem sinais de utilização. Os custos de envio da devolução são da responsabilidade do consumidor, salvo se o produto apresentar defeito.
            </p>
            <p>
              Existem exclusões legais ao direito de arrependimento, nomeadamente para produtos perecíveis, produtos personalizados e bebidas alcoólicas seladas, conforme previsto na alínea m) do n.º 1 do artigo 16.º do referido decreto-lei. Para mais informações, consulte a nossa Política de Devoluções.
            </p>
          </div>
        </section>

        <div className='section-divider' />

        {/* 6. Garantias e Responsabilidade */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>6. Garantias e Responsabilidade</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              Todos os produtos comercializados pela LiquidThesis cumprem os requisitos legais aplicáveis, incluindo as normas de rotulagem e segurança alimentar. Os produtos são originais e provenientes de fornecedores devidamente certificados.
            </p>
            <p>
              A LiquidThesis não garante a disponibilidade permanente dos produtos apresentados no website. As fotografias e descrições dos produtos são meramente ilustrativas e podem apresentar variações em relação ao produto real, nomeadamente ao nível da cor e do aspeto visual.
            </p>
            <p>
              A responsabilidade da LiquidThesis perante o consumidor fica limitada ao valor da encomenda efetuada, excluindo-se qualquer responsabilidade por danos indiretos, lucros cessantes ou prejuízos decorrentes de uso indevido dos produtos.
            </p>
          </div>
        </section>

        <div className='section-divider' />

        {/* 7. Propriedade Intelectual */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>7. Propriedade Intelectual</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              Todo o conteúdo do website — incluindo, mas não limitado a, textos, imagens, logótipos, marcas, design, software e código-fonte — é propriedade da LiquidThesis ou dos seus licenciadores e está protegido pelas leis portuguesas e internacionais de propriedade intelectual.
            </p>
            <p>
              É proibida a reprodução, distribuição, modificação, comunicação pública ou qualquer forma de exploração do conteúdo do website sem autorização prévia e expressa da LiquidThesis. O uso não autorizado pode constituir infração à legislação de propriedade intelectual aplicável.
            </p>
          </div>
        </section>

        <div className='section-divider' />

        {/* 8. Proteção de Dados */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>8. Proteção de Dados</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              A LiquidThesis compromete-se a tratar os dados pessoais dos utilizadores em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD — Regulamento (UE) 2016/679) e a legislação nacional aplicável. Os dados pessoais recolhidos são utilizados exclusivamente para as finalidades descritas na nossa Política de Privacidade.
            </p>
            <p>
              O utilizador pode exercer os seus direitos de acesso, retificação, eliminação, portabilidade, limitação e oposição ao tratamento dos seus dados pessoais, contactando o nosso encarregado de proteção de dados através do email privacidade@liquidthesis.pt.
            </p>
            <p>
              Para informação detalhada sobre o tratamento de dados pessoais, incluindo os dados recolhidos, as finalidades, as bases legais e os períodos de retenção, consulte a nossa <a href='/privacidade' className='text-gold hover:text-gold-light underline transition-colors'>Política de Privacidade</a>.
            </p>
          </div>
        </section>

        <div className='section-divider' />

        {/* 9. Foro Competente */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>9. Foro Competente</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              Os presentes Termos e Condições são regidos pela lei portuguesa. Para a resolução de quaisquer litígios decorrentes da utilização da plataforma ou da compra de produtos, as partes acordam submeter-se à jurisdição dos tribunais de Torres Vedras, sem prejuízo da possibilidade de recurso a meios alternativos de resolução de litígios, nomeadamente o Centro de Arbitragem de Conflitos de Consumo de Lisboa.
            </p>
            <p>
              O consumidor pode ainda recorrer à plataforma de resolução de litígios em linha da União Europeia, disponível em <a href='https://ec.europa.eu/consumers/odr' target='_blank' rel='noopener noreferrer' className='text-gold hover:text-gold-light underline transition-colors'>ec.europa.eu/consumers/odr</a>.
            </p>
          </div>
        </section>
      </div>
    </PageShell>
  )
}
