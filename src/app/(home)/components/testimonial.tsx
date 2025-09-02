import Image from "next/image";
import Link from "next/link";

interface PersonData {
  name: string;
  address: string;
  avatar: string;
}

interface Testimonial {
  id: string;
  person: PersonData;
  review: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}

const testimonials: Testimonial[] = [
  {
    id: "testimonial-01",
    person: {
      name: "Maria Fernandes, 34 anos",
      address: "São Paulo - SP",
      avatar: "/images/avatar/maria-fernandes.png",
    },
    review:
      "Sempre tive dificuldade para emagrecer, mas com o Detox Slim em apenas 3 semanas perdi 5kg sem passar fome. Me sinto mais leve e confiante.",
    rating: 5,
  },
  {
    id: "testimonial-02",
    person: {
      name: "Juliana Costa, 28 anos",
      address: "Belo Horizonte - MG",
      avatar: "/images/avatar/juliana-costa.png",
    },
    review:
      "O Beauty Skin mudou completamente minha pele! Em 1 mês, minhas amigas começaram a elogiar meu brilho e firmeza. Hoje não vivo sem.",
    rating: 5,
  },
  {
    id: "testimonial-03",
    person: {
      name: "Ana Paula Souza, 42 anos",
      address: "Curitiba - PR",
      avatar: "/images/avatar/ana-paula-souza.png",
    },
    review:
      "Eu já tinha tentado vários produtos, nada funcionava de verdade. Combinando Detox Slim e Colágeno, além de emagrecer, sinto minha pele mais jovem.",
    rating: 5,
  },
  {
    id: "testimonial-04",
    person: {
      name: "Renata Oliveira, 31 anos",
      address: "Salvador - BA",
      avatar: "/images/avatar/renata-oliveira.png",
    },
    review:
      "Minha autoestima estava no chão por causa da queda de cabelo. Depois de 2 meses com o Beauty Skin, meu cabelo voltou a crescer forte e saudável.",
    rating: 5,
  },
  {
    id: "testimonial-05",
    person: {
      name: "Camila Rodrigues, 39 anos",
      address: "Rio de Janeiro - RJ",
      avatar: "/images/avatar/camila-rodrigues.png",
    },
    review:
      "O Energy Focus me deu a energia que eu precisava para conciliar trabalho e academia. Agora consigo treinar sem sentir aquele cansaço extremo.",
    rating: 5,
  },
  {
    id: "testimonial-06",
    person: {
      name: "Fernanda Lima, 36 anos",
      address: "Porto Alegre - RS",
      avatar: "/images/avatar/fernanda-lima.png",
    },
    review:
      "Depois de começar com o Detox Slim, minha disposição aumentou muito. Além de emagrecer 4kg em 1 mês, me sinto mais saudável e feliz.",
    rating: 5,
  },
];

export function TestimonialSection() {
  return (
    <section className="container mb-10">
      <h2 className="mb-11 text-center text-2xl leading-[130%] font-semibold">
        Resultados que falam por si: depoimentos de quem já experimentou
      </h2>
      <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="border-custom-gray-200 rounded-md border px-8 py-6"
          >
            <p className="text-custom-gray-800 mb-4">{testimonial.review}</p>
            <div className="flex gap-4">
              <Image
                src={testimonial.person.avatar}
                alt={`Foto de perfil de ${testimonial.person.name}`}
                width={56}
                height={56}
                className="rounded-full"
              />

              <div>
                <p className="mb-1 font-semibold">{testimonial.person.name}</p>
                <p className="text-custom-gray-800">
                  {testimonial.person.address}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="#produtos" className="cta-btn mx-auto block w-fit">
        Quero escolher um produto
      </Link>
    </section>
  );
}
