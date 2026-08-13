import {
  BiFemaleSign,
  BiSolidBalloon,
  BiSolidBolt,
  BiHeart,
  BiSolidHeart,
} from "react-icons/bi";

const ministerios = [
  {
    icon: BiFemaleSign,
    title: "Mulheres",
    desc: "Encontros quinzenais para compartilhar experiências, edificar a fé e fortalecer os laços de amizade entre mulheres cristãs.",
    accent: "var(--color-accent)",
    bg: "bg-accent/[0.04]",
  },
  {
    icon: BiSolidBalloon,
    title: "Crianças",
    desc: "Um espaço seguro e divertido onde as crianças aprendem princípios bíblicos através de histórias, músicas e atividades lúdicas.",
    accent: "var(--color-olive)",
    bg: "bg-olive/[0.04]",
  },
  {
    icon: BiSolidBolt,
    title: "Jovens",
    desc: "Reuniões dinâmicas com louvor, estudos bíblicos aplicados à realidade jovem e momentos de comunhão autêntica.",
    accent: "var(--color-accent)",
    bg: "bg-accent/[0.04]",
  },
  {
    icon: BiHeart,
    title: "Casais",
    desc: "Investindo em casamentos sólidos com princípios bíblicos, encontros de casais e aconselhamento familiar.",
    accent: "var(--color-olive)",
    bg: "bg-olive/[0.04]",
  },
  {
    icon: BiSolidHeart,
    title: "Social",
    desc: "Servindo a nossa comunidade local através de ações solidárias, distribuição de alimentos e apoio às famílias.",
    accent: "var(--color-accent)",
    bg: "bg-accent/[0.04]",
  },
];

function Card({ m }) {
  const Icon = m.icon;
  return (
    <div
      className={`scroll-reveal-child rounded-xl p-10 text-dark flex flex-col items-center text-center w-full max-w-[400px] relative overflow-hidden max-md:p-6 max-md:text-[1rem] transition-all duration-400 group ${m.bg} hover:-translate-y-1`}
      style={{
        borderTop: `3px solid ${m.accent}`,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 12px 40px ${m.accent}22, 0 4px 12px rgba(0,0,0,0.08)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
      }}
    >
      <Icon
        className="text-[3.5rem] mb-4 block transition-transform duration-300 group-hover:scale-110"
        style={{ color: `${m.accent}30` }}
      />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1 pointer-events-none">
        <Icon
          className="text-[8rem] opacity-[0.04] block"
          style={{ color: m.accent }}
        />
      </div>
      <h2 className="font-serif text-[1.5rem] font-medium mb-3 text-primary max-md:text-[1.25rem] relative z-10">
        {m.title}
      </h2>
      <p className="text-[1.05rem] text-dark/80 leading-[1.7] mb-4 max-md:text-base relative z-10">
        {m.desc}
      </p>
    </div>
  );
}

export default function Ministerios() {
  const fila1 = ministerios.slice(0, 3);
  const fila2 = ministerios.slice(3);

  return (
    <div className="min-h-screen flex flex-col bg-light relative flex-1">
      <section className="text-center py-24 px-8 bg-light max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4 scroll-reveal">
        <h1 className="text-[2.5rem] text-primary font-medium animate-fade-in-down mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem] max-xl:text-[3rem] xl:text-[3.5rem] 2xl:text-[4.2rem] leading-[1.1]">
          Ministérios
        </h1>
        <p className="text-[1.15rem] text-dark/80 max-w-[600px] mx-auto leading-relaxed max-md:text-base">
          Conheça nossos grupos de convivência e serviço.
        </p>
      </section>

      <section className="w-full px-[5%] pb-24 max-md:px-4 scroll-reveal scroll-reveal-stagger">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-[1200px] mx-auto">
          {fila1.map((m, i) => (
            <Card key={i} m={m} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8 max-md:mt-6 ">
          {fila2.map((m, i) => (
            <Card key={i} m={m} />
          ))}
        </div>
      </section>
    </div>
  );
}
