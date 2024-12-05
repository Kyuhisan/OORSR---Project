import React from "react";

export function Demo(): JSX.Element {
  // Najprej se izpise začetni state, ki je v oklepaju torej 0
  const [counter, setCounter] = React.useState(0);
  let stevec = 0;
  let ime = "Komponenta App";

  // Ob kliku pa se začetni vrednosti prišteje 1
  const handleClick = () => {
    stevec = stevec + 1;
    ime = `Komponenta App je bila klicana ${stevec}-krat`;
    const nextCounter = counter + 1;
    setCounter(nextCounter);
  };

  return (
    <div>
      <h1>{ime}</h1>
      <p>Komponento smo ponovno izrisali: {counter}-krat</p>
      <button onClick={handleClick}>Rerender</button>
    </div>
  );
}
