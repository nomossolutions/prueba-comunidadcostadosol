import '../styles/sectionStyles.css';

export default function Reunioes() {
  return (
    <div className='principalContainer'>
      <section className="intro">
        <h1><i className="bi bi-calendar-event text-secondary me-2"></i> Nossas Reuniões</h1>
      </section>

      <section className="info-group">
        <div className="card-info text-center">
          <h2><i className="bi bi-clock-history me-2 text-secondary"></i> Culto de Celebração</h2>
          <p className="fs-5">Domingos 19:00 hs.</p>
          <div className="mt-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759.2388902034835!2d-41.97894723046818!3d-22.554873560191517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97b39f7bb61487%3A0x4b48135f1e51fcc7!2sComunidade%20Evang%C3%A9lica%20de%20Costa%20do%20Sol!5e1!3m2!1ses-419!2sbr!4v1768047970761!5m2!1ses-419!2sbr" width="100%" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{border: 0, borderRadius: '8px'}}></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
