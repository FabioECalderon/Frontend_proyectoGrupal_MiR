import Table from 'react-bootstrap/Table';

export default function ListSpecialties() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Habilitado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Medicina general</td>
          <td>Medicina general</td>
          <td>True</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Odontología</td>
          <td>Odontología</td>
          <td>True</td>
        </tr>
        <tr></tr>
      </tbody>
    </Table>
  );
}
