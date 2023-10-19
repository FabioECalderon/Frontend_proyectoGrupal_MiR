import UserNav from '../components/UserNav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useContext, useState, useEffect } from 'react';
import UserContext from '../containers/UserContext';
import { sendConfirmation } from '../api/sendemail';
import {} from 'react';

export default function SuccessPurchase() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState();
  const [error, setError] = useState();

  async function handleConfirmationEmail() {
    try {
      const response = await sendConfirmation(user.email);
      setData(response);
    } catch (error) {
      setError(error);
    }
  }

  console.log(data);
  console.log(error);
  console.log(user);

  useEffect(() => {
    handleConfirmationEmail();
  }, []);

  return (
    <Container className="container-fluid">
      <Row>
        <Col>
          <UserNav />
        </Col>
        <Col lg={9} className="border-start">
          <h4 className="py-3 text-center" id="top">
            PANEL DEL USUARIO
          </h4>
          <Row>
            <Col className="border-top">
              <h5 className="py-3">Notificaciones</h5>
              <h1 className="py-3">Tu cita fue pagada con exito </h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
