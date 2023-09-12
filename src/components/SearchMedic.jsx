import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SearchMedic() {
  return (
    <Form className="d-flex py-3">
      <Form.Control type="text" placeholder="Buscar especialista código" />
      <Button variant="primary" type="submit" className="mx-2">
        Buscar
      </Button>
    </Form>
  );
}
