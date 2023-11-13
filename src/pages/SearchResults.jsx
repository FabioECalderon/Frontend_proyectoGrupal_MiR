import { useContext, useEffect, useState } from 'react';
import { getResults } from '../api/searchResults';

// import AppointmentRefine from '../components/AppointmentRefine';
import ResultList from '../components/ResultList';
import SearchContext from '../containers/SearchContext';
import { Col } from 'react-bootstrap';
import { getSpecialties } from '../api/specialties';
import { getCenters } from '../api/centers';

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

  async function loadResults() {
    const centerId = searchParams.center.id;
    const specialtyId = searchParams.specialty.id;
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
    loadResults();
  }, []);

  return (
    <>
      {/* <section className="d-flex justify-content-center">
        <div className="d-flex flex-wrap">
          <div className="p-3 me-lg-5">
            <h5>Refina tu búsqueda</h5>
          </div>
          <AppointmentRefine />
        </div>
      </section> */}

      <section id="resultsSection" className=" bg-light">
        <h5 className="p-3">
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
