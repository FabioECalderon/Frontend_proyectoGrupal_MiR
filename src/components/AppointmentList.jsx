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
        style={{ width: '4.2rem', fontSize: '14px' }}
        className={item.available ? 'button-hour' : 'button-hour disabled'}
        key={item.id}
        name={item.time}
        onClick={handleSubmit}
      >
        {item.time}
      </Button>
    );
  });
}
