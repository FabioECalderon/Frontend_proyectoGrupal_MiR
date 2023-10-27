import { Col, Container, Row } from 'react-bootstrap';
import UserNav from '../components/UserNav';

export default function Appointments() {
  return (
    <>
      <Container className="container-fluid">
        <Row>
          <Col>
            <UserNav />
          </Col>
          <Col lg={9} className="border-start">
            <h4 className="py-3 text-center" id="top">
              PANEL DE USUARIO
            </h4>
            <h5> Citas</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}
