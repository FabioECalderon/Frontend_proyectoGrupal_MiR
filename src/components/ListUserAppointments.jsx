/* eslint-disable react/prop-types */

import { deleteAppointment } from '../api/appointments';

export default function ListUserAppointments({ list = [] }) {
  async function handleCancel(appointmentId) {
    try {
      const response = await deleteAppointment(appointmentId);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return list.map(function (item) {
    return (
      <AppointmentRow
        key={item.id}
        appointmentDate={item.appointmentDate}
        centerName={item.center.centerName}
        doctorName={item.doctor.fullName}
        status={item.status}
        handleCancel={handleCancel}
      />
    );
  });
}

// eslint-disable-next-line no-unused-vars
function AppointmentRow({ key, appointmentDate, centerName, doctorName }) {
  // console.log(key);
  return (
    <>
      <tr>
        <td>
          {appointmentDate.slice(0, 10)} {appointmentDate.slice(11, 16)}
        </td>
        <td>{centerName}</td>
        <td>{doctorName}</td>
        {/* <td>{status}</td>
        <td>
          <Button
            variant="secondary"
            className="text-white m-2"
            onClick={handleCancel(key)}
          >
            Cancelar
          </Button>
          {status == 'Reserved' ? (
            <RedirectionButton reservedAppointment={key} />
          ) : null}
        </td> */}
      </tr>
    </>
  );
}
