import { Composant } from "../models/Composant";

export const Comptes: Composant[] = [
  { title: "Compte courant", amount: 2215.13 },
  { title: "Compte épargne logement", amount: 8678.88 },
  { title: "Economies pour la voiture", amount: 987.48 }
]

export const Factures: Composant[] = [
  { title: "RedPay Credit", amount: 45.36 },
  { title: "Rent", amount: 1200.00 },
  { title: "TabFine Credit", amount: 87.33 }
]

export const Budgets: Composant[] = [
  { title: "Cafés", amount: 24.51 },
  { title: "Courses", amount: 153.55 },
  { title: "Restaurants", amount: 46.75 }
]

export const Alertes: string[] = [
  "Pour votre information, vous avez utilisé 90% de votre budget de courses ce mois-ci.",
  "Vous avez dépensé 120$ en restaurants cette semaine.",
  "Vos frais liés à l'utilisation de distributeur de billets s'élèvent à 24$ ce mois-ci.",
  "Bravo! Le montant sur votre compte courant est 4% plus élevé que le mois dernier",
  "Bénéficiezd'une déduction fiscale potentielle plus importante! Attribuez des catégories à 16 transactions non catégorisées."
]
