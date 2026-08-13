import { useState, useEffect, useCallback } from 'react';
import { BiImages, BiX, BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const fotos = [
  { id: 1, titulo: 'Culto de Domingo', categoria: 'Adoração', imagem: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80&auto=format&fit=crop' },
  { id: 2, titulo: 'Batismo nas águas', categoria: 'Celebração', imagem: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80&auto=format&fit=crop' },
  { id: 3, titulo: 'Encontro de Jovens', categoria: 'Comunhão', imagem: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop' },
  { id: 4, titulo: 'Ação Social', categoria: 'Serviço', imagem: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80&auto=format&fit=crop' },
  { id: 5, titulo: 'Escola Bíblica', categoria: 'Ensino', imagem: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80&auto=format&fit=crop' },
  { id: 6, titulo: 'Culto de Oração', categoria: 'Adoração', imagem: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80&auto=format&fit=crop' },
  { id: 7, titulo: 'Culto de Mulheres', categoria: 'Adoração', imagem: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80&auto=format&fit=crop' },
];

export default function Galeria() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const goNext = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev + 1) % fotos.length : null));
  }, []);

  const goPrev = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev - 1 + fotos.length) % fotos.length : null));
  }, []);

  useEffect(() => {
    const restoreOverflow = () => { document.body.style.overflow = ''; };
    if (lightbox === null) return restoreOverflow;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      restoreOverflow();
    };
  }, [lightbox, goNext, goPrev]);

  return (
    <div className="min-h-screen flex flex-col bg-light relative flex-1">
      <section className="text-center py-24 px-8 bg-light max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4 scroll-reveal">
        <h1 className="text-[2.5rem] text-primary font-medium animate-fade-in-down mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem] max-xl:text-[3rem] xl:text-[3.5rem] 2xl:text-[4.2rem] leading-[1.1]">
          <BiImages className="inline-block text-accent mr-2" /> Momentos que Compartimos
        </h1>
        <p className="text-[1.15rem] text-dark/80 max-w-[600px] mx-auto leading-relaxed max-md:text-base">
          Imagens que retratam a vida da nossa comunidade.
        </p>
      </section>

      <section className="w-full px-[5%] pb-24 max-md:px-4 scroll-reveal scroll-reveal-stagger">
        <div className="grid grid-cols-3 gap-4 max-w-[1100px] mx-auto max-md:grid-cols-2 max-sm:grid-cols-1">
          {fotos.map((foto, i) => (
            <button
              key={foto.id}
              onClick={() => openLightbox(i)}
              className={`scroll-reveal-child group relative overflow-hidden rounded-xl cursor-pointer border-none p-0 transition-all duration-400 hover:-translate-y-1 ${
                i === 0 ? 'row-span-2 col-span-1 max-md:row-span-1' : ''
              } ${i === 3 ? 'col-span-2 max-md:col-span-1' : ''}`}
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(216,198,165,0.25), 0 4px 12px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
              }}
              aria-label={`Ver foto: ${foto.titulo}`}
            >
              <div className={`w-full bg-primary/10 flex items-center justify-center transition-transform duration-400 group-hover:scale-[1.07] overflow-hidden ${
                i === 0 ? 'h-[400px] max-md:h-[200px]' : 'h-[190px] max-md:h-[180px] max-sm:h-[220px]'
              }`}>
                <img src={foto.imagem} alt={foto.titulo} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent  duration-300 flex flex-col justify-end p-5">
                <span className="text-accent text-xs uppercase tracking-widest font-medium mb-1">{foto.categoria}</span>
                <span className="text-white text-lg font-serif">{foto.titulo}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Visualizador de imagens"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-2"
            aria-label="Fechar"
          >
            <BiX size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3 border-none cursor-pointer"
            aria-label="Foto anterior"
          >
            <BiChevronLeft size={28} />
          </button>

          <div className="flex flex-col items-center w-full max-h-[85vh] px-4" onClick={(e) => e.stopPropagation()}>
            <div className="w-full max-w-[600px] aspect-[3/2] max-h-[60vh] bg-primary/20 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
              <img src={fotos[lightbox].imagem} alt={fotos[lightbox].titulo} className="w-full h-full object-cover" />
            </div>
            <span className="text-accent text-xs uppercase tracking-widest font-medium mb-1">{fotos[lightbox].categoria}</span>
            <span className="text-white text-xl font-serif">{fotos[lightbox].titulo}</span>
            <span className="text-white/40 text-sm mt-2">{lightbox + 1} / {fotos.length}</span>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3 border-none cursor-pointer"
            aria-label="Próxima foto"
          >
            <BiChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  )
}
