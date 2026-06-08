import '../styles/sectionStyles.css';

export default function QuemSomos() {
  return (
    <div className='principalContainer'>
      <section className="intro">
        <h1><i className="bi bi-people-fill text-secondary me-2"></i> Quem Somos</h1>
      </section>

      <section className="info-group">
        <div className="card-info card-quemsomos">
          <div className='imgHorizontal'></div>
          <p>Somos uma comunidade cristã que acredita em relacionamentos verdadeiros, cuidado mútuo e crescimento espiritual.
              Caminhamos juntos, acolhendo pessoas em cada fase da vida, com amor, fé e propósito.</p>
        </div>
      </section>
      
      <section className="info-group">
        <div className="card-info card-missaovisaovalores text-center">
          <i className="bi bi-eye-fill fs-1 text-secondary mb-2 d-block"></i>
          <h2>Visão</h2>
          <p>Ser uma comunidade que reflete o amor de Cristo, impactando vidas e transformando realidades.</p>
        </div>
        <div className="card-info card-missaovisaovalores text-center">
          <i className="bi bi-bullseye fs-1 text-secondary mb-2 d-block"></i>
          <h2>Missão</h2>
          <p>Amar a Deus, cuidar de pessoas e formar discípulos através de relacionamentos e serviço.</p>
        </div>
        <div className="card-info card-missaovisaovalores text-center">
          <i className="bi bi-heart-fill fs-1 text-secondary mb-2 d-block"></i>
          <h2>Valores</h2>
          <ul className="list-unstyled">
            <li>Amor</li>
            <li>Fé</li>
            <li>Comunhão</li>
            <li>Serviço</li>
            <li>Integridade</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
