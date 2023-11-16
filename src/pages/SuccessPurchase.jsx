import UserNav from '../components/UserNav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useContext, useState, useEffect } from 'react';
import UserContext from '../containers/UserContext';
import { sendConfirmation } from '../api/sendemail';
import {} from 'react';
import { updateAppointment } from '../api/appointments';

export default function SuccessPurchase() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState();

  async function handleConfirmationEmail() {
    try {
      console.log(user);
      const response = await sendConfirmation(user.email);
      console.log(user);
      setData(response.data);
      console.log(data);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }

  async function handleConfirmAppointmentStatus() {
    try {
      const payload = {};
      payload.status = 'Confirmed';
      const json = localStorage.getItem('reservedAppointment');
      const id = JSON.parse(json);
      updateAppointment({ id, payload });
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }

  useEffect(() => {
    handleConfirmationEmail();
    handleConfirmAppointmentStatus();
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
              <h4 className="py-3">Tu cita fue pagada con exito </h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
