import Table from 'react-bootstrap/Table';

export default function ListCenters() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Ubicación</th>
          <th>Habilitado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Centro oriente</td>
          <td>Carrera 7 # 39-10</td>
          <td>True</td>
        </tr>
        <tr>
          <td>2</td>
          <td>centro occidente</td>
          <td>Carrera 70 # 6-10</td>
          <td>True</td>
        </tr>
        <tr></tr>
      </tbody>
    </Table>
  );
}
