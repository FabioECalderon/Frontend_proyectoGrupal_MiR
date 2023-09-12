import Table from 'react-bootstrap/Table';

export default function ListUsers() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Correo electrónico</th>
          <th>Habilitado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Maria Perez</td>
          <td>mperez@gmail.com</td>
          <td>True</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jaime Correa</td>
          <td>jcorrea@gmail.com</td>
          <td>True</td>
        </tr>
        <tr></tr>
      </tbody>
    </Table>
  );
}
