export function Predmet() {
  return <h1>Ime predmeta</h1>;
}

// ime funkcije mora biti z veliko zacetnico
// export function izvajalec(props: { ime: string }) {
export function Izvajalec(props: { ime: string }) {
  return (
    <section>
      <h2>{props.ime}</h2>
    </section>
  );
}

export function Predmet2() {
  return (
    <>
      <h1>Ime predmeta</h1>
      {/* <izvajalec ime="Janez" />
      <izvajalec ime="Jernej" /> */}
      <Izvajalec ime="Janez" />
      <Izvajalec ime="Jernej" />
    </>
  );
}
