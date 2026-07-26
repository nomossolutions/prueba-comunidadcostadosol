import { useState, useEffect, useCallback } from 'react';
import { BiImages, BiX, BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const fotos = [
  { id: 1, titulo: 'Culto de Domingo', categoria: 'Adoração', imagem: 'https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/484919690_673052028727333_3353865876891311632_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1349&ctp=s1080x1349&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEDmsb7Im8py_ULfDQ1YjRweaN1Y5UFT255o3VjlQVPbumhHnHMpso3l-NQfUhEYfxtEN4YgXx0bs-fC9zXGMXG&_nc_ohc=SOrEwYTbRccQ7kNvwEOZ960&_nc_oc=AdrfvwjKsPgwohIgWwJyiUyYlHdyuXBMWRPs5TOWoZMrxmoEeTXvZxF7aOWB7Mfwqp8&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=yimmr3sQllj6yCileiBROQ&_nc_ss=7c2a8&oh=00_AQAprrAcOcHjmlJSrpCzIbT9_UG2glmdnkmhGwAac6HL7g&oe=6A6B4D96' },
  { id: 2, titulo: 'Batismo nas águas', categoria: 'Celebração', imagem: 'https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/482961209_670896442276225_3547491968947433195_n.jpg?stp=dst-jpg_tt6&cstp=mx922x1152&ctp=s922x1152&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHpQsGr-MB1Um4pxCIZ76k-rKmP84D14sysqY_zgPXizAc0JLT62S-uJBpHSwRvgj-LyobqH9qaBXxYZC00QSdW&_nc_ohc=jeuESO76Y-4Q7kNvwGqn9SF&_nc_oc=Adr6iEQLQMugywrRbrMV9zDBrTJ8R60GkA_w-3LbEgYl9tp6yZ81M-Y2qBsy6N1izRo&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=abmzwGmT3PLWEkcBOfk0xg&_nc_ss=7c2a8&oh=00_AQAL2Ji3AneC5oYc-aAts_SYtQ5OuuwIcB9d-2QNhFIA3Q&oe=6A6B41DE' },
  { id: 3, titulo: 'Encontro de Jovens', categoria: 'Comunhão', imagem: 'https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/506349090_9974877989256719_4075153039150200353_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1366&ctp=s2048x1366&_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeFQ-miYmBnPa-uo2qsw-ubzjjfKoQGOHKOON8qhAY4coz1uozNi6w2PXhMi_rN8087tVPWmxxSb6uhl33V0vwxT&_nc_ohc=fzg6c3oDG08Q7kNvwHGWw1h&_nc_oc=AdrGvxDCRW35xVi4JZlut7sjIU7JTbgdNqzW8r-lHW-Ffdg4rBw7lMVGlLdsoEo9d4Q&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=20ayyeEmPGle2Ko1HzmVcA&_nc_ss=7c2a8&oh=00_AQASh33hAItUhknq1RNDLlwhyqR8ahN28ui5H7qm0DMj7w&oe=6A6B61B5' },
  { id: 4, titulo: 'Ação Social', categoria: 'Serviço', imagem: 'https://scontent.ftuc1-1.fna.fbcdn.net/v/t39.30808-6/506398654_9983677508376767_9072307602712035109_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1366&ctp=s2048x1366&_nc_cat=108&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeEUX-q86bGzaqvQe4EfDwTSfqTdPkP0sKZ-pN0-Q_SwpnnhJxbvLTTkojP7IHgcAFcNPQWX8zZM7tVx7IYS-Ob6&_nc_ohc=NbCZBghzbrUQ7kNvwHs1fF0&_nc_oc=AdqSp7fRhn5z3eKLbHC8vcYT3V9MCSvtNaPyd81h0JrflGgzNgJRyAcEDqFbMx_B8AU&_nc_zt=23&_nc_ht=scontent.ftuc1-1.fna&_nc_gid=LB61jNQ9XQASrOmeAKfLRA&_nc_ss=7c2a8&oh=00_AQD1MC-xa0t4lXShwcca6Jm1jOH2n7TBuJ1UWV8CRyQEMA&oe=6A6B6D1D' },
  { id: 5, titulo: 'Escola Bíblica', categoria: 'Ensino', imagem: 'https://scontent.ftuc1-1.fna.fbcdn.net/v/t51.75761-15/483860360_18130840939404474_4591197959593430991_n.webp?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHljiVrVNqNFpKK21KLsBDB7ork1SvFrMbuiuTVK8WsxjSnP7zfR8iM3JvcyXybW8YbzqU5MsMIJhM70QxsrgIf&_nc_ohc=NQZTfJncbgUQ7kNvwG_-ivw&_nc_oc=AdoJ80xShMILLUFsXPLjDf3tkUg8cWuGOwYuIC2SBT7ZuzUnoME3A1-wcSpguskcFqo&_nc_zt=23&_nc_ht=scontent.ftuc1-1.fna&_nc_gid=Wqjklrg0ZCUlQAMDMPLqew&_nc_ss=7c2a8&oh=00_AQDWwwt0zu-NP2zTwKNclbyJWggfCWVHuAMFQxDLqkEOyw&oe=6A6B42BA' },
  { id: 6, titulo: 'Culto de Oração', categoria: 'Adoração', imagem: 'https://scontent.ftuc1-2.fna.fbcdn.net/v/t51.75761-15/475415606_18126582805404474_7666583595144816983_n.webp?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGtEdt9Tn3AogB78B1HKVngEF0SVk5lyg4QXRJWTmXKDia3ogE3DiJdIjjjoi_gM_sHNtis5QNTm684B0K7yUG8&_nc_ohc=Yii-zhNQM_EQ7kNvwFLGwRA&_nc_oc=Adp1NV1-t2VsBaOrVjsisZYYrvDZXhZQfoHZgL85VrBsmVvZ7xM38u0RSvNWGpsPjwI&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=huwrpnot_tWN_1u8N6Vsdg&_nc_ss=7c2a8&oh=00_AQAMYGc-UNfx4gva_gsNNi8lTBpGlwjh4pk7kFggv9Owug&oe=6A6B6DCD' },
  { id: 7, titulo: 'Culto de Mulheres', categoria: 'Adoração', imagem: 'https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/482219523_670032762362593_1643137218779470123_n.jpg?stp=dst-jpg_tt6&cstp=mx1259x944&ctp=s1259x944&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFxhuFeL31Da8KtJR927rnx8WYwzPlE_n3xZjDM-UT-fbjzbPL5UyJvUpiuiDKBCoR2HsbJN6UvsejsYs0y5vRS&_nc_ohc=Ds-iVa2MCToQ7kNvwFQolLh&_nc_oc=AdrXuy0zgTWeAbHUqzLWF2unhUz6pQpT29j1riLk2uFtkD1Z6FpB4Q9S8uTwgYYnJFY&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=Vdnwd01zhPufgTbhwcnl4g&_nc_ss=7c2a8&oh=00_AQC6tFT-gU0YVlH_dGE8FAeM3mNxYeVjZlAS9lOuEv_ZlA&oe=6A6B4D08' },
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
    if (lightbox === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, goNext, goPrev]);

  return (
    <div className="min-h-screen flex flex-col bg-light relative flex-1">
      <section className="text-center py-24 px-8 bg-light max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4 scroll-reveal">
        <h1 className="text-[2.5rem] text-primary animate-fade-in-down mb-3 max-md:text-[1.8rem] max-sm:text-[1.5rem] max-xl:text-[3rem] 2xl:text-[3.5rem]">
          <BiImages className="inline-block text-accent mr-2" /> Momentos que Compartimos
        </h1>
        <p className="text-[1.15rem] text-dark max-w-[600px] mx-auto leading-relaxed max-md:text-base">
          Imagens que retratam a vida da nossa comunidade.
        </p>
      </section>

      <section className="w-full px-[5%] pb-24 max-md:px-4 scroll-reveal scroll-reveal-stagger">
        <div className="grid grid-cols-3 gap-4 max-w-[1100px] mx-auto max-md:grid-cols-2 max-sm:grid-cols-1">
          {fotos.map((foto, i) => (
            <button
              key={foto.id}
              onClick={() => openLightbox(i)}
              className={`scroll-reveal-child group relative overflow-hidden rounded-xl cursor-pointer border-none p-0 ${
                i === 0 ? 'row-span-2 col-span-1 max-md:row-span-1' : ''
              } ${i === 3 ? 'col-span-2 max-md:col-span-1' : ''}`}
              aria-label={`Ver foto: ${foto.titulo}`}
            >
              <div className={`w-full bg-primary/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 overflow-hidden ${
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

          <div className="flex flex-col items-center max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <div className="w-[600px] h-[400px] max-w-[90vw] max-h-[60vh] bg-primary/20 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
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
