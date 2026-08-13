import { BiGroup, BiShowAlt, BiBullseye, BiSolidHeart, BiCheck } from 'react-icons/bi';
import quemsomosImg from '../assets/img/quemsomos.jpg';

const cards = [
  {
    icon: BiShowAlt,
    title: 'Visão',
    desc: 'Ser uma comunidade que reflete o amor de Cristo, impactando vidas e transformando realidades.',
    accent: 'var(--color-accent)',
    bg: 'bg-accent/[0.04]',
  },
  {
    icon: BiBullseye,
    title: 'Missão',
    desc: 'Amar a Deus, cuidar de pessoas e formar discípulos através de relacionamentos e serviço.',
    accent: 'var(--color-olive)',
    bg: 'bg-olive/[0.04]',
  },
  {
    icon: BiSolidHeart,
    title: 'Valores',
    accent: 'var(--color-accent)',
    bg: 'bg-accent/[0.04]',
    values: ['Amor', 'Fé', 'Comunhão', 'Serviço', 'Integridade'],
  }
];

function Card({ m }) {
  const Icon = m.icon;
  return (
    <div
      className={`scroll-reveal-child bg-white rounded-xl p-10 text-dark flex flex-col items-start text-left relative overflow-hidden transition-all duration-400 group hover:-translate-y-1 max-md:p-6 ${m.bg}`}
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderTop: `3px solid ${m.accent}` }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 12px 40px ${m.accent}22, 0 4px 12px rgba(0,0,0,0.08)`; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; }}
    >
      <Icon className="text-[3.5rem] mb-4 block transition-transform duration-300 group-hover:scale-110" style={{ color: `${m.accent}30` }} />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1 pointer-events-none">
        <Icon className="text-[8rem] opacity-[0.04] block" style={{ color: m.accent }} />
      </div>
      <h2 className="text-left w-full font-serif text-[1.5rem] font-medium mb-3 text-primary max-md:text-[1.25rem] relative z-10">{m.title}</h2>
      {m.desc && <p className="text-[1.05rem] text-dark/80 leading-[1.7] max-md:text-base relative z-10">{m.desc}</p>}
      {m.values && (
        <ul className="list-none pl-0 mb-6 w-full relative z-10 space-y-3">
          {m.values.map((v) => (
            <li key={v} className="text-dark/80 flex items-center text-[1.05rem] max-md:text-base">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/20 mr-3 shrink-0">
                <BiCheck className="text-accent-dark text-sm" style={{ fontWeight: 700 }} />
              </span>
              {v}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function QuemSomos() {
  return (
    <div className="min-h-screen flex flex-col bg-light relative flex-1">
      <section className="text-center py-24 px-8 bg-light max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4 scroll-reveal">
        <h1 className="text-[2.5rem] text-primary font-medium animate-fade-in-down mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem] max-xl:text-[3rem] xl:text-[3.5rem] 2xl:text-[4.2rem] leading-[1.1]">
          <BiGroup className="inline-block text-accent mr-2" /> Quem Somos
        </h1>
      </section>

      <section className="w-full px-[5%] bg-light max-md:px-4 pb-24 scroll-reveal">
          <div className="max-w-[900px] mx-auto animate-fade-in-up">
          <img
            src={quemsomosImg}
            alt="Comunidade Costa do Sol reunida"
            loading="lazy"
            decoding="async"
            width={1536}
            height={1024}
            className="w-full h-[400px] max-md:h-[220px] max-sm:h-[180px] object-cover object-center rounded-2xl mb-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
          />
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1px bg-accent" />
            <span className="text-accent-dark text-sm uppercase tracking-[0.2em] font-medium">Quem Somos</span>
          </div>
          <p className="font-serif text-[1.5rem] leading-[1.9] text-dark/80 max-w-[750px] max-md:text-[1.15rem]">
            Somos uma comunidade cristã que acredita em relacionamentos verdadeiros, cuidado mútuo e crescimento espiritual. Caminhamos juntos, acolhendo pessoas em cada fase da vida, com amor, fé e propósito.
          </p>
        </div>
      </section>

      <section className="w-full px-[5%] bg-light max-md:px-4 pb-24">
        <div className="grid grid-cols-3 gap-8 max-w-[1100px] mx-auto max-md:grid-cols-1 max-lg:grid-cols-2 scroll-reveal scroll-reveal-stagger ">
          {cards.map((m, i) => (
            <Card key={i} m={m} />
          ))}
        </div>
      </section>
    </div>
  )
}
