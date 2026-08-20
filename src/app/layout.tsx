import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { ClientShell } from "@/components/layout/ClientShell"

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FCFAF5" },
    { media: "(prefers-color-scheme: dark)", color: "#1E211C" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://liquidthesis.pt"),
  title: {
    default: "LiquidThesis | Azeites, Vinhos e Sabores de Portugal",
    template: "%s | LiquidThesis",
  },
  description:
    "Seleção portuguesa de azeites, vinhos, produtos gourmet e soluções B2B para restauração, hotelaria, retalho e distribuição.",
  keywords: [
    "azeite português",
    "vinho português",
    "produtos gourmet",
    "olive oil Portugal",
    "Portuguese wine",
    "corporate gifts Portugal",
    "private label",
    "B2B wine",
    "LiquidThesis",
    "azeite virgem extra",
    "vinho do Douro",
    "vinho do Alentejo",
    "vinho verde",
    "conservas portuguesas",
    "flor de sal Algarve",
    "boxes gourmet",
    "comércio por grosso bebidas",
    "exportação alimentar Portugal",
  ],
  authors: [{ name: "LiquidThesis, Unipessoal LDA" }],
  creator: "LiquidThesis, Unipessoal LDA",
  publisher: "LiquidThesis, Unipessoal LDA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "LiquidThesis | Azeites, Vinhos e Sabores de Portugal",
    description:
      "Seleção portuguesa de azeites, vinhos, produtos gourmet e soluções B2B para restauração, hotelaria, retalho e distribuição.",
    siteName: "LiquidThesis",
    type: "website",
    locale: "pt_PT",
    url: "https://liquidthesis.pt",
    images: [
      {
        url: "/images/hero/hero-bg.jpg",
        width: 1920,
        height: 1080,
        alt: "Azeites, Vinhos e Sabores de Portugal — LiquidThesis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LiquidThesis | Azeites, Vinhos e Sabores de Portugal",
    description:
      "Seleção portuguesa de azeites, vinhos, produtos gourmet e soluções B2B.",
    images: ["/images/hero/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
}

/* ─── Structured Data: Organization + LocalBusiness ──────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "LiquidThesis, Unipessoal LDA",
  alternateName: "LiquidThesis",
  url: "https://liquidthesis.pt",
  logo: "https://liquidthesis.pt/logo.svg",
  description:
    "Seleção portuguesa de azeites, vinhos, produtos gourmet e soluções B2B para restauração, hotelaria, retalho e distribuição.",
  legalName: "LIQUIDTHESIS, UNIPESSOAL LDA",
  taxID: "519440390",
  vatID: "PT519440390",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua de São Nuno, 92",
    postalCode: "2560-195",
    addressLocality: "Soltaria, São Pedro da Cadeira",
    addressRegion: "Torres Vedras",
    addressCountry: "PT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.0937,
    longitude: -9.2609,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["Portuguese", "English"],
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Catálogo LiquidThesis",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Azeites",
        description: "Azeites virgens extras portugueses",
      },
      {
        "@type": "OfferCatalog",
        name: "Vinhos",
        description: "Vinhos portugueses das principais regiões demarcadas",
      },
      {
        "@type": "OfferCatalog",
        name: "Gourmet",
        description: "Produtos gourmet artesanais portugueses",
      },
      {
        "@type": "OfferCatalog",
        name: "Boxes & Presentes",
        description: "Caixas de degustação e presentes gourmet",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-ivory text-dark`}
      >
        <div className="min-h-screen flex flex-col">
          <ClientShell>{children}</ClientShell>
        </div>
        <Toaster />
      </body>
    </html>
  )
}
