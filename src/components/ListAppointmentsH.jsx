import Table from 'react-bootstrap/Table';
import ListHistoricAppointments from './ListHistoricAppointments';

// eslint-disable-next-line react/prop-types
export default function ListAppointmentsH({ list = [] }) {
  // console.log(list);

  // const activeList = list.filter(
  //   (item) => new Date(item.appointmentDate) >= new Date(Date.now()),
  // );
  const historicList = list.filter(
    (item) => new Date(item.appointmentDate) < new Date(Date.now()),
  );
  // console.log(historicList);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Centro médico </th>
          <th>Doctor</th>
        </tr>
      </thead>
      <tbody>
        {list.length == 0 ? null : (
          <ListHistoricAppointments list={historicList} />
        )}
      </tbody>
    </Table>
  );
}
