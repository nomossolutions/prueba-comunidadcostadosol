import React from 'react';
import '../styles/sectionStyles.css';

export default function Ministerios() {
  return (
    <div className='principalContainer'>
      <section className="intro">
        <h1><i className="bi bi-people text-secondary me-2"></i> Ministérios</h1>
        <p className="text-muted mt-2">Conheça nossos grupos de convivência e serviço.</p>
      </section>

      <section className="info-group">
        <div className="card-info text-center">
          <i className="bi bi-gender-female fs-1 text-secondary mb-2 d-block"></i>
          <h2>Mulheres</h2>
          <p>Encontros quinzenais para compartilhar experiências, edificar a fé e fortalecer os laços de amizade entre mulheres cristãs.</p>
        </div>
        <div className="card-info text-center">
          <i className="bi bi-balloon fs-1 text-secondary mb-2 d-block"></i>
          <h2>Crianças</h2>
          <p>Um espaço seguro e divertido onde as crianças aprendem princípios bíblicos através de histórias, músicas e atividades lúdicas.</p>
        </div>
        <div className="card-info text-center">
          <i className="bi bi-lightning-charge fs-1 text-secondary mb-2 d-block"></i>
          <h2>Jovens</h2>
          <p>Reuniões dinâmicas com louvor, estudos bíblicos aplicados à realidade jovem e momentos de comunhão autêntica.</p>
        </div>
        <div className="card-info text-center">
          <i className="bi bi-heart-half fs-1 text-secondary mb-2 d-block"></i>
          <h2>Casais</h2>
          <p>Investindo em casamentos sólidos com princípios bíblicos, encontros de casais e aconselhamento familiar.</p>
        </div>
        <div className="card-info text-center">
          <i className="bi bi-box2-heart fs-1 text-secondary mb-2 d-block"></i>
          <h2>Social</h2>
          <p>Servindo a nossa comunidade local através de ações solidárias, distribuição de alimentos e apoio às famílias necessitadas.</p>
        </div>
      </section>
    </div>
  )
}
