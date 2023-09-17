import AppointmentSearch from '../components/AppointmentSearch';

export default function Home() {
  return (
    <>
      <section id="search" className="d-flex justify-content-center">
        <div className="d-flex flex-wrap m-5" id="searchForm">
          <div className="p-3 me-lg-5">
            <h1>Encuentra tu cita</h1>
          </div>
          <AppointmentSearch />
        </div>
      </section>

      <section id="mostSearched" className="p-5">
        <div className="container lg-col-6 d-flex flex-column align-items-start">
          <div>
            <h3>Especialidades más buscadas</h3>
          </div>
          <div className="container md-col-8 d-flex flex-wrap justify-content-around border border-black">
            <button
              type="button"
              className="btn btn-lg m-3 py-4 btn-secondary text-white"
            >
              Medicina general
            </button>
            <button
              type="button"
              className="btn btn-lg m-3 py-4 btn-primary text-white"
            >
              Pediatría
            </button>
            <button
              type="button"
              className="btn btn-lg m-3 py-4 btn-secondary text-white"
            >
              Nutrición
            </button>
          </div>
        </div>
      </section>

      <section id="newDoctors" className="p-5">
        <div className="container md-col-8 d-flex flex-column align-items-start">
          <div>
            <h3>Nuevos profesionales</h3>
          </div>
          <div className="container lg-col-8 d-flex flex-wrap justify-content-around border border-black">
            <div className="m-3 d-flex flex-column">
              <img src="https://placehold.co/180x120" />
              <div>
                <span>Nombre </span> - <span> Especialidad</span>
              </div>
            </div>
            <div className="m-3 d-flex flex-column">
              <img src="https://placehold.co/180x120" />
              <div>
                <span>Nombre </span> - <span> Especialidad</span>
              </div>
            </div>
            <div className="m-3 d-flex flex-column">
              <img src="https://placehold.co/180x120" />
              <div>
                <span>Nombre </span> - <span> Especialidad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faqs" className="p-5">
        <div className="container md-col-8 d-flex flex-wrap justify-content-between">
          <div className="d-flex flex-column justify-content-center">
            <h3>Preguntas frecuentes</h3>
            <h5 className="py-2">
              Podrás resolver, todas tus dudas en materia de salud.
            </h5>
            <ul>
              <li>Recibirás una respuesta fiable y de calidad</li>
              <li>Tu duda será resuelta en 48 horas</li>
              <li>Y, por supuesto, de forma gratuita</li>
            </ul>
          </div>
          <div className="px-md-5">
            <img src="assets/faqs.png" alt="Faqs" />
          </div>
        </div>
      </section>

      <section id="features" className="p-5">
        <div className="container md-col-8 d-flex flex-wrap">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card text-center h-100">
                <i className="bi bi-star fs-1 text-primary"></i>
                <div className="card-body">
                  <h5 className="card-title">Encuentra a tu médico</h5>
                  <p className="card-text">
                    Selecciona el especialista y ubicación.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-center h-100">
                <i className="bi bi-clock fs-1 text-primary"></i>
                <div className="card-body">
                  <h5 className="card-title">Elije el horario</h5>
                  <p className="card-text">
                    Selecciona fecha y hora y agenda tu cita en el horario que
                    mas te convenga.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-center h-100">
                <i className="bi bi-flag fs-1 text-primary"></i>
                <div className="card-body">
                  <h5 className="card-title">Confirmación y pago</h5>
                  <p className="card-text">
                    Confirma la cita en un minuto y realiza el pago desde la
                    plataforma.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="p-5 container md-col-8">
        <div id="carouselReviews" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card text-center h-100">
                <div className="card-body d-flex flex-column align-items-center review-card">
                  <p className="card-text w-50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quam velit, vulputate eu pharetra nec, mattis ac
                    neque.
                  </p>
                  <img
                    src="https://placehold.co/80x80"
                    className="rounded-circle"
                  />
                  <h5 className="py-2">Faustino Asprilla - Usuario</h5>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card text-center h-100">
                <div className="card-body d-flex flex-column align-items-center review-card">
                  <p className="card-text w-50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quam velit, vulputate eu pharetra nec, mattis ac
                    neque. Duis vulputate commodo lectus, ac blandit elit
                    tincidunt id.
                  </p>
                  <img
                    src="https://placehold.co/80x80"
                    className="rounded-circle"
                  />
                  <h5 className="py-2">Carlos Valderrama- Médico general</h5>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card text-center h-100">
                <div className="card-body d-flex flex-column align-items-center review-card">
                  <p className="card-text w-50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quam velit, vulputate eu pharetra nec, mattis ac
                    neque. Duis vulputate commodo lectus, ac blandit elit
                    tincidunt id.
                  </p>
                  <img
                    src="https://placehold.co/80x80"
                    className="rounded-circle"
                  />

                  <h5 className="py-2">Leonel Alvarez - Usuario</h5>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselReviews"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselReviews"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section id="contact" className="d-flex justify-content-center">
        <div
          className="d-flex flex-column p-5 align-items-center"
          id="contactForm"
        >
          <div className="p-3">
            <h3>Mantente actualizado</h3>
            <p>
              Suscribete a nuestro boletín mensual con actualizaciones del
              sitio.
            </p>
          </div>
          <form>
            <div className="d-flex flex-wrap gap-3 p-3 align-items-center">
              <div>
                <input
                  type="text"
                  size="25ch"
                  className="form-control"
                  placeholder="Correo electrónico"
                />
              </div>
              <div>
                <input
                  type="text"
                  size="25ch"
                  className="form-control"
                  placeholder="Nombre completo"
                />
              </div>
              <div>
                <button type="button" className="btn search-2">
                  Suscribete
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
