import React from "react";

import Ekipa, {
  DisplayDirektor,
  DisplayIgralci,
  DisplayTrener,
  DisplayEkipa,
  getEkipa,
  seznamEkip,
  IEkipaProps,
} from "../Ekipa/Ekipa";
import { Link } from "react-router-dom";

function Telo() {
  const [seznamIgralcev, setIgralci] = React.useState({});

  const getIgralci: () => void = () => {
    const igralci = getEkipa.props.igralci;
    setIgralci(igralci);
  };

  React.useEffect(() => {
    getIgralci();
  });

  const ekipe = seznamEkip;

  return (
    <div className="container">
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Ime Ekipe</th>
            <th scope="col">Leto Ustanovitve</th>
          </tr>
        </thead>
        <tbody>
          {ekipe.map((item: IEkipaProps, index: number) => (
            <tr key={index}>
              <td>
                <Link to={`/ekipa/${index}`} className="no-style">
                  {item.ime}
                </Link>
              </td>
              <td>
                <Link to={`/ekipa/${index}`} className="no-style">
                  {item.letoUstanovitve}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div>{JSON.stringify(seznamIgralcev)}</div> */}
      {/* <DisplayEkipa />
      <DisplayDirektor />
      <DisplayTrener />
      <DisplayIgralci /> */}
    </div>
  );
}

export default Telo;
