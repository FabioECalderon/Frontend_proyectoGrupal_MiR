import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SearchCenter() {
  return (
    <Form className="d-flex py-3">
      <Form.Control type="text" placeholder="Buscar centro médico por código" />
      <Button variant="primary" type="submit" className="mx-2">
        Buscar
      </Button>
    </Form>
  );
}
