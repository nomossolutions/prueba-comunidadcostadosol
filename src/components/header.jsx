import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiMapPin, BiMenu, BiX } from "react-icons/bi";
import logoClaro from "../assets/img/logo-claro.jpeg";
import useActiveSection from "../hooks/useActiveSection";

const navLinks = [
  { to: "#reunioes", label: "Reuniões" },
  { to: "#ministerios", label: "Ministérios" },
  { to: "#eventos", label: "Eventos" },
  { to: "#galeria", label: "Galeria" },
  { to: "#quemsomos", label: "Quem somos" },
  { to: "#equipopastoral", label: "Equipe" },
  { to: "#doacao", label: "Doação" },
  { to: "#contato", label: "Contato" },
];

const sectionIds = navLinks.map((l) => l.to.replace("#", ""));

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
      aria-label="Navegação principal"
    >
      <div className="max-w-[1200px] flex flex-wrap items-center justify-between mx-auto p-4 md:gap-6">
        <NavLink
          to="/"
          className="flex items-center space-x-3 shrink-0 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-lg"
          onClick={closeMenu}
          aria-label="Página inicial"
        >
          <img
            src={logoClaro}
            alt="Comunidade Costa do Sol"
            className="h-10 rounded-lg hover:scale-105 transition-transform duration-300"
          />
          <span
            className={`self-center text-lg font-semibold whitespace-nowrap transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Costa do Sol
          </span>
        </NavLink>

        <div className="flex items-center gap-2 md:order-2">
          <a
            href="#contato"
            className="hidden md:inline-flex rounded-full px-4 py-2 font-medium text-sm whitespace-nowrap transition-all duration-300 items-center bg-accent text-primary hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            onClick={closeMenu}
          >
            <BiMapPin className="mr-1.5" /> Visite-nos
          </a>

          <button
            className={`inline-flex items-center justify-center w-11 h-11 text-sm rounded-lg md:hidden transition-colors duration-300 ${
              scrolled
                ? "text-dark hover:bg-black/5"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="navbar-mobile"
          >
            {menuOpen ? <BiX size={24} /> : <BiMenu size={24} />}
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 overflow-hidden md:overflow-visible transition-[max-height,opacity] duration-300 ease-in-out ${
            menuOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
          }`}
          id="navbar-mobile"
        >
          <ul
            className={`flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:mt-0 md:border-0 gap-1 max-w-[480px] md:max-w-none mx-auto md:mx-0 transition-colors duration-300 ${
              scrolled
                ? "border-black/[0.04] bg-white md:bg-transparent"
                : "border-white/10 bg-primary/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none"
            }`}
          >
            {navLinks.map((link) => {
              const id = link.to.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.to}>
                  <a
                    href={link.to}
                    className={`relative block py-3 px-3 rounded-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                      scrolled
                        ? isActive
                          ? "text-accent-dark font-medium"
                          : "text-dark hover:bg-black/5 hover:text-accent-dark md:hover:bg-transparent"
                        : isActive
                          ? "text-accent font-medium"
                          : "text-white hover:bg-white/10 hover:text-accent md:hover:bg-transparent"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full md:block hidden ${scrolled ? "bg-accent-dark" : "bg-accent"}`}
                      />
                    )}
                  </a>
                </li>
              );
            })}
            <li className="md:hidden mt-2">
              <a
                href="#contato"
                className="rounded-full px-4 py-2 font-medium text-sm whitespace-nowrap transition-all duration-300 inline-flex items-center bg-accent text-primary hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                onClick={closeMenu}
              >
                <BiMapPin className="mr-1.5" /> Visite-nos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
