// ─── LiquidThesis Product & Commerce Types ───────────────────────────

export type ProductCategory =
  | "azeites"
  | "vinhos"
  | "gourmet"
  | "boxes"
  | "corporate"
  | "exportacao"
  | "private-label"

export type StockStatus = "in_stock" | "low_stock" | "out_of_stock"

export interface B2BTierPrice {
  minCases: number
  pricePerCase: number
}

export interface B2BPricing {
  unitsPerCase: number
  casePrice: number
  tierPrices: B2BTierPrice[]
  palletQuote: boolean
}

export interface Product {
  id: string
  sku: string
  slug: string
  name: string
  category: ProductCategory
  description: string
  shortDescription: string
  price: number
  currency: "EUR"
  unitLabel?: string
  unitPrice?: number
  volume?: string
  origin?: string
  region?: string
  images: string[]
  featured: boolean
  alcohol: boolean
  ageRestricted: boolean
  stockStatus: StockStatus
  b2b?: B2BPricing
  isMock: true
}

export interface Category {
  id: string
  slug: string
  name: string
  description: string
  image: string
  productCount: number
}

export interface ClubPlan {
  id: string
  name: string
  price: number
  period: string
  features: string[]
 popular?: boolean
  icon: string
}

export interface TradeBenefit {
  icon: string
  title: string
  description: string
}

export type CustomerType = "B2C" | "B2B"

export interface CartItem {
  product: Product
  quantity: number
}

export interface ShippingRule {
  country: string
  threshold: number
  shippingCost: number
  freeAbove: number
}

export interface CheckoutItem {
  sku: string
  quantity: number
}

export interface CheckoutRequest {
  items: CheckoutItem[]
  customerType: CustomerType
}
