/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';

import SearchContext from '../containers/SearchContext';
import { useNavigate } from 'react-router-dom';

export default function AppointmentRefine({ loadResults }) {
  const navigate = useNavigate();

  const {
    setSearchParams,
    searchParams,
    availableSpecialties,
    availableCenters,
  } = useContext(SearchContext);

  const [selectedCenter, setSelectedCenter] = useState(searchParams.center);
  // const [selectedDate, setSelectedDate] = useState(searchParams.date);
  const [selectedSpecialty, setSelectedSpecialty] = useState(
    searchParams.specialty,
  );
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');

  let dateTemp = new Date(Date.now() + 86400000);
  let dateTomorrow = dateTemp.toISOString().slice(0, 10);

  function handleSubmit(event) {
    event.preventDefault();
    const selectDate = event.target.date.value
      ? event.target.date.value
      : dateTomorrow;
    // setSelectedDate(selectDate);
    const newSearchParams = {
      center: selectedCenter,
      date: selectDate,
      specialty: selectedSpecialty,
    };
    // console.log(newSearchParams);
    setSearchParams(newSearchParams);
    const centerId = selectedCenter.id;
    const specialtyId = selectedSpecialty.id;
    // console.log(centerId);
    // console.log(specialtyId);

    loadResults({ centerId, specialtyId });
    navigate('/searchResults');
  }

  return (
    <div className="m-3 p-3 bg-white form-control">
      <form
        className="d-flex flex-wrap p-3 bg-white align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="p-3">
          <label className="form-label">Selecciona la especialidad</label>
          <SpecialtySelect
            name="specialty"
            availableSpecialties={availableSpecialties}
            setSelectedSpecialty={setSelectedSpecialty}
          />
        </div>
        <div className="p-3">
          <label className="form-label">Selecciona la fecha</label>
          <input
            type="date"
            name="date"
            className="form-control"
            min={dateTomorrow}
          />
        </div>
        <div className="p-2">
          <label className="form-label">Selecciona la ciudad</label>
          <select className="form-control">
            <option className="form-control">Bogotá</option>
          </select>
        </div>
        <div className="p-2">
          <label className="form-label">Selecciona el centro médico</label>
          <CenterSelect
            availableCenters={availableCenters}
            setSelectedCenter={setSelectedCenter}
          />
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="submit"
            className="btn btn-lg m-3 btn-primary text-white"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}

const SpecialtySelect = ({
  availableSpecialties = [],
  setSelectedSpecialty,
}) => {
  function changeHandler(event) {
    if (event.target.value === 'Todas') {
      return setSelectedSpecialty({ id: '' });
    } else {
      const selection = availableSpecialties.filter(
        (item) => item.name === event.target.value,
      );
      return setSelectedSpecialty(selection[0]);
    }
  }
  return (
    <select onClick={changeHandler} className="form-control">
      <option>Todas</option>
      {availableSpecialties.map(function (item) {
        return (
          item.enabled && (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          )
        );
      })}
    </select>
  );
};

const CenterSelect = ({ availableCenters = [], setSelectedCenter }) => {
  function changeHandler(event) {
    if (event.target.value === 'Todos') {
      return setSelectedCenter({ id: '' });
    } else {
      const selection = availableCenters.filter(
        (item) => item.centerName === event.target.value,
      );
      return setSelectedCenter(selection[0]);
    }
  }
  return (
    <select onClick={changeHandler} className="form-control">
      <option>Todos</option>
      {availableCenters.map(function (item) {
        return item.enabled && <option key={item.id}>{item.centerName}</option>;
      })}
    </select>
  );
};
