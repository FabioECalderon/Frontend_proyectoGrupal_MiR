import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AdminNav from '../components/AdminNav';
import SearchMedic from '../components/SearchSpecialty';
import ListMedics from '../components/ListMedics';
import DetailMedic from '../components/DetailMedic';

export default function AdminMedics() {
  return (
    <Container className="container-fluid">
      <Row>
        <Col>
          <AdminNav />
        </Col>
        <Col lg={9} className="border-start">
          <h2 className="py-3 mb-5" id="top">
            Administración de Especialistas disponibles
          </h2>
          <h4 className="py-3">Seleccionar Especialistas</h4>
          <SearchMedic />
          <h4 className="py-3 my-3">Detalle de Especialista</h4>
          <DetailMedic />
          <h4 className="py-3 my-3">Listado de especialistas disponibles</h4>
          <ListMedics />
          <a href="#top-nav">Regresar</a>
        </Col>
      </Row>
    </Container>
  );
}
