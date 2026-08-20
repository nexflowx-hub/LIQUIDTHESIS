import type { MetadataRoute } from 'next'

const baseUrl = 'https://liquidthesis.pt'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = [
    { path: '', priority: 1.0, changeFreq: 'weekly' as const },
    { path: '/loja', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/azeites', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/vinhos', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/gourmet', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/boxes', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/novidades', priority: 0.6, changeFreq: 'weekly' as const },
    { path: '/trade', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/trade/cotacao', priority: 0.7, changeFreq: 'yearly' as const },
    { path: '/trade/exportacao', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/trade/corporate-gifts', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/trade/private-label', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/sobre', priority: 0.5, changeFreq: 'monthly' as const },
    { path: '/produtores', priority: 0.6, changeFreq: 'monthly' as const },
    { path: '/contacto', priority: 0.6, changeFreq: 'yearly' as const },
    { path: '/faq', priority: 0.5, changeFreq: 'monthly' as const },
    { path: '/envios', priority: 0.6, changeFreq: 'monthly' as const },
    { path: '/devolucoes', priority: 0.5, changeFreq: 'yearly' as const },
    { path: '/termos', priority: 0.3, changeFreq: 'yearly' as const },
    { path: '/privacidade', priority: 0.3, changeFreq: 'yearly' as const },
    { path: '/cookies', priority: 0.3, changeFreq: 'yearly' as const },
  ]

  return staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFreq,
    priority: page.priority,
  }))
}
