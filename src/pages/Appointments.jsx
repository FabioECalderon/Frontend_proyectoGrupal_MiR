/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import UserContext from '../containers/UserContext';

import UserNav from '../components/UserNav';
import ListAppointments from '../components/ListAppointments';
import { getUserAppointments } from '../api/users';

export default function Appointments() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function loadAppointments() {
    const userId = user.id;
    try {
      const response = await getUserAppointments(userId);
      setData(response);
      console.log(response.data);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    loadAppointments();
  }, []);

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
            <ListAppointments />
          </Col>
        </Row>
      </Container>
    </>
  );
}
