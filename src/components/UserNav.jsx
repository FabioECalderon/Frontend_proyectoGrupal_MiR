import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export default function UserNav() {
  return (
    <nav className="mb-4">
      <Nav className="flex-column fs-5 gap-2 align-items-start">
        <NavLink to="/user" className="nav-link">
          Bienvenido Usuario
        </NavLink>
        <NavLink to="/user/citas" className="nav-link">
          Mis citas
        </NavLink>
        <NavLink to="/user/savedspecialists" className="nav-link">
          Especialistas Guardados
        </NavLink>
        <NavLink to="/user/faqs" className="nav-link">
          Preguntas frecuentes FAQS
        </NavLink>
        <NavLink to="/user/configuration" className="nav-link">
          Configuración de la cuenta
        </NavLink>
      </Nav>
    </nav>
  );
}
