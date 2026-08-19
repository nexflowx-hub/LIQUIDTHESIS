import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

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

export const metadata: Metadata = {
  title: "LiquidThesis | Azeites, Vinhos e Sabores de Portugal",
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
  ],
  authors: [{ name: "LiquidThesis, Unipessoal LDA" }],
  openGraph: {
    title: "LiquidThesis | Azeites, Vinhos e Sabores de Portugal",
    description:
      "Seleção portuguesa de azeites, vinhos, produtos gourmet e soluções B2B.",
    siteName: "LiquidThesis",
    type: "website",
    locale: "pt_PT",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiquidThesis | Azeites, Vinhos e Sabores de Portugal",
    description:
      "Seleção portuguesa de azeites, vinhos, produtos gourmet e soluções B2B.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-ivory text-dark`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
