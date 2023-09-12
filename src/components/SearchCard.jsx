export default function SearchCard() {
  return (
    <div class="row gx-5">
      <div class="p-1 col border">
        <div class="p-1">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16 "
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>

            <h4>Dr Gustavo Morales</h4>
            <h5>Especialidad</h5>
          </div>
          <div>
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Dirección
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
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
            <p>
              Visita "Especialidad" <span> desde $ 100.000</span>
            </p>
          </div>
        </div>
      </div>
      <div class="col border container-fluid">
        <div class="p-3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Lunes</th>
                <th scope="col">Martes</th>
                <th scope="col">Miercoles</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>30 Junio</td>
                <td>1 Julio</td>
                <td>2 Julio</td>
              </tr>
            </tbody>
          </table>
          <div>
            <p>Próximo dia disponible 5 de Julio, 10:00AM</p>

            <button type="button" class="btn btn-lg btn-light btn-sm">
              Ver horarios disponibles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
