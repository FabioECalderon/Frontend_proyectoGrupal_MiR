/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import SearchContext from '../containers/SearchContext';

import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import AppointmentList from './AppointmentList';
import { getLocation } from '../api/locations';
import { getAppointmentsByDoctorByDate } from '../api/appointments';

export default function DoctorCard(doctor) {
  const { fullName = '', specialtyId = '', centerId = '', photo = '' } = doctor;
  const { searchParams, availableCenters, availableSpecialties } =
    useContext(SearchContext);
  const [selectedInfo, setSelectedInfo] = useState({ ...doctor });
  const [showHours, setShowHours] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const initialAppointmentHours = [
    { time: '08:00', available: true, id: 1 },
    { time: '08:30', available: true, id: 2 },
    { time: '09:00', available: true, id: 3 },
    { time: '09:30', available: true, id: 4 },
    { time: '10:00', available: true, id: 5 },
    { time: '10:30', available: true, id: 6 },
    { time: '11:00', available: true, id: 7 },
    { time: '11:30', available: true, id: 8 },
    { time: '14:00', available: true, id: 9 },
    { time: '14:30', available: true, id: 10 },
    { time: '15:00', available: true, id: 11 },
    { time: '15:30', available: true, id: 12 },
    { time: '16:00', available: true, id: 13 },
    { time: '16:30', available: true, id: 14 },
    { time: '17:00', available: true, id: 15 },
    { time: '17:30', available: true, id: 16 },
  ];
  const [appointmentHours, setAppointmentHours] = useState(
    initialAppointmentHours,
  );
  let reservedAppointments = [];

  const spec = availableSpecialties.filter(
    (item) => item.id === specialtyId,
  )[0];
  const cent = availableCenters.filter((item) => item.id === centerId)[0];

  async function loadAddress(centerId) {
    try {
      const response = await getLocation(centerId);
      setSelectedInfo({
        ...selectedInfo,
        specialty: spec.name,
        center: cent.centerName,
        address: response.data.address,
        city: response.data.city,
        date: searchParams.date,
      });
    } catch (error) {
      console.log(error);
    }
  }

  function validateAppointments(initial, reserved) {
    for (let i = 0; i < reserved.length; i++) {
      let hour = reserved[i].appointmentDate.slice(11, 16);
      for (let j = 0; j < initial.length; j++) {
        let temp = initial[j].time;
        if (hour == temp) {
          initial[j].available = false;
        }
      }
    }
    setAppointmentHours(initial);
  }

  async function loadAppointments(doctorId, date) {
    try {
      const response = await getAppointmentsByDoctorByDate(doctorId, date);
      reservedAppointments = response.data;
      validateAppointments(appointmentHours, reservedAppointments);
    } catch (error) {
      setError(error);
    }
  }

  function validateAppointments(initial, reserved) {
    for (let i = 0; i < reserved.length; i++) {
      let hour = reserved[i].appointmentDate.slice(11, 16);
      for (let j = 0; j < initial.length; j++) {
        let temp = initial[j].time;
        if (hour == temp) {
          initial[j].available = false;
        }
      }
    }
    setAppointmentHours(initial);
  }

  async function loadAppointments(doctorId, date) {
    try {
      const response = await getAppointmentsByDoctorByDate(doctorId, date);
      reservedAppointments = response.data;
      validateAppointments(appointmentHours, reservedAppointments);
    } catch (error) {
      setError(error);
    }
  }

  function toggleShow() {
    setShowHours(true);
  }

  // function toggleNoShow() {
  //   setShowHours(false);
  // }

  useEffect(() => {
    loadAddress(cent.locationId);
    loadAppointments(doctor.id, searchParams.date);
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
            <Button variant="secondary" className="text-white rounded-pill">
              <i className="bi bi-caret-left-fill "></i>
            </Button>
            {searchParams.date}
            <Button variant="secondary" className="text-white rounded-pill">
              <i className="bi bi-caret-right-fill"></i>
            </Button>
          </Card.Title>

          <Card.Body className="d-flex flex flex-column justify-content-center align-items-center">
            {showHours ? (
              <Container className="d-flex flex gap-1 flex-wrap justify-content-center align-items-center">
                <AppointmentList
                  selectedInfo={selectedInfo}
                  appointmentHours={appointmentHours}
                />
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
