import Table from 'react-bootstrap/Table';

export default function ListAppointments() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Especialidad</th>
          <th>Doctor</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Medicina general</td>
          <td>Medicina general</td>
          <td>True</td>
          <td>True</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Odontología</td>
          <td>Odontología</td>
          <td>True</td>
          <td>True</td>
        </tr>
        <tr></tr>
      </tbody>
    </Table>
  );
}
