"use client";

import { Product } from "@/constants/products";
import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/input";
import { priceFormatter } from "@/lib/price-formatter";
import { useRouter, useSearchParams } from "next/navigation";

interface CheckoutFormProps {
  product: Product;
}

export function CheckoutForm({ product }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    zip: "",
    street: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    state: "",
    paymentType: product.paymentOptions[0].type,
    installments: 1,
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const queryString = searchParams.toString();
    const url = `/obrigado/${product.slug}${queryString ? `?${queryString}` : ""}`;

    router.push(url);
  }

  return (
    <div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
      {/* FORMULÁRIO */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* DADOS PESSOAIS */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Dados pessoais</h3>
          <Input
            label="Nome completo"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <Input
            label="E-mail"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Telefone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </section>

        {/* ENDEREÇO */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Endereço de entrega</h3>
          <Input
            label="CEP"
            name="zip"
            type="text"
            value={formData.zip}
            onChange={handleChange}
            required
          />
          <Input
            label="Rua"
            name="street"
            type="text"
            value={formData.street}
            onChange={handleChange}
            required
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label="Número"
              name="number"
              type="text"
              value={formData.number}
              onChange={handleChange}
              required
            />
            <Input
              label="Complemento"
              name="complement"
              type="text"
              value={formData.complement}
              onChange={handleChange}
            />
          </div>
          <Input
            label="Bairro"
            name="district"
            type="text"
            value={formData.district}
            onChange={handleChange}
            required
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label="Cidade"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <Input
              label="Estado"
              name="state"
              type="text"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
        </section>

        {/* PAGAMENTO */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Pagamento</h3>

          {/* opções dinâmicas */}
          <div className="flex gap-4">
            {product.paymentOptions.map((opt) => (
              <label key={opt.type} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentType"
                  value={opt.type}
                  checked={formData.paymentType === opt.type}
                  onChange={handleChange}
                />
                {opt.type === "pix" && "PIX"}
                {opt.type === "boleto" && "Boleto"}
                {opt.type === "cartao" && "Cartão"}
              </label>
            ))}
          </div>

          {/* se for cartão, mostra campos */}
          {formData.paymentType === "cartao" && (
            <div className="space-y-4">
              <Input
                label="Nome no cartão"
                name="cardName"
                type="text"
                value={formData.cardName}
                onChange={handleChange}
                required
              />
              <Input
                label="Número do cartão"
                name="cardNumber"
                type="text"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input
                  label="Validade (MM/AA)"
                  name="cardExpiry"
                  type="text"
                  value={formData.cardExpiry}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="CVC"
                  name="cardCvc"
                  type="text"
                  value={formData.cardCvc}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* parcelas */}
              {product.paymentOptions.find((p) => p.type === "cartao")
                ?.installments && (
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="installments"
                    className="text-sm font-medium text-gray-700"
                  >
                    Parcelamento
                  </label>
                  <select
                    name="installments"
                    value={formData.installments}
                    onChange={handleChange}
                    className="w-full rounded-lg border p-3"
                  >
                    {Array.from(
                      {
                        length:
                          product.paymentOptions.find(
                            (p) => p.type === "cartao",
                          )?.installments ?? 1,
                      },
                      (_, i) => i + 1,
                    ).map((num) => (
                      <option key={num} value={num}>
                        {num}x de R$
                        {(product.price / num).toFixed(2)}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          )}
        </section>

        <button
          type="submit"
          className="bg-primary hover:bg-secondary cursor-pointer rounded-lg px-6 py-3 text-white"
        >
          Finalizar compra
        </button>
      </form>

      {/* RESUMO DO PEDIDO */}
      <aside className="border-custom-gray-200 h-fit space-y-4 rounded-lg border p-6">
        <div className="mb-4 flex items-center gap-6">
          <Image
            src={product.image}
            alt={`Imagem do produto ${product.name}`}
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-custom-gray-800">
              Categoria: {product.category}
            </p>
          </div>
        </div>
        <p className="text-custom-gray-800 text-lg font-semibold">
          {formData.paymentType === "cartao"
            ? `${formData.installments}x de ${priceFormatter.format(
                product.price / formData.installments,
              )} (Total: ${priceFormatter.format(product.price)})`
            : `Preço: ${priceFormatter.format(product.price)}`}
        </p>

        <hr className="bg-custom-gray-200 my-4" />

        <h3 className="text-lg font-semibold">Resumo preenchido</h3>
        <div className="flex items-center justify-between gap-4 truncate">
          <strong className="font-medium">Cliente:</strong>{" "}
          <p className="text-custom-gray-800">{formData.fullName}</p>
        </div>
        <div className="flex items-center justify-between gap-4 truncate">
          <strong className="font-medium">Email:</strong>{" "}
          <p className="text-custom-gray-800">{formData.email}</p>
        </div>
        <div className="flex items-center justify-between gap-4 truncate">
          <strong className="font-medium">Telefone:</strong>{" "}
          <p className="text-custom-gray-800">{formData.phone}</p>
        </div>
        <div className="flex items-start justify-between gap-4">
          <strong className="font-medium">Endereço:</strong>
          <p className="text-custom-gray-800 text-end text-wrap">
            {formData.street}, {formData.number} - {formData.district},{" "}
            {formData.city}/{formData.state} - CEP: {formData.zip}
          </p>
        </div>
        {formData.complement && (
          <div className="flex items-start justify-between gap-4">
            <strong className="font-medium">Complemento:</strong>
            <p className="text-custom-gray-800">{formData.complement}</p>
          </div>
        )}

        <div className="flex items-center justify-between gap-4 truncate">
          <strong className="font-medium">Pagamento:</strong>{" "}
          <p className="text-custom-gray-800">
            {formData.paymentType === "pix" && "PIX"}
            {formData.paymentType === "boleto" && "Boleto"}
            {formData.paymentType === "cartao" &&
              `${formData.installments}x no cartão`}
          </p>
        </div>
      </aside>
    </div>
  );
}
