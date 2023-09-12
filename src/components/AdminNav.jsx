import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export default function AdminNav() {
  return (
    <nav className="mb-4">
      <Nav className="flex-column fs-5 gap-2 align-items-start">
        <NavLink to="/admin" className="nav-link">
          Bienvenido Administrador
        </NavLink>
        <NavLink to="/admin/centers" className="nav-link">
          Centros médicos
        </NavLink>
        <NavLink to="/admin/specialties" className="nav-link">
          Especialidades
        </NavLink>
        <NavLink to="/admin/medics" className="nav-link">
          Especialistas
        </NavLink>
        <NavLink to="/admin/users" className="nav-link">
          Usuarios
        </NavLink>
      </Nav>
    </nav>
  );
}
