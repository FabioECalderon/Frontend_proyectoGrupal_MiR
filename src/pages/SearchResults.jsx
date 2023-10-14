import { useContext, useEffect, useState } from 'react';

import { getResults } from '../api/searchResults';

// import AppointmentRefine from '../components/AppointmentRefine';
import ResultList from '../components/ResultList';
import SearchContext from '../containers/SearchContext';

export default function SearchResults() {
  const { searchParams } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const centerId = searchParams.center.id;
  const specialtyId = searchParams.specialty.id;
  console.log(centerId);
  console.log(specialtyId);
  console.log(error);

  async function loadResults() {
    try {
      const response = await getResults({ centerId, specialtyId });
      console.log(response);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
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
      <section id="resultsSection">
        <div className="container-fluid">
          <div className="container text-center">
            <div className="row align-items-start">
              <div className="p-0 m-2 col border">
                <div className="container px-4 text-center">
                  <ResultList list={data} />
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
