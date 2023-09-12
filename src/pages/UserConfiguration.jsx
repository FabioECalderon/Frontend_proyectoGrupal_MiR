import UserNav from '../components/UserNav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function UserConfiguration() {
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
        </Col>
      </Row>
    </Container>
  )
}
