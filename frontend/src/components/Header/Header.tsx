import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/unidades', label: 'Unidades' },
  { to: '/equipe', label: 'Equipe' },
  { to: '/contato', label: 'Contato' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${menuOpen ? ' header--menu-open' : ''}`}>
      <div className="header__inner container">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <img
            src="/images/Logo-pace-verde.svg"
            alt="Clínica Pace"
            className="header__logo-image"
          />
          <span className="header__logo-text">Clínica Pace</span>
        </Link>

        <nav
          id="primary-navigation"
          className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}
          aria-label="Navegação principal"
        >
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.to} className="header__nav-item">
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `header__nav-link${isActive ? ' header__nav-link--active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/contato"
            className="header__cta"
            onClick={closeMenu}
          >
            Agendar consulta
          </Link>
        </nav>

        <button
          type="button"
          className="header__menu-toggle"
          onClick={toggleMenu}
          data-open={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className="header__hamburger" data-open={menuOpen}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Overlay para fechar ao clicar fora */}
      {menuOpen && (
        <div
          className="header__overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
