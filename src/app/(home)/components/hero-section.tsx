"use client";

import { Hat } from "@/components/hat";
import Image from "next/image";
import { useState } from "react";

export function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      id="hero"
      className="container flex flex-col items-center py-20 pb-16 md:py-24"
    >
      <Hat />
      <h1 className="mb-6 text-center text-4xl leading-[130%] font-semibold tracking-tighter md:text-[56px]">
        O segredo natural para transformar seu corpo e autoestima em poucas
        semanas.
      </h1>
      <p className="text-custom-gray-900 mb-10 text-center text-lg">
        Assista agora e descubra como milhares de mulheres estão renovando sua
        beleza natural.
      </p>

      <div className="w-full md:max-w-[864px]">
        {showVideo ? (
          <iframe
            src="https://www.youtube.com/embed/NpEaa2P7qZI?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video max-w-[864px] rounded-lg"
          ></iframe>
        ) : (
          <div
            onClick={() => setShowVideo(true)}
            className="from-secondary to-primary flex aspect-video w-full cursor-pointer items-center justify-center rounded-lg bg-radial-[at_50%_75%]"
          >
            <button className="flex aspect-square w-[70px] cursor-pointer items-center justify-center rounded-full bg-white outline-8 outline-[#ffffff20]">
              <Image
                src="/icons/play.svg"
                width={36}
                height={36}
                alt="Ícone em formato de triângulo na cor verde"
                className="ml-1 aspect-square w-6"
                priority
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
