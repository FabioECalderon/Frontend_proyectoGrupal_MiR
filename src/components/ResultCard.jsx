export default function ResultCard() {
  return (
    <div className="row gx-5">
      <div className="p-1 col border">
        <div className="p-1">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16 "
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>

            <h4>Dr Felipe Perez</h4>
            <h5>Medicina general</h5>
          </div>
          <div>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Dirección
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Virtual
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <p>
              Avenida Siempreviva 742 <a href="#">Mapa</a>
            </p>
          </div>
        </div>
      </div>
      <div className="col border container-fluid">
        <div className="p-3">
          <table>
            <thead>
              <tr>
                <th scope="col">Miercoles</th>
                <th scope="col">Jueves</th>
                <th scope="col">Viernes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2 Ago</td>
                <td>3 Ago</td>
                <td>4 Ago</td>
              </tr>
            </tbody>
          </table>
          <div>
            <p>Próximo dia disponible 5 de Agosto, 10:00AM</p>

            <button type="button" className="btn btn-lg btn-light btn-sm">
              Ver horarios disponibles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
