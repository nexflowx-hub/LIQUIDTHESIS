import type { ClubPlan } from "./types"

export const clubPlans: ClubPlan[] = [
  {
    id: "explorer",
    name: "Explorer",
    price: 29,
    period: "mês",
    features: [
      "2 produtos por mês",
      "Acesso a edições limitadas",
      "Frete incluído",
    ],
    icon: "Leaf",
  },
  {
    id: "select",
    name: "Select",
    price: 49,
    period: "mês",
    features: [
      "3 produtos por mês",
      "Produtos exclusivos",
      "Conteúdos & provas",
    ],
    popular: true,
    icon: "Grape",
  },
  {
    id: "reserve",
    name: "Reserve",
    price: 79,
    period: "mês",
    features: [
      "Seleção premium",
      "Surpresas exclusivas",
      "Acesso prioritário",
    ],
    icon: "Crown",
  },
]
