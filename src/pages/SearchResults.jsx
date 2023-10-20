import { useContext, useEffect, useState } from 'react';
import { getResults } from '../api/searchResults';

// import AppointmentRefine from '../components/AppointmentRefine';
import ResultList from '../components/ResultList';
import SearchContext from '../containers/SearchContext';
import { Col } from 'react-bootstrap';
import { getSpecialties } from '../api/specialties';
import { getCenters } from '../api/centers';

export default function SearchResults() {
  const { searchParams, setAvailableCenters, setAvailableSpecialties } =
    useContext(SearchContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const centerId = searchParams.center.id;
  const specialtyId = searchParams.specialty.id;
  // console.log(centerId);
  // console.log(specialtyId);
  // console.log(searchParams);

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
    try {
      const response = await getResults({ centerId, specialtyId });
      // console.log(response);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    loadSpecialties();
    loadCenters();
    loadResults();
  }, []);

  return (
    <>
      {/* <section id="" className="d-flex justify-content-center">
        <div className="d-flex flex-wrap">
          <div className="p-3 me-lg-5">
            <h3>Refina tu búsqueda</h3>
          </div>
          <AppointmentRefine />
        </div>
      </section> */}

      <section id="resultsSection" className=" bg-light">
        <h4 className="px-5 pt-5">
          {' '}
          Mostrando los primeros 10 resultados para los criterios seleccionados
        </h4>
        <Col className="container-fluid d-flex flex-wrap gap-3 m-5">
          <ResultList list={data} />
        </Col>
      </section>
    </>
  );
}
