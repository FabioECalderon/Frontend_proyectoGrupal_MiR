import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import SearchContext from '../containers/SearchContext';
import { useNavigate } from 'react-router-dom';

export default function AppointmentList({ selectedInfo }) {
  const { selectedAppointment, setSelectedAppointment } =
    useContext(SearchContext);
  const navigate = useNavigate();
  const appointmentHours = [
    '8:00',
    '8:30',
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
  ];
  // TODO: INVALIDATE PREVIOUSLY RESERVED APPOINTMENTS
  function handleSubmit(event) {
    setSelectedAppointment({ ...selectedInfo, time: event.target.name });
    const selectedData = { ...selectedInfo, time: event.target.name };
    localStorage.setItem('centers', JSON.stringify(selectedData));
    console.log(event);
    console.log('data', selectedData);
    console.log('data_state', selectedAppointment);
    navigate('/confirmAppointment');
  }

  return appointmentHours.map(function (item, index) {
    return (
      <Button
        variant="outline-primary"
        style={{ width: '4.2rem' }}
        className="fs-6"
        key={index}
        name={item}
        onClick={handleSubmit}
      >
        {item}
      </Button>
    );
  });
}
