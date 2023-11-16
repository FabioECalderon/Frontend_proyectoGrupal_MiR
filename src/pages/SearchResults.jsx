import { useContext, useEffect, useState } from 'react';
import { getResults } from '../api/searchResults';

// import AppointmentRefine from '../components/AppointmentRefine';
import ResultList from '../components/ResultList';
import SearchContext from '../containers/SearchContext';
import { Col } from 'react-bootstrap';
import { getSpecialties } from '../api/specialties';
import { getCenters } from '../api/centers';
import AppointmentRefine from '../components/AppointmentRefine';

export default function SearchResults() {
  const {
    searchParams,
    setSearchParams,
    setAvailableCenters,
    setAvailableSpecialties,
  } = useContext(SearchContext);
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState();

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

  async function loadResults({ centerId, specialtyId }) {
    try {
      const response = await getResults({ centerId, specialtyId });
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    const json = localStorage.getItem('searchParams');
    const data = JSON.parse(json);
    setSearchParams(data);
    loadSpecialties();
    loadCenters();
    const centerId = searchParams.center.id;
    const specialtyId = searchParams.specialty.id;
    loadResults({ centerId, specialtyId });
  }, []);

  return (
    <>
      <section className="d-flex justify-content-center bg-light">
        <div className="d-flex flex-wrap">
          <div className="p-3 me-lg-5">
            <h5>Refina tu búsqueda</h5>
          </div>
          <AppointmentRefine loadResults={loadResults} />
        </div>
      </section>

      <section id="resultsSection" className=" bg-light">
        <h5 className="p-3 pt-5">
          {' '}
          Mostrando {data.length} resultados para los criterios seleccionados
        </h5>
        <Col className="pb-5 container-fluid d-flex flex-wrap gap-3 justify-content-center align-items-center">
          <ResultList list={data} />
        </Col>
      </section>
    </>
  );
}
