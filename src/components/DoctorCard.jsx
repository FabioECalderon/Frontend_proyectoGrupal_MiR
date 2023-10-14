import { useContext } from 'react';
import SearchContext from '../containers/SearchContext';

export default function DoctorCard({
  fullName = '',
  specialty = '',
  center = '',
  photo = '',
}) {
  const { searchParams, availableCenters, availableSpecialties } =
    useContext(SearchContext);

  const specialtyName = availableSpecialties.filter(
    (item) => item.id === specialty,
  )[0].name;

  const centerName = availableCenters.filter((item) => item.id === center)[0]
    .centerName;

  return (
    <div className="row gx-5">
      <div className="p-1 col border">
        <div className="p-1">
          <div>
            <img src="https://placehold.co/80x80" className="rounded-circle" />

            <h4>Dr {fullName}</h4>
            <h5>{specialtyName}</h5>
          </div>
          <div>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Ubicación
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
            <p>{centerName}</p>
          </div>
        </div>
      </div>
      <div className="col border container-fluid">
        <div className="p-3">
          <table>
            <thead>
              <tr>
                <th scope="col">{searchParams.date}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div>
            <button type="button" className="btn btn-lg btn-light btn-sm">
              Ver horarios disponibles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
