import { Hat } from "@/components/hat";
import { products } from "@/constants/products";
import { notFound } from "next/navigation";
import { CheckoutForm } from "./components/checkout-form";
import { Metadata } from "next";

interface CheckoutPageParams {
  slug: string;
}

export default async function CheckoutPage({
  params,
}: {
  params: Promise<CheckoutPageParams>;
}) {
  const { slug } = await params;

  const product = products.find((product) => product.slug === slug);

  if (!product) return notFound();

  return (
    <section className="container flex flex-col items-center py-10">
      <Hat />
      <h1 className="mb-8 text-center text-2xl font-semibold">Checkout</h1>
      <CheckoutForm product={product} />
    </section>
  );
}

export const metadata: Metadata = {
  title: "Checkout",
  description: "Finalize sua compra",
};
