import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AdminNav from '../components/AdminNav';

export default function Admin() {
  return (
    <Container className="container-fluid">
      <Row>
        <Col>
          <AdminNav />
        </Col>
        <Col lg={9} className="border-start">
          <h4 className="py-3" id="top">
            Notificaciones
          </h4>
          <h6 className="py-3">Ninguna por el momento</h6>
        </Col>
      </Row>
    </Container>
  );
}
