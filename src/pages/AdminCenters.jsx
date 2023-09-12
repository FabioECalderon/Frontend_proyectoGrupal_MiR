import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AdminNav from '../components/AdminNav';
import SearchCenter from '../components/SearchCenter';
import ListCenters from '../components/ListCenters';
import DetailCenter from '../components/DetailCenter';

export default function AdminCenters() {
  return (
    <Container className="container-fluid">
      <Row>
        <Col>
          <AdminNav />
        </Col>
        <Col lg={9} className="border-start">
          <h2 className="py-3 mb-5" id="top">
            Administración de Centros médicos
          </h2>
          <h4 className="py-3 ">Seleccionar Centro médico</h4>
          <SearchCenter />
          <h4 className="py-3 my-3">Detalle de Centro médico</h4>
          <DetailCenter />
          <h4 className="py-3 my-3">Listado de Centros médicos existentes</h4>
          <ListCenters />
          <a href="#top-nav">Regresar</a>
        </Col>
      </Row>
    </Container>
  );
}
