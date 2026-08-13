import { BiUser, BiSolidBookAlt, BiEnvelope, BiPhone } from 'react-icons/bi';

const lideres = [
  {
    name: 'Em breve',
    cargo: 'Pastor Principal',
    desc: 'Conheça em breve o líder pastoral da nossa comunidade.',
    accent: 'var(--color-accent)',
    bg: 'bg-accent/[0.04]',
    text: 'var(--color-accent-dark)',
  },
  {
    name: 'Em breve',
    cargo: 'Pastor(a) Auxiliar',
    desc: 'Em breve apresentaremos a equipe que cuida dos membros e grupos da comunidade.',
    accent: 'var(--color-olive)',
    bg: 'bg-olive/[0.04]',
    text: 'var(--color-olive-dark)',
  },
  {
    name: 'Em breve',
    cargo: 'Líder de Adoração',
    desc: 'Em breve conheça quem conduz a equipe de louvor e adoração.',
    accent: 'var(--color-accent)',
    bg: 'bg-accent/[0.04]',
    text: 'var(--color-accent-dark)',
  }
];

function LiderCard({ m }) {
  return (
    <div
      className={`scroll-reveal-child rounded-xl p-10 text-dark flex flex-col items-center text-center w-full max-w-[400px] relative overflow-hidden max-md:p-6 max-md:text-[1rem] transition-all duration-400 group hover:-translate-y-1 ${m.bg}`}
      style={{
        borderTop: `3px solid ${m.accent}`,
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 12px 40px ${m.accent}22, 0 4px 12px rgba(0,0,0,0.08)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
      }}
    >
      <div
        className="w-[140px] h-[140px] rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundColor: `${m.accent}20` }}
      >
        <BiUser className="text-[3.5rem]" style={{ color: `${m.accent}60` }} />
      </div>
      <h2 className="font-serif text-[1.4rem] font-medium mb-1 text-primary max-md:text-[1.2rem] relative z-10">{m.name}</h2>
      <span
        className="inline-block text-xs font-medium uppercase tracking-[0.15em] mb-4 px-3 py-1 rounded-full bg-olive/15 text-olive-dark"
      >
        {m.cargo}
      </span>
      <p className="text-[1.05rem] text-dark/80 leading-[1.7] mb-4 max-md:text-base relative z-10">{m.desc}</p>
      <div className="flex gap-3 mt-auto">
        <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5" style={{ backgroundColor: `${m.accent}15` }} aria-label="Enviar e-mail">
          <BiEnvelope className="text-base" style={{ color: m.text }} />
        </a>
        <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5" style={{ backgroundColor: `${m.accent}15` }} aria-label="Ligar">
          <BiPhone className="text-base" style={{ color: m.text }} />
        </a>
      </div>
    </div>
  );
}

export default function EquipePastoral() {
  return (
    <div className="min-h-screen flex flex-col bg-light relative flex-1">
      <section className="text-center py-24 px-8 bg-light max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4 scroll-reveal">
        <h1 className="text-[2.5rem] text-primary font-medium animate-fade-in-down mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem] max-xl:text-[3rem] xl:text-[3.5rem] 2xl:text-[4.2rem] leading-[1.1]">
          <BiSolidBookAlt className="inline-block text-accent mr-2" /> Equipe Pastoral
        </h1>
        <p className="text-[1.15rem] text-dark/80 max-w-[600px] mx-auto leading-relaxed max-md:text-base">
          Conheça os líderes que servem à nossa comunidade.
        </p>
      </section>

      <section className="w-full px-[5%] pb-24 max-md:px-4 scroll-reveal scroll-reveal-stagger">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-[1200px] mx-auto">
          {lideres.map((m, i) => (
            <LiderCard key={i} m={m} />
          ))}
        </div>
      </section>
    </div>
  )
}
