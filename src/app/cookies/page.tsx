import { type Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Política de Cookies — LiquidThesis',
  description: 'Informação detalhada sobre os cookies utilizados no website da LiquidThesis e como geri-los.',
}

const cookieTypes = [
  {
    category: 'Essenciais',
    description:
      'Estes cookies são necessários para o funcionamento básico do website. Permitem a navegação, o acesso a áreas seguras e a utilização de funcionalidades fundamentais, como o carregamento da sessão e a verificação de idade. Não podem ser desativados.',
    alwaysActive: true,
    cookies: [
      { name: 'lt_session', duration: 'Sessão', purpose: 'Manter a sessão do utilizador ativa durante a navegação' },
      { name: 'lt_age_verified', duration: '1 ano', purpose: 'Registar a verificação de idade do utilizador (18+)' },
      { name: 'lt_cookie_consent', duration: '1 ano', purpose: 'Armazenar as preferências de consentimento de cookies' },
      { name: 'lt_csrf_token', duration: 'Sessão', purpose: 'Prevenção de ataques de falsificação de pedidos (CSRF)' },
    ],
  },
  {
    category: 'Funcionais',
    description:
      'Estes cookies permitem que o website se lembre das suas escolhas e preferências, como o conteúdo do carrinho de compras ou a região selecionada, proporcionando uma experiência de navegação mais personalizada e conveniente.',
    alwaysActive: false,
    cookies: [
      { name: 'lt_cart', duration: '30 dias', purpose: 'Persistir os itens do carrinho de compras entre sessões' },
      { name: 'lt_region', duration: '1 ano', purpose: 'Armazenar a preferência de região/país do utilizador' },
      { name: 'lt_currency', duration: '1 ano', purpose: 'Guardar a preferência de moeda de exibição' },
    ],
  },
  {
    category: 'Analíticos',
    description:
      'Estes cookies recolhem informações de forma anónima sobre a forma como os visitantes utilizam o website, permitindo-nos compreender e melhorar a experiência de navegação. Os dados são agregados e não permitem a identificação pessoal.',
    alwaysActive: false,
    cookies: [
      { name: '_ga', duration: '2 anos', purpose: 'Cookie do Google Analytics — distingue utilizadores únicos (ID anónimo)' },
      { name: '_ga_*', duration: '2 anos', purpose: 'Cookie do Google Analytics 4 — manutenção do estado da sessão' },
      { name: '_gid', duration: '24 horas', purpose: 'Cookie do Google Analytics — distingue utilizadores num período de 24 horas' },
      { name: '_gat', duration: '1 minuto', purpose: 'Limitar a taxa de pedidos ao Google Analytics' },
    ],
  },
  {
    category: 'Marketing',
    description:
      'Estes cookies são utilizados para apresentar publicidade relevante e personalizada. Podem ser definidos por parceiros publicitários através do nosso website e permitem criar um perfil dos seus interesses para mostrar anúncios pertinentes.',
    alwaysActive: false,
    cookies: [
      { name: '_fbp', duration: '3 meses', purpose: 'Cookie do Facebook Pixel — rastreamento de conversões e otimização de anúncios' },
      { name: '_fbc', duration: '2 anos', purpose: 'Cookie do Facebook Pixel — atribuição de conversões a campanhas' },
      { name: '_gcl_au', duration: '3 meses', purpose: 'Cookie do Google Ads — ligação de cliques em anúncios a ações no website' },
      { name: 'IDE', duration: '1 ano', purpose: 'Cookie do Google DoubleClick — segmentação de anúncios e remarketing' },
    ],
  },
]

export default function CookiesPage() {
  return (
    <PageShell
      title='Política de Cookies'
      subtitle='Última atualização: Julho 2025'
      breadcrumbs={[{ label: 'Política de Cookies' }]}
    >
      <div className='max-w-4xl mx-auto space-y-10'>
        {/* 1. O que são cookies */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>1. O Que São Cookies</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              Cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo (computador, tablet ou telemóvel) quando visita um website. Permitem que o website reconheça o seu dispositivo e memorize informações sobre as suas preferências ou ações anteriores.
            </p>
            <p>
              Os cookies são amplamente utilizados na Internet para fazer os websites funcionarem de forma mais eficiente, fornecer informações aos proprietários do website e personalizar a experiência de navegação. Alguns cookies são essenciais para o funcionamento do website, enquanto outros ajudam a melhorar a experiência do utilizador.
            </p>
            <p>
              Os cookies não causam danos ao seu dispositivo e não contêm vírus ou malware. No entanto, permitem que o website reconheça o seu navegador e, se os cookies forem de terceiros, podem ser partilhados entre diferentes websites.
            </p>
          </div>
        </section>

        <div className='section-divider' />

        {/* 2. Tipos de cookies */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>2. Tipos de Cookies Utilizados</h3>
          <div className='space-y-6'>
            {cookieTypes.map((type) => (
              <div key={type.category} className='bg-white border border-dark/10 rounded-lg p-5 sm:p-6'>
                <div className='flex items-center justify-between mb-3'>
                  <h4 className='font-heading font-bold text-dark text-base'>{type.category}</h4>
                  {type.alwaysActive ? (
                    <span className='text-xs font-medium bg-cream text-dark/60 px-2.5 py-1 rounded-full'>Sempre ativos</span>
                  ) : (
                    <span className='text-xs font-medium bg-ivory text-dark/60 px-2.5 py-1 rounded-full'>Com consentimento</span>
                  )}
                </div>
                <p className='text-sm text-dark/70 leading-relaxed mb-4'>{type.description}</p>

                {/* Cookie table */}
                <div className='overflow-x-auto -mx-5 sm:-mx-6 px-5 sm:px-6'>
                  <table className='w-full text-left text-sm'>
                    <thead>
                      <tr className='border-b border-dark/10'>
                        <th className='pb-2 pr-4 font-medium text-dark text-xs uppercase tracking-wider'>Nome</th>
                        <th className='pb-2 pr-4 font-medium text-dark text-xs uppercase tracking-wider'>Duração</th>
                        <th className='pb-2 font-medium text-dark text-xs uppercase tracking-wider'>Finalidade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {type.cookies.map((cookie) => (
                        <tr key={cookie.name} className='border-b border-dark/5 last:border-0'>
                          <td className='py-2.5 pr-4 font-mono text-xs text-gold whitespace-nowrap'>{cookie.name}</td>
                          <td className='py-2.5 pr-4 text-dark/70 whitespace-nowrap'>{cookie.duration}</td>
                          <td className='py-2.5 text-dark/70'>{cookie.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className='section-divider' />

        {/* 4. Como gerir cookies */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>3. Como Gerir os Seus Cookies</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              Pode gerir as suas preferências de cookies a qualquer momento através do banner de cookies que aparece quando visita o nosso website pela primeira vez, ou através das definições de cookies disponíveis no rodapé da página.
            </p>
            <p>
              Para além disso, pode configurar o seu navegador para bloquear ou eliminar cookies. As instruções variam consoante o navegador utilizado:
            </p>
            <ul className='list-disc list-inside space-y-1 text-sm text-dark/80'>
              <li><strong className='text-dark'>Google Chrome:</strong> Definições → Privacidade e segurança → Cookies e outros dados de sites</li>
              <li><strong className='text-dark'>Mozilla Firefox:</strong> Definições → Privacidade e segurança → Cookies e dados de sites</li>
              <li><strong className='text-dark'>Safari:</strong> Preferências → Privacidade → Gerir dados de websites</li>
              <li><strong className='text-dark'>Microsoft Edge:</strong> Definições → Cookies e permissões do site → Gerir e eliminar cookies</li>
            </ul>
            <p>
              Tenha em atenção que a desativação de certos cookies pode afetar a funcionalidade do website e limitar a sua capacidade de utilizar algumas funcionalidades. Os cookies essenciais não podem ser desativados, pois são necessários para o funcionamento básico da plataforma.
            </p>
            <p>
              Para mais informações sobre cookies, pode consultar o website da CNPD (<a href='https://www.cnpd.pt' target='_blank' rel='noopener noreferrer' className='text-gold hover:text-gold-light underline transition-colors'>www.cnpd.pt</a>) ou o portal <a href='https://www.allaboutcookies.org' target='_blank' rel='noopener noreferrer' className='text-gold hover:text-gold-light underline transition-colors'>www.allaboutcookies.org</a>.
            </p>
          </div>
        </section>

        <div className='section-divider' />

        {/* 5. Contacto */}
        <section>
          <h3 className='font-heading text-lg sm:text-xl font-bold text-dark mb-3'>4. Contacto</h3>
          <div className='space-y-3 text-sm sm:text-base text-dark/80 leading-relaxed'>
            <p>
              Se tiver dúvidas sobre a utilização de cookies no nosso website, pode contactar-nos através dos seguintes meios:
            </p>
            <div className='bg-cream rounded-lg p-4 sm:p-5 space-y-1 text-sm text-dark/80'>
              <p><strong className='text-dark'>Email:</strong> <a href='mailto:privacidade@liquidthesis.pt' className='text-gold hover:text-gold-light underline transition-colors'>privacidade@liquidthesis.pt</a></p>
              <p><strong className='text-dark'>Morada:</strong> Rua de São Nuno, 92, 2560-195 Soltaria, Torres Vedras, Portugal</p>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  )
}
