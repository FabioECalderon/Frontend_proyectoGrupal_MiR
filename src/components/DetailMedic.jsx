import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function DetailMedic() {
  return (
    <>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="3">
            Código del especialista
          </Form.Label>
          <Col md="9">
            <Form.Control
              type="text"
              placeholder="Asignación automática"
              readOnly
            />
          </Col>
        </Form.Group>
        <Row className="container">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del centro médico"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Breve descripción"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Especialidad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Seleccione la especialidad"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Centro</Form.Label>
              <Form.Control
                type="text"
                placeholder="Seleccione el centro médico"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Especialista habilitado" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3 d-flex flex-column">
              <Form.Label>Foto</Form.Label>
              <img src="https://placehold.co/80x40"></img>
            </Form.Group>
            <Form.Group className="mb-3 d-flex flex-column">
              <Button variant="secondary" type="button" className="my-3">
                Seleccionar horarios disponibles
              </Button>
            </Form.Group>
            <Form.Group className="mb-3 d-flex flex-column">
              <Button variant="secondary" type="button" className="my-3">
                Seleccionar historial de citas médicas
              </Button>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3 d-flex">
          <Button variant="primary" type="submit" className="ms-auto">
            Guardar
          </Button>
          <Button variant="primary" type="submit" className="mx-2" disabled>
            Crear nuevo
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
