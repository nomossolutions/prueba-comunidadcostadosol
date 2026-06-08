import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import '../styles/inicio.css'
import logoOscuro from '../assets/img/logo-oscuro.jpeg'
import Reunioes from '../components/reunioes'
import Ministerios from '../components/ministerios'
import Eventos from '../components/eventos'
import QuemSomos from '../components/quemsomos'
import Contato from '../components/contato'


export default function InicioPage() {
  return (
    <div className='principalContainer'>
      <section className="hero-section d-flex align-items-center">
        <Container>
          <Row className="containerMain align-items-center">
            <Col md={6} className='textContainer'>
              <h1 className="mb-3">
                Um lugar para <span className="text-primary">pertencer</span>
              </h1>

              <p className="lead mb-4">
                Somos uma comunidade que caminha junta, cuidando de pessoas
                e fortalecendo a fé.
              </p>

              <div className="d-flex gap-3">
                <Button href='#reunioes' className="rounded-pill px-4">
                  Horários dos cultos
                </Button>

                <Button href='#quemsomos' className="rounded-pill px-4">
                  Conheça a comunidade
                </Button>
              </div>
            </Col>

            <Col md={6} className='imgContainer'>
              {/* Imagen opcional o ilustración */}
              <img src={logoOscuro} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section id='reunioes'>
        <Reunioes />
      </section>
      <section id='ministerios'>
        <Ministerios />
      </section>
      <section id='eventos'>
        <Eventos />
      </section>
      <section id='quemsomos'>
        <QuemSomos />
      </section>
      <section id='contato'>
        <Contato />
      </section>
      <div 
        className='btnTop' 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ cursor: 'pointer' }}
        title="Voltar ao topo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-up-circle-fill" id='flechaTop' viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
        </svg>
      </div>
    </div>
  )
}
