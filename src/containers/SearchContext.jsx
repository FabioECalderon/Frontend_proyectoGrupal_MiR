import { useEffect } from 'react';
import { createContext, useState } from 'react';

const SearchContext = createContext({});

let dateTemp = new Date(Date.now());
let dateToday = dateTemp.toISOString().slice(0, 10);

const searchInitialValues = {
  center: { id: '', centerName: 'Todos' },
  date: dateToday,
  specialty: { id: '', name: 'Todas' },
  time: '0:00',
};

// eslint-disable-next-line react/prop-types
export function SearchProvider({ children }) {
  const [availableCenters, setAvailableCenters] = useState([]);
  const [availableSpecialties, setAvailableSpecialties] = useState([]);
  const [searchParams, setSearchParams] = useState(searchInitialValues);
  const [selectedAppointment, setSelectedAppointment] = useState({});

  //Mounted centers
  useEffect(() => {
    const json = localStorage.getItem('centers');
    if (json) {
      try {
        const data = JSON.parse(json);
        setAvailableCenters(data);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  //Updated centers
  useEffect(() => {
    if (availableCenters === null) {
      localStorage.removeItem('centers');
    }
    if (availableCenters !== undefined) {
      localStorage.setItem('centers', JSON.stringify(availableCenters));
    }
  }, [availableCenters]);

  //Mounted specialties
  useEffect(() => {
    const json = localStorage.getItem('specialties');
    if (json) {
      try {
        const data = JSON.parse(json);
        setAvailableSpecialties(data);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  //Updated specialties
  useEffect(() => {
    if (availableSpecialties === null) {
      localStorage.removeItem('specialties');
    }
    if (availableSpecialties !== undefined) {
      localStorage.setItem('specialties', JSON.stringify(availableSpecialties));
    }
  }, [availableSpecialties]);

  // // //Mounted searchParams
  // useEffect(() => {
  //   const json = localStorage.getItem('searchParams');
  //   if (json) {
  //     try {
  //       const data = JSON.parse(json);
  //       setSearchParams(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // }, []);

  // //Updated searchParams
  // useEffect(() => {
  //   if (searchParams === null) {
  //     localStorage.removeItem('searchParams');
  //   }
  //   if (searchParams !== undefined) {
  //     localStorage.setItem('searchParams', JSON.stringify(searchParams));
  //   }
  // }, [searchParams]);

  return (
    <SearchContext.Provider
      value={{
        searchParams,
        setSearchParams,
        availableSpecialties,
        setAvailableSpecialties,
        availableCenters,
        setAvailableCenters,
        selectedAppointment,
        setSelectedAppointment,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
