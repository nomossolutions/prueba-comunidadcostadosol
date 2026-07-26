import { BiChat, BiInfoCircle, BiMapPin, BiDirections, BiBuilding, BiMap, BiPhone, BiEnvelope } from 'react-icons/bi';

export default function Contato() {
  return (
    <div className="min-h-screen flex flex-col bg-light relative flex-1">
      <section className="text-center py-24 px-8 bg-light max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4 scroll-reveal">
        <h1 className="text-[2.5rem] text-primary animate-fade-in-down mb-3 max-md:text-[1.8rem] max-sm:text-[1.5rem] max-xl:text-[3rem] 2xl:text-[3.5rem]">
          <BiChat className="inline-block text-accent mr-2" /> Contato
        </h1>
        <p className="text-[1.15rem] text-dark max-w-[600px] mx-auto leading-relaxed max-md:text-base">
          Gostaría de nos conhecer melhor? Estamos aqui para você.
        </p>
      </section>

      <section className="w-full flex justify-center flex-wrap gap-8 px-[5%] bg-light max-md:px-4 max-md:gap-6 scroll-reveal">
        <div className="w-full max-w-full flex flex-row items-stretch gap-8 bg-transparent max-md:flex-col">
          <div className="flex-1 bg-white p-8 rounded-xl shadow-sm max-md:p-6 max-sm:p-4">
            <h3 className="text-lg font-normal text-primary mb-6">
              <BiInfoCircle className="inline-block text-accent mr-2" /> Nossos dados
            </h3>
            <ul>
              <li className="mb-3 flex items-start list-none">
                <BiMapPin className="text-accent mr-3 shrink-0 mt-1" />
                <span><strong className="text-primary">Endereço:</strong> Alameda Campomar, 562</span>
              </li>
              <li className="mb-3 flex items-start list-none">
                <BiDirections className="text-accent mr-3 shrink-0 mt-1" />
                <span><strong className="text-primary">Bairro:</strong> Cidade Praiana</span>
              </li>
              <li className="mb-3 flex items-start list-none">
                <BiBuilding className="text-accent mr-3 shrink-0 mt-1" />
                <span><strong className="text-primary">Cidade:</strong> Rio das Ostras, RJ</span>
              </li>
              <li className="mb-3 flex items-start list-none">
                <BiPhone className="text-accent mr-3 shrink-0 mt-1" />
                <span><strong className="text-primary">Tel.:</strong> (22) 12345 6789</span>
              </li>
              <li className="mb-3 flex items-start list-none">
                <BiEnvelope className="text-accent mr-3 shrink-0 mt-1" />
                <span><strong className="text-primary">E-mail:</strong> contato@comunidadecostadosol.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759.2388902034835!2d-41.97894723046818!3d-22.554873560191517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97b39f7bb61487%3A0x4b48135f1e51fcc7!2sComunidade%20Evang%C3%A9lica%20de%20Costa%20do%20Sol!5e1!3m2!1ses-419!2sbr!4v1768047970761!5m2!1ses-419!2sbr" width="100%" height="250" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{border: 0, borderRadius: '8px'}} title="Localização da Comunidade Costa do Sol no Google Maps"></iframe>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada com sucesso!'); e.target.reset(); }} className="flex-1 bg-white p-8 rounded-xl shadow-sm max-md:p-6 max-sm:p-4">
            <div className="mb-4">
              <label htmlFor="formGroupName" className="block mb-1.5 font-medium text-dark text-sm">Nome e Sobrenome</label>
              <input
                id="formGroupName"
                type="text"
                required
                placeholder="João Silva"
                className="w-full px-4 py-2.5 border border-[rgba(0,0,0,0.1)] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition bg-[#FAFAF8]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="formGroupEmail" className="block mb-1.5 font-medium text-dark text-sm">E-mail</label>
              <input
                id="formGroupEmail"
                type="email"
                required
                placeholder="joao@exemplo.com"
                className="w-full px-4 py-2.5 border border-[rgba(0,0,0,0.1)] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition bg-[#FAFAF8]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="formMensagem" className="block mb-1.5 font-medium text-dark text-sm">Mensagem</label>
              <textarea
                id="formMensagem"
                rows={5}
                required
                placeholder="Escreva sua mensagem aqui..."
                className="w-full px-4 py-2.5 border border-[rgba(0,0,0,0.1)] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-vertical bg-[#FAFAF8]"
              />
            </div>
            <button type="submit" className="rounded-full px-8 py-3 font-medium text-base bg-primary text-white shadow-[0_2px_4px_-1px_rgba(32,50,70,0.15)] transition-all duration-300 inline-block text-center w-full cursor-pointer hover:bg-primaryLight hover:shadow-[0_4px_8px_-2px_rgba(42,74,110,0.2)] hover:-translate-y-px">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}