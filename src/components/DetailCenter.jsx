import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function DetailCenter() {
  return (
    <>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">
            Código del centro médico
          </Form.Label>
          <Col sm="9">
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
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Breve descripción"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Dirección</Form.Label>
              <Form.Control placeholder="Dirección" />
              <Form.Check type="checkbox" label="Seleccionar en mapa" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Centro médico habilitado" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3 d-flex flex-column">
              <Form.Label>Foto</Form.Label>
              <img src="https://placehold.co/80x40"></img>
            </Form.Group>
            <Form.Group className="mb-3 d-flex flex-column">
              <Button variant="secondary" type="button" className="my-3">
                Seleccionar especialidades disponibles
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
