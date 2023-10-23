import UserNav from '../components/UserNav';
import Container from 'react-bootstrap/Container';
import { Col, Row, Card } from 'react-bootstrap';

import { useContext } from 'react';
import UserContext from '../containers/UserContext';
// import RedirectionButton from './ButtonPay';

export default function ConfirmAppointment() {
  const { user } = useContext(UserContext);
  return (
    <Container className="container-fluid">
      <Row>
        <Col>{user ? <UserNav /> : null}</Col>
        <Col lg={9} className="border-start">
          <h4 className="py-3 text-center" id="top">
            CONFIRMA TU CITA
          </h4>
          <Row>
            <Col></Col>

            <Col>
              <Col
                style={{ width: '20rem' }}
                className="p-2 d-flex flex-column align-items-center"
              >
                <Card.Img
                  className="rounded-circle"
                  style={{ maxWidth: '10rem' }}
                  // src={photo ? photo : 'https://placehold.co/80x80'}
                />

                <Card.Body className="p-1">
                  <Card.Title>Dr fullName</Card.Title>
                  <Card.Text className="fs-5">specialtyName</Card.Text>
                  <Card.Text className="fs-6">centerName</Card.Text>
                  <Card.Text className="fs-6">*TODO Center Address</Card.Text>
                </Card.Body>
              </Col>
            </Col>
          </Row>
          <section id="personalData" className="p-5">
            <div className="container">
              <h1>Reservar Cita</h1>
            </div>
            <div className="container p-3">
              <h2>Confirma tus datos personales</h2>
              <form>
                <fieldset disabled>
                  <div className="mb-3 p-2">
                    <label
                      htmlFor="disabledTextInput"
                      className="form-label p-2 fs-4"
                    >
                      Informacion personal*
                    </label>
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control"
                      placeholder="Nombres y apellidos"
                    />
                  </div>
                  <div className="mb-3 p-2">
                    <label
                      htmlFor="disabledTextInput"
                      className="form-label p-2 fs-4"
                    >
                      Informacion de contacto*
                    </label>
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control"
                      placeholder="Número de celular"
                    />
                  </div>
                </fieldset>

                <button type="submit" className="btn btn-lg btn-primary">
                  Reservar cita
                </button>
                {/* <RedirectionButton /> */}
              </form>
            </div>
            <div></div>
          </section>
        </Col>
      </Row>
    </Container>
  );
}
