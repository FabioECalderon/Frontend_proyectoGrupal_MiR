import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AdminNav from '../components/AdminNav';
import SearchUser from '../components/SearchUser';
import CreateUser from '../components/CreateUser';
import ListUsers from '../components/ListUsers';
import { signUp } from '../api/users';
import { useState } from 'react';
import { createLocation } from '../api/locations';

export default function AdminUsers() {
  const [location, setLocation] = useState();

  async function handleCreateLocation(payload) {
    try {
      const response = await createLocation(payload);
      setLocation(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCreateUser(payload) {
    try {
      const response = await signUp(payload);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container className="container-fluid">
      <Row>
        <Col>
          <AdminNav />
        </Col>
        <Col lg={9} className="border-start">
          <h2 className="py-3 mb-5" id="top">
            Administración de Usuarios
          </h2>
          {/* <h4 className="py-3">Seleccionar Usuario</h4>
          <SearchUser /> */}
          <h4 className="py-3 my-3">Detalle de usuario</h4>
          <CreateUser
            handleCreateUser={handleCreateUser}
            handleCreateLocation={handleCreateLocation}
            location={location}
          />
          {/* <h4 className="py-3 my-3">
            Listado de usuarios existentes (1-50 de 1000)
          </h4>
          <ListUsers /> */}
          <a href="#top-nav">Regresar</a>
        </Col>
      </Row>
    </Container>
  );
}
