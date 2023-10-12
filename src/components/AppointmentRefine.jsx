import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getSpecialties } from '../api/specialties';
import { getCenters } from '../api/centers';
import SearchContext from '../containers/SearchContext';

export default function AppointmentRefine() {
  const navigate = useNavigate();
  const [availableSpecialties, setAvailableSpecialties] = useState([]);
  const [availableCenters, setAvailableCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState(searchParams.specialty);
  const [selectedDate, setSelectedDate] = useState(searchParams.date);
  const [selectedSpecialty, setSelectedSpecialty] = useState(
    searchParams.specialty,
  );
  const [error, setError] = useState('');
  const { searchParams, setSearchParams } = useContext(SearchContext);

  async function loadSpecialties() {
    try {
      const response = await getSpecialties();
      setAvailableSpecialties(response.data);
    } catch (error) {
      setError(error);
    }
  }
  async function loadCenters() {
    try {
      const response = await getCenters();
      setAvailableCenters(response.data);
    } catch (error) {
      setError(error);
    }
  }
  let dateTemp = new Date(Date.now());
  let dateToday = dateTemp.toISOString().slice(0, 10);

  function handleSubmit(event) {
    event.preventDefault();
    const selectedDate = event.target.date.value
      ? event.target.date.value
      : dateToday;
    const newSearchParams = {
      center: selectedCenter.id,
      date: selectedDate,
      specialty: selectedSpecialty.id,
    };
    console.log(newSearchParams);
    setSearchParams(newSearchParams);
    navigate('/searchResults');
  }

  useEffect(() => {
    loadSpecialties();
    loadCenters();
  }, []);

  return (
    <div className="d-flex p-3 bg-white">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Selecciona la especialidad</label>
          <SpecialtySelect
            name="specialty"
            availableSpecialties={availableSpecialties}
            setSelectedSpecialty={setSelectedSpecialty}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Selecciona la fecha</label>
          <input
            type="date"
            name="date"
            value={selectedDate}
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Selecciona la ciudad</label>
          <select className="form-control">
            <option className="form-control">Bogotá</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="form-label">Selecciona el centro médico</label>
          <CenterSelect
            availableCenters={availableCenters}
            setSelectedCenter={setSelectedCenter}
            // value={selectedCenter.centerName}
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className="mb-3 form-check d-flex align-items-center">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label ms-2">Consulta virtual</label>
          </div>
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

const SpecialtySelect = ({ availableSpecialties, setSelectedSpecialty }) => {
  function changeHandler(event) {
    const selection = availableSpecialties.filter(
      (item) => item.name === event.target.value,
    );
    return setSelectedSpecialty(selection[0]);
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

const CenterSelect = ({ availableCenters, setSelectedCenter, value }) => {
  function changeHandler(event) {
    const selection = availableCenters.filter(
      (item) => item.centerName === event.target.value,
    );
    return setSelectedCenter(selection[0]);
  }
  return (
    <select onClick={changeHandler} className="form-control" value={value}>
      <option>Todos</option>
      {availableCenters.map(function (item) {
        return item.enabled && <option key={item.id}>{item.centerName}</option>;
      })}
    </select>
  );
};
