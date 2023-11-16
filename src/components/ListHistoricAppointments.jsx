/* eslint-disable react/prop-types */

export default function ListHistoricAppointments({ list = [] }) {
  return list.map(function (item) {
    return (
      <AppointmentRow
        key={item.id}
        appointmentDate={item.appointmentDate}
        centerName={item.center.centerName}
        doctorName={item.doctor.fullName}
      />
    );
  });
}

// eslint-disable-next-line no-unused-vars
function AppointmentRow({ key, appointmentDate, centerName, doctorName }) {
  return (
    <>
      <tr>
        <td>
          {appointmentDate.slice(0, 10)} {appointmentDate.slice(11, 16)}
        </td>
        <td>{centerName}</td>
        <td>{doctorName}</td>
      </tr>
    </>
  );
}
