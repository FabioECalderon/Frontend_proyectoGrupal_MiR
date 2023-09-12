import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AdminNav from '../components/AdminNav';
import SearchUser from '../components/SearchUser';
import DetailUser from '../components/DetailUser';
import ListUsers from '../components/ListUsers';

export default function AdminUsers() {
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
          <h4 className="py-3">Seleccionar Usuario</h4>
          <SearchUser />
          <h4 className="py-3 my-3">Detalle de usuario</h4>
          <DetailUser />
          <h4 className="py-3 my-3">
            Listado de usuarios existentes (1-50 de 1000)
          </h4>
          <ListUsers />
          <a href="#top-nav">Regresar</a>
        </Col>
      </Row>
    </Container>
  );
}
