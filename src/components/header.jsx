import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import logoOscuro from '../assets/img/logo-oscuro.jpeg';
import '../styles/header.css'

export default function Header() {
    return (
        <Navbar expand="lg" className="navbar" id='header'>
            <Container>
                <Navbar.Brand className='logoIgreja'>
                    <NavLink to='/'>
                        <img src={logoOscuro} width="40" alt='Comunidade Costa do Sol'/>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-4 align-items-center">
                        <NavLink to="/" className="navlinksHeader">Início</NavLink>
                        <Nav.Link href="#reunioes" className="navlinksHeader">Reuniões</Nav.Link>
                        <Nav.Link href="#ministerios" className="navlinksHeader">Ministérios</Nav.Link>
                        <Nav.Link href="#eventos" className="navlinksHeader">Eventos</Nav.Link>
                        <Nav.Link href="#quemsomos" className="navlinksHeader">Quem somos</Nav.Link>
                        <Nav.Link href="#contato" className="navlinksHeader">Contato</Nav.Link>
                    </Nav>
                    <Button href="#contato" className='rounded-pill px-4 d-flex align-items-center btn-visitenos'>
                        <i className="bi bi-geo-alt-fill me-2"></i> Visite-nos
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
