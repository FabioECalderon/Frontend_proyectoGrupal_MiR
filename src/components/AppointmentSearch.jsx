import { NavLink } from 'react-router-dom';

export default function AppointmentSearch() {
  return (
    <div className="d-flex p-3 bg-white">
      <form>
        <div className="mb-3">
          <label className="form-label">Especialidad</label>
          <input
            type="text"
            className="form-control"
            placeholder="Especialidad (ej. pediatría)"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ubicación</label>
          <input
            type="text"
            size="40ch"
            className="form-control"
            placeholder="Ubicación (Centro médico)"
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className="mb-3 form-check d-flex align-items-center">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label ms-2">Consulta virtual</label>
          </div>

          <NavLink to="/searchResults" className="nav-link">
            <button
              type="button"
              className="btn btn-lg m-3 btn-primary text-white"
            >
              Buscar
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}
