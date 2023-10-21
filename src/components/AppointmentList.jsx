import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import SearchContext from '../containers/SearchContext';

export default function AppointmentList(key = '') {
  const { searchParams, setSearchParams } = useContext(SearchContext);
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

  async function handleSubmit(event) {
    const data = {
      center: searchParams.center,
      date: searchParams.date,
      specialty: searchParams.specialty,
      doctorId: key,
      time: event.target.name,
    };
    // data.time = event.target.name;
    await setSearchParams(data);
    console.log(event);
    console.log('data', data);
    console.log('searchParams', searchParams);
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
