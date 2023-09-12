import Table from 'react-bootstrap/Table';

export default function ListUsers() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Especialdiad</th>
          <th>Habilitado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Jorge Perez</td>
          <td>Medicina general</td>
          <td>True</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Diana Correa</td>
          <td>Odontología</td>
          <td>True</td>
        </tr>
        <tr></tr>
      </tbody>
    </Table>
  );
}
