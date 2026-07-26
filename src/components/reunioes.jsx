import { BiCalendarEvent, BiHistory, BiMapPin, BiBookOpen, BiSolidBolt, BiFemaleSign, BiGroup } from 'react-icons/bi';

const reunioes = [
  {
    icon: BiHistory,
    titulo: 'Culto de Celebração',
    dia: 'Domingos',
    hora: '19:00 hs',
    desc: 'Venha adorar conosco, ouvir a Palavra e experimentar a comunhão.',
    accent: '#D8C6A5',
  },
  {
    icon: BiBookOpen,
    titulo: 'Escola Bíblica Dominical',
    dia: 'Domingos',
    hora: '10:00 hs',
    desc: 'Estudo aprofundado das Escrituras para todas as idades.',
    accent: '#75836A',
  },
  {
    icon: BiSolidBolt,
    titulo: 'Culto de Oração',
    dia: 'Quartas',
    hora: '20:00 hs',
    desc: 'Momento de intercessão, louvor íntimo e busca pela presença de Deus.',
    accent: '#D8C6A5',
  },
  {
    icon: BiGroup,
    titulo: 'Encontro de Jovens',
    dia: 'Sextas',
    hora: '20:00 hs',
    desc: 'Louvor, estudos bíblicos e comunhão para a juventude.',
    accent: '#75836A',
  },
  {
    icon: BiFemaleSign,
    titulo: 'Encontro de Mulheres',
    dia: 'Sábados',
    hora: '10:00 hs',
    desc: 'Edificação e comunhão entre mulheres cristãs.',
    accent: '#D8C6A5',
  },
];

export default function Reunioes() {
  return (
    <div className="min-h-screen flex flex-col bg-light relative flex-1">
      <section className="text-center py-24 px-8 bg-light max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4 scroll-reveal">
        <h1 className="text-[2.5rem] text-primary animate-fade-in-down mb-3 max-md:text-[1.8rem] max-sm:text-[1.5rem] max-xl:text-[3rem] 2xl:text-[3.5rem]">
          <BiCalendarEvent className="inline-block text-accent mr-2" /> Nossas Reuniões
        </h1>
        <p className="text-[1.15rem] text-dark max-w-[600px] mx-auto leading-relaxed max-md:text-base">
          Junte-se a nós para celebrar e crescer juntos.
        </p>
      </section>

      <section className="w-full px-[5%] pb-24 max-md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-[1100px] mx-auto scroll-reveal scroll-reveal-stagger">
          {reunioes.slice(0, 3).map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="scroll-reveal-child bg-white rounded-xl p-8 text-dark flex flex-col items-center text-center w-full relative overflow-hidden transition-all duration-400 group hover:-translate-y-1"
                style={{
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  borderLeft: `4px solid ${r.accent}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 30px ${r.accent}18, 0 2px 8px rgba(0,0,0,0.06)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
                }}
              >
                <span
                  className="absolute top-3 right-3 text-[0.65rem] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: `${r.accent}18`, color: r.accent }}
                >
                  {r.dia}
                </span>
                <Icon className="text-3xl mb-3 block transition-transform duration-300 group-hover:scale-110" style={{ color: r.accent }} />
                <h2 className="font-serif text-[1.3rem] font-normal mb-3 text-primary max-md:text-[1.15rem]">{r.titulo}</h2>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-semibold" style={{ color: r.accent }}>{r.hora}</span>
                </div>
                <p className="text-[0.95rem] text-dark/60 leading-relaxed max-md:text-sm">{r.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
          {reunioes.slice(3).map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="scroll-reveal-child bg-white rounded-xl p-8 text-dark flex flex-col items-center text-center w-full max-w-[350px] relative overflow-hidden transition-all duration-400 group hover:-translate-y-1"
                style={{
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  borderLeft: `4px solid ${r.accent}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 30px ${r.accent}18, 0 2px 8px rgba(0,0,0,0.06)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
                }}
              >
                <span
                  className="absolute top-3 right-3 text-[0.65rem] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: `${r.accent}18`, color: r.accent }}
                >
                  {r.dia}
                </span>
                <Icon className="text-3xl mb-3 block transition-transform duration-300 group-hover:scale-110" style={{ color: r.accent }} />
                <h2 className="font-serif text-[1.3rem] font-normal mb-3 text-primary max-md:text-[1.15rem]">{r.titulo}</h2>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-semibold" style={{ color: r.accent }}>{r.hora}</span>
                </div>
                <p className="text-[0.95rem] text-dark/60 leading-relaxed max-md:text-sm">{r.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12 scroll-reveal">
          <a
            href="https://www.google.com/maps/dir//Comunidade+Evang%C3%A9lica+de+Costa+do+Sol,+Alameda+Campomar,+562+-+Cidade+Praiana,+Rio+das+Ostras+-+RJ"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-8 py-3 font-medium text-base bg-accent text-primary shadow-[0_2px_4px_-1px_rgba(216,198,165,0.3)] transition-all duration-300 inline-flex items-center hover:bg-[#c9b692] hover:-translate-y-px hover:shadow-[0_4px_8px_-2px_rgba(216,198,165,0.4)]"
          >
            <BiMapPin className="mr-2" /> Como chegar
          </a>
        </div>
      </section>
    </div>
  )
}
