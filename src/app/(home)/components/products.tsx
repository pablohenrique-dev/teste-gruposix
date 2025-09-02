import { products } from "@/constants/products";
import { priceFormatter } from "@/lib/price-formatter";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function ProoductsSection() {
  return (
    <section id="produtos" className="container mb-20 h-fit">
      <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
        Conheça nossos produtos
      </h2>
      <Image
        src="/icons/arrows-down.svg"
        width={34}
        height={33}
        alt="Setas na cor verde apontando para baixo"
        className="mx-auto mb-16"
        loading="lazy"
      />

      {products.map(
        (
          { features, id, image, category, name, price, paymentOptions, slug },
          index,
        ) => {
          // procura opção de cartão (se houver)
          const cardOption = paymentOptions.find(
            (opt) => opt.type === "cartao",
          );
          const pixOption = paymentOptions.find((opt) => opt.type === "pix");
          const boletoOption = paymentOptions.find(
            (opt) => opt.type === "boleto",
          );

          return (
            <div
              key={id}
              className={cn(
                "border-custom-gray-200 hover:border-secondary sticky top-10 flex w-full flex-col items-center gap-12 rounded-lg border bg-white p-6 transition-all md:p-14 lg:flex-row",
                index === products.length - 1 && "mt-10",
              )}
            >
              <Image
                src={image}
                alt={`Imagem de um frasco de plastico do produto ${name}`}
                width={357}
                height={420}
                className="border-secondary order-2 rounded-lg border lg:order-1"
                loading="lazy"
              />
              <div className="order-1 lg:order-2">
                <h3 className="mb-10 text-center text-3xl leading-[130%] font-semibold lg:text-start">
                  {name}
                </h3>

                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className={cn(
                      "flex items-center justify-center gap-2 lg:justify-start",
                      index > 0 && "mt-8",
                      index === features.length - 1 && "mb-11",
                    )}
                  >
                    <span className="text-primary">✔</span>
                    <p className="">{feature}</p>
                  </div>
                ))}

                <div className="mb-6 text-center lg:text-start">
                  <div className="mb-2 flex flex-col items-center gap-2 lg:flex-row lg:items-end">
                    <p className="text-primary text-3xl font-bold">
                      {priceFormatter.format(price)}
                    </p>

                    {(pixOption || boletoOption) && (
                      <p className="mb-1 text-sm text-gray-500">
                        {pixOption && "À vista no PIX"}{" "}
                        {pixOption && boletoOption && " ou "}
                        {boletoOption && "Boleto bancário"}
                      </p>
                    )}
                  </div>

                  {cardOption && (
                    <p className="text-gray-600">
                      ou em até {cardOption.installments}x de{" "}
                      {priceFormatter.format(
                        price / (cardOption.installments || 1),
                      )}{" "}
                      no cartão
                    </p>
                  )}
                </div>
                <Link
                  href={`/produto/checkout/${slug}`}
                  className="bg-primary mx-auto block w-full rounded-md px-10 py-3 text-center text-lg font-semibold text-white lg:mx-0 lg:w-fit"
                >{`Quero meu ${category} agora`}</Link>
              </div>
            </div>
          );
        },
      )}
    </section>
  );
}
