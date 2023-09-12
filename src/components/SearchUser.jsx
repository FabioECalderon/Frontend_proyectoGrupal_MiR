import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SearchUser() {
  return (
    <Form className="d-flex py-3">
      <Form.Control type="text" placeholder="Buscar usuario por código" />
      <Button variant="primary" type="submit" className="mx-2">
        Buscar
      </Button>
    </Form>
  );
}
