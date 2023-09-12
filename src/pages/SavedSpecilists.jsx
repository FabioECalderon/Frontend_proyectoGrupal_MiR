import UserNav from '../components/UserNav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function SavedSpecilists() {
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
              Especialistas Guardados
            </h5>
            <h6 className="py-3">Aún no hay Especialistas guardados</h6>
          </Col>
        </Row>
        </Col>
      </Row>
    </Container>
  )
}
