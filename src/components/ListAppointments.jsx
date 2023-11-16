import Table from 'react-bootstrap/Table';
import ListUserAppointments from './ListUserAppointments';

// eslint-disable-next-line react/prop-types
export default function ListAppointments({ list = [] }) {
  // console.log(list);

  const activeList = list.filter(
    (item) => new Date(item.appointmentDate) >= new Date(Date.now()),
  );
  // console.log(activeList);
  // const historicList = list.filter(
  //   (item) => new Date(item.appointmentDate) < new Date(Date.now()),
  // );

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Centro médico </th>
          <th>Doctor</th>
          {/* <th>Estado</th>
          <th>Acciones</th> */}
        </tr>
      </thead>
      <tbody>
        {list.length == 0 ? null : <ListUserAppointments list={activeList} />}
      </tbody>
    </Table>
  );
}
