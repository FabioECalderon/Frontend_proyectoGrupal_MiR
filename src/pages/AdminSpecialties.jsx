import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AdminNav from '../components/AdminNav';
import SearchSpecialty from '../components/SearchSpecialty';
import DetailSpecialty from '../components/DetailSpecialty';
import ListSpecialties from '../components/ListSpecialties';

export default function AdminSpecialties() {
  return (
    <Container className="container-fluid">
      <Row>
        <Col>
          <AdminNav />
        </Col>
        <Col lg={9} className="border-start">
          <h2 className="py-3 mb-5" id="top">
            Administración de Especialidades disponibles
          </h2>
          <h4 className="py-3">Seleccionar Especialidad</h4>
          <SearchSpecialty />
          <h4 className="py-3 my-3">Detalle de Especialidad</h4>
          <DetailSpecialty />
          <h4 className="py-3 my-3">Listado de Especialidades existentes</h4>
          <ListSpecialties />
          <a href="#top-nav">Regresar</a>
        </Col>
      </Row>
    </Container>
  );
}
