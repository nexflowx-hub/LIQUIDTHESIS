import { type Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Política de Privacidade — LiquidThesis',
  description: 'Política de privacidade e proteção de dados da LiquidThesis, em conformidade com o RGPD.',
}

export default function PrivacidadePage() {
  return (
    <PageShell
      title='Política de Privacidade'
      subtitle='Última atualização: Julho 2025'
      breadcrumbs={[{ label: 'Política de Privacidade' }]}
    >
      <div className='max-w-3xl mx-auto space-y-10'>
        <p className='text-sm text-muted italic'>
          A LiquidThesis está comprometida com a proteção dos seus dados pessoais. A presente política explica como recolhemos, utilizamos, armazenamos e protegemos as suas informações, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD — Regulamento (UE) 2016/679) e a Lei n.º 58/2019.
        </p>

        {/* 1. Responsável pelo Tratamento */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>1. Responsável pelo Tratamento</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              O responsável pelo tratamento dos dados pessoais recolhidos através do website e dos serviços da LiquidThesis é:
            </p>
            <div className='bg-cream rounded-lg p-4 sm:p-5 space-y-1 text-sm text-dark/80'>
              <p><strong className='text-dark'>Entidade:</strong> LIQUIDTHESIS — UNIPESSOAL LDA</p>
              <p><strong className='text-dark'>NIPC:</strong> 519 440 390</p>
              <p><strong className='text-dark'>CAE:</strong> 46390-R4</p>
              <p><strong className='text-dark'>Sede:</strong> Rua de São Nuno, 92, 2560-195 Soltaria, Torres Vedras, Portugal</p>
              <p><strong className='text-dark'>Email:</strong> <a href='mailto:info@liquidthesis.pt' className='text-gold hover:text-gold-light underline transition-colors'>info@liquidthesis.pt</a></p>
            </div>
            <p>
              Para questões relacionadas com a proteção dos seus dados pessoais, pode contactar o nosso Encarregado de Proteção de Dados (DPO) através do email <a href='mailto:privacidade@liquidthesis.pt' className='text-gold hover:text-gold-light underline transition-colors'>privacidade@liquidthesis.pt</a>.
            </p>
          </div>
        </section>

        <div className='section-divider' />

        {/* 2. Dados Pessoais Recolhidos */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>2. Dados Pessoais Recolhidos</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              A LiquidThesis recolhe os seguintes dados pessoais, consoante as interações do utilizador com a plataforma:
            </p>
            <ul className='list-disc list-inside space-y-1 text-sm text-dark/80'>
              <li><strong className='text-dark'>Dados de identificação:</strong> nome completo, data de nascimento</li>
              <li><strong className='text-dark'>Dados de contacto:</strong> endereço de email, número de telefone, morada de entrega e/ou faturação</li>
              <li><strong className='text-dark'>Dados fiscais:</strong> Número de Identificação Fiscal (NIF)</li>
              <li><strong className='text-dark'>Dados de compra:</strong> histórico de encomendas, produtos adquiridos, meios de pagamento utilizados</li>
              <li><strong className='text-dark'>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, dados de cookies (ver Política de Cookies)</li>
              <li><strong className='text-dark'>Dados de comunicação:</strong> conteúdo de mensagens enviadas através de formulários de contacto ou email</li>
            </ul>
            <p>
              O utilizador não é obrigado a fornecer dados pessoais, mas a recusa de fornecimento dos dados necessários pode impossibilitar a realização de compras ou o acesso a determinadas funcionalidades da plataforma.
            </p>
          </div>
        </section>

        <div className='section-divider' />

        {/* 3. Finalidade do Tratamento */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>3. Finalidade do Tratamento</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>Os dados pessoais recolhidos são tratados para as seguintes finalidades:</p>
            <ul className='list-disc list-inside space-y-1 text-sm text-dark/80'>
              <li><strong className='text-dark'>Execução de contratos:</strong> processamento de encomendas, entregas, faturação e serviço de apoio ao cliente</li>
              <li><strong className='text-dark'>Gestão da conta:</strong> criação e gestão de conta de utilizador, incluindo autenticação e preferências</li>
              <li><strong className='text-dark'>Comunicação:</strong> envio de confirmações de encomenda, atualizações de entrega e respostas a pedidos de contacto</li>
              <li><strong className='text-dark'>Marketing:</strong> envio de newsletters e comunicações promocionais, apenas quando o utilizador tiver dado o seu consentimento expresso</li>
              <li><strong className='text-dark'>Obrigações legais:</strong> cumprimento de obrigações fiscais, contabilísticas e de reporte impostas pela legislação portuguesa e europeia</li>
              <li><strong className='text-dark'>Segurança:</strong> prevenção de fraudes, proteção contra acessos não autorizados e garantia da segurança da plataforma</li>
              <li><strong className='text-dark'>Melhoria dos serviços:</strong> análise de dados de utilização para melhorar a experiência do utilizador e a qualidade dos serviços oferecidos</li>
            </ul>
          </div>
        </section>

        <div className='section-divider' />

        {/* 4. Base Legal */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>4. Base Legal para o Tratamento</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              O tratamento dos dados pessoais baseia-se nas seguintes bases legais previstas no RGPD:
            </p>
            <ul className='list-disc list-inside space-y-1 text-sm text-dark/80'>
              <li><strong className='text-dark'>Consentimento (art.º 6.º, n.º 1, alínea a)):</strong> para o tratamento de dados destinados a fins de marketing, newsletter e cookies não essenciais</li>
              <li><strong className='text-dark'>Execução de contrato (art.º 6.º, n.º 1, alínea b)):</strong> para o processamento de encomendas, entregas e gestão da conta do utilizador</li>
              <li><strong className='text-dark'>Interesse legítimo (art.º 6.º, n.º 1, alínea f)):</strong> para a análise de dados de utilização, melhoria dos serviços e prevenção de fraudes</li>
              <li><strong className='text-dark'>Obrigação legal (art.º 6.º, n.º 1, alínea c)):</strong> para o cumprimento de obrigações fiscais, contabilísticas e de conservação de documentos</li>
            </ul>
          </div>
        </section>

        <div className='section-divider' />

        {/* 5. Partilha de Dados */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>5. Partilha de Dados com Terceiros</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              A LiquidThesis não vende, aluga ou comercializa os dados pessoais dos seus utilizadores. Os dados podem ser partilhados com as seguintes categorias de destinatários, estritamente para as finalidades descritas:
            </p>
            <ul className='list-disc list-inside space-y-1 text-sm text-dark/80'>
              <li><strong className='text-dark'>Stripe, Inc.:</strong> processamento seguro de pagamentos por cartão de crédito/débito, com certificação PCI DSS. Os dados de pagamento são processados diretamente pela Stripe, sem passagem pelos servidores da LiquidThesis.</li>
              <li><strong className='text-dark'>Transportadoras:</strong> CTT e outras transportadoras contratadas para a entrega das encomendas, exclusivamente com os dados necessários (nome, morada, contacto).</li>
              <li><strong className='text-dark'>Autoridades públicas:</strong> quando exigido por lei, por ordem judicial ou por requisição de autoridades competentes.</li>
              <li><strong className='text-dark'>Prestadores de serviços:</strong> empresas que prestam serviços de alojamento, email marketing e análise de dados, sempre com contratos que garantem a proteção dos dados.</li>
            </ul>
            <p>
              Quando os dados são transferidos para fora do Espaço Económico Europeu (EEE), são aplicadas as salvaguardas adequadas previstas no RGPD, nomeadamente cláusulas contratuais-tipo aprovadas pela Comão Europeia.
            </p>
          </div>
        </section>

        <div className='section-divider' />

        {/* 6. Retenção de Dados */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>6. Retenção de Dados</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              Os dados pessoais são conservados apenas pelo período necessário para as finalidades para as quais foram recolhidos, ou conforme exigido por lei:
            </p>
            <ul className='list-disc list-inside space-y-1 text-sm text-dark/80'>
              <li><strong className='text-dark'>Dados de conta e clientes:</strong> mantidos durante a vigência da conta e até 5 anos após a última interação</li>
              <li><strong className='text-dark'>Dados de encomendas e faturação:</strong> mantidos pelo prazo legal de 10 anos, conforme o Código de Comércio e a legislação fiscal</li>
              <li><strong className='text-dark'>Dados de marketing (consentimento):</strong> mantidos até à revogação do consentimento pelo titular</li>
              <li><strong className='text-dark'>Dados de navegação e cookies:</strong> conforme os períodos indicados na Política de Cookies</li>
              <li><strong className='text-dark'>Registos de consentimento:</strong> mantidos durante 5 anos após a última recolha de consentimento</li>
            </ul>
            <p>
              Após o término do período de retenção, os dados são eliminados ou anonimizados de forma segura.
            </p>
          </div>
        </section>

        <div className='section-divider' />

        {/* 7. Direitos do Titular */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>7. Direitos do Titular dos Dados</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              Nos termos do RGPD, o titular dos dados pessoais tem os seguintes direitos, que pode exercer a qualquer momento, contactando o nosso DPO através do email <a href='mailto:privacidade@liquidthesis.pt' className='text-gold hover:text-gold-light underline transition-colors'>privacidade@liquidthesis.pt</a>:
            </p>
            <ul className='list-disc list-inside space-y-1 text-sm text-dark/80'>
              <li><strong className='text-dark'>Direito de acesso (art.º 15.º):</strong> obter confirmação sobre o tratamento dos seus dados e aceder aos mesmos</li>
              <li><strong className='text-dark'>Direito de retificação (art.º 16.º):</strong> solicitar a correção de dados inexactos ou incompletos</li>
              <li><strong className='text-dark'>Direito de eliminação (art.º 17.º):</strong> solicitar a eliminação dos seus dados pessoais, quando aplicável</li>
              <li><strong className='text-dark'>Direito à limitação do tratamento (art.º 18.º):</strong> restringir o tratamento dos seus dados em determinadas circunstâncias</li>
              <li><strong className='text-dark'>Direito à portabilidade (art.º 20.º):</strong> receber os seus dados num formato estruturado, de uso corrente e de leitura automática</li>
              <li><strong className='text-dark'>Direito de oposição (art.º 21.º):</strong> opor-se ao tratamento dos seus dados, nomeadamente para fins de marketing direto</li>
              <li><strong className='text-dark'>Direito de retirar o consentimento:</strong> a qualquer momento, sem comprometer a licitude do tratamento efetuado anteriormente</li>
            </ul>
            <p>
              O titular tem ainda o direito de apresentar uma reclamação junto da Comissão Nacional de Proteção de Dados (CNPD) — <a href='https://www.cnpd.pt' target='_blank' rel='noopener noreferrer' className='text-gold hover:text-gold-light underline transition-colors'>www.cnpd.pt</a>.
            </p>
            <p>
              A LiquidThesis responderá ao pedido do titular no prazo máximo de 30 dias, podendo este prazo ser prorrogado em mais 60 dias em casos de especial complexidade, com notificação ao titular.
            </p>
          </div>
        </section>

        <div className='section-divider' />

        {/* 8. Cookies */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>8. Cookies</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              O website da LiquidThesis utiliza cookies para melhorar a experiência de navegação, analisar o tráfego e personalizar conteúdo e publicidade. Para informações detalhadas sobre os cookies utilizados, as suas finalidades e como gerir as suas preferências, consulte a nossa <a href='/cookies' className='text-gold hover:text-gold-light underline transition-colors'>Política de Cookies</a>.
            </p>
          </div>
        </section>

        <div className='section-divider' />

        {/* 9. Contacto */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>9. Contacto do Encarregado de Proteção de Dados</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              Para questões relacionadas com a proteção dos seus dados pessoais, exercício dos seus direitos ou esclarecimentos adicionais, contacte o nosso Encarregado de Proteção de Dados:
            </p>
            <div className='bg-cream rounded-lg p-4 sm:p-5 text-sm text-dark/80'>
              <p><strong className='text-dark'>Email:</strong> <a href='mailto:privacidade@liquidthesis.pt' className='text-gold hover:text-gold-light underline transition-colors'>privacidade@liquidthesis.pt</a></p>
              <p className='mt-1'><strong className='text-dark'>Morada:</strong> Rua de São Nuno, 92, 2560-195 Soltaria, Torres Vedras, Portugal</p>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  )
}
