import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer id="footer" className="p-5">
        <div className="container md-col-8 d-flex flex-column justify-content-center"></div>
        <div className="p-md-4 d-flex flex-wrap gap-5 justify-content-center">
          <NavLink to="/home" className="nav-link text-white">
            Inicio
          </NavLink>
          <NavLink to="home/#search" className="nav-link text-white">
            Busca tu cita
          </NavLink>
          <a href="home/#features" className="nav-link text-white">
            Caracteristicas
          </a>
          <a href="home/#reviews" className="nav-link text-white">
            Opiniones
          </a>
          <a href="home/#contact" className="nav-link text-white">
            Contacto
          </a>
        </div>
        <div className="p-md-4 d-flex justify-content-center">
          <span className="text-white">
            {' '}
            © 2023 Devteam. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
