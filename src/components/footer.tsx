import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary h-fit w-full py-10 text-white">
      <section className="container flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-0">
        <p>
          © 2025 <strong>Bem-estar Nutracêuticos</strong>.
        </p>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <Link href="#">Política de privacidade</Link>
          <span className="hidden md:inline-block">|</span>
          <Link href="#">Termos de uso </Link>
        </div>
      </section>
    </footer>
  );
}
