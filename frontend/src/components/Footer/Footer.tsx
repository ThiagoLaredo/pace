import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const services = [
    { label: 'Fisioterapia', to: '/servicos' },
    { label: 'Pace Sports', to: '/servicos' },
    { label: 'Prevencao de lesoes', to: '/servicos' },
    { label: 'Recovery', to: '/servicos' },
    { label: 'Fisioterapia Domiciliar', to: '/servicos' },
    { label: 'Locacao de equipamentos', to: '/servicos' },
  ];

  const units = [
    { label: 'Jardins', to: '/unidades' },
    { label: 'Vila Mariana', to: '/unidades' },
    { label: 'Butanta', to: '/unidades' },
    { label: 'Clube Athletico Paulistano', to: '/unidades' },
  ];

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__col footer__brand">
          <Link to="/" className="footer__logo" aria-label="Voltar para inicio">
            <img
              src="/images/Logo-pace-verde.svg"
              alt="Clinica Pace"
              className="footer__logo-image"
            />
          </Link>
          <p className="footer__text">
            Somos mais do que uma clinica de fisioterapia, somos a soma de diferentes areas da
            ciencia esportiva com equipe multidisciplinar. Acreditamos que cuidar das pessoas,
            e muito mais do que apenas reabilita-las.
          </p>
          <div className="footer__social" aria-label="Redes sociais">
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M13.5 8H16V5h-2.5A3.5 3.5 0 0 0 10 8.5V11H8v3h2v5h3v-5h2.5l.5-3H13V8.5c0-.3.2-.5.5-.5Z" />
              </svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm10.5 1.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
              </svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="YouTube">
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M21.6 7.2a2.9 2.9 0 0 0-2.1-2C17.7 4.7 12 4.7 12 4.7s-5.7 0-7.5.5a2.9 2.9 0 0 0-2.1 2A30 30 0 0 0 2 12a30 30 0 0 0 .4 4.8 2.9 2.9 0 0 0 2.1 2c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a2.9 2.9 0 0 0 2.1-2A30 30 0 0 0 22 12a30 30 0 0 0-.4-4.8ZM10 15.5v-7L16 12l-6 3.5Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__col footer__services">
          <h3 className="footer__title">Servicos</h3>
          <ul className="footer__list">
            {services.map((service) => (
              <li key={service.label}>
                <Link to={service.to} className="footer__link">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Unidades</h3>
          <ul className="footer__list">
            {units.map((unit) => (
              <li key={unit.label}>
                <Link to={unit.to} className="footer__link">
                  {unit.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {year} Clínica Pace. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
