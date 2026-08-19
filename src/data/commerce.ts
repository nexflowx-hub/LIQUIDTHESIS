export const commerceConfig = {
  wineShippingCountries: ["PT"] as const,
  foodShippingCountries: [
    "PT",
    "ES",
    "FR",
    "DE",
    "BE",
    "NL",
    "LU",
    "IT",
  ] as const,
  shipping: {
    defaultCost: 4.9,
    freeThreshold: 69,
    currency: "EUR" as const,
  },
  demoMode: process.env.NEXT_PUBLIC_COMMERCE_MODE === "demo",
  stripe: {
    automaticTax: process.env.STRIPE_AUTOMATIC_TAX === "true",
  },
} as const

export function calculateShipping(subtotal: number): number {
  if (subtotal >= commerceConfig.shipping.freeThreshold) return 0
  return commerceConfig.shipping.defaultCost
}

export function getShippingCountries(containsAlcohol: boolean): readonly string[] {
  return containsAlcohol
    ? commerceConfig.wineShippingCountries
    : commerceConfig.foodShippingCountries
}

export const COMMERCE_MODE = process.env.NEXT_PUBLIC_COMMERCE_MODE ?? "demo"
