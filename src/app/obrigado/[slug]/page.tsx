import { Hat } from "@/components/hat";
import { products } from "@/constants/products";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ThankYouPageParams {
  slug: string;
}

export default async function ThankYouPage({
  params,
  searchParams,
}: {
  params: Promise<ThankYouPageParams>;
  searchParams: Promise<Record<string, string>>;
}) {
  const { slug } = await params;
  const queryParams = await searchParams;
  const queryString = new URLSearchParams(queryParams).toString();

  const product = products.find((product) => product.slug === slug);

  if (!product) return notFound();
  return (
    <section className="container flex flex-col items-center py-10">
      <Hat />
      <h1 className="mb-8 text-3xl font-bold">Obrigado pela compra!</h1>
      <div className="border-custom-gray-200 mb-8 flex flex-col rounded-lg border p-6">
        <div className="mb-4 flex items-center gap-6">
          <Image
            src={product.image}
            alt={`Imagem do produto ${product.name}`}
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div className="">
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-custom-gray-800">
              Categoria: {product.category}
            </p>
          </div>
        </div>
        <h3 className="font-semibold">Caracteristicas do produto:</h3>
        {product.features.map((feature) => (
          <p key={feature} className="text-custom-gray-800 mt-3">
            <span>• </span>
            {feature}
          </p>
        ))}
      </div>
      <Link href={`/?${queryString}`} className="cta-btn">
        Ver outros produtos
      </Link>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Obrigado",
  description: "Obrigado por comprar nosso produto",
};
