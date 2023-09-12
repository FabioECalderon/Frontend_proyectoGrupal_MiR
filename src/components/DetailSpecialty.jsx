import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/esm/Table';

export default function DetailSpecialty() {
  return (
    <>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">
            Código de Especialidad
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              placeholder="Asignación automática"
              readOnly
            />
          </Col>
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de la especialdiad"
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
              <Form.Check type="checkbox" label="Especialidad habilitada" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Centros médicos donde está disponible</Form.Label>
            </Form.Group>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nombre</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Centro oriente</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>centro occidente</td>
                </tr>
                <tr></tr>
              </tbody>
            </Table>
            <Form.Group className="mb-3 d-flex flex-column">
              <Button variant="secondary" type="button" className="my-3">
                Asignar a centros médicos
              </Button>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3 d-flex">
          <Button variant="primary" type="submit" className="ms-auto">
            Guardar
          </Button>
          <Button variant="primary" type="submit" className="mx-2" disabled>
            Crear nueva
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
