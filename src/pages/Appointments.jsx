/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import UserContext from '../containers/UserContext';
import UserNav from '../components/UserNav';
import ListAppointments from '../components/ListAppointments';
import { getUserAppointments } from '../api/users';
import ListAppointmentsH from '../components/ListAppointmentsH';

export default function Appointments() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  async function loadAppointments() {
    const userId = user.id;
    try {
      const response = await getUserAppointments(userId);
      setData((prev) => [...response.data]);
      // console.log(data);
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
              INFORMACIÓN DE CITAS MÉDICAS
            </h4>
            <h5 className="py-3" id="top">
              Citas médicas activas
            </h5>
            <ListAppointments list={data} />

            <h5 className="py-3" id="top">
              Citas médicas de los últimos 3 meses
            </h5>
            <ListAppointmentsH list={data} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
