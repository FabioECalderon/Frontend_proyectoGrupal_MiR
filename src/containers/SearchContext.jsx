import { createContext, useState } from 'react';

const SearchContext = createContext({});

let dateTemp = new Date(Date.now());
let dateToday = dateTemp.toISOString().slice(0, 10);

const searchInitialValues = {
  center: { id: '' },
  date: dateToday,
  specialty: { id: '' },
};

export function SearchProvider({ children }) {
  const [searchParams, setSearchParams] = useState(searchInitialValues);
  const [availableCenters, setAvailableCenters] = useState([]);
  const [availableSpecialties, setAvailableSpecialties] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        searchParams,
        setSearchParams,
        availableSpecialties,
        setAvailableSpecialties,
        availableCenters,
        setAvailableCenters,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
