/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function DetailUser({ user, handleUpdateUser }) {
  const [editOn, setEditOn] = useState(false);

  // console.log(user);
  // const userPhoto = user.photo;
  function toggleEdit() {
    setEditOn((prev) => !prev);
  }

  function onSubmit(event) {
    event.preventDefault();

    const { photo } = event.target.elements;
    const formData = new FormData();
    // formData.append(phone, phone.value);
    formData.append(photo, photo.files[0]);

    console.log(photo.files[0]);
    const userId = user.id;
    handleUpdateUser({ userId, formData });
    setEditOn(false);
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Row className="container">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre:</Form.Label>
              <p>{user.fullName}</p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Número de identificación:</Form.Label>
              <p>{user.citizenshipNumber}</p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Género:</Form.Label>
              <p>{user.gender}</p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Correo electrónico:</Form.Label>
              <p>{user.email}</p>
            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Label>Teléfono:</Form.Label>
              {editOn ? (
                <Form.Control placeholder="Teléfono" name="phone" />
              ) : (
                <p>{user.phone}</p>
              )}
            </Form.Group> */}
            <Form.Group className="mb-3">
              <Form.Label>Dirección:</Form.Label>
              {editOn ? (
                <Form.Control placeholder={user.location.address} />
              ) : (
                <p>{user.location.address}</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ciudad:</Form.Label>
              {editOn ? (
                <select name="gender" className="form-control">
                  <option className="form-control">Bogotá</option>
                </select>
              ) : (
                <p>{user.location.city}</p>
              )}
            </Form.Group>

            {/* <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Usuario habilitado" />
            </Form.Group> */}
          </Col>
          <Col md={6}>
            <Form.Group className="mb-4 d-flex flex-column">
              <Form.Label></Form.Label>
              <img
                src={
                  user.photo ??
                  'https://res.cloudinary.com/di4otf7td/image/upload/v1700128069/Assets/User-Profile_xcnjmy.png'
                }
                style={{ width: '18rem' }}
              ></img>
            </Form.Group>
            {editOn ? (
              <Form.Group className="mb-3">
                <Form.Control type="file" name="photo" />
              </Form.Group>
            ) : null}
            {/* <Form.Group className="mb-3 d-flex flex-column">
              <Button variant="secondary" type="button" className="my-3">
                Ver historial de citas médicas
              </Button>
            </Form.Group> */}
          </Col>
        </Row>
        <Form.Group className="my-5 d-flex gap-3">
          <Button
            variant="primary"
            className={editOn ? ' disabled text-white' : 'text-white'}
            onClick={toggleEdit}
          >
            Editar datos
          </Button>
          {editOn ? (
            <>
              <Button variant="primary" type="submit" className="text-white">
                Guardar
              </Button>
              <Button
                variant="secondary"
                className="text-white"
                onClick={toggleEdit}
              >
                Cancelar
              </Button>
            </>
          ) : null}
        </Form.Group>
      </Form>
    </>
  );
}
