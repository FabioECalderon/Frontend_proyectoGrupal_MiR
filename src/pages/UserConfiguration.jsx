/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UserContext from '../containers/UserContext';
import UserNav from '../components/UserNav';
import DetailUser from '../components/DetailUser';
import { getUser } from '../api/users';
import { updateUser } from '../api/users';

export default function UserConfiguration() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function loadUser() {
    const userId = user.id;
    try {
      const response = await getUser(userId);
      setData(response.data);
      // console.log(response.data);
    } catch (error) {
      setError(error);
    }
  }

  async function handleUpdateUser(payload) {
    try {
      const response = await updateUser(payload);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container className="container-fluid">
      <Row>
        <Col>
          <UserNav />
        </Col>
        <Col lg={9} className="border-start">
          <h4 className="py-3 text-center" id="top">
            DATOS PERSONALES
          </h4>
          {data ? (
            <DetailUser user={data} handleUpdateUser={handleUpdateUser} />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
}
