/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import SearchContext from '../containers/SearchContext';

// import RedirectionButton from './ButtonPay';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import AppointmentList from './AppointmentList';

export default function DoctorCard(doctor) {
  const { searchParams, availableCenters, availableSpecialties } =
    useContext(SearchContext);
  const [showHours, setShowHours] = useState(false);

  const { fullName = '', specialtyId = '', centerId = '', photo = '' } = doctor;

  const spec = availableSpecialties.filter(
    (item) => item.id === specialtyId,
  )[0];
  const cent = availableCenters.filter((item) => item.id === centerId)[0];

  doctor = {
    ...doctor,
    specialty: spec.name,
    center: cent.centerName,
  };
  console.log(doctor);

  function toggleShow() {
    setShowHours(true);
  }

  // useEffect(() => {
  //   loadData();
  // }, []);

  return (
    <Card>
      <Row className="p-2 d-flex flex-wrap">
        <Col
          style={{ width: '20rem' }}
          className="p-2 d-flex flex-column align-items-center"
        >
          <Card.Img
            className="rounded-circle"
            style={{ maxWidth: '10rem' }}
            src={photo ? photo : 'https://placehold.co/80x80'}
          />

          <Card.Body className="p-1">
            <Card.Title>Dr {fullName}</Card.Title>
            <Card.Text className="fs-5">{doctor.specialty}</Card.Text>
            <Card.Text className="fs-6">{doctor.center}</Card.Text>
            {/* TODO Center Address */}
            <Card.Text className="fs-6"></Card.Text>
          </Card.Body>
        </Col>
        <Col style={{ width: '16rem' }}>
          <Card.Title className="d-flex justify-content-center gap-2 align-items-center fs-6">
            <Button variant="secondary" className="text-white rounded-pill">
              <i className="bi bi-caret-left-fill "></i>
            </Button>{' '}
            {searchParams.date}{' '}
            <Button variant="secondary" className="text-white rounded-pill">
              <i className="bi bi-caret-right-fill"></i>
            </Button>
          </Card.Title>

          <Card.Body className="d-flex flex flex-column justify-content-center align-items-center">
            {showHours ? (
              <Container className="d-flex flex gap-1 flex-wrap justify-content-center align-items-center">
                <AppointmentList />
              </Container>
            ) : (
              <Button
                variant="primary"
                className="text-white"
                onClick={toggleShow}
              >
                Ver horarios disponibles
              </Button>
            )}
          </Card.Body>
        </Col>
      </Row>
      {/* <Card.Footer className="d-flex justify-content-center">
        <Button
          variant="primary"
          className={hourSelected ? 'text-white' : 'text-white disabled'}
        >
          Seleccionar cita
        </Button>
      </Card.Footer> */}
    </Card>
  );
}
