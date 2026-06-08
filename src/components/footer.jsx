import '../styles/footerStyles.css';

export default function FooterComponent() {
  return (
    <footer>
      <div className="footer-contenido">
        <ul className="redes">
          <li>
            <a href="https://www.youtube.com/@comunidadecostadosol8122" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-youtube fs-2 mb-2"></i>
              <span className="social-label">YouTube</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/comunidadedecostadosol/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram fs-2 mb-2"></i>
              <span className="social-label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/comunidadecostadosol" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook fs-2 mb-2"></i>
              <span className="social-label">Facebook</span>
            </a>
          </li>
        </ul>
        <p>&copy; 2025 Comunidade Costa do Sol. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
