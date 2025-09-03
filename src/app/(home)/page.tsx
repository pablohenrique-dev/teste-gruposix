import { DisclaimerSection } from "./components/disclaimer";
import { HeroSection } from "./components/hero-section";
import { ProductsSection } from "./components/products";
import { Separator } from "./components/separator";
import { TestimonialSection } from "./components/testimonial";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const queryParams = await searchParams;
  const queryString = new URLSearchParams(queryParams).toString();

  return (
    <>
      <HeroSection />
      <ProductsSection queryString={queryString} />
      <Separator />
      <TestimonialSection />
      <DisclaimerSection />
    </>
  );
}
