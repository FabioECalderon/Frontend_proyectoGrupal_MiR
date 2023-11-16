/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function CreateUser({
  handleCreateUser,
  handleCreateLocation,
  location,
}) {
  console.log(location);

  function onSubmit(event) {
    event.preventDefault();

    const selectedAddress = event.target.address.value;

    const selectedCity = event.target.city.value;
    const locationPayload = {
      country: 'Colombia',
      city: { selectedCity },
      address: { selectedAddress },
    };
    handleCreateLocation(locationPayload);

    const {
      fullName,
      citizenshipNumber,
      gender,
      email,
      password,
      phone,
      photo,
    } = event.target.elements;
    const formData = new FormData();
    formData.append(fullName, fullName.value);
    formData.append(citizenshipNumber, citizenshipNumber.value);
    formData.append(gender, gender.value);
    formData.append(email, email.value);
    formData.append(password, password.value);
    formData.append(phone, phone.value);
    formData.append(photo, photo.files[0]);

    console.log(formData);
    console.log(photo.files[0]);

    // handleCreateUser(formData);
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group as={Row} className="mb-3">
          {/* <Form.Label column md="3">
            Código del usuario
          </Form.Label>
            <Form.Control type="text" readOnly /> */}
        </Form.Group>
        <Row className="container">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text" placeholder="Nombre" name="fullName" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Número de identificación:</Form.Label>
              <Form.Control
                type="text"
                placeholder="CC / DNI"
                name="citizenshipNumber"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Género:</Form.Label>
              <select name="gender" className="form-control">
                <option className="form-control">Masculino</option>
                <option className="form-control">Femenino</option>
                <option className="form-control">Otro</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Correo electrónico:</Form.Label>
              <Form.Control type="email" placeholder="email" name="email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name="password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono:</Form.Label>
              <Form.Control placeholder="Teléfono" name="phone" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Dirección:</Form.Label>
              <Form.Control placeholder="Dirección" name="address" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ciudad:</Form.Label>
              <select name="city" className="form-control">
                <option className="form-control">Bogotá</option>
              </select>
            </Form.Group>

            {/* <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Usuario habilitado" />
            </Form.Group> */}
          </Col>
          <Col md={6}>
            <Form.Group className="mb-4 d-flex flex-column">
              <Form.Label>Foto</Form.Label>
              <img
                src={'https://placehold.co/80x80'}
                style={{ width: '20rem' }}
              ></img>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="file" name="photo" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="my-5 d-flex gap-3">
          <Button variant="primary" type="submit" className="text-white">
            Crear usuario
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
