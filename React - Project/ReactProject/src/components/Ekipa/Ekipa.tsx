import Igralec, { IIgralecProps } from "../Oseba/Igralec";
import Funkcionar, { IFunkcionarProps } from "../Oseba/Funkcionar";
import { setDirektor, setTrener } from "../Oseba/Funkcionar";
import { setIgralec } from "../Oseba/Igralec";
import Info from "../Conditionals/Info";
import Opozorilo from "../Conditionals/Opozorilo";

interface IEkipaProps {
  ime: string;
  letoUstanovitve: number;
  direktor: IFunkcionarProps;
  trener: IFunkcionarProps;
  igralci: IIgralecProps[];
}

export const setEkipa = (
  <Ekipa
    ime="Olimpija"
    letoUstanovitve={1977}
    direktor={setDirektor}
    trener={setTrener}
    // igralci={[]}
    igralci={[setIgralec, setIgralec, setIgralec, setIgralec, setIgralec]}
    // igralci={[
    //   setIgralec,
    //   setIgralec,
    //   setIgralec,
    //   setIgralec,
    //   setIgralec,
    //   setIgralec,
    //   setIgralec,
    //   setIgralec,
    //   setIgralec,
    //   setIgralec,
    //   setIgralec,
    //   setIgralec,
    // ]}
  />
);

export function DisplayEkipa() {
  return (
    <>
      <h4> Podatki o ekipi:</h4>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Ime Ekipe</th>
            <th scope="col">Leto Ustanovitve</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{setEkipa.props.ime}</td>
            <td>{setEkipa.props.letoUstanovitve}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export function DisplayDirektor() {
  return (
    <>
      <h5> Direktor:</h5>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ime</th>
            <th scope="col">Priimek</th>
            <th scope="col">Vloga</th>
            <th scope="col">Veljavnost</th>
            <th scope="col">Leto Rojstva</th>
            <th scope="col">Kraj Rojstva</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{setEkipa.props.direktor.id}</td>
            <td>{setEkipa.props.direktor.ime}</td>
            <td>{setEkipa.props.direktor.priimek}</td>
            <td>{setEkipa.props.direktor.vloga}</td>
            <td>{setEkipa.props.direktor.veljavnost}</td>
            <td>{setEkipa.props.direktor.letoRojstva}</td>
            <td>{setEkipa.props.direktor.krajRojstva}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export function DisplayTrener() {
  return (
    <>
      <h5> Trener:</h5>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ime</th>
            <th scope="col">Priimek</th>
            <th scope="col">Vloga</th>
            <th scope="col">Veljavnost</th>
            <th scope="col">Leto Rojstva</th>
            <th scope="col">Kraj Rojstva</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{setEkipa.props.trener.id}</td>
            <td>{setEkipa.props.trener.ime}</td>
            <td>{setEkipa.props.trener.priimek}</td>
            <td>{setEkipa.props.trener.vloga}</td>
            <td>{setEkipa.props.trener.veljavnost}</td>
            <td>{setEkipa.props.trener.letoRojstva}</td>
            <td>{setEkipa.props.trener.krajRojstva}</td>
          </tr>
        </tbody>
      </table>
      {/* <ul>
        {Object.entries(setEkipa.props.trener).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {String(value)}
          </li>
        ))}
      </ul> */}
    </>
  );
}

export function DisplayIgralci() {
  return (
    <>
      <h5>Igralci:</h5>
      <Opozorilo />
      <Info />

      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ime</th>
            <th scope="col">Priimek</th>
            <th scope="col">Teza</th>
            <th scope="col">Visina</th>
            <th scope="col">Leto Rojstva</th>
            <th scope="col">Poskodba</th>
          </tr>
        </thead>
        <tbody>
          {setEkipa.props.igralci.map((item: IIgralecProps, index: number) => (
            <tr key={item.id || index}>
              <td>{item.id}</td>
              <td>{item.ime}</td>
              <td>{item.priimek}</td>
              <td>{item.teza}</td>
              <td>{item.visina}</td>
              <td>{item.letoRojstva}</td>
              <td>{String(item.poskodovan)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function Ekipa(props: IEkipaProps) {
  return (
    <div>
      {props.ime} {props.letoUstanovitve} <Funkcionar {...props.direktor} />{" "}
      <Funkcionar {...props.trener} />{" "}
      <Igralec
        visina={0}
        teza={0}
        poskodovan={false}
        id={0}
        ime={""}
        priimek={""}
        letoRojstva={0}
        {...props.igralci}
      />
    </div>
  );
}

export default Ekipa;
