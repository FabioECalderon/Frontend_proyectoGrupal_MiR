import { useContext } from 'react';
import SearchContext from '../containers/SearchContext';

import RedirectionButton from './ButtonPay';
import { Card, Row, Col, Button } from 'react-bootstrap';

export default function DoctorCard({
  fullName = '',
  specialty = '',
  center = '',
  photo = '',
}) {
  const { searchParams, availableCenters, availableSpecialties } =
    useContext(SearchContext);

  const specialtyName = availableSpecialties.filter(
    (item) => item.id === specialty,
  )[0].name;

  const centerName = availableCenters.filter((item) => item.id === center)[0]
    .centerName;

  const appointmentHours = [
    '8:00',
    '8:30',
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
  ];

  return (
    <Card style={{ width: '36rem' }}>
      <Row className="p-2 d-flex">
        <Col className="p-2 d-flex flex-column align-items-center">
          <Card.Img
            className="rounded-circle"
            style={{ width: '10rem' }}
            src={photo ? photo : 'https://placehold.co/80x80'}
          />

          <Card.Body className="p-1">
            <Card.Title>Dr {fullName}</Card.Title>
            <Card.Text className="fs-5">{specialtyName}</Card.Text>
            <Card.Text className="fs-6">{centerName}</Card.Text>
          </Card.Body>
        </Col>
        <Col>
          <Card.Title className="d-flex justify-content-center gap-2 align-items-center fs-6">
            <Button variant="secondary" className="text-white rounded-pill">
              <i className="bi bi-caret-left-fill "></i>
            </Button>{' '}
            {searchParams.date}{' '}
            <Button variant="secondary" className="text-white rounded-pill">
              <i className="bi bi-caret-right-fill"></i>
            </Button>
          </Card.Title>

          <Card.Body className="p-1 d-flex">
            <RedirectionButton />
          </Card.Body>
        </Col>
      </Row>
      <Card.Footer className="d-flex justify-content-center">
        <Button variant="primary" className="text-white" disabled>
          Seleccionar cita
        </Button>
      </Card.Footer>
    </Card>
  );
}
