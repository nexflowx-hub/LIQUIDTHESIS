# LiquidThesis — Official Website v1.0

> Plataforma e-commerce de azeites, vinhos e produtos gourmet portugueses.
> LiquidThesis, Unipessoal LDA — NIPC 519 440 390

---

## Indice

- [Visao Geral](#-visao-geral)
- [Stack Tecnologico](#-stack-tecnologico)
- [Arquitetura do Projeto](#-arquitetura-do-projeto)
- [Estrutura de Diretorios](#-estrutura-de-diretorios)
- [Funcionalidades](#-funcionalidades)
- [Configuracao e Instalacao](#-configuracao-e-instalacao)
- [Variaveis de Ambiente](#-variaveis-de-ambiente)
- [SEO e Indexacao](#-seo-e-indexacao)
- [Design System](#-design-system)
- [E-commerce](#-e-commerce)
- [API Endpoints](#-api-endpoints)
- [Deploy](#-deploy)
- [Licenca](#-licenca)

---

## Visao Geral

O site oficial da **LiquidThesis** e uma plataforma e-commerce premium para venda de azeites virgens extras, vinhos portugueses das principais regioes demarcadas, produtos gourmet artesanais e boxes de degustacao. O site serve dois publicos:

- **B2C** — Consumidores finais que compram online com entrega ao domicilio
- **B2B** — Profissionais de restauracao, hotelaria, garrafeiras, distribuidores e importadores com condicoes comerciais especiais

O site opera atualmente em **modo demonstrativo** (catalogo) com checkout Stripe preparado para ativacao em producao.

---

## Stack Tecnologico

| Camada | Tecnologia | Versao |
|--------|-----------|--------|
| Framework | Next.js (App Router) | 16.x |
| Linguagem | TypeScript | 5.x |
| Estilizacao | Tailwind CSS 4 | 4.x |
| UI Components | shadcn/ui (New York) | — |
| Icones | Lucide React | 0.525+ |
| Estado Cliente | Zustand | 5.x |
| Validacao | Zod | 4.x |
| ORM | Prisma (SQLite) | 6.x |
| Pagamentos | Stripe (preparado) | — |
| Fontes | Playfair Display + Inter (Google Fonts) | — |
| Animacoes | Tailwind Animate CSS + Framer Motion | — |
| Empacotamento | Bun | — |

---

## Arquitetura do Projeto

```
+---------------------------------------------------+
|                   Client Layer                     |
|  React 19 + Next.js App Router + Tailwind 4       |
|  Zustand (cart) + shadcn/ui components             |
+---------------------------------------------------+
|                API Layer (Route Handlers)          |
|  /api/checkout  ->  Stripe Checkout / Demo mode    |
|  /api/stripe/webhook  ->  Stripe Webhooks          |
+---------------------------------------------------+
|                Data Layer                          |
|  Static data (products, categories, company)       |
|  Prisma + SQLite (user data, orders)               |
+---------------------------------------------------+
|              Infrastructure                        |
|  Bun runtime, Caddy reverse proxy                  |
|  Standalone output for Docker/Vercel deploy        |
+---------------------------------------------------+
```

### Decisoes Arquiteturais

- **App Router (Server Components)**: Maximiza o desempenho com renderizacao no servidor e streaming. Os componentes interativos utilizam `'use client'` apenas quando necessario.
- **Standalone Output**: O Next.js compila para `standalone`, gerando um servidor independente com todas as dependencias — ideal para Docker e deploy bare-metal.
- **Zustand com Persist**: O estado do carrinho persiste no `localStorage`, sobrevivendo a reloads e abas.
- **Demo Mode**: O site opera em modo catalogo sem pagamento real. O checkout pode ser ativado com uma variavel de ambiente.

---

## Estrutura de Diretorios

```
liquidthesis/
├── public/
│   ├── images/                    # Imagens estaticas
│   │   ├── hero/                  #   Imagem hero (hero-bg.jpg)
│   │   ├── products/              #   Imagens de produtos (12 SKUs)
│   │   └── sections/              #   Imagens de seccoes (B2B, B2C, Producer CTA)
│   ├── logo.svg                   # Logo SVG da marca
│   ├── manifest.json              # PWA Web App Manifest
│   └── robots.txt                 # Diretivas para crawlers
├── prisma/
│   └── schema.prisma              # Schema do banco de dados
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout com metadata + JSON-LD
│   │   ├── page.tsx               # Homepage (unica rota publica)
│   │   ├── globals.css            # Estilos globais + tema + animacoes
│   │   ├── sitemap.ts             # Sitemap XML dinamico
│   │   └── api/
│   │       ├── route.ts           # Health check endpoint
│   │       ├── checkout/route.ts  # Stripe Checkout / Demo
│   │       └── stripe/webhook/    # Stripe webhook handler
│   ├── components/
│   │   ├── cart/
│   │   │   └── CartDrawer.tsx     # Drawer lateral do carrinho
│   │   ├── home/
│   │   │   ├── HeroSection.tsx    # Hero com imagem de fundo
│   │   │   ├── B2CB2BCards.tsx    # Cards B2C e B2B
│   │   │   ├── CategoriesSection.tsx # Grid de categorias
│   │   │   ├── FeaturedProducts.tsx  # Grid de produtos destaque
│   │   │   ├── ProductCard.tsx    # Card individual de produto
│   │   │   ├── TradeSection.tsx   # Seccao B2B / Trade
│   │   │   ├── ClubSection.tsx    # Seccao do Clube de Assinaturas
│   │   │   └── ProducerCTA.tsx    # Call-to-action para produtores
│   │   ├── layout/
│   │   │   ├── Header.tsx         # Header com navegacao + sticky
│   │   │   ├── Footer.tsx         # Footer com newsletter + legal
│   │   │   └── UtilityBar.tsx     # Barra superior de utilidade
│   │   ├── overlays/
│   │   │   ├── AgeGate.tsx        # Verificacao de idade (18+)
│   │   │   ├── CookieConsent.tsx  # Banner de consentimento de cookies
│   │   │   └── MobileMenu.tsx     # Menu lateral (Sheet) para mobile
│   │   └── ui/                    # Componentes shadcn/ui (40+)
│   ├── data/
│   │   ├── types.ts               # TypeScript types para o dominio
│   │   ├── products.ts            # Catalogo de produtos (13 SKUs)
│   │   ├── categories.ts          # Definicao de categorias
│   │   ├── commerce.ts            # Configuracao de e-commerce
│   │   ├── company.ts             # Dados da empresa (legal, morada)
│   │   ├── b2b.ts                 # Beneficios Trade/B2B
│   │   └── club.ts                # Planos do Clube de Assinaturas
│   ├── hooks/
│   │   ├── use-toast.ts           # Hook de toast notifications
│   │   └── use-mobile.ts          # Hook de deteccao de mobile
│   ├── lib/
│   │   ├── utils.ts               # Utilitarios (cn, clsx+twMerge)
│   │   └── db.ts                  # Cliente Prisma
│   └── store/
│       └── cart.ts                # Zustand store do carrinho
├── db/
│   └── custom.db                  # Banco SQLite
├── next.config.ts                 # Configuracao Next.js
├── tailwind.config.ts             # Configuracao Tailwind
├── tsconfig.json                  # Configuracao TypeScript
├── postcss.config.mjs             # PostCSS com Tailwind
├── eslint.config.mjs              # ESLint
├── components.json                # Configuracao shadcn/ui
├── package.json                   # Dependencias e scripts
└── Caddyfile                      # Reverse proxy (dev)
```

---

## Funcionalidades

### Pagina Inicial
- **Hero Section** — Imagem de fundo com overlay, titulo e CTAs (B2C + Profissional)
- **Cards B2C/B2B** — Dois cards com imagens, descricoes e call-to-action
- **Categorias** — Grid de 6 categorias (Azeites, Vinhos, Gourmet, Boxes, Exportacao, Private Label)
- **Produtos em Destaque** — 8 produtos com preco, stock e botao de adicionar ao carrinho
- **LiquidThesis Trade** — Seccao B2B com 6 beneficios e CTA para cotacao
- **LiquidThesis Clube** — 3 planos de subscricao (Explorer, Select, Reserve)
- **CTA Produtores** — Seccao para recrutamento de produtores parceiros

### Carrinho de Compras
- Adicionar/remover produtos
- Controlo de quantidade (+/-)
- Calculo automatico de subtotal e envio
- Envio gratis acima de 69 EUR
- Persistencia via Zustand + localStorage
- Modo demonstrativo com indicacao visual
- Preparado para Stripe Checkout

### Experiencia do Utilizador
- **Age Gate** — Verificacao de idade 18+ para bebidas alcoolicas (persistido em localStorage)
- **Cookie Consent** — Banner de consentimento RGPD (persistido em localStorage)
- **Mobile Menu** — Menu lateral (Sheet) para navegacao em dispositivos moveis
- **Cart Drawer** — Drawer lateral para gestao do carrinho

---

## Configuracao e Instalacao

### Pre-requisitos

- [Bun](https://bun.sh/) 1.x (recomendado) ou Node.js 20+
- Git

### Instalacao

```bash
# Clonar o repositorio
git clone https://github.com/nexflowx-hub/LIQUIDTHESIS.git
cd LIQUIDTHESIS

# Instalar dependencias
bun install

# Configurar variaveis de ambiente
cp .env.example .env.local
# Editar .env.local com as configuracoes desejadas

# Iniciar o servidor de desenvolvimento
bun run dev
```

O site fica disponivel em `http://localhost:3000`.

### Scripts Disponiveis

| Comando | Descricao |
|---------|-----------|
| `bun run dev` | Servidor de desenvolvimento na porta 3000 |
| `bun run build` | Build de producao (standalone) |
| `bun run start` | Iniciar o servidor de producao |
| `bun run lint` | Verificacao de lint com ESLint |
| `bun run db:push` | Push do schema Prisma para o banco |
| `bun run db:generate` | Gerar o Prisma Client |
| `bun run db:migrate` | Executar migracoes |
| `bun run db:reset` | Resetar o banco de dados |

---

## Variaveis de Ambiente

```env
# ── Modo de Comercio ─────────────────────────────
NEXT_PUBLIC_COMMERCE_MODE=demo   # "demo" (catalogo) ou "live" (pagamentos ativos)

# ── Stripe (apenas em modo live) ─────────────────
STRIPE_SECRET_KEY=sk_test_...   # Chave secreta Stripe
STRIPE_AUTOMATIC_TAX=true       # Ativar calculo automatico de IVA

# ── Site URL ────────────────────────────────────
NEXT_PUBLIC_SITE_URL=https://liquidthesis.pt   # URL base do site em producao
```

---

## SEO e Indexacao

### Metadata (Next.js Metadata API)
- `metadataBase`: `https://liquidthesis.pt`
- Title template: `%s | LiquidThesis`
- Keywords otimizados para PT e EN (azeite, vinho, gourmet, exportacao, B2B)
- Open Graph com imagem, locale `pt_PT` e tipo `website`
- Twitter Card `summary_large_image`
- Diretivas GoogleBot (max-image-preview: large)
- URL canonica automatica
- `manifest`: `/manifest.json`
- Icons: SVG logo como favicon

### Sitemap
- Ficheiro dinamico em `/src/app/sitemap.ts`
- Servido automaticamente em `/sitemap.xml`
- Prioridade 1.0 para a homepage
- Atualizacao semanal

### robots.txt
- Permitir todos os crawlers principais (Google, Bing, Twitter, Facebook)
- Bloquear `/api/` para crawlers genericos
- Declaracao `Sitemap:` apontando para o sitemap

### Structured Data (JSON-LD)
- **Organization + LocalBusiness** com:
  - Nome legal, NIPC, morada completa
  - Coordenadas geograficas (Torres Vedras)
  - Catalogo de ofertas por categoria
  - Pontos de contacto

### Web App Manifest
- `/public/manifest.json` com:
  - Nome, descricao e URL de inicio
  - Icone SVG, tema e cor de fundo
  - Suporte a PWA (display: standalone)
  - Idioma `pt-PT`

---

## Design System

### Paleta de Cores

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-olive` | `#182515` | Cor primaria (verde escuro), cabecalhos, fundos escuros |
| `--color-olive-secondary` | `#273820` | Variantes de fundo escuro |
| `--color-burgundy` | `#5A1F27` | Acento vinho, badges 18+, botoes secundarios |
| `--color-burgundy-dark` | `#42161D` | Hover burgundy, card B2B |
| `--color-cream` | `#F7F2E8` | Fundos de seccoes claras |
| `--color-ivory` | `#FCFAF5` | Cor de fundo principal (body) |
| `--color-gold` | `#B99042` | Botoes dourados, icones, destaques |
| `--color-gold-light` | `#D4AF6A` | Hover de botoes dourados |
| `--color-dark` | `#1E211C` | Texto principal |
| `--color-muted` | `#74766F` | Texto secundario |

### Tipografia

| Uso | Fonte | Pesos |
|-----|-------|--------|
| Titulos (h1-h6) | Playfair Display | 400, 500, 600, 700 |
| Corpo de texto | Inter | 400-700 |

### Animacoes
- `fade-in-up` (0.6s) — Entrada de elementos
- `fade-in` (0.5s) — Fade simples
- `slide-in-right` (0.5s) — Entrada lateral
- `card-hover` — Elevacao + sombra no hover
- `btn-gold` — Gradiente dourado animado
- `product-image-zoom` — Zoom suave (1.05x) no hover
- Stagger delays (0.1s-0.6s) para animacoes sequenciais

### Componentes shadcn/ui
Mais de 40 componentes da biblioteca shadcn/ui (New York style) estao disponiveis em `src/components/ui/`, incluindo Dialog, Sheet, Button, Input, Badge, ScrollArea, entre outros.

---

## E-commerce

### Catalogo
- **13 SKUs** em 4 categorias (Azeites, Vinhos, Gourmet, Boxes)
- **8 produtos em destaque** visiveis na homepage
- Cada produto inclui: nome, descricao, preco EUR, volume, regiao, stock, imagens
- Tipo `isMock: true` em todos os produtos (dados estaticos demonstrativos)

### Precos e Envio
- Envio: 4,90 EUR (Portugal Continental)
- Envio gratis acima de 69 EUR de subtotal
- Moeda: EUR

### Modos de Operacao

**Demo Mode** (`NEXT_PUBLIC_COMMERCE_MODE=demo`):
- Checkout retorna resumo JSON sem criar sessao Stripe
- Indicacao visual "Catalogo Demonstrativo" no hero e carrinho
- Sem processamento de pagamentos

**Live Mode** (`NEXT_PUBLIC_COMMERCE_MODE=live`):
- Cria sessao Stripe Checkout com itens validados server-side
- Valida SKU, stock e precos no backend
- Webhook para confirmacao de pagamentos
- URLs de sucesso/cancelamento configuraveis

### Regras de Envio
- Bebidas alcoolicas: apenas Portugal Continental
- Produtos alimentares (sem alcool): Portugal, Espanha, Franca, Alemanha, Belgica, Holanda, Luxemburgo, Italia

---

## API Endpoints

### `GET /api`
Health check endpoint. Retorna `{ message: "Hello, world!" }`.

### `POST /api/checkout`
Cria uma sessao de checkout.

**Request body:**
```json
{
  "items": [{ "sku": "LT-OIL-RES-500", "quantity": 2 }],
  "customerType": "B2C"
}
```

**Resposta (demo):**
```json
{
  "mode": "demo",
  "message": "Checkout em modo demonstração...",
  "orderSummary": {
    "items": [...],
    "subtotal": 2980,
    "shipping": 0,
    "total": 2980,
    "currency": "eur",
    "customerType": "B2C",
    "containsAlcohol": false
  }
}
```

**Resposta (live):**
```json
{
  "url": "https://checkout.stripe.com/c/pay/cs_test_...",
  "sessionId": "cs_test_..."
}
```

### `POST /api/stripe/webhook`
Recebe webhooks do Stripe para confirmacao de pagamentos.

---

## Otimizacao Multi-Dispositivo

### Breakpoints Utilizados

| Breakpoint | Largura | Dispositivos Alvo |
|-----------|---------|-------------------|
| Base (mobile) | 0-639px | Smartphones |
| `sm` | 640px+ | Smartphones grandes, tablets pequenas |
| `md` | 768px+ | Tablets, iPad |
| `lg` | 1024px+ | Laptops, desktop |
| `xl` | 1280px+ | Monitores grandes |

### Adaptacoes por Dispositivo

**Mobile (< 640px):**
- Hero com altura reduzida (60vh) e texto/botoes menores
- Cards B2C/B2B empilhados verticalmente com imagens em topo
- Categorias em grid de 3 colunas
- Produtos em grid de 2 colunas com informacao condensada
- Footer em grid de 2 colunas com textos menores
- UtilityBar com texto resumido
- Cookie consent com padding reduzido
- Navegacao via menu lateral (hamburger)

**Tablet (640px-1023px):**
- Hero com altura intermedia (65vh)
- Cards B2C/B2B lado a lado com imagens laterais
- Categorias em grid de 3 colunas
- Produtos em grid de 3 colunas
- Clube em grid de 2 colunas

**Desktop (1024px+):**
- Hero com altura completa (80vh)
- Navegacao completa no header
- Categorias em grid de 6 colunas
- Produtos em grid de 4 colunas
- Clube em grid de 3 colunas
- Footer em grid de 5 colunas

### Performance
- `next/font` com `display: swap` para fontes (sem FOUT)
- Imagens com `priority` no hero, `sizes` descritivos nos produtos
- `output: standalone` para deploy otimizado
- CSS animations em vez de JavaScript para interacoes visuais

---

## Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
bun add -g vercel

# Deploy
vercel --prod
```

Variaveis de ambiente a configurar no painel Vercel:
- `NEXT_PUBLIC_COMMERCE_MODE`
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_SITE_URL`

### Docker

```dockerfile
FROM oven/bun:1 AS base
WORKDIR /app

FROM base AS install
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM base AS build
COPY --from=install /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM base AS runner
ENV NODE_ENV=production
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

EXPOSE 3000
CMD ["bun", ".next/standalone/server.js"]
```

### Bare Metal (Bun + Caddy)

```bash
# Build
bun run build

# Start production server
bun run start
```

O Caddyfile fornecido faz reverse proxy para a porta 3000 com HTTPS automatico.

---

## Informacoes Legais

- **Entidade**: LIQUIDTHESIS, UNIPESSOAL LDA
- **NIPC**: 519 440 390
- **Capital Social**: 20.000,00 EUR
- **CAE**: 46390-R4 — Comercio por grosso nao especializado de produtos alimentares, bebidas e tabaco
- **Sede**: Rua de Sao Nuno, 92, 2560-195 Soltaria, Sao Pedro da Cadeira, Torres Vedras, Portugal
- **Gerente**: Rui Jorge Alves Barata da Silva

---

## Licenca

Todos os direitos reservados. LiquidThesis, Unipessoal LDA.
Reproducao ou distribuicao nao autorizada e proibida.
