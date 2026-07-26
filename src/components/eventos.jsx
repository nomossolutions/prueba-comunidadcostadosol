import { BiStar, BiCalendarCheck, BiMapPin, BiTimeFive } from 'react-icons/bi';

export default function Eventos() {
  return (
    <div className="flex flex-col bg-light relative flex-1">
      <section className="text-center py-24 px-8 bg-light max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4 scroll-reveal">
        <h1 className="text-[2.5rem] text-primary animate-fade-in-down mb-3 max-md:text-[1.8rem] max-sm:text-[1.5rem] max-xl:text-[3rem] 2xl:text-[3.5rem]">
          <BiStar className="inline-block text-accent mr-2" /> Eventos
        </h1>
        <p className="text-[1.15rem] text-dark max-w-[600px] mx-auto leading-relaxed max-md:text-base">
          Fique por dentro das nossas programações especiais.
        </p>
      </section>

      <section className="w-full px-[5%] pb-24 max-md:px-4 scroll-reveal">
        <div className="max-w-[900px] mx-auto rounded-2xl overflow-hidden relative group transition-all duration-400 hover:-translate-y-1" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primaryLight to-primary" />
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

          <div className="relative flex items-stretch max-md:flex-col">
            <div className="flex flex-col items-center justify-center px-10 py-12 max-md:px-6 max-md:py-8 max-md:border-b max-md:border-white/10" style={{ minWidth: '180px' }}>
              <span className="text-accent text-[4.5rem] font-serif leading-none max-md:text-[3.5rem]">11</span>
              <span className="text-white/60 text-sm uppercase tracking-[0.2em] mt-1">Janeiro</span>
              <span className="text-white/40 text-xs mt-1">2026</span>
            </div>

            <div className="flex-1 flex flex-col justify-center px-10 py-10 max-md:px-6 max-md:py-6">
              <div className="flex items-center gap-2 mb-4">
                <BiCalendarCheck className="text-accent" />
                <span className="text-accent text-xs uppercase tracking-[0.2em] font-semibold">Próximo Evento</span>
              </div>

              <h2 className="font-serif text-[1.8rem] text-white mb-3 leading-tight max-md:text-[1.4rem]">
                Ágape Aniversário da Igreja
              </h2>

              <p className="text-white/60 text-[1.05rem] leading-relaxed mb-6 max-md:text-base">
                Venha celebrar conosco mais um ano de histórias, fé e comunidade.
              </p>

              <div className="flex items-center gap-5 flex-wrap max-sm:gap-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                    <BiTimeFive className="text-accent text-sm" />
                  </span>
                  <span className="text-white font-semibold text-lg">19:00 hs</span>
                </div>
                <a
                  href="https://www.google.com/maps/dir//Comunidade+Evang%C3%A9lica+de+Costa+do+Sol,+Alameda+Campomar,+562+-+Cidade+Praiana,+Rio+das+Ostras+-+RJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-6 py-2.5 font-medium text-sm bg-accent text-primary transition-all duration-300 inline-flex items-center hover:bg-[#c9b692] hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(216,198,165,0.3)]"
                >
                  <BiMapPin className="mr-1.5" /> Como chegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
