import UserNav from '../components/UserNav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function User() {
  return (
    <Container className="container-fluid">
      <Row>
        <Col>
          <UserNav/>
        </Col>
        <Col lg={9} className="border-start">
          <h4  className="py-3 text-center" id="top" >
            PANEL DEL USUARIO
          </h4>
          <Row>
            <Col className="border-top">
              <h5 className="py-3">
               Notificaciones
              </h5>
              <h6 className="py-3">Ninguna por el momento</h6>
            </Col>
          </Row>
          <Row>
            <Col className="border-top">
              <h5 className="py-3">
               Citas
              </h5>
              <h6 className="py-3">Sin Citas</h6>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
