import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import UserContext from '../containers/UserContext';
import { useNavigate } from 'react-router-dom';
import { clearSession } from '../api/session';

export default function MainNav() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  function LogOut() {
    setTimeout(() => {
      setUser(null);
      clearSession();
      navigate('/home');
    }, 100);
  }

  return (
    <nav>
      <Navbar expand="lg" id="top-nav" className="py-3">
        <Container className="md-col-8">
          <Navbar.Brand href="" className="fs-3">
            @ Consultorio Virtual
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto fs-5 d-flex gap-3">
              <NavLink to="/home" className="me-auto nav-link">
                Inicio
              </NavLink>
              <NavLink to="/faqs" className="nav-link">
                Preguntas Frecuentes
              </NavLink>
              <NavDropdown
                title={
                  user ? (
                    <span> Hola, {user.fullName} </span>
                  ) : (
                    'Zona de usuario'
                  )
                }
                id="main-nav-dropdown"
              >
                {user && (
                  <img
                    src={
                      user.photo ??
                      'https://res.cloudinary.com/di4otf7td/image/upload/v1700128069/Assets/User-Profile_xcnjmy.png'
                    }
                    className="rounded-circle mx-5 p-3"
                    style={{ width: '160px' }}
                  />
                )}
                {!user && (
                  <>
                    <NavLink to="/login" className="dropdown-item">
                      Iniciar sesión
                    </NavLink>
                    <Nav.Link className="ms-2" disabled>
                      Configurar cuenta
                    </Nav.Link>
                  </>
                )}
                {user && (
                  <>
                    <NavLink to="/user" className="dropdown-item">
                      Zona de usuario
                    </NavLink>
                    <NavLink to="/user/config" className="dropdown-item">
                      Actualizar cuenta
                    </NavLink>
                    <NavLink to="/user/citas" className="dropdown-item">
                      Mis citas
                    </NavLink>
                    {user && user.userType === 'admin' && (
                      <>
                        <NavDropdown.Divider />
                        <NavLink
                          to="/admin"
                          className="dropdown-item"
                          {...(user ? '' : 'disabled')}
                        >
                          Zona de Administrador
                        </NavLink>
                      </>
                    )}
                  </>
                )}
                <NavDropdown.Divider />
                <NavLink onClick={LogOut} className="dropdown-item">
                  Cerrar sesión
                </NavLink>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
