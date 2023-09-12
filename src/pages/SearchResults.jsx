import AppointmentSearch from '../components/AppointmentSearch';
import ResultCard from '../components/ResultCard';
import ResultList from '../components/ResultList';

export default function SearchResults() {
  return (
    <>
      <section id="" className="d-flex justify-content-center">
        <div className="d-flex flex-wrap">
          <div className="p-3 me-lg-5">
            <h1>Refina tu búsqueda</h1>
          </div>
          <AppointmentSearch />
        </div>
      </section>
      <section id="resultsSection">
        <div className="container-fluid">
          <div className="container text-center">
            <div className="row align-items-start">
              <div className="p-0 m-2 col border">
                <div className="container px-4 text-center">
                  <ResultCard />
                  <ResultCard />
                  <ResultCard />
                  <ResultCard />
                </div>
              </div>
              <div className="col">
                <img
                  src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2013/10/google-maps-new-interface.jpg?fit=950%2C534&quality=50&strip=all&ssl=1"
                  className="img-fluid"
                  alt="GoogleMaps API"
                  width="300px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
