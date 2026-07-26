import { BiLogoYoutube, BiLogoInstagram, BiLogoFacebookCircle, BiMapPin, BiTimeFive, BiPhone } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

export default function FooterComponent() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#203246] text-white py-16 px-4 max-md:py-10 max-md:px-4 max-sm:py-8 max-sm:px-3">
      <div className="max-w-[1200px] mx-auto 2xl:max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          <div>
            <h3 className="text-lg font-normal text-accent mb-4">Comunidade Costa do Sol</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Uma comunidade que caminha junta, cuidando de pessoas e fortalecendo a fé.
            </p>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@comunidadecostadosol8122" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <BiLogoYoutube className="text-2xl text-white/60 transition-colors duration-300 hover:text-accent" />
              </a>
              <a href="https://www.instagram.com/comunidadedecostadosol/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <BiLogoInstagram className="text-2xl text-white/60 transition-colors duration-300 hover:text-accent" />
              </a>
              <a href="https://www.facebook.com/comunidadecostadosol" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <BiLogoFacebookCircle className="text-2xl text-white/60 transition-colors duration-300 hover:text-accent" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-normal text-accent mb-4">Navegação</h3>
            <ul className="space-y-2.5">
              <li><NavLink to="/" className="text-white/70 text-sm transition-colors duration-300 hover:text-accent">Início</NavLink></li>
              <li><a href="#reunioes" className="text-white/70 text-sm transition-colors duration-300 hover:text-accent">Reuniões</a></li>
              <li><a href="#ministerios" className="text-white/70 text-sm transition-colors duration-300 hover:text-accent">Ministérios</a></li>
              <li><a href="#eventos" className="text-white/70 text-sm transition-colors duration-300 hover:text-accent">Eventos</a></li>
              <li><a href="#galeria" className="text-white/70 text-sm transition-colors duration-300 hover:text-accent">Galeria</a></li>
              <li><a href="#quemsomos" className="text-white/70 text-sm transition-colors duration-300 hover:text-accent">Quem somos</a></li>
              <li><a href="#contato" className="text-white/70 text-sm transition-colors duration-300 hover:text-accent">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-normal text-accent mb-4">Informações</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <BiMapPin className="text-accent shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">Alameda Campomar, 562 — Cidade Praiana<br />Rio das Ostras, RJ</span>
              </li>
              <li className="flex items-start gap-3">
                <BiTimeFive className="text-accent shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">Domingos — 19:00 hs.</span>
              </li>
              <li className="flex items-start gap-3">
                <BiPhone className="text-accent shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">(22) 12345 6789</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center">
          <p className="text-white/50 text-xs">&copy; {year} Comunidade Costa do Sol. Todos os direitos reservados.</p>
          <p className="text-white/30 text-xs mt-2">Desenvolvido por <a href="https://www.nomosdigital.com.ar" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-accent transition-colors duration-300 underline underline-offset-2">Nomos Digital</a></p>
        </div>
      </div>
    </footer>
  )
}