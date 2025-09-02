import { DisclaimerSection } from "./components/disclaimer";
import { HeroSection } from "./components/hero-section";
import { ProoductsSection } from "./components/products";
import { Separator } from "./components/separator";
import { TestimonialSection } from "./components/testimonial";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProoductsSection />
      <Separator />
      <TestimonialSection />
      <DisclaimerSection />
    </>
  );
}
