import React from "react";
import Reunioes from "../components/reunioes";
import Ministerios from "../components/ministerios";
import Eventos from "../components/eventos";
import Galeria from "../components/galeria";
import QuemSomos from "../components/quemsomos";
import EquipePastoral from "../components/equipopastoral";
import Contato from "../components/contato";
import Doacao from "../components/doacao";
import HeroImg from "../assets/img/heroimg3.png";

export default function InicioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-light relative box-border flex-auto grain">
      <section className="relative min-h-screen flex items-center w-full overflow-hidden pt-22 max-md:pt-15 max-sm:pt-13">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HeroImg})` }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/85 via-primary/70 to-primary/40" />
        <div className="hero-light-leak" />
        <div className="relative max-w-330 mx-auto px-4 xl:max-w-300 2xl:max-w-350 z-10">
          <div className="flex flex-col items-center text-center">
            <h1
              className="mb-4 font-normal text-white text-4xl max-md:text-[clamp(1.8rem,5vw,2.5rem)] xl:text-[3.2rem] 2xl:text-[3.8rem] leading-tight animate-fade-in-down"
              style={{ animationDelay: "var(--animate-delay-100)" }}
            >
              Um lugar para <span className="text-accent">pertencer</span>
            </h1>

            <p
              className="text-white/85 text-[1.15rem] mb-6 max-md:text-base xl:text-[1.3rem] 2xl:text-[1.5rem] leading-relaxed max-w-2xl animate-fade-in-up"
              style={{ animationDelay: "var(--animate-delay-200)" }}
            >
              Somos uma comunidade que caminha junta, cuidando de pessoas e
              fortalecendo a fé.
            </p>

            <div
              className="flex gap-4 max-md:flex-col max-md:w-full max-md:max-w-xs animate-fade-in-up"
              style={{ animationDelay: "var(--animate-delay-300)" }}
            >
              <a
                href="#reunioes"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-medium text-primary transition-all duration-300 hover:bg-[#c9b692] hover:-translate-y-px hover:shadow-[0_4px_8px_-2px_rgba(216,198,165,0.4)]"
              >
                Horários dos cultos
              </a>

              <a
                href="#quemsomos"
                className="border-2 border-white/30 text-white rounded-full px-8 py-3 font-medium text-center transition-all duration-300 hover:bg-white/10 hover:border-white/50 inline-block"
              >
                Conheça a comunidade
              </a>
            </div>

            <p
              className="mt-8 text-white/50 text-sm italic max-w-lg animate-fade-in-up"
              style={{ animationDelay: "var(--animate-delay-400)" }}
            >
              «Onde dois ou três se reúnem em meu nome, ali estou eu no meio
              deles.» — Mt 18:20
            </p>
          </div>
        </div>
      </section>

      <section
        id="reunioes"
        className="border-t border-[rgba(216,198,165,0.35)] scroll-reveal"
      >
        <Reunioes />
      </section>
      <section
        id="ministerios"
        className="bg-white border-t border-[rgba(216,198,165,0.35)] scroll-reveal"
      >
        <Ministerios />
      </section>
      <section
        id="eventos"
        className="border-t border-[rgba(216,198,165,0.35)] scroll-reveal"
      >
        <Eventos />
      </section>
      <section
        id="galeria"
        className="bg-white border-t border-[rgba(216,198,165,0.35)] scroll-reveal"
      >
        <Galeria />
      </section>
      <section
        id="quemsomos"
        className="bg-white border-t border-[rgba(216,198,165,0.35)] scroll-reveal"
      >
        <QuemSomos />
      </section>
      <section
        id="equipopastoral"
        className="border-t border-[rgba(216,198,165,0.35)] scroll-reveal"
      >
        <EquipePastoral />
      </section>
      <section
        id="doacao"
        className="bg-white border-t border-[rgba(216,198,165,0.35)] scroll-reveal"
      >
        <Doacao />
      </section>
      <section
        id="contato"
        className="border-t border-[rgba(216,198,165,0.35)] scroll-reveal"
      >
        <Contato />
      </section>

      <div
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center bg-primary p-3 rounded-full shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-primaryLight cursor-pointer max-sm:bottom-3 max-sm:right-3 max-sm:p-2.5"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        role="button"
        aria-label="Voltar ao topo"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ")
            window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="text-white w-6 h-6 max-sm:w-5 max-sm:h-5"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 1 1-.708.708L8.5 5.707z" />
        </svg>
      </div>
    </div>
  );
}
