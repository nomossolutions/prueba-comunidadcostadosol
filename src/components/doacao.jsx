import { BiSolidHeart, BiMoney, BiSolidBank, BiLinkExternal } from 'react-icons/bi';

export default function Doacao() {
  return (
    <div className="min-h-screen flex flex-col bg-light relative flex-1">
      <section className="text-center py-24 px-8 bg-light max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4 scroll-reveal">
        <h1 className="text-[2.5rem] text-primary font-medium animate-fade-in-down mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem] max-xl:text-[3rem] xl:text-[3.5rem] 2xl:text-[4.2rem] leading-[1.1]">
          <BiSolidHeart className="inline-block text-accent mr-2" /> Faça uma Doação
        </h1>
        <p className="text-[1.15rem] text-dark/80 max-w-[600px] mx-auto leading-relaxed max-md:text-base">
          Sua generosidade nos ajuda a continuar servindo a nossa comunidade.
        </p>
      </section>

      <section className="w-full px-[5%] pb-24 max-md:px-4 scroll-reveal">
        <div className="max-w-[900px] mx-auto rounded-2xl p-10 max-md:p-6 bg-linear-to-br from-primary to-primaryLight text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 text-center mb-10">
            <BiSolidHeart className="text-[5rem] text-accent mx-auto mb-4 opacity-80" />
            <p className="font-serif text-[1.3rem] leading-[1.8] text-white/90 max-w-[600px] mx-auto max-md:text-[1.1rem]">
              «Cada um contribua segundo propôs no coração, não com tristeza ou por obrigação, porque Deus ama o que dá com alegria.» — 2 Coríntios 9:7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1">
              <BiMoney className="text-[2.5rem] text-accent mx-auto mb-3" />
              <h3 className="text-lg font-serif text-accent mb-2">PIX</h3>
              <p className="text-white/50 text-sm mb-4 italic">Chave PIX em breve</p>
              <div className="bg-white/10 rounded-lg px-3 py-2 mb-4 flex items-center justify-center gap-2 opacity-50">
                <span className="font-mono text-sm">•••••••••••</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1">
              <BiSolidBank className="text-[2.5rem] text-accent mx-auto mb-3" />
              <h3 className="text-lg font-serif text-accent mb-2">Transferência Bancária</h3>
              <p className="text-white/50 text-sm italic">Dados bancários em breve</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <BiLinkExternal className="text-[2.5rem] text-accent mx-auto mb-3" />
              <h3 className="text-lg font-serif text-accent mb-2">Doação Online</h3>
              <p className="text-white/70 text-sm mb-4">Contribua de forma rápida e segura através da nossa plataforma parceira.</p>
              <span className="mt-auto inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-base font-medium text-white/50 cursor-not-allowed">
                Em breve <BiLinkExternal className="ml-2 opacity-50" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
