import { Form, Button } from 'react-bootstrap';
import '../styles/sectionStyles.css';

export default function Contato() {
  return (
    <div className='principalContainer'>
      <section className="intro">
        <h1><i className="bi bi-chat-dots-fill text-secondary me-2"></i> Contato</h1>
      </section>

      <section className="info-group group-contato">
        <div className="card-info card-contato">
          <div className='nossos-dados'>
            <h3><i className="bi bi-info-circle text-secondary me-2"></i> Nossos dados</h3>
            <ul className="list-unstyled" style={{marginTop: '1.5rem'}}>
              <li className="mb-2"><i className="bi bi-geo-alt-fill text-primary me-2"></i> <strong>Direção:</strong> Alameda Campomar, 562</li>
              <li className="mb-2"><i className="bi bi-signpost-fill text-primary me-2"></i> <strong>Bairro:</strong> Cidade Praiana</li>
              <li className="mb-2"><i className="bi bi-building text-primary me-2"></i> <strong>Cidade:</strong> Rio das Ostras</li>
              <li className="mb-2"><i className="bi bi-map-fill text-primary me-2"></i> <strong>Estado:</strong> Rio de Janeiro</li>
              <li className="mb-2"><i className="bi bi-telephone-fill text-primary me-2"></i> <strong>Tel.:</strong> (22) 12345 6789</li>
            </ul>
            <div style={{marginTop: '1.5rem'}}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759.2388902034835!2d-41.97894723046818!3d-22.554873560191517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97b39f7bb61487%3A0x4b48135f1e51fcc7!2sComunidade%20Evang%C3%A9lica%20de%20Costa%20do%20Sol!5e1!3m2!1ses-419!2sbr!4v1768047970761!5m2!1ses-419!2sbr" width="100%" height="250" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{border: 0, borderRadius: '8px'}}></iframe>
            </div>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Nome e Sobrenome</Form.Label>
              <Form.Control placeholder="João Silva" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="joao@exemplo.com" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Escreva sua mensagem aqui..." />
            </Form.Group>
            <Button className='rounded-pill px-4' type="submit" style={{width: '100%'}}>
              Enviar Mensagem
            </Button>
          </Form>
        </div>

      </section>
    </div>
  )
}
