type PaymentOption = {
  type: "pix" | "boleto" | "cartao";
  installments?: number; // só se for cartão
};

type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  features: string[];
  image: string;
  price: number; // em reais (ex: 129.90)
  paymentOptions: PaymentOption[];
};

export const products: Product[] = [
  {
    id: "produto-01",
    slug: "suplemento-detox-slim",
    name: "Suplemento Detox Slim",
    category: "detox",
    features: [
      "100% natural, sem glúten e sem lactose.",
      "Reduz inchaço e retenção de líquidos.",
      "Acelera o metabolismo e aumenta a queima de gordura.",
      "Auxilia na regulação intestinal e desintoxicação.",
      "Aumenta disposição e energia no dia a dia.",
    ],
    image: "/images/garrafa-verde-de-pilulas-isolada-sobre-um-fundo-branco.png",
    price: 129.9,
    paymentOptions: [
      { type: "pix" },
      { type: "boleto" },
      { type: "cartao", installments: 12 },
    ],
  },
  {
    id: "produto-02",
    slug: "beauty-skin-colageno-pele-cabelo-e-unhas",
    name: "Beauty Skin Colágeno (Pele, Cabelo e Unhas)",
    category: "colágeno",
    features: [
      "Rico em colágeno hidrolisado de alta absorção.",
      "Melhora firmeza e elasticidade da pele.",
      "Fortalece unhas e reduz queda capilar.",
      "Combate sinais de envelhecimento precoce.",
      "Resultados visíveis a partir de 30 dias de uso contínuo.",
    ],
    image: "/images/frasco-de-suplemento-castanho-com-uma-tampa-verde.png",
    price: 159.9,
    paymentOptions: [{ type: "pix" }, { type: "cartao", installments: 6 }],
  },
];
