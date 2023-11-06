import UserNav from '../components/UserNav';
import Container from 'react-bootstrap/Container';
import { Col, Row, Card, Button, CardGroup, Alert } from 'react-bootstrap';

import { useContext } from 'react';
import UserContext from '../containers/UserContext';
import RedirectionButton from '../components/ButtonPay';
import { createAppointment } from '../api/appointments';

export default function ConfirmAppointment() {
  const { user } = useContext(UserContext);

  const json = localStorage.getItem('appointmentData');
  const selectedData = JSON.parse(json);

  async function handleReserve() {
    try {
      const payload = {
        userId: '',
        appointmentDate: '',
        status: 'Reserved',
      };
      payload.centerId = selectedData.centerId;
      payload.doctorId = selectedData.id;
      payload.userId = user.id;
      const fullDate = `${selectedData.date}T${selectedData.time}:00.000Z`;
      payload.appointmentDate = fullDate;
      // console.log(payload);

      const response = await createAppointment(payload);
      // eslint-disable-next-line no-unused-vars
      const resp = response.data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section id="personalData" className="p-5">
      <Container className="container-fluid">
        <Row>
          <Col>{user ? <UserNav /> : null}</Col>
          <Col lg={9} className="border-start">
            <h4 className="py-3 text-center" id="top">
              CONFIRMA LOS DATOS DE TU CITA
            </h4>
            <Row className="mb-5">
              <Col
                style={{ width: '20rem' }}
                className="p-2 d-flex flex-column align-items-center"
              >
                <Card.Body className="p-1">
                  <Card.Title className="mb-5">DATOS DEL USUARIO</Card.Title>
                  {user ? (
                    <>
                      <Card.Text className="fs-6">
                        {' '}
                        Nombre del paciente:{' '}
                      </Card.Text>
                      <Card.Text className="fs-5">{user.fullName}</Card.Text>
                      <Card.Text className="fs-6">
                        {' '}
                        Correo electrónico:{' '}
                      </Card.Text>

                      <Card.Text className="fs-5">{user.email}</Card.Text>
                    </>
                  ) : (
                    <Alert variant="danger">
                      {' '}
                      Debes iniciar sesión para poder reservar o pagar tu cita
                    </Alert>
                  )}
                </Card.Body>
              </Col>

              <Col
                style={{ width: '20rem' }}
                className="p-2 d-flex flex-column align-items-center"
              >
                <Card.Body className="p-1">
                  <Card.Title className="mb-5">DATOS DE LA CITA</Card.Title>
                  <Card.Text className="fs-5">
                    {selectedData.specialty}
                  </Card.Text>
                  <Card.Text className="fs-5">
                    Dr {selectedData.fullName}
                  </Card.Text>
                  <Card.Text className="fs-6"> Fecha y hora: </Card.Text>
                  <Card.Text className="fs-5">
                    {selectedData.date} - {selectedData.time}
                  </Card.Text>
                  <Card.Text className="fs-6"> Ubicación: </Card.Text>
                  <Card.Text className="p-0 m-0 fs-5">
                    {selectedData.center}
                  </Card.Text>
                  <Card.Text className="p-0 fs-6">
                    {selectedData.city ?? null} - {selectedData.address ?? null}
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
            <CardGroup className="d-flex align-items-center justify-content-center gap-5">
              <Button
                type="submit"
                onClick={handleReserve}
                className={
                  user ? 'mb-5 text-white' : 'mb-5 text-white disabled'
                }
              >
                Reservar cita
              </Button>
              {user ? <RedirectionButton /> : null}
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
