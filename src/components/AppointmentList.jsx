import { Button } from 'react-bootstrap';
// import { useContext } from 'react';
// import SearchContext from '../containers/SearchContext';
import { useNavigate } from 'react-router-dom';

export default function AppointmentList({ selectedInfo, appointmentHours }) {
  const navigate = useNavigate();

  function handleSubmit(event) {
    const selectedData = { ...selectedInfo, time: event.target.name };
    localStorage.setItem('appointmentData', JSON.stringify(selectedData));
    navigate('/confirmAppointment');
  }

  return appointmentHours.map(function (item) {
    return (
      <Button
        variant="outline-primary"
        style={{ width: '4.2rem' }}
        className={item.available ? 'fs-6' : 'fs-6 disabled'}
        key={item.id}
        name={item.time}
        onClick={handleSubmit}
      >
        {item.time}
      </Button>
    );
  });
}
