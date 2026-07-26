import { BiFemaleSign, BiSolidBalloon, BiSolidBolt, BiHeart, BiSolidHeart } from 'react-icons/bi';

const ministerios = [
  {
    icon: BiFemaleSign,
    title: 'Mulheres',
    desc: 'Encontros quinzenais para compartilhar experiências, edificar a fé e fortalecer os laços de amizade entre mulheres cristãs.',
    accent: '#D8C6A5',
    bg: 'bg-[#D8C6A5]/[0.04]',
  },
  {
    icon: BiSolidBalloon,
    title: 'Crianças',
    desc: 'Um espaço seguro e divertido onde as crianças aprendem princípios bíblicos através de histórias, músicas e atividades lúdicas.',
    accent: '#75836A',
    bg: 'bg-[#75836A]/[0.04]',
  },
  {
    icon: BiSolidBolt,
    title: 'Jovens',
    desc: 'Reuniões dinâmicas com louvor, estudos bíblicos aplicados à realidade jovem e momentos de comunhão autêntica.',
    accent: '#D8C6A5',
    bg: 'bg-[#D8C6A5]/[0.04]',
  },
  {
    icon: BiHeart,
    title: 'Casais',
    desc: 'Investindo em casamentos sólidos com princípios bíblicos, encontros de casais e aconselhamento familiar.',
    accent: '#75836A',
    bg: 'bg-[#75836A]/[0.04]',
  },
  {
    icon: BiSolidHeart,
    title: 'Social',
    desc: 'Servindo a nossa comunidade local através de ações solidárias, distribuição de alimentos e apoio às famílias necessitadas.',
    accent: '#D8C6A5',
    bg: 'bg-[#D8C6A5]/[0.04]',
  }
];

export default function Ministerios() {
  return (
    <div className="min-h-screen flex flex-col bg-light relative flex-1">
      <section className="text-center py-24 px-8 bg-light max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4 scroll-reveal">
        <h1 className="text-[2.5rem] text-primary animate-fade-in-down mb-3 max-md:text-[1.8rem] max-sm:text-[1.5rem] max-xl:text-[3rem] 2xl:text-[3.5rem]">
          Ministérios
        </h1>
        <p className="text-[1.15rem] text-dark max-w-[600px] mx-auto leading-relaxed max-md:text-base">
          Conheça nossos grupos de convivência e serviço.
        </p>
      </section>

      <section className="w-full flex justify-center flex-wrap gap-8 px-[5%] bg-light max-md:px-4 max-md:gap-6 scroll-reveal scroll-reveal-stagger">
        {ministerios.map((m, i) => {
          const Icon = m.icon;
          return (
            <div
              key={i}
              className={`scroll-reveal-child rounded-xl p-10 text-dark flex flex-col items-center text-center flex-1 min-w-0 max-w-[400px] relative overflow-hidden max-md:p-6 max-md:text-[1rem] transition-all duration-400 group ${m.bg} hover:-translate-y-1`}
              style={{
                borderTop: `3px solid ${m.accent}`,
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 30px ${m.accent}18, 0 2px 8px rgba(0,0,0,0.06)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
              }}
            >
              <Icon className="text-[3.5rem] mb-4 block transition-transform duration-300 group-hover:scale-110" style={{ color: `${m.accent}30` }} />
              <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1 pointer-events-none">
                <Icon className="text-[8rem] opacity-[0.04] block" style={{ color: m.accent }} />
              </div>
              <h2 className="font-serif text-[1.5rem] font-normal mb-3 text-primary max-md:text-[1.25rem] relative z-10">{m.title}</h2>
              <p className="text-[1.05rem] text-dark/70 leading-[1.7] mb-4 max-md:text-base relative z-10">{m.desc}</p>
            </div>
          );
        })}
      </section>
    </div>
  )
}
