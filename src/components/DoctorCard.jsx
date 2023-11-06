/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import SearchContext from '../containers/SearchContext';

import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import AppointmentList from './AppointmentList';
import { getLocation } from '../api/locations';

export default function DoctorCard(doctor) {
  const { fullName = '', specialtyId = '', centerId = '', photo = '' } = doctor;
  const { searchParams, availableCenters, availableSpecialties } =
    useContext(SearchContext);
  const [selectedInfo, setSelectedInfo] = useState({ ...doctor });
  const [showHours, setShowHours] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  let dateTemp = new Date(Date.now() + 86400000);
  let dateTomorrow = dateTemp.toISOString().slice(0, 10);

  const spec = availableSpecialties.filter(
    (item) => item.id === specialtyId,
  )[0];
  const cent = availableCenters.filter((item) => item.id === centerId)[0];

  async function loadAddress(id) {
    try {
      const response = await getLocation(id);
      setSelectedInfo({
        ...selectedInfo,
        specialty: spec.name,
        center: cent.centerName,
        address: response.data.address,
        city: response.data.city,
        date: searchParams.date,
      });
    } catch (error) {
      setError(error);
    }
  }

  function toggleShow() {
    setShowHours(true);
  }

  function toggleNoShow() {
    setShowHours(false);
    searchParams.date = event.target.value;
  }

  useEffect(() => {
    loadAddress(cent.locationId);
  }, []);

  return (
    <Card>
      <Row className="p-2 d-flex flex-wrap">
        <Col
          style={{ width: '20rem' }}
          className="p-2 py-3 d-flex flex-column align-items-center"
        >
          <Card.Img
            className="rounded-circle"
            style={{ maxWidth: '10rem' }}
            src={photo ? photo : 'https://placehold.co/80x80'}
          />

          <Card.Body className="p-1 py-2">
            <Card.Title>Dr {fullName}</Card.Title>
            <Card.Text className="fs-5">{selectedInfo.specialty}</Card.Text>
            <Card.Text className="p-0 m-0 fs-6">
              {selectedInfo.center}
            </Card.Text>
            <Card.Text className="p-0 fs-6">
              {selectedInfo.city ?? null} - {selectedInfo.address ?? null}
            </Card.Text>
          </Card.Body>
        </Col>
        <Col style={{ width: '16rem' }}>
          <Card.Title className="d-flex justify-content-center gap-2 align-items-center fs-6">
            {/* <Button variant="secondary" className="text-white rounded-pill">
              <i className="bi bi-caret-left-fill "></i>
            </Button> */}
            {searchParams.date}
            {/* <Button variant="secondary" className="text-white rounded-pill">
              <i className="bi bi-caret-right-fill"></i>
            </Button> */}
          </Card.Title>

          <Card.Body className="d-flex flex flex-column justify-content-center align-items-center">
            {showHours ? (
              <Container className="d-flex flex gap-1 flex-wrap justify-content-center align-items-center">
                <AppointmentList selectedInfo={selectedInfo} />
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
    </Card>
  );
}
